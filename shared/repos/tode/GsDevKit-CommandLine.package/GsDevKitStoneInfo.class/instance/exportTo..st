STON
exportTo: aFileReference
	FileStream
		forceNewFileNamed: aFileReference pathString
		do: [ :stream | 
			stream lineEndConvention: #lf.
			STON put: self onStreamPretty: stream ]