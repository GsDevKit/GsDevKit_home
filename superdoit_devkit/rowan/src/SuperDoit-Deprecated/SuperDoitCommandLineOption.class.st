Class {
	#name : 'SuperDoitCommandLineOption',
	#superclass : 'Object',
	#instVars : [
		'longName',
		'shortName',
		'value'
	],
	#classVars : [
		'NotSet',
		'NoValue'
	],
	#category : 'SuperDoit-Deprecated'
}

{ #category : 'instance creation' }
SuperDoitCommandLineOption class >> long: longName [
	^ self new
		initialize;
		longName: longName;
		yourself
]

{ #category : 'instance creation' }
SuperDoitCommandLineOption class >> long: longName short: shortName [
	^ self new
		initialize;
		longName: longName;
		shortName: shortName;
		yourself
]

{ #category : 'accessing' }
SuperDoitCommandLineOption class >> notSet [
	^ NotSet ifNil: [ NotSet := Object new ]
]

{ #category : 'accessing' }
SuperDoitCommandLineOption class >> noValue [
	^ NoValue ifNil: [ NoValue := Object new ]
]

{ #category : 'testing' }
SuperDoitCommandLineOption >> argExpected [
	^ false
]

{ #category : 'testing' }
SuperDoitCommandLineOption >> argRequired [
	^ false
]

{ #category : 'accessing' }
SuperDoitCommandLineOption >> defaultValue [
	^ false
]

{ #category : 'initialization' }
SuperDoitCommandLineOption >> initialize [
	value := self notSet
]

{ #category : 'accessing' }
SuperDoitCommandLineOption >> longName [
	^longName
]

{ #category : 'accessing' }
SuperDoitCommandLineOption >> longName: object [
	longName := object
]

{ #category : 'accessing' }
SuperDoitCommandLineOption >> notSet [
	^ self class notSet
]

{ #category : 'accessing' }
SuperDoitCommandLineOption >> noValue [
	^ self class noValue
]

{ #category : 'accessing' }
SuperDoitCommandLineOption >> shortName [
	^shortName
]

{ #category : 'accessing' }
SuperDoitCommandLineOption >> shortName: object [
	shortName := object
]

{ #category : 'accessing' }
SuperDoitCommandLineOption >> value [
	^ value == self notSet
		ifTrue: [ self defaultValue ]
		ifFalse: [ value ]
]

{ #category : 'accessing' }
SuperDoitCommandLineOption >> value: object [
	value ~~ self notSet
		ifTrue: [ 
			self
				error:
					'The option ' , self longName printString , ' has already been processed.' ].
	value := object
]

{ #category : 'testing' }
SuperDoitCommandLineOption >> wasSet [
	"answer true if the receiver was set on the command line"

	^ value ~~ self notSet
]
