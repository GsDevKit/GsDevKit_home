#tODE Client Installation

**Before installing a remote client, you should seriously consider using [ssh X11 forwarding][8]. 
With [ssh X11 forwarding][8], you install an X11 client on the server, and install an X11 server on your client, instead of installing a tODE client.**

tODE clients may be installed on **Linux**, **Mac** or **Windows**. 

Before installing tODE on a client, you should complete the [install of the Development Kit on a GemStone server][2].

If you are using **Windows**, please follow the instructions on the [tODE Windows Client Installation][1] page.


1. Clone your fork of the [gsDevKitHome project][3] to your tODE client machine and checkout your project-specific branch:

   ```Shell
   git clone https://github.com/GsDevKit/gsDevKitHome.git
   cd gsDevKitHome
   git checkout -b  <your branch name>
   ```

2. Define the `$GS_HOME` environment variable and add `$GS_HOME/bin` to your `$PATH`:

   ```Shell
   cd gsDevKitHome
   export GS_HOME=`pwd`
   export PATH=$GS_HOME/bin:$PATH
   ```

   It's a good idea to define `$GS_HOME` and `$PATH` in your `.bashrc` file.


3. Install GemStone/S (for GCI library files) and Pharo, build the tODE client image and launch the tODE client. The GemStone version that specify in the following should match the version(s) installed on your server machine:

   ```Shell
   installClient 3.2.1
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

[1]: windowsClientInstallation.md#tode-windows-client-installation
[2]: ../README.md#development-kit-server-installation
[3]: https://github.com/GsDevKit/gsDevKitHome
[4]: images/editDescription.png
[5]: images/descriptionWorkspace.png
[6]: ../bin/stones
[7]: ../bin/README.md#client-scripts
[8]: x11ForwardingForRemoteDisplays.md#x11-forwarding-for-remote-servers
