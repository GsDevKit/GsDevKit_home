Class {
	#name : 'SuperDoitCommandLineOptionWithArgument',
	#superclass : 'SuperDoitCommandLineOption',
	#category : 'SuperDoit-Core'
}

{ #category : 'testing' }
SuperDoitCommandLineOptionWithArgument >> argExpected [
	^ true
]

{ #category : 'accessing' }
SuperDoitCommandLineOptionWithArgument >> markNoValue [
	"Since nil is a valid value, mark with a noValue object that is unique when the optional options have been referenced on command line, should trigger use of defaultValue"

	value
		ifNotNil: [ 
			self
				error:
					'The option ' , self longName printString , ' has already been processed.' ].
	value := self noValue
]

{ #category : 'accessing' }
SuperDoitCommandLineOptionWithArgument >> value [
	^ value == self noValue
		ifTrue: [ self defaultValue ]
		ifFalse: [ value ]
]

{ #category : 'testing' }
SuperDoitCommandLineOptionWithArgument >> wasSet [
	"answer true if the receiver was set on the command line"

	^ value notNil
]
