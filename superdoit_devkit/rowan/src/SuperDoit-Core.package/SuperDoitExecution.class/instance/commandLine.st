command line
commandLine
	^ _commandLine
		ifNil: [ 
			| stream |
			stream := WriteStream on: String new.
			stream
				nextPutAll: self basename;
				space.
			2 to: _scriptArgs size do: [ :index | 
				stream
					nextPutAll: (_scriptArgs at: index);
					space ].
			_commandLine := stream contents ]