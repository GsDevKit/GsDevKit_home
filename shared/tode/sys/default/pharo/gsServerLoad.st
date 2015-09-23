[ | gsSharedTodeRepo |
  "gs_server pharo gsServerLoad.st"
  gsSharedTodeRepo := Smalltalk os environment at: 'GS_SHARED_TODE_REPOSITORY'.
  Metacello new
    configuration: 'TodeClient';
    version: #gsdev_home;
    repository: 'filetree://', gsSharedTodeRepo;
    get;
    load ]
      on: Warning, MetacelloSkipDirtyPackageLoad
      do: [:ex | 
        (ex isKindOf: MetacelloSkipDirtyPackageLoad)
          ifTrue: [ 
            "Load over dirty packages"
            ex resume: false ]
          ifFalse: [
            Transcript cr; show: ex description.
            ex resume: true ] ].
