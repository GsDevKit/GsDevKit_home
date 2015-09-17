# GsDevKit Windows Client Scripts
Scripts that can be run on the Windows client machine.

| script | description |
|--------|-------------|
|[createWindowsTodeImage][1]| Create the tODE client image. Used for running pharo-based tODE scripts and for running the tODE client UI.| 
|[installWindowsClient][2]| Create a todeClient image on a remote machine. Runs the [installWindowsGci][3], [createWindowsTodeImage][1] and [todeWindowsClient][5] scripts.|
|[installWindowsGci][3]| Copy the gci libraries for the given GemStone version to the $GS\_HOME/pharo directory. |
|[installWindowsPharo][4]| Download and install a Windows Pharo3.0 VM, image and changes file.|
|[todeWindowsClient][5]| Launch todeClient image.|
|[updateTodeWindowsImage][6]| Update the tODE client image.|

[1]: createWindowsTodeImage
[2]: installWindowsClient
[3]: installWindowsGci
[4]: installWindowsPharo
[5]: todeWindowsClient
[6]: updateTodeWindowsImage
