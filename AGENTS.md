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
- `make serve` - Start a live development server (runs `jupyter book start`)

### Viewing the Book
After building with `make web`, open `_build/html/index.html` in a browser.

## Testing

This is primarily a documentation/book project. Jupyter notebooks serve as interactive examples and exercises. To test notebook execution:
- Run notebooks manually in Jupyter environment
- Verify all cells execute without errors
- Check that plots and visualizations render correctly

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

**General:**
- Use standard Markdown with MyST extensions
- Include YAML frontmatter with title and metadata
- Level 1 headings (#) for page titles only
- Use ### (level 3) and below for section headings

**Code Blocks:**
- Specify language for syntax highlighting:
````markdown
```python
code here
```
````

**Math:**
- Use LaTeX notation with `$` for inline math
- Use `$$` or `\\[` for display math
- Example: $E = \hbar\omega$

**Figures:**
- Use MyST figure syntax:
```markdown
```{figure} ../figures/your_image.png
---
width: 80%
---
Caption text here
```

**Tables:**
- Use Markdown table syntax for simple tables
- Consider HTML tables for complex formatting

**Links:**
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
├── orientation/          # Chapter: Orientation materials
│   ├── index.md
│   ├── setup.md
│   └── programming.ipynb
├── computer/            # Chapter: Computing basics
├── database/            # Chapter: Materials databases
├── atomistic_structure_I/ # Chapter: Crystal structure
└── ... (other chapters)
```

### Chapter Organization
- Each chapter folder contains an `index.md` table of contents
- Mix of `.md` pages for theory and `.ipynb` for practicals
- Practical notebooks are typically named with descriptive titles (e.g., `pytorch.ipynb`, `ase.ipynb`)

## Common Libraries

**Scientific Computing:**
- `numpy` - Numerical operations
- `matplotlib`, `seaborn` - Plotting and visualization
- `pandas` - Data manipulation

**Machine Learning:**
- `torch`, `torch.nn`, `torch.optim` - PyTorch for deep learning
- `sklearn` - Traditional ML algorithms

**Materials Science:**
- `ase` - Atomic Simulation Environment for structure manipulation
- `pymatgen` - Materials analysis and database interfaces

**Data Handling:**
- `ase.io` - Read/write structure files (CIF, XYZ, etc.)
- `pymatgen.core.structure` - Structure objects

## Content Guidelines

### Educational Focus
- Prioritize clarity and educational value over code optimization
- Include explanatory comments in code cells
- Use print statements to show intermediate results when helpful
- Provide context before code: explain what the code does and why

### Visualization
- Always label plots (xlabel, ylabel, title)
- Use appropriate figure sizes for readability
- Include legend when multiple data series are shown
- Consider colorblind-friendly palettes

### Documentation in Notebooks
- Use markdown cells to explain code blocks
- Include step-by-step explanations for complex operations
- Document expected outputs
- Add tips/tricks in separate markdown cells

## MyST/Jupyter Book Specifics

### Cell Metadata
- Use `execution_count` tracking for reference
- Clear output cells before committing if outputs are large
- Keep notebook outputs for reference unless they're extremely large

### Cross-References
- Use `{ref}` for referencing section headings
- Use `{doc}` for linking to other pages
- Example: `See {doc}`orientation/setup.md` for setup instructions`

### Admonitions
- Use MyST admonitions for important notes:
````markdown
```{note}
This is an important note for students.
```

```{warning}
Be careful with this operation.
```
````

## Version Requirements

- Python: >=3.13
- Jupyter Book: >=2.0.0a0
- See pyproject.toml for full dependency list

## Git Workflow

When making changes:
1. Run `make clean` before committing large `_build` directories
2. Commit source files (.md, .ipynb, myst.yml, pyproject.toml)
3. Generally don't commit `_build/` directory contents
4. Test notebooks before committing significant code changes
5. Ensure all relative paths (especially images) are correct

## Special Considerations

- Figures are in `figures/` directory, referenced with `../figures/` from chapter folders
- Some notebooks generate figures on-the-fly - these don't need to be committed
- When adding new chapters, update `myst.yml` table of contents
- Keep notebook cell outputs clean for readability (clear large outputs)
- Use Google Colab rocket button for optional online execution
