activations
upgradeUnicodeStone
	"Rename and move the icu libraries to the target stone's lib directory"

	| targetLibDir sourceLibDir |
	sourceLibDir := self gs_stonesHome / self sourceStoneName / 'product' / 'lib'.
	targetLibDir := self gs_stonesHome / self targetStoneName / 'product' / 'lib'.
	OSProcess command: 'chmod +w ' , targetLibDir pathString.
	self libIcuPatterns
		do: [ :patterns | 
			| targetPattern sourcePattern |
			sourcePattern := patterns at: 1.
			targetPattern := patterns at: 2.
			(targetLibDir filesMatching: targetPattern)
				do: [ :targetLibFile | 
					| sourceLibFile target originalTarget sourceTarget |
					sourceLibFile := (sourceLibDir filesMatching: sourcePattern) first.
					sourceTarget := targetLibDir / sourceLibFile basename.
					sourceTarget exists
						ifFalse: [ 
							self
								runShellCommand: '/bin/cp'
								args:
									{(sourceLibFile pathString).
									(sourceTarget pathString)} ].
					originalTarget := targetLibDir / (targetLibFile basename , '.orig').
					originalTarget exists
						ifFalse: [ 
							self
								runShellCommand: '/bin/mv'
								args:
									{(targetLibFile pathString).
									(originalTarget pathString)} ].
					target := targetLibDir / targetLibFile basename.
					target exists
						ifTrue: [ target delete ].
					self
						runShellCommand: '/bin/ln'
						args:
							{'-s'.
							(sourceTarget pathString).
							(target pathString)} ] ]