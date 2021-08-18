Accessing
mostRecentModificationTime
  "Answer the most recent modification time of registry entries"

  ^ ((self stones , self sourceRepos , self groups
    collect: [ :registryObject | registryObject modificationTime ])
    asSortedCollection: [ :a :b | a < b ]) last