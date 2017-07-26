Usage: restoreFromBackup [ --help] <stone-name> <backup-file>
    <stone-name>  name of stone
    <backup-file> name of backup file in stones backup directory or
                  full patch to a backup file.
	
Documentation:
Run restore from backup for the given stone, using the named 
backup file from the stone backup directory

Examples:
    restoreFromBackup --help
    restoreFromBackup kit home.dbf
    restoreFromBackup kit /home/users/you/backups/home.dbf
