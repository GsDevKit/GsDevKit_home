#!/usr/bin/env gsdevkit_launcher
"
Hello world GsDevKit script
"
Class {
	#name : 'GdkL_Hello',
	#superclass : 'AbstractGsDevKitProgram',
	#category : 'gsdevkit_launcher-Scripts'
}

{ #category : 'main' }
GdkL_Hello >> main [
  ^ 'hello world'
]
