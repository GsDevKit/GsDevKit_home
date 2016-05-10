activation
performUpgradeActions
	| cmdLine result |
	cmdLine := '/home/utils/upgrade/postUpgrade --sourceVersion=' , self sourceGsVers printString.
	Transcript
		cr;
		show: 'Post Upgrade Script: ';
		cr;
		tab;
		show: cmdLine;
		cr.
	result := TDShell sessionDescription: self sessionDescription evaluate: cmdLine.
	Transcript
		cr;
		show: result asString;
		cr.
	self exitSuccess