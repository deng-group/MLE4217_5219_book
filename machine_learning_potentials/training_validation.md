# Training and Validation

```{figure} ../figures/construct_mlp.png
General process of constructing a MLP.
```

## Dataset: The Foundation of MLPs

A good machine learning potential (MLP) starts with a high-quality dataset. This dataset is typically generated using density functional theory (DFT) calculations and should include:

- Energies: The total energy of atomic configurations.
- Forces: The forces acting on each atom in the system.
- (Optional) Virials: Stress tensors, which are particularly useful for systems under pressure or strain.

### What Makes a Dataset Good?

- Diversity: The dataset should cover a wide range of atomic configurations, including different geometries, volumes, and chemical compositions.
- Accuracy: The data must be reliable and free from errors. Poor-quality data can lead to poor model performance.
- Coverage: Ensure the dataset represents the conditions the MLP will encounter, such as varying temperatures, pressures, and chemical environments.

## Training: How MLPs Learn

Training an MLP involves teaching it to predict energies, forces, and stresses from atomic configurations. This process can be broken down into three main steps:

1. Loss Function: The loss function measures how far the MLP's predictions are from the actual values. A common choice is the mean squared error (MSE), which combines errors in energies, forces, and stresses:

    $$
    L = \frac{1}{N} \sum_{i=1}^{N} \left( E_i - \hat{E}_i \right)^2 + \frac{1}{N} \sum_{i=1}^{N} \left( F_i - \hat{F}_i \right)^2 + \frac{1}{N} \sum_{i=1}^{N} \left( S_i - \hat{S}_i \right)^2
    $$

    - $N$: Number of atomic configurations.
    - $E_i$, $\hat{E}_i$: True and predicted energies.
    - $F_i$, $\hat{F}_i$: True and predicted forces.
    - $S_i$, $\hat{S}_i$: True and predicted stresses.

2. Optimization: Algorithms like gradient descent are used to minimize the loss function, improving the model's predictions over time.

3. Hyperparameters: These are settings that control the training process, such as learning rate, batch size, and number of epochs. Tuning these hyperparameters is crucial for achieving optimal performance.

4. Validation: To ensure the MLP generalizes well, test it on a separate validation dataset. This helps detect overfitting and ensures the model performs well on unseen data.

## Evaluation: Measuring MLP Performance

Once the MLP is trained, it’s important to evaluate its performance. Here are some key aspects to consider:

1. Accuracy:
    - Use metrics like Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE) to assess:
      - Energy predictions (e.g., in meV/atom).
      - Force predictions (e.g., in eV/Å).
    - You also need to check the accuracy of the properties that you are interested in, such as ionic conductivity, etc.

2. Stability in Molecular Dynamics (MD):
    - Test the MLP in MD simulations to check if it maintains stable temperature and conserves energy.

3. Transferability:
    - Evaluate the MLP on new structures or chemistries not included in the training dataset. This ensures the model can handle scenarios it hasn’t seen before.

