accessing
username
  username ifNil: [ username := System gemEnvironmentVariable: 'USER' ].
  ^ username