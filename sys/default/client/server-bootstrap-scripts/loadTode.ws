"Fourth and final step in tODE load process: load tODE."

Transcript cr; show: '---Step 4 of tODE bootstrap process: execute loadTode.ws'.

GsUpgrader batchErrorHandlingDo: [
  | todeRepo debuggGem |
	debuggGem := false.
  todeRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_TODE' isClient: false.
  Transcript
    cr;
    show: '-----Install tODE using ', todeRepo.
  GsDeployer bulkMigrate: [ 
    [
debuggGem ifTrue: [
		Transcript cr; show: '-----DEBUGGEM ', 
							(System gemVersionReport at: 'processId') printString, 
							' ',
							System listenForDebugConnection printString.
].
		Metacello new
      baseline: 'Tode';
      repository: todeRepo;
      get;
      lock;
      load: 'GemStone Dev' ] 
				on: Error 
				do: [:ex |
debuggGem  ifTrue: [
					Transcript cr; 
						show: '-----DEBUGGEM ', 
							(System gemVersionReport at: 'processId') printString, 
							' ',
							System waitForDebug printString ]
ifFalse: [ex pass ].
				 ] ] ].
