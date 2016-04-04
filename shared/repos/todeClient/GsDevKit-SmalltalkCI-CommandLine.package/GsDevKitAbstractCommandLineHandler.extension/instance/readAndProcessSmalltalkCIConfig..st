*GsDevKit-SmalltalkCI-CommandLine
readAndProcessSmalltalkCIConfig: aFilePathString
	| ci |
	ci := self readSmalltalkCISpec: aFilePathString.
	(ci compatibleConfigurationsFor: #gemstone) do: [ :configSpec | self applyOptionsFromConfigurationSpec: configSpec ]