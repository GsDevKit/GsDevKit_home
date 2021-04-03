"Fourth and final step in tODE load process: load tODE."

Transcript cr; show: '---Step 4 of tODE bootstrap process: execute loadTode.ws'.

GsUpgrader batchErrorHandlingDo: [
  | todeRepo |
  todeRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_TODE' isClient: false.
  Transcript
    cr;
    show: '-----Install tODE using ', todeRepo.
  GsDeployer bulkMigrate: [ 
true ifTrue: [
	| wait defaultHandlers |
	Transcript cr; show: 'DEBUGGEM - ', (System gemVersionAt: 'processId') asString, ' ', System listenForDebugConnection asString.
	wait := true.
	defaultHandlers := AlmostOutOfMemory defaultHandlers.
	[ wait ] whileTrue: [ (Delay forSeconds: 1) wait ]
].
    Metacello new
      baseline: 'Tode';
      repository: todeRepo;
      get;
      lock;
      load: 'GemStone Dev' ] ].
