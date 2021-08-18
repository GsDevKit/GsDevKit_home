accessing
stoneHost
  ^ stoneHost ifNil: [ stoneHost := self defaultStoneHost ]