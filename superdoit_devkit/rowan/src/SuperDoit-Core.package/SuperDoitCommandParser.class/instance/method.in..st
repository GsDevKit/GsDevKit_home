commands
method: string in: className
	(Rowan globalNamed: className)
		ifNotNil: [ :class | class compileMethod: string ]
		ifNil: [ self error: 'No class ' , className printString , ' found' ]