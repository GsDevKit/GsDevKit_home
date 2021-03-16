instance creation
long: longName short: shortName
	^ self new
		initialize;
		longName: longName;
		shortName: shortName;
		yourself