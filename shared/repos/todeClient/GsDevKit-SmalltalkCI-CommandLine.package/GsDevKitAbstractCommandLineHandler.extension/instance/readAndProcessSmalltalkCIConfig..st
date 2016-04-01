*GsDevKit-SmalltalkCI-CommandLine
readAndProcessSmalltalkCIConfig: aFilePathString
	| ci ciSpec |
	ci := SmalltalkCI platformClass basicNew
		readSTONSpec: aFilePathString;
		yourself.
	ciSpec := ci spec.
	ciSpec configuring do: [ :configSpec | self applyOptionsFromConfigurationSpec: configSpec ]