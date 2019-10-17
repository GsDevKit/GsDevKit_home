#!/usr/bin/env gsdevkit_launcher
"
Example script that signals an error.
"
Class {
	#name : 'GsDevKitLauncher_Error',
	#superclass : 'AbstractProgram',
	#category : 'gsdevKit_launcher-Scripts'
}

{ #category : 'main' }
StLauncher_Error >> main [

	Error signal: 'You wanted an error?'.
	^ nil
]

{ #category : 'usage' }
StLauncher_Error >> usageExamples: scriptName [

	^	scriptName, '
	', scriptName, ' -D --
'
]
