nrs
netldiArgsOn: netldiArgs
  netldiArgs
    add: '-g';
    add: '-a';
    add: self osUserId.
  self netLDIPort isEmpty
    ifFalse: [ 
      netldiArgs
        add: '-P';
        add: self netLDIPort ].
  self netLDIPortRange
    ifNotNil: [ :range | 
      | vrsnAr |
      vrsnAr := self gemstoneVersion subStringsDelimitedBy: $..
      ((vrsnAr at: 1) asNumber < 3
        or: [ (vrsnAr at: 1) asNumber = 3 and: [ (vrsnAr at: 2) asNumber < 2 ] ])
        ifTrue: [ 
          "after GemStone 3.2, port range no longer accepted by netldi"
          range isEmpty
            ifFalse: [ 
              netldiArgs
                add: '-p';
                add: range ] ]
        ifFalse: [ 
          Error
            signal:
              'port range: ' , range printString
                ,
                  ' no longer needed for netldi in GemStone versions 3.2 and later' ] ].
  netldiArgs
    add: self netLDI;
    yourself