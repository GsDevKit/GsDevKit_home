*gsdevkit_launcher-program-rowan
loadAndExecuteScriptClassFile: script_file args: args scriptName: theScriptName workingDir: working_dir projectName: projectName packageName: packageName symDictName: symbolDictName
	| projectDefinition scriptClassDefinition scriptClass |
	self _createScriptExecutionSymbolDictionaryNamed: symbolDictName.
	projectDefinition := Rowan stashTools classTool
		loadTonelClassFile: script_file
		projectName: projectName
		packageName: packageName
		symDictName: symbolDictName.
	scriptClassDefinition := projectDefinition packages values any classDefinitions
		values any.
	scriptClass := ((GsCurrentSession currentSession symbolList
		objectNamed: scriptClassDefinition name)
		scriptFilePath: script_file
		args: args
		workingDir: working_dir)
		projectName: projectName;
		packageName: packageName;
		scriptName: theScriptName;
		yourself.
	^ scriptClass setupAndExecuteScript