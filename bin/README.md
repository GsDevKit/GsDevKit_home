# GsDevKit Scripts
## Server Scripts
Scripts that can be run on the server machine with or without *X Windows*.

| script | description |
|--------|-------------|
|[backup][3]| Create a GemStone backup for the given stone.|
|[createStone][4]| Create a new stone with the given stone name. Do not install tODE.|
|[createTodeStone][5]| Create a new stone withe the given stone name with tODE installed.|
|[defStone.env][6]| Define GemStone environment variables in current shell (`source $GS_HOME/bin/defStone.env`).|
|[installGemStone][18]| Download and install the given GemStone version. Will make sure that shared memory is correctly configuration on your server. Performs some operations as `root` using sudo. |
|[installPharo][19]| Download and install a Linux or Mac or Pharo3.0 VM, image and changes file.|
|[installServer][2]| Install GemStone/S, create a stone, start the stone, create a todeClient image. Runs the [installGemstone][18], [createTodeImage][14], [createStone][4], [startStone][10], [startNetldi][8], [startStatmonitor][9], [installTodeStone][20] and [todeClient][15] scripts.|
|[installTodeStone][20]| Install tODE in the given stone.|
|[pharo][21]| Run headless pharo scripts using the Pharo image.|
|[restoreFromBackup][7]|Restore a backup on the given stone.|
|[startNetldi][8]| Start the netldi process for the given stone.|
|[startStatmonitor][9]| Start statmonitor for the given stone. Two statmonitors are started. One that collects a sample every second and is restarted every hour. One that collects a sample once a minute and is restarted once a day. |
|[startStone][10]| Start the stone process for the given stone.|
|[stoneExtent][11]| Copy a new extent into the stone's extent directory. Stone should be shutdown before copying. |
|[stones][12]| List information about the installed GemStone/S produects, existing stones, running stones and running netldis.|
|[stopStone][13]| Stop the named stone. The netldi is left running. Any statmonitor processes associated with the stone will be stopped.|
|[tode][22]| Run headless tode scripts using the todeClient image.|
## Client Scripts
Scripts that can be run on the client machine, including the server if *X Windows* is running.

| script | description |
|--------|-------------|
|[createTodeImage][14]| Create the tODE client image. Used for running pharo-based tODE scripts and for running the tODE client UI.| 
|[installClient][1]| Create a todeClient image on a remote machine. Runs the [installGemstone][18], [createTodeImage][14] and [todeClient][15] scripts.|
|[installGci][17]| Copy the gci libraries for the given GemStone version to the $GS\_HOME/pharo directory. |
|[installPharo][19]| Download and install a Linux or Mac Pharo3.0 VM, image and changes file.|
|[pharo][21]| Run headless pharo scripts using the Pharo image.|
|[tode][22]| Run headless tode scripts using the todeClient image.|
|[todeClient][15]| Launch todeClient image.|
|[updateTodeImage][16]| Update the tODE client image.|

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
[11]: stoneExtent
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
