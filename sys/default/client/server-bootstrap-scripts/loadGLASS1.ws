"Third step in tODE load process: load GLASS1.
 Let GsUpgrader do the load. GsUpgrader package loaded during step 1 (upgradeGLASS.ws)."

Transcript cr; show: '---Step 3 of tODE bootstrap process: execute loadGLASS1.ws'.

false ifTrue: [
	Transcript cr; show: 'DEBUGGEM ', (System gemVersionAt: 'processId') asString, ' ', System listenForDebugConnection asString; cr.
].
GsUpgrader batchErrorHandlingDo: [
	| tmps key |
  Transcript
    cr;
    show: '-----Upgrade GLASS1 using gsUpgrader'.
  GsUpgrader upgradeGLASS1. 
	Transcript 
		cr; 
		show: 'ClassOrganizer class >> _resetCachedOrganizer is '.
	Transcript show: ((ClassOrganizer class compiledMethodAt: #_resetCachedOrganizer otherwise: nil)
		ifNotNil: [ 'present' ]
		ifNil: [ 'ABSENT' ]).
	tmps := SessionTemps current.
	key := GsPackagePolicy current sessionMethodDictionaryGlobalName.
	((tmps at: key otherwise: nil) includes: ClassOrganizer)
		ifTrue: [ Transcript cr; show: 'ClassOrganizer is present in session method set' ]
		ifFalse: [ Transcript cr; show: '*****ClassOrganizer is NOT present in session method set*****' ] ].
true ifTrue: [
	false ifTrue: [ System commit ]
] ifFalse: [
	| wait |
	wait := true.
	[ wait ] whileTrue: [ (Delay forSeconds: 1) wait ]
	].
