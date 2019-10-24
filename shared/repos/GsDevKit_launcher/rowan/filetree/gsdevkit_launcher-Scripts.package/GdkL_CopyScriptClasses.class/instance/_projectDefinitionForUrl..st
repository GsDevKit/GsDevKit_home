private
_projectDefinitionForUrl: rowanSpecUrl
	| projectDef |
	projectDef := (self _projectDefinitionClass newForUrl: rowanSpecUrl)
		projectHome: '$GS_HOME/shared/repos/';
		read;
		yourself.
	^ projectDef