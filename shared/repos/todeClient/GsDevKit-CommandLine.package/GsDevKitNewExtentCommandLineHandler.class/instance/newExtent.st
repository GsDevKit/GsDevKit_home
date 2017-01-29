actions
newExtent
	| stoneDirectory extentFile |
	Transcript
		cr;
		show: 'New extent for ' , self stoneName.
	stoneDirectory := self gs_stonesHome / self stoneName.
	extentFile := stoneDirectory / 'extents' / 'extent0.dbf'.
	extentFile exists
		ifTrue: [ extentFile delete ].
	self mediaType = 'x-gzip'
		ifTrue: [ self gunzipSnapshotExtent: stoneDirectory ]
		ifFalse: [ self copySnapshotExtent: stoneDirectory ].
	Transcript
		cr;
		tab;
		show: 'Finished copying new extent for ' , self stoneName;
		cr