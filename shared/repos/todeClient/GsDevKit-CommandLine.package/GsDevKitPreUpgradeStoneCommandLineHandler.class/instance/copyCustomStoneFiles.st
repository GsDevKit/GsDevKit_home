actions
copyCustomStoneFiles
	| targetCustomFile sourceCustomFile |
	#('gem.conf' 'maint.conf' 'custom_stone.env')
		do: [ :filename | 
			sourceCustomFile := self gs_stonesHome / self sourceStoneName / filename.
			sourceCustomFile exists
				ifTrue: [ 
					Transcript
						cr;
						tab;
						show: 'Copying ' , filename , ' file from ' , self sourceStoneName , ' to ' , self targetStoneName.
					targetCustomFile := self gs_stonesHome / self targetStoneName / filename.
					targetCustomFile exists
						ifTrue: [ targetCustomFile delete ].
					sourceCustomFile copyTo: targetCustomFile ] ]