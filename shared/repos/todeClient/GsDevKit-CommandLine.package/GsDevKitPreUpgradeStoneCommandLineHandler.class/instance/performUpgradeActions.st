activation
performUpgradeActions
	self targetGsVers >= '3.3.0' asMetacelloVersionNumber
		ifTrue: [ 
			true
				ifTrue: [ "This is the preferred algorithm for GsDevKit_home"
					self preUpgradeUnicodeLibrariesEnvironmentVariable ]
				ifFalse: [ 
					"This implementation changes the icu version for all stones using this product ... 
					 not ideal for GsDevKit-Home, but it doesn't hurt to have this implementation lying around
					 in our back pocket. "
					self preUpgradeUnicodeLibrariesSymbolicLinks ] ].
	self exitSuccess