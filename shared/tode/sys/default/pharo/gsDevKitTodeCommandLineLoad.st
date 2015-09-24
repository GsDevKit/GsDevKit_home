[ | gsSharedTodeRepo |
  "gs_server pharo gsServerLoad.st"
  gsSharedTodeRepo := Smalltalk os environment at: 'GS_SHARED_TODE_REPOSITORY'.
  "Expect that gsDevKitCommandLineLoad.st already loaded ... assume Metacello is up-to-date"
  "If tODE is already loaded, clear github cache for baseline"
  Metacello image
    baseline: 'Tode';
    get.
  Metacello new
    baseline: 'TodeClient';
    repository: 'filetree://', gsSharedTodeRepo;
    get;
    load: #( 'Tode-CommandLine' ) ]
      on: Warning, MetacelloSkipDirtyPackageLoad
      do: [:ex | 
        (ex isKindOf: MetacelloSkipDirtyPackageLoad)
          ifTrue: [ 
            "Load over dirty packages"
            ex resume: false ]
          ifFalse: [
            Transcript cr; show: ex description.
            ex resume: true ] ].
