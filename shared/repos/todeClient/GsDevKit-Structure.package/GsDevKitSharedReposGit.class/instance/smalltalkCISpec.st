gsdevkit api
smalltalkCISpec
	| ci |
	self isSmalltalkCIRepository
		ifFalse: [ ^ self error: 'No smalltalk config file: ' , self smalltalkConfigFilename printString , ' found.' ].
	ci := SmalltalkCI platformClass
		initialize;
		readSTONSpec: (self asFileReference / self smalltalkConfigFilename) pathString;
		yourself.
	^ ci spec