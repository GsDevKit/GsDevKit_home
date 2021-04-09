script execution
doit
	"standard option handling ... for customization override in script"

	[ 
	self getAndVerifyOptions == self noResult
		ifTrue: [ ^ self noResult ].
	^ self theDoit ]
		on: Error
		do: [ :ex | 
			((self respondsTo: #'debug') and: [ self debug ])
				ifTrue: [ ex pass ].
			self exit: ex messageText withStatus: 1	"does not return" ]