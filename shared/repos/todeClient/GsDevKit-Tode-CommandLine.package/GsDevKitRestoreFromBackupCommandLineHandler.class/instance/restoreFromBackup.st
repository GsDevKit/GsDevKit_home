actions
restoreFromBackup
	| backupReference |
	backupReference := self backupfile asFileReference.
	backupReference isAbsolute
		ifFalse: [ backupReference := self backupsHome / self backupfile ].
	TDShell sessionDescription: self sessionDescription evaluate: 'restoreBackup ' , backupReference pathString