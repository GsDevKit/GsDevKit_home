shell utilities
downloadHttps: httpsUrl to: filePath
  | downloadCmd |
  downloadCmd := (self which: 'wget')
    ifNotNil: [ :cmdPath | cmdPath , ' --no-verbose -O ' , filePath , ' ' , httpsUrl ]
    ifNil: [ 
      (self which: 'curl')
        ifNotNil: [ :cmdPath | cmdPath , ' -O -s -S -o ' , filePath , ' ' , httpsUrl ]
        ifNil: [ self error: 'neither wget nor curl found ... cannot download' ] ].
  self
    execute: downloadCmd
    exitStatusBlock: [ :exitStatus :stdout :stderr | 
      exitStatus = 0
        ifTrue: [ ^ stdout ].
      Error signal: 'Error , ' , stderr asString ]