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

## Maintenance TODO

When updating or rebuilding the book, keep this folder and the Makefile injection
step together. If the book theme changes, re-run `make web` and verify that the
widget still appears on built pages and can call the backend.
