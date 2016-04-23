gsdevkit api
smalltalkCI
	self isSmalltalkCIRepository
		ifFalse: [ ^ self error: 'No smalltalk config file: ' , self smalltalkConfigFilename printString , ' found.' ].
	^ SmalltalkCI platformClass basicNew
		initialize;
		readSTONSpec: (self asFileReference / self smalltalkConfigFilename) pathString;
		yourself