accessing
snapshotFile
	snapshotFile
		ifNil: [ 
			self arguments size > 1
				ifTrue: [ snapshotFile := (self arguments at: 2) asFileReference ]
				ifFalse: [ ^ super snapshotFile ] ].
	^ snapshotFile