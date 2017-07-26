Usage: newExtentForRecovery [ --help] <stone-name>  <snapshot-file-path>  [<file-media-type>]
  <stone-name>          name of the stone to be created
  <snapshot-file-path>  Path to extent snapshot file to be used to
                        restore the stone. 
  <file-media-type>     If the file-media-type is `x-gzip`, the snapshot file
                        will be gunzipped into stone's extent directory.
                        Otherwise the snapshot file will be copied to the 
                        stone's extent directory.
	
Documentation:
Copy a fresh extent file to the given stones extent directory, in preparation for for a restore from backup.

Tranlog files are not removed, so that they can be used for recovery.

See http://downloads.gemtalksystems.com/docs/GemStone64/3.2.x/GS64-SysAdmin-3.2/GS64-SysAdmin-3.2.htm for more info.

Examples:
  newExtentForRecovery --help
  newExtentForRecovery sample $GS_HOME/gs_server/snapshots
  newExtentForRecovery sample.gz $GS_HOME/gs_server/snapshots x-gzip
