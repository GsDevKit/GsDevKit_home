actions
summary
  ^ summary
    ifNil: [ 
      summary := Dictionary new
        at: #'clone' put: #'skipped' -> 'no --clone option specified';
        at: #'createStone' put: #'skipped' -> 'no --create option specified';
        yourself ]