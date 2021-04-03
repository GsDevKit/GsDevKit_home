command line
commandLineSummary
	| opts |
	opts := Dictionary new.
	self optionsDict do: [:option |
		option wasSet
			ifTrue: [ opts at: option longName put: option value ] ].
	^ Dictionary new
		at: 'options' put: opts;
		at: 'args' put: self positionalArgs; 
		yourself.