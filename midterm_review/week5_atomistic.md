# Week 5: Atomistic Structures

## Key Topics

### Crystal Structure Fundamentals
- **Lattice Vectors**: Three vectors defining crystal periodicity
- **Unit Cell**: Smallest repeating unit of crystal structure
- **Lattice Types**: 7 crystal systems (cubic, tetragonal, orthorhombic, hexagonal, rhombohedral, monoclinic, triclinic)
- **Bravais Lattices**: 14 unique lattice types
- **Periodicity**: Crystal structure repeats in all three directions

### Symmetry Theory
- **Point Groups**: Describes symmetry about a point (32 types in 3D)
- **Space Groups**: Describes complete 3D symmetry (230 types)
- **Symmetry Operations**: Rotations, reflections, inversions, translations
- **Wyckoff Positions**: Unique atomic positions in space group
- **Sites**: Atomic positions within crystal structure

```python
from pymatgen.core.structure import Structure

# Create simple cubic structure
structure = Structure(
    lattice=[[1, 0, 0], [0, 1, 0], [0, 0, 1]],  # Lattice vectors
    species=["Si"],                                        # Element types
    coords=[[0, 0, 0], [0.25, 0.25, 0.25]],            # Fractional coordinates
    coords_are_cartesian=False
)
```

### Reciprocal Space
- **Reciprocal Lattice**: Fourier transform of real-space lattice
- **Brillouin Zone**: Wigner-Seitz cell of reciprocal lattice
- **k-points**: Points in reciprocal space for electronic structure calculations
- **High-Symmetry Points**: Important k-points (Γ, X, M, R, etc.)
- **k-paths**: Paths through Brillouin zone for band structure plots

```python
# Reciprocal lattice calculation
from pymatgen.core.lattice import Lattice

real_lattice = Lattice.cubic(5.0)
recip_lattice = real_lattice.reciprocal_lattice
print(recip_lattice.matrix)
```

### Crystal Structure Prototypes
- **BCC**: Body-Centered Cubic (e.g., Fe at room temp)
- **FCC**: Face-Centered Cubic (e.g., Al, Cu)
- **HCP**: Hexagonal Close-Packed (e.g., Mg, Zn)
- **Diamond**: Two interpenetrating FCC lattices (e.g., Si, C)
- **Perovskite**: ABO₃ structure (e.g., BaTiO₃)
- **Rock Salt**: NaCl structure
- **Zinc Blende**: ZnS structure

### Structure Formats
- **CIF**: Crystallographic Information File - standard format for crystal structures
- **POSCAR**: VASP input format
- **XYZ**: Simple coordinate format
- **VASP_CONTCAR**: VASP output format

```python
# Read structure from CIF
from pymatgen.core.structure import Structure

structure = Structure.from_file("BaTiO3.cif")

# Write to different format
structure.to("POSCAR", "BaTiO3.vasp")
structure.to("cif", "BaTiO3_new.cif")
```

### Site Properties
- **Coordination Number**: Number of nearest neighbors
- **Bond Lengths**: Distances to neighboring atoms
- **Bond Angles**: Angles between bonds
- **Local Environment**: Atomic environment around a site
- **Site Symmetry**: Symmetry of individual atomic site

### Molecules
- **SMILES**: Simplified Molecular Input Line Entry System - text representation
- **Molecular Graph**: Nodes = atoms, edges = bonds
- **Nanomaterials**: Large molecular structures (e.g., C₆₀, nanotubes)

```python
# Create molecule from SMILES
from rdkit import Chem
from rdkit.Chem import Draw

smiles = "C(C)(C)(C)C"  # Isobutane
mol = Chem.MolFromSmiles(smiles)
Draw.MolToImage(mol)
```

### Defects and Interfaces
- **Vacancies**: Missing atom from regular site
- **Interstitials**: Atom in non-regular site
- **Substitutions**: Atom replaced by different element
- **Interfaces**: Boundaries between different phases or grains

## Key Concepts

### Lattice Vectors
```
    a₁ = [a₁₁, a₁₂, a₁₃]
    a₂ = [a₂₁, a₂₂, a₂₃]
    a₃ = [a₃₁, a₃₂, a₃₃]
    
    Volume = |det(a₁, a₂, a₃)|
```

### Fractional vs Cartesian Coordinates
- **Fractional**: Coordinates in units of lattice vectors (0 to 1)
- **Cartesian**: Absolute coordinates in Ångströms
- **Conversion**: `cartesian = fractional @ lattice_vectors`

### Symmetry Operations
- **Rotation**: Rotates structure by specific angle about axis
- **Reflection**: Mirrors structure across plane
- **Inversion**: Inverts all coordinates (x, y, z) → (-x, -y, -z)
- **Translation**: Shifts structure by lattice vector

```python
# Get symmetry information
from pymatgen.symmetry.analyzer import SpacegroupAnalyzer

sga = SpacegroupAnalyzer(structure)
spacegroup = sga.get_space_group_number()
wyckoff_positions = sga.get_symmetry_dataset()
```

## Common Pitfalls

- ❌ Confusing fractional and Cartesian coordinates
- ❌ Not understanding crystal systems vs Bravais lattices
- ❌ Forgetting that real and reciprocal lattices are Fourier transforms
- ❌ Not checking symmetry before using space group operations
- ❌ Confusing coordination number with nearest neighbor count

## Practice Skills

1. **Create structure**: `Structure(lattice, species, coords)`
2. **Calculate volume**: `structure.volume`
3. **Get symmetry**: `SpacegroupAnalyzer(structure).get_space_group_number()`
4. **Find neighbors**: `structure.get_neighbors(site, r)`
5. **Read/write formats**: `Structure.from_file()`, `structure.to()`

## Links to Review

- [Atomistic Structures Chapter](../atomistic_structure/)
- [Crystal Structure Fundamentals](../atomistic_structure/unit_cell.md)
- [Symmetry Theory](../atomistic_structure/symmetry.md)
- [Structure Prototypes](../atomistic_structure/prototypes.md)
- [Reciprocal Space](../atomistic_structure/reciprocal_space.md)
- [Structure Formats](../atomistic_structure/structure_formats.md)
- [Practical: Crystal Structures](../atomistic_structure/crystal_structure.ipynb)

## Note on Advanced Topics

```{admonition} Reading Material
:class: note
Advanced defect topics, complex interface modeling, and detailed molecular graphs are provided as reading materials for interested students. Quiz 1 focuses on fundamental concepts covered in lectures.
```
