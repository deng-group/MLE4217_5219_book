# Quantum Mechanical Model
```{admonition} First Principles Method
:class: warning
Here we just briefly cover this topic. A detailed introduction to the First-Principles method can be found in the [MLE5215 Atomistic Modelling of Molecules and Materials](https://nusmods.com/courses/MLE5215/atomistic-modelling-of-molecules-and-materials).
```

## First-Principles
Also known as ab initio methods, first-principles method is based on solving the Schrödinger equation for a given system of particles. The Schrödinger equation is a partial differential equation that describes how the wave function of a quantum system evolves over time. By solving the Schrödinger equation, we can obtain the wave function ($\Psi$) of the system, which contains all the information about the system, such as the positions and momenta of the particles, the energy of the system, and the forces acting on the particles. Properties can be obtained by applying different operators to the wave function. For example, the total energy of the system can be obtained by applying the Hamiltonian $\hat{H}$ operator to the wave function. The many-body Schrödinger equation is given by:

$$
i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r}, \mathbf{R}, t) = \hat{H}\Psi(\mathbf{r}, \mathbf{R}, t)
$$

where $\Psi(\mathbf{r}, \mathbf{R}, t)$ is the wave function of the system, $\hat{H}$ is the Hamiltonian operator, and $\mathbf{r}$ and $\mathbf{R}$ are the positions of the electrons and nuclei in the system.

## Born-Oppenheimer Approximation
The Born-Oppenheimer approximation states that the motion of the electrons is much faster than the motion of the nuclei, so we can treat the electrons as moving in the fixed potential energy field of the nuclei. Then the nuclei are treated as classical particles and only electrons are quantum particles. This allows us to solve the Schrödinger equation for the electrons separately from the motion of the nuclei, which simplifies the problem and makes it computationally feasible. 

$$
\hat{H}\psi_i(\mathbf{r}) = \left(-\frac{\hbar^2}{2m_e}\nabla^2 + V_{\text{ext}}(\mathbf{r}) + V_{\text{ee}}(\mathbf{r})\right)\psi_i(\mathbf{r}) = E_i\psi_i(\mathbf{r})
$$

where $V_{\text{ext}}(\mathbf{r})$ is the external potential energy due to the nuclei, $V_{\text{ee}}(\mathbf{r})$ is the electron-electron interaction potential energy, and $E_i$ is the energy of the $i$-th electron.

## Density Functional Theory (DFT)
Solving the Schrödinger equation directly is computationally expensive and often infeasible for large systems. Density functional theory (DFT) is a method that approximates the wave function of a system by considering the electron density of the system. The electron density is a function of the positions of the electrons in the system and contains all the information about the system. By approximating the wave function in terms of the electron density, DFT reduces the computational cost of solving the Schrödinger equation and makes it feasible to study large systems.

```{admonition} Functional
:class: info
Functional is a function of a function. In DFT, the electron density is the function, and the functional is a function of the electron density.
```

The key idea behind DFT is the Hohenberg-Kohn theorems, which state that the ground-state energy of a system is a unique functional of the electron density and that the electron density that minimizes the ground-state energy is the true ground-state electron density. 

$$
E[\rho_{\text{gs}}] = \min_{\rho} E[\rho]
$$

where $E[\rho]$ is the total energy functional of the system and $\rho_{\text{gs}}$ is the ground-state electron density. 

Therefore, by finding the electron density that minimizes the total energy of the system, we can determine the ground-state electron density and the ground-state energy of the system.

## Force
Instead of compute the derivative of the total energy with respect to the position of the particles, the force can be calculated directly once the ground state electron density is determined using the Hellmann-Feynman theorem, which we need to determine to get the energy anyway.

## Properties
Compared to classical force fields, DFT can provide more accurate results for a wide range of properties, such as electronic structure, bonding, and reactivity. DFT can be used to study a variety of systems, including molecules, solids, and surfaces. 

## Semi-Empirical Methods
Semi-empirical methods are a class of quantum mechanical methods that are based on a combination of empirical parameters and quantum mechanical principles. These methods are less computationally expensive than first-principles methods and are often used to study large systems that are beyond the capabilities of first-principles methods. 

Semi-empirical methods are based on approximations and simplifications of the Schrödinger equation, which make them computationally efficient but less accurate than first-principles methods. Some common semi-empirical methods include the tight-binding method, the extended Hückel method, and the semi-empirical molecular orbital (SEMO) method.
