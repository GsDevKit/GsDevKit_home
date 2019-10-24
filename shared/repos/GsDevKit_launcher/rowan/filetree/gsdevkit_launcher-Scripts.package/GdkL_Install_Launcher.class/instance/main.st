main
main
  false
    ifTrue: [ 
      self stderr
        nextPutAll: 'clone :: ' , self clone printString;
        lf;
        nextPutAll: 'createStone :: ' , self createStone printString.
      self createStone
        ifTrue: [ 
          self stderr
            nextPutAll: ' -- ';
            nextPutAll: self stoneName ].
      self stderr lf ].
  self
    doClone;
    doCreateStone.
  ^ self summary