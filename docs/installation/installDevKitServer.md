#GsDevKit Server Installation

A complete GsDevKit installation includes both a server and a client, which can be on the same or on different nodes.  These instructions provide information on installing the server component, without  installing a client.  

The GsDevKit server  may be installed on **Linux** or **Mac**.  The GemStone/S 64 Bit does not run 
directly on Windows, however, you may create a Linux VM on Windows and run the GsDevKit server within that VM.

###Configure OS
Before installing, you will need to [install the required OS packages][2].  

###Install Server

The following steps are involved in installing the GsDevKit server.  For an example script to execute, see [Install GsDevKit server only](#script-to-install-server-only) 

1. Determine your installation directory and clone GsDevKit_home to that location

   The following instructions clone the Development Kit to the current directory, so before starting, cd to the directory in which you want the GsDevKit checkout to be located.

   ```
   cd <githubdirectory>
   git clone https://github.com/GsDevKit/GsDevKit_home.git
   cd GsDevKit_home
   ```

2. Perform the git checkout and branch
   ```
   git checkout -b gsdevkit
   ```

3. Set the environment

   The environment variable $GS_HOME and the updated $PATH are required to use DevKit, so you should add them to your `.bashrc` or another initialization script.
   ```
   export GS_HOME=`pwd`
   export PATH=$GS_HOME/bin:$PATH
   ```

4. Perform the Server installation
   
    The installation is performed by a GsDevKit script.  This script takes care of cloning the required projects to your server node, installing a stone of the specified version and and specified name, and starting that stone.  You can also use a script that installs the client as well as the server, if you intend to run both components on the same node.

   These instructions use 3.2.9 for <GemStoneVersion>; check for later GemStone/S 64 Bit releases.
   
   Script to install the server only:
   ```
   $GS_HOME/bin/installServer <GemStoneVersion> <myStoneName>
   ```

   You may use any name for the <myStoneName> and <myClientName>, and note that you may later have multiple stones and multiple clients. The examples below use **devKit_329** and **tode**.

   The install scripts invokes the following sub-scripts:
   ```
   downloadGemStone
   cloneSharedTodeProjects
   createStone
   ```
   After these scripts successfully complete, you will have a stone named `<myStoneName>`, of GemStone/S 64 Bit version `<GemStoneVersion>`, installed on your server node and running.  You will also have a NetLDI named `<myStoneName>_ldi` running on the server, so the server is ready for a tODE client to connect.
   

## Script to Install Server only

This script installs the server components only, and installs and starts a 3.2.9 server named **devKit_329**.   

```
git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
git checkout -b gsdevkit
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
$GS_HOME/bin/installServer 3.2.9  devKit_329
```


[1]: ./installDevKitClient.md
[2]: ./osPrereqs/configureOS.md

