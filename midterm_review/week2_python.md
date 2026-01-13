# Week 2: Python Programming

## Key Topics

### Python Basics
- **Data Types**: Integers, floats, strings, booleans, lists, dictionaries
- **Control Flow**: `if/elif/else`, `for` loops, `while` loops
- **Functions**: Definition, parameters, return values
- **Comprehensions**: List comprehensions, dictionary comprehensions
- **Common Pitfalls**: Mutable default arguments, shallow vs deep copy

```python
# Example: Function with docstring
def calculate_energy(temperature):
    """
    Calculate energy at given temperature.

    Args:
        temperature: Temperature in Kelvin

    Returns:
        Energy value
    """
    return temperature * k_boltzmann
```

### NumPy Fundamentals
- **Arrays**: N-dimensional arrays for numerical computation
- **Creation**: `np.array()`, `np.zeros()`, `np.ones()`, `np.linspace()`
- **Indexing**: `arr[i]`, `arr[i:j]`, `arr[::2]`, `arr[mask]`
- **Broadcasting**: Automatic array shape matching for operations
- **Operations**: Element-wise math, statistics (`mean`, `std`, `min`, `max`)

```python
# Example: NumPy array operations
lattice_vectors = np.array([[a, 0, 0], [0, a, 0], [0, 0, a]])
volumes = np.linalg.det(lattice_vectors)  # Calculate volumes
density = np.sum(atomic_masses) / volumes
```

### Matplotlib Basics
- **Plot Types**: Line plots, scatter plots, histograms, bar plots
- **Customization**: Labels, titles, legends, colors, markers
- **Subplots**: Multiple plots in one figure
- **Saving**: `plt.savefig()` for reports/papers

```python
# Example: Energy vs volume plot
plt.figure(figsize=(8, 6))
plt.plot(volumes, energies, 'o-', label='E-V curve')
plt.xlabel('Volume (Å$^3$)')
plt.ylabel('Energy (eV)')
plt.title('Energy vs Volume')
plt.legend()
plt.grid(True)
plt.show()
```

### Jupyter Notebook Workflow
- **Cells**: Code cells (execute) and markdown cells (documentation)
- **Kernels**: Python runtime for notebook
- **Debugging**: Print statements, `%debug` magic command
- **Best Practices**:
  - Clear cell organization (imports, setup, computation, visualization)
  - Descriptive markdown cells between code cells
  - Variable naming conventions
  - Comments for complex logic

## Key Concepts

### NumPy Shapes
- `shape` attribute: Tuple describing dimensions
- `reshape()`: Change array shape without changing data
- `flatten()`: Convert multi-dimensional to 1D

```python
arr = np.zeros((3, 4, 5))  # 3D array with shape (3, 4, 5)
arr_flat = arr.flatten()  # 1D array with 60 elements
```

### Matplotlib Figure Management
```python
fig, axes = plt.subplots(2, 2, figsize=(12, 10))
# axes[0,0] - top-left plot
# axes[0,1] - top-right plot
# axes[1,0] - bottom-left plot
# axes[1,1] - bottom-right plot
axes[0,0].plot(x, y1)
axes[0,1].scatter(x, y2)
axes[1,0].hist(data)
axes[1,1].bar(categories, values)
plt.tight_layout()
plt.savefig('multiplot.png', dpi=300)
```

## Common Pitfalls

- ❌ Using Python lists instead of NumPy arrays for numerical operations
- ❌ Not using vectorized operations (loops are slow)
- ❌ Forgetting `plt.show()` after plotting
- ❌ Mixing up copy vs view in NumPy
- ❌ Not using markdown cells to document notebooks

## Practice Skills

1. **Create NumPy array**: `arr = np.array([1, 2, 3, 4, 5])`
2. **Slice array**: `arr[1:4]` → `[2, 3, 4]`
3. **Boolean masking**: `arr[arr > 3]` → `[4, 5]`
4. **Calculate statistics**: `arr.mean()`, `arr.std()`
5. **Create plot**: `plt.plot(x, y)`, `plt.xlabel()`, `plt.ylabel()`, `plt.show()`

## Links to Review

- [Python Programming Chapter](../python_programming/)
- [Python Basics](../python_programming/python_basics.md)
- [NumPy Fundamentals](../python_programming/numpy.md)
- [Matplotlib Guide](../python_programming/matplotlib.md)
- [Jupyter Workflow](../python_programming/jupyter_workflow.md)
- [Practical Exercises](../python_programming/exercises.ipynb)
