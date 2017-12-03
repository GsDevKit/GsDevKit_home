"Third step in tODE load process: load GLASS1.
 Let GsUpgrader do the load. GsUpgrader package loaded during step 1 (upgradeGLASS.ws)."


Smalltalk 
  at: #GsUpgrader 
  ifPresent: [:gsUpgrader |
    Transcript cr; show: '---Step 3 of tODE bootstrap process: execute loadGLASS1.ws'.
    Transcript
      cr;
      show: '-----Upgrade GLASS1 using gsUpgrader'.
    gsUpgrader batchErrorHandlingDo: [
      gsUpgrader upgradeGLASS1 ].
    ^ self ].
Transcript
  cr;
  show: '-----GsDevKit is installed, skip step 3 -- no need to upgrade GLASS1'.
