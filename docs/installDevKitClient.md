#Client Installation

The GsDevKit client, tODE, can be installed on the same node as the GsDevKit server, or on a different node.  If you are installing a client on a different node, you should first [install of the Development Kit on a GemStone server][2], on the node you will use as the server.  You will need a file from the servers installation to complete the client installation.

Clients may be installed on **Linux**, **Mac** or **Windows**. 

**Before installing a remote client, you should seriously consider using [ssh X11 forwarding][4]. 
With [ssh X11 forwarding][4], you install an X11 client on the server, and install an X11 server on your client, instead of installing a tODE client.**

## Branch, clone, and install the client:

###On Linux or Mac:

 ```
cd <githubdirectory>

git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
git checkout -b gsdevkit
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
$GS_HOME/bin/installGsDevKit -c https -m client 3.2.9 tode
 ```


You should include the lines

 ```
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
 ```

in your `.bashrc` file or other initialization file, since they will be needed to use tODE.

###On Windows:

1. Download and install *GitHub for Windows* by following the instructions on the [GitHub for Windows][1] page.

2. In *GitHub for Windows*, go to the *Options page* and set your default shell to **Git Bash**.

3. Close the *Github for Windows* window and open a **Git Bash** shell window by clicking on the *Git Shell* icon on your desktop.

[Git on Windows is senstitive to path length][3].  For that reason, it is installed in the root directory of the user's directory.  You may install elsewhere, but longer paths may create problems for some tODE operations. 

This sequence creates a client with the specific name "tode", but you may select any name you choose.

 ```
cd ~
git clone https://github.com/GsDevKit/GsDevKit_home.git
cd gsDevKit_home
git checkout -b gsdevkit
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
git config --global core.longpaths true   
$GS_HOME/bin/installGsDevKit -c https -m client 3.2.9 tode
 ```

## Determine port number for connection

To establish the connection between the client and the server, a server process called the NetLDI listens on a well-known port, and the client must be configured to contact the server on  this port.  If the server and client  machines are not on the same local network, you will also need to setup SSH port forwarding for this port.

it is recommended, but not required, to assign a port number to a named NetLDI by editing the network services database, which may be /etc/services.  


#Client setup

1. Edit your `.bashrc`, or create another intializations file, that includes the lines:

```
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
```

these  will be needed to use tODE.

2.  From the server installation, copy the file

`$GS_HOME/shared/tode/sys/local/client`

to the same path on the client node.



#Further management on client.

You now have an instance of the tODE client installed on your client machine, with the name tode (if you used the sequence as entered here).  

You can use the following scripts to manage your clients instances

```
createClient <clientName>
startClient <clientName>
stopClient <clientName>
deleteClient <clientName>
```





[1]: https://windows.github.com/
[2]: ./installDevKitServer.md
[3]:  https://github.com/git-for-windows/git/wiki/Git-cannot-create-a-file-or-directory-with-a-long-path
[4]: x11ForwardingForRemoteDisplays.md#x11-forwarding-for-remote-servers


