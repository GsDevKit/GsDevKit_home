actions
evaluate: script
	| response shell |
	shell := TDShell sessionDescription: self sessionDescription debugMode: true.
	shell batchMode: true.
	script isEmpty
		ifFalse: [ 
			response := shell evaluateSmalltalk: script.
			Transcript
				cr;
				show: 'serverDoIt result --> ', response printString].
	Transcript cr