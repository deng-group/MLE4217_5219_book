# Training and Validation of MLPs

## Dataset
- Need diverse, high-quality DFT data
- Energies, forces, (optional) virials
- Good coverage: configurations, volumes, chemistries



## Training

Training a machine learning potential (MLP) involves fitting the model to a dataset of atomic configurations and their corresponding energies, forces, and stresses. The training process typically involves the following steps:

The loss function is defined as the difference between the predicted and true energies, forces, and stresses. The loss function is typically a combination of the mean squared error (MSE) for energies, forces, and stresses.

$$
L = \frac{1}{N} \sum_{i=1}^{N} \left( E_i - \hat{E}_i \right)^2 + \frac{1}{N} \sum_{i=1}^{N} \left( F_i - \hat{F}_i \right)^2 + \frac{1}{N} \sum_{i=1}^{N} \left( S_i - \hat{S}_i \right)^2
$$

where $N$ is the number of atomic configurations, $E_i$ is the true energy, $\hat{E}_i$ is the predicted energy, $F_i$ is the true force, $\hat{F}_i$ is the predicted force, $S_i$ is the true stress, and $\hat{S}_i$ is the predicted stress.

## Evaluation
- MAE, RMSE of energy (meV/atom), force (eV/Å)
- Stability in MD (temperature drift, energy conservation)
- Transferability: new structures, new chemistry


## UMLPs Benchmark
[Matbench Discovery](https://matbench-discovery.materialsproject.org/) is a benchmark for evaluating the performance of MLPs. It consists of a set of tasks that cover a wide range of materials properties, including formation energy, band gap, and elastic modulus. The benchmark is designed to test the transferability and accuracy of MLPs across different systems and chemical environments.