# Graph

We have already briefly introduced the concept of graphs in the context of [Atomistic Structure](../atomistic_structure_II/molecule.md#graphs). In this section, we will delve deeper into the mathematical representation of graphs and their significance in materials science.

## What is a Graph?

A graph is a mathematical structure consisting of nodes (or vertices) and edges (or links) that connect pairs of nodes. Graphs can be directed or undirected, weighted or unweighted, and can represent various types of relationships between entities.

A graph $G$ is mathematically defined as a pair $(V, E)$, where:
- $V$ is a set of vertices or nodes, representing the objects or entities.
- $E$ is a set of edges, representing the connections or relationships between pairs of nodes. An edge $e = (u, v)$ connects node $u$ to node $v$.
- $U$ is the global feature vector, which can represent properties of the entire graph.

````{sidebar}
```{figure} ../figures/graph.png
---
width: 60%
---
Diagram of a graph with nodes and edges. Directed edges are shown with arrows, while undirected edges are shown without arrows. The graph also includes node features (e.g., element type) and edge features (e.g., bond type).
```
````


## Characteristics

- Directed vs. Undirected: In an undirected graph, edges represent symmetric relationships; if node $u$ is connected to node $v$, then $v$ is also connected to $u$. The edge $(u, v)$ is the same as $(v, u)$. This is common for representing atomic bonds or proximity where the relationship is inherently mutual. In a directed graph, edges have a direction, so $(u, v)$ is distinct from $(v, u)$, representing asymmetric relationships (e.g., information flow, prerequisite dependencies).

- Weighted vs. Unweighted: In an unweighted graph, edges simply indicate the presence or absence of a connection. In a weighted graph, each edge $e$ has an associated numerical weight $w_e$, representing the strength, cost, or distance of the connection (e.g., the bond length or inverse distance between atoms).

## Adjacency Matrix

While various data structures exist for storing graphs (like adjacency lists or incidence matrices), a common and conceptually important representation is the **adjacency matrix**. For a graph with $N = |\mathcal{V}|$ nodes, the adjacency matrix $A$ is an $N \times N$ square matrix where the entry $A_{ij}$ indicates the connection between node $i$ and node $j$.
*   For an **unweighted graph**, $A_{ij} = 1$ if an edge exists between node $i$ and node $j$, and $A_{ij} = 0$ otherwise.
*   For a **weighted graph**, $A_{ij} = w_{ij}$, the weight of the edge between $i$ and $j$, if an edge exists, and $A_{ij} = 0$ (or sometimes $\infty$ for distance-based graphs) if no direct edge exists.

For an undirected graph, the adjacency matrix is symmetric ($A_{ij} = A_{ji}$). For a directed graph, it may not be.
````{sidebar}
```{figure} ../figures/adjacency_matrix.png
---
width: 60%
--- 
Example of an adjacency matrix for a simple undirected graph. The matrix is symmetric, indicating that the graph is undirected. The diagonal elements are zero, indicating no self-loops.
```
````

**Example:** Consider a simple undirected, unweighted graph with 4 nodes {1, 2, 3, 4} and edges {(1, 2), (1, 3), (2, 3), (3, 4)}. Its adjacency matrix $A$ would be:

$$ A = \begin{pmatrix} 0 & 1 & 1 & 0 \\ 1 & 0 & 1 & 0 \\ 1 & 1 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{pmatrix} $$

Here, $A_{12} = 1$ because there's an edge between node 1 and node 2, while $A_{14} = 0$ because there's no direct edge between node 1 and node 4.

## Features
Features are essential components of graphs, providing additional information about nodes and edges.

- Node Features: Each node $v \in \mathcal{V}$ can have an associated feature vector $h_v$, describing the properties of that node (e.g., element type, atomic coordinates).

- Edge Features: Each edge $e \in \mathcal{E}$ can have an associated feature vector $e_{uv}$, describing the properties of the connection itself (e.g., bond type, distance).

- Global Features: In some cases, graphs may also have global features that describe properties of the entire graph (e.g., total energy, symmetry).

## Examples of Graphs

````{sidebar}
```{figure} ../figures/graphs_example.png
---
width: 100%
--- 
We can represent social network as a graph, where nodes represent users and edges represent connections (friendships, follows, etc.). The graph captures the relationships and interactions between users. We can also represent an image as a graph by segmenting it into regions or pixels, where nodes represent segments and edges represent spatial relationships. This allows us to analyze the image structure and relationships between different regions.
```
````

Graphs are ubiquitous in various fields, including computer science, social networks, biology, and materials science. Here are some examples of graphs:

- **Social Networks:** Perhaps the most intuitive example. Nodes represent individuals or entities (users, organizations), and edges represent relationships like friendship, followership, professional connections, or interactions (likes, comments). Node features might include user profiles, while edge features could represent the type or timestamp of an interaction. Analyzing these graphs helps understand community structure, influence propagation, and information dissemination.
- **Images:** While seemingly grid-like, images can be treated as graphs, especially for tasks like segmentation or scene understanding. Pixels or segmented regions (superpixels) can be nodes. Edges can connect adjacent pixels or regions, perhaps weighted by similarity in color or texture. This allows models to consider spatial relationships beyond simple convolution windows.
- **Text and Natural Language Processing:** Text can be represented as a graph where nodes are words, sentences, or documents. Edges can represent various relationships like co-occurrence, syntactic dependency (e.g., from parsing a sentence), semantic similarity, or citation links between documents. This graph structure helps capture context and relationships that linear sequence models might miss.
- **Biological Networks:** Graphs model interactions between biological entities. Nodes can be genes, proteins, or metabolites, and edges represent regulatory interactions, protein-protein interactions, or metabolic pathways.
- **Knowledge Graphs:** Nodes represent entities (people, places, concepts), and labeled edges represent the relationships between them (e.g., "Albert Einstein" -[born in]-> "Ulm"). These are widely used in search engines and question answering systems.


### Molecular Graphs

````{sidebar}
```{figure} ../figures/molecule_graphs.png
---
width: 60%
--- 
Molecule graph representation of caffeine. The atoms are represented as nodes, and the bonds between them are represented as edges. The graph captures the connectivity and structure of the molecule.
```
````

The graph representation is exceptionally well-suited for materials. We can naturally model a material structure (like a molecule or a crystal) as a graph where:

- Nodes ($V$) are atoms. Node features ($h_v$) can include the element type (e.g., represented as a one-hot vector or an embedding), atomic coordinates, partial charges, magnetic moments, etc.

- Edges ($E$) represent chemical bonds or proximity. Often, an edge is defined between two atoms if the distance between them is less than a predefined cutoff radius. These are typically undirected. Edge features ($e_{uv}$) can include the scalar distance between atoms $u$ and $v$, or perhaps a vectorial representation of their separation, or features derived from bond angles involving neighboring atoms.
- Global features ($U$) can represent properties of the entire structure, such as total energy, symmetry information, or other macroscopic properties.