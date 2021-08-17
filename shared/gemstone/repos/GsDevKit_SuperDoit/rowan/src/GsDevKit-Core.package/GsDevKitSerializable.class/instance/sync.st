utilities
sync
  "If lastModifiedTime is different from sourceReference modificationTime, update the oldest version"

  (self sourceReference exists not
    or: [ self sourceReference modificationTime < self modificationTime ])
    ifTrue: [ self export ]
    ifFalse: [ 
      self sourceReference modificationTime = self modificationTime
        ifFalse: [ self import ] ]