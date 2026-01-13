# Week 10: Optimization

## Key Topics

### Energy Landscapes
- **Definition**: Surface or hypersurface representing energy as function of parameters
- **Minima**: Local minima (stable configurations)
- **Global Minimum**: Lowest energy configuration
- **Saddle Points**: Transition states (maxima in one direction, minima in others)
- **Barrier Height**: Energy difference between minimum and saddle point

```python
# Example: 1D energy landscape
def energy_potential(x):
    """Simple 1D potential with two local minima"""
    return x**4 - 2*x**2 + 0.5*x

# Local minima at x = -1 and x = 1
# Global minimum at x = 1 (E = -0.25)
```

### Local Optimization
- **Purpose**: Find local minimum nearest to starting point
- **Gradient Descent**:
  - Move in direction of steepest descent
  - Step size (learning rate) determines convergence
  - Simple but can get trapped in local minima

```python
# Gradient descent step
x_new = x - alpha * gradient(x)
```

- **Conjugate Gradient**:
  - More sophisticated than gradient descent
  - Uses conjugate directions for faster convergence
  - Often used in materials optimization (e.g., FIRE algorithm)

- **BFGS (Broden-Fletcher-Goldfarb-Shanno)**:
  - Quasi-Newton method
  - Approximates Hessian matrix
  - More efficient for well-behaved landscapes

- **Applications**: Geometry optimization, finding local energy minima, structure refinement

### Global Optimization
- **Purpose**: Find global minimum across entire energy landscape
- **No Free Lunch Theorem**: No single algorithm is best for all problems

#### Simulated Annealing
- **Inspiration**: Cooling metal to find lowest energy state
- **Algorithm**:
  1. Start at high temperature
  2. Make random moves
  3. Accept higher-energy moves with probability P = exp(-ΔE/k_BT)
  4. Gradually reduce temperature
  5. Converge to low-energy state

```python
# Metropolis acceptance criterion
acceptance = random() < exp(-delta_E / (k_B * temperature))
```

- **Applications**: Crystal structure prediction, global energy minimization

#### Basin Hopping
- **Concept**: Systematically escape local minima to explore others
- **Algorithm**:
  1. Minimize to local minimum
  2. Perturb structure to escape basin
  3. Minimize to new local minimum
  4. Accept if energy lower or based on criterion
- **Advantages**: Controlled exploration of energy landscape

#### Genetic Algorithms
- **Inspiration**: Biological evolution
- **Key Operations**:
  - **Selection**: Choose best structures (lowest energies)
  - **Crossover**: Combine structures from parents
  - **Mutation**: Randomly modify structures
- **Population**: Maintain multiple structures simultaneously
- **Applications**: Crystal structure prediction, materials discovery

#### AIRSS (Ab Initio Random Structure Searching)
- **Method**: Randomly generate structures, relax with DFT
- **Workflow**:
  1. Define unit cell size/shape
  2. Randomly place atoms
  3. Apply constraints (charge neutrality, distances)
  4. Relax each structure with DFT
  5. Identify lowest-energy structures
- **Applications**: Discovery of new stable phases, high-pressure materials

### Transition State Search
- **Nudged Elastic Band (NEB)**:
  - Connect reactant and product states with elastic "spring"
  - Minimize entire band to find saddle point
  - Widely used for calculating reaction barriers

- **Dimer Method**:
  - Uses two copies of system separated by small distance
  - Minimizes perpendicular direction to find saddle point
  - Good for large systems

- **Applications**: Reaction pathways, diffusion barriers, phase transitions

## Key Concepts

### Optimization Terminology
- **Convergence**: When algorithm stops improving
- **Tolerance**: Threshold for convergence (e.g., max force < 0.01 eV/Å)
- **Objective Function**: Energy function to minimize
- **Parameters**: Variables (atomic positions, lattice vectors)

### Comparison: Local vs Global

| Aspect | Local Optimization | Global Optimization |
|--------|-------------------|-------------------|
| Goal | Find nearest local minimum | Find global minimum |
| Guarantee | Gets trapped in local minima | No guarantee (stochastic) |
| Speed | Faster | Slower (many evaluations) |
| Cost | Few energy calculations | Many energy calculations |
| Best For | Refining known structures | Exploring unknown landscape |

## Common Pitfalls

- ❌ Using only local optimization for structure prediction
- ❌ Step size too large (oscillations) or too small (slow convergence)
- ❌ Not verifying convergence criteria
- ❌ Forgetting that global optimization is expensive
- ❌ Assuming single algorithm works for all problems (no free lunch)

## Practice Skills

1. **Calculate gradient**: ∇V(x) = [∂V/∂x, ∂V/∂y, ∂V/∂z]
2. **Gradient descent**: x_new = x - α∇V(x)
3. **Metropolis acceptance**: P = min(1, exp(-ΔE/k_BT))
4. **Define energy landscape**: E = ax⁴ + bx² + cx (multidimentional)
5. **Identify saddle point**: One positive, one negative eigenvalue of Hessian

## Links to Review

- [Optimization Chapter](../optimization/)
- [Local Optimization](../optimization/local_optimization.md)
- [Global Optimization](../optimization/global_optimization.md)
- [AIRSS Guide](../optimization/airss.md)
- [Transition State Search](../optimization/transition_state.md)
- [Practical: Optimization](../optimization/optimization.ipynb)
