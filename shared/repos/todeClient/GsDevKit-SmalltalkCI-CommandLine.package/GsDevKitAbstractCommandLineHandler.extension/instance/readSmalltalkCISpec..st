*GsDevKit-SmalltalkCI-CommandLine
readSmalltalkCISpec: aFilePathString
	^ SmalltalkCI platformClass basicNew
		readSTONSpec: aFilePathString;
		yourself