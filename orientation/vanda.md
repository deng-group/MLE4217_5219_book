# HPC Tutorial

```{admonition} Vanda User Guide
:class: info
You can find the official user guide for Vanda HPC cluster [here](https://tinyurl.com/596ascu3).
```
Vanda is one of the HPC clusters provided by NUS IT. It is suitable for a wide range of computational tasks and is accessible to all NUS students and staff with an HPC account. This guide will help you set up and verify your access to the NUS HPC cluster Vanda, which we will use for computational tasks in this course. We will utilize the OnDemand web portal for ease of use.

```{admonition} OnDemand
:class: info
OnDemand is a web-based portal that provides an easy-to-use interface for accessing HPC resources without needing to use command-line tools. It allows you to run jobs, manage files, and use interactive applications directly from your web browser.
```

## First Time Setup
1. [Register your NUS HPC account](https://nusit.nus.edu.sg/hpc/get-an-hpc-account/) (if not already done)
2. Activate account settings on Vanda via `SSH` (one time only):
    - Use Terminal, PuTTY, or MobaXterm on macOS/Windows to connect to `vanda.nus.edu.sg`; e.g. `ssh USERNAME@vanda.nus.edu.sg` where `USERNAME` is your `NUSNETID`.
    - Enter your `NUSNETID` password when prompted (note: no characters will be shown while typing)
    - This initializes your account on the cluster
3. Read the [introductory guide for new HPC users](https://nusit.nus.edu.sg/hpc/introductory-guide-for-new-hpc-users/)

### For Ongoing Use
- Log in via the web portal: [https://vanda.nus.edu.sg](https://vanda.nus.edu.sg)
- SSH access remains available anytime for job submission: `ssh USERNAME@vanda.nus.edu.sg`
- For questions or problems, visit the [HPC support page](https://nusit.nus.edu.sg/hpc/contact-us-ntouch/)
- Please review and comply with the HPC Code of Conduct

## How to Access Vanda
- NUS VPN must be installed and connected when off-campus. `eduroam` WiFi is not working for HPC access, you need to connect to `NUS` or `NUS-STU` WiFi on campus to access `Vanda` without VPN. You can find more information about the how to install and use NUS VPN [here](https://nusit.nus.edu.sg/services/wifi_internet/nvpn/).
- Valid `NUSNETID` with HPC account registered
And any of the following:
- Modern web browser (Chrome, Firefox, Edge, Safari) for OnDemand portal access
- SSH client (Terminal on Mac/Linux and Windows) if you want to connect via command line

## Open VS Code via OnDemand
We need to start a `VS Code Server` session on Vanda via OnDemand portal and then connect it remotely. Here are the steps to do so:
1. Open your web browser and go to the OnDemand portal: [https://vanda.nus.edu.sg/](https://vanda.nus.edu.sg/)
2. Log in using your `NUSNETID` and password if prompted.
3. Once logged in, you will see the OnDemand dashboard where you can access various tools and resources.
4. To use Visual Studio Code, click on the `Code Server` icon in the dashboard.
5. You need to set how many hours you want your session to last. Choose an appropriate duration based on your needs. You can also setup your working directory if needed (default is your home directory).
6. Click "Launch" to start your Visual Studio Code session.
7. After a few moments, you can click `Connect to VS Code`. This will open Visual Studio Code in a new browser tab.

There are also other Apps available such as: `Jupyter Notebook`, `R Studio Server`, `Matlab` etc. You can find the list [here](https://vanda.nus.edu.sg/pun/sys/dashboard/apps/index).

```{admonition} What's Happened in the Background
:class: tip
On `Vanda`, jobs are managed by a job scheduler called PBS (Portable Batch System). When you launch a `Code Server` session, OnDemand submits a job to the scheduler to allocate resources for your session. Once the job is scheduled and resources are allocated, you can connect to the compute node where your Visual Studio Code session is running. When you end your session, the job is terminated, and the resources are released back to the cluster.
```

## Interactive Sessions
If you close your browser or tab, your session will continue to run on the cluster until the specified time limit is reached. You can always see your active sessions in the OnDemand dashboard under `My Interactive Sessions`.

```{admonition} Login and Compute Node
:class: tip
There are two types of nodes in `Vanda` and other HPC clusters: login nodes and compute nodes. Login nodes are used for accessing the cluster, managing files, and submitting jobs. Compute nodes are where the actual computations take place. When you start a `Code Server` session, you are using a compute node, which is suitable for running code and performing computations. Compute nodes typically have more resources (CPU, memory) compared to login nodes, and they're usually charged in terms of requested resources and usage time. Luckily, we don't need to worry about that in this course as we have 1,000 GPU hours allocated for our class.
```

## Ending Your VS Code Session
Remember to properly end your VS Code session when you're done. You can do this by clicking on the `End Session` button in the OnDemand dashboard. This will free up resources on the cluster and ensure that your work is saved.

## Uploading and Downloading Files
You can upload and download files between your local machine and the Vanda cluster using the OnDemand file manager. To access the file manager, click on the `Home Directory` icon in the OnDemand and navigate to the desired directory. You can then use the upload and download buttons to transfer files. You can also use VS Code's built-in file explorer to manage files directly within your VS Code session, see the [next section](setup.md#upload-and-download-files-via-vs-code) for more details.

## Interactive Shell via OnDemand
If you need to run commands directly on the login node, you can click `Vanda Shell Access` in the OnDemand dashboard. This will open an interactive shell session on a login node, where you can execute commands, manage files, and submit jobs. Interactive shell sessions are free to use, but remember that login nodes are not meant for heavy computations. Always use compute nodes for running your code.

````{admonition} SSH Access (Optional)
:class: tip
If you prefer using command-line tools, you can also access Vanda via SSH. Make sure you have NUS VPN connected if you're off-campus. Open your terminal and run the following command:
```shell
ssh USERNAME@vanda.nus.edu.sg
```
````

## Resource Quota and Usage
When you log in to Vanda, you will be in your home directory (`/home/svu/USERID`) by default. This directory is private to you and has a storage quota (40 GB). You can create subdirectories within your home directory to organize your files. If you need more storage space, you can use the `/scratch` directory, which is intended for temporary files and has a larger quota (500 GB). However, files in the `/scratch/USERID` directory may be deleted after 60 days of inactivity, so make sure to back up important files to your home directory or other storage solutions.

You can use command in the interactive shell to check your disk usage and quota:
```shell
hpc quota
```
You might need to type `amgr login` and type your password first and then run the above command to check your disk usage and quota.

For remaining computing resources, you can check the available resources on Vanda by running:
```shell
hpc project
```

```{admonition} Directory Structure
:class: tip
Understanding the Linux filesystem is essential when working on HPC clusters. Unlike Windows, Linux uses a hierarchical structure starting from the root directory `/`. Key directories include:
- `/` - Root directory
- `/home/svu/USERNAME` - User home directories (your files are here)
- `/tmp` - Temporary files
- `/usr` - User programs and libraries
- `/etc` - System configuration files

When you log into Vanda, you start in your home directory (e.g., `/home/svu/USERNAME`). Use `pwd` to see your current location and `ls` to list directory contents. You only have write permissions in your home directory and any subdirectories you create.
```

```{admonition} Important Note
:class: warning
Do not run heavy computations directly on login nodes. Always use compute nodes for running your code. You can see the prompt in VS Code terminal to confirm you are on a compute node (e.g., `msedz@GN-A40-038`).
```
