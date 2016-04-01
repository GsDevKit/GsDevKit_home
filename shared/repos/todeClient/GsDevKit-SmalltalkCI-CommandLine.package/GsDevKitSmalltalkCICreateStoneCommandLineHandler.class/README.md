Usage: createStone [ --help] <stone-name> <gs-version>
  <stone-name>  name of the stone to be created
  <gs-version>  GemStone version with which to create stone
	
Documentation:
Create stone using the GsDevKitCreateStoneCommandLineHandler class. If the environment
variable GS_TRAVIS_CACHE_ENABLED is set to 'true', and a bootstrap extent for GemStone 
exists in the SmalltalkCI cache, use the cached extent to create the stone.

Examples:
    createSmalltalkCIStone --help
    createSmalltalkCIStone sample 3.2.4
