#Server Installation

A GsDevKit installation includes both a server and a client, which can be on the same or on different nodes.  
If you are installing on separate nodes, after the server installation, 
[install the tODE client components][1]. 

The GsDevKit server  may be installed on **Linux** or **Mac**.  The GemStone/S 64 Bit does not run 
directly on Windows, however, you may create a Linux VM on Windows and run the GsDevKit server within that VM.

###Server installation only

Before installing, you will need to have all the required OS packages installed 
The following installs the server only, with a stone named devKit_329.  You may select any server name you choose.

1. Determine your installation directory and clone GsDevKit_home to that location

   The following instructiosn clone dev kit to the current directory, so cd to the directory into which you want the dev      kit checkout to be located.

   ```
   cd <githubdirectory>
   git clone https://github.com/GsDevKit/GsDevKit_home.git
   cd GsDevKit_home
   ```

2. Checkout and branch
   ```
   git checkout -b gsdevkit
   ```

3. Set the environment.  These variables will be required to use DevKit, so you will need to add them to your .bashrc or another initialization script.
   ```
   export GS_HOME=`pwd`
   export PATH=$GS_HOME/bin:$PATH
   ```

4. Perform the Server installation.  This clones the required projects to your server node, installs a stone of the specified version and give it the specified name.  These instructions use 3.2.9 for <GemStoneVersion>; check for later GemStone/S 64 Bit releases.
   ```
   $GS_HOME/bin/installServer <GemStoneVersion> <myServerName>
   ```

This script invokes the following sub-scripts:
`downloadGemStone`
`cloneSharedTodeProjects`
`createStone`

For example, the following script can be executed to install a 3.2.9 stone named devKit_329.

```
git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
git checkout -b gsdevkit
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
$GS_HOME/bin/installServer 3.2.9  devKit_329
```



#Server and Client Installation on the same node
The following installs the server and client, with a stone named devKit_329 and the client name tode.  
You may select any server and client names you choose.
```
git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
git checkout -b gsdevkit
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
$GS_HOME/bin/installClientServer 3.2.9 devKit_329 tode
```

[1]: ./installDevKitClient.md
