[ | todeClientRepo filetreeRepo metacelloRepo stonRepo todeRepo |
  filetreeRepo := Smalltalk os environment at: 'GS_SHARED_REPO_PHARO3_FILETREE'.
  metacelloRepo := Smalltalk os environment at: 'GS_SHARED_REPO_METACELLO'.
  stonRepo := Smalltalk os environment at: 'GS_SHARED_REPO_STON'.
  todeRepo := Smalltalk os environment at: 'GS_SHARED_REPO_TODE'.
  todeClientRepo := Smalltalk os environment at: 'GS_SHARED_REPO_TODE_CLIENT'.
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
    load: #( 'batch' ).
  Metacello new
    baseline: 'Ston';
    repository: stonRepo;
    lock.
  Metacello new
    baseline: 'Tode';
    repository: todeRepo;
    lock;
    get.
  Metacello new
    baseline: 'TodeClient';
    repository: todeClientRepo;
    get;
    load:  #( 'Tode-CommandLine' ) ]
      on: Warning, MetacelloSkipDirtyPackageLoad
      do: [:ex | 
        (ex isKindOf: MetacelloSkipDirtyPackageLoad)
          ifTrue: [ 
            "Load over dirty packages"
            ex resume: false ]
          ifFalse: [
            Transcript cr; show: ex description.
            ex resume: true ] ].
