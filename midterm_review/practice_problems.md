# Practice Problems for Quiz 1

This document contains practice problems covering Weeks 1-5 to help you prepare for Quiz 1.

## Problem 1: Git Operations

You're working on a collaborative project for materials data analysis.

a) Write the Git commands to:
   1. Clone the repository `https://github.com/mse-lab/materials-analysis.git`
   2. Create a new branch named `feature-plotting`
   3. Switch to the new branch
   4. Add a file `plot_density.py` to staging
   5. Commit the changes with message "Add density plotting function"
   6. Push the branch to remote repository

<details>
<summary>Solution</summary>

```bash
# 1. Clone repository
git clone https://github.com/mse-lab/materials-analysis.git

# 2. Create new branch
git branch feature-plotting

# 3. Switch to new branch
git checkout feature-plotting

# 4. Stage file
git add plot_density.py

# 5. Commit
git commit -m "Add density plotting function"

# 6. Push to remote
git push -u origin feature-plotting
```

</details>

b) What happens if you try to merge your branch into `main` and there are conflicting changes on the same line? How would you resolve this?

<details>
<summary>Solution</summary>

Git will report a **merge conflict**. To resolve:

1. Open the conflicted file(s)
2. Look for conflict markers: `<<<<<<< HEAD`, `=======`, `>>>>>>> feature-plotting`
3. Choose which changes to keep (or combine them)
4. Remove the conflict markers
5. Stage the resolved file: `git add filename.py`
6. Commit: `git commit -m "Resolve merge conflict"`

In VS Code, you can use the visual interface to choose "Accept Current Change", "Accept Incoming Change", or "Accept Both Changes".
</details>

---

## Problem 2: NumPy Array Operations

Given the following NumPy arrays:

```python
import numpy as np

# Lattice vectors (in Å)
lattice = np.array([
    [5.43, 0.00, 0.00],  # a₁
    [0.00, 5.43, 0.00],  # a₂
    [0.00, 0.00, 5.43]   # a₃
])

# Fractional coordinates of atoms
positions = np.array([
    [0.0, 0.0, 0.0],
    [0.25, 0.25, 0.25],
    [0.5, 0.5, 0.5]
])
```

a) Calculate the volume of the unit cell using the determinant.

<details>
<summary>Solution</summary>

```python
volume = np.linalg.det(lattice)
print(f"Volume: {volume:.2f} Å³")
# Output: Volume: 160.21 Å³
```
</details>

b) Convert fractional coordinates to Cartesian coordinates.

<details>
<summary>Solution</summary>

```python
# Convert fractional to Cartesian: cart = frac @ lattice
cartesian = positions @ lattice
print(cartesian)
# Output:
# [[0.    0.    0.   ]
#  [1.3575 1.3575 1.3575]
#  [2.715  2.715  2.715 ]]
```
</details>

c) Create a boolean mask to select only atoms with x-coordinate > 2.0 Å.

<details>
<summary>Solution</summary>

```python
mask = cartesian[:, 0] > 2.0
selected_atoms = cartesian[mask]
print(selected_atoms)
# Output:
# [[2.715  2.715  2.715]]
```
</details>

---

## Problem 3: Pandas Data Analysis

You have queried the Materials Project and saved the results to a JSON file. The data contains information about silicon-based materials:

```python
import pandas as pd

# Load data
df = pd.read_json('silicon_materials.json')

# DataFrame has columns: material_id, formula, band_gap, energy_per_atom, bulk_modulus
# Note: bulk_modulus is a nested dictionary with keys: 'vrh', 'voigt', 'reuss'
```

a) Extract the VRH bulk modulus values from the nested `bulk_modulus` column.

<details>
<summary>Solution</summary>

```python
# Extract VRH values using .apply() and lambda
df['bulk_modulus_vrh'] = df['bulk_modulus'].apply(lambda x: x['vrh'])
```
</details>

b) Filter the DataFrame to show only materials with band gap > 1.0 eV.

<details>
<summary>Solution</summary>

```python
high_gap_materials = df[df['band_gap'] > 1.0]
```
</details>

c) Calculate and print the mean VRH bulk modulus of the high-bandgap materials.

<details>
<summary>Solution</summary>

```python
mean_bulk_modulus = high_gap_materials['bulk_modulus_vrh'].mean()
print(f"Mean VRH bulk modulus: {mean_bulk_modulus:.2f} GPa")
```
</details>

---

## Problem 4: Matplotlib Plotting

Using the materials data from Problem 3:

a) Create a scatter plot showing the relationship between band gap (x-axis) and VRH bulk modulus (y-axis). Include:
   - Axis labels with units
   - Title
   - Grid lines

<details>
<summary>Solution</summary>

```python
import matplotlib.pyplot as plt

plt.figure(figsize=(8, 6))
plt.scatter(df['band_gap'], df['bulk_modulus_vrh'], alpha=0.6)
plt.xlabel('Band Gap (eV)')
plt.ylabel('Bulk Modulus (VRH, GPa)')
plt.title('Bulk Modulus vs Band Gap for Silicon Materials')
plt.grid(True)
plt.show()
```
</details>

b) Create a histogram showing the distribution of band gaps. Use 20 bins.

<details>
<summary>Solution</summary>

```python
plt.figure(figsize=(8, 6))
plt.hist(df['band_gap'], bins=20, edgecolor='black', alpha=0.7)
plt.xlabel('Band Gap (eV)')
plt.ylabel('Frequency')
plt.title('Distribution of Band Gaps')
plt.grid(True)
plt.show()
```
</details>

---

## Problem 5: Crystal Structures

a) You're given a simple cubic structure with lattice parameter a = 4.0 Å. Write the lattice vectors and calculate the unit cell volume.

<details>
<summary>Solution</summary>

```python
import numpy as np

# Simple cubic lattice vectors
lattice = np.array([
    [4.0, 0.0, 0.0],
    [0.0, 4.0, 0.0],
    [0.0, 0.0, 4.0]
])

# Calculate volume
volume = np.linalg.det(lattice)
print(f"Volume: {volume} Å³")
# Output: Volume: 64.0 Å³
```
</details>

b) For the same simple cubic structure, an atom is located at fractional coordinates (0.5, 0.25, 0.75). What are its Cartesian coordinates?

<details>
<summary>Solution</summary>

```python
# Convert fractional to Cartesian
fractional = np.array([0.5, 0.25, 0.75])
cartesian = fractional @ lattice

print(f"Cartesian coordinates: ({cartesian[0]:.2f}, {cartesian[1]:.2f}, {cartesian[2]:.2f}) Å")
# Output: Cartesian coordinates: (2.00, 1.00, 3.00) Å
```
</details>

c) Name three common crystal structure prototypes and give an example material for each.

<details>
<summary>Solution</summary>

| Prototype | Example Material |
|-----------|-----------------|
| FCC (Face-Centered Cubic) | Copper (Cu), Aluminum (Al) |
| BCC (Body-Centered Cubic) | Iron (Fe) at room temperature |
| Diamond | Silicon (Si), Diamond (C) |

Other valid answers:
- HCP: Magnesium (Mg), Zinc (Zn)
- Perovskite: BaTiO₃, SrTiO₃
- Rock Salt: NaCl, MgO
</details>

---

## Problem 6: HPC and Environment Setup

a) Write the command to test SSH connection to NUS ASPIRE1 HPC cluster (replace YOUR_NUSNETID with your actual ID).

<details>
<summary>Solution</summary>

```bash
ssh YOUR_NUSNETID@aspire1.nus.edu.sg
```
</details>

b) What command would you use to check your current jobs in the queue on the HPC?

<details>
<summary>Solution</summary>

```bash
squeue -u $USER
```
</details>

c) Write the conda commands to create a new virtual environment named `materials` with Python 3.13, activate it, and install `pymatgen`.

<details>
<summary>Solution</summary>

```bash
# Create environment
conda create -n materials python=3.13

# Activate environment
conda activate materials

# Install package
pip install pymatgen
```
</details>

---

## Problem 7: Symmetry Concepts

a) What is the difference between point groups and space groups?

<details>
<summary>Solution</summary>

- **Point Groups**: Describe symmetry about a single point (rotations, reflections, inversions). There are 32 point groups in 3D. They don't include translations.

- **Space Groups**: Describe the complete symmetry of a 3D crystal structure, including translations. There are 230 space groups in 3D. They combine point group symmetry with translational symmetry (lattice translations, screw axes, glide planes).
</details>

b) What are Wyckoff positions?

<details>
<summary>Solution</summary>

Wyckoff positions are unique atomic positions within a space group. Atoms in the same Wyckoff position are related by symmetry operations. Each Wyckoff position is characterized by:
- A set of coordinates (site symmetry)
- A multiplicity (number of equivalent positions)
- A letter label (e.g., 4a, 8b, 16c)

For example, in FCC structure, atoms occupy the 4a Wyckoff position with coordinates (0, 0, 0).
</details>

---

## Problem 8: Database and API Query

a) Write a Python script using pymatgen to query the Materials Project for materials with formula "SiO2" and retrieve their band gaps.

<details>
<summary>Solution</summary>

```python
from pymatgen.ext.matproj import MPRester

# Initialize with your API key
mpr = MPRester("YOUR_API_KEY")

# Query for SiO2 materials
results = mpr.summary.search(
    formula="SiO2",
    fields=["material_id", "band_gap", "energy_per_atom"]
)

# Display results
for material in results:
    print(f"{material['material_id']}: Band Gap = {material['band_gap']} eV")
```
</details>

b) After querying, you save the results to a JSON file. Write the code to load this file and create a DataFrame.

<details>
<summary>Solution</summary>

```python
import pandas as pd

# Load JSON file
df = pd.read_json('sio2_materials.json')

# Display first few rows
print(df.head())

# Display summary statistics
print(df.describe())
```
</details>

---

## Self-Assessment Checklist

Before Quiz 1, make sure you can:

- [ ] Execute basic Git commands (clone, add, commit, push, pull)
- [ ] Create and merge branches
- [ ] Resolve merge conflicts
- [ ] Create and manipulate NumPy arrays
- [ ] Use boolean masking for filtering
- [ ] Calculate basic statistics with NumPy
- [ ] Create scatter plots, line plots, and histograms with Matplotlib
- [ ] Load JSON and CSV files with Pandas
- [ ] Extract nested values using `.apply(lambda x: x['key'])`
- [ ] Filter DataFrames by conditions
- [ ] Calculate aggregation functions (mean, std, min, max)
- [ ] Understand crystal systems and Bravais lattices
- [ ] Convert between fractional and Cartesian coordinates
- [ ] Identify common crystal structure prototypes
- [ ] Differentiate between point groups and space groups
- [ ] Query Materials Project API
- [ ] Connect to HPC cluster via SSH

## Additional Resources

- [Week 1 Review](week1_orientation.md)
- [Week 2 Review](week2_python.md)
- [Week 3 Review](week3_computer.md)
- [Week 4 Review](week4_database.md)
- [Week 5 Review](week5_atomistic.md)
