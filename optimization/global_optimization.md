# Global Optimization
Materials optimization problems often involve non-convex objective functions with multiple local minima. Local optimization methods, while efficient for finding a local minimum, can easily get trapped and fail to find the global minimum. This is where global optimization algorithms come into play. Global optimization methods are designed to explore the search space more broadly, increasing the chances of locating the global optimum. These methods are generally more computationally intensive than local methods, but this is often necessary to overcome the challenge of non-convexity.


## Simulated Annealing
Simulated annealing is inspired by the annealing process in metallurgy, where a material is heated and then slowly cooled to reduce defects and reach a low-energy state (a more stable configuration). Starts at a high "temperature" (allowing exploration) and gradually cools down (focusing on exploitation). Accepts moves that worsen the objective function with a probability that decreases with temperature.

### Algorithm
1.  Initialization: Start with an initial solution, $x_0$, and a high"temperature," $T$.
2.  Generate Neighbor: Generate a random neighboring solution, $x_{new}$, byperturbing the current solution. The nature of the perturbation depends on theproblem (e.g., for a continuous variable, you might add a random number drawnfrom a normal distribution; for a discrete variable, you might randomly changeone of the components).
3.  Evaluate Energy Change: Calculate the change in the objective function(often referred to as "energy" in the context of simulated annealing), $\Delta E= f(x_{new}) - f(x_{current})$.
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
Imagine a landscape with many basins (local minima).  Basin hopping tries to "hop" between these basins to find the deepest one (the global minimum).

### Algorithm:
1.  Initialization: Start with an initial solution, $x_0$.
2.  Local Optimization: Perform a *local* optimization (e.g., using BFGS, conjugate gradient, or Nelder-Mead) starting from $x_{current}$ to find a local minimum, $x_{local}$.
3.  Perturbation: Perturb the local minimum, $x_{local}$, to generate a new solution, $x_{new}$. This perturbation is typically larger than the perturbations used in simulated annealing, allowing the algorithm to "jump" out of the current basin. The magnitude of the perturbation is a key parameter.
4.  Acceptance Criterion:
    - If $f(x_{new}) < f(x_{local})$, accept the new solution: $x_{current} = x_{new}$.
    - If $f(x_{new}) \ge f(x_{local})$, accept the new solution with a probability based on the Metropolis criterion, similar to simulated annealing:

    $$P(accept) = exp(-(f(x_{new}) - f(x_{local})) / (k_B T))$$

    where $T$ is a "temperature" parameter (though it doesn't necessarily have the same physical interpretation as in simulated annealing). The probabilistic mechanism for accepting worse solutions helps to avoid getting trapped.

5.  Iteration: Repeat steps 2-4 for a specified number of iterations.

## Genetic Algorithms
Genetic Algorithms (GA) is inspired by biological evolution and natural selection. In GA, solutions are encoded (e.g., bit strings, real-valued vectors, permutations) as representations. The choice of representation can significantly impact the performance of the GA.

### Algorithm
1.  Initialization: Create an initial *population* of candidate solutions (often represented as "chromosomes" or bit strings).  Each element in the population is a potential solution to the optimization problem.
2.  Fitness Evaluation: Evaluate the "fitness" of each individual in the population using the objective function, $f(x)$.  Lower values of $f(x)$ typically correspond to higher fitness (assuming we're minimizing).
3.  Selection: Select individuals from the population for reproduction, based on their fitness.  Fitter individuals have a higher probability of being selected. Common selection methods include:
    - Roulette Wheel Selection:  Each individual is assigned a probability of selection proportional to its fitness.
    - Tournament Selection:  Randomly select a small group of individuals, and the fittest individual in that group is chosen for reproduction.
4.  Crossover:  Combine the "genetic material" (parts of the representation) of selected pairs of individuals ("parents") to create new "offspring" solutions.  This involves exchanging parts of their chromosomes (or bit strings). Common crossover methods include:
    - Single-Point Crossover:  A single crossover point is chosen, and the parts of the chromosomes before and after that point are swapped between the parents.
    - Two-Point Crossover: Two crossover points are chosen.
    - Uniform Crossover:  Each bit (or element) is swapped with a certain probability.
5.  Mutation: Introduce random changes (mutations) to the offspring solutions. This helps to maintain diversity in the population and explore new regions of the search space.  For bit strings, mutation might involve flipping a bit (0 to 1 or 1 to 0). For real-valued representations, mutation might involve adding a small random number.
6.  Replacement: Replace some or all of the individuals in the original population with the new offspring.  Common strategies include:
    - Generational Replacement:  The entire population is replaced by the offspring.
    - Elitism:  The best few individuals from the previous generation are preserved and carried over to the next generation.
7.  Iteration: Repeat steps 2-6 for a specified number of generations or until a convergence criterion is met.

## How to Choose
It depends on the properties of the objective function:

- Noisy Objective Functions: Simulated annealing is good choice.
- Discrete Variables: Genetic algorithm is suitable.
- Computational Cost: Basin hopping can be used if the cost is high.

### No Free Lunch Theorem
The "No Free Lunch" theorem in optimization states that no single optimization algorithm is the best for all problems. The performance of an algorithm depends on the specific properties of the problem. Therefore, it's essential to understand the characteristics of the optimization problem and choose an algorithm that is well-suited to those properties.