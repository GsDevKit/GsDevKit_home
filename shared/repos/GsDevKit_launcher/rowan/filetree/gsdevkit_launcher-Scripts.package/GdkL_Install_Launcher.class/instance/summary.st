actions
summary
  ^ summary
    ifNil: [ 
      summary := Dictionary new
        at: #'clone' put: #'skipped' -> 'no --clone option specified';
        at: #'populateStone' put: #'skipped' -> 'no --populate option specified';
        yourself ]