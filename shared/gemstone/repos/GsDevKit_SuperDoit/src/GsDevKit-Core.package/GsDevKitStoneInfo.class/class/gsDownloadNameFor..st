accessing
gsDownloadNameFor: aGsVersionString
  self isMacOSX
    ifTrue: [ ^ 'GemStone64Bit' , aGsVersionString , '-i386.Darwin' ]
    ifFalse: [ 
      self isUnix
        ifTrue: [ ^ 'GemStone64Bit' , aGsVersionString , '-x86_64.Linux' ]
        ifFalse: [ 
          self isWindows
            ifTrue: [ ^ 'GemBuilderC' , aGsVersionString , '-x86.Windows_NT' ] ] ].
  ^ ''