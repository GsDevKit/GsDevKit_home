doit
preDoitSpecLoad: specBlock
	"create a project set from the specs and load the whole enchilada"

	"return list of RwProjects loaded"

	| projectSet rowanProjectSetDefinitionClass |
	self _loadSpecs isEmpty
		ifTrue: [ ^ self ].
	rowanProjectSetDefinitionClass := SuperDoitExecution
		globalNamed: #'RwProjectSetDefinition'
		ifAbsent: [ 
			self
				error:
					'Rowan must be present in the image in order to use the specurls command' ].
	projectSet := rowanProjectSetDefinitionClass new.
	self _loadSpecs
		do: [ :spec | 
			specBlock cull: spec.
			spec resolve readProjectSet do: [ :project | projectSet addProject: project ] ].
	^ projectSet load