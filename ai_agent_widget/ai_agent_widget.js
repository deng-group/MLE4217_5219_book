(function () {
  const WIDGET_VERSION = "20260914-01";

  if (window.MLE_AI_AGENT_WIDGET_VERSION === WIDGET_VERSION) {
    return;
  }

  document.querySelectorAll(".mle-agent-launcher, .mle-agent-widget").forEach((node) => node.remove());

  window.MLE_AI_AGENT_WIDGET_LOADED = true;
  window.MLE_AI_AGENT_WIDGET_VERSION = WIDGET_VERSION;

  function defaultApiBase() {
    if (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") {
      return "http://127.0.0.1:5055";
    }
    return window.location.origin;
  }

  const API_BASE = (window.MLE_AI_AGENT_API_BASE || defaultApiBase()).replace(/\/$/, "");
  const MEMORY_KEY = "mle4217_chat_short_memory_v2";
  const OPEN_KEY = "mle4217_chat_widget_open_v2";
  const LEGACY_STORAGE_KEYS = ["mle4217_chat_short_memory", "mle4217_chat_widget_open"];
  const MAX_MEMORY_ITEMS = 6;
  const DEFAULT_PROVIDER = window.MLE_AI_AGENT_PROVIDER || "";
  const DEFAULT_MODEL = window.MLE_AI_AGENT_MODEL || "";
  const SCRIPT_URL = document.currentScript ? document.currentScript.src : "";
  const ASSET_BASE = SCRIPT_URL ? new URL(".", SCRIPT_URL).href : "ai_agent_widget/";
  const COURSE_PATH_PATTERN = "([a-zA-Z0-9_.-]+(?:/[a-zA-Z0-9_.-]+)+\\.(?:md|ipynb))";
  const WRAPPED_COURSE_PATH_PATTERN = `\`?\\s*\\[?\\s*${COURSE_PATH_PATTERN}\\s*\\]?\\s*\`?`;

  function removePersistentConversation() {
    localStorage.removeItem(MEMORY_KEY);
    localStorage.removeItem(OPEN_KEY);
    for (const key of LEGACY_STORAGE_KEYS) {
      localStorage.removeItem(key);
    }
  }

  function ensureStylesheet() {
    let hasCurrentStylesheet = false;
    document.querySelectorAll('link[href*="ai_agent_widget.css"]').forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href.includes(`v=${WIDGET_VERSION}`)) {
        link.setAttribute("data-mle-agent-widget", "style");
        hasCurrentStylesheet = true;
      } else {
        link.remove();
      }
    });

    if (hasCurrentStylesheet) {
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${ASSET_BASE}ai_agent_widget.css?v=${WIDGET_VERSION}`;
    link.setAttribute("data-mle-agent-widget", "style");
    document.head.appendChild(link);
  }

  function readMemory() {
    removePersistentConversation();
    try {
      const stored = sessionStorage.getItem(MEMORY_KEY) || "[]";
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }

  function writeMemory(memory) {
    const serialized = JSON.stringify(memory.slice(-MAX_MEMORY_ITEMS));
    sessionStorage.setItem(MEMORY_KEY, serialized);
  }

  function readOpenState() {
    removePersistentConversation();
    return sessionStorage.getItem(OPEN_KEY);
  }

  function writeOpenState(value) {
    sessionStorage.setItem(OPEN_KEY, value);
  }

  function removeStoredConversation() {
    localStorage.removeItem(MEMORY_KEY);
    localStorage.removeItem(OPEN_KEY);
    sessionStorage.removeItem(MEMORY_KEY);
    sessionStorage.removeItem(OPEN_KEY);
    for (const key of LEGACY_STORAGE_KEYS) {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    }
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeRegExp(text) {
    return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function formatDuration(milliseconds) {
    const seconds = milliseconds / 1000;
    if (seconds < 10) return `${seconds.toFixed(1)} s`;
    return `${Math.round(seconds)} s`;
  }

  function coursePathToHref(path) {
    const cleanPath = path.replace(/^\/+/, "").replace(/\.(md|ipynb)$/i, "");
    const parts = cleanPath.split("/").filter(Boolean);
    if (parts.length === 0) {
      return "/";
    }
    const routeParts = parts.map((part) => part.replace(/_/g, "-").toLowerCase());
    if (routeParts[routeParts.length - 1] === "index") {
      routeParts.pop();
    }
    return `/${routeParts.join("/")}`;
  }

  function linkBareCoursePaths(html) {
    const coursePathPattern = /\b[a-zA-Z0-9_.-]+(?:\/[a-zA-Z0-9_.-]+)+\.(?:md|ipynb)\b/g;
    return html
      .split(/(<[^>]+>)/g)
      .map((part) => {
        if (part.startsWith("<")) return part;
        return part.replace(coursePathPattern, (path) => {
          const href = coursePathToHref(path);
          return `<a class="mle-agent-source-link" href="${href}" data-course-path="${path}">${path}</a>`;
        });
      })
      .join("");
  }

  function renderMarkdownLinks(html) {
    return html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_match, label, href) => {
      if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(href)) {
        return `<a class="mle-agent-source-link" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
      }
      if (/\.(md|ipynb)$/i.test(href)) {
        return `<a class="mle-agent-title-link" href="${coursePathToHref(href)}" data-course-path="${href}">${label}</a>`;
      }
      return `<a class="mle-agent-source-link" href="${href}">${label}</a>`;
    });
  }

  function normalizeSourceCitations(text, sources) {
    let normalized = String(text);
    const orderedSources = [...(sources || [])].sort((a, b) => {
      return String(b.title || "").length - String(a.title || "").length;
    });

    for (const source of orderedSources) {
      const title = String(source.title || "").trim();
      const path = String(source.file_path || "").trim();
      if (!title || !path) continue;

      const titlePattern = escapeRegExp(title);
      const escapedPathPattern = escapeRegExp(path);
      const wrappedPathPattern = `\`?\\s*\\[?\\s*${escapedPathPattern}\\s*\\]?\\s*\`?`;
      const replacement = `[${title}](${path})`;

      normalized = normalized.replace(
        new RegExp(`\\*\\*${titlePattern}\\*\\*\\s*\\(\\s*${wrappedPathPattern}\\s*\\)`, "g"),
        replacement,
      );
      normalized = normalized.replace(
        new RegExp(`${titlePattern}\\s*\\(\\s*${wrappedPathPattern}\\s*\\)`, "g"),
        replacement,
      );
    }

    return normalizeCourseCitations(normalized);
  }

  function normalizeCourseCitations(text) {
    const boldPattern = new RegExp(`\\*\\*([^*\\n]+)\\*\\*\\s*\\(\\s*${WRAPPED_COURSE_PATH_PATTERN}\\s*\\)`, "g");
    const plainPattern = new RegExp(`(\\s(?:and|or|in|from|see|source|sources)\\s+)([^()[\\]\\n]{2,100}?)\\s*\\(\\s*${WRAPPED_COURSE_PATH_PATTERN}\\s*\\)`, "g");

    return String(text)
      .replace(boldPattern, (_match, title, path) => `[${title.trim()}](${path})`)
      .replace(plainPattern, (_match, prefix, title, path) => `${prefix}[${title.trim()}](${path})`);
  }

  function renderInlineMarkdown(text) {
    let html = escapeHtml(normalizeCourseCitations(text));
    html = renderMarkdownLinks(html);
    html = linkBareCoursePaths(html);
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
    return html.replace(/\n/g, "<br>");
  }

  function renderTextBlocks(text) {
    const blocks = [];
    const lines = text.split(/\r?\n/);
    let paragraph = [];
    let listItems = [];
    let listType = null;
    let listStart = null;

    function flushParagraph() {
      if (!paragraph.length) return;
      blocks.push(`<p>${renderInlineMarkdown(paragraph.join("\n").trim())}</p>`);
      paragraph = [];
    }

    function flushList() {
      if (!listItems.length) return;
      const tag = listType === "ol" ? "ol" : "ul";
      const start = tag === "ol" && listStart ? ` start="${listStart}"` : "";
      const items = listItems
        .map((item) => {
          const children = item.children.length
            ? `<ul>${item.children.map((child) => `<li>${renderInlineMarkdown(child)}</li>`).join("")}</ul>`
            : "";
          return `<li>${renderInlineMarkdown(item.text)}${children}</li>`;
        })
        .join("");
      blocks.push(`<${tag}${start}>${items}</${tag}>`);
      listItems = [];
      listType = null;
      listStart = null;
    }

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line) {
        flushParagraph();
        flushList();
        continue;
      }

      const heading = line.match(/^(#{2,4})\s+(.+)$/);
      if (heading) {
        flushParagraph();
        flushList();
        const level = Math.min(heading[1].length, 4);
        blocks.push(`<h${level}>${renderInlineMarkdown(heading[2])}</h${level}>`);
        continue;
      }

      const bullet = rawLine.match(/^(\s*)[-*]\s+(.+)$/);
      if (bullet) {
        if (listType === "ol" && listItems.length && bullet[1].length > 0) {
          listItems[listItems.length - 1].children.push(bullet[2]);
          continue;
        }
        flushParagraph();
        if (listType && listType !== "ul") flushList();
        listType = "ul";
        listItems.push({ text: bullet[2], children: [] });
        continue;
      }

      const ordered = rawLine.match(/^\s*(\d+)[.)]\s+(.+)$/);
      if (ordered) {
        flushParagraph();
        if (listType && listType !== "ol") flushList();
        listType = "ol";
        if (!listStart) listStart = Number(ordered[1]);
        listItems.push({ text: ordered[2], children: [] });
        continue;
      }

      flushList();
      paragraph.push(line);
    }

    flushParagraph();
    flushList();
    return blocks.join("");
  }

  function normalizeAnswerLayout(text) {
    const normalized = normalizeCourseCitations(text);
    if (/\n\s*\n/.test(normalized)) {
      return normalized;
    }

    return normalized.replace(
      /^(You can find this in [\s\S]*?\]\([^)]+\)(?:[\s,]*(?:and|,)\s*[\s\S]*?\]\([^)]+\))*\.)\s+/,
      "$1\n\n",
    );
  }

  function renderAssistantMarkdown(text) {
    const pieces = [];
    const normalizedText = normalizeAnswerLayout(text);
    const codeBlockPattern = /```([a-zA-Z0-9_-]+)?\n?([\s\S]*?)```/g;
    let cursor = 0;
    let match;
    while ((match = codeBlockPattern.exec(normalizedText)) !== null) {
      if (match.index > cursor) {
        pieces.push(renderTextBlocks(normalizedText.slice(cursor, match.index).trim()));
      }
      const language = match[1] ? ` data-language="${escapeHtml(match[1])}"` : "";
      pieces.push(`<pre class="mle-agent-code"${language}><code>${escapeHtml(match[2].trim())}</code></pre>`);
      cursor = match.index + match[0].length;
    }
    if (cursor < normalizedText.length) {
      pieces.push(renderTextBlocks(normalizedText.slice(cursor).trim()));
    }
    return pieces.join("");
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function addMessage(messages, role, text, meta = "", kind = "") {
    const wrapper = el("article", `mle-agent-message ${role} ${kind}`.trim());
    const bubble = el("div", "mle-agent-bubble");
    if (role === "assistant") {
      bubble.innerHTML = renderAssistantMarkdown(text);
    } else {
      bubble.textContent = text;
    }
    wrapper.appendChild(bubble);
    if (meta) wrapper.appendChild(el("div", "mle-agent-meta", meta));
    messages.appendChild(wrapper);
    messages.scrollTop = messages.scrollHeight;
    return wrapper;
  }

  function updateAssistantMessage(messages, wrapper, text, meta = "", kind = "") {
    wrapper.className = `mle-agent-message assistant ${kind}`.trim();
    wrapper.querySelector(".mle-agent-bubble").innerHTML = renderAssistantMarkdown(text);
    let metaEl = wrapper.querySelector(".mle-agent-meta");
    if (meta) {
      if (!metaEl) {
        metaEl = el("div", "mle-agent-meta");
        wrapper.appendChild(metaEl);
      }
      metaEl.textContent = meta;
    } else if (metaEl) {
      metaEl.remove();
    }
    messages.scrollTop = messages.scrollHeight;
  }

  function createWidget() {
    if (document.querySelector(".mle-agent-launcher")) {
      return;
    }
    ensureStylesheet();

    const launcher = el("button", "mle-agent-launcher");
    launcher.type = "button";
    launcher.setAttribute("aria-expanded", "false");
    launcher.setAttribute("aria-label", "Open course helper");
    launcher.innerHTML = '<span aria-hidden="true">?</span>';

    const widget = el("section", "mle-agent-widget");
    widget.hidden = true;
    widget.setAttribute("aria-label", "Course helper");
    widget.innerHTML = `
      <header class="mle-agent-header">
        <div>
          <h2>Course Helper</h2>
          <p>Answers from course materials</p>
        </div>
        <div class="mle-agent-header-actions">
          <button class="mle-agent-reset" type="button" aria-label="Clear conversation">Clear</button>
          <button class="mle-agent-close" type="button" aria-label="Close chat">x</button>
        </div>
      </header>

      <div class="mle-agent-messages" data-role="messages" aria-live="polite"></div>

      <form class="mle-agent-composer" data-role="form">
        <textarea data-role="query" rows="2" placeholder="Ask a course question"></textarea>
        <button type="submit">Ask</button>
      </form>
    `;

    document.body.appendChild(launcher);
    document.body.appendChild(widget);

    const closeButton = widget.querySelector(".mle-agent-close");
    const resetButton = widget.querySelector(".mle-agent-reset");
    const messages = widget.querySelector('[data-role="messages"]');
    const form = widget.querySelector('[data-role="form"]');
    const queryInput = widget.querySelector('[data-role="query"]');

    function openWidget() {
      widget.hidden = false;
      launcher.setAttribute("aria-expanded", "true");
      writeOpenState("true");
      queryInput.focus();
    }

    function closeWidget() {
      widget.hidden = true;
      launcher.setAttribute("aria-expanded", "false");
      writeOpenState("false");
      launcher.focus();
    }

    function restoreMessages() {
      const memory = readMemory();
      if (!memory.length) {
        addMessage(messages, "assistant", "What would you like to review?", "Ready");
        return;
      }
      for (const item of memory) {
        if (item.role === "user" || item.role === "assistant") {
          addMessage(messages, item.role, item.content, item.meta || "");
        }
      }
    }

    function clearConversation() {
      removeStoredConversation();
      messages.innerHTML = "";
      addMessage(messages, "assistant", "What would you like to review?", "New conversation");
      queryInput.value = "";
      queryInput.focus();
    }

    async function ask(query, onEvent) {
      const requestBody = {
        query,
        short_memory: readMemory(),
      };
      if (DEFAULT_PROVIDER) requestBody.provider = DEFAULT_PROVIDER;
      if (DEFAULT_MODEL) requestBody.model = DEFAULT_MODEL;

      const response = await fetch(`${API_BASE}/api/answer/stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.message || payload.error || `Request failed (${response.status})`);
      }
      if (!response.body) {
        throw new Error("This browser cannot read streaming responses.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let finalEvent = null;

      function consumeLine(line) {
        if (!line.trim()) return;
        const eventPayload = JSON.parse(line);
        if (eventPayload.type === "error" || eventPayload.ok === false) {
          throw new Error(eventPayload.message || eventPayload.error || "Request failed");
        }
        onEvent(eventPayload);
        if (eventPayload.type === "done") finalEvent = eventPayload;
      }

      while (true) {
        const { value, done } = await reader.read();
        buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) consumeLine(line);
        if (done) break;
      }
      if (buffer.trim()) consumeLine(buffer);
      if (!finalEvent) throw new Error("The answer stream ended before completion.");
      return finalEvent;
    }

    launcher.addEventListener("click", () => {
      if (widget.hidden) openWidget();
      else closeWidget();
    });
    closeButton.addEventListener("click", closeWidget);
    resetButton.addEventListener("click", clearConversation);
    messages.addEventListener("click", (event) => {
      const link = event.target.closest("a[data-course-path]");
      if (!link) return;
      writeOpenState("true");
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !widget.hidden) closeWidget();
    });
    queryInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
        form.requestSubmit();
      }
    });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const query = queryInput.value.trim();
      if (!query) return;

      const startedAt = performance.now();
      queryInput.value = "";
      form.querySelector("button").disabled = true;
      addMessage(messages, "user", query);
      const pending = addMessage(messages, "assistant", "Thinking...", "Generating… 0.0 s", "pending");
      let streamedAnswer = "";
      let sources = [];
      const timer = window.setInterval(() => {
        const metaEl = pending.querySelector(".mle-agent-meta");
        if (metaEl) {
          metaEl.textContent = `Generating… ${formatDuration(performance.now() - startedAt)}`;
        }
      }, 200);

      try {
        const result = await ask(query, (streamEvent) => {
          if (streamEvent.type === "start") {
            sources = streamEvent.sources || [];
          } else if (streamEvent.type === "delta") {
            streamedAnswer += streamEvent.text || "";
            updateAssistantMessage(
              messages,
              pending,
              normalizeSourceCitations(streamedAnswer, sources),
              `Generating… ${formatDuration(performance.now() - startedAt)}`,
              "pending",
            );
          }
        });
        const answer = normalizeSourceCitations(result.answer, result.sources);
        const elapsedMeta = `Answered in ${formatDuration(performance.now() - startedAt)}`;
        updateAssistantMessage(messages, pending, answer, elapsedMeta);

        const memory = readMemory();
        memory.push({ role: "user", content: query });
        memory.push({ role: "assistant", content: answer, meta: elapsedMeta });
        writeMemory(memory);
      } catch (error) {
        const elapsedMeta = `Request error after ${formatDuration(performance.now() - startedAt)}`;
        const message = streamedAnswer
          ? `${normalizeSourceCitations(streamedAnswer, sources)}\n\n${error.message}`
          : error.message;
        updateAssistantMessage(messages, pending, message, elapsedMeta, "error");
      } finally {
        window.clearInterval(timer);
        form.querySelector("button").disabled = false;
        queryInput.focus();
      }
    });

    restoreMessages();
    if (readOpenState() === "true") {
      openWidget();
    }
  }

  function mountAfterBookHydration() {
    window.setTimeout(createWidget, 750);
  }

  if (document.readyState === "complete") {
    mountAfterBookHydration();
  } else {
    window.addEventListener("load", mountAfterBookHydration, { once: true });
  }
})();
