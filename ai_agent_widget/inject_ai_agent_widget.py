#!/usr/bin/env python3
"""Inject the AI agent widget into built MyST/Jupyter Book HTML pages."""

from __future__ import annotations

import shutil
from pathlib import Path


BOOK_ROOT = Path(__file__).resolve().parents[1]
WIDGET_ROOT = Path(__file__).resolve().parent
BUILD_HTML = BOOK_ROOT / "_build" / "html"
BUILD_WIDGET = BUILD_HTML / "ai_agent_widget"
START_MARKER = "<!-- MLE AI Agent Widget: start -->"
END_MARKER = "<!-- MLE AI Agent Widget: end -->"
ASSET_VERSION = "20260914-01"


def relative_asset_prefix(html_file: Path) -> str:
    rel = html_file.parent.relative_to(BUILD_HTML)
    if str(rel) == ".":
        return "ai_agent_widget"
    depth = len(rel.parts)
    return "/".join([".."] * depth + ["ai_agent_widget"])


def strip_existing_block(html: str) -> str:
    while True:
        start = html.find(START_MARKER)
        end = html.find(END_MARKER, start + len(START_MARKER))
        if start == -1 or end == -1:
            return html
        html = html[:start] + html[end + len(END_MARKER) :]


def inject_html(html_file: Path) -> None:
    html = html_file.read_text(encoding="utf-8")
    html = strip_existing_block(html)
    prefix = relative_asset_prefix(html_file)
    head_block = (
        f"{START_MARKER}\n"
        f'<link rel="stylesheet" href="{prefix}/ai_agent_widget.css?v={ASSET_VERSION}" data-mle-agent-widget="style">\n'
        f"{END_MARKER}"
    )
    body_block = (
        f"{START_MARKER}\n"
        f'<script src="{prefix}/ai_agent_widget.js?v={ASSET_VERSION}"></script>\n'
        f"{END_MARKER}"
    )

    if "</head>" in html:
        html = html.replace("</head>", f"{head_block}\n</head>", 1)
    else:
        html = f"{head_block}\n{html}"

    if "</body>" in html:
        html = html.replace("</body>", f"{body_block}\n</body>", 1)
    else:
        html = f"{html}\n{body_block}"

    html_file.write_text(html, encoding="utf-8")


def copy_assets() -> None:
    BUILD_WIDGET.mkdir(parents=True, exist_ok=True)
    for name in ["ai_agent_widget.css", "ai_agent_widget.js"]:
        shutil.copy2(WIDGET_ROOT / name, BUILD_WIDGET / name)


def main() -> None:
    if not BUILD_HTML.exists():
        raise SystemExit(f"Build directory not found: {BUILD_HTML}")

    copy_assets()
    html_files = [
        path
        for path in BUILD_HTML.rglob("*.html")
        if "ai_agent_widget" not in path.parts
    ]
    for html_file in html_files:
        inject_html(html_file)

    print(f"Injected AI agent widget into {len(html_files)} HTML files.")


if __name__ == "__main__":
    main()
