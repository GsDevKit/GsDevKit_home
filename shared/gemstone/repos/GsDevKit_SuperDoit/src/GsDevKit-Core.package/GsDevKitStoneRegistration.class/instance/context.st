accessing
context
  "Answer the stone context or reify one if no context exists"

  ^ context ifNil: [ context := self reifyContext ]