accessing
gemHost
  ^ gemHost ifNil: [ gemHost := self defaultGemHost ]