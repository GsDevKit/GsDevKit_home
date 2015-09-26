[ | gsSharedRepo |
  gsSharedRepo := Smalltalk os environment at: 'GS_SHARED_REPO'.
  Metacello new
    baseline: 'FileTree';
    repository: 'filetree://',gsSharedRepo, '/filetree/repository';
    lock.
  Metacello new
    baseline: 'Metacello';
    repository: 'filetree://',gsSharedRepo, '/metacello-work/repository';
    get.
  Metacello new
    baseline: 'Metacello';
    repository: 'filetree://',gsSharedRepo, '/metacello-work/repository';
    onConflict: [:ex | ex allow];
    load: #( 'Metacello-Core' ). "on windows, github and bitbucket repos aren't functional"
  Metacello new
    baseline: 'Ston';
    repository: 'filetree://',gsSharedRepo, '/ston/repository';
    lock.
  Metacello new
    baseline: 'Tode';
    repository: 'filetree://',gsSharedRepo, '/tode/repository';
    get.
  Metacello new
    baseline: 'Tode';
    repository: 'filetree://',gsSharedRepo, '/tode/repository';
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
