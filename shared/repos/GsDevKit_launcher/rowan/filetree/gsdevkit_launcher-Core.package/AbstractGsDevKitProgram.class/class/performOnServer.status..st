shell utilities
performOnServer: commandLine status: statusBlock
  | performOnServerStatusArray |
  performOnServerStatusArray := System _performOnServer: commandLine.
  ^ statusBlock value: performOnServerStatusArray