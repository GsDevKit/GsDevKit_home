*GsDevKit-SmalltalkCI-CommandLine
readAndProcessSmalltalkCIConfig: aFilePathString
	| ci |
	ci := self readSmalltalkCISpec: aFilePathString.
	ci compatibleConfigurations do: [ :configSpec | self applyOptionsFromConfigurationSpec: configSpec ]