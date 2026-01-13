# Pandas Basics

Pandas is a powerful Python library for data manipulation and analysis. In materials informatics, Pandas is commonly used to work with data from databases like the Materials Project, analyze simulation results, and prepare data for visualization.

## Introduction to Pandas

Pandas provides two main data structures:

- **Series**: A one-dimensional labeled array (like a column in a spreadsheet)
- **DataFrame**: A two-dimensional labeled data structure (like a spreadsheet or SQL table)

DataFrames are the most commonly used structure and will be used throughout this course for handling materials data.

## Installation

If you haven't installed Pandas yet, you can install it using pip:

```bash
pip install pandas
```

Or using conda:

```bash
conda install pandas
```

## Loading Data

### Loading JSON Files (Materials Project Data)

When working with the Materials Project API, you'll often save query results as JSON files. Pandas makes it easy to load these files:

```python
import pandas as pd

# Load JSON file into a DataFrame
df = pd.read_json('materials_data.json')

# Select specific columns
df = df[['material_id', 'volume', 'density', 'bulk_modulus', 'shear_modulus']]

# Display the DataFrame
print(df)
```

### Loading CSV Files (Simulation Logs)

For molecular dynamics simulations or other computational results, data is often stored in CSV files:

```python
# Load CSV file
df = pd.read_csv('simulation_results.csv')

# Display first few rows
print(df.head())

# Display data types
print(df.dtypes)
```

### Reading Common File Formats

Pandas supports many file formats:

| Format | Function | Example |
|--------|----------|---------|
| CSV | `pd.read_csv()` | `df = pd.read_csv('data.csv')` |
| JSON | `pd.read_json()` | `df = pd.read_json('data.json')` |
| Excel | `pd.read_excel()` | `df = pd.read_excel('data.xlsx')` |
| TSV | `pd.read_csv()` with `sep='\t'` | `df = pd.read_csv('data.tsv', sep='\t')` |

## Basic DataFrame Operations

### Viewing Data

```python
# Display first 5 rows
df.head()

# Display last 5 rows
df.tail()

# Display summary statistics
df.describe()

# Display DataFrame shape (rows, columns)
df.shape
```

### Selecting Data

```python
# Select single column
material_ids = df['material_id']

# Select multiple columns
subset = df[['material_id', 'density']]

# Select rows by index
first_10 = df.iloc[0:10]

# Select rows by condition
high_density = df[df['density'] > 5.0]

# Select rows where density is between 3 and 6
medium_density = df[(df['density'] >= 3.0) & (df['density'] <= 6.0)]
```

### Extracting Nested Values

Materials Project data often contains nested dictionaries (e.g., bulk_modulus with voigt, reuss, vrh values). You can extract these values using the `.apply()` method:

```python
# Extract 'vrh' value from 'bulk_modulus' dictionary
df['bulk_modulus_vrh'] = df['bulk_modulus'].apply(lambda x: x['vrh'])

# Extract 'vrh' value from 'shear_modulus' dictionary
df['shear_modulus_vrh'] = df['shear_modulus'].apply(lambda x: x['vrh'])

# Display the new columns
print(df[['bulk_modulus', 'bulk_modulus_vrh', 'shear_modulus', 'shear_modulus_vrh']].head())
```

### Basic Aggregation

```python
# Calculate mean of a column
mean_density = df['density'].mean()

# Calculate standard deviation
std_density = df['density'].std()

# Find minimum and maximum
min_bulk = df['bulk_modulus_vrh'].min()
max_bulk = df['bulk_modulus_vrh'].max()

# Count unique values
unique_elements = df['material_id'].nunique()

# Value counts
value_counts = df['bulk_modulus_vrh'].value_counts()
```

### Filtering and Sorting

```python
# Filter by condition
stable_materials = df[df['is_stable'] == True]

# Sort by column (ascending)
df_sorted = df.sort_values('density')

# Sort by column (descending)
df_sorted_desc = df.sort_values('density', ascending=False)

# Multiple conditions
high_stable_density = df[(df['density'] > 5.0) & (df['is_stable'] == True)]
```

## Integration with Matplotlib

Pandas integrates seamlessly with Matplotlib for plotting. You can create plots directly from DataFrame columns:

```python
import matplotlib.pyplot as plt
import numpy as np

# Extract VRH values from nested dictionaries
df['bulk_modulus_vrh'] = df['bulk_modulus'].apply(lambda x: x['vrh'])
df['shear_modulus_vrh'] = df['shear_modulus'].apply(lambda x: x['vrh'])

# Scatter plot
plt.figure(figsize=(6, 5))
plt.scatter(df['density'], df['bulk_modulus_vrh'], alpha=0.5)
plt.xlabel('Density (g cm$^{-3}$)')
plt.ylabel('Bulk Modulus (VRH, GPa)')
plt.title('Bulk Modulus vs Density')
plt.grid(True)
plt.show()

# Histogram
plt.figure(figsize=(6, 5))
plt.hist(df['density'], bins=30, edgecolor='black')
plt.xlabel('Density (g cm$^{-3}$)')
plt.ylabel('Frequency')
plt.title('Distribution of Density Values')
plt.grid(True)
plt.show()
```

### Plotting Multiple Series

```python
# Plot bulk and shear modulus vs density
plt.figure(figsize=(6, 5))
plt.scatter(df['density'], df['bulk_modulus_vrh'], label='Bulk Modulus', alpha=0.5)
plt.scatter(df['density'], df['shear_modulus_vrh'], label='Shear Modulus', alpha=0.5)
plt.xlabel('Density (g cm$^{-3}$)')
plt.ylabel('Modulus (GPa)')
plt.title('Bulk and Shear Modulus vs Density')
plt.legend()
plt.grid(True)
plt.show()
```

## Common Data Cleaning Operations

### Handling Missing Values

```python
# Check for missing values
df.isnull().sum()

# Drop rows with missing values
df_clean = df.dropna()

# Fill missing values with mean
df_filled = df.fillna(df.mean())

# Fill missing values with specific value
df_filled_zero = df.fillna(0)
```

### Renaming Columns

```python
# Rename a single column
df = df.rename(columns={'material_id': 'mp_id'})

# Rename multiple columns
df = df.rename(columns={
    'bulk_modulus_vrh': 'bulk_modulus_GPa',
    'shear_modulus_vrh': 'shear_modulus_GPa'
})
```

### Adding and Removing Columns

```python
# Add new column (e.g., bulk/shear ratio)
df['bulk_shear_ratio'] = df['bulk_modulus_vrh'] / df['shear_modulus_vrh']

# Remove column
df = df.drop('temporary_column', axis=1)
```

## Saving Data

After processing data, you can save it back to a file:

```python
# Save to CSV
df.to_csv('processed_data.csv', index=False)

# Save to JSON
df.to_json('processed_data.json', orient='records')

# Save to Excel
df.to_excel('processed_data.xlsx', index=False)
```

## Performance Tips

- Use vectorized operations instead of loops whenever possible
- For large datasets, consider using `df.iloc[]` for integer location-based indexing (faster than `df.loc[]`)
- Use `inplace=True` parameter to modify DataFrame in place (saves memory)
- Use `dtype` parameter when reading files to specify data types (reduces memory usage)

## Summary

Key Pandas operations you'll use in this course:

| Operation | Description | Example |
|----------|-------------|---------|
| Loading data | Read JSON/CSV files | `df = pd.read_json('data.json')` |
| Extracting values | Access nested dictionary values | `df['val'] = df['col'].apply(lambda x: x['key'])` |
| Filtering | Select rows based on conditions | `df[df['density'] > 5.0]` |
| Aggregation | Calculate statistics | `df['col'].mean()` |
| Plotting | Visualize data with Matplotlib | `plt.scatter(df['x'], df['y'])` |

## Further Reading

- [Pandas Documentation](https://pandas.pydata.org/docs/)
- [Pandas Getting Started Tutorial](https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html)
- [10 Minutes to Pandas](https://pandas.pydata.org/docs/user_guide/10min.html)
