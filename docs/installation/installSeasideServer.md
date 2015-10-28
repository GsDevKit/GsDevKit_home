#GsDevKit Seaside Server Installation

If you are planning to work on a Seaside project, you can bypass the base GsDevKit server installation, and 
start right off installing the Seaside project and building a Seaside server.
  
A complete GsDevKit installation includes both a server and a client, which can be on the same or on different nodes.  
These instructions provide information on installing the server Seaside component, without installing a client.  After
you have installed the server, you will also need to install a client. 

These instructions are part of the [instructions for installing Seaside][1]; refer to these instructions for 
the OS configuration required and other steps.

The GsDevKit server  may be installed on **Linux** or **Mac**; the process is the same on both.  
The GemStone/S 64 Bit does not run directly on Windows, however, you may create a Linux VM on Windows and 
run the GsDevKit server within that VM.

### Determine port handling

To establish the connection between the client and the server, a server process called the NetLDI listens on a well-known port.  This port may be selected and reserved, or you may allow the system to select one.  However, if you allow the OS to select the port, on restart it will select a different port and the client will need to be updated. 

To avoid this, it is recommended to assign a reserved port number to a named NetLDI by adding an entry to the network services database, which may be /etc/services, before installing.  You do need to know the name that you will use for the server installation, since the NetLDI name is derived from that.  For example, if you will install the stone server with the name seaside_3211, add an entry to services.dat similar to:

```
seaside_3211_ldi          50379/tcp        # Gemstone netldi
```

####GemStone Version and License
Before running installing the server, please check on the [GemStone/S 64 Bit product page for the latest versions][2] and visit [the Community and Web Edition Licensing page for information on the license included with the download and other options][3]. It is a good idea to acquire a free, Limited Community License by sending email to sales@gemtalksystems.com. It is also recommended that you download and use the latest version of the GemStone/S 64 Bit product. The following instructions are for version 3.2.11.

##Install Server

The following steps are involved in installing the GsDevKit server.  For an example script to execute, see [Example Script to Install Seaside Server](#example-script-to-install-seaside-server) 

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

4. **Clone the seaside project into the projects directory**
   ```
   cd $GS_HOME/shared/projects
   git clone https://github.com/GsDevKit/GsDevKit_seaside31.git
   ```
5. **Add the seaside projects directory to your path**
 
   This makes it easier to work with seaside-specific scripts.
   ```
   export PATH=$GS_HOME/shared/projects/GsDevKit_seaside31/bin:$PATH
   ```
   
4. **Perform the Server installation**
   
    The installation is performed by a GsDevKit bash script.  This script takes care of cloning the required projects 
    to your server node, installing a seaside stone of the specified version and and specified name, and starting that stone.  
    Note: this script uses sudo to install, and will prompt you for your password.

   Script to install the server only:
   ```
   installServerSeaside -c https -z <seasideWebPort> <myStoneName> <GemStoneVersion>
   ```
   These instructions use 3.2.11 for `<GemStoneVersion>`; check for more 
   recent [GemStone/S 64 Bit Releases](#gemstone-version-and-license).
   
   You may use any name for the `<myStoneName>`.  You may later have multiple stones and 
   multiple clients. The examples below use **seaside_3211**.  For `<authMode>`, use https, though ssh will also 
   work if you have ssh authentication already set up.  
   
   After these scripts successfully complete, you will have a seaside stone named `<myStoneName>`, of GemStone/S 64 Bit version `<GemStoneVersion>`, installed on your server node and running.  You will also have a NetLDI named `<myStoneName>_ldi` running on the server, so the server is ready for a tODE client to connect.
   

### Example Script to Install Seaside Server

This script installs the seaside server components, and creates and starts a 3.2.11 stone server named **seaside_3211** and a NetLDI named ***seaside_3211_ldi***.   

```
git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
git checkout -b gsdevkit 
export GS_HOME=`pwd`
cd $GS_HOME/shared/projects
git clone https://github.com/GsDevKit/GsDevKit_seaside31.git
export PATH=$GS_HOME/bin:$GS_HOME/shared/projects/GsDevKit_seaside31/bin:$PATH
installServerSeaside -c https -z 8383 seaside_3210 3.2.10
```


[1]: ./README.md#installation-on-separate-server-and-client
[2]: https://gemtalksystems.com/products/gs64/
[3]: https://gemtalksystems.com/licensing/
