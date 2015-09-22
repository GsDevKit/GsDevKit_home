"Fourth and final step in tODE installation process: install tODE."

Transcript cr; show: '---Step 4 of tODE bootstrap process: execute installTode.ws'.

GsUpgrader batchErrorHandlingDo: [
  Transcript
    cr;
    show: '-----Upgrade tODE to latest 0.0.? tag'.
  GsDeployer bulkMigrate: [ 
    Metacello new
      baseline: 'Tode';
      repository: 'filetree:///opt/git/tode/repository';
      get;
      load: 'GemStone Dev' ] ].
