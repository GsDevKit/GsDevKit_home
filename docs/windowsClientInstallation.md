##tODE Windows Client Installation

1. Download and install *GitHub for Windows* by following the instructions on the [GitHub for Windows][1] page.

2. Using the *GitHub for Windows* interface, clone your fork of the [gsDevKitHome project][2] project.

3. In *GitHub for Windows*, go to the *Options page* and set your default shell to **Git Bash**.

4. Use the *Open in Git Shell* menu item in the `gsDevKitHome` repository to open a bash shell and define the `$GS_HOME` environment variable and add `$GS_HOME/bin` to your `$PATH`:

   ```Shell
   cd gsDevKitHome
   export GS_HOME=`pwd`
   export PATH=$GS_HOME/bin/windows:$PATH
   ```

5. Using the bash shell, clone the [tode][3] and [ston][8] projects to the root of your C: drive. 
   We're manually cloning `tODE` to avoid hitting the 256 character path limit for Windows and rooting the repository at the C: keeps the longest paths in tODE out of trouble. The `ston` project needs to be cloned, because the version of Metacello ppresent in the standard Pharo3.0 image, cannot download projects directly from **GitHub**:

   ```Shell
   cd /c
   git clone https://github.com/dalehenrich/tode.git
   cd tode
   git checkout master
   cd /c
   git clone https://github.com/dalehenrich/ston.git
   cd ston
   git checkout pharo
   ```

5. Checkout your branch of the [gsDevKitHome project][2]:

   ```Shell
   cd $GS_HOME
   git checkout -b  <your branch name>
   ```

6. Install GemStone/S (for GCI library files) and Pharo, build the tODE client image and launch the tODE client. The GemStone version that specify in the following should match the version installed on your server machine:

   ```Shell
   installWindowsClient 3.2.3 c:/tode c:/ston
   ```

4. Once the tODE client image comes up, you need to edit the session description for your stones using the `tODE edit` menu:

   ![edit description menu][4]

   Replace the name of the netldi with the port number of the netldi obtained from the [stones][6] command (run on the server):

   ![description workspace][5]

5. Commit the changes that you've made and push them to GitHub, so that you can share the changes with your installation on the server machine:

   ```Shell
   git status                               # see what changes have been made
   git add --all                            # stage the changed files
   git commit -m"use port number of netldi" # commit changes
   git push origin <your branch name>       # push the changes to GitHub
   ```

Here's the [list of scripts that can be used on the client machine][7].

[1]: https://windows.github.com/
[2]: https://github.com/GsDevKit/gsDevKitHome
[3]: https://github.com/dalehenrich/tode
[4]: images/editDescription.png
[5]: images/descriptionWorkspace.png
[6]: ../bin/stones
[7]: ../bin/windows/README.md#gsdevkit-windows-client-scripts
[8]: https://github.com/dalehenrich/ston
