Finish the installation of gsdevkit_launcher that was started by 
	$GS_HOME/alt_bin/bootstrap_launcher:

	If no options are specified, then both the --clone and --create
	(using the default <stone-name>) options are performed.

	[ --clone ]
		Clone the Rowan, stash and st_launcher projects into
		$GS_HOME/shared/repos.

	[ --create[=<stone-name>] ]
		Create a stone that can used for doing gsdevkit_launcher
		script development. Two scripts will be symbolically
		linked into the $GS_HOME/server/stones/<stone-name> 
		directory: newBuild_SystemUser_gsdevkit_launcher_tode
		and newBuild_SystemUser_gsdevkit_launcher_deplyer. 

		The *_tode variant of the script creates a tODE image
		with the filetree variants of the script classes installed
		as well as all of the gsdevkit_launcher support classes.

		The *_deployer variant creates the tODE image and copies
		a snapshot of the newly built extent to 
		$GS_HOME/shared/gemstone/snapshots where the solo extent
		is zipped up ready to be uploaded as an asset to the 
		appropriate release tag 
		(https://github.com/GsDevKit/GsDevKit_home/releases/tag/v0.10.0).

		If the <stone-name> is not specified, the default <stone-name> 
		(gsdevkit_launcher_350) is used.

