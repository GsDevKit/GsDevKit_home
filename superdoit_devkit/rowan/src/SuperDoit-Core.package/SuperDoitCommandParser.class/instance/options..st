commands
options: string
	| ivNames |
	ivNames := self instVarNames.
	optionSpecs := Dictionary new.
	string evaluate do: [:optionSpec |
		optionSpecs at: optionSpec longName put: optionSpec ].
	optionSpecs
		do: [ :option | 
			| longName |
			longName := option longName.
			self method: longName , '  ^ (self optionSpecs at: ' , longName printString , ') value'.
			self
				method:
					longName , ': optionValue (self optionSpecs at:' , longName printString
						, ') value: optionValue' ]