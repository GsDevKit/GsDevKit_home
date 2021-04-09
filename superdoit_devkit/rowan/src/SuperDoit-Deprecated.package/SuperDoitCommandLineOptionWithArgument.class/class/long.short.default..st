instance creation
long: longName short: shortName default: default
	^ self new
		initialize;
		longName: longName;
		shortName: shortName;
		defaultValue: default;
		yourself