post-upgrade tasks
postUpgradeSortedCollections
	TDShell
		sessionDescription: self sessionDescription
		evaluate: '/home/utils/upgrade/upgradeSortedCollections --sourceVersion=' , self sourceGsVers, ' --save=Post_Upgrade_SortedCollections_Report'