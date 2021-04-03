"Fourth and final step in tODE load process: load tODE."

Transcript cr; show: '---Step 4 of tODE bootstrap process: execute loadTode.ws'.

GsUpgrader batchErrorHandlingDo: [
  | todeRepo |
  todeRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_TODE' isClient: false.
  Transcript
    cr;
    show: '-----Install tODE using ', todeRepo.
Transcript show: ((ClassOrganizer class compiledMethodAt: #_resetCachedOrganizer otherwise: nil)
		ifNotNil: [ 'present' ]
		ifNil: [ 'ABSENT' ]).
  GsDeployer bulkMigrate: [ 
    [ Metacello new
      baseline: 'Tode';
      repository: todeRepo;
      get;
      lock;
      load: 'GemStone Dev']
				on: Error
				do: [:ex |
true ifTrue: [
	| wait |
Transcript show: ((ClassOrganizer class compiledMethodAt: #_resetCachedOrganizer otherwise: nil)
		ifNotNil: [ 'present' ]
		ifNil: [ 'ABSENT' ]).
	Transcript cr; show: 'DEBUGGEM ', (System gemVersionAt: 'processId') asString, ' ', System listenForDebugConnection asString.
	wait := true.
	[ wait ] whileTrue: [ (Delay forSeconds: 1) wait ]
].
					 ] ] ].
