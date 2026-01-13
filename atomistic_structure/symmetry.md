# Symmetry

The symmetry of a crystal is described by the space group of the crystal. The space group is a mathematical description of the symmetry of the crystal. The space group is defined by the symmetry operations that leave the crystal invariant. The symmetry operations are translations, rotations, and reflections that map the crystal onto itself.

## Symmetry Operations
Symmetry operations for point groups are the set of operations that leave at least one point fixed while moving other points in a symmetrical manner. These operations include rotations, reflections, inversions, and improper rotations (rotations followed by reflections). Point groups are essential in classifying the symmetry of molecules and crystals.

The following are the common symmetry operations used to describe the symmetry of molecules and crystals:

| Operation       | H-M Symbol | Schönflies Symbol | Description                                      |
|-----------------|--------|-------------------|--------------------------------------------------|
| Identity        | E      | $C_1$             | Leaves the object unchanged                      |
| Rotation        | n      | $C_n$             | Rotation by 360°/n about an axis                 |
| Reflection      | m      | $\sigma$          | Reflection through a plane                       |
| Inversion       | i      | $i$               | Inversion through a point                        |
| Rotoinversion   | n̅     | $S_n$             | Rotation by 360°/n followed by reflection        |

These operations form the basis for understanding the symmetry properties of molecules and crystals, and they are fundamental in the study of crystallography and molecular symmetry.

## Point Groups

```{admonition} Group Theory
:class: info
Group theory is a mathematical framework used to study the symmetry properties of objects. A group is a set of elements with a binary operation that satisfies four properties: closure, associativity, identity, and invertibility.
1. Closure: For any two elements $a$ and $b$ in the group $G$, the result of the operation $a * b$ is also in $G$.

    $
    \forall a, b \in G, \; a * b \in G
    $

2. Associativity: For any three elements $a$, $b$, and $c$ in the group $G$, the equation $(a * b) * c = a * (b * c)$ holds.

    $
    \forall a, b, c \in G, \; (a * b) * c = a * (b * c)
    $

3. Identity: There exists an element $e$ in the group $G$ such that for any element $a$ in $G$, the equation $e * a = a * e = a$ holds.

    $
    \exists e \in G \; \text{such that} \; \forall a \in G, \; e * a = a * e = a
    $

4. Invertibility: For each element $a$ in the group $G$, there exists an element $b$ in $G$ such that $a * b = b * a = e$, where $e$ is the identity element.

    $
    \forall a \in G, \; \exists b \in G \; \text{such that} \; a * b = b * a = e
    $
```
### Symmetry Group
In crystallography, group theory is used to classify the symmetry of crystals and molecules. The symmetry elements of a crystal or molecule form a group, known as the point group. The point group describes the symmetry operations that leave the object invariant.

There are 32 crystallographic point groups that describe the symmetry of crystals. 

### Point Group Notation
Point groups are denoted by a Schönflies symbol or a Hermann-Mauguin symbol. The Schönflies symbol is a letter or a combination of letters that represents the symmetry elements of the point group. The Hermann-Mauguin symbol is a combination of letters and numbers that represents the symmetry operations of the point group.

Hermann-Mauguin symbols are used to describe the symmetry of crystals in the International Tables for Crystallography. The symbols consist of a combination of letters and numbers that represent the symmetry operations of the crystal. Below are the point group in different crystal systems:

| Crystal System      | H-M Symbols                                                                 | Schönflies Symbols                        |
|---------------------|------------------------------------------------------------------------------|-------------------------------------------|
| Triclinic    | $1$, $\overline{1}$                                                          | $C_1$, $C_i$                              |
| Monoclinic   | $2$, $m$, $2/m$                                                              | $C_2$, $C_s$, $C_{2h}$                    |
| Orthorhombic | $222$, $mm2$, $mmm$                                                          | $D_2$, $C_{2v}$, $D_{2h}$                 |
| Tetragonal   | $4$, $\overline{4}$, $4/m$, $422$, $4mm$, $\overline{4}2m$, $4/mmm$          | $C_4$, $S_4$, $C_{4h}$, $D_4$, $C_{4v}$, $D_{2d}$, $D_{4h}$ |
| Trigonal     | $3$, $\overline{3}$, $32$, $3m$, $\overline{3}m$                             | $C_3$, $C_{3i}$, $D_3$, $C_{3v}$, $D_{3d}$ |
| Hexagonal    | $6$, $\overline{6}$, $6/m$, $622$, $6mm$, $\overline{6}m2$, $6/mmm$          | $C_6$, $C_{3h}$, $C_{6h}$, $D_6$, $C_{6v}$, $D_{3h}$, $D_{6h}$ |
| Cubic        | $23$, $m\overline{3}$, $432$, $\overline{4}3m$, $m\overline{3}m$             | $T$, $T_h$, $O$, $T_d$, $O_h$             |

## Space Groups
Space groups are mathematical descriptions of the symmetry of crystals in three-dimensional space. A space group consists of the translational symmetry operations and the point group symmetry operations of the crystal. The space group describes how the crystal repeats in space and how the symmetry elements are arranged. There are 230 space groups that describe the symmetry of crystals.

### Lattice Translations
In addition to the point group symmetry operations, space groups include lattice translations that describe how the crystal repeats in space. The lattice translations are defined by the lattice vectors of the crystal unit cell. Screw axes and glide planes are examples of lattice translations that are included in space groups.

### Space Group Notation
Space groups are denoted by an international (H-M) symbol that combines the point group symbol with additional information about the lattice translations. The international symbol consists of a point group symbol followed by a lattice type symbol and a lattice centering symbol.

Screw axes and glide planes are represented by additional symbols in the international symbol. The screw axes are denoted by a number that represents the order of rotation and a fraction that represents the translation along the axis. The glide planes are denoted by a letter that represents the direction of the glide and a fraction that represents the translation along the glide plane.

