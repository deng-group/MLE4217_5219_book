# Models
```{admonition} Machine Learning Models
:class: warning
Here we just briefly cover this topic. A detailed introduction to the machine learning can be found in the [MLE5217 Foundations of Machine Learning for Materials Science](https://nusmods.com/courses/MLE5217/foundations-of-machine-learning-for-materials-science).
```

An ML model is the algorithm employed to learn the underlying patterns or input-output relationships within the data. Models can be broadly categorized based on the type of learning task they perform.

## Supervised Learning
This is the most prevalent ML paradigm in materials property prediction. In supervised learning, the algorithm learns from a dataset containing input features ($X$) paired with known output targets or labels ($y$). The objective is to learn a mapping function $f$ such that the model's prediction $\hat{y} = f(X)$ is a good approximation of the true target $y$. Two main types of supervised learning tasks are:

*   **Regression:** Predicting a continuous numerical value. Examples include predicting formation energy, band gap, elastic moduli, critical temperature ($T_c$), or diffusion coefficients.
*   **Classification:** Predicting a discrete categorical label. Examples include classifying a material as thermodynamically stable or unstable, predicting its crystal structure prototype (e.g., perovskite, zincblende, rocksalt), or identifying whether it is a metal, semiconductor, or insulator.

### Common Models in Supervised Learning
Several models are commonly used in supervised learning tasks, each with its strengths and weaknesses depending on the nature of the data and the problem:

*   **Linear Regression:** A simple model for regression tasks that assumes a linear relationship between input features and the target variable. The model can be expressed as:
    $$
    \hat{y} = \beta_0 + \sum_{i=1}^n \beta_i X_i
    $$
    where $\beta_0$ is the intercept, $\beta_i$ are the coefficients, and $X_i$ are the input features.

*   **Logistic Regression:** A classification model that predicts probabilities for discrete classes using a logistic function. The model is defined as:
    $$
    P(y=1|X) = \frac{1}{1 + e^{-(\beta_0 + \sum_{i=1}^n \beta_i X_i)}}
    $$

*   **Decision Trees:** A versatile model that splits the data into subsets based on feature values, forming a tree-like structure for both regression and classification tasks.

*   **Random Forests:** An ensemble method that combines multiple decision trees to improve prediction accuracy and reduce overfitting.

*   **Support Vector Machines (SVM):** A model that finds the optimal hyperplane to separate data points into classes or perform regression. For classification, the decision boundary is defined as:
    $$
    w^T X + b = 0
    $$
    where $w$ is the weight vector and $b$ is the bias.

*   **k-Nearest Neighbors (k-NN):** A simple algorithm that predicts the target based on the majority class (classification) or average value (regression) of the $k$ nearest neighbors in the feature space.

*   **Neural Networks:** A powerful model inspired by the human brain, capable of learning complex patterns in data. The output of a single-layer neural network can be expressed as:
    $$
    \hat{y} = \sigma(WX + b)
    $$
    where $W$ is the weight matrix, $b$ is the bias vector, and $\sigma$ is the activation function.

*   **Gradient Boosting Machines (e.g., XGBoost, LightGBM, CatBoost):** Ensemble models that build trees sequentially, optimizing for errors in previous iterations to achieve high performance in both regression and classification tasks.

Each of these models can be fine-tuned and adapted to specific datasets and tasks, making them essential tools in the machine learning toolbox.

## Unsupervised Learning
In unsupervised learning, the algorithm analyzes datasets without predefined labels ($X$ only). The goal is to discover inherent structures, patterns, or relationships within the data itself. Common tasks include:

*   **Clustering:** Grouping similar data points together based on their features. This can reveal natural families of materials or identify distinct material phases.
*   **Dimensionality Reduction:** Reducing the number of features (dimensionality) while retaining essential information. Techniques like Principal Component Analysis (PCA) or t-Distributed Stochastic Neighbor Embedding (t-SNE) are often used to compress high-dimensional feature vectors into 2D or 3D for visualization, helping to build intuitive 'maps' of materials space.
*   **Anomaly Detection:** Identifying data points that deviate significantly from the norm. These outliers might represent novel materials with unusual properties, errors in the data, or previously unobserved phenomena.

### Common Models in Unsupervised Learning
Several models and techniques are widely used in unsupervised learning tasks:

*   **k-Means Clustering:** A popular clustering algorithm that partitions data into $k$ clusters by minimizing the within-cluster sum of squares. The objective is to find cluster centroids $\mu_k$ such that:
    $$
    \arg\min_{\mu_1, \mu_2, \ldots, \mu_k} \sum_{i=1}^n \min_{j \in \{1, \ldots, k\}} \|X_i - \mu_j\|^2
    $$

*   **Hierarchical Clustering:** A method that builds a hierarchy of clusters using either a bottom-up (agglomerative) or top-down (divisive) approach. The result is often visualized as a dendrogram.

*   **Principal Component Analysis (PCA):** A dimensionality reduction technique that projects data onto a lower-dimensional space while maximizing variance. The transformation is defined as:
    $$
    Z = XW
    $$
    where $W$ is the matrix of principal components.

*   **t-Distributed Stochastic Neighbor Embedding (t-SNE):** A non-linear dimensionality reduction technique that minimizes the divergence between pairwise similarities in high-dimensional and low-dimensional spaces.

*   **Autoencoders:** Neural networks designed to learn compressed representations of data. The model consists of an encoder $f_\theta$ and a decoder $g_\phi$, aiming to minimize reconstruction error:
    $$
    \arg\min_{\theta, \phi} \|X - g_\phi(f_\theta(X))\|^2
    $$

*   **Gaussian Mixture Models (GMM):** A probabilistic model that assumes data is generated from a mixture of Gaussian distributions. The likelihood of a data point $X_i$ is given by:
    $$
    P(X_i) = \sum_{k=1}^K \pi_k \mathcal{N}(X_i | \mu_k, \Sigma_k)
    $$
    where $\pi_k$ are the mixture weights, $\mu_k$ are the means, and $\Sigma_k$ are the covariance matrices.

These models provide powerful tools for exploring and understanding unlabeled datasets, enabling insights into the underlying structure of the data.