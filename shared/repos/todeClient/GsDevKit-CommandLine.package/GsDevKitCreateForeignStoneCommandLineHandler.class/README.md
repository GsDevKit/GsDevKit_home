AUsage: createForeignStone [ --help] <stone-name> <gs-version>
  <stone-name>  name of the stone to be created
  <gs-version>  GemStone version with which to create stone
	
Documentation:
Create a directory under $GS_SERVER_STONES using the given
<stone-name> and populate directory with the minimum supporting files and directories
based on the given <gs-version>. This directory structure is expected to be a proxy for a stone in another location and not managed by GsDevKit_home.

Examples:
    createForeignStone --help
    createForeignStone sample 3.2.9
