#!/usr/bin/env gsdevkit_launcher
"
Hello world GsDevKit script
"
Class {
	#name : 'GsDevKitLauncher_Hello',
	#superclass : 'AbstractGsDevKitProgram',
	#category : 'gsdevKit_launcher-Scripts'
}

{ #category : 'main' }
GsDevKitLauncher_Hello >> main [

	^'hello world'
]
