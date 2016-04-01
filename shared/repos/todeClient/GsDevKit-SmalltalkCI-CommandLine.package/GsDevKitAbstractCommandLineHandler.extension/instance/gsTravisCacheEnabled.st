*GsDevKit-SmalltalkCI-CommandLine
gsTravisCacheEnabled
	^ (Smalltalk os environment at: 'GS_TRAVIS_CACHE_ENABLED' ifAbsent: [ 'false' ]) = 'true'