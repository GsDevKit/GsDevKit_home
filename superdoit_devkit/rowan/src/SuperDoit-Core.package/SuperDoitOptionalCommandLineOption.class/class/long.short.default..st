instance creation
long: longName short: shortName default: default
	^ self new
		longName: longName;
		shortName: shortName;
		defaultValue: default;
		yourself