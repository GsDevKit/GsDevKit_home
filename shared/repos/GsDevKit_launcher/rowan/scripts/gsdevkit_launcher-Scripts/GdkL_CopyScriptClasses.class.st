#!/usr/bin/env gsdevkit_launcher
"
Copy script classes back and forth between Tonel and FileTree formats.

For the work on https://github.com/GsDevKit/GsDevKit_home/issues/260 it is
convenient/necessary to develop scripts using tODE which currently does not
support reading/writing Tonel format. Of course in order to EXECUTE a tonel
class file-based script, it must be in Tonel format. So this script will do
the work of copying classes back and forth between Monticello FileTree packages
and Rown Tonel packages.


"
Class {
	#name : 'GdkL_CopyScriptClasses',
	#superclass : 'AbstractGsDevKitProgram',
	#category : 'gsdevkit_launcher-Scripts'
}

{ #category : 'private' }
GdkL_CopyScriptClasses >> _projectDefinitionForUrl: rowanSpecUrl [
	| projectDef |
	projectDef := (self _projectDefinitionClass newForUrl: rowanSpecUrl)
		projectHome: '$GS_HOME/shared/repos/';
		yourself.
	projectDef read.
	^ projectDef
]

{ #category : 'private' }
GdkL_CopyScriptClasses >> _projectDefinitionClass [
	^ ((AllUsers userWithId: 'SystemUser') objectNamed: 'RwComponentProjectDefinition')
]

{ #category : 'main' }
GdkL_CopyScriptClasses >> main [
	|  projectDefinition_filetree projectDefinition_tonel |
	projectDefinition_filetree := self _projectDefinitionForUrl: 'file:$GS_HOME/shared/repos/GsDevKit_launcher/rowan/specs/gsdevkit_launcher_filetree.ston'.
	projectDefinition_tonel := self _projectDefinitionForUrl: 'file:$GS_HOME/shared/repos/GsDevKit_launcher/rowan/specs/gsdevkit_launcher_tonel.ston'.

self halt.

	projectDefinition_filetree export.
	projectDefinition_tonel export.
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
	', scriptName, ' --write=filetree GdkL_Error GdkL_Hello

	', scriptName, ' -D -- --write=tonel GdkL_Error
'
]

{ #category : 'usage' }
GdkL_CopyScriptClasses >> usageSynopsis: scriptName [

	^	(super usageSynopsis: scriptName), ' --write=[filetree|tonel] <script-class-names>'
]
