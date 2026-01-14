# AI-Assisted Programming

```{admonition} Prerequisites
:class: tip
Make sure you have completed the [VS Code setup guide](../orientation/setup.md#visual-studio-code-vs-code) and have access to the Vanda HPC cluster via VS Code as described in the [Vanda HPC access guide](../orientation/vanda.md).
```

## Introduction

GitHub Copilot is an AI-powered code completion tool that helps you write code faster and more efficiently. It uses advanced language models to understand your code context and provide intelligent suggestions. In this guide, you'll learn how to use Copilot effectively for materials informatics and scientific programming.

```{note}
GitHub Copilot is available for students, teachers, and maintainers of popular open-source projects for free. Check [GitHub Education](https://education.github.com/) for details.
```

## Getting Started with Copilot

### Basic Usage

#### Inline Suggestions

As you type, Copilot automatically provides suggestions:

```python
# Type a comment describing what you want
# Calculate the lattice constant from volume

# Copilot will suggest:
def calculate_lattice_constant(volume, crystal_system='cubic'):
    """Calculate lattice constant from unit cell volume."""
    if crystal_system == 'cubic':
        return volume ** (1/3)
    else:
        raise NotImplementedError("Only cubic systems supported")
```

**Accepting Suggestions:**
- `Tab` - Accept the entire suggestion
- `Cmd+→` (Mac) or `Ctrl+→` (Windows) - Accept word by word
- `Esc` - Dismiss suggestion
- `Alt+]` or `Alt+[` - Cycle through alternative suggestions

#### Multi-line Completions

Copilot can generate entire functions:

```python
# Start typing a function signature
def calculate_band_gap(eigenvalues, fermi_level):
    # Copilot generates the rest
```

```{tip}
Write clear, descriptive function names and comments. This helps Copilot understand your intent and generate better suggestions.
```

### Chat Interface

The Copilot Chat provides an interactive way to get help:

1. **Open Chat**
   - Click the chat icon in the sidebar
   - Or press `Cmd+Shift+I` (Mac) / `Ctrl+Shift+I` (Windows)

2. **Ask Questions**
   - "How do I read a CIF file using pymatgen?"
   - "Explain this code" (select code first)
   - "Find bugs in this function"
   - "Write tests for this class"

3. **Chat Commands**
   - `/explain` - Explain selected code
   - `/fix` - Suggest fixes for problems
   - `/tests` - Generate unit tests
   - `/doc` - Add documentation

## Advanced Features

### Copilot Agents

Agents are specialized AI assistants that can handle complex, multi-step tasks autonomously. They understand context across your entire workspace and can perform research, code search, and implementation.

#### What Agents Can Do

1. **Research and Discovery**
   - Search through large codebases to find relevant code
   - Analyze project structure and dependencies
   - Find usage patterns and examples

2. **Complex Implementations**
   - Break down large tasks into smaller steps
   - Implement features across multiple files
   - Refactor code systematically

3. **Problem Solving**
   - Debug issues by analyzing multiple files
   - Suggest architectural improvements
   - Find and fix security vulnerabilities

#### Using Agents

When working with Copilot in VS Code, you can request agent-level assistance:

```markdown
@workspace How should I structure a machine learning pipeline for materials property prediction?
```

The agent will:
1. Analyze your workspace structure
2. Search for existing patterns
3. Provide comprehensive recommendations
4. Offer to implement the solution

```{note}
Agents work best when you provide clear, specific tasks with well-defined goals. Be explicit about what you want the final result to look like.
```

### Copilot Skills

Skills are specialized capabilities that Copilot can leverage for specific tasks:

#### Code-Related Skills

1. **Refactoring**
   ```markdown
   @workspace Refactor this MD simulation code to use class-based design
   ```

2. **Testing**
   ```markdown
   Generate pytest tests for the structure analysis module
   ```

3. **Documentation**
   ```markdown
   Add NumPy-style docstrings to all functions in this file
   ```

4. **Performance Optimization**
   ```markdown
   Optimize this DFT post-processing script for large datasets
   ```

#### Domain-Specific Skills

For materials informatics, Copilot can help with:

1. **Data Processing**
   - Parse materials database files
   - Clean and normalize crystal structure data
   - Handle different file formats (CIF, POSCAR, XYZ)

2. **Scientific Computing**
   - Implement numerical algorithms
   - Vectorize operations with NumPy
   - Use PyTorch/TensorFlow efficiently

3. **Visualization**
   - Create publication-quality plots
   - Visualize crystal structures
   - Generate interactive dashboards

### Model Context Protocol (MCP)

MCP is a protocol that allows Copilot to connect with external tools, databases, and services to provide richer context and capabilities.

#### What is MCP?

Model Context Protocol enables:
- **Data Integration**: Access external databases and APIs
- **Tool Integration**: Use specialized computational tools
- **Context Enhancement**: Provide domain-specific knowledge

#### MCP Servers for Materials Science

You can configure MCP servers to give Copilot access to get information about:

- Library-specific documentation
- Scientific literature references
- Code examples from repositories


```{tip}
MCP servers can be configured in VS Code settings. Check the GitHub Copilot documentation for available MCP integrations and how to set them up.
```

## Best Practices

### 1. Write Clear Prompts

**Good:**
```python
# Calculate the formation energy of a defect structure
# Formula: E_formation = E_defect - E_perfect - sum(n_i * mu_i)
```

**Better:**
```python
# Calculate defect formation energy using the formula:
# E_f = E_defect - E_perfect - n_added*mu_added + n_removed*mu_removed
# where mu is the chemical potential
def calculate_defect_formation_energy(e_defect, e_perfect, n_added, mu_added, 
                                     n_removed, mu_removed):
```

### 2. Provide Context

Include imports and type hints to help Copilot understand your intent:

```python
import numpy as np
from ase import Atoms
from typing import List, Tuple

def analyze_neighbors(structure: Atoms, cutoff: float) -> List[Tuple[int, int, float]]:
    """Find all neighbor pairs within cutoff distance."""
    # Copilot now knows you're working with ASE Atoms objects
```

### 3. Review Suggestions Carefully

```{warning}
Always review and test Copilot's suggestions. AI can make mistakes, especially with:
- Scientific formulas and constants
- Edge cases and error handling
- Performance-critical code
- Security-sensitive operations
```

### 4. Iterate and Refine

If the first suggestion isn't perfect:
1. Accept the partial suggestion
2. Add clarifying comments
3. Request modifications in chat
4. Use `Alt+]` to see alternatives

### 5. Use Chat for Complex Questions

For tasks requiring explanation or multiple steps:

```markdown
I have a dataset of crystal structures. Help me:
1. Load structures from CIF files
2. Calculate descriptive features (volume, density, space group)
3. Normalize the features
4. Save to a CSV file

Use pymatgen and pandas.
```

## Troubleshooting

### Copilot Not Working

1. **Check Status**
   - Click Copilot icon in status bar
   - Verify you're signed in
   - Check for error messages

2. **Restart Extension**
   - Open Command Palette (`Cmd+Shift+P`)
   - Run "Developer: Reload Window"

3. **Check Network**
   - Copilot requires internet connection
   - Check proxy settings if behind firewall

### Poor Suggestions

1. **Improve Context**
   - Add more descriptive comments
   - Include relevant imports
   - Show example usage

2. **Use Chat for Clarification**
   - Describe the problem in chat
   - Provide example inputs/outputs
   - Request specific approaches

3. **Break Down Complex Tasks**
   - Split large functions into smaller ones
   - Implement step by step
   - Use helper functions

## Privacy and Security

```{warning}
**Important Considerations:**
- Copilot sends code snippets to GitHub servers
- Don't include sensitive data (API keys, passwords) in your code
- Review your organization's policies on AI-assisted coding
- Use `.gitignore` to exclude sensitive files
```

### Best Practices for Privacy

1. **Use Environment Variables**
   ```python
   import os
   api_key = os.environ.get('MATERIALS_PROJECT_API_KEY')
   ```

2. **Exclude Sensitive Files**
   - Configure `.copilotignore` file
   - Exclude data directories with proprietary information

3. **Review Before Committing**
   - Always review generated code
   - Check for accidentally included secrets
   - Use tools like `git-secrets`

## Summary

GitHub Copilot is a powerful tool that can significantly accelerate your development workflow. Key takeaways:

- **Start Simple**: Use inline suggestions for basic tasks
- **Leverage Chat**: Ask questions and get explanations
- **Use Agents**: For complex, multi-file tasks
- **Explore Skills**: Specialized capabilities for specific domains
- **Configure MCP**: Integrate external tools and databases
- **Review Carefully**: AI is a tool, not a replacement for understanding
- **Maintain Privacy**: Be mindful of sensitive information

As you become more proficient, experiment with advanced features and integrate Copilot into your materials informatics workflow. The combination of domain expertise and AI assistance can lead to remarkable productivity gains.

## Additional Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [VS Code Copilot Guide](https://code.visualstudio.com/docs/copilot/overview)
- [Copilot Best Practices](https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)
- [Model Context Protocol Specification](https://modelcontextprotocol.io/)

```{tip}
Practice with simple tasks first, then gradually incorporate Copilot into more complex projects. The more you use it, the better you'll understand its capabilities and limitations.
```
