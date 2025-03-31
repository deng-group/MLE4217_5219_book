# Data

Data is the raw material from which ML models derive knowledge. In the context of materials science, relevant data encompasses a wide spectrum:

*   **Compositional Data:** The constituent elements and their stoichiometry (e.g., chemical formulas like SrTiO$_3$).
*   **Structural Data:** Detailed information about the arrangement of atoms, including crystal lattice parameters, space group symmetry, atomic coordinates (often stored in formats like CIF or POSCAR), and descriptions of defects or interfaces.
*   **Processing Data:** Parameters related to material synthesis or treatment, such as temperature profiles, pressure conditions, deposition rates, or annealing times.
*   **Material Properties:** Target attributes we wish to predict or understand. These can be derived from:
    *   **Experiments:** Measured values like yield strength, electrical conductivity, optical absorption spectra, catalytic reaction rates, etc.
    *   **Simulations:** Computed quantities like DFT formation energies, forces on atoms, band gaps, elastic tensors, dielectric constants, vibrational frequencies, etc.

The utility of an ML model is inextricably linked to the **quality, quantity, and diversity** of the training data. A model trained solely on data for binary metal alloys, for instance, cannot be expected to accurately predict the properties of complex organic molecules. Ensuring the dataset adequately covers the relevant materials space is critical for building models that generalize well to new, unseen examples. Data curation, cleaning (handling missing or erroneous entries), and validation are thus indispensable preliminary steps.
