[ | todeClientRepo filetreeRepo metacelloRepo stonRepo todeRepo smalltalkCIRepo |
  filetreeRepo := Smalltalk os environment at: 'GS_SHARED_REPO_PHARO3_FILETREE'.
  metacelloRepo := Smalltalk os environment at: 'GS_SHARED_REPO_METACELLO'.
  stonRepo := Smalltalk os environment at: 'GS_SHARED_REPO_STON'.
  todeRepo := Smalltalk os environment at: 'GS_SHARED_REPO_TODE'.
  todeClientRepo := Smalltalk os environment at: 'GS_SHARED_REPO_TODE_CLIENT'.
  smalltalkCIRepo := Smalltalk os environment at: 'GS_SHARED_REPO_SMALLTALKCI'.
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
    baseline: 'SmalltalkCI';
    repository: smalltalkCIRepo;
    get;
    lock.
   Metacello new
    baseline: 'TodeClient';
    repository: todeClientRepo;
    get;
    load:  #( 'SmalltalkCI-CommandLine' );
    lock.
  ]
      on: Warning, MetacelloSkipDirtyPackageLoad
      do: [:ex | 
        (ex isKindOf: MetacelloSkipDirtyPackageLoad)
          ifTrue: [ 
            "Load over dirty packages"
            ex resume: false ]
          ifFalse: [
            Transcript cr; show: ex description.
            ex resume: true ] ].
