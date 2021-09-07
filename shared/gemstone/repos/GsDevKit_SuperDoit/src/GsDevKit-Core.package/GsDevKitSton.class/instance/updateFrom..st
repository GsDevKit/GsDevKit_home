updating
updateFrom: aSerializable
  super updateFrom: aSerializable.
  self stonInstVarNames
    do: [ :instVarName | 
      | index |
      (index := self class offsetOfInstVar: instVarName) > 0
        ifTrue: [ self instVarAt: index put: (aSerializable instVarAt: index) ] ]