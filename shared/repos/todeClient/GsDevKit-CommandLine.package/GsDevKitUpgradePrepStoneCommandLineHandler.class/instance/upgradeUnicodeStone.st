activations
upgradeUnicodeStone
	"Rename and move the icu libraries to the target stone's lib directory"

	| targetLibDir sourceLibDir |
	sourceLibDir := self gs_stonesHome / self sourceStoneName / 'product' / 'lib'.
	targetLibDir := self gs_stonesHome / self targetStoneName / 'product' / 'lib'.
	OSProcess command: 'chmod +w ' , targetLibDir pathString.
	#('libicu*data*' 'libicu*i18n*' 'libicu*uc*')
		do: [ :pattern | 
			(targetLibDir filesMatching: pattern)
				do: [ :icuLibFile | 
					| sourceLibFile |
					self
						runShellCommand: '/bin/mv'
						args:
							{(icuLibFile pathString).
							((targetLibDir / (icuLibFile basename , '.orig')) pathString)}.
					sourceLibFile := (sourceLibDir filesMatching: pattern) first.
					self
						runShellCommand: '/bin/cp'
						args:
							{(sourceLibFile pathString).
							((targetLibDir / icuLibFile basename) pathString)} ] ]