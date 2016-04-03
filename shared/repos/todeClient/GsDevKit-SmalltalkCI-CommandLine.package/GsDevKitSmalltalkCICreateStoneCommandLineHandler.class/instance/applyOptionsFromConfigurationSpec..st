activations
applyOptionsFromConfigurationSpec: configSpec
	configSpec gemConfPath ifNotNil: [ :path | self createConfFileLn: path asFileReference ].
	configSpec systemConfPath ifNotNil: [ :path | self createConfFileLn: path asFileReference ]