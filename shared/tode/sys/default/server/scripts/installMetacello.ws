"Second step in tODE installation process: lock Metacello if you want to use a non-standard repository.
 Install Metacello from local git clone."

Transcript cr; show: '---Step 2 of tODE bootstrap process: execute installMetacello.ws'.

GsUpgrader batchErrorHandlingDo: [
  | metacelloRepo filetreeRepo greaseRepo pharoCompatRepo glass1Repo rbRep stonRepo |
  metacelloRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_METACELLO' isClient: false.
  filetreeRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_GEMSTONE_FILETREE' isClient: false.
  greaseRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_GREASE' isClient: false.
  pharoCompatRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_PHARO_COMPAT' isClient: false.
  glass1Repo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_GLASS1' isClient: false.
  rbRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_RB' isClient: false.
  stonRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_STON' isClient: false.
  Transcript 
    cr; 
    show: 'Locking Metacello: ', metacelloRepo printString;
    cr; 
    show: 'Locking FileTree: ', filetreeRepo printString;
    cr; 
    show: 'Locking Grease: ', greaseRepo printString;
     cr; 
    show: 'Locking GLASS1: ', glass1Repo printString;
     cr; 
    show: 'Locking PharoCompatibility: ', pharoCompatRepo printString;
     cr; 
    show: 'Locking Ston: ',stonRepo printString;
     cr; 
    show: 'Locking RB: ', rbRepo printString;
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
    baseline: 'Grease';
    repository: greaseRepo;
    lock.
  Metacello new
    baseline: 'PharoCompatibility';
    repository: pharoCompatRepo;
    lock.
  Metacello new
    baseline: 'GLASS1';
    repository: glass1Repo;
    lock.
  Metacello new
    baseline: 'RB';
    repository: rbRepo;
    lock.
  Metacello new
    baseline: 'Ston';
    repository: stonRepo;
    lock.
    ].
