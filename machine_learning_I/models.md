# Machine Learning Models

An ML model is the algorithm employed to learn the underlying patterns or input-output relationships within the data. Models can be broadly categorized based on the type of learning task they perform.

## Supervised Learning
This is the most prevalent ML paradigm in materials property prediction. In supervised learning, the algorithm learns from a dataset containing input features ($X$) paired with known output targets or labels ($y$). The objective is to learn a mapping function $f$ such that the model's prediction $\hat{y} = f(X)$ is a good approximation of the true target $y$. Two main types of supervised learning tasks are:

*   **Regression:** Predicting a continuous numerical value. Examples include predicting formation energy, band gap, elastic moduli, critical temperature ($T_c$), or diffusion coefficients.
*   **Classification:** Predicting a discrete categorical label. Examples include classifying a material as thermodynamically stable or unstable, predicting its crystal structure prototype (e.g., perovskite, zincblende, rocksalt), or identifying whether it is a metal, semiconductor, or insulator.

## Unsupervised Learning
In unsupervised learning, the algorithm analyzes datasets without predefined labels ($X$ only). The goal is to discover inherent structures, patterns, or relationships within the data itself. Common tasks include:

*   **Clustering:** Grouping similar data points together based on their features. This can reveal natural families of materials or identify distinct material phases.
*   **Dimensionality Reduction:** Reducing the number of features (dimensionality) while retaining essential information. Techniques like Principal Component Analysis (PCA) or t-Distributed Stochastic Neighbor Embedding (t-SNE) are often used to compress high-dimensional feature vectors into 2D or 3D for visualization, helping to build intuitive 'maps' of materials space.
*   **Anomaly Detection:** Identifying data points that deviate significantly from the norm. These outliers might represent novel materials with unusual properties, errors in the data, or previously unobserved phenomena.