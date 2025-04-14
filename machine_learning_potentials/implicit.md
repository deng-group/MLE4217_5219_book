# Implicit Features
One of the methods to overcoming the scaling problem is to use implicit features. Implicit features are not explicitly defined but are learned from the data. Learned implicit features (called "embeddings") can scale with number of different chemical species much more efficiently compared to explicit features. However, ML process involving implicit features are usually slower since the model is usually more complex.

## Embeddings
- Graph Neural Networks (GNNs): GNNs are a natural choice for MLPs because they can naturally represent the local atomic environment as a graph.
- Deep Neural Networks (DNNs): DNN can be used to construct local environment as embedding vectors based on atomic distances, angles, and types. The weights of the DNN can be trained during fitting.

## Examples
- [DeepMD](https://doi.org/10.1103/PhysRevLett.120.143001): DeepMD is a deep learning framework for MLPs that uses a DNN to learn the potential energy surface from a set of reference data. 
- [MACE](https://doi.org/10.1038/s41524-019-0221-6): MACE is a MLP that uses a GNN to learn the potential energy surface from a set of reference data.