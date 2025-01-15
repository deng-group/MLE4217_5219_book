# Introduction to Materials Informatics

Materials informatics is an emerging field that combines materials science and engineering with data science, machine learning, and artificial intelligence techniques. Its primary goal is to use data-driven approaches to accelerate the discovery, development, and optimization of new materials by leveraging large datasets and advanced computational methods. 

## Data-Driven Applications
Data-driven applications are ubiquitous in today's world. Initially, they were employed to identify spam emails and recognize handwriting. Over time, their use has expanded to include voice and pattern recognition, as well as personalized recommendation systems in e-commerce and social media. More recently, data-driven approaches have been applied to autonomous self-driving vehicles, generative AI, and medical applications. These advancements demonstrate the versatility and transformative potential of data-driven methods across various domains.

```{figure} ../figures/data_driven.png
---
width: 100%
name: directive-fig
---
Some examples using data-driven applications.
```

## Bioinformatics

Prior the advent of materials informatics, in the field of molecular biology, bioinformatics has been actively developed since 2000, which is a hybrid science that links biological data with techniques for information storage, distribution, and analysis to support multiple areas of scientific research, including biomedicine. Bioinformatics uses high-throughput experimental data which involves DNA and protein sequencing, and gene expression patterns. Many databases were generated, including DNA sequences of gene or full genomes, amino acid sequences of proteins, and 3D complex structure of proteins, nucleic acids and protein–nucleic acid complexes.

```{admonition} Definition
:class: info
Bioinformatics applies “informatics techniques” (derived from disciplines such as applied maths, computer science and statistics) to understand and organise the information associated with these molecules, on a large scale. 
```


```{figure} ../figures/bioinformatics.png
---
width: 80%
name: directive-fig
---
Two examples of using bioinformatics: DNA sequencing and AlphaFold.
```
### Example: DNA Sequencing
DNA sequencing determines the order of the building blocks (bases) of DNA, which are paired as Adenine (A) with Thymine (T) and Cytosine (C) with Guanine (G). The human genome consists of approximately 3 billion base pairs. DNA sequencing began in the 1970s with manual methods, but now some laboratories can sequence up to 100,000 billion bases per year. This technology is crucial for detecting and treating diseases, such as selecting better treatment methods for cancer patients by analyzing sequence data and comparing healthy and mutated sequences to identify diseases. A significant milestone in this field was the Human Genome Project, initiated in the 1990s.

### Example: Protein Structure Prediction

Protein structure prediction has traditionally been a challenging and time-consuming task. Determining protein structures using methods like X-ray crystallography or Cryo-EM can take months or even years, depending on the quality of the protein crystal samples. This process is not only lengthy but also costly in terms of materials and manpower, and the resulting database of known protein structures is limited to around 100,000 entries. However, the advent of AlphaFold has revolutionized this field. AlphaFold can predict protein structures in a matter of minutes or hours on a GPU, depending on the length of the protein sequence, and it provides results at atomistic resolution. This breakthrough significantly accelerates research and opens up new possibilities in understanding and treating diseases.

## Big Wave in AI4Science

```{figure} ../figures/nobel_prize.png
---
width: 100%
name: directive-fig
---
Both Nobel prize in Physics and Chemistry are given to the development of AI-driven reserach.
```
The rise of AI for science has been marked by significant milestones, culminating in the awarding of the Nobel Prize in 2024 for AI-driven research in fields such as physics and chemistry. Notable contributions include the development of artificial neural networks by pioneers like Hopfield and Hinton, as well as groundbreaking advancements in protein structure prediction by researchers such as Baker, Hassabis, and Jumper. These achievements underscore the transformative impact of machine learning and artificial intelligence on scientific discovery and innovation, heralding a new era of accelerated research and development across various scientific disciplines.

## Materials Informatics
The study of materials informatics is crucial due to its potential to revolutionize the way we discover, develop, and optimize new materials. Combining the power of data science and advanced computational methods, this field holds the key to faster innovation, cost savings, and solutions to critical global challenges. As governments continue to invest in materials informatics research and development, it is clear that this interdisciplinary approach will play an increasingly important role in driving progress across various sectors of society.

```{admonition} Definition
:class: info
Materials informatics employs techniques, tools, and theories drawn from the emerging fields of data science, internet, computer science and engineering, and digital technologies to the materials science and engineering to accelerate materials, products and manufacturing innovations.
```
### Why Materials Informatics?
```{figure} ../figures/battery_history.png
---
width: 100%
name: directive-fig
---
It usually takes 10-20 years from initial research to real application, take Li-ion battery as an example.
```
Materials discovery is a complex, expensive, and time-consuming process, often taking 10-20 years from initial research to real-world application. For example, the development of the Li-ion battery, which earned Goodenough, Whittingham, and Yoshino the Nobel Prize in Chemistry in 2019, began with Whittingham's work on the first rechargeable Li-ion battery using $\ce{LiTiS2}$ in 1976. Goodenough's discovery of $\ce{LiCoO2}$ as a cathode material in the 1980s and Yoshino's use of graphite as an anode material in 1985 led to the modern rechargeable battery. It wasn't until 1991 that Sony and Asahi Kasei commercialized the first Li-ion battery. Despite General Motors introducing the first electric vehicle in 1966, it took decades for electric vehicles to become widespread, with companies like Tesla and BYD leading the charge in recent years. This lengthy timeline underscores the need for materials informatics to accelerate the development of high-performance materials, reducing costs and speeding up innovation.

### Where are we?
```{figure} ../figures/wherearewe.png
---
width: 100%
name: directive-fig
---
The location of Materials Informatics.
```
When studying the introduction to materials science, you will encounter the materials tetrahedron, which consists of structure, property, performance, process & synthesis, with characterization and modeling at the center. Materials informatics falls under the modeling category. 

In the Venn diagram, materials informatics is at the intersection of materials science (our domain knowledge), mathematics & statistics (e.g., linear algebra, statistics, numerical methods), and computer science (programming, algorithms, computation). This field overlaps with traditional research, computational materials science, and machine learning, but it emphasizes data-driven methods like machine learning and statistics, leveraging large databases.

## Examples
```{figure} ../figures/MGI.png
---
width: 50%
name: directive-fig
---
The overview of Materials Genome Initiative.
```
### Materials Genome Initiative and Other Efforts
Similar to the Human Genome Project, the [Materials Genome Initiative](https://www.mgi.gov/) was launched to meet critical needs in human welfare, clean energy, workforce development, and national security. This federal multi-agency initiative aims to discover, manufacture, and deploy advanced materials twice as fast and at a fraction of the cost of traditional methods. The MGI periodically releases strategic plans to guide materials informatics research in the USA.

The table below highlights various examples and efforts in materials informatics globally. Many of these resources are publicly available and can be freely used for materials selection and development. One of the most widely used computational databases is the Materials Project (MP), developed by Lawrence Berkeley National Laboratory, which will be utilized in this course.

```{figure} ../figures/a-lab.png
---
width: 80%
name: directive-fig
---
Berkeley A-lab: Robots operate instruments and artificial intelligence makes decisions to find useful new materials at the A-Lab.
```

Current state-of-the-art research in materials informatics includes [Berkeley A-Lab](https://www.nature.com/articles/s41586-023-06734-w), a self-driving laboratory that integrates automation and robotics for materials synthesis. Guided by machine learning predictions, this system not only accelerates the discovery process but also incorporates experimental data into a reinforcement learning framework, enabling continuous optimization. Another notable development is [GNoME from Google DeepMind](https://github.com/google-deepmind/materials_discovery), which has reportedly identified over 400,000 new materials using advanced machine learning models. This far surpasses the approximately 20,000 materials discovered through human experimentation and the 48,000 materials identified via traditional computational methods, highlighting the transformative potential of AI-driven approaches in expanding the frontiers of materials discovery.






