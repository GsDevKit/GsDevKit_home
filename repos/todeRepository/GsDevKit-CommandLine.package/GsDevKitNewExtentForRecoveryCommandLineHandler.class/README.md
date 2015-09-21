Usage: newExtentForRecovery [ --help] <stone-name>  <snapshot-file-path>
  <stone-name>          name of the stone to be created
  <snapshot-file-path>  Path to extent snapshot file to be used to
                        restore the stone. 
	
Documentation:
Copy a fresh extent file to the given stones extent directory, in preparation for for a restore from backup.

Tranlog files are not removed, so that they can be used for recovery.

See http://downloads.gemtalksystems.com/docs/GemStone64/3.2.x/GS64-SysAdmin-3.2/GS64-SysAdmin-3.2.htm for more info.

Examples:
  newExtent --help
  newExtent sample $GS_HOME/gemstone/snapshots
