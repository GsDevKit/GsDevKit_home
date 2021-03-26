doit
doit: string
	| instance |
	self superDoitExecutionClass
		compileMethod:
			'doit ^ ' , string printString
				,
					' evaluateInContext: self 
				symbolList: GsCurrentSession currentSession transientSymbolList '.
	instance := self superDoitExecutionClass new.
	instance scriptPath: self scriptPath.
	instance scriptArgs: self scriptArgs.
	instance usage: self usage.
	instance optionSpecs: self optionSpecs.
	instance processDynamicSections: self.
	self loadSpecs.
	instance displayResult: instance doit