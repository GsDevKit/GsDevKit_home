parsing
nextChunk
	| str line |
	str := String new.
	[ stream atEnd not ]
		whileTrue: [ 
			line := stream nextLine trimTrailingSeparators.
			(line notEmpty and: [ line first = $% ])
				ifTrue: [ ^ str ].
			str
				addAll: line;
				lf ].
	self error: 'ran off end of file!'