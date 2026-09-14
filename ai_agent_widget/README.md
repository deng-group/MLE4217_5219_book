# Course Helper Widget

This folder contains the course-page helper widget for MLE4217/5219.

It is intentionally isolated from the course chapters. The widget is injected into
the built HTML pages after the MyST/Jupyter Book build completes.

## Files

- `ai_agent_widget.css`: floating chat widget styles.
- `ai_agent_widget.js`: floating chat widget behavior.
- `inject_ai_agent_widget.py`: post-build injector for `_build/html/**/*.html`.

## Build Workflow

Run the normal book build:

```bash
make web
```

The Makefile runs the MyST/Jupyter Book build and then injects this widget into
the generated HTML.

The widget waits until after the MyST/React page has hydrated before mounting.
Its JavaScript also re-adds its stylesheet at runtime, because the book theme may
rewrite generated `<head>` content during hydration.

## Backend Requirement

The widget expects the RAG backend to be running separately. By default it calls:

```text
http://127.0.0.1:5055/api/answer
```

To change this later, set `window.MLE_AI_AGENT_API_BASE` before loading
`ai_agent_widget.js`.

Provider and model settings are intentionally not exposed in the student-facing
interface. By default, the widget lets the backend choose its configured
provider/model. To force a provider or model for a deployment, set page-level
globals before the widget script loads.

The widget reads `/api/answer/stream` incrementally. It updates the same answer
bubble and the elapsed-time label while the model is generating.

## Local Test in the Real Course Site

From the sibling `mle4217_5219_AIdesk` repository, run:

```bash
python scripts/start_course_widget_test.py
```

This refreshes the widget assets in the existing built course site, starts the
RAG backend and a local course-site server, and opens an actual course page. Use
`--build` when the course content itself also needs rebuilding. Press `Ctrl+C`
in the terminal to stop the test services.

## Maintenance TODO

When updating or rebuilding the book, keep this folder and the Makefile injection
step together. If the book theme changes, re-run `make web` and verify that the
widget still appears on built pages and can call the backend.

## Temporary Friend Preview

To combine the built course site and the local API behind one temporary port,
start the preview gateway with a one-time access code:

```bash
SHARE_ACCESS_CODE='replace-with-a-random-code' \
  ./.venv/bin/python ai_agent_widget/share_gateway.py
```

Then expose only the gateway:

```bash
cloudflared tunnel --url http://127.0.0.1:8080
```

Send the friend a complete URL containing the code once, for example:

```text
https://random.trycloudflare.com/high-throughput/thermodynamics/?code=replace-with-a-random-code
```

The gateway stores the accepted code in a secure, HTTP-only session cookie and
removes it from the visible URL. Stop both processes immediately after testing.
