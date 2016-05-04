accessing
sourceGsVers
	sourceGsVers
		ifNil: [ 
			| info infoFile |
			infoFile := self gs_stonesHome / self sourceStoneName / self stoneInfoFilename.
			info := GsDevKitStoneInfo importFrom: infoFile.
			sourceGsVers := info gsVers asMetacelloVersionNumber ].
	^ sourceGsVers