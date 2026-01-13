# Week 3: Computer, Git & Open-Source Software

## Key Topics

### Git Workflow (Main Lecture)
- **Clone**: `git clone <url>` - Download repository
- **Add**: `git add <file>` - Stage changes for commit
- **Commit**: `git commit -m "message"` - Save changes
- **Push**: `git push` - Upload to remote repository
- **Pull**: `git pull` - Download and merge changes from remote
- **Branch**: `git branch <name>` - Create new branch
- **Checkout**: `git checkout <branch>` - Switch to branch
- **Merge**: `git merge <branch>` - Combine branches

### Branching and Merging
```bash
# Create and switch to new branch
git checkout -b feature-new-function

# Make changes, commit
git add .
git commit -m "Add new function"

# Switch back to main
git checkout main

# Merge feature branch
git merge feature-new-function
```

### Pull Requests (PRs)
- **Purpose**: Request to merge changes from branch to main
- **Process**:
  1. Create branch with changes
  2. Push branch to remote
  3. Create PR on GitHub
  4. Request review from collaborators
  5. Address feedback
  6. Merge after approval

### Merge Conflicts
- **When**: Two branches have conflicting changes to same lines
- **Resolution**: Manually choose which changes to keep
- **VS Code**: Visual interface for conflict resolution
- **Command Line**: Edit conflicted files, then `git add` and `git commit`

### Open-Source Software
- **Definition**: Software with source code that anyone can inspect, modify, and enhance
- **Benefits**:
  - Cost-effective (usually free)
  - Community support
  - Transparency and security
  - Vendor independence
  - Customization flexibility

### Common Open-Source Licenses
- **MIT**: Permissive, requires copyright notice
- **BSD**: Similar to MIT, more conditions
- **GPL**: Copyleft, requires derivative works to use same license
- **Apache**: Permissive with patent grant
- **Creative Commons**: For creative works (not software)

### Computer Hardware
- **CPU**: Central Processing Unit - executes instructions
- **GPU**: Graphics Processing Unit - parallel processing for graphics/ML
- **Memory (RAM)**: Temporary storage for active programs
- **Storage (SSD/HDD)**: Long-term data storage
- **Performance Factors**:
  - Clock speed (GHz)
  - Number of cores
  - Cache size
  - Memory bandwidth

### Software in Materials Science
- **ASE**: Atomic Simulation Environment - atomic manipulation
- **pymatgen**: Materials Genomics - materials analysis
- **VASP**: Vienna Ab initio Simulation Package - DFT calculations
- **LAMMPS**: Large-scale Atomic/Molecular Massively Parallel Simulator - MD
- **Quantum ESPRESSO**: DFT and materials simulation

## Key Concepts

### Git Graph Model
```
A---B---C  (main branch)
     \
      D---E  (feature branch)
```
- Commits are nodes in a directed graph
- Branches are pointers to commits
- Merge creates a commit with multiple parents

### Git Merge vs Rebase
| Operation | Result | When to Use |
|-----------|---------|-------------|
| `git merge` | Creates merge commit, preserves history | Normal workflow |
| `git rebase` | Linear history, rewrites commits | Clean history needed |
| `git pull` | Fetch + merge | Quick updates |

### GitHub Community Features
- **Star**: Bookmark interesting repositories
- **Follow**: Track user activity
- **Issues**: Track bugs, features, tasks
- **Fork**: Create personal copy of repository
- **Explore**: Discover new projects

## Common Pitfalls

- ❌ Not committing frequently (large, unclear commits)
- ❌ Working directly on main branch
- ❌ Ignoring merge conflicts
- ❌ Not understanding license requirements
- ❌ Choosing wrong hardware for computational tasks (CPU vs GPU)

## Practice Skills

1. **Initialize repo**: `git init`
2. **Configure Git**: `git config --global user.name "Name"`, `git config --global user.email "email"`
3. **Branch operations**: `git branch`, `git checkout`, `git merge`
4. **Resolve conflicts**: Open file, choose changes, `git add`, `git commit`
5. **Clone and contribute**: `git clone`, create branch, make changes, push, create PR

## Links to Review

- [Computer & Computation Chapter](../computer/)
- [Git Workflow Guide](../python_programming/git_workflow.md)
- [Open-Source & GitHub](../python_programming/github.md)
- [Git Practical Examples](../computer/git_examples.md)
