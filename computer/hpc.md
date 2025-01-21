# HPC, Cloud, and Other Computers

## High-Performance Computing (HPC)
```{figure} ../figures/hpc_examples.png
---
width: 100%
name: directive-fig
---
Examples of HPC: El Capitan by LLNL in the USA and ASPIRE2A+ by NSCC in Singapore.
```
High-Performance Computing (HPC), also known as supercomputing, is designed to perform computationally intensive tasks at incredibly high speeds. These tasks are distributed across many compute nodes, each of which can contain multiple multi-core CPUs or GPUs and large amounts of memory (ranging from 2 to 16 GB per core). Compute nodes are interconnected through high-speed networks such as Infiniband, which can achieve speeds of 400 to 1600 Gbps.

HPC systems are equipped with specialized software, including job scheduling systems and Message Passing Interface (MPI) implementations, to efficiently manage and execute parallel tasks. These systems are capable of achieving performance levels measured in petaFLOPS ($10^{15}$ floating-point operations per second) or even exaFLOPS ($10^{18}$ floating-point operations per second).

Applications of HPC include quantum mechanical simulations, fluid dynamics simulations, weather forecasting, materials science, and various physical simulations. These applications require immense computational power that far exceeds the capabilities of regular PCs.

In addition to traditional CPUs and GPUs, other hardware accelerators like FPGAs (Field-Programmable Gate Arrays) and TPUs (Tensor Processing Units) are also used to enhance performance.

As of now, the top-ranked supercomputer in the world is El Capitan at Lawrence Livermore National Laboratory, boasting a performance of 2 exaFLOPS. In Singapore, plans are underway to build ASPIRE2A+ at the National Supercomputing Centre (NSCC), which is expected to achieve 20 petaFLOPS and rank around 90th in the Top500 list of supercomputers.

In summary, HPC clusters are the backbone of modern scientific research and technological innovation. They allow scientists and engineers to solve complex problems and perform simulations that would be impossible with regular computers. These powerful systems are crucial for advancing our understanding of the world and developing new technologies.


| Feature | Regular PC | HPC Cluster |
|---|---|---|
| Processing Power | Moderate | Extremely high |
| Architecture | Single CPU/GPU | Hundreds or thousands of interconnected nodes |
| Memory | Limited RAM | Large shared memory across nodes |
| Storage | Hard drive/SSD | Dedicated high-performance storage systems |
| Cost | Relatively low | Very high (hundreds of thousands to millions of dollars) |
| Applications | Everyday tasks, casual gaming | Scientific research, engineering simulations, financial modeling |

## Non-Uniform Memory Access (NUMA) Architecture
```{figure} ../figures/numa.png
---
width: 100%
name: directive-fig
---
On the left shows an example NUMA architecture. An example of 2 NUMA nodes is shown on the right.
```
In High-Performance Computing (HPC), memory architecture plays a crucial role in determining the efficiency and speed of computations. One such architecture is Non-Uniform Memory Access (NUMA). In a NUMA system, memory is distributed among different CPU or compute nodes, rather than being shared uniformly. This means that memory access times can vary depending on the proximity of the memory to the CPU.

To put it simply, accessing memory that is closer to a CPU is much faster than accessing memory that is farther away. This is because each CPU has its own local memory, and accessing this local memory is quicker than accessing memory located on a remote CPU. 

To optimize performance, memory is assigned as NUMA nodes, which are essentially groups of local and remote memory. By pinning processes to their nearby CPUs and ensuring they primarily use local memory, computations can be performed much faster. This technique reduces latency and increases the overall efficiency of the system.

For software to fully leverage the benefits of NUMA, it must be optimized to recognize and utilize NUMA features. This involves careful planning and coding to ensure that memory allocation and process scheduling take into account the NUMA architecture. By doing so, HPC systems can achieve significant performance improvements, making them even more powerful tools for scientific research and complex simulations.

Understanding and utilizing NUMA architecture is essential for anyone looking to maximize the performance of HPC systems. It is a fascinating aspect of computer science that highlights the importance of memory management in achieving high computational speeds.

## Cloud Computing

Cloud computing is a revolutionary technology that allows users to access and utilize computing services over the internet. Instead of owning and maintaining physical hardware, users can rent computing resources on a pay-as-you-go basis. This model offers several key advantages. Users can provision computing resources as needed without requiring human intervention from the service provider, allowing for quick scaling based on requirements. Cloud services are accessible over the internet from a wide range of devices, ensuring that resources can be accessed from anywhere, at any time. Cloud providers use a multi-tenant model to serve multiple customers with the same physical resources, leading to more efficient utilization and cost savings. Cloud services can be scaled up or down quickly to meet changing demands, ensuring cost-effectiveness by paying only for what is used. Providers monitor and optimize resource usage, providing transparency and accountability, allowing users to track consumption and manage costs effectively.

Cloud computing offers various service models, collectively known as "Anything as a Service" (XaaS). Software as a Service (SaaS) delivers software applications over the internet, accessible through a web browser without needing installation or maintenance. Examples include Google Workspace and Microsoft Office 365. Platform as a Service (PaaS) provides a platform for developers to build, deploy, and manage applications without worrying about the underlying infrastructure, with examples like Google App Engine and Microsoft Azure App Services. Infrastructure as a Service (IaaS) offers virtualized computing resources over the internet, allowing users to rent virtual machines, storage, and networks, giving them complete control over the infrastructure. Examples include Amazon EC2 and Microsoft Azure Virtual Machines.

High-Performance Computing (HPC) can also be hosted on the cloud, combining the power of HPC with the flexibility and scalability of cloud computing. By leveraging cloud resources, organizations can run complex simulations and computations without investing in expensive hardware.

Cloud computing has transformed the way we access and utilize computing resources. Its scalability, cost-effectiveness, and flexibility make it an attractive option for individuals and organizations alike. Whether running a small business or conducting large-scale scientific research, cloud computing provides the tools and resources needed to succeed. Major companies like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP) dominate the cloud computing market, offering a wide range of services tailored to various needs.

## Other Technologies
### Neuromorphic Computing
```{figure} ../figures/neuromorphic.png
---
width: 100%
name: directive-fig
---
Difference between a von Neumann architecture computer and a neuromorphic computer.
```
Neuromorphic computing is an innovative approach to computing that mimics the neural structure and functioning of the human brain. Unlike the traditional von Neumann architecture, which separates memory and processing units, neuromorphic computing integrates these components, allowing for more efficient data processing and reduced latency. This architecture is designed to emulate the parallel and distributed nature of neural networks, enabling it to perform complex tasks such as pattern recognition, sensory processing, and decision-making with remarkable efficiency.

In a von Neumann system, data must be transferred back and forth between the memory and the processor, creating a bottleneck known as the von Neumann bottleneck. Neuromorphic systems, on the other hand, use specialized hardware like spiking neural networks (SNNs) and memristors to process information in a way that is more akin to how the brain operates. This allows for real-time processing and learning, making neuromorphic computing particularly well-suited for applications in artificial intelligence, robotics, and cognitive computing.


### Quantum Computers
```{figure} ../figures/quantum_computer.png
---
width: 80%
name: directive-fig
---
Features of quantum computer.
```
Quantum computers represent a revolutionary leap in computing technology by using qubits instead of traditional bits. Unlike bits, which can only be in a state of 0 or 1, qubits can exist in multiple states simultaneously due to a property called superposition. This allows n qubits to process 2^n pieces of information at once, enabling exponential parallelism that far surpasses the capabilities of classical computers.

Qubits are typically created by manipulating quantum particles or systems that behave like quantum particles, such as superconducting materials, trapped ions, quantum dots, photons, and neutral atoms. These particles exhibit unique quantum properties that are harnessed to perform computations. One such property is interference, where constructive and destructive interference can be used to amplify correct solutions and cancel out incorrect ones. Another critical property is entanglement, where qubits become interconnected in such a way that the state of one qubit can instantly influence the state of another, regardless of distance. This entanglement is a key factor in the speed and efficiency of quantum algorithms.

Quantum computers excel at specialized tasks that are infeasible for classical computers. For example, Boson sampling and Shor's algorithm, which can factor large numbers exponentially faster than the best-known classical algorithms, showcase the potential of quantum computing. However, these machines face significant challenges, including fragility due to decoherence, error rates, and scalability issues. Quantum systems are highly sensitive to their environment, and maintaining qubit coherence long enough to perform meaningful computations is a major hurdle.

```{figure} ../figures/quantum_supremacy.png
---
width: 100%
name: directive-fig
---
Quantum computer and the [quantum supremacy paper by Google](https://www.nature.com/articles/s41586-019-1666-5).
```

One of the most exciting milestones in quantum computing is the achievement of quantum supremacy. This term refers to the point at which a quantum computer can perform a calculation that is practically impossible for a classical computer to achieve in a reasonable timeframe. In 2019, Google claimed to have reached this milestone with their quantum processor, Sycamore, which performed a specific task in 200 seconds that would take the world's fastest supercomputer thousands of years to complete.

To put the potential of quantum computing into perspective, consider that a system with just 300 qubits could theoretically perform more calculations instantaneously than the total number of atoms in the observable universe, estimated to be around $10^{82}$. This capability dwarfs even the most powerful supercomputers today, which operate at around 1.742 x $10^{18}$ FLOPS. The promise of quantum computing lies in its ability to tackle problems that are currently beyond our reach, opening new frontiers in science, cryptography, and beyond.
