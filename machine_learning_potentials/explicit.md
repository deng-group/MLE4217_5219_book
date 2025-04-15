# Explicit Features
Explicit features are pre-defined or "hand-crafted" features that are derived from the atomic positions and types. They are designed to capture the local environment of each atom in a system. Usually we start from a target atom $i$, by writting the local atomic environment as a set of densities then expanding the density in a basis set. The basis set can be Bessel, spherical harmonics, or other functions. The explicit features are then constructed from the coefficients of the expansion. The explicit features are usually invariant to the atomic permutation, translation, and rotation. Once the feature of an atom is constructed, the whole system can be done in a similar way and mapped to an array and can be used as input to a machine learning model. 

## ML Models
The typical used ML models in MLPs are (ranking from the simplest to the most complex):
- Linear Regression (LR): simplest, fast, but less accurate. These are generally less flexible than NNs or GPR but can be computationally very efficient and easier to train.
- Gaussian Process Regression (GPR): more complex, slower, and more accurate. It predicts the energy of a new configuration based on its 'similarity' (defined by a kernel function, often operating on SOAP descriptors) to configurations in the training set. A key advantage is that GPR naturally provides uncertainty estimates for its predictions.
- Neural Networks (NNs): complex, slowest and most accurate. NNs are highly flexible function approximators.

Noted that other popular ML models used in regression problems, e.g. random forests are not suitable for MLPs because they're not differentiable. 

## Examples
The following are some examples of MLPs that use explicit features:
| **Name**                              | **Features**                                      | **ML Model**                  | **Reference**                                                                 |
|-------------------------------------------|-------------------------------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| Behler-Parrinello Potential               | Atomic-centered symmetry functions (ACSFs)            | Feed-forward Neural Network   | [PhysRevLett.98.146401](https://doi.org/10.1103/PhysRevLett.98.146401)       |
| Gaussian Approximation Potentials (GAP)  | Smooth Overlap of Atomic Positions (SOAP)             | Gaussian Process Regression   | [PhysRevLett.104.136403](https://doi.org/10.1103/PhysRevLett.104.136403)     |
| Spectral Neighbor Analysis Potential (SNAP)| Hyperspherical bispectrum functions (HBFs)            | Linear Regression             | [J. Comput. Phys. 2014](https://doi.org/10.1016/j.jcp.2014.12.018)           |
| Moment Tensor Potentials (MTP)           | Moment tensor functions (MTFs)                        | Linear Regression             | [SIAM J. Sci. Comput. 2016](https://doi.org/10.1137/15M1020575)             |
| Atomic Cluster Expansion (ACE)           | Product of radial functions and spherical harmonics   | Linear Regression             | [PhysRevB.99.014104](https://doi.org/10.1103/PhysRevB.99.014104)             |

There is no universal rule for which model and feature to use. The choice of explicit features depends on the system and the desired accuracy. The ACSFs, SOAP, HBFs, MTFs, and ACE are all based on the same idea of using a set of basis functions to represent the local atomic environment. However, they differ in the choice of basis functions and the way they are constructed.

It should be noted that ACSFs, SOAP, HBFs, and MTFs are the special cases of ACE. The ACE is a general framework that can be used to construct a wide range of explicit features. The ACE is the most flexible and comprehensive method. 

## Scaling Problem
The scaling performance of a MLP is determined by the number of basis functions used to represent the local atomic environment. The number of basis functions is determined by the number of chemical species ($N_b$), the number of basis functions for each chemical species ($S$), and the body order ($\nu+1$). The total number of basis function for one target atom is

$$N_{total} = N_b \times S$$

$\nu$ is the number of atomic sites we have in the tensor products and $\nu+1$ is also called the body order. Then for a given body order, there are $O(N_{total}^\nu)$ number of basis functions. For a body order of 3 ($\nu=2$), the scaling becomes quadratic. For higher body order, the scaling becomes cubic or even higher. This is a serious problem for MLPs because the number of basis functions increases rapidly with the body order. The scaling problem can be mitigated by using the implicit features, which we will discuss in the next section.