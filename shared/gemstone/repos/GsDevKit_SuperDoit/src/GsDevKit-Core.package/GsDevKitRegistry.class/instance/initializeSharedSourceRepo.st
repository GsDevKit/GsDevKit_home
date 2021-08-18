initialization
initializeSharedSourceRepo
  "Setup the Shared Source Repo. This is the default source repo that will be used when no other is speficied"

  | sharedSourceRepo |
  sharedSourceRepo := self newSourceRepoWithRegistryName: 'shared'.
  sharedSourceRepo sourceReference createDirectory.
  ^ sharedSourceRepo