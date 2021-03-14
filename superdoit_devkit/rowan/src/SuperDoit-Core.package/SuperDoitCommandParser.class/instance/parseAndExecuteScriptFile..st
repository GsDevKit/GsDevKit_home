execution
parseAndExecuteScriptFile: scriptFileReference
	scriptFileReference
		readStreamDo: [ :fStream | 
			stream := ZnBufferedReadStream on: fStream.
			[ self done ] whileFalse: [ self processNextCommand ].
			^ doitResult ]