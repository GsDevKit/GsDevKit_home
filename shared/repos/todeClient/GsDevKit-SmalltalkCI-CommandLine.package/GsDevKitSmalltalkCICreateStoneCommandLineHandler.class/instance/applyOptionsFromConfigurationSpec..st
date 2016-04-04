activations
applyOptionsFromConfigurationSpec: configSpec
	configSpec gemConfPath ifNotNil: [ :path | self createConfFileLn: path  ].
	configSpec systemConfPath ifNotNil: [ :path | self createConfFileLn: path  ]