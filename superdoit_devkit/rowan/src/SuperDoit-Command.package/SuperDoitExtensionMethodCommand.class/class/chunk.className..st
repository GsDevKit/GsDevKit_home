instance creation
chunk: aString className: className
	^ self new
		chunk: aString;
		className: className;
		yourself