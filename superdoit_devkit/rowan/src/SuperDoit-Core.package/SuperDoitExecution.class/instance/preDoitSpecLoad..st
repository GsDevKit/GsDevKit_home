doit
preDoitSpecLoad: specBlock
	"create a project set from the specs and load the whole enchilada"

	"return list of RwProjects loaded"

	| projectSet |
	self _loadSpecs isEmpty
		ifTrue: [ ^ self ].
	projectSet := RwProjectSetDefinition new.
	self _loadSpecs
		do: [ :spec | 
			specBlock cull: spec.
			projectSet addAll: spec resolve readProjectSet ].
	^ projectSet load