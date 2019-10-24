instance creation
scriptFilePath: stashFilePath args: args workingDir: workingDir
	^ self new
		stashFilePath: stashFilePath;
		stashArgString: args;
		workingDirectoryPath: workingDir;
		yourself