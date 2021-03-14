command line
getOpts: optionsSpec
	| argStream opt theArgs specsDict |
	specsDict := self _specsDictFor: optionsSpec.
	_positionalArgs := {}.
	theArgs := self scriptArgs asArray.
	theArgs size = 0
		ifTrue: [ ^ self ].
	argStream := ReadStream on: (theArgs copyFrom: 1 to: theArgs size).
	[ argStream atEnd ]
		whileFalse: [ 
			| optOrArg |
			optOrArg := argStream next.
			(optOrArg = '--' or: [ optOrArg = '-' ])
				ifTrue: [ self error: 'Cannot handle naked dashes ' , optOrArg printString ].
			opt
				ifNotNil: [ :theOpt | 
					theOpt argExpected
						ifTrue: [ 
							(optOrArg beginsWith: '-')
								ifTrue: [ 
									theOpt argRequired
										ifTrue: [ 
											self
												error:
													'Missing required argument for option ' , opt longName printString , ' [a]' ]
										ifFalse: [ theOpt markNoValue	"will pick up default value" ] ]
								ifFalse: [ theOpt value: optOrArg ] ]
						ifFalse: [ theOpt value: true	"set value to true, to indicate that the option WAS specified" ] ].
			(optOrArg beginsWith: '-')
				ifTrue: [ 
					(optOrArg beginsWith: '--')
						ifTrue: [ 
							| optKey |
							optKey := optOrArg copyFrom: 3 to: optOrArg size.
							(optKey indexOf: $= ifAbsent: [  ])
								ifNotNil: [ :index | 
									| arg |
									"long option with value"
									arg := optKey copyFrom: index + 1 to: optKey size.
									optKey := optKey copyFrom: 1 to: index - 1.
									opt := (specsDict at: 'long')
										at: optKey
										ifAbsent: [ self error: 'Unknown option ' , optKey printString , ' [a]' ].
									opt argExpected
										ifFalse: [ 
											self
												error:
													'Unexpected argument ' , arg printString , ' for option ' , optKey printString ].
									opt value: arg ]
								ifNil: [ 
									"naked long option"
									opt := (specsDict at: 'long')
										at: optKey
										ifAbsent: [ self error: 'Unknown option ' , optKey printString , ' [b]' ].
									opt argRequired
										ifTrue: [ 
											self
												error:
													'Missing required argument for option ' , optKey printString , ' [b]' ].
									opt argExpected
										ifTrue: [ opt markNoValue ]
										ifFalse: [ opt value: true ] ].
							opt := nil ]
						ifFalse: [ 
							| theOpts numOpts |
							"optOrArg beginsWith: '-'"
							theOpts := optOrArg copyFrom: 2 to: optOrArg size.
							numOpts := theOpts size.
							1 to: numOpts do: [ :index | 
								| optKey |
								optKey := (theOpts at: index) asString.
								opt := (specsDict at: 'short')
									at: optKey
									ifAbsent: [ self error: 'Unknown option ' , optKey printString , ' [c]' ].
								index < numOpts
									ifTrue: [ 
										"multiple options"
										opt argRequired
											ifTrue: [ 
												self
													error:
														'Missing required argument for option ' , opt longName printString , ' [c]' ].
										opt argExpected
											ifTrue: [ opt markNoValue ]
											ifFalse: [ opt value: true ] ]
									ifFalse: [ 
										opt argExpected
											ifFalse: [ 
												opt value: true.
												opt := nil ] ] ] ] ]
				ifFalse: [ 
					opt
						ifNil: [ 
							"naked arg"
							_positionalArgs add: optOrArg ]
						ifNotNil: [ 
							"op has already had it's option set"
							opt := nil ] ] ].
	opt
		ifNotNil: [ 
			"naked option"
			opt argRequired
				ifTrue: [ 
					self
						error:
							'Missing required argument for option ' , opt longName printString , ' [d]' ].
			opt argExpected
				ifTrue: [ opt markNoValue ]
				ifFalse: [ opt value: true ] ]