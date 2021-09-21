accessing
exportTo: filepath extension: extension
  | stream old |
  old := self excludeNetLDIPort.
  [ 
  "when exporting to file system, we are interested in including netLDIPort.. i.v.s"
  self excludeNetLDIPort: false.
  stream := FileStream write: filepath , self name , extension.
  (STONWriter on: stream) nextPut: self.
  stream close ]
    ensure: [ self excludeNetLDIPort: old ]