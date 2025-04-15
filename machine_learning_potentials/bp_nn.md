# Behler-Parrinello Potential

The [Behler-Parrinello potential](https://doi.org/10.1103/PhysRevLett.98.146401) is a type of machine learning potential that uses explicit features to represent the local atomic environment. It was one of the first MLPs to be developed and is widely used in the field of computational chemistry and materials science. The Behler-Parrinello potential uses atomic-centered symmetry functions (ACSFs) as explicit features, which are designed to be invariant to atomic permutation, translation, and rotation. The ACSFs are then used as input to a feed-forward neural network (NN) model to predict the potential energy of the system.

## Total Energy
The main idea is to decompose the total energy of a system into contributions from individual atoms, which are then represented by the ACSFs. 

$$
E = \sum_{i=1}^{N} E_i
$$

## Symmetry Functions

where $E_i$ is the energy contribution from atom $i$ and $N$ is the total number of atoms in the system. The ACSFs are constructed based on the distances and angles between the target atom and its neighbors, capturing the local environment around each atom.

$$
G_i^1 = \sum_{j\ne i}^{all} e^{-\eta (R_{ij}-R_s)^2}f_c(R_{ij})$$

where $G_i^1$ is the radial symmetry function for atom $i$, $R_{ij}$ is the distance between atoms $i$ and $j$, $\eta$ is a width parameter that controls the sensitivity of the function, and $f_c(R_{ij})$ is a cutoff function that ensures the symmetry function only considers neighbors within a certain distance:

$$
f_c(R_{ij}) = \begin{cases}
0.5 \times [cos(\pi R_{ij}/R_c)+1] & \text{if } R_{ij} <= R_c \\
0 & \text{if } R_{ij} > R_c
\end{cases}
$$

where $R_c$ is the cutoff distance. The radial symmetry functions capture the distances between the target atom and its neighbors, providing information about the local environment.

The angular symmetry functions ($G_i^2$) are constructed by:

$$
G_i^2 = 2^{1-\zeta}\sum_{j,k\ne i}^{all}(1+\lambda cos\theta_{ijk})^\zeta \\
\times e^{-\eta (R_{ij}^2+R_{ik}^2+R_{jk}^2))f_c(R_{ij})f_c(R_{ik})f_c(R_{jk})}
$$
where $\theta_{ijk}$ is the angle between the bonds connecting atom $i$ to atoms $j$ and $k$, $\zeta$ is a parameter that controls the sensitivity of the function, and $\lambda$ is a parameter that determines the weight of the angular contribution. The angular symmetry functions capture the angles between the target atom and its neighbors, providing additional information about the local environment.

## Neural Network

```{figure} ../figures/bp_nn.png
Structure of the neural network of the Behler-Parrinello potential containing 3 atoms. The Cartesian coordinates of atom $i$ are represented by $R_i^\alpha$ and then trensformed to a set of $mu$ symmetry function values $G_i^\mu$. The symmetry function is then passed to a subnet $S_i$ to compute atomic energy $E_i$ and the total energy is obtained by summing over all atomic energies.
```

## Performance

```{figure} ../figures/rdf_si_melt.png
Radial distribution function (RDF) of Si melt at 3000 K. The RDF is calculated using the Behler-Parrinello potential and compared with the RDF obtained from first-principles calculations and other force fields. The agreement between the two RDFs indicates that the Behler-Parrinello potential accurately captures the local atomic environment in the Si melt.
```

The Behler-Parrinello potential has been shown to provide accurate predictions of the potential energy surface for a wide range of materials and systems, including metals, semiconductors, and biomolecules. It is particularly effective for systems with complex bonding environments, such as transition metals and alloys. The potential is also able to capture the effects of long-range interactions and can be used to model systems with varying atomic coordination numbers.

