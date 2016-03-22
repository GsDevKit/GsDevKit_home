# Updating GsDevKit and Upgrading GemStone

**Updating** is the process of bringing your GsDevKit project to the newer version. This involves updates 
from github, and make include rebuilding the command line interpreter, tode, and GsDevKit scripts, and
loading tODE changes into the stone.

**Upgrading** is the process of bringing the GemStone environment to a newer version.  Since this requires 
shuting down the stone and installing new stone executables, the process is distinct, and more involved.

##Update

When a new version of GsDevKit is announced, it will include the level of update required, including if a 
specific tODE update is required.

Update is done using the `gsdevkitupdate` command, with the arguements -i, -t, and -g. 
   -i  rebuild command line image
   -t updates tode checkout
   -g updates gsdevkit scripts, etc.

Tode update is done using the todeupgrade script, which installs tODE changes into a specific stone.

For example:
```
todeupgrade devKit1 
```
