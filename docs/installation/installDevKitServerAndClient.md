#GsDevKit Server and Client Installation

A complete GsDevKit installation includes both a server and a client, which can be on the same or on different nodes.  These instructions provide information on installing both on a single node. This is part of the [instructions for installing on a single desktop machine][1]; refer to these instructions for the OS configuration required and other steps.

The GsDevKit server and client shared installation  may be installed on **Linux** or **Mac**.  


###Install Server

The following steps are involved in installing the GsDevKit server and client.  For an example script to execute, see  [Install GsDevKit server and client](#script-to-install-both-server-and-client).

Before running installing the server, please check on the [GemStone/S 64 Bit product page for the latest versions][2] and visit [the Community and Web Edition Licensing page for information on the license included with the download and other options][3]. It is a good idea to acquire a free, Limited Community License by sending email to sales@gemtalksystems.com. It is also recommended that you download and use the latest version of the GemStone/S 64 Bit product. The following instructions are for version 3.2.9.

1. **Determine your installation directory and clone GsDevKit_home to that location**

   The following instructions clone the Development Kit to the current directory, so before starting, cd to the directory in which you want the GsDevKit checkout to be located.

   ```
   cd <githubdirectory>
   git clone https://github.com/GsDevKit/GsDevKit_home.git
   cd GsDevKit_home
   ```

2. **Perform the git checkout and branch**
   ```
   git checkout -b gsdevkit
   ```

3. **Set the environment**

   The environment variable $GS_HOME and the updated $PATH are required to use DevKit, so you should add them to your `.bashrc` or another initialization script.
   ```
   export GS_HOME=<githubdirectory>
   export PATH=$GS_HOME/bin:$PATH
   ```

4. **Perform the Server installation**
   
    The installation is performed by a GsDevKit script.  This script takes care of cloning the required projects to your server node, installing a stone of the specified version and and specified name, and starting that stone.  You can also use a script that installs the client as well as the server, if you intend to run both components on the same node.

   These instructions use 3.2.9 for `<GemStoneVersion>`; check for later GemStone/S 64 Bit releases.
   
   ```
   $GS_HOME/bin/installClientServer <myStoneName> <myClientName> <GemStoneVersion>
   ```
   You may use any name for the `<myStoneName>` and `<myClientName>`, and note that you may later have multiple stones and multiple clients. The examples below use **devKit_329** and **tode1**.

   The install scripts invokes the following sub-scripts:
   ```
   downloadGemStone
   cloneSharedTodeProjects
   createStone
   createClient 
   ```
   After these scripts successfully complete, you will have a stone named `<myStoneName>`, of GemStone/S 64 Bit version `<GemStoneVersion>`, installed on your server node and running.  You will have a NetLDI named `<myStoneName>_ldi` running on the server, so the server is ready for the tODE client to connect.  You will also have a client named `<myClientName>` installed and ready to start. 


## Script to Install both Server and Client

This script installs both client and server components, and installs and starts a 3.2.9 server named **devKit_329**, and a todeClient named **tode1**.  

```
git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
git checkout -b gsdevkit
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
$GS_HOME/bin/installClientServer devKit_329 tode1 3.2.9
```


[1]: ./README.md#installation-on-a-single-desktop
[2]: https://gemtalksystems.com/products/gs64/
[3]: https://gemtalksystems.com/licensing/
