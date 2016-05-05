post-upgrade tasks
postUpgradeSortedCollections
	| cmdLine result |
	cmdLine := '/home/utils/upgrade/upgradeSortedCollections --sourceVersion=' , self sourceGsVers printString
		, ' --save=Post_Upgrade_SortedCollections_Report'.
	Transcript
		cr;
		show: 'Performing: ';
		cr;
		tab;
		show: cmdLine;
		cr.
	result := TDShell sessionDescription: self sessionDescription evaluate: cmdLine.
	Transcript
		cr;
		show: result asString;
		cr