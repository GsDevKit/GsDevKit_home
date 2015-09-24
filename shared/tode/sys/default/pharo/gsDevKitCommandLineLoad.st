[ | gsSharedTodeRepo |
  "gs_server pharo gsServerLoad.st"
  gsSharedTodeRepo := Smalltalk os environment at: 'GS_SHARED_TODE_REPOSITORY'.
  Metacello new
    baseline: 'Metacello';
    repository: 'github://dalehenrich/metacello-work:master/repository';
    get.
  Metacello new
    baseline: 'Metacello';
    repository: 'github://dalehenrich/metacello-work:master/repository';
    onConflict: [:ex | ex allow];
    load: #( 'Core' ).
  false ifTrue: [
    "To avoid GitHub API rate limits, edit and define github username/password in tode client image"
    "Change `false` to `true` execute this block"
    Smalltalk at: #MCGitHubRepository ifPresent: [:cls |
      cls
        siteUsername: '';
        sitePassword: ''] ].
  "If tODE is already loaded, clear github cache for baseline"
  Metacello image
    baseline: 'Tode';
    get.
  Metacello new
    baseline: 'TodeClient';
    repository: 'filetree://', gsSharedTodeRepo;
    get;
    load:  #( 'CommandLine' ) ]
      on: Warning, MetacelloSkipDirtyPackageLoad
      do: [:ex | 
        (ex isKindOf: MetacelloSkipDirtyPackageLoad)
          ifTrue: [ 
            "Load over dirty packages"
            ex resume: false ]
          ifFalse: [
            Transcript cr; show: ex description.
            ex resume: true ] ].
