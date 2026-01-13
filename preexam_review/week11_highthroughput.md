# Week 11: High-throughput Simulation

## Key Topics

### High-throughput Overview
- **Definition**: Systematic and automated screening of many materials
- **Purpose**: Accelerate discovery, explore large chemical spaces
- **Scale**: Hundreds to thousands of materials per study
- **Key Advantage**: Breaks big problem into manageable pieces

### Workflow Stages

#### 1. Data Selection
- **From Databases**: ICSD, CSD, COD, Materials Project
- **Prototypes**: Use known crystal structures (perovskite, spinel, etc.)
- **Elemental Substitution**: Replace elements in prototype sites
  - Example: SrTiO₃ → (Ca, Ba, Mg)TiO₃ → SrTi(Zr, Hf)O₃
- **Combinatorial Approaches**: Combine building blocks into new structures

#### 2. Data Generation
- **Simulations**: DFT, force fields, Monte Carlo
- **Automation**: Scripts to set up, run, and monitor calculations
- **Parallelization**: Distribute across HPC nodes (MPI, OpenMP)
- **Standardization**: Consistent input parameters (e.g., MP input sets)

#### 3. Data Storage
- **Formats**: JSON, CSV, HDF5, XYZ
- **Databases**: MongoDB, PostgreSQL, SQL databases
- **Provenance Tracking**: Record all parameters for reproducibility
- **Metadata**: Code versions, dates, input parameters

#### 4. Data Analysis
- **Thermodynamics**: Phase stability, convex hulls
- **Visualization**: Phase diagrams, property maps
- **Statistics**: Trends, correlations, outliers
- **Machine Learning**: Predict properties, classify structures

### Thermodynamics and Finite Temperature

```{admonition} Note
:class: tip
**Structure prediction methods** like AIRSS and Genetic Algorithms are covered in **[Week 10: Optimization](../optimization/airss.md)**. This week focuses on thermodynamics for known structures.
```

#### Free Energy
```
G = E - TS + pV
```
- **G**: Gibbs free energy
- **E**: Internal energy (from DFT/force fields)
- **T**: Temperature
- **S**: Entropy
- **pV**: PV work (for gases)

#### Entropy Contributions
- **Vibrational**: Phonons (finite temperature effects)
- **Configurational**: Mixing, disorder, solid solutions
- **Electronic**: Electronic entropy at high temperature
- **Magnetic**: Magnetic ordering entropy

#### Convex Hulls
- **Definition**: Lower envelope of stable phases
- **Construction**:
  1. Calculate formation energies
  2. Plot compositions vs energies
  3. Draw convex hull
- **Stability**: Points on hull = stable; above hull = metastable
- **Applications**: Phase diagrams, decomposition reactions

```python
# Convex hull calculation (simplified)
from scipy.spatial import ConvexHull

energies = [-10.5, -8.2, -7.0, -5.8]  # Formation energies
compositions = [(0, 1), (0.5, 0.5), (0.75, 0.25), (1, 0)]  # Composition vectors

hull = ConvexHull(compositions)
stable_points = hull.vertices
```

### Phase Diagrams
- **Ternary Phase Diagrams**: Three-component systems
- **Binary Phase Diagrams**: Two-component systems
- **Reading**: Identify phases, eutectics, peritectics
- **Applications**: Stability prediction, processing conditions

### High-throughput Codes
- **Workflow Managers**:
  - FireWorks: Python-based, integrates with pymatgen
  - AiiDA: General-purpose computational science workflows
  - Custodian: Error handling for computational workflows
  - Atomate 2: High-level interface for HT calculations

- **DFT Codes**: VASP, Quantum ESPRESSO, CASTEP, GPAW
- **MD Codes**: LAMMPS, GROMACS
- **Parallel Computing**: MPI, OpenMP, SLURM job scheduling

## Key Concepts

### High-throughput vs Traditional Methods

| Aspect | Traditional | High-throughput |
|--------|-------------|-----------------|
| **Number of Materials** | 1-10 | 100-10,000+ |
| **Automation** | Manual | Automated scripts/workflows |
| **Time** | Months-years | Weeks-months |
| **Data Management** | Minimal | Centralized databases |
| **Reproducibility** | Variable | Strict tracking |

### Entropy Approximations

```python
# Harmonic approximation for vibrational entropy
import numpy as np

def vibrational_entropy(temperatures, frequencies):
    """
    Calculate vibrational entropy using harmonic approximation.
    
    Args:
        temperatures: Array of temperatures (K)
        frequencies: Array of vibrational frequencies (cm^-1)
    
    Returns:
        Entropy in J/mol/K
    """
    k_B = 1.380649e-23  # Boltzmann constant (J/K)
    h = 6.62607015e-34  # Planck constant (J·s)
    c = 299792458  # Speed of light (m/s)
    
    # Convert frequencies to energy
    energies = frequencies * h * c * 100  # cm^-1 to J
    
    S_vib = np.zeros_like(temperatures)
    
    for i, T in enumerate(temperatures):
        for omega in energies:
            if omega > 0:
                x = omega / (k_B * T)
                S_vib[i] += k_B * ((x / np.exp(x) - 1) - np.log(1 - np.exp(-x)))
    
    return S_vib * 6.022e23  # Convert to J/mol/K
```

### Workflow Management

```python
# Example FireWorks workflow
from fireworks import Firework, Workflow, LaunchPad

# Define individual jobs (calculations)
job1 = Firework(VASPCalculation, name="structure1")
job2 = Firework(VASPCalculation, name="structure2")
job3 = Firework(AnalysisTask, name="analysis")

# Define workflow: job1 and job2 run in parallel, job3 runs after both
wf = Workflow([job1, job2], [job3])

# Launch workflow
launchpad = LaunchPad()
launchpad.add_wf(wf)
launchpad.launch()
```

## Common Pitfalls

- ❌ Not converging DFT parameters consistently
- ❌ Forgetting provenance tracking
- ❌ Not validating results (sanity checks)
- ❌ Insufficient sampling of compositional space
- ❌ Ignoring finite-temperature effects (entropy)
- ❌ Overlooking stability criteria (convex hull distance)

## Practice Skills

1. **Calculate formation energy**: E_f = E(AB) - E(A) - E(B)
2. **Build convex hull**: Use scipy.spatial.ConvexHull
3. **Gibbs free energy**: G = E - TS + pV
4. **Identify phases**: Use binary/ternary phase diagrams
5. **Set up workflow**: FireWorks, AiiDA, or custom scripts

## Links to Review

- [High-throughput Simulation Chapter](../high_throughput/)
- [Workflow](../high_throughput/workflow.md)
- [Thermodynamics](../high_throughput/thermodynamics.md)
- [Codes](../high_throughput/codes.md)
- [Practical: High-throughput](../high_throughput/high_throughput.ipynb)
