accessing
shouldNotBeForeignStone
	self stoneInfo isForeignStone
		ifTrue: [ 
			self
				exitFailure:
					'The stone ' , self stoneName printString , ' is a foreign stone and should not be controlled from GsDevKit_home.' ].
