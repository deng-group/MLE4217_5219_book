# Features


Raw materials data, such as a list of atomic species and their coordinates, is often not directly ingestible by standard ML algorithms, which typically require fixed-size numerical input vectors. The process of transforming raw data into a suitable numerical format is known as **feature engineering** or **descriptor generation**. The resulting numerical representations are called **features** or **descriptors**.

The design of effective features is a cornerstone of materials informatics. Good features should ideally:
*   Capture the essential physics or chemistry relevant to the target property.
*   Be efficiently computable from the raw data.
*   Satisfy fundamental physical invariances: for example, predicted properties should typically be invariant to translation or rotation of the material system, and invariant to the permutation of identical atoms' labels in the input list.

Examples of features range from simple to complex:
*   **Composition-based:** Average atomic number, variance of covalent radii, mean electronegativity, range of oxidation states.
*   **Structure-based (global):** Crystal system, space group, calculated density, packing fraction.
*   **Structure-based (local):** Parameters derived from the local atomic environment around each atom, such as coordination numbers, bond lengths, bond angles, or more sophisticated functions characterizing the neighbor distribution (e.g., radial distribution function moments, symmetry functions, SOAP descriptors – discussed later).

Often, a material is represented by concatenating various relevant features into a single vector, $\mathbf{x}$. The choice of features significantly impacts model performance, and developing optimal materials descriptors remains an active area of research.

## Feature Engineering
Feature engineering is the process of selecting, modifying, or creating features to improve model performance. It involves: