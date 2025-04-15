# Implicit and Unified Features
One of the methods to overcoming the scaling problem is to use implicit features. Implicit features are not explicitly defined but are learned from the data. Learned implicit features (called "embeddings") can scale with number of different chemical species much more efficiently compared to explicit features. However, ML process involving implicit features are usually slower since the model is usually more complex.

````{sidebar}
```{figure} ../figures/mlp_logos.png
NequIP, MACE, and DeepMD logos
```
````

## Embeddings
- Graph Neural Networks (GNNs): GNNs are a natural choice for MLPs because they can naturally represent the local atomic environment as a graph. Examples includes: [NequIP](https://doi.org/10.1038/s41467-022-29939-5), and [MACE](https://doi.org/10.48550/arXiv.2206.07697).
- Deep Neural Networks (DNNs): DNN can be used to construct local environment as embedding vectors based on atomic distances, angles, and types. The weights of the DNN can be trained during fitting. An example is [DeepMD](https://doi.org/10.1103/PhysRevLett.120.143001)

## Unified Features
You can also combine explicit and implicit features to get the best of both worlds. The idea is to use explicit features to capture the local atomic environment and then use a GNN or DNN to learn the potential energy surface from the explicit features. This approach can improve the accuracy and efficiency of MLPs. Examples includes: [SchNet](https://doi.org/10.48550/arXiv.1706.08566), [PhysNet](https://doi.org/10.1021/acs.jctc.9b00181), [GemNet](https://doi.org/10.48550/arXiv.2106.08903), [NequIP](https://doi.org/10.1038/s41467-022-29939-5), and [MACE](https://doi.org/10.48550/arXiv.2206.07697).
