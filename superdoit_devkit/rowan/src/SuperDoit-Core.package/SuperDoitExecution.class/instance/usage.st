help
usage
	| string |
	string := _usage copyReplaceAll: '$basename' with: self basename.
	self stdout nextPutAll: string.
	^ self noResult