accessing
stoneInfo
	stoneInfo ifNil: [ stoneInfo := GsDevKitStoneInfo importFrom: self stonesHome / self stoneName / self stoneInfoFilename. ].
	^ stoneInfo