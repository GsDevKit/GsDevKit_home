activations
doCreateStone
	super doCreateStone.
	self arguments size > (self smalltalkCIConfigArgIndex - 1)
		ifTrue: [ 
			| ci |
			ci := self readSmalltalkCISpec: (self arguments at: self smalltalkCIConfigArgIndex).
			projectDirectoryPath := ci projectDirectory asFileReference.
			(ci compatibleConfigurationsFor: #gemstone) do: [ :configSpec | self applyOptionsFromConfigurationSpec: configSpec ] ]