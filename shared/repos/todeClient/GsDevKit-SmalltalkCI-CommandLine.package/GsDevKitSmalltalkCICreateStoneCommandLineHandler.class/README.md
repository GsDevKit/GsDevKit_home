Usage: createSmalltalkCIStone [ --help] <stone-name> <gs-version> [<smalltalkCI-config-path>]
  <stone-name>              name of the stone to be created
  <gs-version>              GemStone version with which to create stone
  <smalltalkCI-config-path> Path to the SmalltalkCI configuration file (.smalltalk.ston)
	
Documentation:
Create a directory under $GS_SERVER_STONES using the given
<stone-name> and populate directory with supporting files 
and directories based on the given <gs-version>.

If a <smalltalkCI-config-path> argument is present, extract and apply the attributes 
that can be applied after the stone directory has been created (i.e., #gemConfPath).

Examples:
    createSmalltalkCIStone --help
    createSmalltalkCIStone sample 3.2.4
    createSmalltalkCIStone sample 3.2.4 /opt/_home//sys/local/server/templates/myStoneConfig.ston
