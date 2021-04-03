"Third step in tODE load process: load GLASS1.
 Let GsUpgrader do the load. GsUpgrader package loaded during step 1 (upgradeGLASS.ws)."

Transcript cr; show: '---Step 3 of tODE bootstrap process: execute loadGLASS1.ws'.

false ifTrue: [
	Transcript cr; show: 'DEBUGGEM ', (System gemVersionAt: 'processId') asString, ' ', System listenForDebugConnection asString; cr.
].
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
true ifTrue: [
	false ifTrue: [ System commit ]
] ifFalse: [
	| wait |
	wait := true.
	[ wait ] whileTrue: [ (Delay forSeconds: 1) wait ]
	].
