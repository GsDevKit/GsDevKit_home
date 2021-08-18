accessing
netLDI
  ^ netLDI ifNil: [ netLDI := self defaultNetLDI ]