# Unit Cell

In crystalline materials, atoms are arranged in a regular, repeating pattern that extends in three dimensions. This orderly arrangement forms what we call a crystal lattice. To understand and analyze these complex structures, we need a way to represent them simply and efficiently.

A unit cell serves as the smallest repeating unit that shows the full symmetry of a crystal structure. By replicating this unit cell in three dimensions, we can reconstruct the entire crystal lattice. The unit cell's dimensions are defined by three lattice vectors, which represent the crystal's periodicity in each direction.

## Lattice Vectors
The unit cell's dimensions are defined by three lattice vectors, $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$. These vectors represent the crystal's periodicity in each direction and define the unit cell's shape and size. 

These vectors can be organized into a matrix form, known as the lattice matrix:

$\begin{pmatrix} 
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3 \\
c_1 & c_2 & c_3
\end{pmatrix}$

where 1, 2, and 3 represent the x, y, and z components of the lattice vectors, respectively. The length of lattice vectors are called lattice constants, denoted as $a$, $b$, and $c$. The angles between the lattice vectors are denoted as $\alpha$, $\beta$, and $\gamma$. The lattice vectors are typically chosen to be orthogonal, with angles of 90 degrees.

## Crystal Directions and Planes
In crystallography, we use crystal directions and planes to describe the orientation of atoms in a crystal lattice. These directions and planes are defined relative to the lattice vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$.

Any position in the crystal lattice can be expressed as a linear combination of these lattice vectors. For example, a point $\mathbf{r}$ in the crystal lattice can be written as:

$\mathbf{r} = u\mathbf{a} + v\mathbf{b} + w\mathbf{c}$

where u, v, and w are integers representing the periodic repetition of the unit cell.

Crystal directions are defined by their indices [uvw], which represent the direction of the vector in terms of the lattice vectors. The indices are enclosed in square brackets and written as [uvw]. For example, the [100] direction is parallel to the lattice vector $\mathbf{a}$. 

A group of directions that are equivalent due to the crystal's symmetry is called a direction family \<uvw\>. For example, the [100], [010], and [001] directions are all part of the <100> direction family.

```{figure} ../figures/miller_indices.png
---
width: 80%
name: directive-fig
---
An illustration of crystal directions and planes using the Miller indices notation.
```

A set of crystallographic planes can be defined by their Miller indices (hkl), which are reciprocals of the intercepts of the plane with the unit cell axes. For a plane with intercepts $x$, $y$, and $z$ along the lattice vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ respectively:

$h = \frac{a}{x}, k = \frac{b}{y}, l = \frac{c}{z}$

where $a$, $b$, and $c$ are the lattice constants. These indices (h, k, l) are typically reduced to the smallest set of integers by multiplication or division.

Similarly, a group of planes that are equivalent due to the crystal's symmetry is called a plane family {hkl}. For example, the (100), (010), and (001) planes are all part of the {100} plane family.

Miller indices are important for interplane spacing, which is the key to understanding diffraction patterns. The spacing between planes is inversely proportional to the square root of the sum of the squares of the Miller indices.


## Crystal Systems
There are 7 crystal systems in 3D space, which are classified based on the lengths and angles of the edges of the unit cell. The crystal systems are characterized as the table below.

## Bravais Lattice

Summary of **7 crystal systems** and **14 Bravais lattices**:

| **Crystal System** | **Bravais Lattices**                  | **Lattice Parameters**                                    |
|--------------------|--------------------------------------|---------------------------------------------------------|
| **Cubic**         | Simple (P), Body-Centered (I), Face-Centered (F) | $a = b = c, \alpha = \beta = \gamma = 90^\circ$ |
| **Tetragonal**    | Simple (P), Body-Centered (I)       | $a = b \neq c, \alpha = \beta = \gamma = 90^\circ$ |
| **Orthorhombic**  | Simple (P), Body-Centered (I), Face-Centered (F), Base-Centered (A,B,C) | $a \neq b \neq c, \alpha = \beta = \gamma = 90^\circ$ |
| **Hexagonal**     | Simple (P)                          | $a = b \neq c, \alpha = \beta = 90^\circ, \gamma = 120^\circ$ |
| **Trigonal (Rhombohedral)** | Rhombohedral (R)                 | $a = b = c, \alpha = \beta = \gamma \neq 90^\circ$ |
| **Monoclinic**    | Simple (P), Base-Centered (A,B,C)       | $a \neq b \neq c, \alpha = \gamma = 90^\circ, \beta \neq 90^\circ$ |
| **Triclinic**     | Simple (P)                          | $a \neq b \neq c, \alpha \neq \beta \neq \gamma \neq 90^\circ$ |

Each **Bravais lattice** represents a distinct 3D periodic arrangement of points in space.


## Primitive vs Conventional Unit Cells
```{figure} ../figures/primitive_cell.png
---
width: 60%
name: directive-fig
---
Primitive cell are not unique and can be chosen in different ways. The figure shows three different primitive cells for a lattice.
```
- The primitive unit cell contains exactly one lattice point per cell and has the smallest possible volume. While it is mathematically elegant, it often doesn't clearly show the crystal's symmetry. In crystallographic notation, it is denoted by 'P'.

- The conventional unit cell may contain more than one lattice point and is larger than the primitive cell. It better displays the crystal's symmetry and is commonly used in crystallography. Conventional unit cells can be body-centered (denoted as I), face-centered (F), or base-centered (A,B,C).

As an illustration, consider a face-centered cubic (FCC) structure. In this case, the conventional unit cell contains 4 lattice points, while the primitive unit cell contains only 1 lattice point. This demonstrates how conventional cells, though larger, can better represent the structural symmetry of the crystal.

## Crystal Structure
```{figure} ../figures/motif.png
---
width: 80%
name: directive-fig
---
Schematic of a crystal structure with a lattice and motif using a face-centered cubic (FCC) ZnS example. Motif atoms are highlighted in dashed circle.
```
The crystal structure of a material is defined by the combination of a lattice and a motif. The lattice is a regular, repeating arrangement of points in space, while the motif, or basis, is a set of atoms associated with each lattice point. By placing the motif at every lattice point, we can generate the entire crystal structure. Atoms tend to pack closely together when forming a crystal, minimizing the space between them and creating a dense, orderly structure.
