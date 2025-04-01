# Features and Descriptors
Raw materials data, such as a list of atomic species and their coordinates, is often not directly ingestible by standard ML algorithms, which typically require fixed-size numerical input vectors. The process of transforming raw data into a suitable numerical format is known as **feature engineering** or **descriptor generation**. The resulting numerical representations are called **features** or **descriptors**.

```{figure} ../figures/descriptor.png
---
width: 100%
---
In machine learning, structures are represented as vectors of features or descriptors. The process of transforming raw data into a suitable numerical format is known as feature engineering or descriptor generation. The resulting numerical representations are called features or descriptors. Then these features are used as input to machine learning algorithms to predict material properties or behaviors. 
```

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

## Codes
- [Matminer](https://matminer.org/): A Python library for materials data mining and machine learning. It provides a wide range of features and descriptors for various materials systems, including crystal structures, electronic properties, and thermodynamic properties.
- [Dscribe](https://singroup.github.io/dscribe/latest/index.html#): Dscribe is a Python library for generating atomic-scale descriptors for machine learning. It provides a variety of local and global descriptors, including SOAP, ACSF, and many others. Dscribe is designed to be easy to use and integrate with existing machine learning frameworks.
- [Magpie](https://bitbucket.org/wolverton/magpie/src/master/): Magpie is a Python library for materials property prediction and data mining. It provides a set of features and descriptors for various materials systems, including crystal structures, electronic properties, and thermodynamic properties. Magpie is designed to be easy to use and integrate with existing machine learning frameworks.
- [AMP](https://amp.readthedocs.io/en/latest/index.html): AMP (Atomic Machine Learning Package) is a Python library for atomic-scale machine learning. It provides a set of features and descriptors for various materials systems, including crystal structures, electronic properties, and thermodynamic properties. AMP is designed to be easy to use and integrate with existing machine learning frameworks.
- [QMLMaterial](https://pubs.acs.org/doi/abs/10.1021/acs.jctc.3c00566):  Qquantum machine learning software/agent for materials design and discovery (QMLMaterial), intended for automatic structural determination in silico for several chemical systems: atomic clusters, atomic clusters and the spin multiplicity together, doping in clusters or solids, vacancies in clusters or solids, adsorption of molecules or adsorbents on surfaces, and finally atomic clusters on solid surfaces/materials or encapsulated in porous materials.