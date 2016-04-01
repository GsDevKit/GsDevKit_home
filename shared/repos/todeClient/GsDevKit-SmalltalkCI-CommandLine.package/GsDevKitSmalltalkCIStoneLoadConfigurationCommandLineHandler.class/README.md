Usage: loadSmalltalkCIConfiguration [ --help] <stone-name> [<smalltalkCI-config-path>]
  <stone-name>              name of the stone to be created
  <smalltalkCI-config-path> Path to the SmalltalkCI configuration file (.smalltalk.ston)
	
Documentation:
Load the #gemstone projects specified in the SmalltalkCI configuration file into the named stone.

Examples:
    loadSmalltalkCIConfiguration --help
    loadSmalltalkCIConfiguration sample 3.2.4
    loadSmalltalkCIConfiguration sample 3.2.4 /opt/_home//sys/local/server/templates/myStoneConfig.ston
