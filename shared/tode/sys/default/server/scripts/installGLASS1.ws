"Third step in tODE installation process: install GLASS1.
 Let GsUpgrader do the installation. GsUpgrader package loaded during step 1 (upgradeGLASS.ws)."

Transcript cr; show: '---Step 3 of tODE bootstrap process: execute installGLASS1.ws'.

GsUpgrader batchErrorHandlingDo: [
  | monticelloDir gofer |
  Transcript
    cr;
    show: '-----Upgrade GLASS1 using gsUpgrader'.
  GsUpgrader upgradeGLASS1 ].
