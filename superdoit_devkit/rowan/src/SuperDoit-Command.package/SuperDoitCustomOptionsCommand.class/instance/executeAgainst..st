execution
executeAgainst: aCommandParser
	| ivNames optionSpecs optionsDict |
	ivNames := aCommandParser instVarNames.
	optionSpecs := self optionSpecs: aCommandParser.
	optionsDict := Dictionary new.
	optionSpecs do: [ :spec | optionsDict at: spec longName put: spec ].
	aCommandParser optionsDict: optionsDict.
	optionSpecs
		do: [ :option | 
			| longName |
			longName := option longName.
			aCommandParser superDoitExecutionClass
				compileMethod:
					longName , '  ^ (self optionsDict at: ' , longName printString , ') value'.
			aCommandParser superDoitExecutionClass
				compileMethod:
					longName , ': optionValue (self optionsDict at:' , longName printString
						, ') value: optionValue' ]