# Practical: Version Control System
In this practical, you will learn how to use Git with Visual Studio Code (VS Code) to manage your project files and collaborate with others. For more information about Git or GitHub, please read [here](../orientation/github.md#git-and-github).

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
After you have made changes to your files, you need to stage the changes before committing them. Staged changes mean that you have marked the files to be included in the next commit.

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

````{tab-set}
```{tab-item} VS Code
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

## Create and Switch Branches

### Create a New Branch

````{tab-set}
```{tab-item} VS Code
- Click on the branch name in the bottom left corner of the window.
- Select `Create new branch`.
- Enter the new branch name.
```

```{tab-item} Command Line
- Open your terminal.
- Run the following command to create a new branch:
    ```sh
    git checkout -b new-branch-name
    ```
```
````

### Switch Branches

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

## View Git History

````{tab-set}
```{tab-item} VS Code
- Install the Git History extension:
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
```
````

```{admonition} Git Graph Extension
:class: tip
It is recommended to install the Git Graph extension to see commit and logs.
```

## Resolve Merge Conflicts

````{tab-set}
```{tab-item} VS Code
- If you encounter merge conflicts, VS Code will highlight the conflicts in the editor.
- Use the provided options to resolve the conflicts.
- Stage the resolved files.
- Commit the changes.
```

```{tab-item} Command Line
- Open your terminal.
- Run the following command to merge branches:
    ```sh
    git merge branch-name
    ```
- If there are conflicts, open the conflicting files in your editor.
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

### Example of Resolving a Conflict

````{tab-set}
```{tab-item} VS Code
- Make conflicting changes in two branches.
- Merge the branches:
    ```sh
    git merge branch-name
    ```
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
- Make conflicting changes in two branches.
- Merge the branches:
    ```sh
    git merge branch-name
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

That's it! You are now ready to use Git with VS Code.
