# Week 1: Orientation + Git & HPC Setup

## Key Topics

### Course Orientation
- **Materials Informatics Overview**: Field combining materials science, data science, and computing
- **Course Structure**: 13-week curriculum covering programming, databases, atomistic structures, models, optimization, and ML
- **Expectations**: Hands-on practicals, weekly assignments, two quizzes

### Git & GitHub Basics
- **Git**: Distributed version control system
- **GitHub**: Hosting platform for Git repositories
- **Basic Workflow**:
  ```
  git clone <repo-url>    # Download repository
  git add <file>           # Stage changes
  git commit -m "message"   # Save changes with message
  git push                  # Upload to remote
  git pull                  # Download latest changes
  ```

### HPC Access
- **VPN**: Required for off-campus access to NUS HPC
- **SSH**: Secure shell protocol for remote access
- **Testing HPC**: `ssh YOUR_NUSNETID@aspire1.nus.edu.sg`
- **Basic Commands**:
  - `whoami` - Check logged-in user
  - `module avail` - List available software modules
  - `squeue -u $USER` - Check your jobs in queue

### Environment Setup
- **VS Code**: Recommended IDE with Python and Jupyter extensions
- **Miniconda**: Package manager for Python environments
- **Virtual Environment**: `conda create -n mi python=3.13`
- **Jupyter Notebooks**: Interactive coding environment
- **GitHub Copilot**: AI-powered code completion (optional but recommended)

## Key Concepts

### Git Repository Structure
```
project-folder/
├── .git/              # Git metadata (don't modify)
├── .gitignore         # Files to ignore
├── README.md           # Project description
├── LICENSE             # License file
└── .github/            # GitHub-specific configs
```

### Git Branches
- **main/master**: Production branch
- **feature branches**: For new features (e.g., `feature/new-plot`)
- **Purpose**: Isolate work without affecting main branch

### Commit Messages
- Should be concise and descriptive
- Example: "Add E-V curve generation function"

## Common Pitfalls

- ❌ Not using version control for research code
- ❌ Pushing large data files to Git (use `.gitignore`)
- ❌ Forgetting to test HPC access before assignments
- ❌ Using system Python instead of virtual environment

## Practice Skills

1. **Clone a repository**: `git clone https://github.com/user/repo.git`
2. **Create virtual environment**: `conda create -n mi python=3.13`
3. **Activate environment**: `conda activate mi`
4. **Install packages**: `pip install pymatgen ase jupyter`
5. **Test HPC access**: `ssh yourid@aspire1.nus.edu.sg`

## Links to Review

- [Orientation Materials](../orientation/)
- [Git Workflow Guide](../python_programming/git_workflow.md)
- [Open-Source & GitHub](../python_programming/github.md)
- [Environment Setup Guide](../orientation/setup.md)
