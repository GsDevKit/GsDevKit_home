accessing
optionSpecs: aCommandParser
	| ar |
	ar := self chunk evaluate.
	ar _isArray
		ifFalse: [ self error: 'Expected an Array of options: ' , ar printString ].
	^ ar