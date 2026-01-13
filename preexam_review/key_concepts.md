# Key Concepts Summary

This document provides a summary of key concepts and formulas from Weeks 7-12, organized by topic. Focus on these for Quiz 2.

## Force Fields & Molecular Dynamics

### Force Field Energy
```
E_total = Σ_i<j V(r_ij) + Σ_i V_i(r_i)
```
- V(r_ij): Pairwise interaction between atoms i and j
- V_i(r_i): One-body energy (embedding function for EAM)

### Newton's Equation
```
F = m·a
```
- F: Force
- m: Mass
- a: Acceleration

### Velocity Verlet Integration
```
r(t+Δt) = r(t) + v(t)Δt + (1/2)a(t)Δt²

v(t+Δt) = v(t) + (1/2)[a(t) + a(t+Δt)]Δt
```

### Metropolis Criterion (Monte Carlo)
```
P_accept = min(1, exp(-ΔE/k_BT))
```
- ΔE: Energy change
- k_B: Boltzmann constant (1.381 × 10⁻²³ J/K)
- T: Temperature (K)

### Thermostats (Temperature Control)
- **Berendsen**: v_new = v + λ(T_target - T_current)
- **Nosé-Hoover**: Langevin dynamics with friction
- **Andersen**: Randomly rescale velocities

### Barostats (Pressure Control)
- **Andersen**: Periodically add/remove particles or rescale box
- **Parrinello-Rahman**: MTK barostat with scaling matrix

## Density Functional Theory

### Schrödinger Equation
```
iħ∂ψ/∂t = Ĥψ (time-dependent)
Ĥψ = Eψ (time-independent)
```
- ħ: Reduced Planck constant (h/2π)
- Ĥ: Hamiltonian operator
- E: Energy eigenvalue

### Hohenberg-Kohn Theorems
- **Theorem 1**: Ground state electron density uniquely determines all properties
- **Theorem 2**: Universal functional of density exists

### Kohn-Sham Equations
```
[-½∇² + V_eff(r)]ψ_i(r) = ε_iψ_i(r)

V_eff(r) = V_ext(r) + ∫ ρ(r')/|r-r'| dr' + V_XC[ρ](r)

ρ(r) = Σ_i |ψ_i(r)|² (occupied states)
```
- V_ext: External potential (nuclei + electrons)
- V_H: Hartree potential (electron-electron repulsion)
- V_XC: Exchange-correlation potential

### Plane Wave Energy
```
E_k = ħ²|k+G|²/2m
```
- k: k-vector
- G: Reciprocal lattice vector
- m: Electron mass

### Exchange-Correlation Functionals

| Functional | Name | Typical Accuracy |
|-----------|------|-------------------|
| LDA | SVWN, PW92 | ±10% |
| GGA | PBE, BLYP | ±5% |
| Meta-GGA | TPSS, SCAN | ±2-3% |
| Hybrids | B3LYP, HSE06 | ±1% |

## Thermodynamics & Phase Diagrams

### Gibbs Free Energy
```
G = E - TS + pV
```
- G: Gibbs free energy
- E: Internal energy
- T: Temperature
- S: Entropy
- p: Pressure
- V: Volume

### Harmonic Approximation for Vibrational Entropy
```python
import numpy as np

def vibrational_entropy(temperatures, frequencies):
    """
    Calculate vibrational entropy using harmonic approximation.
    """
    k_B = 1.380649e-23  # J/K
    h = 6.62607015e-34  # J·s
    
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

### Formation Energy
```
E_f(AB) = E(AB) - E(A) - E(B)
```
- E_f: Formation energy per formula unit
- E(AB): Energy of compound
- E(A), E(B): Energies of elemental reference states

### Convex Hull Stability
- **Points on hull**: Thermodynamically stable
- **Points above hull**: Metastable or unstable
- **Hull distance**: Energy above convex hull (eV/atom)

## Optimization

### Gradient Descent
```
x_new = x - α∇f(x)
```
- α: Learning rate (step size)
- ∇f(x): Gradient of objective function

### Metropolis Criterion (Simulated Annealing)
```
P_accept = min(1, exp(-ΔE/k_BT))
```
- ΔE: Energy change
- T: Current "temperature" (acceptance probability)

### Saddle Point (Transition State)
- **Hessian matrix**: Second derivatives of energy
- **Eigenvalues**: One positive (negative curvature), others negative (positive curvature)
- **Minimum**: All eigenvalues positive
- **Maximum**: All eigenvalues negative
- **Saddle point**: Mixed eigenvalues (at least one positive, one negative)

### NEB (Nudged Elastic Band)
- Connects reactant and product with "springs"
- Minimizes perpendicular to band to find saddle point
- Iterative refinement with DFT calculations

## Machine Learning Potentials

### Energy Decomposition
```
E_total = Σ_i E_local(environment_i)
```
- E_total: Total potential energy
- E_local: Per-atom energy contribution
- environment_i: Local atomic environment

### Force Calculation
```
F_i = -∇_ri E_total
```
- F_i: Force on atom i
- ∇_ri: Gradient with respect to atomic position

### SOAP Descriptor
- **Rotationally invariant**: Same environment → same descriptor
- **Smooth**: Continuous function of atomic positions
- **Key parameters**:
  - r_cut: Cutoff radius (typically 4-6 Å)
  - n_max: Radial basis functions
  - l_max: Angular basis functions

### ACE Descriptor
- **Compact**: More compact than SOAP
- **Efficient**: Fast evaluation
- **Equivariant**: Naturally handles periodic boundary conditions

### Neural Network Architecture
```
Input (descriptor) → Hidden Layers → Output (energy per atom)
```

### Error Metrics
```
MAE = (1/n) Σ|y_pred - y_true|

RMSE = √[(1/n) Σ(y_pred - y_true)²]
```
- MAE: Mean Absolute Error
- RMSE: Root Mean Squared Error
- n: Number of samples

## Cross-Topic Connections

### Force Fields + DFT
- Force fields: Fast, approximate (empirical)
- DFT: Slow, accurate (first-principles)
- **ML Potentials**: Bridge gap (accuracy of DFT, speed of force fields)

### Optimization + DFT
- DFT calculations: Expensive energy evaluations
- Optimization: Explores energy landscape
- **High-throughput**: Many DFT evaluations (requires automation)

### ML Potentials + Optimization
- ML potentials: Accelerate energy/force predictions
- Optimization: Find minimum energy configurations
- **Application**: Fast geometry optimization using ML potentials, refine with DFT

### Thermodynamics + High-throughput
- Thermodynamics: Stability predictions at finite T
- High-throughput: Screen many materials
- **Integration**: Calculate convex hulls from DFT data + entropy predictions

### ML Potentials + Molecular Dynamics
- DFT-MD: Too expensive (ps-nm scale)
- Force field-MD: Fast but approximate
- **MLP-MD**: Near-DFT accuracy at force field speed

## Important Constants

| Constant | Symbol | Value | Units |
|-----------|---------|--------|-------|
| Planck constant | h | 6.626 × 10⁻³⁴ | J·s |
| Reduced Planck constant | ħ | h/2π | J·s |
| Boltzmann constant | k_B | 1.381 × 10⁻²³ | J/K |
| Electron mass | m_e | 9.109 × 10⁻³¹ | kg |
| Elementary charge | e | 1.602 × 10⁻¹⁹ | C |
| Speed of light | c | 2.998 × 10⁸ | m/s |
| Avogadro's number | N_A | 6.022 × 10²³ | mol⁻¹ |

## Quick Reference

### Force Fields to Choose
| System | Force Field |
|---------|-------------|
| Rare gases | Lennard-Jones |
| Ionic solids | Buckingham, EAM |
| Covalent materials | Morse, EAM |
| Metals | EAM, Tersoff |

### DFT Functional Guide
| Goal | Functional |
|------|-----------|
| General purpose (fast) | GGA (PBE) |
| Improved accuracy | Meta-GGA (SCAN) |
| Highest accuracy (slow) | Hybrids (B3LYP, HSE06) |
| Metals | GGA |
| Band gaps | Hybrid or Meta-GGA |

### Optimization Algorithm Selection
| Problem Type | Algorithm |
|-------------|-----------|
| Refine known structure | BFGS, conjugate gradient |
| Find unknown global minimum | AIRSS, genetic algorithm |
| Explore energy landscape | Simulated annealing, basin hopping |
| Find transition state | NEB, dimer method |

## Study Tips

```{admonition} Memorization Strategy
:class: tip
Focus on understanding concepts rather than memorization. However, some formulas should be at your fingertips:

- Plane wave energy
- Gradient descent update
- Metropolis criterion
- Formation energy
- Gibbs free energy
- MAE and RMSE calculations

Other formulas should be derivable from first principles.
```

---

**Focus on understanding connections between topics and applying concepts to new problems. Quiz 2 tests your integrated knowledge of computational materials science.**
