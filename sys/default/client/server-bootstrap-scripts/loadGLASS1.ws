"Third step in tODE load process: load GLASS1.
 Let GsUpgrader do the load. GsUpgrader package loaded during step 1 (upgradeGLASS.ws)."

Transcript cr; show: '---Step 3 of tODE bootstrap process: execute loadGLASS1.ws'.

Transcript cr; show: 'DEBUGGEM - PID: ', (System gemVersionAt: 'processId') asString, ' token: ', System listenForDebugConnection asString.
GsUpgrader batchErrorHandlingDo: [
  Transcript
    cr;
    show: '-----Upgrade GLASS1 using gsUpgrader'.
  GsUpgrader upgradeGLASS1. 
	Transcript 
		cr; 
		show: 'ClassOrganizer class >> _resetCachedOrganizer is '.
	Transcript show: ((ClassOrganizer class compiledMethodAt: #_resetCachedOrganizer otherwise: nil)
		ifNotNil: [ 'present' ]
		ifNil: [ 'ABSENT' ]) ].
false 
ifTrue: [
	System commit
] ifFalse: [
	| wait |
	wait := true.
	[ wait ] whileTrue: [ (Delay forSeconds: 1) wait ]
	].
