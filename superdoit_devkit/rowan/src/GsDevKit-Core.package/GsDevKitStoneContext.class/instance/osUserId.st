accessing
osUserId
  ^ osUserId ifNil: [ osUserId := System gemEnvironmentVariable: 'USER' ]