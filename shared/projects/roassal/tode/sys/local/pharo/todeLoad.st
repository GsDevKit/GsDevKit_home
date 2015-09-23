[ 
  "Roassal/Visualization todeLoad.st (loading `dev` version)"
  | gs_home |
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
    load: #('Core' 'Visualize') ]
      on: Warning
      do: [:ex | 
        Transcript cr; show: ex description.
        ex resume ].

