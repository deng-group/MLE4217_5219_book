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
Structure can also be generated randomly by placing atoms at random positions in the unit cell. This can be used to explore the properties of materials that do not have a known crystal structure.

## Fireworks

## Atomate

## Custodian

## AiiDA