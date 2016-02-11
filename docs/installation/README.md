# Installation Overview

GsDevKit is a client-server environment, involving a GUI development environment (tODE) based on Pharo, and a server (stone) based on GemStone/S 64 bit. The installation process involves cloning projects from github, downloading and configuring Pharo and GUI client components, and downloading, configuring, and starting the GemStone server. 

You must have git installed before you can start installation.  [Instructions to install git][1]

GsDevKit can be installed under three configurations.; [single workstation](#3verything-on-a-single-workstation), [client-server](#client-on-a-local-workstation-server-on-a-remote-host), and [remote with X forwarding](#everything-on-a-remote-server-accessed-via-x-forwarding).

---
### Everything on a single workstation

Install the client and server portions at the same time in a shared directory structure. This can be done on Linux (64-bit desktop) or on Mac.

1. Login to your desktop, and install the GsDevKit Client and Server: [Install Server and Client][3]

2. You may immediately [start Using tODE][13].

### Client on a local workstation, Server on a remote host

The GUI client (tODE) is on one workstation, Windows, Linux desktop or Mac; and connecting to a GsDevKit server installation on a separate node, Linux (64-bit) or Mac.   

1. Log into the remote Linux or Mac machine on which you will be installing the GsDevKit server, and install the GsdevKit server. This will create and startup the stone (the GsDevkit server instance): [Install Server][6]

2. Log into the Desktop client.

   If you are installing the client on Windows, you need to [install the git bash shell][9] first. 
 
   Install the GsDevKit client: [Install Client][10]

3. You may now [start Using tODE][13]

### Everything on a remote server, accessed via X-forwarding

Both the GUI client and the server are installed on a remote machine, with the local client machine using X11 to view the tODE client.  

The remote machine does not need a window manager, but will need to have an X11 client installed.  The local client desktop machine runs an X11 server, and connects to the remote server using ssh -X.  The remote machine would typically be a linux server (i.e, a linux installation with no Window Manager). It is also possible to connect from a Windows desktop by installing cygwin or another application that provides an X11-server, but this is outside the scope of these instructions.

This approach may suffer from performance issues, even with ssh -X compression.  

   1. Login to the remote linux server node, and [install client and server as above](#3verything-on-a-single-workstation).

   2. Connect from desktop to remote node using [X11 forwarding][14], with the [compression option for ssh][15]:.  

   ```
   ssh -c arcfour,blowfish-cbc -XC
   ```

   3. [Start Using tODE][13]

---
## Client and Server naming

GsDevKit installation involves installing at least one server and one client.  Since you can have multiple servers on the same node, or multiple clients, the clients and the servers (stones) are named.  In the examples, we use **devKit_329** for the name of the server (stone), and **tode1** for the name of the tODE client.  Later, you may delete these and install stones and clients with other names and versions.

[1]: https://github.com/LisaAlmarode/GsDevKit_home/blob/LisaDocsChanges/docs/installation/configureOS.md
[3]: ./installDevKitServerAndClient.md

[6]: ./installDevKitServer.md

[9]: ./configOSForServerAndClient.md#configure-windows-for-client
[10]:./installDevKitClient.md

[13]: ../gettingStartedWithTode.md

[14]: http://unix.stackexchange.com/questions/12755/how-to-forward-x-over-ssh-from-ubuntu-machine
[15]: http://xmodulo.com/how-to-speed-up-x11-forwarding-in-ssh.html
