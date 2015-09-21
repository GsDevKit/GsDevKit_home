Usage: createStone [ --help] <stone-name> <gs-version>
  <stone-name>  name of the stone to be created
  <gs-version>  GemStone version with which to create stone
	
Documentation:
Create a directory under $GS_HOME/gemstone/stones using the given
<stone-name> and populate directory with supporting files and directories
based on the given <gs-version> .

Examples:
    createStone --help
    createStone sample 3.2.4
