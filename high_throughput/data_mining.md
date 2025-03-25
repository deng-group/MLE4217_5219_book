# Data Mining
In our previous lectures, we have extensively used packages like pymatgen and ASE for data analysis. We can use these tools to extract and analyze data from simulations, databases, and experimental measurements. The data we extracted can be further analyzed using machine learning algorithms to predict materials properties or discover new materials.

## Descriptors
````{sidebar}
```{figure} ../figures/descriptors.png
Example of Coulombic matrix descriptor for methanol molecule. Genearated using [DScribe](https://singroup.github.io/dscribe/latest/tutorials/descriptors/coulomb_matrix.html#coulomb-matrix).
```
````
Descriptors are numerical representations of materials properties that can be used to quantify and compare different materials. They can be simple properties (e.g., composition, electronegativity, atomic radius, number of valence electrons) or more complex quantities derived from the calculated data (e.g., formation energy, band gap, bulk modulus). An example of a descriptor is the SMILES representation of a molecule, which is a string of characters that encodes the molecular structure.

There are some packages that are useful for feature generation such as:

- [**Matminer**](https://hackingmaterials.github.io/matminer/): A Python library for data mining in materials science, providing tools for retrieving, processing, and analyzing materials data.

- [**DScribe**](https://singroup.github.io/dscribe/): A Python library for feature generation in materials science, providing tools for generating descriptors from atomic structures.

## Machine Learning
Machine learning (ML) is playing an increasingly important role in materials science, particularly in the analysis of high-throughput data. ML algorithms can be trained on the calculated data to build predictive models that can:

- Predict Materials Properties: Estimate properties (e.g., band gap, formation energy, mechanical properties) without performing explicit calculations.

- Identify Promising Materials: Suggest new materials with desired properties based on the learned relationships between descriptors and properties.

- Accelerate Materials Discovery: Significantly reduce the computational cost of exploring the materials space by guiding the search towards the most promising regions.

We will introduce more about ML in the rest of this course.

## Visualization
Finally, we can visualize the results using various tools. For crystal structures, we have introduced packages like [Vesta](https://jp-minerals.org/vesta/en/). If you are showing crystal structure on a web interface, you can use [JSmol](http://jmol.sourceforge.net/).

For presentation and visualization of data, we can use packages like Matplotlib, Plotly and Bokeh. Plotly and Bokeh are more sutiable for interactive plots and dashboards for web applications. 

If you want to build something like the Materials Project, you need to build a web interface. A web application nowadays can be easily built using [Flask](https://flask.palletsprojects.com/en/stable/) or [Dash](https://dash.plotly.com/). Then the web can be hosted on cloud services like [AWS](https://aws.amazon.com/), or even on your own server.