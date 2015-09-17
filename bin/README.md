# GsDevKit Scripts

The bin/ directory contains scripts to install, run, and perform various management tatks for GsDevKit. 

- [Server Scripts](#server-scripts)
- [Client Scripts](#client-scripts)
- [Utility Scripts](#utility-scripts)

## Server Scripts
Scripts that run on the server machine only.

| script | description |
|--------|-------------|
|[backup][3]| Create a GemStone backup for the given stone.|
|[createStone][4]| Create a new stone with the given stone name. Do not install tODE.|
|[createTodeProjectStone][23]| Create a new stone with the given stone name. tODE and the given project are installed.|
|<a name="createTodeStone"></a>
[createTodeStone][5]| Create a new stone with the given stone name. tODE installed.|
|[defStone.env][6]| Define GemStone environment variables in current shell (`source $GS_HOME/bin/defStone.env`).|
|<a name="installGemStone"></a>
[installGemStone][18]| Download and install the given GemStone version. Will make sure that shared memory is correctly configuration on your server. Performs some operations as `root` using `sudo`. Only needs to be run once per GemStone version. |
|[installPharo][19]| Download and install a Linux or Mac or Pharo3.0 VM, image and changes file.|
|<a name="installServer"></a>
[installServer][2]| Install GemStone/S, create a stone, start the stone, create a todeClient image. Runs the [installGemstone][18], [createTodeImage][14], [createStone][4], [startStone][10], [startNetldi][8], [startStatmonitor][9], [installTodeStone][20] and [todeClient][15] scripts.|
|[installTodeProjectStone][24]| Install tODE and the given project in the given stone.|
|[installTodeStone][20]| Install tODE in the given stone.|
|[pharo][21]| Run headless pharo scripts using the Pharo image.|
|[restoreFromBackup][7]|Restore a backup on the given stone.|
|<a name="startNetldi"></a>
[startNetldi][8]| Start the netldi process for the given stone.|
|[startStatmonitor][9]| Start statmonitor for the given stone. Two statmonitors are started. One that collects a sample every second and is restarted every hour. One that collects a sample once a minute and is restarted once a day. |
|<a name="startStone"></a>
[startStone][10]| Start the stone process for the given stone.|
|<a name="stoneNewExtent"></a>
[stoneNewExtent][11]| Copy a new extent into the stone's extent directory. Stone should be shutdown before copying. |
|[stoneExtent][11]| See [stoneNewExtent](#stoneNewExtent) |
|[stones][12]| List information about the installed GemStone/S produects, existing stones, running stones and running netldis.|
|<a name="stopStone"></a>
[stopStone][13]| Stop the named stone. The netldi is left running. Any statmonitor processes associated with the stone will be stopped.|
|[tode][22]| Run headless tode scripts using the todeClient image.|

## Client Scripts
Scripts that can be run on the client machine or the server.

| script | description |
|--------|-------------|
|<a name="createTodeImage"></a>
[createTodeImage][14]| Create the tODE client image. Used for running pharo-based tODE scripts and for running the tODE client UI. Using the -f option updates the client image. | 
|[installClient][1]| Create a todeClient image on a remote machine. Runs the [installGemstone][18], [createTodeImage][14] and [todeClient][15] scripts.|
|[installGci][17]| Copy the gci libraries for the given GemStone version to the $GS\_HOME/pharo directory. |
|[installPharo][19]| Download and install a Linux or Mac Pharo3.0 VM, image and changes file.|
|[performTodeCommand][25]| Pass tODE command to be executed as command line.|
|[pharo][21]| Run headless pharo scripts using the Pharo image.|
|[tode][22]| Run headless tode scripts using the todeClient image.|
|[todeClient][15]| Launch todeClient image. Requires X11 client.|
|[updateTodeImage][16]| Update the todeClient image.|

##Utility Scripts
Special purpose utility scripts.

| script | description |
|--------|-------------|
|[osPrereqs][26]|Utility script installing os-specific prerequisites|

[1]: installClient
[2]: installServer
[3]: backup
[4]: createStone
[5]: createTodeStone
[6]: defStone.env
[7]: restoreFromBackup
[8]: startNetldi
[9]: startStatmonitor
[10]: startStone
[11]: stoneNewExtent
[12]: stones
[13]: stopStone
[14]: createTodeImage
[15]: todeClient
[16]: updateTodeImage
[17]: installGci
[18]: installGemStone
[19]: installPharo
[20]: installTodeStone
[21]: pharo
[22]: tode
[23]: createTodeProjectStone
[24]: installTodeProjectStone
[25]: performTodeCommand
[26]: osPrereqs
