# Challenges
Machine Learning Potentials (MLPs) have revolutionized computational modeling by providing efficient ways to predict atomic interactions. However, like any tool, they come with their own set of challenges. Let’s explore two key limitations and why they matter in real-world applications.

### Understanding Long-Range Interactions

One major challenge with MLPs is their difficulty in capturing long-range interactions. These are interactions between atoms or molecules that are far apart, typically beyond 5-10 Å (angstroms). 

Why does this matter? In many scientific problems, such as protein folding or drug design, long-range interactions are critical. For example, in protein folding, the way distant parts of a protein chain attract or repel each other determines its final shape, which in turn affects its function. Since MLPs are usually trained on short-range features, they struggle to predict these long-distance effects accurately.

To address this, researchers are exploring hybrid models that combine MLPs with physics-based methods or explicitly include long-range terms in the training data. However, these approaches are still under development and can add computational complexity.

### Beyond the Born-Oppenheimer Surface

Another limitation arises from the assumption that the potential energy of a system depends only on the positions of its atoms. This is known as working "on the Born-Oppenheimer surface." While this assumption simplifies calculations, it overlooks phenomena that depend on the electronic structure of the system. For instance:

- Magnetism: The magnetic properties of materials depend on the spin and arrangement of electrons, not just atomic positions.
- Excited States: When a system absorbs energy (e.g., light), its electrons move to higher energy levels, which cannot be captured by MLPs trained on ground-state data.

These limitations are particularly problematic in fields like catalysis and materials design, where understanding electronic behavior is crucial for predicting reactivity or designing new materials.

To overcome this, advanced methods like quantum machine learning or multi-scale modeling are being developed. These approaches aim to incorporate electronic effects while maintaining computational efficiency.

