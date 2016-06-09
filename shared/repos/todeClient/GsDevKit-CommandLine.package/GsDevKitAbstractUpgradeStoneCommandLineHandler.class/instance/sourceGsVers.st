accessing
sourceGsVers
	sourceGsVers
		ifNil: [ 
			| info infoFile verString |
			infoFile := self gs_stonesHome / self sourceStoneName / self stoneInfoFilename.
			info := GsDevKitStoneInfo importFrom: infoFile.
			verString := info gsVers.
			(verString includesSubstring: '_')
				ifTrue: [ verString := verString copyUpTo: $_ ].
			sourceGsVers := verString asMetacelloVersionNumber ].
	^ sourceGsVers