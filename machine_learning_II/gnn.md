# Graph Neural Networks

```{admonition} Introduction to GNNs
:class: tips
There is a very good GNN introduction paper available at [A Gentle Introduction to Graph Neural Networks](https://doi.org/10.23915/distill.00033). It is a great resource for understanding the fundamentals of GNNs and their applications.
```

Graph Neural Networks (GNNs) are a class of neural networks designed specifically to operate on graph-structured data, such as the atomic graphs we just described. Their core operational principle is typically message passing.

## ML Tasks
We can do supervised or unsupervised learning with GNNs. In supervised learning, we have a dataset of graphs with known labels (e.g., total energy, band gap) and we want to learn a mapping from the graph structure and features to these labels. In unsupervised learning, we might want to learn useful representations of the graphs without explicit labels, which can be useful for tasks like clustering or anomaly detection.

There are several types of tasks that GNNs can be applied to, depending on the level of granularity at which we want to make predictions:
- Node-level tasks: Predicting properties of individual nodes (e.g., predicting the type of atom based on its local environment).
- Edge-level tasks: Predicting properties of edges (e.g., predicting bond types or distances).
- Graph-level tasks: Predicting properties of the entire graph (e.g., predicting the total energy of a molecule or the band gap of a crystal).

## Message Passing
Message passing is a mechanism by which nodes in a graph can exchange information with their neighbors. This process allows GNNs to learn representations of nodes based on their local connectivity and features, effectively capturing the graph's structure and the relationships between its components.

Imagine the atoms within a structure "communicating" with their local environment. In a GNN, this communication occurs iteratively over several layers.  Let $h_i^{(k)}$ denote the feature vector (or embedding) of node $i$ at layer $k$. The process can be conceptually represented as:

### Message Calculation (Optional but common)
Transform neighbor features $h_j^{(k-1)}$ potentially considering edge features $e_{ij}$. The message from node $j$ to node $i$ at layer $k$ is computed as:

$$m_{ij}^{(k)} = \text{MESSAGE}^{(k)} \left( h_j^{(k-1)}, e_{ij} \right)$$

where $m_{ij}^{(k)}$ is the message from node $j$ to node $i$ at layer $k$. The message function can be a simple linear transformation, a neural network, or any other differentiable function that combines the node features and edge features.
This step is optional, as some GNN architectures directly aggregate the node features without explicitly calculating messages.

### Aggregation

It collects information, or "messages," from its neighboring nodes (those directly connected by an edge). These messages are typically based on the neighbors' current feature representations. Common aggregation functions include summation, averaging, or taking the maximum of the incoming message vectors. This step ensures that the node gathers information about its local chemical environment.

$$a_i^{(k)} = \text{AGGREGATE}^{(k)} \left( \{ m_{ij}^{(k)} \mid j \in \mathcal{N}(i) \} \right)$$ 

where $\mathcal{N}(i)$ is the set of neighbors of node $i$, and $m_{ij}^{(k)}$ represents the message from $j$ to $i$ at layer $k$.

### Update

It updates its own feature vector based on its previously gathered aggregated message and its own feature vector from the previous layer. This update step usually involves a learnable function, often a small neural network, allowing the model to adaptively decide how to integrate the neighborhood information.

$$h_i^{(k)} = \text{UPDATE}^{(k)} \left( h_i^{(k-1)}, a_i^{(k)} \right)$$

Here, `AGGREGATE` and `UPDATE` are differentiable functions (often implemented using neural network layers) whose parameters are learned during training. The repeated application of these steps over several layers allows information to propagate across the graph, enabling nodes to incorporate information from beyond their immediate neighbors.

Crucially, because aggregation functions like sum or mean are independent of the order of their inputs, the message passing framework is inherently permutation equivariant at the node level (permuting input nodes permutes the output node embeddings correspondingly) and can be made permutation invariant at the graph level (the overall graph property prediction remains unchanged upon node permutation). This aligns perfectly with the physical requirement that material properties are independent of atom indexing.

## Graph-Level Readout
After several iterations of message passing, we obtain a set of node embeddings $h_i^{(K)}$ for each node $i$. To make predictions about the entire graph (e.g., predicting the total energy or band gap), we need to aggregate these node embeddings into a single graph-level representation. This is often done using a readout function, which can be as simple as summing or averaging the node features:
$$h_G = \text{READOUT} \left( \{ h_i^{(K)} \mid i \in V \} \right)$$
where $h_G$ is the graph-level representation. This representation can then be fed into a final prediction layer (e.g., a fully connected layer) to produce the desired output.

## Training
The training of GNNs typically involves minimizing a loss function that measures the difference between the predicted graph-level properties and the true properties from the training data. This is often done using standard backpropagation techniques, where gradients are computed with respect to the model parameters and updated using an optimization algorithm (e.g., Adam, SGD).

##  Strengths and Limitations

- Strengths:
    - Directly utilizes atomic structure and connectivity information.
    - Inherently handles permutation invariance requirements.
    - Effectively captures local chemical environments.
    - Adaptable to various graph structures and property prediction tasks.

- Limitations:
    - Standard message passing can struggle to efficiently capture very long-range interactions within the material (requiring many layers).
    - Performance can be sensitive to the choice of graph construction (definition of edges/neighbors).
    - Can be computationally more intensive to train and evaluate than simpler descriptor-based models.
    - Interpretability – understanding *why* a GNN makes a specific prediction – remains an active area of research.