execution
executeAgainst: aCommandParser
	self executed ifTrue: [ ^ self ].
	aCommandParser
		instVarNames: aCommandParser instVarNames , ('#(' , self chunk , ')') evaluate.
	self executed: true