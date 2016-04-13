navigating
/ aString
	(self class instVarIndexFor: aString asString ifAbsent: [  ]) ifNotNil: [ ^ self perform: aString asSymbol ].
	^ self _fileReference / aString