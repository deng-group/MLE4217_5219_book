# Data

Data is the raw material from which ML models derive knowledge. In the context of materials science, relevant data encompasses a wide spectrum:

*   **Compositional Data:** The constituent elements and their stoichiometry (e.g., chemical formulas like SrTiO$_3$).
*   **Structural Data:** Detailed information about the arrangement of atoms, including crystal lattice parameters, space group symmetry, atomic coordinates (often stored in formats like CIF or POSCAR), and descriptions of defects or interfaces.
*   **Processing Data:** Parameters related to material synthesis or treatment, such as temperature profiles, pressure conditions, deposition rates, or annealing times.
*   **Material Properties:** Target attributes we wish to predict or understand. These can be derived from:
    *   **Experiments:** Measured values like yield strength, electrical conductivity, optical absorption spectra, catalytic reaction rates, etc.
    *   **Simulations:** Computed quantities like DFT formation energies, forces on atoms, band gaps, elastic tensors, dielectric constants, vibrational frequencies, etc.

The utility of an ML model is inextricably linked to the **quality, quantity, and diversity** of the training data. A model trained solely on data for binary metal alloys, for instance, cannot be expected to accurately predict the properties of complex organic molecules. Ensuring the dataset adequately covers the relevant materials space is critical for building models that generalize well to new, unseen examples. Data curation, cleaning (handling missing or erroneous entries), and validation are thus indispensable preliminary steps.

## Features and Descriptors
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