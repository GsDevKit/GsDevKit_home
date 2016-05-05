pre-upgrade tasks
preUpgradeUnicodeLibrariesSymbolicLinks
	"Copy the target icu libraries to a new name to preserve the original file.
	 Copy the source icu libraries to the target stone's lib directory.
	 Use symbolic links to install the new icu libraries."

	| targetLibDir sourceLibDir |
	sourceLibDir := self gs_stonesHome / self sourceStoneName / 'product' / 'lib'.
	targetLibDir := self gs_stonesHome / self targetStoneName / 'product' / 'lib'.
	OSProcess command: 'chmod +w ' , targetLibDir pathString.
	self libicuBasenames
		do: [ :base | 
			| targetLibFile sourceLibFile targetSource targetOrig original |
			sourceLibFile := self libicuFileNameFor: base version: self sourceGsVers for: self sourceGsVers.
			targetLibFile := self libicuFileNameFor: base version: self targetGsVers for: self targetGsVers.
			targetSource := targetLibDir / sourceLibFile.
			targetSource exists
				ifFalse: [ 
					self
						runShellCommand: '/bin/cp'
						args:
							{((sourceLibDir / sourceLibFile) pathString).
							(targetSource pathString)} ].
			original := targetLibDir / targetLibFile.
			targetOrig := targetLibDir / (targetLibFile , '.orig').
			targetOrig exists
				ifFalse: [ 
					self
						runShellCommand: '/bin/mv'
						args:
							{(original pathString).
							(targetOrig pathString)} ].
			original exists
				ifTrue: [ original delete ].
			self
				runShellCommand: '/bin/ln'
				args:
					{'-s'.
					(targetSource pathString).
					(original pathString)} ]