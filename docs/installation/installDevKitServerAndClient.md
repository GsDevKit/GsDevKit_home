#GsDevKit Server and Client Installation

A complete GsDevKit installation includes both a server and a client, which can be on the same or on different nodes.  These instructions provide information on installing both on a single node. 

The GsDevKit server and client shared installation  may be installed on **Linux** (64 bit) or **Mac**. If you are running Windows, you can install the server on a Linux VM, and the client on Windows; instructions are [here][4].

####GemStone Version and License
Before running installing the server, please check on the [GemStone/S 64 Bit product page for the latest versions][2] and visit [the Community and Web Edition Licensing page for information on the license included with the download and other options][3]. It is a good idea to acquire a free, Limited Community License by sending email to sales@gemtalksystems.com. It is also recommended that you download and use the latest version of the GemStone/S 64 Bit product. 

###Install Server

For an example script to execute, see  [Example Script to Install GsDevKit server and client](#example-script-to-install-both-server-and-client).

1. **Determine your installation directory and clone GsDevKit_home to that location**

   The following instructions clone the Development Kit to the current directory, so before starting, cd to the directory in which you want the GsDevKit checkout to be located (`<githubdirectory>`).

   ```
   cd <githubdirectory>            
   git clone https://github.com/GsDevKit/GsDevKit_home.git
   cd GsDevKit_home
   ```

3. **Set the environment**

   The environment variable $GS_HOME and the updated $PATH are required to use DevKit, so you should add them to your `.bashrc` or another initialization script.
   ```
   export GS_HOME=<githubdirectory>/GsDevKit_home
   export PATH=$GS_HOME/bin:$PATH
   ```

4. **Perform the Server installation**
   
    The installation is performed by a set of GsDevKit scripts.  `installServerClient` takes care of installing any required OS packages and cloning the required projects to your server node, and createStone and createClient install the stone and client fo the specified version and specified name, and starting the stone. 

   These instructions use 3.2.12 for `GemStoneVersion`; check for the most recent [GemStone/S 64 Bit Releases](#gemstone-version-and-license).
   
   ```
   installServerClient
   createStone <myStoneName> <GemStoneVersion>
   createClient <myClientName>
   ```
   You may use any name for the `<myStoneName>` and `<myClientName>`, and note that you may later have multiple stones and multiple clients. The examples below use **devKit_3212** and **tode1**. 
   
      After these scripts successfully complete, you will have a stone named `<myStoneName>`, of GemStone/S 64 Bit version `<GemStoneVersion>`, installed on your server node and running.  You will have a NetLDI named `<myStoneName>_ldi` running on the server, so the server is ready for the tODE client to connect.  You will also have a client named `<myClientName>` installed and ready to start. 

   The ```installServerClient``` script invokes the following sub-scripts:
   ```
   downloadGemStone
   installOsPrereqs
   cloneGsDevKitProjects 
   cloneSharedTodeProjects
   setupGsDevKit 
   ```

## Example Script to Install both Server and Client

This script installs both client and server components, and installs and starts a 3.2.12 server named **devKit_3212**, and installs but does not start a todeClient named **tode1**.  Output is sent to a log file, in case of problems during installation.

```
git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
installServerClient |& tee $GS_HOME/install.log
createStone devKit_3212 3.2.12 |& tee -a $GS_HOME/install.log
createClient tode1 |& tee -a $GS_HOME/install.log
```


[2]: https://gemtalksystems.com/products/gs64/
[3]: https://gemtalksystems.com/licensing/

[4]: ./README.md#installation-on-separate-server-and-client
