[ | filetreeRepo metacelloRepo stonRepo todeRepo |
  filetreeRepo := Smalltalk os environment at: 'GS_SHARED_REPO_PHARO_FILETREE'.
  metacelloRepo := Smalltalk os environment at: 'GS_SHARED_REPO_METACELLO'.
  stonRepo := Smalltalk os environment at: 'GS_SHARED_REPO_STON'.
  todeRepo := Smalltalk os environment at: 'GS_SHARED_REPO_TODE'.

  converted := ({filetreeRepo. metacelloRepo. stonRepo. todeRepo.}
    collect: [ :repoSpec | 
      | fileSpec path |
      (repoSpec beginsWith: 'filetree://')
        ifTrue: [ 
          "convert the disk patch into a windows path"
          fileSpec := repoSpec copyFrom: 12 to: repoSpec size.
          path := fileSpec asFileReference path segments.
          path at: 1 put: (path at: 1) , ':'.
          'filetree://' , (AbsolutePath withAll: path) asFileReference fullName ]
        ifFalse: [ repoSpec ] ])
    do: [ :spec | 
      Metacello new
        baseline: 'Metacello';
        repository: spec;
        get ].
  filetreeRepo := converted at: 1.
  metacelloRepo := converted at: 2.
  stonRepo := converted at: 3.
  todeRepo := converted at: 4.
  Metacello new
    baseline: 'FileTree';
    repository: filetreeRepo;
    lock.
  Metacello new
    baseline: 'Metacello';
    repository: metacelloRepo;
    get.
  Metacello new
    baseline: 'Metacello';
    repository: metacelloRepo;
    onConflict: [:ex | ex allow];
    load: #( 'Metacello-Core' ). "on windows, github and bitbucket repos aren't functional"
  Metacello new
    baseline: 'Ston';
    repository: stonRepo;
    lock.
  Metacello new
    baseline: 'Tode';
    repository: todeRepo;
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
