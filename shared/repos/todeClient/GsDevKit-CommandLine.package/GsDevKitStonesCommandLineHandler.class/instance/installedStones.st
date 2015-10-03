accessing
installedStones
	installedStones
		ifNil: [ 
			| stonesHome dirs |
			installedStones := Dictionary new.
			[ 
			stonesHome := self gs_stonesHome.
			dirs := stonesHome directories ]
				on: KeyNotFound
				do: [ :ex | dirs := #() ].
			dirs
				do: [ :stoneDir | 
					(stoneDir filesMatching: self stoneInfoFilename)
						do: [ :infoFile | 
							| info |
							info := GsDevKitStoneInfo importFrom: infoFile.
							stoneDir isSymlink
								ifTrue: [ info isAttached: true ].
							installedStones at: info stoneName put: info ] ] ].
	^ installedStones