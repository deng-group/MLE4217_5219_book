# Quiz 1 Guide

This guide provides information about Quiz 1, including format, topics covered, and preparation tips.

## Quiz Overview

**Duration**: 2 hours (120 minutes)
**Coverage**: Weeks 1-5
**Format**: Mixed format (multiple choice, short answer, coding problems)
**Date**: Week 7 (consult your course schedule for exact date)
**Location**: As announced by instructor

## Topics Covered

| Week | Topic | Weight |
|------|--------|---------|
| Week 1 | Orientation, Git, HPC Setup | ~15% |
| Week 2 | Python Programming (NumPy, Matplotlib) | ~30% |
| Week 3 | Computer, Git Workflow, Open-Source | ~15% |
| Week 4 | Database, Pandas, Materials Project API | ~20% |
| Week 5 | Atomistic Structures | ~20% |

### Detailed Topic Breakdown

#### Week 1: Orientation + Git & HPC (15%)
- Materials informatics overview
- Git basic commands (clone, add, commit, push, pull)
- Git repository structure (.git, .gitignore, README.md)
- Branching concepts
- HPC access (SSH, VPN)
- Environment setup (conda, VS Code)

#### Week 2: Python Programming (30%)
- Python data types (lists, dictionaries, functions)
- NumPy arrays (creation, indexing, slicing)
- NumPy operations (math, statistics, broadcasting)
- Matplotlib plots (line, scatter, histogram)
- Plot customization (labels, titles, legends)
- Jupyter notebook workflow

#### Week 3: Computer, Git & Open-Source (15%)
- Git workflow (clone, add, commit, push, pull, merge)
- Branches and merging
- Merge conflict resolution
- Pull requests
- Open-source software principles
- Common open-source licenses (MIT, GPL, Apache)
- Computer hardware basics (CPU, GPU, memory)

#### Week 4: Database + Pandas (20%)
- Database concepts
- Materials Project API usage
- Data formats (JSON, CSV, CIF, POSCAR)
- Pandas DataFrames
- Loading data (read_json, read_csv)
- DataFrame operations (head, tail, describe, shape)
- Selecting and filtering data
- Extracting nested values (.apply(lambda x: x['key']))
- Aggregation (mean, std, min, max)
- Integration with Matplotlib for plotting

#### Week 5: Atomistic Structures (20%)
- Lattice vectors and unit cells
- Crystal systems and Bravais lattices
- Symmetry concepts (point groups, space groups)
- Fractional vs Cartesian coordinates
- Common crystal structure prototypes (FCC, BCC, HCP, Diamond)
- Reciprocal space basics
- Structure formats (CIF, POSCAR)
- Site properties and Wyckoff positions

## Quiz Format

### Section 1: Multiple Choice (20-25 questions, 40-50 minutes)
- **Focus**: Conceptual understanding and definitions
- **Examples**:
  - Which Git command creates a new branch?
  - What is the purpose of a `.gitignore` file?
  - Which crystal system has a=b=c, α=β=γ=90°?
  - What does `df.head()` do in Pandas?

### Section 2: Short Answer (5-8 questions, 20-25 minutes)
- **Focus**: Brief explanations and code snippets
- **Examples**:
  - Explain the difference between `git pull` and `git fetch`
  - What is the VRH approximation for elastic moduli?
  - Describe the workflow for querying Materials Project API
  - What is the purpose of Brillouin zone?

### Section 3: Coding Problems (3-4 problems, 45-55 minutes)
- **Focus**: Practical programming skills
- **Examples**:
  - Write a NumPy function to calculate unit cell volume from lattice vectors
  - Create a scatter plot showing density vs bulk modulus using Matplotlib
  - Load a JSON file with Pandas and extract nested values
  - Implement a Git workflow script with branching and merging

## What to Bring

- ✅ NUS Student ID (for identification)
- ✅ Scientific calculator (if allowed - check with instructor)
- ✅ Pencils/pens for coding problems
- ❌ **No computers, laptops, or tablets allowed**
- ❌ **No internet access or notes**

## Key Formulas to Remember

### NumPy/Linear Algebra
- **Determinant**: Volume of parallelepiped defined by lattice vectors
  ```
  V = |det(a₁, a₂, a₃)|
  ```
- **Coordinate conversion**: Cartesian = Fractional @ Lattice Matrix

### Crystallography
- **Simple cubic volume**: V = a³
- **Cubic density**: ρ = (Z × M) / (N_A × V)
  - Z = number of atoms per unit cell
  - M = molar mass (g/mol)
  - N_A = Avogadro's number
  - V = unit cell volume (cm³)

### Statistics (NumPy/Pandas)
- **Mean**: μ = (Σx_i) / n
- **Standard deviation**: σ = √[Σ(x_i - μ)² / n]

## Preparation Tips

### 1-2 Weeks Before Quiz
- [ ] Review all lecture notes and slides
- [ ] Complete all practical notebooks (exercises.ipynb, materials_project.ipynb, etc.)
- [ ] Practice Git commands on your local machine
- [ ] Work through [Practice Problems](practice_problems.md)

### 3-5 Days Before Quiz
- [ ] Focus on weak areas identified during practice
- [ ] Revisit common pitfalls from each week's review
- [ ] Practice coding problems without looking at solutions
- [ ] Create a **cheat sheet** with key commands and formulas

### 1 Day Before Quiz
- [ ] Light review only (don't cram)
- [ ] Get good sleep
- [ ] Prepare materials to bring (ID, calculator, pencils)
- [ ] Check quiz location and time

## Day of Quiz

**Arrival Strategy**:
1. Arrive 10-15 minutes early
2. Bring multiple pencils/pens
3. Have calculator ready (if allowed)
4. Bring water bottle (if permitted)

**Time Management**:
```
Section 1 (MCQs):        40-50 minutes
Section 2 (Short Answer): 20-25 minutes
Section 3 (Coding):        45-55 minutes
Review:                     10-15 minutes
-----------------------
Total:                     120 minutes
```

**During Quiz**:
- Read all questions first
- Start with easiest questions
- Don't spend too long on one problem
- Show your work for coding problems
- Use partial credit strategically

## Common Mistakes to Avoid

### Git Mistakes
- ❌ Confusing `git commit` and `git push`
- ❌ Forgetting to add files before committing
- ❌ Not understanding merge conflict resolution

### Python/NumPy Mistakes
- ❌ Using loops instead of vectorized operations
- ❌ Confusing `.iloc[]` and `.loc[]` indexing
- ❌ Forgetting to import libraries (numpy, pandas, matplotlib)

### Matplotlib Mistakes
- ❌ Not calling `plt.show()` after plotting
- ❌ Missing axis labels or titles
- ❌ Confusing scatter plots and line plots

### Pandas Mistakes
- ❌ Not handling nested dictionaries correctly
- ❌ Using Python lists instead of Pandas Series
- ❌ Forgetting `.apply(lambda x: ...)` for extracting nested values

### Crystallography Mistakes
- ❌ Confusing fractional and Cartesian coordinates
- ❌ Not knowing common crystal structure prototypes
- ❌ Mixing up point groups and space groups

## Sample Question Types

### Multiple Choice
**Q**: Which NumPy function calculates the determinant of a matrix?

A) `np.calculate_determinant()`
B) `np.det()`
C) `np.linalg.det()`
D) `np.matrix.determinant()`

**Answer**: C) `np.linalg.det()`

### Short Answer
**Q**: Explain the difference between point groups and space groups in 3-5 sentences.

**Answer**: Point groups describe symmetry about a single point, including rotations, reflections, and inversions (32 types in 3D). Space groups describe complete 3D crystal symmetry, combining point group symmetry with translational symmetry (230 types in 3D). Space groups include lattice translations, screw axes, and glide planes, which point groups do not have.

### Coding Problem
**Q**: Write a Python function that takes lattice vectors (3×3 NumPy array) and returns the unit cell volume.

```python
import numpy as np

def calculate_volume(lattice):
    """
    Calculate unit cell volume from lattice vectors.

    Args:
        lattice: 3x3 numpy array of lattice vectors

    Returns:
        Volume of unit cell
    """
    volume = np.linalg.det(lattice)
    return volume
```

## After the Quiz

- Review your mistakes
- Identify topics to improve for Quiz 2
- If Quiz 1 score is low, consider:
  - More practice on weak areas
  - Attending office hours
  - Forming study groups with classmates

## Good Luck!

Remember: Quiz 1 covers foundational skills. Focus on understanding concepts and being comfortable with hands-on tasks. Practice makes perfect!

---

## Related Resources

- [Practice Problems](practice_problems.md)
- [Week 1 Review](week1_orientation.md)
- [Week 2 Review](week2_python.md)
- [Week 3 Review](week3_computer.md)
- [Week 4 Review](week4_database.md)
- [Week 5 Review](week5_atomistic.md)
- [Course Syllabus](../syllabus.md)
