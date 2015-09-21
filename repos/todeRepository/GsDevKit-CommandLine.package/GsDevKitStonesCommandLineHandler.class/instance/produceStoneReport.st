actions
produceStoneReport

	installedStones := Dictionary new.
	self stonesHome directories
		do: [ :stoneDir | 
			(stoneDir filesMatching: self stoneInfoFilename)
				do: [ :infoFile | 
					| info |
					info := GsDevKitStoneInfo importFrom: infoFile.
					installedStones at: info stoneName put: info ] ].
	self
		installedProductsReportOn: Transcript;
		installedStoneReportOn: Transcript;
		runningStoneReportOn: Transcript;
		runningNetldiReportOn: Transcript;
		yourself.
	self exitSuccess