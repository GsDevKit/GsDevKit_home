"Second step in tODE installation process: lock Metacello if you want to use a non-standard repository.
 Install Metacello from local git clone."

Transcript cr; show: '---Step 2 of tODE bootstrap process: execute installMetacello.ws'.

GsUpgrader batchErrorHandlingDo: [
  | metacelloRepo filetree |
  metacelloRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_METACELLO' isClient: false.
  filetreeRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_GEMSTONE_FILETREE' isClient: false.
  Transcript 
    cr; 
    show: 'Locking Metacello: ', metacelloRepo printString;
    cr; 
    show: 'Locking FileTree: ', filetreeRepo printString.
  Metacello new
    baseline: 'Metacello';
    repository: metacelloRepo;
    lock.
  Metacello new
    baseline: 'FileTree';
    repository: filetreeRepo;
    lock.
    ].
