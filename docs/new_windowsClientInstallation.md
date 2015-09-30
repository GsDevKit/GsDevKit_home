##tODE Windows Client Installation

1. Download and install *GitHub for Windows* by following the instructions on the [GitHub for Windows][1] page.

2. In *GitHub for Windows*, go to the *Options page* and set your default shell to **Git Bash**.

3. Close the *Github for Windows* window and open a **Git Bash** shell window by clicking on the *Git Shell* icon on your desktop.

4. clone *GsDevKit_home* project following these instructions:

   ```Shell
   cd ~
   git clone https://github.com/GsDevKit/GsDevKit_home.git
   cd gsDevKit_home
   git checkout -b gsdevkit
   export GS_HOME=`pwd`
   export PATH=$GS_HOME/bin:$PATH
   git config --global core.longpaths true   # https://github.com/git-for-windows/git/wiki/Git-cannot-create-a-file-or-directory-with-a-long-path
   $GS_HOME/bin/installGsDevKit -c https -m client 3.2.9 tode
   ```

[1]: https://windows.github.com/

