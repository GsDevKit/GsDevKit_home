logging
logErrorMessage: aString
	self stderr
		nextPutAll: aString;
		lf