actions
createSysLocalStonesLn: stoneDirectory
	| sysLocalStonesStoneStoneNameDir todeLnName |
	todeLnName := 'tode'.
	sysLocalStonesStoneStoneNameDir := self serverTodeSysLocalServerStones / self stoneName.
	Transcript
		cr;
		tab;
		show: 'Creating ' , todeLnName , ' symbolic link to ' , sysLocalStonesStoneStoneNameDir pathString.
	OSProcess
		command: 'ln -sf ' , sysLocalStonesStoneStoneNameDir pathString , ' ' , (stoneDirectory / todeLnName) pathString