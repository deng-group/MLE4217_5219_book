# Workflow
High-throughput simulation involves a systematic and automated workflow, typically comprising the following stages:

1. Structure Generation: A large and diverse set of candidate crystal structures is created. This is the starting point for our computational exploration.

2. Property Calculation: The properties of interest (e.g., energy, electronic structure, mechanical properties) are calculated for each generated structure using appropriate computational methods, such as density functional theory (DFT) or force field simulations.

3. Data Analysis and Screening: The calculated data is analyzed to identify structures that meet specific criteria (e.g., stability, desired band gap, high bulk modulus). This step often involves visualizing data and applying selection rules.

4. Iteration and Refinement: The results of the screening process can be used to guide further structure generation or to refine the computational parameters. This iterative feedback loop allows for a more focused and efficient exploration of the materials space.

## Structure Generation
The foundation of any high-throughput study is the generation of a representative set of candidate structures. Several strategies are employed, often in combination:

### Elemental Substitution
Using established crystal structure prototypes (e.g. perovskites, spinels, rock salt) as starting points. These prototypes provide a structural template. By systematically substituting different elements into the crystallographic sites (A, B, and sometimes the anion site), a large number of derivative structures can be generated. Databases such as the Inorganic Crystal Structure Database (ICSD) serve as valuable resources for identifying known prototypes and their structural parameters.

Once a prototype structure is chosen, elemental substitution is a powerful technique to explore compositional variations. For instance, starting with the perovskite $\ce{SrTiO3}$, one could systematically replace Sr with other alkaline earth metals (Ca, Ba, Mg) to generate $\ce{CaTiO3}$, $\ce{BaTiO3}$, and $\ce{MgTiO3}$. Similarly, Ti could be replaced with other transition metals (Zr, Hf, etc.). This can be done on multiple sites simultaneously, leading to compounds like $\ce{SrTi0.5Zr0.5O3}$.

Another example is considering the search for new transparent conducting oxides (TCOs). Starting with the known TCO $\ce{In2O3}$ (which adopts a bixbyite structure), researchers might substitute In with other elements like Ga, Al, or Sn, systematically exploring the $\ce{(In, Ga, Al, Sn)2O3}$ compositional space.

### Random Structure Generation
In contrast to methods that rely on known prototypes or systematic substitutions, random structure generation aims to explore the structural space in a more unbiased way. This approach is particularly useful when little is known about the likely structure of a material, or when searching for entirely new structural motifs.

The basic idea is simple:

1. Define a Unit Cell: Specify the size and shape of the unit cell (which may be variable).

2. Randomly Place Atoms: Place atoms of the desired elements within the unit cell at random positions.

3. Constraints (Optional): Impose constraints to ensure the generated structures are physically reasonable (e.g., avoiding atomic overlaps, maintaining charge neutrality).

Random structure generation can be implemented using various algorithms and software packages. It often requires a large number of generated structures to adequately sample the relevant regions of the structural space. This is often combined with a structural relaxation step (using DFT or a force field) to bring the randomly generated structures to a local energy minimum. The example code is the AIRSS (Ab Initio Random Structure Searching) method is a widely used approach that combines random structure generation with DFT calculations to explore the potential energy landscape of materials.


## Constraints and Considerations
Regardless of the chosen structure generation method, it is crucial to generate physically reasonable structures. This involves:

- Avoiding Atomic Overlaps: Generated structures should not have unrealistically short interatomic distances, which would lead to extremely high energies and unphysical configurations.

- Charge Neutrality: For ionic compounds, the overall charge of the unit cell should be zero. This requires careful consideration of the formal charges of the constituent ions.

- Chemical Intuition: Prior knowledge about chemical bonding and stability can be used to guide the structure generation process. For example, certain element combinations are known to be immiscible or to form specific types of compounds.

- Coordination Preferences: Certain elements tend to favor specific coordination environments. For instance, oxygen often prefers tetrahedral or octahedral coordination with metal cations. Enforcing these preferences can improve the likelihood of generating stable structures.

- Targeted Property Constraints: More sophisticated constraints can be used to target materials with specific properties. For example, one might enforce a specific band gap range or a desired magnetic ordering.

- Thermodynamic Stability: Generated structures should be thermodynamically stable under the relevant conditions (e.g., temperature, pressure). This can be assessed using phase stability diagrams or other thermodynamic models.





