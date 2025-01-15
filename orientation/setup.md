# Practical: Setup Programming Environment

## Visual Studio Code (VS Code)
We recommend using *Visual Studio Code* in this course. It is an open-sourced (free) software and is available for most of the main stream OS. Its intuitive interface and robust functionality make coding smoother and more enjoyable.

Here's how you can get started:
```{admonition} Choose the correct version for your operating system (OS)
- You should install the Windows version if you're using Windows, even you're using Windows + WSL2. 
- You're most likely to use the 64-bit version if your computer was purchased in recent years.
```

1. Download and Install VS Code: Visit the official Visual Studio Code website ([https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)) and download the installer compatible with your operating system. Follow the on-screen instructions during installation, accepting default settings. 

2. Install extensions: You should install **Python** and **Jupyter** plugin under the **Extensions** on the left side of the VS Code. Other plugins that are recommended: Git Graph, and GitHub Copilot.

3. (**For Windows only**) Install Git: Download and install [Git for Windows](https://git-scm.com/downloads/win). Choose *Use Windows' default console window* during installation.

(**For macOS only**) Install Xcode Command Line Tools: Open Terminal and run the following command:
```shell
xcode-select --install
```

4. (**For Windows only**) Install [Visual Studio C++ build tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/). **This will download a few GB data. You can do this after you go home!** If you encountered error during the installation of some Python packages (likely `spglib`), you should install this. Also make sure you are in the administrator previledge during installation process of this python package.

Visual Studio Code offers a convenient file explorer panel for easy script navigation and access. You can also launch an integrated terminal using "Terminal > New Terminal" for seamless coding workflows.

## Creating Python Virtual Environments
A virtual environment is a self-contained directory that contains a Python installation for a particular version of Python, plus a number of additional packages. This allows you to work on a specific project without affecting other projects or your system Python installation.

Here's a step-by-step guide to creating virtual environments in both Windows, macOS, and Linux:
`````{tab-set}
````{tab-item} Windows
- **Install Miniconda**: Download and install Miniconda from [here](https://www.anaconda.com/download/success). Follow the installation instructions and make sure to add Miniconda to your PATH environment variable.

- **Open Anaconda Prompt**: After installation, open the [Anaconda Prompt](https://www.youtube.com/watch?v=UAUO_K-bRMs) from the Start Menu. You should see a window like this:
```
(base) C:\Users\YourUsername>
```

- **Create the virtual environment**: Run the following command, replacing "mi" with your desired environment name:
```shell
conda create -n mi python=3.13
```
You will see a series of prompts asking you to confirm the installation of various packages. Type `y` and press Enter to proceed.

- **Activate the virtual environment**:
```shell
conda activate mi
```
Your prompt should now look like this, indicating that the environment is active:
```
(mi) C:\Users\YourUsername>
```

- **Install packages**: Use `conda` or `pip` to install packages specific to your project: You might need to install the Visual Studio C++ build tools first for installing packages like `spglib`, which is a dependency of `pymatgen`. Please see the [VS Code instruction #4](setup.md#visual-studio-code-vs-code) above.
```shell
pip install pymatgen ase jupyter
```

- **Deactivate the virtual environment**: When you are finished working on your project, deactivate the environment by typing:
```shell
conda deactivate
```
Your prompt will return to:
```
(base) C:\Users\YourUsername>
```
````

````{tab-item} macOS
- **Install Miniconda**: Download and install Miniconda from [here](https://www.anaconda.com/download/success). Follow the installation instructions and make sure to add Miniconda to your PATH environment variable.

- **Open Terminal**: After installation, [open the Terminal application](https://support.apple.com/en-sg/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac#:~:text=Terminal%20for%20me-,Open%20Terminal,%2C%20then%20double%2Dclick%20Terminal.) from your Launchpad. You should see a window like this:
```
Your-MacBook:~ YourUsername$
```

- **Create the virtual environment**: Run the following command, replacing "mi" with your desired environment name:
```shell
conda create -n mi python=3.13
```
You will see a series of prompts asking you to confirm the installation of various packages. Type `y` and press Enter to proceed.

- **Activate the virtual environment**:
```shell
conda activate mi
```
Your prompt should now look like this, indicating that the environment is active:
```
(mi) Your-MacBook:~ YourUsername$
```

- **Install packages**: Use `conda` or `pip` to install packages specific to your project:
```shell
pip install pymatgen ase jupyter
```

- **Deactivate the virtual environment**: When you are finished working on your project, deactivate the environment by typing:
```shell
conda deactivate
```
Your prompt will return to:
```
Your-MacBook:~ YourUsername$
```
````

````{tab-item} Linux
- **Install Miniconda**: Download and install Miniconda from [here](https://www.anaconda.com/download/success). Follow the installation instructions and make sure to add Miniconda to your PATH environment variable.

- **Open Terminal**: After installation, open a terminal. You should see a window like this:
```
yourusername@yourmachine:~$
```

- **Create the virtual environment**: Run the following command, replacing "mi" with your desired environment name:
```shell
conda create -n mi python=3.13
```
You will see a series of prompts asking you to confirm the installation of various packages. Type `y` and press Enter to proceed.

- **Activate the virtual environment**:
```shell
conda activate mi
```
Your prompt should now look like this, indicating that the environment is active:
```
(mi) yourusername@yourmachine:~$
```

- **Install packages**: Use `conda` or `pip` to install packages specific to your project:
```shell
pip install pymatgen ase jupyter
```

- **Deactivate the virtual environment**: When you are finished working on your project, deactivate the environment by typing:
```shell
conda deactivate
```
Your prompt will return to:
```
yourusername@yourmachine:~$
```
````
`````
## Select Interpreter in VS Code
If you're editing any Python code (file ends with `.py`), you should select your Python interpreter for your project in VS Code. Make sure you [installed the Python extension in VS Code](#visual-studio-code-vs-code). Here's how you can do it:


1. Open VS Code and press `Ctrl/Command+Shift+P` to open the command palette. You will see a prompt like this at the top of the window:
```
> 
```

2. Type `Python: Select Interpreter` in the command palette. As you type, you will see a list of options appear. Select `Python: Select Interpreter` from the list. The prompt will look like this:
```
> Python: Select Interpreter
```

3. After selecting `Python: Select Interpreter`, you will see a list of available Python interpreters. Look for the interpreter you just created. It should be named something like `Python 3.13.1 ('mi')`.

4. Select the appropriate interpreter for your OS.

5. Once selected, you should see the interpreter path at the bottom left corner of VS Code, indicating that it is now using the specified Python environment for your project.

By following these steps, you ensure that VS Code uses the correct Python interpreter, which is essential for running your code and managing dependencies correctly.


## Setting Up GitHub Copilot in VS Code (Optional)

```{admonition} Free GitHub Education Pack
:class: tip
Student and staff can register the [GitHub Education Pack](https://education.github.com/pack) by verifying your educational email addresses and get free access to features such as unlimited private repositories and [Copilot](https://github.com/features/copilot). Copilot is very powerful.
```

```{admonition} University Policy on AI
:class: danger
Please read and understand the University Policy on AI before using AI tools. You can find the policy [here](https://libguides.nus.edu.sg/new2nus/acadintegrity).
```
GitHub Copilot is an AI-powered code completion tool that helps you write code faster and with fewer errors. Here's how you can set it up in Visual Studio Code:

### Step-by-Step Guide to Set Up GitHub Copilot

1. **Install the GitHub Copilot Extension**:
    - Open Visual Studio Code.
    - Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl/Command+Shift+X`.
    - In the search bar, type `GitHub Copilot`.
    - Click on the `GitHub Copilot` extension from the list and then click the `Install` button.

2. **Sign In to GitHub**:
    - After installing the extension, you will need to sign in to your GitHub account.
    - Click on the `Sign in to GitHub` button that appears in the notification or go to the Accounts view and sign in from there.
    - Follow the prompts to authorize Visual Studio Code to access your GitHub account.

3. **Enable GitHub Copilot**:
    - Once signed in, GitHub Copilot should be enabled automatically.
    - You can check if it is enabled by looking for the Copilot icon in the status bar at the bottom of the VS Code window.

### Using GitHub Copilot

- **Code Suggestions**:
  - As you type, GitHub Copilot will provide code suggestions. These suggestions appear as grayed-out text.
  - To accept a suggestion, press `Tab`. To see more suggestions, press `Ctrl/Command+Space`.

- **Inline Code Completions**:
  - GitHub Copilot can complete entire lines or blocks of code based on the context of your current file.
  - Start typing a comment or a function, and Copilot will suggest the rest of the code.

- **Documentation and Examples**:
  - You can ask GitHub Copilot to provide documentation or examples by typing a comment describing what you need.
  - For example, typing `// example of a function to calculate factorial` will prompt Copilot to generate a relevant code snippet.

### Tips for Effective Use

- **Context Matters**: The more context you provide, the better the suggestions. Including comments and descriptive variable names can help Copilot understand what you need.
- **Iterate and Refine**: Use the suggestions as a starting point. You can always modify the generated code to better fit your needs.
- **Explore Settings**: You can customize GitHub Copilot settings by going to the settings menu in VS Code and searching for `Copilot`.
