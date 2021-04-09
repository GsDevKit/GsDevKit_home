script execution
getAndVerifyOptions
	"standard option handling ... for customization override in script"

	self getOpts.
	((self respondsTo: #'help') and: [ self help ])
		ifTrue: [ ^ self usage ].
	self optionsDict
		keysAndValuesDo: [ :longName :option | 
			option isRequired
				ifTrue: [ 
					option wasSet
						ifFalse: [ self error: 'The required option ' , longName printString , ' was not set.' ] ] ]