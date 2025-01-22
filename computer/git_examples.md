# Practical: Version Control System

In this practical, you will gain hands-on experience with Git, a powerful version control system, and learn how to integrate it with Visual Studio Code (VS Code). Both VS Code and equivalent command-line instructions are provided for each step. By the end of this practical, you will be able to:

- Initialize a Git repository
- Configure Git with your username and email
- Commit and push changes to a remote repository
- Pull changes from a remote repository
- Clone a remote repository
- Create and switch branches
- Resolve merge conflicts
- View Git history

These skills will help you manage your project files efficiently and collaborate effectively with others.

```{admonition} Git, Github, and VS Code
:class: info
For more information about Git or GitHub, please read [here](../orientation/github.md#git-and-github). Make sure you have [installed VS Code and Git](../orientation/setup.md#visual-studio-code-vs-code) on your computer.
```

## Open VS Code
- Launch Visual Studio Code on your computer.
- Click on `File` in the top menu.
- Select `Open Folder...`.
- Navigate to and select the folder you want to work with. For example, you can create a new folder on your desktop named `MLE5219` and then open it.

## Initialize a Git Repository
You can initialize a Git repository for the folder `MLE5219` in VS Code or using the command line.
````{tab-set}
```{tab-item} VS Code
- Go to the Source Control view by clicking on the Source Control icon in the Activity Bar on the side of the window.
- Click on `Initialize Repository`.
```

```{tab-item} Command Line
- Open your terminal.
- Navigate to your project directory using `cd` command.
- Run the following command:
    ```sh
    git init
    ```
```
````

## Configure Git Username and Email
If it is your first time using Git, you need to configure your username and email address. This information will be used to identify your commits.
````{tab-set}
```{tab-item} VS Code
- Open the terminal in VS Code:
    - Click on `Terminal` in the top menu.
    - Select `New Terminal`.
- Run the following commands:
    ```sh
    git config --global user.name "Your Name"
    git config --global user.email "your.email@example.com"
    ```
```

```{tab-item} Command Line
- Open your terminal.
- Run the following commands:
    ```sh
    git config --global user.name "Your Name"
    git config --global user.email "your.email@example.com"
    ```
```
````

## Commit and Push Changes
After making changes to your project files, you need to commit and push the changes to the remote repository. You can do this in VS Code or using the command line. For example, we can create a new file named `README.md` in the `MLE5219` folder.

### Example: Adding a `README.md` File

- In the Explorer view, click on the `New File` icon.
- Name the file `README.md`.
- Add some content to the file, for example:
    ```markdown
    # MLE5219 Project
    This is the README file for the MLE5219 project.
    ```
- Save the file.

### Stage Your Changes
After you have made changes to your files, you need to stage the changes before committing them. Staged changes mean that you have marked the files to be included in the next commit. You can also just commit all changes at once, see the next step.

````{tab-set}
```{tab-item} VS Code
- In the Source Control view, click on the `+` icon next to the files you want to stage.
```

```{tab-item} Command Line
- Open your terminal.
- Run the following command to stage your changes:
    ```sh
    git add .
    ```
```
````

### Commit Your Changes
Then, you need to commit your changes with a commit message. A commit message is a brief description of the changes you have made.

```{admonition} Commit Message
:class: tip
A commit message should be concise and descriptive. It should explain what changes were made in the commit. You can use Copilot in VS Code to generate commit messages.
```

````{tab-set}
```{tab-item} VS Code
- After staging your changes, enter a commit message in the message box at the top.
- Click the checkmark icon to commit.
```

```{tab-item} Command Line
- Open your terminal.
- Run the following command to commit your changes:
    ```sh
    git commit -m "Your commit message"
    ```
```
````

### Connect to a Remote Repository
After committing your changes, you need to connect your local repository to a remote repository. You can do this in VS Code or using the command line. Here we will use a GitHub repository as remote. A remote repository URL on GitHub looks like `https://github.com/user/repo.git`.

If you don't have a remote repository, you can either create one on GitHub and then connect your local repository to it or use VS Code to publish as a new repository to GitHub.

````{tab-set}
```{tab-item} VS Code
- Click on the `...` icon in the Source Control view.
- Select `Remote` > `Add Remote`.
- Enter the remote repository URL.
```

```{tab-item} Command Line
- Open your terminal.
- Run the following command to add a remote repository:
    ```sh
    git remote add origin <remote-repository-URL>
    ```
```
````

### Push Your Changes
After connecting to a remote repository, you can push your changes to the remote repository.

````{tab-set}
```{tab-item} VS Code
You can just click the `Sync changes` in the Source Control panel to push your changes if you've commited all changes.

Or you can follow these steps:
- Click on the `...` icon in the Source Control view.
- Select `Push`.
```

```{tab-item} Command Line
- Open your terminal.
- Run the following command to push your changes:
    ```sh
    git push -u origin main
    ```
```
````

### Pull Changes from Remote
If you are working with others on the same project, you may need to pull changes from the remote repository.

````{tab-set}
```{tab-item} VS Code
- Click on the `...` icon in the Source Control view.
- Select `Pull`.
```

```{tab-item} Command Line
- Open your terminal.
- Run the following command to pull changes:
    ```sh
    git pull
    ```
```
````

## Clone a Remote Repository
If you want to work on an existing project, you can clone a remote repository to your local machine. You can do this in VS Code or using the command line.
````{tab-set}
```{tab-item} VS Code
- Open the Source Control view.
- Click Clone Repository.
- Enter the remote repository URL.
- Choose a folder to clone the repository into.
```

```{tab-item} Command Line
- Open your terminal.
- Navigate to the directory where you want to clone the repository using the `cd` command.
- Run the following command:
    ```sh
    git clone <remote-repository-URL>
    ```
```
````

After cloning the repository, you can open it in VS Code and start working on it.


## Create and Switch Branches
Branches are used to work on different features or versions of a project. You can create and switch branches in VS Code or using the command line.

### Create a New Branch
Your current branch is usually `main` or `master`. First we will create a new branch named `development`. On VS Code, you can see the current branch name in the bottom left corner of the window. 

````{tab-set}
```{tab-item} VS Code
- Click on the branch name in the bottom left corner of the window.
- Select `Create new branch`.
- Enter the new branch name, here we use `development`.
```

```{tab-item} Command Line
- Open your terminal.
- Run the following command to create a new branch, here we use `development`:
    ```sh
    git checkout -b development
    ```
```
````

### Switch Branches
You can switch between branches to work on different features or versions of a project. In VS Code, you can change the branch by clicking on the branch name in the bottom left corner of the window.

````{tab-set}
```{tab-item} VS Code
- Click on the branch name in the bottom left corner of the window.
- Select the branch you want to switch to.
```

```{tab-item} Command Line
- Open your terminal.
- Run the following command to switch branches:
    ```sh
    git checkout branch-name
    ```
```
````
### Merge Branches
After working on different branches, you may need to merge the changes from one branch to another. You can merge branches in VS Code or using the command line. Make sure you are currently on the branch you want to merge into.

````{tab-set}
```{tab-item} VS Code
- Click on the branch name in the bottom left corner of the window.
- Select the branch you want to merge into.
- Click on the `...` icon next to the branch name.
- Select `Pull from...`.
- Choose the branch you want to pull changes from.
```

```{tab-item} Command Line
- Open your terminal.
- Run the following command to pull changes from another branch:
    ```sh
    git pull origin branch-name
    ```
```
````
### Comparison Between `git pull`, `git rebase`, and `git merge` when Working with Branches

When working with branches in Git, you have several options to integrate changes from one branch into another. The three most common commands are `git pull`, `git rebase`, and `git merge`. Each command has its own use case and behavior.

| Command      | Usage                          | Pros                                      | Cons                                      | When to Use                              |
|--------------|--------------------------------|-------------------------------------------|-------------------------------------------|------------------------------------------|
| `git pull`   | `git pull origin branch-name`  | Simple and straightforward                | Can create unnecessary merge commits      | Quickly update your branch with changes from a remote repository |
|              |                                | Automatically fetches and merges changes  | May lead to a cluttered commit history    |                                          |
| `git rebase` | `git rebase branch-name`       | Creates a cleaner, linear commit history  | More complex and risky, especially with conflicts | When you want a clean, linear commit history and are comfortable resolving conflicts |
|              |                                | Easier to follow project history          | Rewriting commit history can cause issues |                                          |
| `git merge`  | `git merge branch-name`        | Preserves complete history of changes     | Can create a cluttered commit history     | When you want to preserve the history of both branches and understand the context of changes |
|              |                                | Easier to understand context of changes   | May require resolving merge conflicts     |                                          |

Choosing the right command depends on your workflow and the project's requirements. Understanding the differences and use cases will help you manage your branches more effectively.


## Resolve Merge Conflicts
When you merge branches with conflicting changes, you may encounter merge conflicts. Merge conflicts occur when Git cannot automatically merge the changes and requires manual intervention to resolve the conflicts. You can resolve merge conflicts in VS Code or using the command line.

### Example of Resolving a Conflict
Here we will create a conflict by making changes to the same line in two different branches. Then we will merge the branches and resolve the conflict. Previously we have created the `development` branch. Now we will create a new branch named `feature` and make changes to the `README.md` file.

Add the following content to the `README.md` file in the `feature` branch:
```markdown
# MLE5219 Project
This is the README file for the MLE5219 project.
This is a new feature added to the README file.
```

Then commit and push the changes to the `feature` branch. Now switch to the `development` branch and make changes to the `README.md` file:
```markdown
# MLE5219 Project
This is the README file for the MLE5219 project.
This is a new feature added to the README file in the development branch.
```

Commit and push the changes to the `development` branch. Now merge the `feature` branch into the `development` branch. You will see a conflict in the `README.md` file. Resolve the conflict by choosing the appropriate changes and commit the resolved file.

````{tab-set}
```{tab-item} VS Code
- Merge the branches:
    - Click on the branch name in the bottom left corner of the window.
    - Select the branch you want to merge into. Here we use `development`.
    - Click on the `...` icon next to the branch name.
    - Select `Pull from...`.
    - Choose the branch you want to pull changes from. Here we use `feature`.
- VS Code will show the conflicts in the editor.
- Choose the appropriate option to resolve the conflict:
    - Accept Current Change
    - Accept Incoming Change
    - Accept Both Changes
    - Compare Changes
- After resolving the conflicts, stage the resolved files.
- Commit the changes.
```

```{tab-item} Command Line
- Merge the branches:
    ```sh
    git pull origin feature
    ```
- Open the conflicting files in your editor.
- Manually resolve the conflicts.
- Stage the resolved files:
    ```sh
    git add .
    ```
- Commit the changes:
    ```sh
    git commit -m "Resolved merge conflicts"
    ```
```
````

## View Git History
You can view the history of commits and changes in your Git repository. You can do this in VS Code or using the command line.

````{tab-set}
```{tab-item} VS Code
- Install the Git Graph extension:
    - Go to the Extensions view.
    - Search for `Git History`.
    - Install the extension.
- View the history:
    - Right-click on a file.
    - Select `Git: View File History`.
```

```{tab-item} Command Line
- Open your terminal.
- Run the following command to view the git log:
    ```sh
    git log
    ```
- If you want to see a more detailed log, you can use:
    ```sh
    git log --oneline --graph --all
    ```
```
````

```{admonition} Git Graph Extension
:class: tip
It is also recommended to install the Git Graph extension to see commit and logs.
```


That's it! You are now ready to use Git with VS Code.
