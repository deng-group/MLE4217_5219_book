# Global Optimization
Global methods aim to find the global minimum, even in non-convex problems.

Generally more computationally expensive than local methods.

Often involve a combination of exploration (searching the entire space) and exploitation (refining promising regions).


## Simulated Annealing
Principle: Inspired by the annealing process in metallurgy. Starts at a high "temperature" (allowing exploration) and gradually cools down (focusing on exploitation). Accepts moves that worsen the objective function with a probability that decreases with temperature.

### Algorithm
1.  Initialization: Start with an initial solution, $x_0$, and a high"temperature," $T$.
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
Principle: Combines local optimization with random perturbations. Transforms the objective function into a "staircase" of local minima.

Algorithm: Repeatedly performs local optimization (e.g., using BFGS) followed by a random perturbation of the variables. Accepts or rejects moves based on a Metropolis criterion.

Advantages: More efficient than SA for many problems, can handle rugged energy landscapes.

Disadvantages: Still requires tuning parameters (e.g., the size of the perturbations).

Materials Example: Finding stable configurations of nanoparticles.


## Genetic Algorithm
Principle: Inspired by biological evolution. Maintains a "population" of candidate solutions that evolve through selection, crossover (recombination), and mutation.

Algorithm:

Initialization: Create a random initial population.

Selection: Select the "fittest" individuals (those with better objective function values).

Crossover: Combine the "genes" (variables) of selected individuals to create new offspring.

Mutation: Introduce random changes to the offspring's genes.

Repeat: Iterate until a stopping criterion is met.

Advantages: Well-suited for discrete and combinatorial optimization problems, can handle complex and noisy objective functions.

Disadvantages: Can be computationally expensive, requires careful tuning of parameters (population size, crossover rate, mutation rate).

Materials Example: Optimizing the composition and structure of alloys, designing new materials with specific properties.

## Other Global Optimization Methods
Particle Swarm Optimization (PSO): Inspired by the social behavior of birds flocking or fish schooling.

Differential Evolution (DE): Another evolutionary algorithm.

Bayesian Optimization: Uses a probabilistic model to guide the search, particularly useful for expensive objective functions.

Random Search: Simple but effective, especially for high-dimensional problems.
