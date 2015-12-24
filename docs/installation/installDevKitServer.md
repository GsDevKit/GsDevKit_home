#GsDevKit Server Installation

A complete GsDevKit installation includes both a server and a client, which can be on the same or on different nodes.  These instructions provide information on installing the server component, without installing a client. 

The GsDevKit server  may be installed on **Linux** (64-bit) or **Mac**.  

To go straight to the example script, see [Example Script to Install GsDevKit Server](#example-script) 

### Determine port handling

To establish the connection between the client and the server, a server process called the NetLDI listens on a well-known port.  This port may be selected and reserved, or you may allow the system to select one.  However, if you allow the OS to select the port, on restart it will select a different port and the client will need to be updated. 

We recommend assigning a reserved port number to a named NetLDI by adding an entry to the network services database, e.g.  /etc/services, before installing GsDevKit. You will need the stone name to do this. For example, if you will install the stone server with the name devKit_329, add an entry to services.dat similar to:

```
devKit_329_ldi          50378/tcp        # Gemstone netldi
```

####GemStone Version and License
Before running installing the server, please check on the [GemStone/S 64 Bit product page for the latest versions][2] and visit [the Community and Web Edition Licensing page for information on the license included with the download and other options][3]. It is a good idea to acquire a free, Limited Community License by sending email to sales@gemtalksystems.com. We also recommended using the latest version of the GemStone/S 64 Bit product. 

##Install Server

1. **Determine your installation directory and clone GsDevKit_home to that location**

   The following instructions clone the Development Kit to the current directory, so before starting, cd to the directory in which you want the GsDevKit checkout to be located.

   ```
   cd <githubdirectory>
   git clone https://github.com/GsDevKit/GsDevKit_home.git
   cd GsDevKit_home
   ```

3. **Set the environment**

   The environment variable $GS_HOME and the updated $PATH are required to use DevKit, so you should add them to your `.bashrc` or another initialization script.
   ```
   export GS_HOME=<githubdirectory>
   export PATH=$GS_HOME/bin:$PATH
   ```

4. **Perform the Server installation**
   
    The installation is performed by GsDevKit scripts.  The ```installServer``` script installs any required OS packages and clones the projects to your server node. *Note: this script uses sudo to install, and will prompt you for your password*. ```createStone``` installs a stone of the specified version and and specified name, and starts that stone.  

   These instructions use 3.2.9 for `<GemStoneVersion>`
   
   Script to install the server:
   ```
   installServer
   createStone <myStoneName> <GemStoneVersion>
   ```

   You may use any name for the `<myStoneName>`, to distinguish it from other stones you may later create on this node. These examples use **devKit_329**.  

   After these scripts successfully complete, you will have a server stone installed on your server node and running, and a NetLDI running; the server is now ready for a tODE client to connect.
   
   The ```installServer``` script invokes the following sub-scripts:
   ```
   downloadGemStone
   installOsPrereqs
   cloneGsDevKitProjects 
   cloneSharedTodeProjects
   setupGsDevKit 
   ```

### Example Script

This script installs the server components only, and installs and starts a 3.2.9 server named **devKit_329**.   

```
git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
installServer |& tee $GS_HOME/install.log
createStone devKit_329 3.2.9 |& tee -a $GS_HOME/install.log
```

[2]: https://gemtalksystems.com/products/gs64/
[3]: https://gemtalksystems.com/licensing/
