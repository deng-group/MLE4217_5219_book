# Week 4: Database + Pandas

## Key Topics

### Database Concepts
- **Database**: Organized collection of data
- **Materials Databases**: Specialized databases for materials properties
- **Examples**:
  - Materials Project (MP)
  - OQMD (Open Quantum Materials Database)
  - AFLOW (The AFLOW Library)
  - Citrination

### Materials Project API
- **API**: Application Programming Interface
- **MPContribs**: Extended properties in Materials Project
- **API Key**: Required for authentication
- **Query Format**: JSON-based query

```python
from pymatgen.ext.matproj import MPRester

# Initialize API client
mpr = MPRester("YOUR_API_KEY")

# Query materials by formula
materials = mpr.summary.search(formula="Si", fields=["material_id", "energy_per_atom", "band_gap"])
```

### Data Formats
- **JSON**: JavaScript Object Notation - nested data structures
- **CSV**: Comma-Separated Values - tabular data
- **CIF**: Crystallographic Information File - crystal structures
- **POSCAR**: VASP input format - atomic positions and lattice

### Pandas Fundamentals
- **DataFrame**: Two-dimensional labeled data structure
- **Series**: One-dimensional labeled array
- **Index**: Row labels
- **Columns**: Column labels

### Loading Data
```python
import pandas as pd

# Load JSON (Materials Project data)
df = pd.read_json('materials_data.json')

# Load CSV (simulation logs)
df = pd.read_csv('simulation_results.csv')
```

### DataFrame Operations
```python
# View data
df.head()              # First 5 rows
df.tail()              # Last 5 rows
df.describe()          # Summary statistics
df.shape              # (rows, columns)

# Select data
df['column']           # Single column
df[['col1', 'col2']]  # Multiple columns
df.iloc[0:5]          # First 5 rows by index
df[df['density'] > 5]  # Conditional selection
```

### Extracting Nested Values
Materials Project data often contains nested dictionaries:

```python
# Extract VRH values from nested dictionaries
df['bulk_modulus_vrh'] = df['bulk_modulus'].apply(lambda x: x['vrh'])
df['shear_modulus_vrh'] = df['shear_modulus'].apply(lambda x: x['vrh'])
```

### Aggregation
```python
# Calculate statistics
mean_val = df['density'].mean()
std_val = df['density'].std()
min_val = df['bulk_modulus_vrh'].min()
max_val = df['bulk_modulus_vrh'].max()

# Count unique values
unique_count = df['material_id'].nunique()

# Value counts
value_counts = df['property'].value_counts()
```

### Filtering and Sorting
```python
# Filter by condition
high_density = df[df['density'] > 5.0]

# Multiple conditions
stable_dense = df[(df['density'] > 5.0) & (df['is_stable'] == True)]

# Sort
df_sorted = df.sort_values('density')                # Ascending
df_sorted_desc = df.sort_values('density', ascending=False)  # Descending
```

### Data Cleaning
```python
# Check for missing values
df.isnull().sum()

# Drop rows with missing values
df_clean = df.dropna()

# Fill missing values
df_filled = df.fillna(df.mean())  # Fill with mean
df_filled_zero = df.fillna(0)     # Fill with zero

# Rename columns
df = df.rename(columns={'old_name': 'new_name'})
```

### Integration with Matplotlib
```python
import matplotlib.pyplot as plt

# Scatter plot
plt.figure(figsize=(8, 6))
plt.scatter(df['density'], df['bulk_modulus_vrh'], alpha=0.5)
plt.xlabel('Density (g cm$^{-3}$)')
plt.ylabel('Bulk Modulus (GPa)')
plt.title('Bulk Modulus vs Density')
plt.grid(True)
plt.show()

# Histogram
plt.figure(figsize=(8, 6))
plt.hist(df['band_gap'], bins=30, edgecolor='black')
plt.xlabel('Band Gap (eV)')
plt.ylabel('Frequency')
plt.title('Band Gap Distribution')
plt.grid(True)
plt.show()
```

## Key Concepts

### Pandas Data Structure
```
Index   | material_id | density | band_gap | bulk_modulus
--------|-------------|---------|-----------|---------------
0       | mp-123      | 2.33    | 1.1       | {'vrh': 90}
1       | mp-456      | 8.96    | 0.0       | {'vrh': 140}
2       | mp-789      | 5.32    | 2.5       | {'vrh': 110}
```

### Data Querying Workflow
1. **Query API**: Get data from Materials Project
2. **Save as JSON**: Store query results
3. **Load with Pandas**: `df = pd.read_json()`
4. **Extract nested values**: Use `.apply(lambda x: x['key'])`
5. **Filter/aggregate**: Prepare data for analysis
6. **Visualize**: Plot with Matplotlib

## Common Pitfalls

- ❌ Not handling nested dictionaries in Materials Project data
- ❌ Using loops instead of vectorized Pandas operations
- ❌ Forgetting to clean data (missing values)
- ❌ Not using `.apply()` for extracting nested values
- ❌ Confusing `.loc[]` and `.iloc[]` indexing

## Practice Skills

1. **Load JSON**: `df = pd.read_json('data.json')`
2. **Extract nested values**: `df['val'] = df['col'].apply(lambda x: x['key'])`
3. **Filter data**: `df[df['property'] > threshold]`
4. **Calculate statistics**: `df['col'].mean()`, `df['col'].std()`
5. **Create plot**: `plt.scatter(df['x'], df['y'])`

## Links to Review

- [Database Chapter](../database/)
- [Pandas Basics](../database/pandas_basics.md)
- [Materials Database](../database/materials_database.md)
- [Data Concepts](../database/concepts.md)
- [Practical: Materials Project](../database/materials_project.ipynb)
- [Practical: Bulk Modulus](../database/bulk_modulus.ipynb)
