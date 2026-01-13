# Quiz 2 Guide

This guide provides preparation tips and study strategy for Quiz 2, covering Weeks 7-12.

## Quiz Overview

**Duration:** 2 hours (120 minutes)
**Coverage:** Weeks 7-12 (Models & Theories I/II, Optimization, High-throughput, ML Potentials)
**Format:** Mixed format (multiple choice, short answer, calculation problems, conceptual integration)
**Date:** Week 13 (consult your course schedule for exact date)
**Location:** As announced by instructor

## How This Quiz Differs from Quiz 1

| Aspect | Quiz 1 | Quiz 2 |
|--------|---------|---------|
| **Focus** | Programming, databases, basic concepts | Theoretical understanding, integration |
| **Skills** | Git, Python, Pandas, NumPy, Matplotlib | Understanding methods, derivations, calculations |
| **Scope** | Weeks 1-5 | Weeks 7-12 |
| **Type** | Foundational skills | Advanced topics |
| **Integration** | Minimal | Heavy (cross-week connections) |

## Study Strategy

### Phase 1: Content Review (Weeks 1-5 before Quiz 1, Weeks 7-12 now)
```
Week 1-2 (before Quiz 1)
├─ Review Quiz 1 materials
├─ Identify weak areas from Quiz 1
└─ Refresh on programming skills (if needed)

Weeks 7-12 (current focus)
├─ Read all lecture notes carefully
├─ Watch lecture videos (if available)
├─ Complete all practical notebooks
└─ Create summary sheets for each week
```

### Phase 2: Conceptual Understanding
- **Focus on concepts** rather than memorization
- **Make connections** between weeks (e.g., how optimization relates to ML potentials)
- **Understand why** methods work, not just how
- **Create concept maps** linking related topics

### Phase 3: Formula Practice
- **Derive key formulas** from first principles
- **Practice calculations** with sample problems
- **Units are critical** - always include them!
- **Estimate orders of magnitude** for sanity checking

### Phase 4: Problem-Solving Practice
- Work through **practice problems** from each week
- Focus on **calculation problems** (major part of Quiz 2)
- Practice **timing** with practice quizzes
- Identify **common mistakes** to avoid

## Week-by-Week Study Guide

### Week 8: Models & Theories I (2-3 hours)
**Focus:** Force fields, MD basics, MC methods

**Key to Review:**
- Force field equations (pairwise + one-body)
- Velocity Verlet integration
- Ensemble differences (NVE vs NVT vs NPT)
- Metropolis criterion
- Thermostats and barostats

**Self-Check:**
- Can you derive forces from potential energy?
- Can you calculate vibrational entropy?
- Do you understand MD vs MC differences?

**Common Pitfalls:**
- Confusing NVE and NVT ensembles
- Forgetting what thermostats control
- Mixing up MC and MD methods

### Week 9: Models & Theories II (3-4 hours)
**Focus:** DFT fundamentals, electronic structure

**Key to Review:**
- Schrödinger equation (time-independent)
- Hohenberg-Kohn theorems
- Kohn-Sham equations
- Exchange-correlation functionals (LDA, GGA, Meta-GGA, hybrids)
- Plane waves and k-points
- Pseudopotentials

**Self-Check:**
- Can you explain Born-Oppenheimer approximation?
- Can you calculate plane wave energy?
- Do you understand functional hierarchy (LDA < GGA < Meta-GGA < hybrids)?

**Common Pitfalls:**
- Confusing DFT approximations
- Not understanding k-point sampling
- Mixing up pseudopotentials and basis sets

### Week 10: Optimization (2-3 hours)
**Focus:** Energy landscapes, local & global optimization, AIRSS, NEB

**Key to Review:**
- Energy landscape concepts (minima, saddle points, barriers)
- Gradient descent and BFGS
- Global optimization methods (simulated annealing, basin hopping, genetic algorithms)
- AIRSS methodology
- Transition state search (NEB, dimer)
- "No free lunch" theorem

**Self-Check:**
- Can you distinguish local vs global optimization?
- Can you write Metropolis criterion?
- Do you understand saddle points vs minima?
- Can you explain AIRSS workflow?

**Common Pitfalls:**
- Assuming single algorithm works for all problems
- Confusing local and global optimization
- Forgetting "no free lunch" theorem

### Week 11: High-throughput (3-4 hours)
**Focus:** Workflows, thermodynamics, convex hulls, phase diagrams

**Key to Review:**
- High-throughput workflow stages
- Finite-temperature thermodynamics (free energy, entropy)
- Convex hull construction
- Phase diagram interpretation
- Workflow management systems (FireWorks, AiiDA)

**Self-Check:**
- Can you calculate Gibbs free energy?
- Can you build convex hull from formation energies?
- Do you understand stability on vs off hull?
- Can you read binary phase diagrams?

**Common Pitfalls:**
- Forgetting entropy in free energy
- Not understanding convex hull stability criteria
- Mixing up workflow management and calculation codes

### Week 12: ML Potentials (3-4 hours)
**Focus:** Descriptors, neural networks, MACE, error analysis

**Key to Review:**
- ML potential motivation (bridge DFT + force fields)
- SOAP, ACE, GAP descriptors
- Neural network potentials architecture
- MACE (Higher-Order Equivariant Neural Network)
- Training/validation/test split
- Error metrics (MAE, RMSE)
- Energy decomposition (per-atom contributions)
- Force calculation from energy gradients

**Self-Check:**
- Can you explain SOAP descriptor properties?
- Do you understand energy decomposition?
- Can you calculate MAE and RMSE?
- Do you understand ML potential advantages?

**Common Pitfalls:**
- Confusing descriptors (SOAP vs ACE vs GAP)
- Forgetting training vs validation vs test sets
- Not understanding per-atom energy decomposition
- Ignoring forces in training

## Time Management During Quiz

**Recommended Timing:**
```
Section 1 (MCQs):        30-35 minutes
Section 2 (Short Answer):   15-20 minutes
Section 3 (Calculations):   45-60 minutes
Section 4 (Integration):     15-25 minutes
Review:                     10-15 minutes
-----------------------
Total:                     120 minutes
```

**Strategy:**
- **Start with what you know best**: Don't waste time on difficult problems first
- **Budget calculation time**: These take longest; don't get stuck
- **Show your work**: Partial credit available for correct methods
- **Skip and return**: If stuck, move on and come back
- **Check units**: Always include units in final answers

## Day Before Quiz

**Study Activities:**
- Light review only (no cramming)
- Work through 1-2 practice calculation problems
- Review key formulas (from [Key Concepts](key_concepts.md))
- Get good sleep (critical for problem-solving)
- Prepare materials (ID, calculator, pencils)

**Avoid:**
- Cramming new material at last minute
- Pulling all-nighter (cognitive function decreases)
- Studying only one topic (balance your review)

## During Quiz

**Before Starting:**
- Read entire quiz first (understand structure and time budget)
- Note point values for each section
- Plan your approach (start with highest-value problems)

**While Answering:**
- Read each question carefully
- Show all work for calculation problems
- Include units in all numerical answers
- Use space for scratch work
- Budget your time (don't spend 15 minutes on 2-point question)

**Time Management Tips:**
- Check clock periodically
- If behind, skip current problem and return
- If ahead, review previous answers
- Don't leave early (use all time for review)

## After Quiz

- **Don't panic**: Everyone finds some questions difficult
- **Learn from mistakes**: Review what you got wrong
- **Identify patterns**: Were calculation errors conceptual or careless?
- **Plan improvement**: Focus on weak areas for future courses/exams

## Common Quiz 2 Mistakes

### Calculation Errors
- ❌ Arithmetic mistakes (e.g., sign errors in forces)
- ❌ Unit conversions (e.g., eV to J)
- ❌ Missing units in final answer
- ❌ Calculator errors (double-check calculations)
- ❌ Copying numbers incorrectly (from problem statement)

### Conceptual Errors
- ❌ Confusing similar concepts (e.g., LDA vs GGA vs hybrids)
- ❌ Not understanding limitations of methods (e.g., DFT vs force fields)
- ❌ Forgetting key assumptions (e.g., Born-Oppenheimer)
- ❌ Mixing up methodologies (e.g., MD vs MC vs DFT)

### Time Management Errors
- ❌ Spending too long on one problem
- ❌ Not reading entire quiz first
- ❌ Leaving easy points on table (rushing through MCQs)
- ❌ Not returning to skipped problems

## Practice Quiz 1 Review

Before diving into Quiz 2 prep, briefly review Quiz 1:

**Quiz 1 Strengths to Build On:**
- Programming skills (Git, Python, NumPy, Pandas)
- Data handling and visualization
- Crystal structure basics
- Database queries (Materials Project API)

**Quiz 1 Weak Areas to Address:**
- Any mistakes you made
- Topics you found confusing
- Time pressure issues (if any)

**Transition to Quiz 2:**
- Quiz 2 is more theoretical and integrated
- Build on Quiz 1 foundation
- Add Weeks 7-12 topics
- Practice cross-topic connections

## Resources

### Study Materials
- [Week 8 Review](week8_models1.md)
- [Week 9 Review](week9_models2.md)
- [Week 10 Review](week10_optimization.md)
- [Week 11 Review](week11_highthroughput.md)
- [Week 12 Review](week12_ml.md)
- [Key Concepts Summary](key_concepts.md)
- [Exam Format Details](exam_format.md)

### Practice
- Review all calculation problems from weekly reviews
- Work through integration problems
- Practice formula derivations
- Time yourself with practice quizzes

### Support
- Attend review sessions (if scheduled)
- Ask instructor questions during class
- Use office hours for clarification
- Form study groups (teaching reinforces learning)

## Final Tips

```{admonition} Success Strategy
:class: tip
1. **Understand concepts** over memorization
2. **Practice calculations** with units
3. **Make connections** between weeks
4. **Manage time wisely** during quiz
5. **Show your work** for partial credit
6. **Stay calm** and focused
```

---

**You've learned a lot this semester! Quiz 2 tests your integrated understanding of computational materials science methods. Focus on applying concepts to solve problems, not just recalling facts. Good luck!**
