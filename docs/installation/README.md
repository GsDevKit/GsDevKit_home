# Installation Overview

GsDevKit is a client-server environment, involving a GUI devlopment environment (tODE) based on Pharo, and a server (stone) based on GemStone/S 64 bit.  The installation process involves cloning projects from github, downloading and configuring Pharo and GUI client components, and downloading, configuring, and starting the GemStone server (the stone process and supporting processes).  While the details are handled for you by the installations cripts, there are some decisions that  must be made  before installing.

GsDevKit can be installed under three configurations.

(1) Everything on a single workstation.  Since this machine must already have a window manager in order to display the desktop, and since the GsDevKit installation can be shared, it is the simpliest approach.

(2) The GUI client (such as tODE in Pharo) on one workstation, connecting to a GsDevKit server installation on a separate node.  You will need to install twice, installing the client on one machine and the server on another machine.  The remote machine (or VM) does not need a window manager, e.g. a Linux server installation.  This is generally the solution if your desktop machine is running Windows.

(3) Both the GUI client and the server installed on a remote machine.  The remote machine does not need a window manager, but will need to have an X11 client installed.  The local client desktop machine has a window manager (obviously) and will run an X11 server.  Using  ssh -X to connect to the remote machine allows the  GUI client to display on the local machine.  This approach may suffer from performance issues, even with ssh -X compression.  If you are familiar with cygwin or otherwise have an X11 server for windows,  this approach may be used from a Windows client machine; but this configuration is not included with these installation instructions. 

---
# Client and Server naming

To get started with GsDevKit, you will be installing a server and a client.  This may be done in a single step, or by installing separately on different nodes.  Since you can have multiple servers on the same node, or multiple clients, the clients and the servers (stones) are named.  In the examples, we use devKit_329 for the name of the server (stone), and tode1 for the name of the tODE client. 

---
# Installation on a single desktop
   1. Configure OS for both Client and Server:  ConfigureLinuxDesktopClientServer  ConfigureMacClientServer
   2. Install Server&Client
   3. Start Using tODE

---
# Installing separate server and client
   On server, configure OS for Server:  ConfigureLinuxServerServer  ConfigureMacServer
   On server, Install Server
   On client, Configure OS for Client:  ConfigureLinuxDesktopClient  ConfigureMacClient ConfigureWindowsClient
   On client, Install Client
   On client, Start Using tODE
   
---
# Installing on a remote node using X forwarding
   On remote node: configure OS for both Client and Server:   ConfigureLinuxServerClientServer
   On remote node: Install Server&Client
   On desktop (only needed for mac desktops): Configure desktop machine:  ConfigureMacForXForward
   Connect from desktop to remote node 
   Start Using tODE
 
