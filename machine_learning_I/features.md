# Features and Descriptors
Raw materials data, such as a list of atomic species and their coordinates, is often not directly ingestible by standard ML algorithms, which typically require fixed-size numerical input vectors. The process of transforming raw data into a suitable numerical format is known as **feature engineering** or **descriptor generation**. The resulting numerical representations are called **features** or **descriptors**.

## General Requirements for Descriptor/Feature Vector in ML Tasks
The design of effective features is a cornerstone of materials informatics. Good features should ideally:

- Numerical Representation: Features should be numerical to ensure compatibility with standard ML models.
- Fixed Dimensionality: Input vectors usually should have a fixed size, regardless of the material system's complexity, to be compatible with most ML algorithms. However, some algorithms can handle variable-length inputs: e.g. Graph Neural Networks (GNNs) can process variable-length graphs, and Recurrent Neural Networks (RNNs) can handle sequences of varying lengths.
- Physical Invariances: Features should respect fundamental physical invariances or to be equivariant (symmetry), such as invariance to translation, rotation, or permutation of atomic indices in the input.
- Uniqueness: Features should be unique to the material system and not be trivially derived from other features.
- Continuous: Features should be continuous and differentiable to allow for gradient-based optimization methods.
- Robustness: Features need to be resilient to noise or minor variations in the input data.
- Compact: Features should encapsulate the essential physics or chemistry related to the target property. The descriptor should be compact enough to represent the material system without excessive redundancy.
- Computational Efficiency: Features should be computable efficiently from raw data, and should handle large datasets efficiently. 

The choice of features is crucial, as it can significantly impact the performance of ML models. The design of effective features is an active area of research in materials informatics.


## Global Descriptors
Global descriptors encode the properties related to the whole structure: crystal system, space group, density, energy, formation energy, band gap, etc. These descriptors are often derived from the entire crystal structure and can be used to characterize the material as a whole.

## Local Descriptors
Local descriptors described the local environment around each atom in the structure. They are often derived from the local atomic environment and can capture information about the bonding and coordination of atoms. Examples include atomic forces, adsorption energies.

Parameters derived from the local atomic environment around each atom, such as coordination numbers, bond lengths, bond angles, or more sophisticated functions characterizing the neighbor distribution (e.g., radial distribution function moments, symmetry functions, SOAP - discuss later).
