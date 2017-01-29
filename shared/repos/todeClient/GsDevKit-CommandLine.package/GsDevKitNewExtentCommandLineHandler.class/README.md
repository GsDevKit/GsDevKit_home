Usage: newExtent [ --help] <stone-name>  [<snapshot-file-path>] [<file-media-type>]
  <stone-name>          name of the stone to be created
  <snapshot-file-path>  If present, path to extent snapshot file to be used to
                        create the stone. If not specified,        
                        $GEMSTONE/bin/extent0.seaside.dbf is used.
  <file-media-type>     If the file-media-type is `x-gzip`, the snapshot file
                        will be gunzipped into stone's extent directory. 
                        Otherwise the snapshot file will be copied to the stone's 
                        extent directory.
	
Documentation:
Copy a fresh extent file to the given stone's extent directory.

Examples:
  newExtent --help
  newExtent sample
  newExtent sample $GS_HOME/gs_server/snapshots
  newExtent sample.gz $GS_HOME/gs_server/snapshots x-gzip
