*superdoit-rowan-core
globalNamed: aString ifAbsent: absentBlock
	^ (Rowan globalNamed: aString) ifNil: absentBlock