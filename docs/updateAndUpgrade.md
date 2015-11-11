# update and upgrade

As new releases of GsDevKit and GemStone come along, you will need to be able to update and upgrade. 

To **update** means to download and install the latest GsDevKit and tODE code; upgrade is the process of moving to a 
new version of GemStone.  The processes are somewhat different.

##update

To update your GsDevKit environment, there are three parts:

1. Install the new code (download and update projects, the code and directories on disk).  This step does not load 
anything into the server stone nor client images.
2. Rebuild the client images; both the tODE client image, and the headless image on the server 
that supports bash command line execution ($GS_HOME/bin/devKitCommandLine).
3. Install updated server code into the stone.

Not all of these steps are required for each change in GsDevKit; each new revision announcement describes 
which steps need to be done.

The `updateGsDevKit` script performs the first two steps.  This script has the following options that installed 
updated code for projects:

       -g updates GsDevKit code   
       -t updates tODE checkout   
       -s updates shared projects   

updateGsDevKit also has an option that rebuilds the client images.  These options can all be used together if needed.
       -i rebuilds images; both the tODE client image, and the headless image on the server, used 
     to support bash command line execution.   

After you have installed the latest code, and rebuilt images if necessary, you may also need to load new code 
into the Stone.  
For the tODE project, this is done using the script todeUpdate.

You will need to execute similar scripts for any other independent projects you have loaded.

```
updateGsDevKit -g -t -s -i 
todeUpdate devKit_329
```

##upgrade

To **upgrade** is to move your GemStone server to a new version of executables and GemStone kernel code.  
It's usually recommended to upgrade, if possible, to get the latest bug fixes and optimizations.

Upgrading can be done using the script upgradeStone.  However, this is not likely to be useful in the context
of your application; you will need to ensure that your application's initialization is done or not done 
according to your code's requirements.









