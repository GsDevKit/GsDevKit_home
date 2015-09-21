"Fourth and final step in tODE installation process: install tODE."
Transcript
  cr;
  show: '-----Upgrading tODE to latest dev branch version'.
GsDeployer bulkMigrate: [ 
  Metacello new
    baseline: 'Tode';
    repository: 'github://dalehenrich/tode:dev/repository';
    onConflict: [ :ex | ex allow ];
    get;
    load: 'GemStone Dev';
    lock ]
