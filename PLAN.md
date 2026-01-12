# Content Reorganization Plan for MLE4217/5219 Materials Informatics

**Goal:** Reorganize course content to match new 13-week calendar structure while preserving ALL existing content (no deletions).

**Calendar Reference:** See `calendar.md` for the updated 13-week schedule.

---

## Core Principle

✅ **PRESERVE ALL EXISTING CONTENT** - No content will be deleted. Content that is not covered in lecture will be marked as "Reading Material" for self-study.

---

## Summary of Changes

| **Week** | **Topic** | **Changes** | **New Files** | **Updated Files** | **Moved Files** |
|-----------|-------------|---------------|---------------|------------------|----------------|
| 1 | Orientation + Materials Informatics + HPC + Setup | REORGANIZED | 2 | 3 | 1 |
| 2 | Python Programming | CREATE NEW chapter | 6 | 0 | 0 |
| 3 | Computer, Git & Open-Source Software | REORGANIZED | 0 | 7 | 1 |
| 4 | Database + Pandas | Add Pandas content | 1 | 1 | 0 |
| 5 | Atomistic Structures (reorganized) | Reorganize sequence | 0 | 2 | 0 |
| 6 | CNY Week | Skip | 0 | 0 | 0 |
| 7 | Mid-Term Review | CREATE NEW chapter | 7 | 0 | 0 |
| 8 | Models & Theories I | None | 0 | 0 | 0 |
| 9 | Models & Theories II | None | 0 | 0 | 0 |
| 10 | Optimization | Add AIRSS content | 1 | 1 | 0 |
| 11 | High-throughput | Remove AIRSS/GA refs | 0 | 2 | 1 |
| 12 | ML + ML Potentials | Mark ML I & II as reading | 0 | 2 | 0 |
| 13 | Pre-Exam Review | CREATE NEW chapter | 9 | 0 | 0 |

**Total:** 26 new files, 16 updated files, 3 moved content sections, 0 deleted files

---

## Chapter-by-Chapter Details

---

### Week 1: Orientation + Materials Informatics + HPC + Environment Setup

**Status:** ✅ EXISTS - Needs reorganization

**Directory:** `orientation/`

**Existing Files:**
- `orientation.md`
- `introduction.md`
- `github.md`
- `setup.md`
- `programming.ipynb`

**Action Items:**

#### Reorganize Week 1 content
**New sequence (Option A):**

| Time | Topic | Content |
|--------|---------|-----------|
| 0-15 min | Course Logistics | Syllabus, expectations, calendar, assignments/quizzes |
| 15-30 min | Materials Informatics Overview | What is Materials Informatics, why important, field overview (move from Week 3) |
| 30-50 min | HPC Introduction & Practical | HPC access setup, basic commands, test connection |
| 50-70 min | Environment Setup | Python installation, virtual environment, Jupyter setup, VS Code configuration |
| 70-85 min | Python Demo | "Hello World", verify NumPy/Matplotlib installed |
| 85-90 min | Q&A | Answer questions about setup, HPC access, course logistics |

**Focus:** Complete setup including HPC access, understand field

#### Create or update content files:

##### 1. `orientation/materials_informatics.md` (NEW or update existing)
**Content:**
- What is Materials Informatics?
- Why is it important for materials science?
- Field overview and applications
- How this course fits into the bigger picture
- **Duration target:** 15 min lecture

##### 2. `orientation/hpc_introduction.md` (NEW)
**Content:**
- HPC basics: what is HPC, why needed for materials simulations
- HPC access: how to log in, basic commands
- Practical: Students test HPC connection
- **Duration target:** 20 min lecture/practical

##### 3. `orientation/python_demo.md` (NEW or update `programming.ipynb`)
**Content:**
- Quick "Hello World" example
- Verify Python installation works
- Test NumPy and Matplotlib imports
- Basic syntax verification
- **Duration target:** 15 min practical

---

### Week 2: Python Programming (NEW CHAPTER)

**Status:** ❌ NEEDS CREATION

**Directory:** `python_programming/` (CREATE)

**Files to Create:**

#### 1. `python_programming/index.md`
**Content:** Chapter overview, learning objectives, table of contents

#### 2. `python_programming/python_basics.md`
**Content:**
- Python syntax review (variables, data types, operators)
- Control flow (if/else, loops, comprehensions)
- Functions and modules
- Common beginner pitfalls
- Debugging techniques
- **Duration target:** 10 min lecture
- **Note:** Assume students have some background, focus on bridging gaps

#### 3. `python_programming/numpy.md`
**Content:**
- Introduction to NumPy arrays
- Array creation and shapes
- Indexing and slicing
- Broadcasting
- Essential operations (math, statistics)
- **Duration target:** 20 min lecture
- **Examples:** Arrays used in materials science (lattice vectors, positions)

#### 4. `python_programming/matplotlib.md`
**Content:**
- Line plots and scatter plots
- Histograms
- Subplots
- Customization (colors, labels, legends)
- Saving figures for reports/papers
- **Duration target:** 20 min lecture
- **Examples:** Property plots, energy landscapes, structure visualizations

#### 5. `python_programming/jupyter_workflow.md`
**Content:**
- Jupyter notebook features (cells, kernels, outputs)
- Markdown for documentation
- Debugging tips
- Best practices (naming, organization, comments)
- Integration with Git
- **Duration target:** 20 min lecture

#### 6. `python_programming/exercises.ipynb`
**Content:** Practical notebook with hands-on exercises:
- **Exercise 1:** NumPy array operations (create, reshape, compute statistics)
- **Exercise 2:** Matplotlib plotting (line plot, scatter plot, customization)
- **Exercise 3:** Combined NumPy + Matplotlib (plot function of array)
- **Duration target:** 20 min practical

---

### Week 3: Computer, Git & Open-Source Software

**Status:** ✅ EXISTS - Needs updates

**Directory:** `computer/`

**Existing Files:**
- `history.md`
- `hardware.md`
- `performance.md`
- `hpc.md`
- `software.md`
- `git_examples.md`
- `scaling.ipynb`

**Action Items:**

#### Update `computer/index.md`
**Update note at top:**
```markdown
```{admonition} Course Focus
:class: note
This week focuses on **Git workflow, open-sourced software principles, and understanding computer hardware/software**. HPC was covered in Week 1 (practical setup).
```

#### Main Lecture Content:

##### 1. Git Fundamentals
**Note:** Move content from `computer/git_examples.md` or create new `git_workflow.md`
**Content:**
- Git as research workflow tool
- Clone, commit, push, pull commands
- Branching and merging basics
- Git best practices for research
- **Duration target:** 20 min lecture

##### 2. Git Demo/Practice
**Note:** Update or use `computer/git_examples.md`
**Content:**
- Students practice Git commands
- Clone course repository (if not done in Week 1)
- Create branches, make changes, commit
- Push changes to remote
- **Duration target:** 20 min practical

##### 3. Open-Source Software
**Update:** `computer/software.md` (keep as main lecture)
**Content:**
- Open-source principles and licensing
- Tools used in materials science (ASE, pymatgen, etc.)
- Software installation and dependency management
- **Duration target:** 20 min lecture

##### 4. Computer Hardware
**Update:** `computer/hardware.md` (NOW MAIN LECTURE, remove reading material tag)
**Content:**
- Computer architecture basics
- CPU, GPU, memory, storage
- Performance factors for computational materials
- How hardware choice affects simulation speed
- **Duration target:** 15 min lecture

##### 5. Computer Software (expanded)
**Update:** `computer/software.md` (expand to fill time)
**Content:**
- Open-source principles
- Software installation and dependency management
- Tools used in materials science (ASE, pymatgen, VESTA, etc.)
- Operating systems and environments
- **Duration target:** 15 min lecture

#### Mark as reading materials:

##### 1. `computer/performance.md`
**Keep as reading material:**
```markdown
```{admonition} Reading Material
:class: note
This content is provided as reading material. It will not be covered in detail during lecture.
```

##### 2. `computer/scaling.ipynb`
**Keep as reading material:**
```markdown
```{admonition} Reading Material
:class: note
This practical is provided as reading material for self-study.
```

##### 3. `computer/hpc.md`
**Note:** Briefly covered in Week 1, detailed content available as reading
```markdown
```{admonition} Reference Material
:class: note
HPC basics were covered in Week 1 (practical setup). This file is provided as reference for detailed information.
```

##### 4. `computer/history.md`
**Note:** Materials informatics overview moved to Week 1, but keep as optional reference
```markdown
```{admonition} Reference Material
:class: note
Historical context is provided as optional reading. Materials informatics overview was covered in Week 1.
```

---

### Week 4: Database + Pandas (EXPANDED)

**Status:** ✅ EXISTS - Needs Pandas addition

**Directory:** `database/`

**Existing Files:**
- `database.md`
- `concepts.md`
- `formats.md`
- `materials_database.md`
- `materials_project.ipynb`
- `bulk_modulus.ipynb`

**Action Items:**

#### 1. Create `database/pandas_basics.md`
**Content:**
- Introduction to Pandas
- Loading JSON files (`pd.read_json()`) - for Materials Project data
- Loading CSV files (`pd.read_csv()`) - for MD simulation logs
- Basic DataFrame operations (selection, filtering, head, tail)
- Extracting nested values using `.apply(lambda x: x['key'])` - for bulk_modulus exercise
- Basic aggregation (mean, sum, count)
- Integration with Matplotlib for plotting
- **Duration target:** 20-30 min lecture
- **Examples:** Materials Project data structures, MD log files

#### 2. Update `database/index.md`
**Add pandas_basics.md to children and add note:**
```markdown
```{admonition} Pandas
:class: tip
Pandas is used extensively in this course for handling data from Materials Project API and molecular dynamics simulations. Review the [Pandas Basics](pandas_basics.md) section before the practical.
```

---

### Week 5: Atomistic Structures (REORGANIZED)

**Status:** ✅ EXISTS - Needs sequence updates

**Directories:**
- `atomistic_structure_I/`
- `atomistic_structure_II/`

**Decision:** Keep separate directories (no merge) - keeps structure clean

**Action Items:**

#### Update `atomistic_structure_I/index.md`
**New sequence following logical flow:**

```markdown
# Atomistic Structures I

## Contents
1. [Introduction](unit_cell.md) - Crystal structure fundamentals
2. [Symmetry Theory](symmetry.md) - Group theory, point groups, space groups
3. [Lattice and Periodicity](unit_cell.md) - Lattice vectors, unit cells, conventional vs primitive
4. [Brillouin Zone and Reciprocal Space](reciprocal_space.md) - Reciprocal lattice, k-paths
5. [Structure Formats](structure_formats.md) - CIF, POSCAR, XYZ
6. [Practical: Crystal Structure](crystal_structure.ipynb) - Pymatgen exercises

**Next:** See [Atomistic Structures II](../atomistic_structure_II/) for molecules, defects, and interfaces.
```

#### Update `atomistic_structure_II/index.md`
**New sequence following logical flow:**

```markdown
# Atomistic Structures II

## Prerequisite
Complete [Atomistic Structures I](../atomistic_structure_I/) before this section.

## Contents
1. [Site Properties](site_properties.md) - Site concepts, Wyckoff positions
2. [Molecules](molecule.md) - Site collections, molecular graphs, nanomaterials
3. [Non-crystalline Materials](noncrystalline_materials.md) - Amorphous materials
4. [Defects](defect.md) - Vacancy, interstitial, substitution
5. [Interfaces](interface.md) - Interface representation
6. [Practical: Advanced Structure Manipulation](advanced_structure.ipynb) - Pymatgen ASE exercises
7. [VESTA Visualization](vesta.md) - Structure visualization tool

```{admonition} Reading Material
:class: note
Advanced defect topics and complex interface modeling are provided as reading materials for interested students.
```

#### Mark advanced topics as reading materials (if not already):
- Check if any sections need reading material tags
- Add to specific subsections within existing files if needed

---

### Week 6: CNY Week

**Status:** N/A - No content needed

**Action Items:**
- Skip week in calendar
- No content needed

---

### Week 7: MID-TERM REVIEW (NEW CHAPTER)

**Status:** ❌ NEEDS CREATION

**Directory:** `midterm_review/` (CREATE)

**Files to Create:**

#### 1. `midterm_review/index.md`
```markdown
# Mid-Term Review

Review of Weeks 1-5 before Quiz 1.

**Weeks Covered:**
1. [Orientation + Git](week1_orientation.md)
2. [Python Programming](week2_python.md)
3. [Computer and Computation](week3_computer.md)
4. [Database + Pandas](week4_database.md)
5. [Atomistic Structures](week5_atomistic.md)

## Assessment
- [Practice Problems](practice_problems.md)
- [Quiz 1 Guide](quiz1_guide.md)
```

#### 2. `midterm_review/week1_orientation.md`
**Content:** Bullet-point recap:
- Git basics (clone, commit, push)
- GitHub/GitLab workflow
- Python environment setup
- Jupyter notebook fundamentals

#### 3. `midterm_review/week2_python.md`
**Content:** Bullet-point recap:
- Python syntax key points (data types, control flow)
- NumPy: arrays, indexing, broadcasting
- Matplotlib: basic plots, customization
- Common pitfalls and solutions

#### 4. `midterm_review/week3_computer.md`
**Content:** Bullet-point recap:
- Materials informatics overview
- HPC basics (what is HPC, why important)
- Open-sourced software principles

#### 5. `midterm_review/week4_database.md`
**Content:** Bullet-point recap:
- Database types (materials databases)
- Materials Project API usage
- Pandas: loading JSON/CSV, basic operations
- Data mining concepts

#### 6. `midterm_review/week5_atomistic.md`
**Content:** Bullet-point recap:
- Sites and Wyckoff positions
- Molecules and site collections
- Symmetry: point groups, space groups
- Lattice types and periodicity
- Brillouin zone concepts
- Defects and interfaces (basic overview)

#### 7. `midterm_review/practice_problems.md`
**Content:**
- 5-8 sample problems covering Weeks 1-5
- Problems should be similar to Quiz 1 format
- Include optional solutions (can be hidden or separate file)
- Topics: Git operations, NumPy arrays, Matplotlib plotting, MP API queries, symmetry basics

#### 8. `midterm_review/quiz1_guide.md`
**Content:**
- Quiz 1 format (multiple choice? short answer?)
- What to expect (topics covered, duration)
- Preparation tips
- Key formulas to memorize

---

### Week 8: Models and Theories I

**Status:** ✅ COMPLETE - No changes needed

**Directory:** `models_and_theories_I/`

**Existing Files:**
- `modelling.md`
- `force_fields.md`
- `dft.md`
- `ase.ipynb`

**Action Items:**
- Keep all existing content as-is

---

### Week 9: Models and Theories II

**Status:** ✅ COMPLETE - No changes needed

**Directory:** `models_and_theories_II/`

**Existing Files:**
- `statistical_mech.md`
- `molecular_dynamics.md`
- `monte_carlo.md`
- `kmc.md`
- `md_mc.ipynb`

**Action Items:**
- Keep all existing content as-is

---

### Week 10: Optimization (EXPANDED)

**Status:** ✅ EXISTS - Needs AIRSS addition

**Directory:** `optimization/`

**Existing Files:**
- `introduction.md`
- `local_optimization.md`
- `global_optimization.md`
- `choose_opt.md`
- `transition_state.md`
- `optimization.ipynb`

**Action Items:**

#### 1. Create `optimization/airss.md`
**Content:**
- Extract AIRSS section from `high_throughput/codes.md` or `high_throughput/introduction.md`
- Topics:
  - What is AIRSS?
  - Random structure search methodology
  - Applications in materials discovery
  - Comparison with Genetic Algorithms
- **Duration target:** 15-20 min lecture
- **Connection:** Global optimization method for structure search

#### 2. Update `optimization/index.md`
**Add airss.md to children:**

```markdown
# Optimization

## Contents
- [Introduction](introduction.md)
- [Local Optimization](local_optimization.md)
- [Global Optimization](global_optimization.md)
- [AIRSS: Ab Initio Random Structure Searching](airss.md)
- [Choosing Optimizers](choose_opt.md)
- [Transition State Search](transition_state.md)
- [Practical: Optimization](optimization.ipynb)
```

---

### Week 11: High-throughput Simulation (UPDATED)

**Status:** ✅ EXISTS - Needs AIRSS/GA removal

**Directory:** `high_throughput/`

**Existing Files:**
- `introduction.md`
- `workflow.md`
- `data_mining.md`
- `thermodynamics.md`
- `codes.md`
- `high_throughput.ipynb`

**Action Items:**

#### Update `high_throughput/introduction.md`
**Remove or modify:**
- Remove detailed AIRSS explanations
- Remove detailed Genetic Algorithm explanations
- **Add note:**
```markdown
```{admonition} Note
:class: note
AIRSS (Ab Initio Random Structure Searching) and Genetic Algorithms are covered in [Week 10: Optimization](../optimization/). This week focuses on thermodynamics, convex hulls, and phase diagrams.
```

#### Update `high_throughput/codes.md`
**Move content:**
- Identify AIRSS section
- Move entire AIRSS content to `optimization/airss.md`
- **Replace with note:**
```markdown
AIRSS content has been moved to [Optimization - AIRSS](../optimization/airss.md)
```

### Keep as main content:
- `workflow.md`
- `data_mining.md`
- `thermodynamics.md`
- `high_throughput.ipynb`

---

### Week 12: Machine Learning + ML Potentials (REORGANIZED)

**Status:** ✅ EXISTS - Needs reading material tags

**Directories:**
- `machine_learning_I/`
- `machine_learning_II/`
- `machine_learning_potentials/`

**Decision:** Keep three separate directories with reading material tags

**Action Items:**

#### Update `machine_learning_I/index.md`
**Add at top:**
```markdown
```{admonition} Reading Material
:class: note
**This chapter provides foundational ML concepts for Week 12 (Machine Learning + ML Potentials).**

Please review these materials BEFORE Week 12 lecture. They will NOT be covered in detail during lecture time. Topics include:
- Regression and fitting
- Neural networks
- Decision trees and Random Forest
- Classification
- Principal component analysis (PCA)
- Clustering

These concepts are assumed as prerequisite knowledge for understanding ML Potentials.
```

#### Update `machine_learning_II/index.md`
**Add at top:**
```markdown
```{admonition} Reading Material
:class: note
**This chapter covers advanced ML topics provided as self-study materials.**

Topics include:
- Graph Neural Networks (GNNs)
- Diffusion models

These topics are provided for interested students but are NOT required for Week 12 (ML Potentials) and will NOT be covered in lecture.
```

#### Keep `machine_learning_potentials/` as main lecture:
- No changes to `machine_learning_potentials/index.md`
- No changes to individual files
- This is primary lecture content for Week 12

#### Optional: Create `machine_learning/week12_guide.md`
**Content:**
```markdown
# Week 12: Machine Learning + ML Potentials

## Lecture Focus
This week focuses on **Machine Learning Potentials**.

## Preparation
Please review these reading materials BEFORE lecture:
1. [Machine Learning I](../machine_learning_I/) - Foundational ML concepts
2. [Machine Learning II](../machine_learning_II/) - Advanced ML topics (optional)

## Lecture Content
1. [ML Potentials Introduction](../machine_learning_potentials/introduction.md)
2. [Descriptors (SOAP, ACE, GAP)](../machine_learning_potentials/explicit.md)
3. [Neural Network Potentials](../machine_learning_potentials/bp_nn.md)
4. [MACE](../machine_learning_potentials/mace.md)

## Practical
- [MACE Examples](../machine_learning_potentials/mlp.ipynb)
```

---

### Week 13: PRE-EXAM REVIEW (NEW CHAPTER)

**Status:** ❌ NEEDS CREATION

**Directory:** `preexam_review/` (CREATE)

**Files to Create:**

#### 1. `preexam_review/index.md`
```markdown
# Pre-Exam Review

Comprehensive review of Weeks 7-12 before final Quiz 2.

**Weeks Covered:**
1. [Models and Theories I](week8_models1.md)
2. [Models and Theories II](week9_models2.md)
3. [Optimization](week10_optimization.md)
4. [High-throughput Simulation](week11_highthroughput.md)
5. [Machine Learning + ML Potentials](week12_ml.md)

## Assessment
- [Exam Format](exam_format.md)
- [Key Concepts Summary](key_concepts.md)
- [Quiz 2 Guide](quiz2_guide.md)
```

#### 2. `preexam_review/week8_models1.md`
**Content:** Bullet-point recap:
- Multiscale modelling overview
- Force fields (types, applications)
- Molecular dynamics basics
- Monte Carlo methods

#### 3. `preexam_review/week9_models2.md`
**Content:** Bullet-point recap:
- Quantum mechanics foundations
- Electronic structure
- Density Functional Theory (DFT)
- Functionals, plane waves, pseudopotentials

#### 4. `preexam_review/week10_optimization.md`
**Content:** Bullet-point recap:
- Energy landscapes
- Local optimization (gradients, steepest descent)
- Global optimization (Genetic Algorithm, basin hopping, simulated annealing)
- AIRSS (Ab Initio Random Structure Searching)
- No free lunch rule

#### 5. `preexam_review/week11_highthroughput.md`
**Content:** Bullet-point recap:
- Thermodynamics and kinetics
- Finite temperature and entropy
- Convex hulls
- Phase diagrams
- High-throughput workflows

#### 6. `preexam_review/week12_ml.md`
**Content:** Bullet-point recap:
- ML Potentials overview
- Descriptors (SOAP, ACE, GAP)
- Error analysis
- MACE architecture and applications

#### 7. `preexam_review/exam_format.md`
**Content:**
- Quiz 2 format (multiple choice? short answer?)
- Duration
- Topics covered (Weeks 7-12)
- What to bring (calculator, cheat sheet?)
- Exam rules

#### 8. `preexam_review/key_concepts.md`
**Content:** Cross-week integration:
- Key formulas and equations
- Important definitions
- Conceptual connections between topics
- "Big picture" synthesis

#### 9. `preexam_review/quiz2_guide.md`
**Content:**
- Quiz 2 format details
- Preparation tips
- Review strategy
- Time management tips

---

## Summary of All Actions

### **DIRECTORIES TO CREATE (3 total):**
1. `python_programming/` - 6 files
2. `midterm_review/` - 7 files
3. `preexam_review/` - 9 files

### **FILES TO CREATE (28 total):**

**Week 1 (3 files):**
1. `orientation/materials_informatics.md`
2. `orientation/hpc_introduction.md`
3. `orientation/python_demo.md`

**Week 2 (6 files):**
4. `python_programming/index.md`
5. `python_programming/python_basics.md`
6. `python_programming/numpy.md`
7. `python_programming/matplotlib.md`
8. `python_programming/jupyter_workflow.md`
9. `python_programming/exercises.ipynb`

**Week 3 (2 files new/updated):**
10. `computer/git_workflow.md` (move/update from git_examples.md)
11. `computer/git_practice.md` (new practical exercises)

**Week 4 (1 file):**
12. `database/pandas_basics.md`

**Week 7 (7 files):**
13. `midterm_review/index.md`
14. `midterm_review/week1_orientation.md`
15. `midterm_review/week2_python.md`
16. `midterm_review/week3_computer.md`
17. `midterm_review/week4_database.md`
18. `midterm_review/week5_atomistic.md`
19. `midterm_review/practice_problems.md`
20. `midterm_review/quiz1_guide.md`

**Week 10 (1 file):**
21. `optimization/airss.md`

**Week 12 (1 file optional):**
22. `machine_learning/week12_guide.md` (optional)

**Week 13 (9 files):**
23. `preexam_review/index.md`
24. `preexam_review/week8_models1.md`
25. `preexam_review/week9_models2.md`
26. `preexam_review/week10_optimization.md`
27. `preexam_review/week11_highthroughput.md`
28. `preexam_review/week12_ml.md`
29. `preexam_review/exam_format.md`
30. `preexam_review/key_concepts.md`
31. `preexam_review/quiz2_guide.md`

### **FILES TO UPDATE (20 total):**

**Week 1 (3 files):**
1. `orientation/orientation.md` - Add Materials Informatics overview
2. `orientation/setup.md` - Add HPC setup section
3. `orientation/programming.ipynb` - Update as Python demo file

**Week 3 (7 files):**
4. `computer/index.md` - Update note to reflect new focus (Git, open-source, hardware/software)
5. `computer/git_examples.md` - Update/reorganize as Git fundamentals
6. `computer/hardware.md` - REMOVE reading material tag (now main lecture)
7. `computer/performance.md` - Keep reading material tag
8. `computer/scaling.ipynb` - Keep reading material tag
9. `computer/hpc.md` - Add note that basic HPC covered in Week 1

**Week 4 (1 file):**
10. `database/index.md` - Add pandas_basics.md reference

**Week 5 (2 files):**
11. `atomistic_structure_I/index.md` - Reorganize sequence
12. `atomistic_structure_II/index.md` - Reorganize sequence

**Week 10 (1 file):**
13. `optimization/index.md` - Add airss.md reference

**Week 11 (2 files):**
14. `high_throughput/introduction.md` - Remove AIRSS/GA
15. `high_throughput/codes.md` - Move AIRSS to optimization

**Week 12 (2 files):**
16. `machine_learning_I/index.md` - Add reading material tag
17. `machine_learning_II/index.md` - Add reading material tag

### **FILES TO MOVE (3 content sections):**
1. Move Materials Informatics Overview from `computer/history.md` or Week 3 context to `orientation/materials_informatics.md`
2. Move HPC basic content from `computer/hpc.md` to `orientation/hpc_introduction.md`
3. Move AIRSS content from `high_throughput/codes.md` to `optimization/airss.md`

### **FILES TO DELETE (0 total):**
- NONE - preserving all content

---

## Implementation Checklist

### Phase 1: Create New Directories
- [ ] Create `python_programming/` directory
- [ ] Create `midterm_review/` directory
- [ ] Create `preexam_review/` directory

### Phase 2: Create New Files
- [ ] Create 6 files in `python_programming/`
- [ ] Create `database/pandas_basics.md`
- [ ] Create 7 files in `midterm_review/`
- [ ] Create `optimization/airss.md`
- [ ] Create optional `machine_learning/week12_guide.md`
- [ ] Create 9 files in `preexam_review/`

### Phase 3: Update Existing Files
- [ ] Update `orientation/orientation.md` - Add Materials Informatics overview
- [ ] Update `orientation/setup.md` - Add HPC setup section
- [ ] Update `orientation/programming.ipynb` - Use as Python demo
- [ ] Update `computer/index.md` - Update to reflect new focus (Git, open-source, hardware/software)
- [ ] Update `computer/git_examples.md` - Reorganize as Git fundamentals
- [ ] Create `computer/git_practice.md` - New Git practical exercises
- [ ] Update `computer/hardware.md` - Remove reading material tag (now main lecture)
- [ ] Update `computer/performance.md` - Keep reading material tag
- [ ] Update `computer/scaling.ipynb` - Keep reading material tag
- [ ] Update `computer/hpc.md` - Add note that basics covered in Week 1
- [ ] Update `database/index.md` - Add pandas_basics.md reference
- [ ] Update `atomistic_structure_I/index.md` - Reorganize sequence
- [ ] Update `atomistic_structure_II/index.md` - Reorganize sequence
- [ ] Update `optimization/index.md` - Add airss.md reference
- [ ] Update `high_throughput/introduction.md` - Remove AIRSS/GA
- [ ] Update `high_throughput/codes.md` - Move AIRSS to optimization
- [ ] Update `machine_learning_I/index.md` - Add reading material tag
- [ ] Update `machine_learning_II/index.md` - Add reading material tag

### Phase 4: Move Content
- [ ] Move Materials Informatics Overview from Week 3 to `orientation/materials_informatics.md`
- [ ] Move HPC basic setup from Week 3 to `orientation/hpc_introduction.md`
- [ ] Move AIRSS content from `high_throughput/codes.md` to `optimization/airss.md`

### Phase 5: Update Table of Contents
- [ ] Update `myst.yml` with new chapters and references

---

## Notes

- This plan ensures NO content is deleted - all existing materials are preserved
- Content not covered in lecture is marked as "Reading Material" for self-study
- New chapters are created for Week 2, Week 7, and Week 13
- Week 10 is expanded to include AIRSS (moved from Week 11)
- Week 11 is reduced by removing AIRSS and Genetic Algorithm references
- Week 12 reorganizes ML content with reading material tags for ML I & II

**Key Structural Changes:**
- **Week 1:** Now includes Materials Informatics Overview and HPC practical (moved from Week 3)
- **Week 3:** Now focuses on Git workflow, open-source software, and computer hardware/software understanding
- **Computer hardware:** Changed from reading material to main lecture content
- **HPC content:** Split between Week 1 (practical setup) and Week 3 (reference)
- **Git:** All Git content consolidated in Week 3 (no Git in Week 1)

**Next Steps:**
1. Review and approve this plan
2. Implement phases sequentially
3. Test build process
4. Verify all links and references work correctly
