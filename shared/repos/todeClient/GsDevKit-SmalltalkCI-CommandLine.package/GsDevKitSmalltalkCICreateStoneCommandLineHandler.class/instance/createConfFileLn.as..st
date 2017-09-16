private
createConfFileLn: confFilePath as: confFileName
	| sourceFile lnPath |
	sourceFile := confFilePath.
	confFilePath asFileReference isRelative
		ifTrue: [ sourceFile := self projectDirectoryPath / confFilePath ].
	lnPath := confFileName ifNotNil: [ self stoneDirectory / confFileName ] ifNil: [ self stoneDirectory ].
	Transcript
		cr;
		tab;
		show:
				'Creating exe conf directory symbolic link from ' , sourceFile pathString printString , ' to '
						, lnPath pathString printString.
	sourceFile exists not
		ifTrue: [ self exitFailure: 'The specified conf file: ' , sourceFile pathString printString , ' does not exist' ].
	OSProcess command: 'ln -sf "' , sourceFile pathString , '" "' , lnPath pathString, '"'