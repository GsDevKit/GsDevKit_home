activations
newExtent
	| stoneDirectory extentFile |
	Transcript
		cr;
		show: 'New extent for ' , self stoneName.
	stoneDirectory := self stonesHome / self stoneName.
	extentFile := stoneDirectory / 'extents' / 'extent0.dbf'.
	extentFile exists
		ifTrue: [ extentFile delete ].
	self
		copySeasideExtent: stoneDirectory;
		yourself.
	Transcript
		cr;
		tab;
		show: 'Finished copying new extent for ' , self stoneName;
		cr.
	self exitSuccess