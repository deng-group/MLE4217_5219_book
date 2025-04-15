# MACE

Atomic Cluster Expansion (ACE) construct high body order complete polynomial basis functions. Previous atomic environment descriptors including SOAP, MTP, HBF, and ACSF are all special cases of ACE. The ACE is a general framework that can be used to construct a wide range of explicit features. The ACE is the most flexible and comprehensive method. However, these models are limited by their cutoff distance.

Using message passing neural networks (MPNNs) to construct the atomic environment descriptors can overcome the cutoff distance limitation. However, the computational costs of MPNNs are high, and they are hard to parallelize across multiple GPUs. 

Multi-Atomic Cluster Expansion (MACE) is an E(3)-equivariant atom-centered MLP. It extend the ACE with message passing neural networks (MPNNs). The main idea is to parameterize the many body message $m_i^{(t)}$ using invariant or equivariant ACE models. MACE offers great performance and generalization capabilities. It is also faster to train and evaluate compared to other MLPs.

Below we start from ACE and then extend it to MACE.

## Embedding

````{sidebar}
```{figure} ../figures/ace_features.png
Illustration of the construction of ACE features. Each node represents an atom, and surrounding nodes are the neighbors of this target atom. Then one particle basis functions can be computed for each edge, and the A-functions are computed by summing over the neighbors. The B-functions are constructed by symmetrizing the tensor product of all coupled indices of the A-functions.
```
````
### Particle Basis
The one-particle basis defines the spacial arrange ment of atoms $j$ around atoms $i$:

$$
\phi_{k\nu}(\sigma_i, \sigma_j) = R_{kcl}(r_{ji})Y_l^m(\vec{r}_{ji})T_{kc}(\mathbf{\theta}_i, \mathbf{\theta}_j)
$$

where $R_{kcl}(r_{ji})$ is the radial basis function, $Y_l^m(\vec{r}_{ji})$ is the spherical harmonics, and $T_{kc}$ is a generic function of chemical attributes $\mathbf{\theta}_i$, $\mathbf{\theta}_j$ with two indices, $k$ and $c$. $lmc$ are coupled with each other can be replaced by a single index $\nu \equiv lmc$. $k$ is called uncoupled index and is also called number of channels here. $\sigma_i$ and $\sigma_j$ are the [node states](./mace.md#message-construction) of atom $i$ and $j$, respectively. 

ACE construct a high body order complete polynomial basis functions. The first is to construct atomic- or $A$-basis:

$$
A_{i, k\nu} = \sum_{j\in N(i)} \phi_{k\nu}(\sigma_i, \sigma_j)
$$
where $\sigma_i$ is the atomic species of atom $i$, $N(i)$ is the set of neighbors of atom $i$, and $\phi_{k\nu}$ is the basis function. The basis function is a polynomial function of the distances between atoms. The basis function can be constructed using spherical harmonics or Bessel functions. The basis function is invariant to the permutation of atoms.

Then the higher order atomic basis function can be constructed using the product:

$$
\mathbf{A}_{i, k\mathbf{v}} = \prod_{\xi=1}^{\nu} A_{i, k\nu_\xi}, \mathbf{v} = (v_1, v_2, \ldots, v_\nu)
$$
where $A_{i, kv}$ is the higher order atomic basis function, $v$ is the body order, and $v_\nu$ is the body order of the $v$-th atom. The higher order atomic basis function is also invariant to the translation of atoms.

To incorporate rotational invariance or equivariance, $\mathbf{A}_{i, k\mathbf{v}}$ can be symmetrized.

$$
B_{i, \eta_\nu k LM} = \sum_{\mathbf{lm}}C^{LM}_{\eta_\nu, \mathbf{lm}} \prod_{\xi=1}^{\nu} w_{k\tilde{k}l_\xi}A_{i, \tilde{k}l_\xi m_\xi}, \mathbf{lm} = (l_1m_1, l_2m_2, \ldots, l_\nu m_\nu)
$$

$$
B_{i, k\eta, LM} = \sum_{\mathbf{v}}C^{LM}_{\eta, \mathbf{v}} \mathbf{A}_{i, k\mathbf{v}}
$$
where $B_{i, k\eta, LM}$ is the symmetrized higher order atomic basis function, $C^{LM}_{\eta, \mathbf{v}}$ is the Clebsch-Gordan coefficient, corresponding to the correlation order $\nu$ and imposed equivariance (symmetry) $L$. The index $\eta$ corresponds to the total possible combinations of $\mathbf{A}_{i, k\mathbf{v}}$.

The message can be computed using the $B$ functions:
$$
m_{i,kLM} = \sum_{\eta}w_{k\eta L}B_{i, k\eta, LM}
$$
where $w_{k\eta L}$ is the weight of the $B$ functions. The message is invariant to the permutation of atoms and equivariant to the rotation of atoms.

## Message Passing

### Message Construction
The state of each node $i$ in layer $t$:

$$
\sigma_i^{(t)} = (\mathbf{r}_i, \mathbf{\theta}_i, \mathbf{h}_i^{(t)})
$$

where $\sigma_i^{(t)}$ is the state of atom $i$ at iteration $t$, $\mathbf{r}_i$ is the position of atom $i$, $\mathbf{\theta}_i$ is a set of fixed attriburtes (e.g. chemical element) of atom $i$, and $\mathbf{h}_i^{(t)}$ is the learnable features. The message passing is invariant to the permutation of atoms and equivariant to the rotation of atoms.

The message $m_i^{(t)}$ is computed using the state of the neighbors $j$ of atom $i$:
$$
m_i^{(t)} = \sum_{j\in N(i)} M_t(\sigma_i^{(t)}, \sigma_j^{(t)})
$$
where $M_t$ is the learnable message function and $\sum$ is a learnable permutation invariant pooling operation (e.g. summation) over neighbors around atom $i$. The message function is invariant to the permutation of atoms and equivariant to the rotation of atoms.

In MACE, the message function is constructed as:

$$
m_{i,kLM}^{(t)}=\sum_{\eta} W_{z_i,kL,\eta}^{(t)}B_{i, k\eta LM}^{(t)}
$$

$$
m_{i,kLM}^{(t)}=\sum_{j\in N(i)}M_t(\sigma_i^{(t)}, \sigma_j^{(t)}) =  \sum_{\eta} w_{i,k\eta L}^{(t)}\sum_{\mathbf{v}}C^{LM}_{\eta, \mathbf{v}} \prod_{\xi=1}^\nu \phi_{k\nu_\xi L}^{(t)}(\sigma_i^{(t)}, \sigma_j^{(t)})
$$
where $w_{i,k\eta L}^{(t)}$ is the learnable weight, $\phi_{k\nu_\xi L}^{(t)}(\sigma_i^{(t)}, \sigma_j^{(t)})$ is the one particle basis function, and $C^{LM}_{\eta, \mathbf{v}}$ is the Clebsch-Gordan coefficient.

### Update
In MACE, the message $m_i^{(t)}$ is used to update the state of atom $i$:
$$
\mathbf{h}_{i, kLM}^{(t+1)} = U_t(\sigma_i^{(t)}, m_i^{(t)})=  \sum_{\tilde{k}} W_{k\tilde{k}L}^{(t)} m_{i,\tilde{k}LM}^{(t)}
$$
where $U_t$ is the learnable update function, $W_{k\tilde{k}L}^{(t)}$ is the learnable weights. The update function is invariant to the permutation of atoms and equivariant to the rotation of atoms.

### Readout

After $T$ iterations, the final state of atom $i$ is computed using the readout function:
$$
E_i = \sum_{t=1}^{T} R_t(\sigma_i^{(t)})
$$
where $R_t$ is the readout function. 

In MACE, the readout function is constructed as:

$$
E_i = E_i^{(0)} + E_i^{(1)} + \cdots + E_i^{(T)}, \\
E_i^{(t)} = R_t(\mathbf{h}_i^{(t)}) = \sum_{kL} W_{kL}^{(t)} \mathbf{h}_{i, kL}^{(t)},
$$
where $E_i^{(t)}$ is the energy of atom $i$ at iteration $t$, and $W_{kL}^{(t)}$ is the learnable weight. The readout function is invariant to the permutation of atoms and equivariant to the rotation of atoms.

