#!/usr/bin/env gsdevkit_launcher
"
Copy script classes back and forth between Tonel and FileTree formats.

	For the work on https://github.com/GsDevKit/GsDevKit_home issues_260 it is
	convenient/necessary to develop scripts using tODE which currently does not
	support reading/writing Tonel format. Of course in order to EXECUTE a tonel
	class file-based script, it must be in Tonel format. So this script will do
	the work of copying classes back and forth between Monticello FileTree
	packages and Rown Tonel packages.

	--write=[filetree|tonel]
		When the script runs the both the filetree and tonel versions of the
		script classes are read from disk. If `filetree` is specified, the 
		filetree version of the script class will be written to the tonel 
		package (rowan/scripts/gsdevkit_launcher-Scripts). If `tonel` is 
		specified, the filetree version of the script class will be written
		to the filetree package (rowan/src/gsdevkit_launcher-Scripts).

	<script-class-names>
		list of script class names to be transferred from filetree to tonel
		or vice versa.

"
Class {
	#name : 'GdkL_CopyScriptClasses',
	#superclass : 'AbstractGsDevKitProgram',
	#instVars : [
		'write'
	],
	#category : 'gsdevkit_launcher-Scripts'
}

{ #category : 'actions' }
GdkL_CopyScriptClasses class >> copyFileTreeToTonel [
  "self copyFileTreeToTonel"

  ^ self copyFileTreeToTonel: self defaultClassNames
]

{ #category : 'actions' }
GdkL_CopyScriptClasses class >> copyFileTreeToTonel: classNames [
  "self copyFileTreeToTonel: #('GdkL_CopyScriptClasses' 'GdkL_Error' 'GdkL-Hello')"

  ^ self new
    classNames: classNames;
    write: 'tonel';
    main
]

{ #category : 'actions' }
GdkL_CopyScriptClasses class >> copyTonelToFiletree [
  "self copyTonelToFiletree"

  ^ self copyTonelToFiletree: self defaultClassNames
]

{ #category : 'actions' }
GdkL_CopyScriptClasses class >> copyTonelToFiletree: classNames [
  "self copyTonelToFiletree: #('GdkL_CopyScriptClasses' 'GdkL_Error' 'GdkL-Hello')"

  ^ self new
    classNames: classNames;
    write: 'filetree';
    main
]

{ #category : 'private' }
GdkL_CopyScriptClasses class >> defaultClassNames [
  ^ #('GdkL_CopyScriptClasses' 'GdkL_Error' 'GdkL_Hello' 'GdkL_Install_Launcher')
]

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

{ #category : 'accessing' }
GdkL_CopyScriptClasses >> classNames: classNames [
  args := classNames
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
  ^ scriptName
    ,
      '
	' , scriptName
    ,
      ' --write=tonel GdkL_Error GdkL_Hello GdkL_CopyScriptClasses GdkL_Install_Launcher

	'
    , scriptName
    ,
      ' -D -- --write=filetree GdkL_Error
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
