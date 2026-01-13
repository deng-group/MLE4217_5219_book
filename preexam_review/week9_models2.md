# Week 9: Models and Theories II

## Key Topics

### Quantum Mechanics Foundations
- **Wave Function**: ψ(r) - describes quantum state of particle
- **Schrödinger Equation**: Ĥψ = Eψ
  - **Time-independent**: Ĥψ = Eψ (stationary states)
  - **Time-dependent**: iħ∂ψ/∂t = Ĥψ
- **Born-Oppenheimer Approximation**: Nuclei are fixed (much heavier than electrons)
- **Uncertainty Principle**: Δx·Δp ≥ ħ/2

### Electronic Structure
- **Hamiltonian**: Total energy operator
- **Self-Consistent Field (SCF)**: Iterative solution for electron density
- **Exchange-Correlation (XC)**: Accounts for electron-electron interactions
  - **Hartree-Fock**: Exact exchange (no correlation)
  - **LDA**: Local Density Approximation
  - **GGA**: Generalized Gradient Approximation
  - **Meta-GGA**: Including kinetic energy density

### Density Functional Theory (DFT)
- **Hohenberg-Kohn Theorems**:
  - **Theorem 1**: Ground state electron density uniquely determines all properties
  - **Theorem 2**: Universal functional of density exists
- **Kohn-Sham Equations**: Single-particle equations with effective potential

```
[-½∇² + V_eff(r)]ψ_i(r) = ε_iψ_i(r)

V_eff(r) = V_ext(r) + ∫ ρ(r')/|r-r'| dr' + V_XC[ρ](r)

ρ(r) = Σ_i |ψ_i(r)|² (occupied states)
```

### Plane Waves
- **Basis Set**: Expansion of wave functions in plane waves

```
ψ_k(r) = (1/√Ω) Σ_G C_k+G exp[i(k+G)·r]
```
- **Reciprocal Space**: G-vectors in reciprocal lattice
- **k-point Sampling**: Sampling Brillouin zone (Monkhorst-Pack, Gamma-centered)
- **Cutoff Energy**: E_cut = ħ²|k+G|²/2m (controls basis set size)

### Pseudopotentials
- **Purpose**: Replace core electrons with effective potential
- **Types**:
  - **Norm-Conserving (NCPP)**: Original approach
  - **Ultrasoft (USPP)**: Smoother, require small basis
  - **Projector Augmented Wave (PAW)**: Modern standard
- **Advantages**: Reduces number of electrons, allows smaller basis sets

## Key Concepts

### Functional Hierarchy
| Level | Name | Typical Accuracy |
|--------|------|------------------|
| LDA | PBE, PW92 | ±10% for energies |
| GGA | PBE, BLYP | ±5% for energies |
| Meta-GGA | TPSS, SCAN | ±2-3% for energies |
| Hybrids | B3LYP, HSE06 | ±1% for energies |

### k-point Sampling
- **Monkhorst-Pack**: Grid shifted to include Γ point
- **Gamma-centered**: Includes Γ point, denser near zone center
- **Convergence**: Test increasing k-point density until energy stabilizes

### Cutoff Convergence
- **Energy cutoff**: Increase until total energy converges (<1 meV/atom)
- **Force cutoff**: Typically higher than energy cutoff (for geometry optimization)

## Common Pitfalls

- ❌ Not converging k-points or cutoff
- ❌ Using LDA for van der Waals systems
- ❌ Forgetting pseudopotential core radius (ultrasoft limits)
- ❌ Confusing total energy and Fermi energy

## Practice Skills

1. **Calculate plane wave energy**: E = ħ²|k+G|²/2m
2. **Choose functional**: Metals → GGA (e.g., PBE); systems requiring accuracy → hybrid
3. **Convergence test**: Increase k-points or cutoff until energy change <1 meV
4. **Understand basis**: More plane waves = larger basis = higher accuracy, more expensive

## Links to Review

- [Models & Theories II Chapter](../models_and_theories_II/)
- [DFT Theory](../models_and_theories_I/dft.md)
- [Statistical Mechanics](../models_and_theories_II/statistical_mech.md)
- [Practical: MD & MC](../models_and_theories_II/md_mc.ipynb)
