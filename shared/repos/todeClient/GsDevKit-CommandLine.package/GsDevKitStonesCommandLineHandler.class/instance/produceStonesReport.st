actions
produceStonesReport

	installedStones := Dictionary new.
	self gs_stonesHome directories
		do: [ :stoneDir | 
			(stoneDir filesMatching: self stoneInfoFilename)
				do: [ :infoFile | 
					| info |
					info := GsDevKitStoneInfo importFrom: infoFile.
					installedStones at: info stoneName put: info ] ].
	self
		installedStoneReportOn: Transcript;
		runningStoneReportOn: Transcript;
		runningNetldiReportOn: Transcript;
		yourself.
	self exitSuccess