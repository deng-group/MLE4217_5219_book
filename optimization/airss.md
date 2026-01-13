# AIRSS: Ab Initio Random Structure Searching

## Overview

AIRSS (Ab Initio Random Structure Searching) is a computational method for discovering stable crystal structures by randomly generating candidate structures and relaxing them using ab initio (first-principles) calculations, typically Density Functional Theory (DFT). It is a powerful global optimization technique for exploring the potential energy landscape of materials.

## Methodology

### Basic Workflow

The AIRSS method follows a simple but powerful approach:

1. **Define a Unit Cell**: Specify the size and shape of the unit cell (which may be variable or fixed).

2. **Randomly Place Atoms**: Place atoms of the desired elements within the unit cell at random positions.

3. **Constraints (Optional)**: Impose constraints to ensure the generated structures are physically reasonable:
   - Avoid atomic overlaps (unrealistically short interatomic distances)
   - Maintain charge neutrality for ionic compounds
   - Enforce coordination preferences (e.g., tetrahedral or octahedral coordination for oxygen)

4. **Structural Relaxation**: Relax the randomly generated structures using DFT or a force field to bring them to a local energy minimum.

5. **Energy Analysis**: Compare the energies of relaxed structures to identify the most stable candidates.

### Key Features

- **Unbiased Exploration**: Does not rely on known prototypes or systematic substitutions, allowing discovery of entirely new structural motifs.
- **Global Search**: Explores a wide range of structural space by generating many random candidate structures.
- **High-Throughput**: Well-suited for parallelization on high-performance computing clusters.
- **Flexible**: Can be applied to various materials systems including solids, surfaces, clusters, and molecular systems.

## Comparison with Other Global Optimization Methods

### Genetic Algorithms (GA)

**Similarities:**
- Both explore structural space to find global energy minimum
- Both use population-based approaches (multiple structures)
- Both require large number of energy evaluations

**Differences:**
- **AIRSS**: Generates completely random structures at each iteration
- **GA**: Uses evolutionary operations (crossover, mutation) to evolve structures from a population
- **AIRSS**: Simpler conceptually, fewer parameters to tune
- **GA**: Can be more efficient for certain problems due to evolutionary pressure

### Basin Hopping

**Similarities:**
- Both use local energy minima as basis for global search
- Both can escape local minima to explore other regions of energy landscape

**Differences:**
- **AIRSS**: Generates new random structures after each local minimization
- **Basin Hopping**: Systematically modifies structure to escape current basin (e.g., by perturbing positions)
- **AIRSS**: More aggressive exploration (completely new structures)
- **Basin Hopping**: More controlled exploration (guided modifications)

### Simulated Annealing

**Similarities:**
- Both can escape local minima
- Both use random elements in search

**Differences:**
- **AIRSS**: Random structure generation + local relaxation (no temperature parameter)
- **Simulated Annealing**: Uses temperature parameter to control acceptance of higher-energy states (Metropolis criterion)
- **AIRSS**: Structural space focus
- **Simulated Annealing**: More general, applicable to various optimization problems

## Applications in Materials Science

AIRSS has been successfully used for:

- **Predicting Unknown Structures**: Discovering new stable crystal structures of materials
- **Phase Prediction**: Identifying thermodynamically stable phases at given conditions
- **Surface Structure Search**: Finding stable surface terminations and reconstructions
- **Cluster Optimization**: Determining stable geometries of atomic clusters
- **Nanomaterial Discovery**: Exploring novel nanostructures with unique properties

### Example Applications

1. **High-Pressure Phases**: Discovering new phases of materials under extreme pressure conditions
2. **Binary and Ternary Compounds**: Exploring unknown compositions in complex chemical spaces
3. **Functional Materials**: Finding structures with desired electronic, magnetic, or mechanical properties
4. **Defect Studies**: Searching for stable defect configurations in materials

## Implementation Considerations

### Number of Structures

The success of AIRSS depends on generating a sufficient number of random structures to adequately sample relevant regions of structural space. However, generating too many structures becomes computationally expensive due to the cost of DFT relaxations.

**Guidelines:**
- Start with a moderate number (e.g., 100-500 structures)
- Increase number if many structures converge to the same local minimum
- Use chemical intuition to guide the generation process and reduce search space

### Structural Constraints

Applying appropriate constraints is crucial for efficiency:

- **Distance Constraints**: Avoid unrealistically short interatomic distances
- **Symmetry Constraints**: Force structures to adopt specific space groups if prior knowledge exists
- **Volume Constraints**: Limit the range of unit cell volumes to reasonable values
- **Coordination Preferences**: Enforce typical coordination environments for elements

### Computational Cost

- Each generated structure requires a full DFT relaxation
- Parallelization is essential for practical AIRSS calculations
- Use cheaper methods (force fields, tight-binding) for initial screening if possible
- Consider using machine learning potentials to accelerate relaxations (emerging approach)

## Integration with Optimization Theory

AIRSS is a **global optimization** method that addresses the "No Free Lunch Theorem":
- No single optimization method is best for all problems
- AIRSS is particularly effective when structural space is poorly understood
- Combines well with other methods: use GA to evolve best AIRSS candidates, use basin hopping to refine AIRSS results

## Software and Tools

- **AIRSS**: Original implementation by Pickard and Needs
- **USPEX**: Universal Structure Predictor: Evolutionary Xlography (combines evolutionary algorithms with random structure generation)
- **CALYPSO**: Crystal structure AnaLYsis by Particle Swarm Optimization
- **GAtor**: Genetic Algorithm for Crystal Structure Prediction

## Further Reading

- Pickard, C. J., & Needs, R. J. "Structure prediction by AIRSS." *J. Phys.: Condens. Matter* 12, 2009.
- Oganov, A. R., & Glass, C. W. "Crystal structure prediction using ab initio evolutionary techniques." *J. Phys.: Condens. Matter* 18, 2006.
- Wang, Y., et al. "Crystal structure prediction via CALYPSO." *Comput. Phys. Commun.* 185, 2010.

## Connection to Course Topics

AIRSS relates to several topics in this course:

- **Global Optimization** (Week 10): AIRSS is a global optimization method for structure prediction
- **High-throughput Simulation** (Week 11): AIRSS is inherently high-throughput, generating and relaxing many structures
- **DFT Calculations** (Week 9): AIRSS relies on DFT (or other ab initio methods) for energy evaluations
- **Energy Landscapes** (Week 10): AIRSS explores potential energy landscapes to find global minima

```{admonition} Note
:class: note
AIRSS was previously covered in Week 11 (High-throughput Simulation). It has been moved to Week 10 (Optimization) as it is fundamentally a global optimization technique for structure prediction.
```
