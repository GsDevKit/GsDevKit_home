accessing
projects
	^ projects ifNil: [ projects := GsDevKitSharedProjects home:  home parent: self ]