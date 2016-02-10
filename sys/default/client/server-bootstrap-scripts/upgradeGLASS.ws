"First step in tODE load process: upgrade GLASS (if necessary).
 Should not change this script as GsUpgrader upgrades GLASS correctly."

  Transcript
    cr;
    show: '---Step 1 of tODE bootstrap process: execute upgradeGlass.ws'.
  [ 
  | monticelloDir gofer sysLocal |
  Transcript
    cr;
    show: '-----Install GsUpgrader-Core package '.
  sysLocal := GsFile _expandEnvVariable: 'GS_SYS_LOCAL_SERVER' isClient: false.
  monticelloDir := ServerFileDirectory on: sysLocal , '/monticello'.
  gofer := Gofer new
    package: 'GsUpgrader-Core';
    yourself.
  (monticelloDir fileNamesMatching: 'GsUpgrader-Core-*.mcz') size > 0
    ifTrue: [ 
      "local GsUpgrader-Core package"
      Transcript show: ' from $GS_SYS_LOCAL/monticello'.
      gofer repository: (MCDirectoryRepository new directory: monticelloDir).
      gofer load ]
    ifFalse: [ 
      | gofer sysDefault repositoryDir oldCache |
      sysDefault := GsFile
        _expandEnvVariable: 'GS_SYS_DEFAULT_SERVER'
        isClient: false.
      repositoryDir := ServerFileDirectory
        on: sysDefault , '/gsUpgrader/repository'.
      (repositoryDir fileNamesMatching: 'GsUpgrader-Core-*.mcz') size > 0
        ifTrue: [ 
          "Cached GsUpgrader-Core package"
          Transcript
            show:
              ' from GsUpgrader cache ($GS_SYS_DEFAULT/gsUpgrader/repository)'.
          gofer repository: (MCDirectoryRepository new directory: repositoryDir).
          gofer load ]
        ifFalse: [ 
          oldCache := MCCacheRepository default.
          [ 
          MCCacheRepository setDefault: repositoryDir.
          Transcript show: ' from http://ss3.gemtalksystems.com/ss/gsUpgrader'.
          gofer url: 'http://ss3.gemtalksystems.com/ss/gsUpgrader'.
          gofer load ]
            ensure: [ MCCacheRepository setDefault: oldCache ] ] ].
  Transcript
    cr;
    show: '-----Upgrade GLASS using GsUpgrader class>>upgradeGLASSForGsDevKit_home'.
  (Smalltalk at: #'GsUpgrader') upgradeGLASSForGsDevKit_home ]
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
