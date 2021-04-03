Class {
	#name : 'SuperDoitCommandLineOptionWithArgument',
	#superclass : 'SuperDoitCommandLineOption',
	#instVars : [
		'defaultValue'
	],
	#category : 'SuperDoit-Deprecated'
}

{ #category : 'instance creation' }
SuperDoitCommandLineOptionWithArgument class >> long: longName default: default [
	^ self new
		initialize;
		longName: longName;
		defaultValue: default;
		yourself
]

{ #category : 'instance creation' }
SuperDoitCommandLineOptionWithArgument class >> long: longName short: shortName default: default [
	^ self new
		initialize;
		longName: longName;
		shortName: shortName;
		defaultValue: default;
		yourself
]

{ #category : 'testing' }
SuperDoitCommandLineOptionWithArgument >> argExpected [
	^ true
]

{ #category : 'accessing' }
SuperDoitCommandLineOptionWithArgument >> defaultValue [
	^defaultValue
]

{ #category : 'accessing' }
SuperDoitCommandLineOptionWithArgument >> defaultValue: object [
	defaultValue := object
]

{ #category : 'accessing' }
SuperDoitCommandLineOptionWithArgument >> markNoValue [
	"mark with a noValue object that is unique when the optional options have been referenced on command line, should trigger use of defaultValue"

	(value ~~ self notSet and: [ value ~~ self noValue])
		ifTrue: [ 
			self
				error:
					'The option ' , self longName printString , ' has already been processed.' ].
	value := self noValue
]

{ #category : 'accessing' }
SuperDoitCommandLineOptionWithArgument >> value [
	^ (value == self noValue or: [ value == self notSet ])
		ifTrue: [ self defaultValue ]
		ifFalse: [ value ]
]
