"Second step in tODE load process: lock Metacello if you want to use a non-standard repository.
 load Metacello from local git clone."

Transcript cr; show: '---Step 2 of tODE bootstrap process: execute lock projects and upgrade Metacello'.

  [
  | gsDevKitInstalled metacelloRepo filetreeRepo greaseRepo pharoCompatRepo glass1Repo rbRepo stonRepo zincRepo zodiacRepo |
  gsDevKitInstalled := (Smalltalk includesKey: #GsUpgrader) not.
  gsDevKitInstalled
    ifTrue: [ 
      greaseRepo := 'filetree://$GS_HOME/shared/repos/gsdevkit/Grease/repository'.
      metacelloRepo := 'filetree://$GS_HOME/shared/repos/metacello/repository'.
      zodiacRepo := 'filetree://$GS_HOME/shared/repos/zodiac/repository'. ]
    ifFalse: [
      greaseRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_GREASE' isClient: false.
      metacelloRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_METACELLO' isClient: false.
      zodiacRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_ZODIAC' isClient: false. ].
  filetreeRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_GEMSTONE_FILETREE' isClient: false.
  pharoCompatRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_PHARO_COMPAT' isClient: false.
  glass1Repo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_GLASS1' isClient: false.
  rbRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_RB' isClient: false.
  stonRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_STON' isClient: false.
  zincRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_ZINC' isClient: false.
  
  Transcript 
    cr; 
    show: 'Locking Metacello: ', metacelloRepo printString;
    cr; 
    show: 'Locking FileTree: ', filetreeRepo printString;
    cr; 
    show: 'Locking GLASS1: ', glass1Repo printString;
    cr; 
    show: 'Locking PharoCompatibility: ', pharoCompatRepo printString;
    cr; 
    show: 'Locking Ston: ',stonRepo printString;
    cr; 
    show: 'Locking RB: ', rbRepo printString;
    cr; 
    show: 'Locking ZincHTTPComponents: ', zincRepo printString;
    cr; 
    show: 'Locking Zodiac: ', zodiacRepo printString;
    yourself.
  Metacello new
    baseline: 'Metacello';
    repository: metacelloRepo;
    lock.
  Metacello new
    baseline: 'FileTree';
    repository: filetreeRepo;
    lock.
  Metacello new
    baseline: 'PharoCompatibility';
    repository: pharoCompatRepo;
    lock.
  gsDevKitInstalled
    ifFalse: [ 
      Metacello new
        baseline: 'GLASS1';
        repository: glass1Repo;
        lock ].
  Metacello new
    baseline: 'RB';
    repository: rbRepo;
    lock.
  Metacello new
    baseline: 'ZincHTTPComponents';
    repository: zincRepo;
    lock.
  Metacello new
    baseline: 'Zodiac';
    repository: zodiacRepo;
    lock.
  Metacello new
    baseline: 'Ston';
    repository: stonRepo;
    lock.
  Transcript
    cr; 
    show: 'Lock and Load Grease (to ensure new repo is honored): ', greaseRepo printString.
  gsDevKitInstalled
    ifTrue: [
      Metacello new
        baseline: 'Grease';
        repository: greaseRepo;
        get;
        lock.
     System commit ]
    ifFalse: [ 
      (Metacello image
        configuration: [ :spec | spec name = 'Grease' ];
        list) do: [ :greaseSpec |
          Metacello image
            configuration: 'Grease';
            unregister ].
      Metacello new
        baseline: 'Grease';
        repository: greaseRepo;
        lock.
      Metacello new
        baseline: 'Grease';
        repository: greaseRepo;
        get.
      Metacello new
        baseline: 'Grease';
        repository: greaseRepo;
        load ] ]
        on: Error , Halt
        do: [ :ex | 
          Transcript
            cr;
            show: '========>Server Stack: ' , ex description printString;
            cr;
            show: (GsProcess stackReportToLevel: 500).
          Transcript
            cr;
            show: '========>Client Stack: ';
            cr.
          ex pass ]
