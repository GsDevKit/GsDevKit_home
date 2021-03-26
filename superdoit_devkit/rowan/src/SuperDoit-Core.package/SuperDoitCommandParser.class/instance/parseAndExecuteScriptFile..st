execution
parseAndExecuteScriptFile: scriptFileReference
	scriptFileReference
		readStreamDo: [ :fStream | 
			stream := ZnBufferedReadStream on: fStream.
			[ self done ]
				whileFalse: [ 
					self processNextCommand
						ifNotNil: [ :command | self commandDefinition addCommand: command ] ].
			self commandDefinition executeAgainst: self.
			^ doitResult ]