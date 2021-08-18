accessing
gemTask
  ^ gemTask ifNil: [ gemTask := self defaultGemTask ]