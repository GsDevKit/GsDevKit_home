*superdoit-solo-core
processInputFile
	"command line looks like the following:
               <path-to-topaz>/topaz <topaz arguments> -- <script-file-path> -- <script-args>
       "

	| args scriptArgStart argIndex scriptPath scriptFile scriptArgs scriptArgIndex |
	args := System commandLineArguments.
	scriptArgStart := args indexOf: '--'.
	argIndex := scriptArgStart + 1.	"arg after initial --"
	(scriptArgStart <= 0 or: [ argIndex > args size ])
		ifTrue: [ self error: 'input file is expected to be specified on the command line' ].
	scriptFile := args at: argIndex.
	scriptArgIndex := args indexOf: '--' startingAt: argIndex + 1.
	scriptArgs := scriptArgIndex = 0
		ifTrue: [ #() ]
		ifFalse: [ args copyFrom: scriptArgIndex + 1 to: args size ].

	scriptPath := scriptFile asFileReference.
	^ self new
		scriptPath: scriptPath;
		scriptArgs: scriptArgs;
		parseAndExecuteScriptFile: scriptPath;
		yourself
