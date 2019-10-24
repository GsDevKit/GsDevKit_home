accessing
repositoryCloneSpecs
  ^ {(Dictionary new
    at: 'remoteUrl' put: 'https://github.com/GemTalk/Rowan.git';
    at: 'repositoryDirName' put: 'Rowan';
    at: 'committish' put: 'gsdevkit_launcher';
    yourself).
  (Dictionary new
    at: 'remoteUrl' put: 'https://github.com/dalehenrich/st_launcher.git';
    at: 'repositoryDirName' put: 'st_launcher';
    at: 'committish' put: 'candidateV0.2';
    yourself).
  (Dictionary new
    at: 'remoteUrl' put: 'https://github.com/dalehenrich/stash.git';
    at: 'repositoryDirName' put: 'stash';
    at: 'committish' put: 'candidateV0.1';
    yourself)}