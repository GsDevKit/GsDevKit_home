"Fourth and final step in tODE load process: load tODE."

Transcript cr; show: '---Step 4 of tODE bootstrap process: execute loadTode.ws'.

GsUpgrader batchErrorHandlingDo: [
  | todeRepo |
  todeRepo := GsFile _expandEnvVariable: 'GS_SHARED_REPO_TODE' isClient: false.
  Transcript
    cr;
    show: '-----Install tODE using ', todeRepo.
  GsDeployer bulkMigrate: [ 
    Metacello new
      baseline: 'Tode';
      repository: todeRepo;
      get;
      lock;
      load: 'GemStone Dev' ] ].
