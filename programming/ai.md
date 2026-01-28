# *AI Tools for Code Development

GitHub Copilot can be useful for speeding up repetitive coding tasks. This guide covers practical ways to use it effectively in this course—and importantly, when to be careful about trusting its output.

```{note}
Copilot is free for students through [GitHub Education](https://education.github.com/). You'll need an .edu email address.
```

````{admonition} Install VS Code Extension
:type: info
You need to install the Github Copilot & Github Copilot Chat extensions manually in VS Code if you are using them with the OnDemand web version.
1. Open VS Code (OnDemand web version). Make sure you're using the new version (`4.105`) that supports extensions.
2. Open a Terminal (menu: Terminal -> New Terminal)
3. Run the following commands exactly one by one:
```bash
code-server --install-extension /nfs/home/svu/msedz/share/github.copilot-1.388.0.vsix
code-server --install-extension /nfs/home/svu/msedz/share/github.copilot-chat-0.32.3.vsix
```
4. Reload VS Code to activate the extensions. (refresh the browser page)
5. Sign in to GitHub Copilot using your GitHub account.

You can also refer to the official documentation [here](https://github.com/features/copilot).
````

## What Copilot is Good For

- Writing boilerplate code: It can quickly generate common code patterns, such as function definitions, class structures, and data loading routines.

- Writing tests and documentation: It's surprisingly good at generating pytest templates and docstrings.

## What to Be Careful About

```{warning}
**Copilot makes mistakes on materials science code.** Always verify:
- **Units**: Does it know you're working in eV, GPa, Angstroms?
- **Formulas**: Defect formation energy? Elastic constants? Double-check the math.
- **Library syntax**: ASE vs. pymatgen vs. ase differences can confuse it
- **Edge cases**: What happens with incomplete structures or zero values?
```

Real examples where Copilot stumbled in this course:
- Suggesting `np.mean()` when you need `np.sum()` for total energy
- Forgetting periodic boundary conditions in distance calculations
- Wrong indexing for phonon frequencies vs. force constants


## Practical Workflow

### Inline Completions
Press `Tab` to accept a suggestion, `Esc` to dismiss, `Alt+[` to see alternatives.

### Chat for Questions
- Ask "how do I..." questions
- Select code and ask "/explain"
- Paste error messages and ask for help

### Common Patterns in This Course

**Loading materials data:**
```python
# Type the function name and docstring
def load_energies_from_output(filename):
    """Read energies from VASP OUTCAR file."""
```

**Computing properties:**
```python
# Be specific about what you're calculating
def compute_elastic_modulus(stress_strain_pairs, volume):
    """Calculate elastic modulus from stress-strain data (GPa)."""
```

**Tests:**
```python
def test_structure_has_valid_lattice():
    """Verify lattice vectors have correct shape."""
```

Copilot is often good at these patterns. But **test it immediately** with real data.

## Tips That Actually Help

1. **Write good comments first.** The better your docstring, the better Copilot's suggestion.

2. **Be specific about libraries.** Don't just say "load a CSV"—say "use pandas to load relaxation_energies.csv and return a DataFrame."

3. **Use type hints.** They give Copilot crucial context:
   ```python
   def compute_formation_energy(e_defect: float, e_perfect: float, 
                               dopant_mu: float) -> float:
   ```

4. **Run the code immediately.** Don't accept suggestions and move on. Test with your actual data right away.

5. **Ask for alternatives.** If the first suggestion doesn't look right, press `Alt+[` to see other options.

## When Things Go Wrong

**Copilot is not responding**: Check the Copilot icon in the status bar. You probably just need to sign in or restart VS Code.

**Suggestions look wrong**: They probably are. This is normal. Copy-paste the code somewhere safe, look it up in the docs, or ask on Stack Overflow. Don't blindly trust scientific code from an AI.

**You're spending more time debugging Copilot than coding**: Don't use it for that task. Stick to the things it's good at (boilerplate, tests, repetitive parsing).

## Privacy & Safety

```{warning}
Copilot sends your code to GitHub's servers. Don't include:
- API keys or passwords
- Real materials project data with publication restrictions
- Anything marked "private" by your lab
```

Use environment variables or config files instead:
```python
import os
api_key = os.environ.get('MATERIALS_PROJECT_API_KEY')
```

## Bottom Line

Copilot is a time-saver for routine tasks, not a substitute for understanding your code. Use it to speed up the boring parts (boilerplate, tests, data loading), but always understand what the code is doing before you run it. In materials science especially, wrong code can look correct—you'll only catch it by testing with real data.

The best use is: let Copilot write the first draft of routine code, then review and test it immediately.
