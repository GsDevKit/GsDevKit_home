main
main
	| shebang needsShebangProperty projectDefinition_filetree projectDefinition_tonel packageName sourcePackageDef targetPackageDef |

	args isEmpty ifTrue: [ self error: 'Expected to find at least one class name on command line ' ].

	projectDefinition_filetree := self _projectDefinitionForUrl: 'file:$GS_HOME/shared/repos/GsDevKit_launcher/rowan/specs/gsdevkit_launcher_filetree.ston'.
	projectDefinition_tonel := self _projectDefinitionForUrl: 'file:$GS_HOME/shared/repos/GsDevKit_launcher/rowan/specs/gsdevkit_launcher_tonel.ston'.

	packageName := 'gsdevkit_launcher-Scripts'.
	needsShebangProperty := false.
	shebang := '/usr/bin/env gsdevkit_launcher'.

	write = 'filetree'
		ifTrue: [ 
			sourcePackageDef := projectDefinition_tonel packageNamed: packageName.
			targetPackageDef := projectDefinition_filetree packageNamed: packageName ]
		ifFalse: [ 
			targetPackageDef := projectDefinition_tonel packageNamed: packageName.
			sourcePackageDef := projectDefinition_filetree packageNamed: packageName.
			needsShebangProperty := true ].

	args do: [:className |
		| classDef |
		targetPackageDef 
			removeClassNamed: className 
			ifAbsent: [ "No need to remove the class definition if is not present" ].
		classDef := sourcePackageDef classDefinitionNamed: className.
		needsShebangProperty
			ifTrue: [ classDef shebang: shebang ].
		targetPackageDef addClassDefinition: classDef ].

	write = 'filetree'
		ifTrue: [ projectDefinition_filetree exportPackages ].
	write = 'tonel'
		ifTrue: [ projectDefinition_tonel exportPackages ].