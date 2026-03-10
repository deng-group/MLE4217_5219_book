# Molecular Dynamics

If we have a system of particles, we can simulate the dynamics of the system by solving the equations of motion for each particle. This is called molecular dynamics. The equations of motion are given by Newton's second law of motion, which states that the force acting on a particle is equal to the rate of change of its momentum. The force acting on a particle is given by the negative gradient of the potential energy function, which depends on the positions of all the particles in the system. By solving the equations of motion for each particle, we can simulate the dynamics of the system and study its behavior over time.


## Verlet Integration

````{sidebar}
```{figure} ../figures/md_process.png
General process of molecular dynamics simulation.
```
````

The Verlet family of integrators are numerical methods for solving the equations of motion in molecular dynamics simulations. A commonly used form is the velocity-Verlet algorithm, which updates the positions and velocities of the particles at each time step.

$$
\mathbf{r}(t + \Delta t) = \mathbf{r}(t) + \mathbf{v}(t)\Delta t + \frac{1}{2}\mathbf{a}(t)\Delta t^2
$$

where $\mathbf{r}(t)$ is the position of the particle at time $t$, $\mathbf{v}(t)$ is the velocity of the particle at time $t$, $\mathbf{a}(t)$ is the acceleration of the particle at time $t$, and $\Delta t$ is the time step. The acceleration of the particle can be computed from the Newton's second law.

The velocity update in velocity-Verlet is:

$$
\mathbf{v}(t + \Delta t) = \mathbf{v}(t) + \frac{1}{2}\left[\mathbf{a}(t) + \mathbf{a}(t + \Delta t)\right]\Delta t
$$



### Initial Conditions
The initial positions and velocities of the particles determine the trajectory of the system and the properties that are calculated during the simulation. The initial positions of the particles can be generated based on experimental observations (crystal structure) or some physical assumptions, while the initial velocities can be assigned based on a Maxwell-Boltzmann distribution at a given temperature.

### Equilibration and Production Runs
It is important to equilibrate the system before starting the production run. Equilibration is the process of allowing the system to reach a stable state where the properties of the system no longer change with time. This is done by running the simulation for a certain number of steps until the system reaches equilibrium. Once the system has equilibrated, the production run can be started, where the properties of the system are calculated and analyzed.

### Time Step
The time step should be small enough to accurately capture the dynamics of the system but large enough to be computationally efficient. The time step is usually chosen based on the fastest vibrational frequency in the system, which is determined by the force constants of the bonds in the system. A safe choice for the time step is to use a fraction of the fastest vibrational frequency, e.g. 1 fs for a system with a vibrational frequency of 10 THz.

## Kinetic and Potential Energy
The total energy of the system is the sum of the kinetic and potential energy of the particles. The kinetic energy of a system is given by the sum of the kinetic energy of all the particles in the system:

$$
K = \sum_{i=1}^{N}\frac{1}{2}m_i\mathbf{v}_i^2
$$
where $m_i$ is the mass of the $i$-th particle and $\mathbf{v}_i$ is the velocity of the $i$-th particle. 

Temperature is related to the kinetic energy of the particles in the system. For a classical system with $f$ quadratic degrees of freedom, the temperature is given by:

$$
T = \frac{2K}{f k_B}
$$

where $T$ is the temperature of the system, $K$ is the kinetic energy of the system, $f$ is the number of degrees of freedom, and $k_B$ is the Boltzmann constant. For an unconstrained three-dimensional system, $f \approx 3N$; if overall translation is removed, then $f = 3N - 3$.

The summation of kinetic energy and potential energy is the total energy of the system:

$$
E = K + U
$$

where $U$ is the potential energy of the system, which has been discussed in the [previous section](../models_and_theories_I/force_fields.md). $U$ can also be computed using DFT or quantum mechanical methods. It is called ab initio molecular dynamics (AIMD) when quantum mechanical methods are used to compute the potential energy.

In an ideal NVE simulation, the total energy of the system should be conserved, which means that the sum of the kinetic and potential energy should remain approximately constant over time. This corresponds to the microcanonical ensemble in statistical mechanics, where the total energy of the system is conserved and the system is isolated from its surroundings.


## Temperature and Pressure Control
The temperature and pressure of the system are usually controlled to study the behavior of the system under different conditions. Thermostats modify the dynamics to sample a target temperature, while barostats change the cell degrees of freedom to sample a target pressure.

The algorithms used to control the temperature and pressure of the system are called thermostats and barostats, respectively. Some methods rescale velocities or cell vectors directly, while others extend the equations of motion with additional dynamical variables.

Typical thermostats used in molecular dynamics simulations include the Berendsen thermostat, the Andersen thermostat, and the Nose-Hoover thermostat. Examples of barostats include the Berendsen barostat and the Parrinello-Rahman barostat.

## Free Energy Calculation
In molecular dynamics, you are only sampling part of the phase space, not the entire phase space. Therefore, computing the partition function is not a trivial task. However, we can still calculate the partition function by using thermodynamic integration. In this case, we first compute the free energy using thermodynamic integration and then calculate the partition function from the free energy.

In thermodynamic integration, we calculate the free energy difference between two states by integrating the derivative of the free energy with respect to a parameter that connects the two states. The free energy difference between two states is given by:

$$
\Delta F = \int_{\lambda_0}^{\lambda_1} \left\langle \frac{\partial H}{\partial \lambda} \right\rangle_{\lambda} d\lambda
$$

where $\Delta F$ is the free energy difference between the two states, $\lambda$ is the parameter that connects the two states, $H$ is the Hamiltonian of the system, and the brackets denote an ensemble average taken at fixed $\lambda$.

In practice, we need to perform multiple simulations at different values of the parameter $\lambda$ to calculate the free energy difference. Then integrate the derivative of the free energy with respect to $\lambda$ to obtain the free energy difference between the two states. The path should start from a state where the partition function is known and end at the state where we want to calculate the partition function, e.g. high temperature ideal gas and low temperature harmonic crystal.

## Applications of Molecular Dynamics
- Biology: Protein folding, drug design, molecular recognition
- Materials Science: Mechanical properties, phase transitions, defects
- Chemistry: Reaction mechanisms, catalysis, solvation
