user
osUserId
  osUserId == nil
    ifTrue: [ ^ System gemEnvironmentVariable: 'USER' ].
  ^ osUserId