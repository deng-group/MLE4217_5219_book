# Practical: Version Control System

## 1. Open VSCode
Launch Visual Studio Code on your computer.

## 2. Open a Folder
Click on `File` > `Open Folder...` and select the folder you want to work with.

## 3. Initialize a Git Repository
Open the integrated terminal in VSCode by clicking on `Terminal` > `New Terminal`. In the terminal, run:
```sh
git init
```

## 4. Configure Git
Set your Git username and email by running the following commands in the terminal:
```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 5. Stage Your Changes
Go to the Source Control view by clicking on the Source Control icon in the Activity Bar on the side of the window. Click on the `+` icon next to the files you want to stage.

## 6. Commit Your Changes
After staging your changes, enter a commit message in the message box at the top and click the checkmark icon to commit.

## 7. Connect to a Remote Repository
To connect to a remote repository, run the following command in the terminal:
```sh
git remote add origin <remote-repository-URL>
```

## 8. Push Your Changes
Push your committed changes to the remote repository by running:
```sh
git push -u origin master
```

## 9. Pull Changes from Remote
To pull changes from the remote repository, click on the `...` icon in the Source Control view and select `Pull`.

## 10. View Git History
You can view the Git history by installing the Git History extension. Go to the Extensions view, search for `Git History`, and install it. Then, you can view the history by right-clicking on a file and selecting `Git: View File History`.

## 11. Resolve Merge Conflicts
If you encounter merge conflicts, VSCode will highlight the conflicts in the editor. Use the provided options to resolve the conflicts and then commit the changes.

That's it! You are now ready to use Git with VSCode.