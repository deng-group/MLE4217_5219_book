# Unit Cell

In crystalline materials, atoms are arranged in a regular, repeating pattern that extends in three dimensions. This orderly arrangement forms what we call a crystal lattice. To understand and analyze these complex structures, we need a way to represent them simply and efficiently.

A unit cell serves as the smallest repeating unit that shows the full symmetry of a crystal structure. By replicating this unit cell in three dimensions, we can reconstruct the entire crystal lattice. The unit cell's dimensions are defined by three lattice vectors, which represent the crystal's periodicity in each direction.

## Lattice Vectors
The unit cell's dimensions are defined by three lattice vectors, $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$. These vectors represent the crystal's periodicity in each direction and define the unit cell's shape and size. 

Any position in the crystal lattice can be expressed as a linear combination of these lattice vectors. For example, a point $\mathbf{r}$ in the crystal lattice can be written as:

$\mathbf{r} = u\mathbf{a} + v\mathbf{b} + w\mathbf{c}$

where u, v, and w are integers representing the periodic repetition of the unit cell.

These vectors can be organized into a matrix form, known as the lattice matrix:

$\mathbf{H} = \begin{pmatrix} 
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3 \\
c_1 & c_2 & c_3
\end{pmatrix}$

## Crystal Directions and Planes
In crystallography, we use crystal directions and planes to describe the orientation of atoms in a crystal lattice. These directions and planes are defined relative to the lattice vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$.

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

We distinguish between two main types of unit cells:

- The primitive unit cell contains exactly one lattice point per cell and has the smallest possible volume. While it is mathematically elegant, it often doesn't clearly show the crystal's symmetry. In crystallographic notation, it is denoted by 'P'.

- The conventional unit cell may contain more than one lattice point and is larger than the primitive cell. It better displays the crystal's symmetry and is commonly used in crystallography. Conventional unit cells can be body-centered (denoted as I), face-centered (F), or base-centered (A,B,C).

As an illustration, consider a face-centered cubic (FCC) structure. In this case, the conventional unit cell contains 4 lattice points, while the primitive unit cell contains only 1 lattice point. This demonstrates how conventional cells, though larger, can better represent the structural symmetry of the crystal.

