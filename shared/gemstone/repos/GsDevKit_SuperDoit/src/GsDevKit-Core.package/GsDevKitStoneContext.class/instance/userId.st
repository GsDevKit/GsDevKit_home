accessing
userId
  ^ userId ifNil: [ userId := self defaultUserId ]