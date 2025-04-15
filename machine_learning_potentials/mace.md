# MACE Potential

[Atomic Cluster Expansion (ACE)](https://doi.org/10.1103/PhysRevB.99.014104) provides a powerful framework for constructing high-order polynomial basis functions to describe atomic environments. Many existing descriptors, such as SOAP, MTP, HBF, and ACSF, can be seen as special cases of ACE. While ACE is highly flexible and comprehensive, it is limited by its cutoff distance, which restricts the range of interactions it can model.

To overcome this limitation, message passing neural networks (MPNNs) can be used to describe atomic environments. However, MPNNs are computationally expensive and challenging to parallelize across multiple GPUs. 

[Multi-Atomic Cluster Expansion (MACE)](https://doi.org/10.48550/arXiv.2206.07697) combines the strengths of ACE and MPNNs. It is an E(3)-equivariant (translation, rotation and reflection), atom-centered neural network that extends ACE by incorporating message passing. The key idea is to use ACE models to parameterize the many-body messages $m_i^{(t)}$. MACE achieves excellent performance and generalization while being faster to train and evaluate compared to other machine learning potentials.

In this section, we will first explain the construction of ACE features and then show how MACE extends this framework.

## Feature Construction

````{sidebar}
```{figure} ../figures/ace_features.png
Illustration of ACE feature construction. Each node represents an atom, and surrounding nodes are its neighbors. One-particle basis functions are computed for each edge, and A-functions are obtained by summing over neighbors. B-functions are constructed by symmetrizing the tensor product of coupled indices of the A-functions. Figure adapted from [](https://doi.org/10.1038/s42256-024-00956-x)
```
````

To describe the environment around a central atom $i$, we start with one-particle basis functions $\phi_{k\nu}(\sigma_i, \sigma_j)$. These functions capture the spatial arrangement of neighboring atoms and are built using three components:
1. Radial basis functions ($R_{kcl}(r_{ji})$): Depend on the distance between the central atom and its neighbors.
2. Spherical harmonics ($Y_l^m(\vec{r_{ji}})$): Capture angular information about the arrangement of neighbors.
3. Chemical attributes: Incorporate information about the types of atoms involved.

By combining these components, we can represent the interaction between the central atom and its neighbors.

Next, we construct atomic basis functions $A_{i,k\nu}$ by summing over contributions from all neighbors. These functions are invariant to the permutation of atoms. To capture more complex interactions, we extend these to higher-order atomic basis functions ($\mathbf{A}_{i,k\mathbf{v}}$) by taking products of the lower-order ones.

To ensure the basis functions respect rotational symmetry, we symmetrize them to obtain $B_{i,k\mathbf{v}}$. These symmetrized functions are then used to compute messages ($m_{i,kLM}$), which encode information about the atomic environment. The resulting messages are both permutation-invariant and rotation-equivariant, making them ideal for use in MACE.

## Message Passing

Message passing is the process of sharing information between atoms to update their features. It consists of three main steps: message construction, feature update, and readout. Message passing can be considered as a sparsification of an equivalent ACE model with a much larger cutoff radius. 

```{figure} ../figures/mpnn_ace.png
---
width: 80%
---
The left panel shows a cluster with two iterations message passing process (MACE) with a cutoff of $r_{cut}$. The right side shows the cluster a cutoff radius of $2r_{cut}$ (ACE). The MACE model can be seen as a sparse version of the ACE model, where only the nearest neighbors are considered for message passing. This allows MACE to capture long-range interactions while maintaining computational efficiency. Figure adapted from [](https://doi.org/10.1038/s42256-024-00956-x)
```
### Message Construction
At each step, the state of an atom $i$ is described by:
- Its position ($\mathbf{r}_i$),
- Fixed attributes like its chemical element ($\mathbf{\theta}_i$),
- Learnable features ($\mathbf{h}_i^{(t)}$) that evolve during the process.

To share information, messages are passed from neighboring atoms $j$ to the target atom $i$. The message $m_i^{(t)}$ is constructed by combining information from all neighbors. This ensures the process respects both the order of atoms (permutation invariance) and their orientation in space (rotation equivariance).

In MACE, the message is built using the symmetrized atomic basis functions ($B_{i, k\eta LM}^{(t)}$). These functions describe the environment around atom $i$ and are combined with learnable weights ($W_{z_i,kL,\eta}^{(t)}$). Clebsch-Gordan coefficients are used to ensure the message respects the symmetry of the system.

### Update
Once the message $m_i^{(t)}$ is constructed, it is used to update the learnable features of atom $i$. This update step adjusts the features based on the information received from neighbors. The updated features continue to respect the symmetry properties of the system, ensuring consistency throughout the process.

### Readout
After several rounds of message passing and feature updates, the final state of each atom is used to calculate its energy. The energy is computed by summing contributions from all steps. This ensures the energy calculation respects the symmetry and order of the atoms, making it accurate and reliable.
