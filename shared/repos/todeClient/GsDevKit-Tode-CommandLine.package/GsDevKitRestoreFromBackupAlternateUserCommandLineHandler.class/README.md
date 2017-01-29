Usage: restoreFromBackupAltUser [ --help] <stone-name> <backup-file> <gemstone-user-id> <gemstone-password>
    <stone-name>        name of stone
    <backup-file>       name of backup file in stones backup directory or
                        full patch to a backup file.
    <gemstone-user-id>  gemstone user id
	 <gemstone-password> gemstone password
	
Documentation:
Run restore from backup for the given stone, using the named 
backup file from the stone backup directory. Initial login using
<gemstone-user-id> and <gemstone-password>. Mainly useful when
restoring a backup for a stone with non-standard user id and
password into a standard extent0.dbf.

Examples:
    restoreFromBackup --help
    restoreFromBackup kit home.dbf DataCurator swordfish
    restoreFromBackup kit /home/users/you/backups/home.dbf DataCurator swordfish
