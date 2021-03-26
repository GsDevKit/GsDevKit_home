instance creation
chunk: aString className: className isMeta: aBool
	^ self new
		chunk: aString;
		className: className;
		isMeta: aBool;
		yourself