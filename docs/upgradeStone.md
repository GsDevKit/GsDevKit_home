# Upgrading stones with $GS_HOME/bin/upgradeStone
The ` $GS_HOME/binupgradeStone` script can be used to upgrade from GemStone versions 2.4.4.1 through 2.4.8, 3.1.x, 3.2.x, 3.3.x and beyond to GemStone versions 3.1.0.6, 3.2.x, 3.3.x and beyond.

For example, to ugprade your stone named devKit_329 to version 3.3, creating a new stone named devKit_33, execute the following:

```
$GS_HOME/bin/upgradeStone -l/home/loadApplication devKit_329 devKit_33 3.3.0 |& tee -a $GS_HOME/upgrade.log
```

where `/home/loadApplication` is the path to a tODE script that loads your application that might look like the following:

```
project load --loads=`#('Tests')` Seaside3
```

If you need to arrange for one or more application classes to be initialized during the [post upgrade load](#run-user-application-load-script), create a script `/home/upradeApplication` in addition to `/home/loadApplication` that looks like the following:

```
project upgrade --install=/home/loadApplication MyClassNeedingInitialization
```

and call `upgradeStone` using the `/home/upgradeAppliation` script:

```
$GS_HOME/bin/upgradeStone -l/home/upgradeApplication devKit_329 devKit_33 3.3.0 |& tee -a $GS_HOME/upgrade.log
```


1. [Create upgrade target stone](#create-upgrade-target-stone)
2. [Run `devKitCommandLine preUpgradeStone` command](#run-devkitcommandline-preupgradestone-command)
3. [Create upgradeLog directory](#create-upgradelog-directory)
4. [Run upgradeImage script](#run-upgradeimage-script)
5. [GsDevKit pre-conversion steps](#gsdevkit-pre-conversion-steps)
6. [Run upgradeSeasideImage script](#run-upgradeseasideimage-script)
7. [GsDevKit post-conversion steps](#gsdevkit-post-conversion-steps)
8. [Run user application load script](#run-user-application-load-script)
9. [Run `devKitCommandLine postUpgradeStone` command](#run-devkitcommandline-postupgradestone-command)

## Create upgrade target stone
1. Stop the source stone
2. Create target stone using `$GS_HOME/bin/createStone`
3. Stop the target stone
4. Copy the extent from the source stone to the target stone
5. Remove tranlogs from target stone

## Run `devKitCommandLine preUpgradeStone` command
The `devKitCommandLine preUpgradeStone` command copies the source `extents/system.conf`, `custom_stone.env`, `maint.conf` and `gem.conf` files to the target stone. For upgrades to 3.3.1 and beyond, the target system.conf is modified to set the `STN_GEM_LIBICU_VERSION` to match the source stone's LIBICU version:

- 3.3.x uses 54.1
- 3.2.x uses 51.2
- versions prior to 3.2.x use 54.1

## Create upgradeLog directory
`upgradeLog` directory created in `$GS_HOME/server/stones/<target-stone-name>` directory.
The upgrade process stores log files and intermediate results in the `upgradeLog` directory.

## Run upgradeImage script
`$GEMSTONE/bin/upgradeImage` performs the necessary to upgrade the objects and base classes to the target version. If any errors occur while the upgradeImage script is running, check in the `upgradeLog` directory for error information. The `upgradeLog/topazerrors.log` will often contain the line number of file name where additional error information can be found.

## GsDevKit pre-conversion steps
Before running the standard `$GEMSTONE/seaside/bin/upgradeSeasideImage` script, there are a hand full of patches and image preparation steps that need to be performed:
- patch GemStone Bug 46217 (Recently added class NumberParserGsDevKitIssue75Test causes upgradeSeasideImage to fail)
- clear SystemLoginNotification #Subscriptions class variable
- patch GemStone Bug 46059 (Recently added class GsFailedMethodCompilationDuringCopyMethodToNewClass causes upgradeSeasideImage to fail)
- set default BootstrapApplicationPostloadClassList (see https://github.com/GsDevKit/GsDevKit_home/issues/52)

## Run upgradeSeasideImage script
`$GEMSTONE/seaside/bin/upgradeSeasideImage` performs the standard steps for upgrading a GsDevKit/GLASS image:

1. As SytemUser:
   - install [Legacy Streams][2], [Unicode Comparison Mode][1], and convert obsolete 2.4.x classes into ObsoleteClasses.

2. As DataCurator:
   - Enable SessionMethods.
   - Clear the Monticello and Metacello caches.
   - Remove all methods from Behaviors in UserGlobals.
   - Bootstrap the basic GLASS classes and methods (for the target GemStone version) into the image, so that Metacello and FileTree can be loaded, so that the classes and methods making up the GsDevKit classes and methods can be loaded.
   - remove all ConfigurationOf classes from image. The will be reloaded when the GsDevKit classes and methods are loaded and when your application classes are reloaded.
   - Explicitly load ConfigurationOf classes specified in BootstrapApplicationLoadSpecs.
   - Load the configurations specified in the BootstrapApplicationLoadSpecs. The class initializers are skipped for all classes except those listed in BootstrapApplicationPostloadClassList.

   *Note that as of 3.3.0 and 3.2.14 it is possible to supply an alternate username to the `$GEMSTONE/seaside/bin/upgradeSeasideImage` script, however GsDevKit_home does not yet support alternate user names*

## GsDevKit post-conversion steps

- remove all BaselineOf classes -- will be reloaded during tODE/project installation
- copy the contents of the tODE nodes: `/sys/stone/home` and `/sys/stone/projects` from the source stone to the target stone, preserving all stone-specific scripts and project entries during upgrade.

## Run user application load script
The *user appliation load script* is specificed by the `-l` option on the `upgradeStone` command line. This script is used to reload the application code present in the image. It is recommended that you create a `loadApp` script locatined in `/sys/stone/home` that contains the tODE commands necessary to load all of the optional code into the upgraded image.

The  *user application load script* is loaded using the `project upgrade` command. The `project upgrade` command disables class initialization for all classes during load. Your application classes stay *initialized* during the upgrade, but the methods must be reloaded. If you have specific classes that must be initialized post-upgrade, use the `project upgrade` command in your custom load script to list the classes that need to be initialized. See `man project upgrade` for more information.

## Run `devKitCommandLine postUpgradeStone` command
The `devKitCommandLine postUpgradeStone` command performs the necessary post-upgrade image conversion steps:
- recompile SortedCollection sort blocks when compiled methods change shape (2.x to 3.x upgrades and 3.x to 3.3.x upgrades).
- Resort SortedCollections and rebuild Character indexes when upgrading when upgrading from pre 3.2.x to 3.2.x or upgrading from 3.2.x to 3.3.0. Starting with version 3.2.x the GsDevKit/GLASS extents are put into [Unicode Comparison Mode][1] where Legacy Strings and Unicode Strings are compared and sorted using the default ICU collator. This change in collation sequence means that when you upgrade from a pre-3.2.x stone, Character collection indexes and SortedCollections with CharacerCollection contents need to be rebuilt/resorted.

These operations are controlled by a collection of tODE scripts that can be found in `'home/uitils/upgrade`.

The `/home/utils/upgrade/postUpgrade` script is the primary driver and calls different scripts depending upon which version of GemStone you are upgrading to:

  - postUpgradeTo310
  - postUpgradeTo320
  - postUpgradeTo330
  - postUpgradeTo331 	

Each of those scripts calls a script for performing one or more of the standard post upgrade conversion operations based on which version you are upgrading from:

  - recompile SortedCollection sort blocks
  - resort SortedCollection instances
  - rebuild CharacterCollection indexes

If you find that you need to customize one or more of the scripts and/or add additional post upgrade conversion steps, you can do so by copying the script and making the necessary changes. The default versions of the scripts are found in `/sys/default/server/upgrade`. You can specify a *local, site-wide* implementations of any one of these scripts by copying the script to `/sys/local/server/upgrade` or you can specify a *stone-specific* implementation by copying the script to `/sys/stone/upgrade`.

[1]: https://downloads.gemtalksystems.com/docs/GemStone64/3.3.x/GS64-ProgGuide-3.3/GS64-ProgGuide-3.3.htm?https://downloads.gemtalksystems.com/docs/GemStone64/3.3.x/GS64-ProgGuide-3.3/5-Strings.htm
[2]: https://downloads.gemtalksystems.com/docs/GemStone64/3.2.x/GS64-ProgGuide-3.2/4-Collections.htm#pgfId-485477
