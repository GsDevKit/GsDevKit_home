session descriptions
addFieldsToSessionDescription: description
  | vrsnAr |
  vrsnAr := description gemstoneVersion subStringsDelimitedBy: $..
  ((vrsnAr at: 1) asNumber < 3
    or: [ (vrsnAr at: 1) asNumber = 3 and: [ (vrsnAr at: 2) asNumber < 2 ] ])
    ifTrue: [ 
      "after GemStone 3.2, port range no longer accepted by startnetldi"
      description netLDIPortRange: ''.
      (vrsnAr at: 1) asNumber = 2
        ifTrue: [ 
          | vrsnStr |
          vrsnStr := WriteStream on: String new.
          vrsnAr do: [ :each | vrsnStr nextPutAll: each ].
          description gciLibraryName: 'libgcirpc64-' , vrsnStr contents ] ].
  ^ description