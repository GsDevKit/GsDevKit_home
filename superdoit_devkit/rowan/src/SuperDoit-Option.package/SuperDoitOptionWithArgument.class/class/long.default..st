instance creation
long: longName default: default
	^ self new
		initialize;
		longName: longName;
		defaultValue: default;
		yourself