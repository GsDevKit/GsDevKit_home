ston
stonOn: stonWriter
  stonWriter
    writeObject: self
    streamMap: [ :dictionary | 
      self stonInstVarNames
        do: [ :each | dictionary at: each asSymbol put: (self instVarAt: (self class allInstVarNames indexOf: each asSymbol)) ] ]