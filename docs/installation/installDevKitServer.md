#GsDevKit Server Installation

A complete GsDevKit installation includes both a server and a client, which can be on the same or on different nodes.  These instructions provide information on installing the server component, without installing a client. 

The GsDevKit server  may be installed on **Linux** (64-bit) or **Mac**.  

### Example Script

This script installs the server components only, and installs and starts a v3.3 server named **devKit_33**. You must already have [git installed][1]. The details for each step are described starting [here](#install-server).

```
git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
installServer |& tee $GS_HOME/install.log
createStone devKit_33 3.3.0 |& tee -a $GS_HOME/install.log
```

### Determine port handling

To establish the connection between the client and the server, a server process called the NetLDI listens on a well-known port.  This port may be selected and reserved, or you may allow the system to select one.  However, if you allow the OS to select the port, on restart it will select a different port and the client will need to be updated. 

We recommend assigning a reserved port number to a named NetLDI by adding an entry to the network services database, e.g.  /etc/services, before installing GsDevKit. You will need the stone name to do this. For example, if you will install the stone server with the name devKit_33, add an entry to services.dat similar to:

```
devKit_33_ldi          50378/tcp        # Gemstone netldi
```

####GemStone Version and License
Before installing, please check for later versions of [the GemStone/S 64 Bit product][2] and visit [the Licenses page][3] for information on the license included with the download. It is a good idea to use the latest version of GemStone, and to acquire a free, Limited Community License (by sending email to sales@gemtalksystems.com). 

##Install Server

1. **Determine install directory and clone GsDevKit_home there**

   The following instructions clone the Development Kit to the current directory, so cd to the directory in which you want the GsDevKit checkout to be located.

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
   
    The ```installServer``` script installs any required OS packages and clones the projects to your server node. *Note: this script uses sudo to install, and will prompt you for your password*. ```createStone``` installs a stone of the specified version and specified name, and starts that stone.  

   Script to install the server:
   ```
   installServer
   ```
   
   The ```installServer``` script invokes the following sub-scripts:
   ```
   downloadGemStone
   installOsPrereqs
   cloneGsDevKitProjects 
   cloneSharedTodeProjects
   setupGsDevKit 
   ```
   
5. **Create the Stone**   
   
   The ```createStone``` script creates the Stone. You may use any name for the `<myStoneName>`, to distinguish it from other stones you may later create on this node. You also specify the version of GemStone/S that you want to use.

   ```
   createStone <myStoneName> <GemStoneVersion>
   ```

   After these scripts successfully complete, you will have a server stone installed on your server node and running, and a NetLDI running; the server is now ready for a tODE client to connect.
   


[1]: ./configureOS.md
[2]: https://gemtalksystems.com/products/gs64/
[3]: https://gemtalksystems.com/licensing/
