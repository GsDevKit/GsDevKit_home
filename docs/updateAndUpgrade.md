# Updating GsDevKit and Upgrading GemStone

**Updating** is the process of bringing your GsDevKit project to the newer version. This involves updates
from github, and make include rebuilding the command line interpreter, tode, and GsDevKit scripts, and
loading tODE changes into the stone.

**Upgrading** is the process of bringing the GemStone environment to a newer version.  Since this requires
shuting down the stone and installing new stone executables, the process is distinct, and more involved.

## Update

When a new version of GsDevKit is announced, it will include the level of update required, including if a
specific tODE update is required.

#### GsDevKit

GsDevKit Update is done using the `$GS_HOME/bin/updateGsDevKit` command. The primary options are:

| option | description |
| ------ | ----------- |
| -g | update the git checkout for the GsDevKit_home scripts and directory structure. |
| -s | update the git checkout for the shared GsDevKit_home repositories: filetree, glass, Grease, metacello-wor, rb, ston, tode, etc.|
| -d | Update the devKitCommandLine Pharo image. |
| -i | Update the GsDevKit_home client Pharo images (i.e., those created by `$GS_HOME/bin/createClient`) and the  devKitCommandLine Pharo image. |


## Upgrade

When a new version of GemStone/S 64 Bit is released, you will get the new features and bug fixes by upgrading your stone to the new versions.

Before doing the upgrade, you should first *port* your code to the target GemStone version and make sure that all of your unit tests are passing. This work may entail creating

Stone upgrade is done using the script `upgradeStone`.  This stone takes three required arguments, the existing stone name, the new stone name, and the GemStone/S 64 Bit version you want to upgrade to.  These arguments must be the last three arguments.

For example, to ugprade your stone named devKit_329 to version 3.4.3, creating a new stone named devKit_343, execute the following:

```
upgradeStone devKit_329 devKit_343 3.4.3 |& tee -a $GS_HOME/upgrade.log
```

See [Upgrading stones with $GS_HOME/bin/upgradeStone][1] for additional information about the operations performed during `upgradeStone`

[1]: upgradeStone.md#upgrading-stones-with-gs_homebinupgradestone
