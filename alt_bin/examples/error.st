#!/usr/bin/env gsdevkit_launcher
"
Example script that signals an error.
"
Class {
	#name : 'GdkL_Error',
	#superclass : 'AbstractGsDevKitProgram',
	#category : 'gsdevKit_launcher-Scripts'
}

{ #category : 'main' }
GdkL_Error >> main [

	Error signal: 'You wanted an error?'.
	^ nil
]

{ #category : 'usage' }
GdkL_Error >> usageExamples: scriptName [

	^	scriptName, '
	', scriptName, ' -D --
'
]
