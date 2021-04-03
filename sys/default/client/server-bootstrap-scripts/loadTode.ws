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
	| wait tmps key |
Transcript cr; show: 'ERROR: ', ex description.
Transcript show: ((ClassOrganizer class compiledMethodAt: #_resetCachedOrganizer otherwise: nil)
		ifNotNil: [ 'present' ]
		ifNil: [ 'ABSENT' ]).
	tmps := SessionTemps current.
	key := GsPackagePolicy current sessionMethodDictionaryGlobalName.
	((tmps at: key otherwise: nil) includes: ClassOrganizer)
		ifTrue: [ Transcript cr; show: 'ClassOrganizer is present in session method set' ]
		ifFalse: [ Transcript cr; show: '*****ClassOrganizer is NOT present in session method set*****' ].
	Transcript cr; show: 'DEBUGGEM ', (System gemVersionAt: 'processId') asString, ' ', System listenForDebugConnection asString.
	wait := true.
	[ wait ] whileTrue: [ (Delay forSeconds: 1) wait ]
]
	ifFalse: [ ex pass ] ] ] ].
