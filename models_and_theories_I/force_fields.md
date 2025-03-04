# Force Fields
In atomistic modelling, force fields are used to describe the interactions between atoms and molecules in materials. Force fields are mathematical models that represent the potential energy surface of a system, which describes the energy of the system as a function of the atomic positions, and can be used to predict the structure, dynamics, and properties of materials.

Force fields usually contains parameters that describe the interactions between atoms or molecules, such as bond lengths, bond angles, dihedral angles, and non-bonded interactions. These parameters are usually derived from experimental data or quantum mechanical calculations, and are used to fit the force field to reproduce the properties of the material.

```{figure} ../figures/pair_potentials.png
---
width: 60%
name: directive-fig
---
A typical potential energy curves for a pair of atoms as a function of the separation distance.
```

The center of force fields is the potential energy function ($U$), which describes the interactions between atoms or molecules in a material. The potential energy function is usually expressed as a sum of interactions between atoms or molecules, and can include terms that describe bond stretching, bond bending, torsion, and non-bonded interactions.

$$
U = U_{\text{bond}} + U_{\text{angle}} + U_{\text{dihedral}} + U_{\text{non-bonded}}
$$

where $U_{\text{bond}}$ is the energy associated with bond stretching, $U_{\text{angle}}$ is the energy associated with bond bending, $U_{\text{dihedral}}$ is the energy associated with torsion. $U_{\text{bond}}$ and $U_{\text{angle}}$ are usually approximated under the harmonic approximation. $U_{\text{non-bonded}}$ is the energy associated with non-bonded interactions such as van der Waals forces and electrostatic interactions. 

### Interatomic Forces
Interatomic forces can be derived from the potential energy function by taking the negative gradient of the potential energy with respect to the atomic positions.

$$
\mathbf{F}_i = -\nabla_i U
$$

For solid materials, the stress tensor can be derived from the potential energy function by taking the negative gradient of the potential energy with respect to the atomic positions.


### Computational Cost
```{figure} ../figures/cutoff.png
---
width: 60%
name: directive-fig
---
A cutoff distance is used to limit the number of interactions that need to be calculated in force fields.
```
The computational cost of force fields depends on the number of atoms in the system and the number of interactions that need to be calculated. The computational cost of force fields scales linearly with the number of atoms in the system, and can be reduced by using approximations. Most interactions in force fields are short-ranged, which means that the interactions between atoms decay rapidly with distance. This allows us to use cutoff distances to limit the number of interactions that need to be calculated. The short range interactions are only for atoms in the neighbor list, which is usually a small fraction of the total number of atoms. The long-range interactions are more tricky to calculate and is usually the bottleneck of computations. Methods such as [Ewald summation](#ewald-summation) are used to calculate long-range electrostatic interactions.

In practice, the unit cell is divided into a grid, and the atoms are assigned to grid cells. The interactions between atoms are calculated only for atoms in the same or neighboring grid cells. This reduces the number of interactions that need to be calculated and improves the efficiency of the simulation.

### Periodic Boundary Conditions

```{figure} ../figures/pbc.png
---
width: 60%
name: directive-fig
---
Periodic boundary conditions are used to simulate an infinite system by replicating the simulation cell in all directions. Atoms that leave the simulation cell re-enter from the opposite side. Minimal image convention is used to calculate the distance between atoms in the simulation cell and the neighboring cells.
```
In solid state materials, the structure has translational symmetry, which means that we can apply a periodic boundary condition to the simulation cell to mimic an infinite system. Mathmaticallly, the periodic boundary condition is applied by replicating the simulation cell in all directions, so that atoms that leave the simulation cell re-enter (wrap) from the opposite side. This allows us to simulate the dynamics of the system without the need to model an infinite system.

$$
\mathbf{r}_{\text{wrapped}}= \mathbf{r} - L \text{round}(\mathbf{r}/{L})
$$

where $\mathbf{r}_{\text{wrapped}}$ is the wrapped position of the atom, $\mathbf{r}$ is the position of the atom in the simulation cell, $L$ is the length of the simulation cell, and $\text{round}$ is the rounding function.

The wrapped distance between atoms in the simulation cell and the neighboring cells:

$$
r_{ij} = \mathbf{r}_i - \mathbf{r}_j - L \text{round}\left(\frac{\mathbf{r}_i - \mathbf{r}_j}{L}\right)
$$

where $r_{ij}$ is the distance between atoms $i$ and $j$, $\mathbf{r}_i$ and $\mathbf{r}_j$ are the positions of atoms $i$ and $j$, and $\mathbf{L}$ is the length of the simulation cell.

## Molecular Mechanics Force Fields

```{figure} ../figures/bond_angles.png
---
width: 60%
name: directive-fig
---
Bond lengths, bond angles, and dihedral angles are used to describe the geometry of molecules in force fields. Non-bonded interactions are used to describe the interactions between atoms that are not directly bonded.
```
Below are some common force fields terms used in molecular mechanics simulations:

$$
U_{\text{bond}} = \sum_{\text{bonds}} k_b (r - r_0)^2
$$

$$
U_{\text{angle}} = \sum_{\text{angles}} k_{\theta} (\theta - \theta_0)^2
$$

$$
U_{\text{dihedral}} = \sum_{\text{dihedrals}} k_{\phi} (1 + \cos(n \phi - \delta))
$$

$$
U_{\text{non-bonded}} = \sum_{i=1}^N \sum_{j=i+1}^N U_{\text{LJ}}(r_{ij}) + U_{\text{elec}}(r_{ij})
$$

where $k_b$, $k_{\theta}$, and $k_{\phi}$ are the force constants for bond stretching, bond bending, and torsion, $r$ is the bond length, $\theta$ is the bond angle, $\phi$ is the dihedral angle, $r_0$, $\theta_0$, and $\phi_0$ are the equilibrium bond length, bond angle, and dihedral angle, $n$ is the multiplicity of the dihedral angle, $\delta$ is the phase shift of the dihedral angle, $r_{ij}$ is the distance between atoms $i$ and $j$, $U_{\text{LJ}}$ is the Leonard-Jones potential, and $U_{\text{elec}}$ is the electrostatic potential.

## Ewald Summation
The electrostatic potential energy term $U_{\text{elec}}$ in the potential energy function is long-ranged and can be difficult to calculate accurately in periodic systems. The Ewald summation is a method for calculating the electrostatic potential energy between charged particles in a periodic system. The Ewald summation is based on the idea of splitting the electrostatic potential into short-range and long-range components, and calculating each component separately. 

The short-range component is calculated using a real-space sum, while the long-range component is calculated using a reciprocal-space sum. 

$$
U_{\text{elec}} = U_{\text{elec, short-range}} + U_{\text{elec, long-range}} + U_{\text{elec, self}}
$$

The short-range component is calculated within the cutoff distance $r_c$ and converged fastly. The short-range component is calculated using the following equation:

$$
U_{\text{elec, short-range}} = \frac{1}{2} \sum_{i=1}^{N} \sum_{j \neq i}^{N} q_i q_j \frac{\operatorname{erfc}(\alpha r_{ij})}{r_{ij}}
$$

where $q_i$ and $q_j$ are the charges of atoms $i$ and $j$, $\alpha$ is the Ewald parameter, $r_{ij}$ is the distance between atoms $i$ and $j$, and $\operatorname{erfc}$ is the complementary error function ($1-\operatorname{erf}$). $\alpha$ controls the ratio of the short-range and long-range components of the electrostatic potential: $\alpha \rightarrow 0$ for more interaction evaluated as short-range and $\alpha \rightarrow \infty$ for more interaction evaluated as long-range interactions. The short-range component is calculated using the direct sum method, which has a time complexity of $O(N^2)$.

The long-range component is calculated using the following equation:

$$
U_{\text{elec, long-range}} =  \frac{1}{2 \Omega} \sum_{\mathbf{k} \neq 0} \frac{4 \pi}{k^2} \exp\left( -\frac{k^2}{4 \alpha^2} \right) \left| \sum_{j=1}^{N} q_j e^{-i \mathbf{k} \cdot \mathbf{r}_j} \right|^2
$$

where $\mathbf{k}$ is the wave vector, $\Omega$ is the volume of the simulation cell, $\alpha$ is the Ewald parameter, $q_j$ is the charge of atom $j$, and $\mathbf{r}_j$ is the position of atom $j$. The long-range component is calculated using the fast Fourier transform (FFT) algorithm, which has a time complexity of $O(N \log N)$. However, it is still much more expensive than the short-range interactions ($O(N)$).

The self-interaction term is calculated using the following equation:

$$
U_{\text{elec, self}} = -\frac{\alpha}{\sqrt{\pi}}\sum_{i=1}^N \frac{q_i^2}{\epsilon_0}
$$
where $\alpha$ is the Ewald parameter, $q_i$ is the charge of atom $i$, and $\epsilon_0$ is the vacuum permittivity.

## Pair Potentials
Pair potentials are a type of force field that describes the interactions between pairs of atoms or molecules in a material. Pair potentials are based on the assumption that the interactions between atoms or molecules can be approximated as pairwise interactions, where the potential energy between two atoms or molecules depends only on their separation distance.

### Leonard-Jones Potential

```{figure} ../figures/lennard_jones_potential.png
---
width: 60%
name: directive-fig
---
The Leonard-Jones potential describes the interactions between neutral atoms or molecules. The equilibrium distance is $\sigma$ and the depth of the potential well is $\epsilon$. The equilibrium distance $r_e$ is increased when temperature is increased.
```
Leonard-Jones potential is a simple mathematical model that describes the interactions between neutral atoms or molecules. The Leonard-Jones potential is given by the following equation:

$$
U(r) = 4\epsilon[(\sigma/r)^{12} - (\sigma/r)^6]
$$

where $U(r)$ is the potential energy between two atoms or molecules at a distance $r$, $\epsilon$ is the depth of the potential well, and $\sigma$ is the distance at which the potential energy is zero.

12 and 6 are the powers of the terms in the equation, which represent the repulsive and attractive forces between the atoms or molecules, respectively. The repulsive term $(\sigma/r)^{12}$ accounts for the Pauli exclusion principle, which prevents atoms or molecules from occupying the same space, while the attractive term $(\sigma/r)^6$ accounts for the van der Waals forces between the atoms or molecules.

### Morse Potential
```{figure} ../figures/morse_potential.png
---
width: 60%
name: directive-fig
---
The Morse potential describes the interactions between atoms or molecules in a material. The dissociation energy is $D_e$, the width of the potential well is $a$, and the equilibrium bond length is $r_e$.
```
Morse potential is another mathematical model that describes the interactions between atoms or molecules. The Morse potential is given by the following equation:

$$
U(r) = D_e[(1 - e^{-a(r-r_e)})^2 - 1]
$$

where $U(r)$ is the potential energy between two atoms or molecules at a distance $r$, $D_e$ is the dissociation energy of the bond, $a$ is the width of the potential well, and $r_e$ is the equilibrium bond length.

## Many Body Expansion
```{figure} ../figures/many_body_pot.png
---
width: 50%
name: directive-fig
---
Many-body potentials describe the interactions between three or more atoms or molecules in a material. The many-body expansion includes one-body, two-body, three-body, and higher-order terms that describe the interactions between atoms or molecules.
```

The potential energy function can be expanded into many-body terms that describe the interactions between three or more atoms or molecules in a material. The many-body expansion is based on the idea that the interactions between atoms or molecules can be approximated as pairwise interactions, where the potential energy between two atoms or molecules depends only on their separation distance. The many-body expansion is given by the following equation:

$$
U = \sum_{i=1}^N U_1(r_i) + \sum_{i=1}^N \sum_{j=i+1}^N U_2(r_{ij})+ \sum_{i=1}^N \sum_{j=i+1}^N \sum_{k=j+1}^N U_3(r_{ijk}, \theta_{ijk}) + \ldots
$$

where $U_1(r_i)$ is the potential energy of atom $i$, $U_2(r_{ij})$ is the potential energy between atoms $i$ and $j$, $U_3(r_{ijk})$ is the potential energy between atoms $i$, $j$, and $k$, and so on. $\theta_{ijk}$ is the angle between atoms $i$, $j$, and $k$. The one body term ($U_1$) is only meaningful if atoms are in an external field and usually ignored in most force field.

Many-body potentials are a type of force field that describes the interactions between three or more atoms or molecules in a material. Many-body potentials are used to capture the effects of many-body interactions, such as bond bending, torsion, and non-bonded interactions, which cannot be described by pair potentials alone.

### Tersoff Potential
Tersoff potential (bond order potentials) is a many-body potential that describes the interactions between atoms in covalently bonded materials. The Tersoff potential is given by the following equation:

$$
U = \sum_{i < j} f_C(R_{ij})[f_R(R_{ij}) - b_{ij}f_A(R_{ij})]
$$

where $U$ is the potential energy of the system, $f_C(R_{ij})$ is the cutoff function that determines the range of the potential, $f_R(R_{ij})$ is the repulsive term that accounts for the Pauli exclusion principle, $f_A(R_{ij})$ is the attractive term that accounts for the van der Waals forces, $b_{ij}$ is the bond order term that describes the bond strength between atoms $i$ and $j$, and $R_{ij}$ is the distance between atoms $i$ and $j$.

### Embedded Atom Method (EAM)
Embedded Atom Method (EAM) is another many-body potential that describes the interactions between atoms in metallic materials. The EAM potential is based on the assumption that the energy of an atom in a material is a function of the electron density around the atom. The EAM potential is given by the following equation:

$$
U = \sum_i F(\rho_i) + \frac{1}{2}\sum_{i \neq j} \phi_{ij}(r_{ij})
$$

where $U$ is the total energy of the system, $F(\rho_i)$ is the embedding energy of atom $i$, $\rho_i$ is the electron density around atom $i$, $\phi_{ij}(r_{ij})$ is the pair potential energy between atoms $i$ and $j$ at a distance $r_{ij}$.

Other similar potentials: effective medium theory (EMT) and modified embedded atom method (MEAM).

## Other Potentials
There are many other types of force fields and potentials that are used in atomistic modelling, depending on the specific properties of the material being studied. Some examples include: reactive force fields, polarizable force fields, and coarse-grained force fields.

Recently, machine learning potentials have gained popularity in materials science, where machine learning algorithms are used to develop force fields that can accurately predict the properties of materials without the need for explicit parameterization.

$$
U_{\text{ML}} = f_{\text{ML}}(\mathbf{X})
$$

where $U_{\text{ML}}$ is the machine learning potential, $f_{\text{ML}}$ is the machine learning model, and $\mathbf{X}$ is the descriptor of the system, such as the atomic positions, charges, and forces. A more detailed discussion of machine learning potentials will be covered in the later lectures.
