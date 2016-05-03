activations
upgradeUnicodeStone
	"Move and rename the icu libraries to the target stone's lib directory"

	| targetLibDir sourceLibDir |
	sourceLibDir := self gs_stonesHome / self sourceStoneName / 'product' / 'lib'.
	targetLibDir := self gs_stonesHome / self targetStoneName / 'product' / 'lib'.
	OSProcess command: 'chmod +w ' , targetLibDir pathString.
	#('libicu*data*' 'libicu*i18n*' 'libicu*uc*')
		do: [ :pattern | 
			(targetLibDir filesMatching: pattern)
				do: [ :icuLibFile | 
					| sourceLibFile |
					icuLibFile moveTo: targetLibDir / (icuLibFile basename , '.orig').
					sourceLibFile := (sourceLibDir filesMatching: pattern) first.
					sourceLibFile copyTo: targetLibDir / icuLibFile basename ] ]