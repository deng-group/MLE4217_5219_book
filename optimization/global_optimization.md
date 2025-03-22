# Global Optimization
Local optimization methods can get trapped in local minima. Global optimization algorithms are designed to explore the search space more broadly, increasing the chances of finding the global optimum.

```{figure} ../figures/global_opt.png
---
width: 100%
---
Global optimization aims to find the global minimum of a function, which may have multiple local minima. The example shows an Ackley function with multiple local minima and a single global minimum.
```

## Simulated Annealing
````{sidebar} 
```{figure} ../figures/sa.png
---
width: 100%
---
Simulated annealing and the comparison to local optimization algorithm BFGS. Simulated annealing can escape local minima by allowing moves that worsen the objective function with a certain probability.
```
````
Simulated annealing is inspired by the annealing process in metallurgy. Starts at a high "temperature" (allowing exploration) and gradually cools down (focusing on exploitation). Accepts moves that worsen the objective function with a probability that decreases with temperature.

### Algorithm
1.  Initialization: Start with an initial solution, $x_0$, and a high "temperature," $T$.
2.  Generate Neighbor: Generate a random neighboring solution, $x_{new}$, by perturbing the current solution. The nature of the perturbation depends on the problem (e.g., for a continuous variable, you might add a random number drawnfrom a normal distribution; for a discrete variable, you might randomly changeone of the components).
3.  Evaluate Energy Change: Calculate the change in the objective function (often referred to as "energy" in the context of simulated annealing), $\Delta E= f(x_{new}) - f(x_{current})$.
4.  Acceptance Criterion:
    - If $\Delta E \le 0$ (the new solution is better), accept the new solution: $x_{current} = x_{new}$.
    - If $\Delta E > 0$ (the new solution is worse), accept the new solution with a probability given by the Metropolis criterion:

        $$P(accept) = \exp(-\Delta E / (k_B T))$$

    where $k_B$ is Boltzmann's constant (often set to 1 in optimization contexts). It controls the probability of accepting worse solutions. High temperature allows for more exploration (escaping local minima), while low temperature favors exploitation (refining the solution near a good minimum). The prabablistic process ensures that the algorithm doesn't get stuck in a local minimum too early.

5.  Cooling:  Reduce the temperature, $T$, according to a *cooling schedule*.  Common schedules include:
    - Linear Cooling: $T_{k+1} = T_k - \alpha$, where $\alpha$ is a constant cooling rate.
    - Geometric Cooling: $T_{k+1} = \alpha T_k$, where $\alpha$ is a constant factor (typically between 0.8 and 0.99).
    - Adaptive Cooling:  The cooling rate is adjusted based on the progress of the algorithm.

    Cooling rate is crucial for the success of simulated annealing.  Cooling too quickly can lead to premature convergence to a local minimum, while cooling too slowly is computationally inefficient.

6.  Iteration: Repeat steps 2-5 until a stopping criterion is met (e.g., the temperature reaches a predefined minimum value, a maximum number of iterations is reached, or the objective function value hasn't improved significantly for a certain number of iterations).

## Basin Hopping

```{figure} ../figures/basin_hopping.png
---
width: 100%
---
Basin hopping and comparison to BFGS. Basin hopping combines local optimization with random perturbations to escape local minima.
```

Basin hoopping combines local optimization with random perturbations. Transforms the objective function into a "staircase" of local minima. 

It repeatedly performs local optimization (e.g., using BFGS) followed by a random perturbation of the variables (simulated to SA). Accepts or rejects moves based on a Metropolis criterion. 

It is more efficient than SA for many problems, can handle rugged energy landscapes. However it still requires tuning parameters (e.g., the size of the perturbations).

## Genetic Algorithm
These algorithms are inspired by biological evolution. They maintain a population of candidate solutions and use principles of selection, crossover, and mutation to evolve the population towards better solutions. GA's explore the search space in a parallel and stochastic manner. The combination of selection, crossover, and mutation allows the algorithm to efficiently search for good solutions, even in complex, high-dimensional problems.

### Algorithm

1. Initialization: Create an initial population of random solutions (often represented as "chromosomes" or bit strings).

2. Selection: Evaluate the "fitness" (objective function value) of each solution in the population. Select individuals for reproduction based on their fitness (e.g., using roulette wheel selection or tournament selection).

3. Crossover: Combine the "genetic material" of selected pairs of individuals to create new "offspring" solutions. This involves swapping parts of their representations.

4. Mutation: Introduce random changes to the offspring solutions. This helps to maintain diversity in the population and explore new regions of the search space.

5. Replacement: Replace some or all of the original population with the new offspring.

Repeat steps 2-5 for a specified number of generations or until a convergence criterion is met.

## Other Global Optimization Methods
- Particle Swarm Optimization (PSO): Inspired by the social behavior of birds flocking or fish schooling.
- Bayesian Optimization: Uses a probabilistic model to guide the search, particularly useful for expensive objective functions.
- Random Search: There is a correlation between basin depth and size and big basins exists in large fraction of the configurational space. Therefore, we can just randomly sample the whole space. It is simple but effective, especially for high-dimensional problems. 