(function () {
  if (window.MLE_AI_AGENT_WIDGET_LOADED) {
    return;
  }
  window.MLE_AI_AGENT_WIDGET_LOADED = true;

  function defaultApiBase() {
    if (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") {
      return "http://127.0.0.1:5055";
    }
    return window.location.origin;
  }

  const API_BASE = (window.MLE_AI_AGENT_API_BASE || defaultApiBase()).replace(/\/$/, "");
  const MEMORY_KEY = "mle4217_chat_short_memory";
  const OPEN_KEY = "mle4217_chat_widget_open";
  const MAX_MEMORY_ITEMS = 6;
  const DEFAULT_PROVIDER = window.MLE_AI_AGENT_PROVIDER || "";
  const DEFAULT_MODEL = window.MLE_AI_AGENT_MODEL || "";
  const SCRIPT_URL = document.currentScript ? document.currentScript.src : "";
  const ASSET_BASE = SCRIPT_URL ? new URL(".", SCRIPT_URL).href : "ai_agent_widget/";

  function ensureStylesheet() {
    if (document.querySelector('link[data-mle-agent-widget="style"]')) {
      return;
    }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${ASSET_BASE}ai_agent_widget.css`;
    link.setAttribute("data-mle-agent-widget", "style");
    document.head.appendChild(link);
  }

  function readMemory() {
    try {
      return JSON.parse(sessionStorage.getItem(MEMORY_KEY) || "[]");
    } catch {
      return [];
    }
  }

  function writeMemory(memory) {
    sessionStorage.setItem(MEMORY_KEY, JSON.stringify(memory.slice(-MAX_MEMORY_ITEMS)));
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
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

  function linkCoursePaths(html) {
    const coursePathPattern = /\b[a-zA-Z0-9_.-]+(?:\/[a-zA-Z0-9_.-]+)+\.(?:md|ipynb)\b/g;
    return html.replace(coursePathPattern, (path) => {
      const href = coursePathToHref(path);
      return `<a class="mle-agent-source-link" href="${href}" data-course-path="${path}">${path}</a>`;
    });
  }

  function renderInlineMarkdown(text) {
    let html = escapeHtml(text);
    html = linkCoursePaths(html);
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
    return html.replace(/\n/g, "<br>");
  }

  function renderTextBlocks(text) {
    const blocks = [];
    const lines = text.split(/\r?\n/);
    let paragraph = [];
    let listItems = [];

    function flushParagraph() {
      if (!paragraph.length) return;
      blocks.push(`<p>${renderInlineMarkdown(paragraph.join("\n").trim())}</p>`);
      paragraph = [];
    }

    function flushList() {
      if (!listItems.length) return;
      blocks.push(`<ul>${listItems.map((item) => `<li>${renderInlineMarkdown(item)}</li>`).join("")}</ul>`);
      listItems = [];
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

      const bullet = line.match(/^[-*]\s+(.+)$/);
      if (bullet) {
        flushParagraph();
        listItems.push(bullet[1]);
        continue;
      }

      flushList();
      paragraph.push(line);
    }

    flushParagraph();
    flushList();
    return blocks.join("");
  }

  function renderAssistantMarkdown(text) {
    const pieces = [];
    const codeBlockPattern = /```([a-zA-Z0-9_-]+)?\n?([\s\S]*?)```/g;
    let cursor = 0;
    let match;
    while ((match = codeBlockPattern.exec(text)) !== null) {
      if (match.index > cursor) {
        pieces.push(renderTextBlocks(text.slice(cursor, match.index).trim()));
      }
      const language = match[1] ? ` data-language="${escapeHtml(match[1])}"` : "";
      pieces.push(`<pre class="mle-agent-code"${language}><code>${escapeHtml(match[2].trim())}</code></pre>`);
      cursor = match.index + match[0].length;
    }
    if (cursor < text.length) {
      pieces.push(renderTextBlocks(text.slice(cursor).trim()));
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
        <button class="mle-agent-close" type="button" aria-label="Close chat">x</button>
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
    const messages = widget.querySelector('[data-role="messages"]');
    const form = widget.querySelector('[data-role="form"]');
    const queryInput = widget.querySelector('[data-role="query"]');

    function openWidget() {
      widget.hidden = false;
      launcher.setAttribute("aria-expanded", "true");
      sessionStorage.setItem(OPEN_KEY, "true");
      queryInput.focus();
    }

    function closeWidget() {
      widget.hidden = true;
      launcher.setAttribute("aria-expanded", "false");
      sessionStorage.setItem(OPEN_KEY, "false");
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
          addMessage(messages, item.role, item.content);
        }
      }
    }

    async function ask(query) {
      const requestBody = {
        query,
        short_memory: readMemory(),
      };
      if (DEFAULT_PROVIDER) requestBody.provider = DEFAULT_PROVIDER;
      if (DEFAULT_MODEL) requestBody.model = DEFAULT_MODEL;

      const response = await fetch(`${API_BASE}/api/answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        throw new Error(payload.message || payload.error || "Request failed");
      }
      return payload;
    }

    launcher.addEventListener("click", () => {
      if (widget.hidden) openWidget();
      else closeWidget();
    });
    closeButton.addEventListener("click", closeWidget);
    messages.addEventListener("click", (event) => {
      const link = event.target.closest("a[data-course-path]");
      if (!link) return;
      sessionStorage.setItem(OPEN_KEY, "true");
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

      queryInput.value = "";
      form.querySelector("button").disabled = true;
      addMessage(messages, "user", query);
      const pending = addMessage(messages, "assistant", "Thinking...", "", "pending");

      try {
        const result = await ask(query);
        pending.remove();
        addMessage(messages, "assistant", result.answer);

        const memory = readMemory();
        memory.push({ role: "user", content: query });
        memory.push({ role: "assistant", content: result.answer });
        writeMemory(memory);
      } catch (error) {
        pending.remove();
        addMessage(messages, "assistant", error.message, "Request error", "error");
      } finally {
        form.querySelector("button").disabled = false;
        queryInput.focus();
      }
    });

    restoreMessages();
    if (sessionStorage.getItem(OPEN_KEY) === "true") {
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
