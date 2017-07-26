actions
restoreFromBackup: backupPath restoreSessionDescription: restoreSessionDescription commitRestoreSessionDescription: commitRestoreSessionDescription
	| shell |
	shell := TDShell sessionDescription: restoreSessionDescription.
	shell batchMode: true.
	[ 
	shell topezClient
		restoreFromBackupFromClient: backupPath
		restoreSessionDescription: restoreSessionDescription
		commitRestoreSessionDescription: commitRestoreSessionDescription ]
		ensure: [ shell logout ]