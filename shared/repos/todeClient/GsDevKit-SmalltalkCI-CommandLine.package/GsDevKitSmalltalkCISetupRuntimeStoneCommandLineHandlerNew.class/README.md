Usage: setupRuntimeSmalltalkCIStoneNew [ --help] <stone-name> [<smalltalkCI-config-path>]
  <stone-name>              name of the stone to be created
  <gemstone-user-id>        GemStone userId to use in session description, .topazini file, etc.
  <smalltalkCI-config-path> Path to the SmalltalkCI configuration file (.smalltalk.ston)
	
Documentation:
Set up runtime stone options from SmalltalkCI configuration. If a <smalltalkCI-config-path> argument is present, extract and apply the runtime stone attributes (i.e., #timeZone).

Examples:
    setupRuntimeSmalltalkCIStone --help
    setupRuntimeSmalltalkCIStone sample
    setupRuntimeSmalltalkCIStone sample SystemUser
    setupRuntimeSmalltalkCIStone sample MyUser /opt/_home//sys/local/server/templates/myStoneConfig.ston
    setupRuntimeSmalltalkCIStone sample /opt/_home//sys/local/server/templates/myStoneConfig.ston
