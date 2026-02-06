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
pip install -r requirements.txt
```
You should create a `requirements.txt` file in your course directory with the following content:

```{admonition} requirements.txt for x86/64 architcture
:class: info, dropdown
aioitertools==0.13.0
annotated-types==0.7.0
anyio==4.12.1
argon2-cffi==25.1.0
argon2-cffi-bindings==25.1.0
arrow==1.4.0
asap3==3.13.10
ase==3.26.0
asttokens==3.0.1
async-lru==2.0.5
atomate2==0.0.16
attrs==25.4.0
babel==2.17.0
bcrypt==5.0.0
beautifulsoup4==4.14.3
bleach==6.2.0
boto3==1.42.27
botocore==1.42.27
certifi==2026.1.4
cffi==2.0.0
charset-normalizer==3.4.4
click==8.1.8
comm==0.2.3
ConfigArgParse==1.7.1
contourpy==1.3.0
cryptography==46.0.3
custodian==2024.6.24
cycler==0.12.1
debugpy==1.8.19
decorator==5.2.1
defusedxml==0.7.1
dnspython==2.7.0
dscribe==2.1.2
e3nn==0.4.4
emmet-core==0.84.3rc0
exceptiongroup==1.3.1
executing==2.2.1
fastjsonschema==2.21.2
filelock==3.19.1
fonttools==4.60.2
fqdn==1.5.1
fsspec==2025.10.0
gitdb==4.0.12
GitPython==3.1.46
h11==0.16.0
h5py==3.14.0
httpcore==1.0.9
httpx==0.28.1
idna==3.11
importlib_metadata==8.7.1
importlib_resources==6.5.2
invoke==2.2.1
ipykernel==6.31.0
ipython==8.18.1
ipywidgets==8.1.8
isoduration==20.11.0
jedi==0.19.2
Jinja2==3.1.6
jmespath==1.0.1
jobflow==0.1.19
joblib==1.5.3
json5==0.13.0
jsonlines==4.0.0
jsonpointer==3.0.0
jsonschema==4.25.1
jsonschema-specifications==2025.9.1
jupyter==1.1.1
jupyter-console==6.6.3
jupyter-events==0.12.0
jupyter-lsp==2.3.0
jupyter_client==8.6.3
jupyter_core==5.8.1
jupyter_server==2.17.0
jupyter_server_terminals==0.5.3
jupyterlab==4.5.2
jupyterlab_pygments==0.3.0
jupyterlab_server==2.28.0
jupyterlab_widgets==3.0.16
kiwisolver==1.4.7
lark==1.3.1
latexcodec==3.0.1
lightning-utilities==0.15.2
line_profiler==5.0.0
llvmlite==0.43.0
lmdb==1.7.5
mace-torch==0.3.14
maggma==0.72.0
MarkupSafe==3.0.3
matplotlib==3.9.4
matplotlib-inline==0.2.1
matscipy==1.1.1
mistune==3.2.0
mongomock==4.3.0
monty==2025.3.3
mp-api==0.43.0
mpmath==1.3.0
msgpack==1.1.2
narwhals==2.15.0
nbclient==0.10.2
nbconvert==7.16.6
nbformat==5.10.4
nest-asyncio==1.6.0
networkx==3.2.1
notebook==7.5.2
notebook_shim==0.2.4
numba==0.60.0
numpy==1.26.4
nvidia-cublas-cu12==12.8.4.1
nvidia-cuda-cupti-cu12==12.8.90
nvidia-cuda-nvrtc-cu12==12.8.93
nvidia-cuda-runtime-cu12==12.8.90
nvidia-cudnn-cu12==9.10.2.21
nvidia-cufft-cu12==11.3.3.83
nvidia-cufile-cu12==1.13.1.3
nvidia-curand-cu12==10.3.9.90
nvidia-cusolver-cu12==11.7.3.90
nvidia-cusparse-cu12==12.5.8.93
nvidia-cusparselt-cu12==0.7.1
nvidia-nccl-cu12==2.27.3
nvidia-nvjitlink-cu12==12.8.93
nvidia-nvtx-cu12==12.8.90
opt-einsum-fx==0.1.4
opt_einsum==3.4.0
orjson==3.11.5
overrides==7.7.0
packaging==25.0
palettable==3.3.3
pandas==2.3.3
pandocfilters==1.5.1
paramiko==4.0.0
parso==0.8.5
pexpect==4.9.0
pillow==11.3.0
platformdirs==4.4.0
plotly==6.5.1
prettytable==3.16.0
prometheus_client==0.24.0
prompt_toolkit==3.0.52
psutil==7.2.1
ptyprocess==0.7.0
pure_eval==0.2.3
pybtex==0.25.1
pycparser==2.23
pydantic==2.12.5
pydantic-settings==2.11.0
pydantic_core==2.41.5
pydash==8.0.5
Pygments==2.19.2
pymatgen==2024.8.9
pymongo==4.10.1
PyNaCl==1.6.2
pyparsing==3.3.1
python-dateutil==2.9.0.post0
python-dotenv==1.2.1
python-json-logger==4.0.0
python_hostlist==2.3.0
pytz==2025.2
PyYAML==6.0.3
pyzmq==27.1.0
referencing==0.36.2
requests==2.32.5
rfc3339-validator==0.1.4
rfc3986-validator==0.1.1
rfc3987-syntax==1.1.0
rpds-py==0.27.1
ruamel.yaml==0.19.1
s3transfer==0.16.0
scikit-learn==1.6.1
scipy==1.13.1
Send2Trash==2.0.0
sentinels==1.1.1
six==1.17.0
smart_open==7.5.0
smmap==5.0.2
soupsieve==2.8.1
sparse==0.15.5
spglib==2.7.0
sshtunnel==0.4.0
stack-data==0.6.3
sympy==1.14.0
tabulate==0.9.0
terminado==0.18.1
threadpoolctl==3.6.0
tinycss2==1.4.0
tomli==2.4.0
torch==2.8.0
torch-ema==0.3
torchmetrics==1.8.2
tornado==6.5.4
tqdm==4.67.1
traitlets==5.14.3
triton==3.4.0
typing-inspection==0.4.2
typing_extensions==4.15.0
tzdata==2025.3
uncertainties==3.2.4
uri-template==1.3.0
urllib3==1.26.20
wcwidth==0.2.14
webcolors==24.11.1
webencodings==0.5.1
websocket-client==1.9.0
widgetsnbextension==4.0.15
wrapt==2.1.1
zipp==3.23.0
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

1. Install the GitHub Copilot Extension:
    - Open Visual Studio Code.
    - Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl/Command+Shift+X`.
    - In the search bar, type `GitHub Copilot`.
    - Click on the `GitHub Copilot` extension from the list and then click the `Install` button.

2. Sign In to GitHub:
    - After installing the extension, you will need to sign in to your GitHub account.
    - Click on the `Sign in to GitHub` button that appears in the notification or go to the Accounts view and sign in from there.
    - Follow the prompts to authorize Visual Studio Code to access your GitHub account.

3. Enable GitHub Copilot:
    - Once signed in, GitHub Copilot should be enabled automatically.
    - You can check if it is enabled by looking for the Copilot icon in the status bar at the bottom of the VS Code window.

### Using GitHub Copilot

- Code Suggestions:
  - As you type, GitHub Copilot will provide code suggestions. These suggestions appear as grayed-out text.
  - To accept a suggestion, press `Tab`. To see more suggestions, press `Ctrl/Command+Space`.

- Inline Code Completions:
  - GitHub Copilot can complete entire lines or blocks of code based on the context of your current file.
  - Start typing a comment or a function, and Copilot will suggest the rest of the code.

- Documentation and Examples:
  - You can ask GitHub Copilot to provide documentation or examples by typing a comment describing what you need.
  - For example, typing `// example of a function to calculate factorial` will prompt Copilot to generate a relevant code snippet.

```{admonition}  AI Agents and Model Context Protocol (MCP) Server
:class: tip
AI agents can significantly enhance your coding productivity. Agents makes AI tools to work on your behalf by understanding your intent and performing tasks for you. You can use Agent tools for free via GitHub Copilot.

To reduce hallucination, consider using a Model Context Protocol (MCP) server. MCP servers provide relevant context to AI models, helping them generate more accurate and useful code suggestions. You can use free MCP servers such as [Context7](https://context7.com/) or set up your own MCP server. You can use their website or connect the API keys to your VS Code Copilot. You can find more information about MCP [here](https://modelcontextprotocol.io/docs/getting-started/intro)
```