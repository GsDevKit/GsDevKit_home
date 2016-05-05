post-upgrade tasks
postUpgradeUnicodeIndexes
	TDShell
		sessionDescription: self sessionDescription
		evaluate: '/home/utils/upgrade/upgradeUnicodeIndexes --sourceVersion=' , self sourceGsVers, ' --save=Post_Upgrade_UnicodeIndexes_Report'