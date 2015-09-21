accessing
runShellCommand: shellCommandPath args: shellArgumentArray
	| out err proc outName errName pid success stdOut stdErr |
	pid := OSProcess thisOSProcess pid.
	outName := '/tmp/gsdevkit' , pid printString , '.out'.
	out := FileStream forceNewFileNamed: outName.
	errName := '/tmp/gsdevkit' , pid printString , '.err'.
	err := FileStream forceNewFileNamed: errName.
	proc := OSProcess thisOSProcess
		forkJob: shellCommandPath
		arguments: shellArgumentArray
		environment: nil
		descriptors: (Array with: nil with: out with: err).
	proc ifNil: [ OSProcess noAccessorAvailable ].
	[ proc isRunning ] whileTrue: [ (Delay forMilliseconds: 100) wait ].
	success := proc succeeded.
	out close.
	err close.
	FileStream readOnlyFileNamed: outName do: [ :fileStream | stdOut := fileStream contents ].
	FileStream readOnlyFileNamed: errName do: [ :fileStream | stdErr := fileStream contents ].
	success
		ifFalse: [ 
			Transcript
				cr;
				show: 'Error running shell command: ' , shellCommandPath printString;
				cr;
				show: 'with args:'.
			shellArgumentArray
				do: [ :arg | 
					Transcript
						cr;
						tab;
						show: arg ].
			Transcript
				cr;
				show: 'STDOUT: ' , stdOut printString;
				cr;
				show: 'STDERR: ' , stdErr.
			self error: 'Shell command: ' , shellCommandPath printString , ' failed. ' ].
	^ stdOut