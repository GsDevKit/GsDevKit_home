# GsDevKit Server and Client Installation

While you can install GsDevKit server and client on two different nodes, the simpliest installation is to have both on a single node.  

The GsDevKit single-code installation  may be on **Linux** (64 bit) or **Mac**. If you are running Windows, you can install the server on a Linux VM, and the client on Windows; instructions are [here][4].

#### GemStone Version and License
Before installing, please check for later versions of [the GemStone/S 64 Bit product][2] and visit [the Licenses page][3] for information on the license included with the download. It is a good idea to use the latest version of GemStone, and to acquire a free, Limited Community License (by sending email to sales@gemtalksystems.com).

## Example Scriptt

This script installs both client and server components, and installs and starts a 3.3.0 server named **devKit_330**, and installs but does not start a todeClient named **tode1**.  Output is sent to a log file, in case of problems during installation.
You must already have [git installed][1].

```
git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
installServerClient |& tee $GS_HOME/install.log
createStone devKit_33 3.3.0 |& tee -a $GS_HOME/install.log
createClient tode1 |& tee -a $GS_HOME/install.log
```

### Install Server

1. **Determine your installation directory and clone GsDevKit_home to that location**

   You must already have [git installed][1].  
   These instructions clone the Development Kit to the current directory, so before starting, cd to the directory in which you want the GsDevKit checkout to be located (`<githubdirectory>`).

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

    The installation is performed by the `installServerClient` script.  This takes care of installing any required OS packages and cloning the required projects to your server node

   ```
   installServerClient
   ```
   The `installServerClient` script invokes the following sub-scripts:

   ```
   downloadGemStone
   installOsPrereqs
   cloneGsDevKitProjects
   cloneSharedTodeProjects
   setupGsDevKit
   ```
5.  Create the stone and client
    The `createStone` and `createClient` scripts install the stone and client.

   ```
   createStone <myStoneName> <GemStoneVersion>
   createClient <myClientName>
   ```
   You may use any name for the `<myStoneName>` and `<myClientName>`; you may later have multiple stones and multiple clients.

      After these scripts successfully complete, you will have a stone named `<myStoneName>`, of GemStone/S 64 Bit version `<GemStoneVersion>`, installed on your server node and running.  You will have a NetLDI named `<myStoneName>_ldi` running on the server, so the server is ready for the tODE client to connect.  You will also have a client named `<myClientName>` installed and ready to start.





[1]: ./configureOS.md
[2]: https://gemtalksystems.com/products/gs64/
[3]: https://gemtalksystems.com/licensing/

[4]: ./README.md#installation-on-separate-server-and-client
