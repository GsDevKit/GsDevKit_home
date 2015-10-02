# Configuring Windows to run GsDevKit

GsDevKit clients are supported on Windows.  You will also need to have a Linux or Mac, or a VM running 
one of these platforms, to install the GsDevKit server.

The installation of GitHub on windows provides a shell environment that can be used to run the DevKit tODE client.


1. Download and install *GitHub for Windows* by following the instructions on the [GitHub for Windows][1] page.

2. In *GitHub for Windows*, go to the *Options page* and set your default shell to **Git Bash**.

3. Close the *Github for Windows* window and open a **Git Bash** shell window by clicking on the *Git Shell* icon on your desktop.

4. [Git on Windows is senstitive to path length][2].  

execute the following:

```
git config --global core.longpaths true   
```

In addition, we recommend that the client be installed in the root directory of the user's directory.  
You may install elsewhere, but longer paths may create problems for some tODE operations. 

---
  
[1]: https://windows.github.com/
[2]:  https://github.com/git-for-windows/git/wiki/Git-cannot-create-a-file-or-directory-with-a-long-path
