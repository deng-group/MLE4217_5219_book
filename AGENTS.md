# AGENTS.md

Guidance for coding agents working in the `MLE4217_5219_book` repository.

## Project Summary

This repository contains the Jupyter Book for **MLE4217/5219 Materials Informatics**. It mixes:

- MyST Markdown pages for lecture notes and review material
- Jupyter notebooks for practicals and demonstrations
- Shared figures and site configuration for the built course book

The repo is teaching-focused. Prioritize clarity, correctness, and student-facing readability over cleverness.

## Key Principles

- Preserve the course voice: concise, instructional, and accessible to students.
- Prefer small, targeted edits over broad rewrites.
- Keep content aligned with the existing book structure and naming style.
- Do not add unnecessary tooling, frameworks, or automation.
- When editing review pages, avoid revealing assessment coverage too explicitly unless the instructor asks for it.

## Environment Setup

This project uses `uv` and a local virtual environment.

Before running Python or Jupyter-related commands:

1. Check for `.venv/`
2. If missing, create it with `uv venv`
3. Activate it with:

```bash
source ./.venv/bin/activate
```

4. Install dependencies if needed:

```bash
uv pip install -e .
```

The minimum declared dependency is `jupyter-book>=2.1.0`, but existing notebooks may rely on additional packages already installed in the local environment.

## Common Commands

### Build

- `make`
- `make web`

Both build the HTML book with:

```bash
jupyter book build --html
```

### PDF build

- `make book`

This runs:

```bash
jupyter-book build --builder pdflatex .
```

### Clean

- `make clean`

Removes `_build/`.

### Serve

- `make serve`

Starts the Jupyter Book local server.

## Build Notes

- In this environment, `make web` may finish building content and still exit non-zero because the tool attempts to bind a local port afterward.
- Treat `_build/site/content/*.json` and other generated artifacts as evidence that the content build succeeded, even if the command ends with a local `EPERM` bind error.
- Do not “fix” unrelated build warnings unless the task asks for it.

## Repository Structure

Important top-level content currently includes:

```text
index.md
syllabus.md
calendar.md
myst.yml
Makefile
pyproject.toml
figures/
orientation/
programming/
computer/
database/
structures/
midterm_review/
models_and_theories_I/
models_and_theories_II/
optimization/
high_throughput/
machine_learning_I/
machine_learning_II/
machine_learning_potentials/
final_review/
```

Notes:

- `structures/` is the active structure chapter directory.
- `final_review/` is the active final review section.
- There may be unrelated user worktree changes; never revert them unless explicitly asked.

## Content Conventions

### Markdown / MyST

All `.md` files should use MyST-compatible syntax.

Use standard MyST admonitions:

````markdown
```{note}
Important note.
```

```{tip}
Helpful suggestion.
```

```{warning}
Important caution.
```
````

Use fenced code blocks with explicit languages:

````markdown
```python
import numpy as np
```
````

Use:

- inline math as `$...$`
- display math as `$$...$$`
- relative links for internal pages
- descriptive link text

Prefer simple Markdown tables unless a more complex structure is required.

### Jupyter notebooks

When editing notebooks:

- keep imports near the top
- ensure cells run top-to-bottom
- avoid hidden state assumptions
- keep outputs and examples educational, not overly optimized
- ensure dependencies are either already available or clearly justified

### Python style

- Use `snake_case` for variables and functions
- Use `PascalCase` for classes
- Prefer descriptive scientific names such as `band_gap`, `lattice_parameter`, `formation_energy`
- Use f-strings where needed
- Aim for readable PEP 8 style

## Editing Guidance

### Prefer consistency

When adding new content pages, follow nearby pages in:

- heading structure
- bullet style
- link style
- tone and level of detail

### Reviews

For `midterm_review/` and `final_review/` content:

- keep sections compact and lecture-oriented
- focus on what students should understand and explain
- avoid turning review pages into answer keys unless requested

### Figures and links

- Reuse existing figures when possible
- Store new figures under `figures/` unless a task clearly belongs elsewhere
- Keep internal links relative to the page location

## Validation Expectations

There is no formal automated test suite. Validation usually means:

- building the book with `make web`
- checking that edited pages are included in the TOC
- confirming internal links resolve
- confirming MyST syntax renders correctly
- spot-checking notebooks or content for obvious instructional issues

For notebook changes, also verify:

1. cells execute in order
2. imports are present
3. outputs or explanations still match the code

## What To Avoid

- Do not introduce non-MyST Markdown patterns that break the book build
- Do not rename major chapter directories unless explicitly requested
- Do not delete or overwrite unrelated teaching materials
- Do not assume assessment scope unless the instructor explicitly says so
- Do not add heavy refactors to generated files under `_build/`

## Good Agent Workflow

1. Inspect the relevant page, notebook, or config first
2. Make the smallest coherent change
3. Build or validate the affected content
4. Report any local build caveats separately from actual content problems

