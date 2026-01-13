# Atomistic Structures

```{image} ../figures/atomistic_structure_title.jpeg
---
width: 100%
---
```

## Slides

### Part I: Crystalline Structures
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSifIgqEQRdHvhXAF8AXd5TCAjYZ2rYv8BHs2ct1pnLP5VUrOnrcrTIDjDGMbmWbc6S5uDEy0jF9DYQ/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="480" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

### Part II: Defects, Interfaces, and Molecules
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSucxRVFRQXWqxnWpI-JTbKwqgMkATdYlTnZI0AgfBPahmoNdtHCkoDAcHFIXRU-ihBlj5K36OXWiOw/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="480" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Lecture Videos

### Part I
This lecture has been recorded using Zoom. Please use [this link](https://nus-sg.zoom.us/rec/share/_8Hr_H3n16-Ppp9RZ-CSL0jHnMzIRvnYz-2kqWEtgd_v05b3Zjr8R3G-fg73GeSg.pl4E3rRI4ckYiHK5) to access the Zoom recording.

**Passcode will be sent through Canvas announcement. You might need to use your NUS email to login.**

### Part II
This lecture has been recorded using Zoom. Please use [this link](https://nus-sg.zoom.us/rec/share/FkkgbOMHX1oq3Mwz2E9EbrpECfV8PoglDyeZBgyVJjYbgIrJVhE0crbdhOFSehQ.WRx7x-TXMj65g0TW) to access the Zoom recording.

**Passcode will be sent through Canvas announcement. You might need to use your NUS email to login.**

## Content

This chapter covers atomistic structures in materials science, from crystalline materials to molecules, defects, and interfaces. We will discuss the importance of atomic structure in materials science, explore different types of atomic structures, and use `pymatgen` and `ASE` to manipulate and visualize structures.

## Learning Objectives

By the end of this chapter, you should be able to:

- Understand basics of crystal structures and lattice systems
- Apply symmetry, group theory, point groups, and space groups in materials science
- Distinguish between primitive cells, conventional cells, and Brillouin zones
- Navigate reciprocal space and identify paths within it
- Know common crystal structure prototypes
- Analyze and interpret site properties within a material's structure
- Understand and utilize SMILES notation and graph representations to describe molecules
- Apply appropriate structure descriptors for characterizing non-crystalline (amorphous) materials
- Explain fundamental concepts of defects and interfaces in materials and their influence on material properties
- Visualize atomic structures using Python and VESTA

## Contents

### Part I: Crystalline Materials

1. [Crystal Structure Fundamentals](unit_cell.md) - Introduction to lattice vectors, unit cells, and periodicity
2. [Symmetry Theory](symmetry.md) - Group theory, point groups, and space groups
3. [Crystal Structure Prototypes](prototypes.md) - Common crystal structure types and their properties
4. [Reciprocal Space and Brillouin Zone](reciprocal_space.md) - Reciprocal lattice and k-paths
5. [Structure Formats](structure_formats.md) - CIF, POSCAR, XYZ, and other file formats
6. [Practical: Crystal Structure Manipulation](crystal_structure.ipynb) - Pymatgen exercises for crystal structures

### Part II: Advanced Structures

7. [Site Properties](site_properties.md) - Site concepts, Wyckoff positions, and local environments
8. [Molecules](molecule.md) - Site collections, molecular graphs, SMILES notation, and nanomaterials
9. [Non-crystalline Materials](noncrystalline_materials.md) - Structure descriptors for amorphous materials
10. [Defects](defect.md) - Vacancies, interstitials, substitutions, and their effects
11. [Interfaces](interface.md) - Interface representation and types
12. [Practical: Advanced Structure Manipulation](advanced_structure.ipynb) - Pymatgen and ASE exercises
13. [VESTA Visualization](vesta.md) - Structure visualization tool guide

```{admonition} Reading Material
:class: note
Advanced defect topics and complex interface modeling are provided as reading materials for interested students.
```
