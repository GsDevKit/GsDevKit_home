defaults
defaultSourcePath
  stonePath ifNil: [ ^ Path * ('stones/' , self registryName) ].
  ^ Path from: stonePath