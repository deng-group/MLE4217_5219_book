# Structure Formats
We have discussed about some file formats used in materials databases such as JSON, HDF5 and CSV. In this section, we will focus on the file formats used to represent atomic and crystal structures. These file formats are essential for storing and exchanging structural information in materials science and crystallography.

## Crystallographic Information Framework (CIF)
Crystallographic Information Framework (CIF) is a standard text file format for representing crystallographic information developed by International Union of Crystallography (IUCr). CIF is the standard file format for the submission and retrieval of crystallographic information. CIF is a human-readable file format that contains information about the crystal structure, including the unit cell parameters, atomic coordinates, symmetry operations, and other crystallographic data. CIF can also include metadata such as the experimental conditions, data collection parameters, and references to the original research articles.

A CIF file consists of data items that are organized into categories. Each data item is associated with a tag that describes the information it contains. The data items are typically arranged in a tabular format, with each row representing a different data item. CIF files can be opened and viewed using a text editor or specialized crystallographic software like Jmol, Mercury, or VESTA. It contains `loop_` for repeating data items.

An example of CIF file of Zinc (Zn) is shown below:
```cif
# generated using pymatgen
data_Zn
_symmetry_space_group_name_H-M   P6_3/mmc
_cell_length_a   2.61435980
_cell_length_b   2.61435980
_cell_length_c   4.87316102
_cell_angle_alpha   90.00000000
_cell_angle_beta   90.00000000
_cell_angle_gamma   120.00000000
_symmetry_Int_Tables_number   194
_chemical_formula_structural   Zn
_chemical_formula_sum   Zn2
_cell_volume   28.84510390
_cell_formula_units_Z   2
loop_
 _symmetry_equiv_pos_site_id
 _symmetry_equiv_pos_as_xyz
  1  'x, y, z'
  2  '-x, -y, -z'
  3  'x-y, x, z+1/2'
  4  '-x+y, -x, -z+1/2'
  5  '-y, x-y, z'
  6  'y, -x+y, -z'
  7  '-x, -y, z+1/2'
  8  'x, y, -z+1/2'
  9  '-x+y, -x, z'
  10  'x-y, x, -z'
  11  'y, -x+y, z+1/2'
  12  '-y, x-y, -z+1/2'
  13  '-y, -x, -z+1/2'
  14  'y, x, z+1/2'
  15  '-x, -x+y, -z'
  16  'x, x-y, z'
  17  '-x+y, y, -z+1/2'
  18  'x-y, -y, z+1/2'
  19  'y, x, -z'
  20  '-y, -x, z'
  21  'x, x-y, -z+1/2'
  22  '-x, -x+y, z+1/2'
  23  'x-y, -y, -z'
  24  '-x+y, y, z'
loop_
 _atom_type_symbol
 _atom_type_oxidation_number
  Zn0+  0.0
loop_
 _atom_site_type_symbol
 _atom_site_label
 _atom_site_symmetry_multiplicity
 _atom_site_fract_x
 _atom_site_fract_y
 _atom_site_fract_z
 _atom_site_occupancy
  Zn0+  Zn0  2  0.33333333  0.66666667  0.25000000  1
```

## Protein Data Bank (PDB) File Format
Protein Data Bank (PDB) file format is a standard file format for representing the three-dimensional structures of biological macromolecules, such as proteins, nucleic acids, and carbohydrates. The PDB file format was developed by the Protein Data Bank, an international repository of experimentally determined macromolecular structures.

## XYZ File Format
XYZ file format is a simple text file format for representing molecular and atomic coordinates. The XYZ file format is widely used in computational chemistry and molecular modeling to store the 3D coordinates of atoms in a molecule or crystal structure. The XYZ file format is human-readable and consists of a header line followed by lines containing the atomic symbols and their corresponding x, y, and z coordinates.

An example of XYZ file format for water molecule ($H_2O$) is shown below:
```xyz
3
Water molecule
O 0.000000 0.000000 0.000000
H 0.757000 0.586000 0.000000
H -0.757000 0.586000 0.000000
```

The first line of the XYZ file contains the total number of atoms in the system. The second line is an optional comment line that can provide additional information about the system. The subsequent lines contain the atomic symbols and their x, y, and z coordinates in Angstroms.

XYZ file format only contains atomic coordinates and does not include information about the unit cell parameters, symmetry operations, or other crystallographic data. It is a lightweight and versatile file format that can be easily read and written by various molecular modeling software packages.

### Extended XYZ File Format
[Extended XYZ](https://github.com/libAtoms/extxyz) file (`.extxyz`) format is an extension of the standard XYZ file format that includes additional information about the atoms or molecules in the system. In addition to the atomic coordinates, the extxyz file format can include information such as atomic charges, velocities, forces, and other properties. The extxyz file format is commonly used in machine learning and molecular dynamics simulations to store atomic data along with additional information.

An example of extxyz file format for Zn is shown below:
```extxyz
2
Lattice="2.6143598557 0 0 -1.3071799278 2.2641020496 0 0  0 4.8731608391" Properties=species:S:1:pos:R:3 pbc="T T T"
Zn 0.00000   1.50940   1.21829
Zn 1.30718   0.75470   3.65487
```
In this example, the first line of the extxyz file contains the total number of atoms in the system. The second line specifies the properties of the atoms, including the species (atomic symbol) and the atomic positions in Cartesian coordinates. The `Lattice` keyword specifies the lattice vectors of the unit cell, and the `pbc` keyword indicates the periodic boundary conditions. The `Properties` keyword defines the properties of the atoms, such as the species and positions. The subsequent lines contain the atomic species and their corresponding x, y, and z coordinates.


## VASP POSCAR File Format
POSCAR file format is used by the Vienna Ab initio Simulation Package (VASP) to represent crystal structures. The POSCAR file contains information about the unit cell parameters, atomic coordinates, and lattice vectors of a crystal structure. The POSCAR file format is a plain text file that can be opened and edited using a text editor. The POSCAR file format is widely used in computational materials science and solid-state physics for performing electronic structure calculations and molecular dynamics simulations.

An example of POSCAR file format for Zn is shown below:
```poscar
Zn2
1.0
        2.6143598557         0.0000000000         0.0000000000
       -1.3071799278         2.2641020496         0.0000000000
        0.0000000000         0.0000000000         4.8731608391
   Zn
    2
Direct
     0.333333343         0.666666687         0.250000000
     0.666666657         0.333333313         0.750000000
```

In this example, the first line of the POSCAR file contains the name of the system. The second line is the scaling factor for the lattice vectors. The next three lines contain the lattice vectors of the unit cell. The subsequent lines contain the atomic species, the number of atoms of each species, and the atomic coordinates in fractional coordinates.