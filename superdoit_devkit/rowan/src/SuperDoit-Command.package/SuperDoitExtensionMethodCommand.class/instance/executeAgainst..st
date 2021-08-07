execution
executeAgainst: aCommandParser
	(SuperDoitExecution globalNamed: self className)
		ifNotNil: [ :class | 
			| beh |
			beh := self isMeta
				ifTrue: [ class class ]
				ifFalse: [ class ].
			beh compileMethod: self chunk ]
		ifNil: [ self error: 'No class ' , className printString , ' found' ]