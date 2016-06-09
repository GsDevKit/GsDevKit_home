accessing
sessionDescriptionIfAbsent: absentBlock
	^self sessionDescriptionFor: self stoneName ifAbsent: absentBlock
