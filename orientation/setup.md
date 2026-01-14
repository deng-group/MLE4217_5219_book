# VS Code
```{admonition} Vanda
:class: warning
Make sure you have completed the HPC access setup in [HPC Access Setup](vanda.md) before proceeding.
```

We will use VS Code as our main code editor throughout this course. Python will be the main programming language used in this course. In previous section, we have connected to Vanda cluster and launched VS Code via OnDemand.Please follow the instructions below to set up your programming environment.


## Create a course directory
It's a good practice to create a dedicated directory for your course work. By default, you will be in your home directory when you log in. You can create a new directory by clicking the new folder icon in the file explorer on the left side of `VS Code` and then name it to something like `MLE4217_5219`. 

## Open a directory
Then you should open this directory in VS Code by clicking on `File` > `Open Folder...` and selecting the folder you just created.

## Install Python and Jupyter extensions in VS Code
To work with Python and Jupyter notebooks in VS Code, you need to install the following extensions:
1. Open the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
2. In the search bar, type `Python` and install the extension named `Python` by Microsoft.
3. Similarly, search for `Jupyter` and install the extension named `Jupyter` by Microsoft.

## Creating Python Virtual Environments
A virtual environment is a self-contained directory that contains a Python installation for a particular version of Python, plus a number of additional packages. This allows you to work on a specific project without affecting other projects or your system Python installation.

To create a virtual environment for this course, press `Ctrl/Command+Shift+P` to open the command palette in VS Code, you will see a prompt like this at the top of the window:
```
> 
```
Then type `Python: Create Environment` and select it. Then choose `Venv` as the environment type, and select the base Python interpreter. Then it will create a folder `.venv` in your current directory. When you create a new Python file or Jupyter notebook, VS Code will automatically detect and use this virtual environment.

```{admonition} Virtual Environment Management
:class: tip
There are many ways to create virtual environments in Python. Here we use `venv` which is included in the standard library. You can also use other tools such as `conda` or `uv` or `virtualenv` if you prefer. `uv` is highly reommended for its simplicity and speed. However, it is not included in this course. You can find more details about virtual environment management in the [official Python documentation](https://docs.python.org/3/tutorial/venv.html) and more details about uv [here](https://docs.astral.sh/uv/).
```

## Select Interpreter
If you're editing any Python code (file ends with `.py`), you should select your Python interpreter for your project in VS Code. Make sure you [installed the Python extension in VS Code](setup.md#visual-studio-code-vs-code). Here's how you can do it:


1. Open VS Code and press `Ctrl/Command+Shift+P` to open the command palette. 
2. Type `Python: Select Interpreter` in the command palette. As you type, you will see a list of options appear. Select `Python: Select Interpreter` from the list. The prompt will look like this:
```
> Python: Select Interpreter
```

3. After selecting `Python: Select Interpreter`, you will see a list of available Python interpreters. Look for the interpreter you just created. It should be named something like `Python 3.9.18 ('./.venv/bin/python')`.
4. Select the appropriate interpreter.
5. Once selected, you should see the interpreter path at the bottom left corner of VS Code, indicating that it is now using the specified Python environment for your project.

By following these steps, you ensure that VS Code uses the correct Python interpreter, which is essential for running your code and managing dependencies correctly.

```{admonition} Activate and Deactivate Virtual Environment in Terminal
:class: tip
When you open a new terminal in VS Code, the virtual environment should be activated automatically. You can tell if the virtual environment is active by looking at the terminal prompt, which should show the name of your virtual environment, e.g., `(.venv)`. However, if you open a terminal outside of VS Code or if the virtual environment is not activated for some reason, you can manually activate it by running the following command in the terminal `source activate .venv/bin/activate` (Linux/Mac) or `.venv\Scripts\activate` (Windows). To deactivate the virtual environment, simply run the command `deactivate`.
```

## Install Required Python Packages
Python packages are libraries that provide additional functionality for Python. In this course we will use `pip` to manage Python packages. When installing packages, make sure your virtual environment is activated. You can check this by looking at the terminal prompt, which should show the name of your virtual environment, e.g., `(.venv)`.

The command to install packages is:
```bash
pip install package_name
```

You need to install some Python packages that we will use in this course. You can do this by opening a terminal in VS Code (`Terminal` > `New Terminal`) and running the following commands:
```bash
pip install numpy matplotlib pandas jupyter pymatgen ase dscribe mace-torch asap3 atomate2
```

## Upload and Download Files via VS Code
You can easily upload and download files between your local machine and the Vanda cluster using the built-in file explorer in VS Code. For download, just right-click on the folder or file you want to download and select the appropriate option. For uploading files from your local machine to Vanda, you can also simply drag and drop files into the file explorer in VS Code.

## *Setting Up GitHub Copilot in VS Code
```{admonition} Use GenAI in This Course
:class: info
We highly encourage you to use AI tools such as GitHub Copilot to assist your coding and learning in this course. These AI tools can help you write code faster, understand complex concepts, and improve your overall programming skills. However, please remember to use these tools responsibly and ensure that you understand the code generated by AI. Always review and test the code to ensure its correctness and suitability for your specific use case.
```

```{admonition} Free GitHub Education Pack
:class: tip
Student and staff can register the [GitHub Education Pack](https://education.github.com/pack) by verifying your educational email addresses and get free access to features such as unlimited private repositories and [Copilot](https://github.com/features/copilot). Copilot is very powerful.
```

```{admonition} University Policy on AI
:class: danger
Please read and understand the University Policy on AI before using AI tools. You can find the policy [here](https://libguides.nus.edu.sg/new2nus/acadintegrity).
```
GitHub Copilot is an AI-powered code completion tool that helps you write code faster and with fewer errors. Here's how you can set it up in Visual Studio Code:

### Set Up GitHub Copilot

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

```{admonition}  AI Agents and Model Context Protocol (MCP) Server
:class: tip
AI agents can significantly enhance your coding productivity. Agents makes AI tools to work on your behalf by understanding your intent and performing tasks for you. You can use Agent tools for free via GitHub Copilot.

To reduce hallucination, consider using a Model Context Protocol (MCP) server. MCP servers provide relevant context to AI models, helping them generate more accurate and useful code suggestions. You can use free MCP servers such as [Context7](https://context7.com/) or set up your own MCP server. You can use their website or connect the API keys to your VS Code Copilot. You can find more information about MCP [here](https://modelcontextprotocol.io/docs/getting-started/intro)
```