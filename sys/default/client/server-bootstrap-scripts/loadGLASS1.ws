"Third step in tODE load process: load GLASS1.
 Let GsUpgrader do the load. GsUpgrader package loaded during step 1 (upgradeGLASS.ws)."

Transcript cr; show: '---Step 3 of tODE bootstrap process: execute loadGLASS1.ws'.

GsUpgrader batchErrorHandlingDo: [
  Transcript
    cr;
    show: '-----Upgrade GLASS1 using gsUpgrader'.
  GsUpgrader upgradeGLASS1. 
	Transcript 
		cr; 
		show: 'ClassOrganizer class >> _resetCachedOrganizer is '.
	Transcript show: ((ClassOrganizer compiledMethodAt: #_resetCachedOrganizer otherwise: nil)
		ifNotNil: [ 'present' ]
		ifNil: [ 'ABSENT' ]) ].
	System commit
