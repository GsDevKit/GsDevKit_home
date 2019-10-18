#!/usr/bin/env gsdevkit_launcher
"
Copy script classes back and forth between Tonel and FileTree formats.

	For the work on https://github.com/GsDevKit/GsDevKit_home/issues/260 it is
	convenient/necessary to develop scripts using tODE which currently does not
	support reading/writing Tonel format. Of course in order to EXECUTE a tonel
	class file-based script, it must be in Tonel format. So this script will do
	the work of copying classes back and forth between Monticello FileTree
	packages and Rown Tonel packages.
"
Class {
	#name : 'GdkL_CopyScriptClasses',
	#superclass : 'AbstractGsDevKitProgram',
	#instVars : [
		'write'
	],
	#category : 'gsdevkit_launcher-Scripts'
}

{ #category : 'private' }
GdkL_CopyScriptClasses >> _projectDefinitionClass [
	^ ((AllUsers userWithId: 'SystemUser') objectNamed: 'RwComponentProjectDefinition')
]

{ #category : 'private' }
GdkL_CopyScriptClasses >> _projectDefinitionForUrl: rowanSpecUrl [
	| projectDef |
	projectDef := (self _projectDefinitionClass newForUrl: rowanSpecUrl)
		projectHome: '$GS_HOME/shared/repos/';
		read;
		yourself.
	^ projectDef
]

{ #category : 'main' }
GdkL_CopyScriptClasses >> main [
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
]

{ #category : 'options' }
GdkL_CopyScriptClasses >> scriptMethodOptions [
	^ super scriptMethodOptions, 
	{
			#('write' nil #required #write:).
	}
]

{ #category : 'usage' }
GdkL_CopyScriptClasses >> usageExamples: scriptName [

	^	scriptName, '
	', scriptName, ' --write=tonel GdkL_Error GdkL_Hello GdkL_CopyScriptClasses

	', scriptName, ' -D -- --write=filetree GdkL_Error
'
]

{ #category : 'usage' }
GdkL_CopyScriptClasses >> usageSynopsis: scriptName [

	^	(super usageSynopsis: scriptName), ' --write=[filetree|tonel] <script-class-names>'
]

{ #category : 'accessing' }
GdkL_CopyScriptClasses >> write: repoTarget [

	write := repoTarget asLowercase.
	(#( 'filetree' 'tonel') includes: write)
		ifFalse: [ self error: 'The arg to the --write option must be ''filetree'' or ''tonel'', not ', repoTarget printString ]
]
