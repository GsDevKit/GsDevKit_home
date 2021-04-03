Class {
	#name : 'SuperDoitOptionalCommandLineOption',
	#superclass : 'SuperDoitCommandLineOptionWithArgument',
	#category : 'SuperDoit-Deprecated'
}

{ #category : 'instance creation' }
SuperDoitOptionalCommandLineOption class >> long: longName [
	self
		error:
			'optional command line options REQUIRE a default value, use long:default: instead'
]

{ #category : 'instance creation' }
SuperDoitOptionalCommandLineOption class >> long: longName short: shortName [
	self
		error:
			'optional command line options REQUIRE a default value, use long:short:default: instead'
]
