ston
fromSton: stonReader
  stonReader
    parseMapDo: [ :instVarName :value | 
      [ self instVarAt: (self class instVarNames indexOf: instVarName) put: value ]
        on: Error
        do: [ :ex | 
          "If the instance variable for a TodeClient is missing ... it is for a good reason ... keep on truckin'"
           ] ]