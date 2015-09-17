Directory where stones are created.

Each stone directory has the following contents.

| stone directory | description|
|-----------------|------------|
|backups| Directory where backup files are stored. |
|bin| Stone specific scripts and executables.|
|extents| Directory where extents are stored.|
|gem.conf| Gem and topaz configuration file copied from [templates directory][1].|
|git| Stone specific git checkouts.|
|info.ston| [STON][2] file containing standard information about the stone: GemStone version, stone name, host username, netldi name. |
|logs| All log files for stone processes can be found here. |
|maint.conf|Maintenance vm configuration file copied from [templates directory][1].|
|product| Symbolic link to GemStone product tree.|
|stats| Directory containing the output files from statmonitor.|
|stone.env|Standard GemStone environment variables copied from [templates directory][1].|
|tranlogs| Directory where tranlogs are stored.|

[1]: ../templates
[2]: https://github.com/svenvc/ston/blob/master/ston-paper.md


