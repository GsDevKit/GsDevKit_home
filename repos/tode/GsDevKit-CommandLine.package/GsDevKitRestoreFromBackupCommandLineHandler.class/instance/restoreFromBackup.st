actions
restoreFromBackup
	TDShell sessionDescription: self sessionDescription evaluate: 'restoreBackup ', (self backupsHome / self backupfile) pathString