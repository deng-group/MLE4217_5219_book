# AGENTS.md

This file contains guidelines for agentic coding assistants working on the MLE4217/5219 Materials Informatics Jupyter Book.

## Project Overview

This is a Jupyter Book project for a university course on Materials Informatics. It contains educational content organized into chapters covering topics from basic programming to advanced machine learning for materials science.

## Environment Setup

This project uses `uv` to manage Python packages. Before running Python commands:

1. **Check if virtual environment exists:**
   - If `.venv` directory doesn't exist, create it with: `uv venv`
   
2. **Activate the virtual environment:**
   - Source the environment: `source ./.venv/bin/activate`
   
3. **Install dependencies:**
   - Run: `uv pip install -e .` or `uv pip install -r requirements.txt` if available

Always ensure the virtual environment is activated before running Python or Jupyter-related commands.

## Build Commands

### Building the Book
- `make` or `make web` - Build HTML version of the book (runs `jupyter book build --html`)
- `make book` - Build PDF version using LaTeX (runs `jupyter-book build --builder pdflatex .`)
- `make clean` - Remove the `_build` directory

### Viewing the Book
After building with `make web`, open `_build/html/index.html` in a browser.

## Testing

This is primarily a documentation/book project. Jupyter notebooks serve as interactive examples and exercises. To test notebook execution:
- Run notebooks manually in Jupyter environment
- Verify all cells execute without errors
- Check that plots and visualizations render correctly
- When modifying notebooks, ensure:
  1. Code cells execute in order (top to bottom)
  2. All required imports are present
  3. Dependencies are listed in pyproject.toml or documented in notebooks

There is no automated testing framework configured. When modifying notebooks, ensure:
1. Code cells execute in order (top to bottom)
2. All required imports are present
3. Dependencies are listed in pyproject.toml or documented in notebooks

## Code Style Guidelines

### Python (in Jupyter Notebooks)

**Imports:**
- Place imports at the top of code cells or in the first cell
- Use descriptive grouping (standard library, third-party, local)
- Example:
```python
import numpy as np
import matplotlib.pyplot as plt
import torch
from ase.build import molecule, bulk
```

**Naming Conventions:**
- Variables and functions: `snake_case`
- Classes: `PascalCase`
- Constants: `UPPER_SNAKE_CASE`
- Descriptive names that reflect scientific domain (e.g., `potential_energy`, `lattice_vectors`, `train_loader`)

**Formatting:**
- Follow PEP 8 guidelines
- Use spaces around operators (except when grouping)
- Line length: aim for ≤88 characters (Black style)
- Use f-strings for string formatting: `f"Value: {value}"`

**Type Hints:**
- Optional but encouraged in function definitions
- Use Python type hints where helpful for clarity

**Error Handling:**
- Minimal error handling in educational notebooks
- Focus on clarity over robustness
- Use try/except blocks only for specific, expected failures
- Provide informative error messages for students

### Markdown Files (.md)

## MyST-Compatible Markdown

This project uses **MyST (Markedly Structured Text)** extensions for Jupyter Book. All Markdown (`.md`) files MUST use MyST-compatible syntax.

### MyST Admonitions
Use MyST admonition syntax for important notes:

```markdown
```{note}
This is an important note for students.
```

```{warning}
Be careful with this operation.
```

```{tip}
Helpful tip for students.
```

```{danger}
Critical warning or error.
```

### Code Blocks with Language Specification
Always specify the programming language for syntax highlighting:

```markdown
```python
import numpy as np
```
```

Supported languages: `python`, `bash`, `javascript`, `typescript`, `c`, `cpp`, `fortran`, `julia`, `matlab`, `mathematica`, `html`, `json`, `yaml`

### Math Notation
- **Inline math**: Use single dollar signs: `$E = mc^2$`
- **Display math**: Use double dollar signs: `$$F = ma$$`
- **Example**: Use `\\[` for array notation: `\\[a_1, a_2, a_3\\]`

### Figure Syntax
Use MyST figure syntax:

```markdown
```{figure} ../figures/your_image.png
---
width: 80%
---
Caption text here
```

### Table Syntax
- Use standard Markdown for simple tables
- For complex tables, use HTML table syntax or list format

### Links
- Use relative paths for internal links
- Use descriptive link text: `[click here](page.md)` not `[here](page.md)`

## File Organization

### Directory Structure
```
MLE4217_5219_book/
├── index.md              # Landing page
├── myst.yml              # Jupyter Book configuration
├── Makefile              # Build commands
├── pyproject.toml        # Python dependencies
├── figures/              # All images and figures
├── orientation/          # Chapter: Orientation
│   ├── index.md
│   ├── setup.md
│   ├── programming.ipynb
├── computer/            # Chapter: Computing basics
├── database/            # Chapter: Materials databases
├── atomistic_structure_I/ # Chapter: Crystal structure
├── atomistic_structure_II/ # Chapter: Defects & interfaces
├── models_and_theories_I/ # Chapter: Force fields & MD
├── models_and_theories_II/ # Chapter: DFT & MC
├── optimization/         # Chapter: Optimization algorithms
├── high_throughput/      # Chapter: High-throughput methods
├── machine_learning_I/   # Chapter: ML fundamentals
├── machine_learning_II/  # Chapter: Advanced ML
└── machine_learning_potentials/ # Chapter: ML potentials
```

### Chapter Organization
- Each chapter folder contains an `index.md` table of contents
- Mix of `.md` pages for theory and `.ipynb` for practicals
- Practical notebooks are typically named with descriptive titles (e.g., `pytorch.ipynb`, `ase.ipynb`)
