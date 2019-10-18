#!/usr/bin/env gsdevkit_launcher
"
Hello world GsDevKit script
"
Class {
	#name : 'GdkL_Hello',
	#superclass : 'AbstractGsDevKitProgram',
	#category : 'gsdevKit_launcher-Scripts'
}

{ #category : 'main' }
GdkL_Hello >> main [

	^'hello world'
]
