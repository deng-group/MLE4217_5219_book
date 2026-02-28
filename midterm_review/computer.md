# Lecture 3: Computer and Computation

## What we covered in lecture

- Computer foundations: CPU, GPU, memory, storage, and why they matter for scientific workflows.
- Software stack thinking: tools, libraries, and reproducible environments.
- HPC and cloud basics for running larger jobs.
- Performance basics and simple scaling ideas.
- Practical Git workflow: branch, commit, merge, and conflict handling.

## What you should be able to do

- Explain when CPU-first vs GPU-first workflows make sense.
- Describe the basic difference between local machine, HPC, and cloud usage.
- Use simple timing/performance checks to compare two code paths.
- Run a branch-based Git workflow and resolve a basic merge conflict.
- Explain key open-source license differences at a practical level.

## Common mistakes we saw in practicals

- Treating faster hardware as a fix for inefficient code.
- Ignoring memory footprint when working with larger arrays/dataframes.
- Working directly on `main` instead of short-lived feature branches.
- Pulling/merging without checking local uncommitted changes.
- Leaving conflict markers in files after "resolving" conflicts.

## Fast self-check

1. In one sentence each, define CPU, GPU, RAM, and storage.
2. Time two implementations of the same small task and compare.
3. Create a branch, commit one change, merge back, and inspect history.
4. Resolve one intentional text conflict in Git and produce a clean commit.

## Where to review in this book

- [Computer and Computation Overview](../computer/index.md)
- [History](../computer/history.md)
- [Hardware](../computer/hardware.md)
- [Software](../computer/software.md)
- [HPC, Cloud, and Other Computers](../computer/hpc.md)
- [Performance and Costs](../computer/performance.md)
- [Git Practical Examples](../computer/git_examples.md)
- [Scaling Notebook](../computer/scaling.ipynb)
- [Open-Source and GitHub](../programming/github.md)
