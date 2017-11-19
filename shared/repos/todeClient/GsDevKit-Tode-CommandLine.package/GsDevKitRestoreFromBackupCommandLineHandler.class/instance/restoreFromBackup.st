actions
restoreFromBackup
	| backupReference |
	backupReference := self backupfile asFileReference.
	backupReference isAbsolute
		ifFalse: [ backupReference := self backupsHome / self backupfile ].
	self restoreFromBackup: backupReference pathString