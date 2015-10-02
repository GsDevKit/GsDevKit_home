#Server Installation

A GsDevKit installation includes both a server and a client, which can be on the same or on different nodes.  
If you are installing on separate nodes, after the server installation, 
[install the tODE client components][1]. 

The GsDevKit server  may be installed on **Linux** or **Mac**.  The GemStone/S 64 Bit does not run 
directly on Windows, however, you may create a Linux VM on Windows and run the GsDevKit server within that VM.

###Server installation only
The following installs the server only, with a stone named devKit_329.  You may select any server name you choose.

```
cd <githubdirectory>
git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
git checkout -b gsdevkit
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
$GS_HOME/bin/installGsDevKit -m server 3.2.9  devKit_329
```
#Server and Client Installation on the same node
The following installs the server and client, with a stone named devKit_329 and the client name tode.  
You may select any server and client names you choose.
```
cd <githubdirectory>
git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
git checkout -b gsdevkit
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
$GS_HOME/bin/installGsDevKit -m both 3.2.9 devKit_329 tode
```

[1]: ./#installDevKitClient.md
