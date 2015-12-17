#GsDevKit Client Installation

These instructions describe installing the GsDevKit tODE client on a desktop machine, on a different node than the GsDevKit server (stone) will be running.  You should first [install the GsDevKit server][1], on the node you will use as the server. To complete this client installation, You will need a file from the servers installation.  For the complete set of steps, including OS configuration requirements, see the [instructions to install on separate server and client][2]

Clients may be installed on **Linux**, **Mac** or **Windows**. 

## Install Client

The following steps are involved in installing the GsDevKit client. For an example script to execute, see [Install GsDevKit client on Linux or Mac](#example-script-to-install-client-on-linux-or-mac) or [Install GsDevKit client on Windows](#example-script-to-install-client-on-windows)

1. Determine your installation directory and clone GsDevKit_home to that location

   The following instructions clone the Development Kit to the current directory, so before starting, cd to the directory in which you want the GsDevKit checkout to be located.  On Windows, it is recommended to install in the root of the user's home directory (`cd ~`), to avoid [path length restrictions][3].
   
   You must use bash or, on Windows, the Git Shell executable provided by the GitHub desktop.

   ```
   cd <githubdirectory>
   git clone https://github.com/GsDevKit/GsDevKit_home.git
   cd GsDevKit_home
   ```

3. Set the environment

   The environment variable $GS_HOME and the updated $PATH are required to use DevKit, so you should add them to your `.bashrc` or another initialization script.
   ```
   export GS_HOME=<githubdirectory>
   export PATH=$GS_HOME/bin:$PATH
   ```

4. Perform the Client installation
   
    The installation is performed by a GsDevKit script.  This script takes care of cloning the required projects to your client node and creating a client with the selected name.  

   you will need to know the version of the GsDevKit stone on your server.

   Script to install the client:
   ```
   installClient 
   downloadGemStone <myGemStoneVersion>
   createClient <myClientName>
   ```
   You may use any name for `<myClientName>`, and note that you may later have multiple clients. The examples below use  **tode1** as the client name.

   The install scripts invokes the following sub-scripts:
   ```
   downloadGemStone
   cloneGsDevKitProjects
   cloneSharedTodeProjects
   setupGsDevKit 
   ```

### Example Script to Install Client on Linux or Mac

This script installs the GsDevKit client components for v3.2.9, and creates a client with the name **tode1**.

 ```
cd <githubdirectory>

git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
installClient |& tee $GS_HOME/install.log
dowloadGemStone 3.2.9 |& tee -a $GS_HOME/install.log
createClient tode1 |& tee -a $GS_HOME/install.log
 ```

### Example Script to Install Client on Windows

This script installs the GsDevKit client components for v.3.2.9, and creates a client with the name **tode1**.

 ```
cd ~
git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
installClient |& tee $GS_HOME/install.log
downloadGemStone 3.2.9 |& tee -a $GS_HOME/install.log
createClient tode1 |& tee -a $GS_HOME/install.log
 ```

When the install script completes, it will report lines similar to:
```
...finished installGci
...finished scanProductsForInstallingGciLibs
...finished createPharoTodeClient
...finished createClient
...finished createClient
...finished installClient
```

You now have an instance of the tODE client installed on your client machine, with the name **tode1** (if you used the sequence as entered here); and you have the GemStone server components for v3.2.9.

## Determine port number for connection

To establish the connection between the client and the server, a server process called the NetLDI listens on a well-known port, and the client must be configured to contact the server on  this port.  If the server and client  machines are not on the same local network, you will also need to setup SSH port forwarding for this port.

Before starting the server, it is recommended, but not required, to assign a reserved port number to a named NetLDI by adding an entry to the network services database, which may be /etc/services.  For example,
```
devKit_329_ldi          50378/tcp        # Gemstone netldi
```

If not, you will need to lookup the port number that the system has assigned to the NetLDI for the GsDevKit server (stone) instance that this client will connect to.  To do this, on the server node, execute the `stones` command.  this will return results similar to this: 

```
$ stones
=================
   GsDevKit script: stones 
              path: /benton1/users/lalmarod/github/GsDevKit_home/bin/stones
=================
Installed Stones:
        3.2.9   devKit_329
Running Stones:
        Status       Version    Owner    Pid   Port   Started     Type       Name
        -------     --------- --------- ----- ----- ------------ ------      ----
        exists      3.2.9     lalmarod  17175 45690 Oct 09 13:35 Stone       devKit_329
Running Netldis:
        Status       Version    Owner    Pid   Port   Started     Type       Name
        -------     --------- --------- ----- ----- ------------ ------      ----
        exists      3.2.9     lalmarod  15452 48334 Oct 01 13:48 Netldi      devKit_329_ldi
```
The value in the Port column for the NetLDI, in this case 48334, is the required value.

#### Setup SSH port forwarding

To setup SSH port forwarding, you will connect the local port to the port on the remote server, using the -L argument to ssh; `-L <localPort>:<hostNameOrIP>:<remotePort>`. 

We are using the same port number on the client and server. In GemStone/S 64 Bit v3.2 and later, you only need to connect a single port, which can be used for multiple socket connections.

```
ssh <remoteUserId>@<remoteHost> -L <localPort>:<localhost>:<remotePort>
```
for example, if the server (stone) is running on a machine with the IP address 192.168.100.129, and the user name on the server is lalmarod, you could use:

```
ssh lalmarod@192.168.100.129 -L 44834:localHost:44834 
```
If you do not have passwordless ssh setup, you will be prompted for your password.

Your shell is now ssh'ed into the server.  You will need to leave this shell connected in order to maintain the ssh port tunnel, so open another shell to start up the client.

## Client Setup

1. Edit your `.bashrc`, or create another intializations file, that includes the lines:

   ```
   export GS_HOME=`pwd`
   export PATH=$GS_HOME/bin:$PATH
   ```

   these  will be needed to use tODE.

2.  From the server installation, copy the server specificaion file to the client.  This file is 

   `$GS_HOME/sys/local/sessions/<myServerNodeName>`
   
   If you are using the same name as these examples, it will be named:
   
   `$GS_HOME/sys/local/sessions/devKit_329`

   to the same path on the client node.

3.  Edit this file to specify [the server NetLDI port](#determine-port-number-for-connection), and the gemHost localHost.  The line item #netLDIPort : should be set to the port, and the line item #gemHost set to localHost or 127.0.0.1.  The lines in this file may read, for example:
 
```
   ...
   #gemHost : 'localHost',
   #netLDI : 'devKit_329_ldi',
   #netLDIPort : '48334',
   #gemTask : 'gemnetobject',
   ...
```
While your Gem will actually be hosted on the remote server, by using ssh tunnelling you have setup such that it appears to your client that the NetLDI is on the local machine at the given port; and this port is inherited by the Gem, so the Gem also appears (from the point of view of the client) to be on the local machine at the given port. By opening up this port in your firewall, your tODE client can fully communicate with the remote Gem. 

4.  Start your client

   ```
   startClient tode1 
   ```

5.  To confirm you are connected to your server, and for further details on using tODE, see [Getting started with tODE][4]







[1]: ./installDevKitServer.md
[2]: ./README.md#installation-on-separate-server-and-client
[3]:  https://github.com/git-for-windows/git/wiki/Git-cannot-create-a-file-or-directory-with-a-long-path
[4]: ../gettingStartedWithTode.md



