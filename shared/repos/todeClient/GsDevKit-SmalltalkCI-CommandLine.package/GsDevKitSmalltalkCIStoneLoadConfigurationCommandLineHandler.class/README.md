Usage: loadSmalltalkCIConfiguration [ --help] <stone-name> [<smalltalkCI-config-path>]
  <stone-name>              name of the stone to be created
  <smalltalkCI-config-path> Path to the SmalltalkCI configuration file (.smalltalk.ston)
	
Documentation:
Load the #gemstone projects specified in the SmalltalkCI configuration file into the named stone.

Examples:
    loadSmalltalkCIConfiguration --help
    loadSmalltalkCIConfiguration sample
    loadSmalltalkCIConfiguration sample /opt/_home//sys/local/server/templates/myStoneConfig.ston
