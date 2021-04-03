execution
parseAndExecuteScriptFile: scriptFileReference
	scriptFileReference
		readStreamDo: [ :fStream | 
			stream := ZnBufferedReadStream on: fStream.
			[ self done ]
				whileFalse: [ 
					self processNextCommand
						ifNotNil: [ :command | self commandDefinition addCommand: command ] ].
			optionsDict
				ifNil: [ 
					"no options specified, so go with the standard options and add it at the beginning of commands"
					self commandDefinition commands addFirst: (SuperDoitOptionsCommand chunk: '{}') ].
			self commandDefinition executeAgainst: self.
			^ doitResult ]