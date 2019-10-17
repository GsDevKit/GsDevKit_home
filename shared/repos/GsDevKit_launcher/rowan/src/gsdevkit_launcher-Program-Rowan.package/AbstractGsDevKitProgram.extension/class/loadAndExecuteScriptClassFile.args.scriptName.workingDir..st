*gsdevkit_launcher-program-rowan
loadAndExecuteScriptClassFile: script_file args: stash_args scriptName: theScriptName workingDir: working_dir
	^ self
		loadAndExecuteScriptClassFile: script_file
		args: stash_args
		scriptName: theScriptName
		workingDir: working_dir
		projectName: '__EXECUTE_STASH_SCRIPT_PROJECT__'
		packageName: '__EXECUTE_STASH_SCRIPT_PACKAGE__'
		symDictName: '_EXECUTE_STASH_SCRIPT_SymbolDict__'