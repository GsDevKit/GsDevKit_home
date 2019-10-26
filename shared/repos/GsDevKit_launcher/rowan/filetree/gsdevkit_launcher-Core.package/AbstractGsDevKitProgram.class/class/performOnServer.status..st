shell utilities
performOnServer: commandLine status: statusBlock
  | performOnServerStatusArray |
  performOnServerStatusArray := System
    _performOnServer: commandLine
    withShell: '/bin/bash'.
  ^ statusBlock value: performOnServerStatusArray