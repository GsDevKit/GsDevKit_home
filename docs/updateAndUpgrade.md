# Updating GsDevKit and Upgrading GemStone

**Updating** is the process of bringing your GsDevKit project to the newer version. This involves updates 
from github, and make include rebuilding the command line interpreter, tode, and GsDevKit scripts, and
loading tODE changes into the stone.

**Upgrading** is the process of bringing the GemStone environment to a newer version.  Since this requires 
shuting down the stone and installing new stone executables, the process is distinct, and more involved.

##Update

When a new version of GsDevKit is announced, it will include the level of update required, including if a 
specific tODE update is required.

#### GsDevKit 

GsDevKit Update is done using the `gsdevkitupdate` command, with the arguements -i, -t, and -g. 
    -i  rebuild command line image   
    -t updates tode checkout   
    -g updates gsdevkit scripts, etc.   

#### tODE
tODE update is done using the `todeupgrade` script, which installs tODE changes into a specific stone.

For example:
```
   todeupgrade devKit1 
```

##Upgrade

When a new version of GemStone/S 64 Bit is released, you will get the new features and bug fixes by upgrading your stone to the new versions.

Stone upgrade is done using the script `upgradeStone`.  This stone takes three required arguments, the existing stone name, the new stone name, and the GemStone/S 64 Bit version you want to upgrade to.  These arguments must be the last three arguments.

For example, to ugprade your stone named devKit_329 to version 3.3, creating a new stone named devKit_33, execute the following:

```
   upgradeStone devKit_329 devKit_33 3.3.0 |& tee -a $GS_HOME/upgrade.log
```

