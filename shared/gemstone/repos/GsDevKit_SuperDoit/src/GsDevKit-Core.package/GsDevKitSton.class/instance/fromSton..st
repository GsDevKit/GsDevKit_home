ston
fromSton: stonReader
  stonReader
    parseMapDo: [ :instVarName :value | 
      | index |
      (index := self class offsetOfInstVar: instVarName) > 0
        ifTrue: [ 
          [ self instVarAt: index put: value ]
            on: Error
            do: [ :ex | 
              "If the instance variable for a GsDevKitStonSerializable is missing ... it is for a good reason ... keep on truckin'"
               ] ] ]