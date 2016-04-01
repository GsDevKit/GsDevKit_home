Usage: createStone [ --help] <stone-name> <gs-version>
  <stone-name>  name of the stone to be created
  <gs-version>  GemStone version with which to create stone
	
Documentation:
Create a directory under $GS_SERVER_STONES using the given
<stone-name> and populate directory with supporting files and directories
based on the given <gs-version>.

If the environment
variable GS_TRAVIS_CACHE_ENABLED is set to 'true', and a bootstrap extent for GemStone 
exists in the SmalltalkCI cache, use the cached extent to create the stone.

Examples:
    createSmalltalkCIStone --help
    createSmalltalkCIStone sample 3.2.4
