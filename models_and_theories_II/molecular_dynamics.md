# Molecular Dynamics

If we have a system of particles, we can simulate the dynamics of the system by solving the equations of motion for each particle. This is called molecular dynamics. The equations of motion are given by Newton's second law of motion, which states that the force acting on a particle is equal to the rate of change of its momentum. The force acting on a particle is given by the gradient of the potential energy function, which depends on the positions of all the particles in the system. By solving the equations of motion for each particle, we can simulate the dynamics of the system and study its behavior over time.


## Verlet Integration
The Verlet integration is a numerical method for solving the equations of motion in molecular dynamics simulations. The Verlet integration is based on the idea of discretizing the equations of motion in time and updating the positions and velocities of the particles at each time step. 

$$
\mathbf{r}(t + \Delta t) = \mathbf{r}(t) + \mathbf{v}(t)\Delta t + \frac{1}{2}\mathbf{a}(t)\Delta t^2
$$

where $\mathbf{r}(t)$ is the position of the particle at time $t$, $\mathbf{v}(t)$ is the velocity of the particle at time $t$, $\mathbf{a}(t)$ is the acceleration of the particle at time $t$, and $\Delta t$ is the time step. The acceleration of the particle can be computed from the Newton's second law.

The velocity of the particle at time $t + \Delta t$ can be calculated using the positions at time $t$ and $t + \Delta t$:

$$
\mathbf{v}(t + \Delta t) = \frac{\mathbf{r}(t + \Delta t) - \mathbf{r}(t)}{\Delta t}
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

Temperature is related to the kinetic energy of the particles in the system. The temperature of the system is given by the average kinetic energy of the particles:

$$
T = \frac{2K}{3Nk_B}
$$

where $T$ is the temperature of the system, $K$ is the kinetic energy of the system, $N$ is the number of particles in the system, and $k_B$ is the Boltzmann constant.

The summation of kinetic energy and potential energy is the total energy of the system:

$$
E = K + U
$$

where $U$ is the potential energy of the system, which has been discussed in the [previous section](../models_and_theories_I/force_fields.md). $U$ can also be computed using DFT or quantum mechanical methods. It is called ab initio molecular dynamics (AIMD) when quantum mechanical methods are used to compute the potential energy.

The total energy of the system should be conserved during the simulation, which means that the sum of the kinetic and potential energy should remain constant over time. This is also known as the microcanonical ensemble in statistical mechanics, where the total energy of the system is conserved and the system is isolated from its surroundings.


## Temperature and Pressure Control
The temperature and pressure of the system are usually controlled to study the behavior of the system under different conditions. The temperature can be adjusted by rescaling the velocities of the particles, while the pressure can be controlled by adjusting the volume of the system. 

The algorithms used to control the temperature and pressure of the system are called thermostats and barostats, respectively. Usually, the temperature and pressure are controlled by adding a term to the equations of motion that rescales the velocities or adjusts the volume of the system. This process is done at some regular interval during the simulation to maintain the desired temperature and pressure.

Typical thermostats used in molecular dynamics simulations include the Berendsen thermostat, the Andersen thermostat, and the Nose-Hoover thermostat. Examples of barostats include the Berendsen barostat and the Parrinello-Rahman barostat.

## Free Energy Calculation
In molecular dynamics, you are only sampling part of the phase space, not the entire phase space. Therefore, computing the partition function is not a trivial task. However, we can still calculate the partition function by using thermodynamic integration. In this case, we first compute the free energy using thermodynamic integration and then calculate the partition function from the free energy.

In thermodynamic integration, we calculate the free energy difference between two states by integrating the derivative of the free energy with respect to a parameter that connects the two states. The free energy difference between two states is given by:

$$
\Delta F = \int_{\lambda_0}^{\lambda} \left\langle \frac{\partial H}{\partial \lambda^{\prime}} \right\rangle d\lambda^{\prime}
$$

where $\Delta F$ is the free energy difference between the two states, $\lambda$ is the parameter that connects the two states (e.g. temperature, volume), $H$ is the Hamiltonian of the system (total energy), and the brackets denote the ensemble average (time average). $\lambda_0$ is the initial value of the parameter, usually a state where the partition function is known.

In practice, we need to perform multiple simulations at different values of the parameter $\lambda$ to calculate the free energy difference. Then integrate the derivative of the free energy with respect to $\lambda$ to obtain the free energy difference between the two states. The path should start from a state where the partition function is known and end at the state where we want to calculate the partition function, e.g. high temperature ideal gas and low temperature harmonic crystal.

## Applications of Molecular Dynamics
- Biology: Protein folding, drug design, molecular recognition
- Materials Science: Mechanical properties, phase transitions, defects
- Chemistry: Reaction mechanisms, catalysis, solvation