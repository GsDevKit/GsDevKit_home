accessing
write: repoTarget

	write := repoTarget asLowercase.
	(#( 'filetree' 'tonel') includes: write)
		ifFalse: [ self error: 'The arg to the --write option must be ''filetree'' or ''tonel'', not ', repoTarget printString ]