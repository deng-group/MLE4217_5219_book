# * Setup Programming Environment (local)
```{admonition} Vanda
:class: info
We can access Vanda machine provided by the NUS HPC for free. You can follow the [Vanda setup instruction](setup_hpc.md) to set up your programming environment on Vanda.
```
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

```{admonition} (For macOS only) Terminal app
:class: info
To open Terminal on macOS, press `Cmd+Space` to open Spotlight Search, type `Terminal`, and press `Enter`.
```

4. (**For Windows only**) Install [Visual Studio C++ build tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/). **This will download a few GB data. You can do this after you go home!**

```{admonition} (For Windows only) Install Visual Studio C++ build tools 
:class: tip
1. Visit the [Visual Studio C++ build tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) website.
2. Click on the "Download Visual Studio" button.
3. Run the downloaded installer and follow the on-screen instructions.
4. Select the "Desktop development with C++" workload during installation.
5. Make sure to install the "MSVC v142 - VS 2019 C++ x64/x86 build tools" or other higher version component.
6. After installation, restart your computer to apply the changes.
```

```{admonition} (For Windows only) If **spglib** installation failed
:class: warning
If you encountered an error during the installation of the `pymatgen` package, complaining some error about the `spglib`, you may need to install the Visual Studio C++ build tools. This package is a dependency of `pymatgen`. Follow the instructions above to install the Visual Studio C++ build tools, and then try installing the `spglib` package again.

You might also need to open the Anaconda Prompt in administrator mode to try to install the `spglib` package successfully. To do this, right-click on the Anaconda Prompt shortcut and select "Run as administrator." Then, try installing the `spglib` package using `pip install spglib`.
```


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
If you're editing any Python code (file ends with `.py`), you should select your Python interpreter for your project in VS Code. Make sure you [installed the Python extension in VS Code](setup.md#visual-studio-code-vs-code). Here's how you can do it:


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
