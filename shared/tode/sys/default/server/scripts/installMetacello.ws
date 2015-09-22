"Second step in tODE installation process: lock Metacello if you want to use a non-standard repository.
 Install Metacello from local git clone."

Transcript cr; show: '---Step 2 of tODE bootstrap process: execute installMetacello.ws'.

GsUpgrader batchErrorHandlingDo: [
  "Uncomment and edit the following to lock the desired Metacello version/repository. 
   By default will let GsUpgrader install Metacello in Step 3 (installGLASS1.ws)."
  "
   If you want to change the repository used to load Metacello, use the Metacello `lock` command. 
  "
  ].
