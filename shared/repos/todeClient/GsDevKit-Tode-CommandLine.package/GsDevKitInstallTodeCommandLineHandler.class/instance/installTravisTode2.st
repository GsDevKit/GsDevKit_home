actions
installTravisTode2
	| result |
	result := TDShell sessionDescription: self sessionDescription evaluate: 'script --script=installTravisServerTode2'.
	Transcript
		cr;
		show: result printString