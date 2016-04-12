activations
applyOptionsFromConfigurationSpec: configSpec
	configSpec gemConfPath ifNotNil: [ :path | self createConfFileLn: path ].
	configSpec stoneConfPath ifNotNil: [ :path | self createConfFileLn: path as: self stoneName , '.conf' ]