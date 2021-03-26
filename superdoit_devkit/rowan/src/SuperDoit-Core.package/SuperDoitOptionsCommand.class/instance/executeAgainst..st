execution
executeAgainst: aCommandParser
	| ivNames optionSpecs |
	ivNames := aCommandParser instVarNames.
	optionSpecs := aCommandParser optionSpecs.
	self chunk evaluate
		do: [ :optionSpec | optionSpecs at: optionSpec longName put: optionSpec ].
	optionSpecs
		do: [ :option | 
			| longName |
			longName := option longName.
			aCommandParser superDoitExecutionClass
				compileMethod:
					longName , '  ^ (self optionSpecs at: ' , longName printString , ') value'.
			aCommandParser superDoitExecutionClass
				compileMethod:
					longName , ': optionValue (self optionSpecs at:' , longName printString
						, ') value: optionValue' ]