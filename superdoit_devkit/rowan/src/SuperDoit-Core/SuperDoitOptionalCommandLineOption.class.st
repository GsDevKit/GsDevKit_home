Class {
	#name : 'SuperDoitOptionalCommandLineOption',
	#superclass : 'SuperDoitCommandLineOptionWithArgument',
	#instVars : [
		'defaultValue'
	],
	#category : 'SuperDoit-Core'
}

{ #category : 'instance creation' }
SuperDoitOptionalCommandLineOption class >> long: longName [
	self
		error:
			'optional command line options REQUIRE a default value, use long:default: instead'
]

{ #category : 'instance creation' }
SuperDoitOptionalCommandLineOption class >> long: longName default: default [
	^ self new
		longName: longName;
		defaultValue: default;
		yourself
]

{ #category : 'instance creation' }
SuperDoitOptionalCommandLineOption class >> long: longName short: shortName [
	self
		error:
			'optional command line options REQUIRE a default value, use long:short:default: instead'
]

{ #category : 'instance creation' }
SuperDoitOptionalCommandLineOption class >> long: longName short: shortName default: default [
	^ self new
		longName: longName;
		shortName: shortName;
		defaultValue: default;
		yourself
]

{ #category : 'accessing' }
SuperDoitOptionalCommandLineOption >> defaultValue [
	^defaultValue
]

{ #category : 'accessing' }
SuperDoitOptionalCommandLineOption >> defaultValue: object [
	defaultValue := object
]
