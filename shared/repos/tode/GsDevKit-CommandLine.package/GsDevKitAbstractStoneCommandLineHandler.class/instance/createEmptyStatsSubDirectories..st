actions
createEmptyStatsSubDirectories: stoneDirectory
	| statsDirectory |
	statsDirectory := stoneDirectory / 'stats'.
	Transcript
		cr;
		tab;
		show: 'Creating stats subdirectories '.
	self statsSubDirectories
		do: [ :dirName | 
			| dir |
			dir := statsDirectory / dirName.
			dir exists
				ifTrue: [ 
					self stderr
						nextPutAll: dir pathString , ' already exists and is being skipped.';
						lf ]
				ifFalse: [ dir createDirectory ] ]