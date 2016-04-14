navigating
/ aString
	(self class instVarNames includes: aString asSymbol)
		ifTrue: [ ^ self perform: aString asSymbol ].
	^ self gitRepositoryNamed: aString