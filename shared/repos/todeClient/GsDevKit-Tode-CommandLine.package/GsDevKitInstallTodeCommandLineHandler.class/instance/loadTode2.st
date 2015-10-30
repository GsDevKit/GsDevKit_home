actions
loadTode2
	| result |
	result := TDShell sessionDescription: self sessionDescription evaluate: 'script --script=loadServerTode2'.
	Transcript
		cr;
		show: result printString
