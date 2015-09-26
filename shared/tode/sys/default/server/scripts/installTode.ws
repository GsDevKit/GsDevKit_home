"Fourth and final step in tODE installation process: install tODE."

Transcript cr; show: '---Step 4 of tODE bootstrap process: execute installTode.ws'.

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
      load: 'GemStone Dev' ] ].
