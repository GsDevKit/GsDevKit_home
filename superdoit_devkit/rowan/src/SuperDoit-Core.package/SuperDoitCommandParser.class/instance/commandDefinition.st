accessing
commandDefinition
	^ commandDefinition
		ifNil: [ commandDefinition := SuperDoitCommandDefinition new ]