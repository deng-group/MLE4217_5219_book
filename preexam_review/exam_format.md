# Quiz 2 Format

This document provides detailed information about Quiz 2 format and logistics.

## Quiz Overview

**Duration:** 2 hours (120 minutes)
**Coverage:** Weeks 7-12 (Models & Theories, Optimization, High-throughput, ML Potentials)
**Format:** Mixed format (multiple choice, short answer, calculation problems, conceptual questions)
**Date:** Week 13 (consult your course schedule for exact date)
**Location:** As announced by instructor

## Topics Covered

| Week | Topic | Weight |
|------|--------|---------|
| Week 8 | Models & Theories I (Force fields, MD, MC) | ~20% |
| Week 9 | Models & Theories II (DFT, electronic structure) | ~25% |
| Week 10 | Optimization (local, global, AIRSS, NEB) | ~20% |
| Week 11 | High-throughput (thermodynamics, convex hulls, phase diagrams) | ~20% |
| Week 12 | ML Potentials (descriptors, neural networks, MACE) | ~15% |

### Detailed Topic Breakdown

#### Week 8: Models & Theories I (20%)
- Multiscale modelling concepts
- Force field types (Lennard-Jones, Buckingham, Morse, EAM)
- Molecular dynamics basics (Newton's equations, ensembles, thermostats)
- Monte Carlo methods (Metropolis algorithm)
- Time integration (Velocity Verlet)

#### Week 9: Models & Theories II (25%)
- Quantum mechanics foundations (Schrödinger equation, Born-Oppenheimer)
- Density Functional Theory (Hohenberg-Kohn theorems, Kohn-Sham equiations)
- Exchange-correlation functionals (LDA, GGA, Meta-GGA, hybrids)
- Plane waves and k-point sampling
- Pseudopotentials (NCPP, USPP, PAW)

#### Week 10: Optimization (20%)
- Energy landscapes (minima, saddle points, barriers)
- Local optimization (gradient descent, conjugate gradient, BFGS)
- Global optimization (simulated annealing, basin hopping, genetic algorithms)
- AIRSS (Ab Initio Random Structure Searching)
- Transition state search (NEB, dimer method)

#### Week 11: High-throughput (20%)
- High-throughput workflow (selection, generation, storage, analysis)
- Finite-temperature thermodynamics (free energy, entropy)
- Convex hulls and phase diagrams
- Workflow management systems (FireWorks, AiiDA)
- High-throughput codes (VASP, Quantum ESPRESSO, LAMMPS)

#### Week 12: ML Potentials (15%)
- ML potential overview (motivation, advantages)
- Descriptors (SOAP, ACE, GAP)
- Neural network potentials (architecture, training)
- MACE (Higher-Order Equivariant Neural Network)
- Error analysis (MAE, RMSE, validation)

## Quiz Format

### Section 1: Multiple Choice (15-20 questions, 30-35 minutes)
- **Focus:** Definitions, concepts, comparisons
- **Examples:**
  - Which force field type is most appropriate for ionic solids?
  - What does DFT stand for and what is its main approximation?
  - Which global optimization method uses "cooling" concept?
  - What is main advantage of ML potentials over force fields?

### Section 2: Short Answer (5-7 questions, 15-20 minutes)
- **Focus:** Brief explanations, comparisons, pros/cons
- **Examples:**
  - Explain difference between NVE and NVT ensembles in MD
  - Describe difference between LDA and GGA functionals
  - What is convex hull and how is it used?
  - Explain SOAP descriptor and its key properties

### Section 3: Calculation Problems (4-6 problems, 45-60 minutes)
- **Focus:** Numerical calculations, derivations, conceptual calculations
- **Examples:**
  - Calculate plane wave energy given k-vector
  - Determine energy barrier from reaction coordinate plot
  - Calculate formation energy and check if on convex hull
  - Determine force on atom from potential energy function
  - Calculate mean absolute error of ML potential predictions

### Section 4: Conceptual Integration (2-3 problems, 15-25 minutes)
- **Focus:** Cross-topic connections, synthesis
- **Examples:**
  - Explain how ML potentials relate to DFT and force fields
  - Describe how optimization methods are used in high-throughput workflows
  - Explain how thermodynamics relates to stability prediction

## What to Bring

- ✅ NUS Student ID (for identification)
- ✅ Scientific calculator (allowed and recommended)
- ✅ Pencils/pens for calculation problems
- ❌ **No computers, laptops, or tablets allowed**
- ❌ **No internet access or notes allowed**
- ❌ **No formula sheets provided** (you must memorize key formulas)

## Time Management

```
Section 1 (MCQs):        30-35 minutes
Section 2 (Short Answer):   15-20 minutes
Section 3 (Calculations):   45-60 minutes
Section 4 (Integration):     15-25 minutes
Review:                     10-15 minutes
-----------------------
Total:                     120 minutes
```

## Scoring

| Section | Points | Percentage |
|---------|---------|------------|
| Multiple Choice | 30-35 | 25-30% |
| Short Answer | 20-25 | 15-20% |
| Calculations | 45-55 | 35-40% |
| Integration | 15-20 | 10-15% |
| **Total** | **120** | **100%** |

## Grading Criteria

### Multiple Choice
- Correct answer: Full points
- No partial credit

### Short Answer
- Correct concept: Full points
- Minor errors: Partial credit (e.g., -1-2 points)
- Incorrect concept: No credit

### Calculation Problems
- Correct final answer with units: Full points
- Correct method but arithmetic error: Partial credit (e.g., 70-80%)
- Correct answer but no units: -10% deduction
- Wrong method but correct numerical answer: Little to no credit

### Conceptual Integration
- Correct synthesis with clear explanation: Full points
- Partially correct synthesis: Partial credit (e.g., 60-80%)
- Missing key connections: Partial credit (e.g., 40-60%)
- Incorrect synthesis: Little to no credit

## Common Mistakes to Avoid

### Force Fields & MD
- ❌ Using wrong force field for material type
- ❌ Forgetting periodic boundary conditions
- ❌ Confusing ensembles (NVE vs NVT vs NPT)
- ❌ Not understanding what thermostats control

### DFT & Electronic Structure
- ❌ Confusing DFT approximations (LDA vs GGA vs hybrid)
- ❌ Not understanding what plane waves represent
- ❌ Forgetting pseudopotentials concept
- ❌ Confusing k-points with real-space vectors

### Optimization
- ❌ Confusing local vs global optimization
- ❌ Not understanding saddle points vs local minima
- ❌ Forgetting "no free lunch" theorem
- ❌ Mixing up optimization methods

### High-throughput
- ❌ Not understanding convex hull construction
- ❌ Forgetting entropy in free energy
- ❌ Confusing workflow management vs calculation codes
- ❌ Not understanding high-throughput advantage

### ML Potentials
- ❌ Confusing descriptors (SOAP vs ACE vs GAP)
- ❌ Not understanding training vs validation vs test sets
- ❌ Forgetting per-atom energy decomposition
- ❌ Not understanding error metrics (MAE vs RMSE)

## Academic Integrity

**All work must be your own. Any form of cheating will result in:**
- Zero score for quiz
- Potential disciplinary action per university policy
**Cheating includes but is not limited to:**
- Copying from others
- Using unauthorized materials
- Communicating during quiz
- Using electronic devices (except calculator)

## After Quiz

- Review your answers (if solutions provided)
- Identify weak areas for future courses/exams
- Quiz 2 score counts toward final grade

## Questions?

If you have questions about Quiz 2 format or content:
- Attend review sessions (if scheduled)
- Ask instructor during class
- Use office hours for clarification

---

**Good luck! Remember: Quiz 2 tests your understanding of computational methods and how they integrate together. Focus on concepts, not just memorization.**
