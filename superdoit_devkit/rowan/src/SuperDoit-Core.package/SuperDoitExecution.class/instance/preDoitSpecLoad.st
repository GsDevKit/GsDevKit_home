doit
preDoitSpecLoad
	"create a project set from the specs and load the whole enchilada"

	| projectSet |
	self _loadSpecs isEmpty
		ifTrue: [ ^ self ].
	projectSet := RwProjectSetDefinition new.
	self _loadSpecs do: [ :spec | projectSet addAll: spec resolve readProjectSet ].
	projectSet load