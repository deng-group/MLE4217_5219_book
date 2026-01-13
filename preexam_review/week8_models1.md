# Week 8: Models and Theories I

## Key Topics

### Multiscale Modelling
- **Concept**: Using different models at different length and time scales
- **Scales**: Electronic (Å), atomic (nm), micro (µm), meso (mm), macro (cm-m)
- **Hierarchy**: Quantum → atomistic → continuum
- **Importance**: No single method works for all scales; choose appropriate method for each scale

### Force Fields
- **Definition**: Empirical potentials describing interactions between atoms
- **Types**:
  - **Lennard-Jones**: Van der Waals + repulsion (rare earth gases)
  - **Buckingham**: Exponential repulsion + van der Waals (ionic solids)
  - **Morse**: Bond-specific (covalent materials)
  - **Tersoff**: Metals (embedded atom method)
  - **Embedded Atom Method (EAM)**: Metals (electron density dependent)
- **Applications**:
  - Molecular dynamics simulations
  - Energy minimizations
  - Studying thermal properties
- **Advantages**: Fast, can simulate large systems (10⁶-10⁸ atoms)
- **Limitations**: Parameterized, transferability issues

### Molecular Dynamics (MD) Basics
- **Definition**: Numerical integration of Newton's equations of motion
- **Equation**: F = ma (force = mass × acceleration)
- **Time step**: Typically 0.5-2 fs (femtosecond)
- **Ensembles**:
  - **NVE (Microcanonical)**: Constant number, volume, energy
  - **NVT (Canonical)**: Constant number, volume, temperature
  - **NPT (Isobaric-isothermal)**: Constant number, pressure, temperature
- **Thermostats**: Berendsen, Nosé-Hoover (control temperature)
- **Barostats**: Andersen, Parrinello-Rahman (control pressure)

### Monte Carlo Methods
- **Concept**: Random sampling of configuration space
- **Metropolis Algorithm**: Accept/reject moves based on energy change and temperature
- **Applications**:
  - Study phase transitions
  - Calculate thermodynamic properties
  - Explore configuration space
- **Difference from MD**: MC samples configuration space; MD samples real-time trajectories

## Key Concepts

### Time Integration (MD)
```
F = -∇V(r)  (Force is negative gradient of potential)

a(t) = F(t) / m

r(t+Δt) = r(t) + v(t)Δt + (1/2)a(t)Δt²

v(t+Δt) = v(t) + (1/2)[a(t) + a(t+Δt)]Δt
```
This is velocity Verlet algorithm.

### Metropolis Criterion
```
Acceptance probability P = min(1, exp(-ΔE/k_BT))
```
Where ΔE is energy change, k_B is Boltzmann constant, T is temperature.

### Periodic Boundary Conditions
- Particles that leave one side of simulation box enter from opposite side
- Eliminates surface effects
- Simulates bulk material with finite number of particles

## Common Pitfalls

- ❌ Using wrong force field for material type
- ❌ Time step too large (instability) or too small (inefficient)
- ❌ Not properly equilibriating system before data collection
- ❌ Confusing MC and MD methods

## Practice Skills

1. **Identify force field type**: For ionic solid → Buckingham potential
2. **Calculate force**: F = -∇V (negative gradient of potential)
3. **Choose ensemble**: NVT for constant temperature simulation
4. **Metropolis acceptance**: P = min(1, exp(-ΔE/k_BT))
5. **Periodic boundaries**: r_mod = r % L (modulus with box length)

## Links to Review

- [Models & Theories I Chapter](../models_and_theories_I/)
- [Modelling Overview](../models_and_theories_I/modelling.md)
- [Force Fields](../models_and_theories_I/force_fields.md)
- [Practical: ASE](../models_and_theories_I/ase.ipynb)
