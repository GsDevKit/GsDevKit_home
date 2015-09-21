[ 
  "Tests pharo todeLoad.st"
  | gs_home metacello |
  gs_home := Smalltalk os environment at: 'GS_HOME'.
  Metacello new
    baseline: 'Metacello';
    repository: 'github://dalehenrich/metacello-work:master/repository';
    get.
  Metacello new
    baseline: 'Metacello';
    repository: 'github://dalehenrich/metacello-work:master/repository';
    onConflict: [:ex | ex allow];
    load.
  "If tODE is already loaded, clear github cache for baseline"
  Metacello image
    baseline: 'Tode';
    get.
  Metacello new
    configuration: 'TodeClient';
    version: #dev;
    repository: 'filetree://', gs_home, '/repository';
    get;
    load  ]
      on: Warning
      do: [:ex | 
        Transcript cr; show: ex description.
        ex resume ].

