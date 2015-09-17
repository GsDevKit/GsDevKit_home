#Upgrade To GLASS 1.0-beta9.3



1. [GLASS1 not loaded](#glass1-not-loaded)
2. [GLASS1 loaded](#glass1-loaded)

# GLASS1 not loaded

If you have not loaded GLASS1, then the following expression should be used to bring the GLASS version up to 1.0-beta9.3:

```Smalltalk
| glassVersion |
Smalltalk
  at: #'BaselineOfGLASS1'
  ifPresent: [ :ignored | 
    Smalltalk
      at: #'MetacelloProjectRegistration'
      ifPresent: [ :cls | 
        (cls registrationForClassNamed: 'BaselineOfGLASS1' ifAbsent: [  ])
          ifNotNil: [ :registration | 
            registration loadedInImage
              ifTrue: [ 
                Transcript
                  cr;
                  show: '-----GLASS already upgraded to 1.0-beta.9.3 or beyond'.
                ^ nil ] ] ] ].
glassVersion := ConfigurationOfGLASS project currentVersion.
glassVersion versionNumber < '1.0-beta.9.3' asMetacelloVersionNumber
  ifTrue: [
    Transcript
      cr;
      show: '-----Upgrading GLASS to 1.0-beta.9.3'.
    GsDeployer deploy: [
      Gofer new
        package: 'ConfigurationOfGLASS';
        url: 'http://seaside.gemtalksystems.com/ss/MetacelloRepository';
        load.
      (((System stoneVersionAt: 'gsVersion') beginsWith: '2.') 
          and: [glassVersion versionNumber < '1.0-beta.9.2' asMetacelloVersionNumber])
        ifTrue: [
          ((Smalltalk at: #ConfigurationOfGLASS) project version: '1.0-beta.9.2') load ].
      ((Smalltalk at: #ConfigurationOfGLASS) project version: '1.0-beta.9.3') load.
    ] ]
  ifFalse: [ 
    Transcript
      cr;
      show: '-----GLASS already upgraded to 1.0-beta.9.3' ].
```

# GLASS1 loaded

If GLASS1 has already been loaded, then one should not attempt to use the ConfigurationOfGLASS for anything else, however, it is important that you have the latest version of the Metacello Preview loaded. 

The following expression should be used to load the latest version of Metacello:

```Smalltalk
"Load the Preview version of Metacello from GitHub"

  | previewLoaded |
  previewLoaded := false.
  Smalltalk
    at: #'BaselineOfMetacello'
    ifPresent: [ :ignored | 
      Smalltalk
        at: #'MetacelloProjectRegistration'
        ifPresent: [ :cls | 
          (cls registrationForClassNamed: 'BaselineOfMetacello' ifAbsent: [  ])
            ifNotNil: [ :registration | previewLoaded := registration loadedInImage ] ] ].
  previewLoaded
    ifTrue: [ 
      (Smalltalk at: #'Metacello') new
        configuration: 'MetacelloPreview';
        version: #'stable';
        repository: 'github://dalehenrich/metacello-work:configuration';
        get ]
    ifFalse: [ 
      "Bootstrap Metacello Preview, using mcz files (#'previewBootstrap' symbolic version"
      Gofer new
        gemsource: 'metacello';
        package: 'ConfigurationOfMetacello';
        load.
      GsDeployer
        deploy: [ 
          ((Smalltalk at: #'ConfigurationOfMetacello') project
            version: #'previewBootstrap') load ] ].
  GsDeployer
    deploy: [ 
      "load the Metacello Preview"
      (Smalltalk at: #'Metacello') new
        configuration: 'MetacelloPreview';
        version: #'stable';
        repository: 'github://dalehenrich/metacello-work:configuration';
        load ]
```

