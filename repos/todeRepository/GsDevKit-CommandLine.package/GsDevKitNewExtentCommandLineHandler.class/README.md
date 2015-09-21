Usage: newExtent [ --help] <stone-name>  [<snapshot-file-path>]
  <stone-name>          name of the stone to be created
  <snapshot-file-path>  If present, path to extent snapshot file to be used to
                        create the stone. If not specified,        
                        $GEMSTONE/bin/extent0.seaside.dbf is used.
	
Documentation:
Copy a fresh extent file to the given stones extent directory.

Examples:
  newExtent --help
  newExtent sample
  newExtent sample $GS_HOME/gemstone/snapshots
