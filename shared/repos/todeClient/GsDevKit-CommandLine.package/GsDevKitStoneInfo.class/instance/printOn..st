printing
printOn: aStream
	aStream nextPutAll: 'Stone ', self stoneName printString, ' version ', self gsVers printString