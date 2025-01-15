# High-Performance Computing
Let's dive into High Performance Computing (HPC) clusters and how they differ from your everyday PC:

**Regular PC:**

Think of it as a solo athlete – powerful in its own right, capable of handling many tasks like web browsing, document editing, casual gaming. 

* **Architecture:**  Typically a single CPU, limited RAM, often relies on the hard drive for storage and data processing.
* **Processing Power:** Designed for general-purpose tasks, not specialized computationally intensive workloads.

**HPC Cluster:**

Imagine a team of highly specialized athletes working together towards a common goal – that's an HPC cluster. It leverages multiple interconnected computers (nodes) to tackle massive problems requiring immense computational power.

* **Architecture:**  Hundreds or even thousands of nodes, each with powerful CPUs and often GPUs. Nodes are connected by a high-speed network allowing them to share data and work together efficiently.
* **Processing Power:** Capable of handling incredibly complex tasks like:

    * **Scientific Research:** Simulating climate change models, analyzing genomic data, designing new materials.
    * **Engineering Design:**  Testing structural integrity of bridges, optimizing aerodynamic performance of aircraft, simulating fluid dynamics for oil and gas exploration.
    * **Financial Modeling:** Analyzing market trends, predicting stock prices, managing risk.

**Key Differences:**

| Feature | Regular PC | HPC Cluster |
|---|---|---|
| Processing Power | Moderate | Extremely high |
| Architecture | Single CPU/GPU | Hundreds or thousands of interconnected nodes |
| Memory | Limited RAM | Large shared memory across nodes |
| Storage | Hard drive/SSD | Dedicated high-performance storage systems |
| Cost | Relatively low | Very high (hundreds of thousands to millions of dollars) |
| Applications | Everyday tasks, casual gaming | Scientific research, engineering simulations, financial modeling |

**In essence:**

An HPC cluster is a supercharged computing environment designed for tackling problems that would take a regular PC years or even centuries to solve. They are essential tools for pushing the boundaries of scientific discovery and technological innovation.



## Libraries

- blas: Basic Linear Algebra Subprograms. For low level linear algebra operations such as vector addition and matrix multiplication.
- lapack: Linear Algebra PACKage. Built on blas, for higher level linear algebra operations such as matrix inversion and diagonalization. 
- scalapack: Scalable lapack. Built on parallel blas (pblas).
- fftw3: Fast Fourier Transform in the West. Compute the discrete Fourier transform (DFT) in one or more dimensions, of arbitrary input size, and of both real and complex data.
- mpich & openmpi, Message Passing Interface implementations for massively parallel computation.

## Parallel Computing
Modern computers usually have more than one processor/core, so if the code is parallelized, the code can be executed in a much shorter time. The speed up of a parallel code can be estimated using the Amdahl's law:

$$
	S = \frac{N}{BN+(1-B)}
$$

where B is the fraction of the code executed in serial, N is the number of processors and S is the speed-up.