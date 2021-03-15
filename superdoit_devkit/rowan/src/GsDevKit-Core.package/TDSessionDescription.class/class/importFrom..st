instance creation
importFrom: filepath
  [ 
  FileStream
    readOnlyFileNamed: filepath
    do: [ :fileStream | ^ STON fromString: fileStream contents ] ]
    on: (Smalltalk at: #'FileDoesNotExistException' ifAbsent: [ Error ])
    do: [ :ex | 
      self
        error:
          'The session description file ' , filepath printString , ' cannot be found.' ]