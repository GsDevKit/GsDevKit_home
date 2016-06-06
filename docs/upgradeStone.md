# Upgrading stones with $GS_HOME/bin/upgradeStone

1. [Create upgrade stone](#create-upgrade-stone)
2. [Run preUpgradeStone script](#run-preupgradestone-script)
3. [Create upgradeLog directory](#create-upgradelog-directory)
4. [Run upgradeImage script](#run-upgradeimage-script)
5. [GsDevKit pre-conversion steps](#gsdevkit-pre-conversion-steps)
6. [Run upgradeSeasideImage script](#run-upgradeseasideimage-script)
7. [GsDevKit post-conversion steps](#gsdevkit-post-conversion-steps)

## Create upgrade stone
1. Stop the source stone
2. Create target stone using `$GS_HOME/bin/createStone`
3. Stop the target stone
4. Copy the extent from the source stone to the target stone
5. Remove tranlogs from target stone

## Run preUpgradeStone script
Run **devKitCommandline** *preUpgradeStone* command:

```
$GS_HOME/bin/devKitCommandLine preUpgradeStone <sourceStoneName> <targetStoneName> <targetStoneVersion>
```

to copy the source `extents/system.conf`, `custom_stone.env`, `maint.conf` and `gem.conf` files to the target stone. For upgrades to 3.3.1 and beyond, the system.conf (after copying) is modified to set the `STN_GEM_LIBICU_VERSION` to match the source stone's LIBICU version:

- 3.3.x uses 54.1
- 3.2.x uses 51.2
- versions prior to 3.2.x use 54.1

##Create upgradeLog directory
`upgradeLog` directory created in `$GS_HOME/server/stones/<target-stone-name>` directory.
The upgrade process stores log files and intermediate results in the `upgradeLog` directory. 

##Run upgradeImage script
`$GEMSTONE/bin/upgradeImage` performs the necessary to upgrade the objects and base classes to the target version. If any errors occur while the upgradeImage script is running, check in the `upgradeLog` directory for error information. The `upgradeLog/topazerrors.log` will often contain the line number of file name where additional error information can be found.

## GsDevKit pre-conversion steps
Before running the standard `$GEMSTONE/seaside/bin/upgradeSeasideImage` script, there are a hand full of patches and image preparation steps that need to be performed:
- patch GemStone Bug 46217 (Recently added class NumberParserGsDevKitIssue75Test causes upgradeSeasideImage to fail)
- clear SystemLoginNotification #Subscriptions class variable
- patch GemStone Bug 46059 (Recently added class GsFailedMethodCompilationDuringCopyMethodToNewClass causes upgradeSeasideImage to fail)
- set default BootstrapApplicationPostloadClassList (see https://github.com/GsDevKit/GsDevKit_home/issues/52)

##Run upgradeSeasideImage script
`$GEMSTONE/seaside/bin/upgradeSeasideImage` performs the standard steps for upgrading a GsDevKit/GLASS image:
1. ..
2. ..

##GsDevKit post-conversion steps


