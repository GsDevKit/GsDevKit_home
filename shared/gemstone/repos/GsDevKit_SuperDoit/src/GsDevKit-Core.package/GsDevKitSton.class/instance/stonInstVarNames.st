ston
stonInstVarNames
  | orderedInstVars |
  orderedInstVars := self class allInstVarNames asOrderedCollection.
  orderedInstVars removeAll: self excludedInstVarNames.
  ^ orderedInstVars