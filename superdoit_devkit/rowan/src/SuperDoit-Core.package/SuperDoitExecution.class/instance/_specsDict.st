private
_specsDict
	| specsDict |
	specsDict := Dictionary new
		at: 'long' put: Dictionary new;
		at: 'short' put: Dictionary new;
		yourself.
	self optionsDict
		do: [ :option | 
			(specsDict at: 'long') at: option longName put: option.
			option shortName
				ifNotNil: [ :shortName | (specsDict at: 'short') at: shortName put: option ] ].
	^ specsDict