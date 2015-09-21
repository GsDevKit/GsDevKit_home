actions
evaluate
	"we only take one swipe at stdin, so this command is not appropriate for use as a REPL"

	| script |
	script := OSProcess readFromStdIn.
	script
		ifNil: [ 
			"no stdin available"
			^ self ].
	^ self evaluate: script