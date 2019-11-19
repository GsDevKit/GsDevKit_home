#!/usr/bin/env gsdevkit_launcher
Class {
	#name : 'GdkL_Products',
	#superclass : 'AbstractGsDevKitProgram',
	#instVars : [
		'installedProducts'
	],
	#category : 'gsdevkit_launcher-Scripts'
}

{ #category : 'other' }
GdkL_Products >> installedProducts [
	"self new installedProducts"

	installedProducts
		ifNil: [ 
			installedProducts := Dictionary new.
			self productsHome directories
				do: [ :productDir | 
					| dirName |
					dirName := productDir basename.
					(dirName beginsWith: 'GemStone64Bit')
						ifTrue: [ 
							| productVersion dashIndex |
							dashIndex := dirName indexOf: $-.
							productVersion := dirName copyFrom: 'GemStone64Bit' size + 1 to: dashIndex - 1.
							installedProducts at: productVersion put: productDir ]
						ifFalse: [ 
							(dirName beginsWith: 'GemBuilderC')
								ifTrue: [ 
									| productVersion dashIndex |
									dashIndex := dirName indexOf: $-.
									productVersion := dirName copyFrom: 'GemBuilderC' size + 1 to: dashIndex - 1.
									installedProducts at: productVersion put: productDir ] ] ] ].
	^ installedProducts

]

{ #category : 'other' }
GdkL_Products >> installedProductsReportOn: stream [
	stream
		nextPutAll: 'Installed Products:';
		cr.
	self installedProducts keys sorted
		do: [ :gsVers | 
			stream
				tab;
				nextPutAll: gsVers;
				cr ]

]

{ #category : 'other' }
GdkL_Products >> main [
	| resultStream |

	resultStream := String new writeStream.
	self installedProductsReportOn: resultStream.

	^resultStream contents

]

{ #category : 'other' }
GdkL_Products >> produceProductsReport [

	self
		installedProductsReportOn: Transcript;
		yourself.
	"self exitSuccess"

]
