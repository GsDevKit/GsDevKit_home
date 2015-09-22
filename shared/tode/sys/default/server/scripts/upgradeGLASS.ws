"First step in tODE installation process: upgrade GLASS (if necessary).
 Should not change this script as GsUpgrader upgrades GLASS correctly."

Transcript cr; show: '---Step 1 of tODE bootstrap process: execute upgradeGlass.ws'.
[
  | monticelloDir gofer gsHome |
  Transcript
    cr;
    show: '-----Install GsUpgrader-Core package '.

  gsHome := GsFile _expandEnvVariable: 'GS_HOME' isClient: false.
  monticelloDir := ServerFileDirectory on: gsHome, '/tode/sys/local/monticello'.
  gofer := Gofer new
        package: 'GsUpgrader-Core';
        yourself.
  (monticelloDir fileNamesMatching: 'GsUpgrader-Core-*.mcz') size > 0
    ifTrue: [ 
      "local GsUpgrader-Core package"
      Transcript show: ' from $GS_HOME/tode/sys/local/monticello'.
      gofer repository: (MCDirectoryRepository new directory: monticelloDir) ]
    ifFalse: [ 
      "default repository"
      Transcript show: ' from http://ss3.gemtalksystems.com/ss/gsUpgrader'.
      gofer url: 'http://ss3.gemtalksystems.com/ss/gsUpgrader' ].
  gofer load.

  Transcript
    cr;
    show: '-----Upgrade GLASS using gsUpgrader'.

  (Smalltalk at: #GsUpgrader) upgradeGLASS ]
    on: Error, Halt do: [:ex |
      Transcript
        cr;
        show: '========>Server Stack: ', ex description printString;
        cr;
        show: (GsProcess stackReportToLevel: 500).
      Transcript
        cr;
        show: '========>Client Stack: ';
        cr.
      ex pass ].
