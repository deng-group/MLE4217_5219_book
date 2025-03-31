# Learning Process

In supervised learning, the process by which a model "learns" typically involves optimizing its internal parameters to minimize the discrepancy between its predictions and the true target values.

1.  **Model Initialization:** The model's adjustable parameters (e.g., weights in a neural network) are assigned initial values.
2.  **Forward Pass:** For a given input feature vector $\mathbf{x}_i$, the model computes a prediction $\hat{y}_i$.
3.  **Loss Calculation:** A **loss function**, $L$, quantifies the error or 'cost' associated with the model's prediction compared to the true value $y_i$. The choice of loss function depends on the task. A widely used loss function for regression is the **Mean Squared Error (MSE)**:
    $ L_{\text{MSE}} = \frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2 $
    where $N$ is the number of training samples. Another common choice for regression is the **Mean Absolute Error (MAE)**:
    $ L_{\text{MAE}} = \frac{1}{N} \sum_{i=1}^{N} |y_i - \hat{y}_i| $
    For classification tasks, functions like cross-entropy loss are typically used.
4.  **Parameter Optimization:** Optimization algorithms, most commonly variants of **gradient descent**, compute the gradient of the loss function with respect to the model parameters. The parameters are then updated iteratively in the direction that minimizes the loss. This process is often referred to as **training** or **fitting** the model.
5.  **Iteration:** Steps 2-4 are repeated multiple times (epochs) over the training dataset until the model's performance converges or further training yields diminishing returns.

A critical aspect of ML is ensuring the model **generalizes** well—that is, performs accurately on new, previously unseen data, not just the data it was trained on. Overfitting occurs when a model learns the training data too well, including its noise, and consequently performs poorly on new data. To combat this and assess generalization, datasets are typically partitioned:

*   **Training Set:** Used to fit the model parameters.
*   **Validation Set:** Used during the training phase to tune model hyperparameters (e.g., model complexity, learning rate) and make decisions about the training process (e.g., when to stop training). Performance on the validation set guides model selection and tuning.
*   **Test Set:** Held aside completely during training and validation. It is used only once at the very end to provide an unbiased estimate of the final model's performance on unseen data.
