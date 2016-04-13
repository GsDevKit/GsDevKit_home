structural access
snapshots
	^ snapshots ifNil: [ snapshots := GsDevKitServerStonesStoneSnapshots home: home parent: self ]