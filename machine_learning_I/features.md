# Features and Descriptors
Raw materials data, such as a list of atomic species and their coordinates, is often not directly ingestible by standard ML algorithms, which typically require fixed-size numerical input vectors. The process of transforming raw data into a suitable numerical format is known as **feature engineering** or **descriptor generation**. The resulting numerical representations are called **features** or **descriptors**.

## General Requirements for Descriptor/Feature Vector in ML Tasks
The design of effective features is a cornerstone of materials informatics. Good features should ideally:

- Fixed Dimensionality: Input vectors usually should have a fixed size, regardless of the material system's complexity, to be compatible with most ML algorithms. However, some algorithms can handle variable-length inputs: e.g. Graph Neural Networks (GNNs) can process variable-length graphs, and Recurrent Neural Networks (RNNs) can handle sequences of varying lengths.
- Numerical Representation: Features should be numerical to ensure compatibility with standard ML models.
- Robustness: Features need to be resilient to noise or minor variations in the input data.
- Physical and Chemical Relevance: Features should encapsulate the essential physics or chemistry related to the target property.
- Computational Efficiency: Features should be computable efficiently from raw data, and should handle large datasets efficiently
- Physical Invariances: Features should respect fundamental physical invariances, such as invariance to translation, rotation, or permutation of identical atoms in the input.

The choice of features is crucial, as it can significantly impact the performance of ML models. The design of effective features is an active area of research in materials informatics.

## Composition Descriptors
Average atomic number, variance of covalent radii, mean electronegativity, range of oxidation states.

## Structural Descriptors

### Global Structure Descriptors
Crystal system, space group, calculated density, packing fraction.

### Local Structure Descriptors
Parameters derived from the local atomic environment around each atom, such as coordination numbers, bond lengths, bond angles, or more sophisticated functions characterizing the neighbor distribution (e.g., radial distribution function moments, symmetry functions, SOAP - discuss later).

## Feature Engineering
Feature engineering is the process of selecting, modifying, or creating features to improve model performance. It involves:
