actions
installTode2
	| result |
	result := TDShell sessionDescription: self sessionDescription evaluate: 'script --script=installServerTode2'.
	Transcript
		cr;
		show: result printString