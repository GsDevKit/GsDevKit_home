execution
executeAgainst: aCommandParser
	| instance |
	aCommandParser superDoitExecutionClass
		compileMethod:
			'doit ^ ' , self chunk printString
				,
					' evaluateInContext: self 
				symbolList: GsCurrentSession currentSession transientSymbolList '.
	instance := aCommandParser superDoitExecutionClass new.
	instance scriptPath: aCommandParser scriptPath.
	instance scriptArgs: aCommandParser scriptArgs.
	instance usage: aCommandParser usage.
	instance optionSpecs: aCommandParser optionSpecs.
	instance processDynamicSections: aCommandParser.
	instance _loadSpecs: aCommandParser specs.
	instance displayResult: instance doit