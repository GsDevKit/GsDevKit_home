actions
restoreFromBackup: backupPath
	self
		restoreFromBackup: backupPath
		restoreSessionDescription: self sessionDescription
		commitRestoreSessionDescription: self sessionDescription