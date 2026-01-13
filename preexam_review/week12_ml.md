# Week 12: Machine Learning + ML Potentials

## Key Topics

### Machine Learning Potentials (MLPs) Overview
- **Definition**: Machine learning models that predict potential energy (and forces) from atomic configurations
- **Motivation**: Bridge gap between accuracy of DFT and speed of force fields
- **Key Idea**: Train on DFT calculations → predict for new configurations
- **Advantages**:
  - Near-DFT accuracy
  - Orders of magnitude faster than DFT
  - Can handle larger systems (1000+ atoms)
  - Transferable across similar systems

### Descriptors
- **Purpose**: Encode atomic environment into fixed-size numerical vectors
- **SOAP (Smooth Overlap of Atomic Positions)**:
  - Rotationally invariant
  - Captures local environment structure
  - Widely used for ML potentials

- **ACE (Atomic Cluster Expansion)**:
  - Compact representation
  - Good for materials
  - Naturally handles elemental diversity

- **GAP (Gaussian Approximation Potential)**:
  - Kernel-based method
  - Uses Gaussian process regression
  - Popular in materials community (QUIP)

```python
# Example: SOAP descriptor using DScribe
from dscribe.descriptors import SOAP

soap = SOAP(
    species=["Si", "O"],
    periodic=True,
    r_cut=5.0,  # Cutoff radius (Å)
    n_max=8,    # Radial basis functions
    l_max=6,    # Angular basis functions
)

# Calculate descriptor for atomic environment
descriptor = soap.create(structure)
```

### Neural Network Potentials
- **Concept**: Neural networks trained on DFT data
- **Architecture**:
  - Input: Atomic descriptors (SOAP, ACE, etc.)
  - Hidden layers: Fully connected or message passing
  - Output: Energy per atom (or forces)

- **Training**:
  - Generate training set (DFT calculations)
  - Split: Training/validation/test sets
  - Loss function: Typically MSE on energies and forces
  - Optimization: Adam, SGD, or custom optimizers

```python
# Example: Simple neural network potential
import torch
import torch.nn as nn

class MLPotential(nn.Module):
    def __init__(self, descriptor_size, hidden_size):
        super().__init__()
        self.fc1 = nn.Linear(descriptor_size, hidden_size)
        self.fc2 = nn.Linear(hidden_size, hidden_size)
        self.fc3 = nn.Linear(hidden_size, 1)  # Output: energy per atom
        
    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = torch.relu(self.fc2(x))
        return self.fc3(x)
```

### MACE (Higher-Order Equivariant Neural Network)
- **Architecture**:
  - Higher-order equivariant neural network
  - Message passing network
  - Preserves rotational equivariance
  - State-of-the-art accuracy

- **Advantages**:
  - Excellent accuracy
  - Good transferability
  - Scales well to large systems
  - Handles diverse chemistry

- **Applications**:
  - Large-scale MD simulations
  - High-pressure materials
  - Complex alloy systems
  - Surfaces and interfaces

### Error Analysis
- **Training Error**: Performance on training set
- **Validation Error**: Performance on unseen data (not used in training)
- **Test Error**: Final performance on held-out data
- **Goal**: Minimize validation error (prevent overfitting)

**Error Metrics**:
- **MAE (Mean Absolute Error)**: Average absolute deviation from DFT
- **RMSE (Root Mean Squared Error)**: Penalizes larger errors more heavily
- **Force Errors**: Critical for MD (typically in eV/Å)

```
MAE = (1/n) Σ|y_pred - y_true|
RMSE = √[(1/n) Σ(y_pred - y_true)²]
```

## Key Concepts

### ML Potential Training Pipeline

```
1. Generate Training Data
   ├─ Select diverse atomic configurations
   ├─ Calculate DFT energies and forces
   └─ Store in database

2. Compute Descriptors
   ├─ SOAP / ACE / GAP
   ├─ Per-atom descriptors
   └─ Invariant to rotations/translations

3. Train Model
   ├─ Split data (train/val/test)
   ├─ Choose architecture (NN, kernel, etc.)
   ├─ Optimize parameters
   └─ Validate on unseen data

4. Test and Deploy
   ├─ Evaluate on test set
   ├─ Compare with DFT benchmark
   └─ Use for MD simulations
```

### Energy Decomposition

```
E_total = Σ_i E_local(r_i)
```
- Total energy is sum of per-atom contributions
- E_local depends on local atomic environment
- Described by descriptor vector

### Force Calculation

```
F_i = -∇_ri E_total
```
- Forces are gradients of energy with respect to atomic positions
- Differentiable models (neural networks, some kernels) can predict forces
- Important for molecular dynamics (energy conservation)

## Common Pitfalls

- ❌ Training on too small dataset
- ❌ Not enough chemical diversity in training set
- ❌ Overfitting to training configurations
- ❌ Poor descriptor choice (wrong cutoff, insufficient resolution)
- ❌ Ignoring forces in training (energy-only models have poor forces)
- ❌ Not validating on truly unseen data
- ❌ Using ML potential outside training domain (extrapolation risk)

## Practice Skills

1. **Compute SOAP descriptor**: Use DScribe or QUIP
2. **Split dataset**: Train/validation/test (e.g., 80/10/10)
3. **Calculate MAE/RMSE**: Compare predictions to DFT
4. **Understand local energy**: E = Σ_i E_local(neighborhood_i)
5. **Calculate forces**: F = -∇E (requires differentiable model)

## Links to Review

- [Machine Learning Potentials Chapter](../machine_learning_potentials/)
- [ML Potentials Introduction](../machine_learning_potentials/introduction.md)
- [Descriptors](../machine_learning_potentials/explicit.md)
- [Neural Network Potentials](../machine_learning_potentials/bp_nn.md)
- [MACE](../machine_learning_potentials/mace.md)
- [Training & Validation](../machine_learning_potentials/training_validation.md)
- [Practical: MACE](../machine_learning_potentials/mlp.ipynb)

## Note on ML I & II

```{admonition} Reading Material
:class: note
Machine Learning I (foundational concepts) and Machine Learning II (GNNs, diffusion models) are provided as reading materials. Quiz 2 focuses on **ML Potentials** and assumes familiarity with basic ML concepts (regression, neural networks, validation, overfitting).
```
