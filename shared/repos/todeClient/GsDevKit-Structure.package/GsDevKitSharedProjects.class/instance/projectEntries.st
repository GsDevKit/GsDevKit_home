gsdevkit api
projectEntries
	^ (self _fileReference childrenMatching: '*.ston')
		collect: [ :fileRef | fileRef readStreamDo: [ :fileStream | STON fromStream: fileStream ] ]