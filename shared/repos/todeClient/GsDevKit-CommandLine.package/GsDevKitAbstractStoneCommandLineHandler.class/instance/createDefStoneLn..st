actions
createDefStoneLn: stoneDirectory
	| defStoneBinFile  defStone|
	defStone := 'defStone.env'.
	defStoneBinFile := self binHome / defStone.
	Transcript
		cr;
		tab;
		show: 'Creating defStone.env symbolic link to ' , defStoneBinFile pathString .
	OSProcess command: 'ln -sf ' , defStoneBinFile pathString , ' ' , (stoneDirectory / defStone) pathString