actions
evaluate: script

	|  response shell |
	shell := TDShell sessionDescription: self sessionDescription debugMode: true.
	shell batchMode: true.
	script
		linesDo: [ :line | 
			line isEmpty
				ifFalse: [ 
					Transcript
						cr;
						show: 'tode > ' , line.
					response := shell evaluate: line.
					Transcript
						cr;
						show: response ] ].
	Transcript cr