# Kinetic Monte Carlo
Kinetic Monte Carlo (kMC) is an extension of the Monte Carlo method that is used to simulate the time evolution of a system by considering the rates of individual events. In kMC, the system is modeled as a set of discrete states, and the transitions between these states are governed by transition rates. By simulating the stochastic evolution of the system based on these rates, kMC can provide insights into the dynamics of complex systems and predict their behavior over time.

## Rejection Free Kinetic Monte Carlo

````{sidebar}
```{figure} ../figures/kmc_process.png
Process of running rejection-free kinetic Monte Carlo (RFkMC).
```
````
Rejection-free kinetic Monte Carlo (RFkMC) is a variant of the kMC method that aims to improve the efficiency of simulations by avoiding the rejection step that is typically used to ensure detailed balance. In RFkMC, the transition rates are modified to ensure that the system evolves in a way that satisfies detailed balance without the need for rejection. This can lead to significant speedups in simulations of complex systems, making RFkMC a powerful tool for studying the dynamics of materials and chemical reactions.

### Initial State
The initial state of the system is defined by specifying the configuration of the system at the beginning of the simulation. This includes the positions and properties of all particles, as well as any other relevant information needed to describe the system.

### Events
Events are the individual transitions that can occur in the system, such as the movement of a particle or the creation or destruction of a bond. Each event is associated with a transition rate that determines the probability of the event occurring in a given time interval.

In RFkMC, the transition events are tabulated in a list, and the system evolves by selecting an event from the list based on the transition rates. This avoids the need for rejection steps and allows the simulation to proceed more efficiently.

### Transition Rates
The transition rates in kMC are determined by the energy barriers associated with each event. These barriers can be calculated using methods such as density functional theory (DFT) or empirical potentials, and they play a crucial role in determining the dynamics of the system.

### Time
The time step for each transition event is determined by the transition rate associated with the event. Events with higher rates will occur more frequently, leading to faster evolution of the system. By simulating the stochastic evolution of the system over time, kMC can provide insights into the dynamics of complex systems and predict their behavior.

$$
\Delta t = -\frac{\ln(w)}{\sum_i \Gamma_i} 
$$

where $\Gamma_i$ is the transition rate for event $i$, and $w$ is a random number between 0 and 1.

## Applications
- Materials science: kMC is used to study the growth and evolution of materials, such as thin films and nanoparticles.
- Catalysis: kMC is used to model the kinetics of chemical reactions on surfaces and predict the activity of catalysts.
- Surface science: kMC is used to simulate the adsorption, desorption, and diffusion of atoms and molecules on surfaces.
- Biological systems: kMC is used to model the dynamics of biological systems, such as protein folding and enzyme reactions.

## Comparison with Molecular Dynamics
| Feature                   | Kinetic Monte Carlo                                                                 | Molecular dynamics                                                                 |
|---------------------------|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| Model                     | Flexible: can use lattice models or simple equations                                | Force fields (classical MD) or electronic structure (AIMD)                        |
| Time scale                | Mesoscopic (up to seconds or milliseconds)                                          | Up to a few nanoseconds (few hundreds of picoseconds) for classical MD (AIMD)     |
| Length scale              | Flexible: atomistic or mesoscopic                                                   | Up to a few million (classical MD) or up to 1000 atoms (AIMD)                     |
| Computational efficiency  | Transition rates are computed directly for each migration event                     | Energies and forces of all atoms are evaluated at each timestep                   |
| Rare events accessibility | Easy: events propagated randomly based on their transition rates                    | Hard: long simulations or high temperatures for high barriers                     |
| Model construction        | Complex: it requires knowledge of all possible transition events                    | Straightforward: plug & play                                                      |
| Code availability         | Limited and often relying on in-house codes                                         | Numerous general purpose codes available                                          |