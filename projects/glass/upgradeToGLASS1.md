# Upgrade to GLASS1

If using tODE execute the following in the tODE shell:

```Shell
project load GLASS1
```

If not using tODE, then the following expression needs to be executed:


```Smalltalk
| glassVersion metacello glass1Loaded |
  glass1Loaded := false.
  Smalltalk
    at: #'BaselineOfGLASS1'
    ifPresent: [ :ignored | 
Transcript cr; show: 'BaselineOfGLASS1 present'.
      Smalltalk
        at: #'MetacelloProjectRegistration'
        ifPresent: [ :cls | 
Transcript cr; show: 'MetacelloProjectRegistration present'.
          (cls registrationForClassNamed: 'BaselineOfGLASS1' ifAbsent: [  ])
            ifNotNil: [ :registration | 
Transcript cr; show: 'BaselineOfGLASS1 registered'.
              registration loadedInImage
                ifTrue: [ 
Transcript cr; show: 'BaselineOfGLASS1 loaded'.
                  glass1Loaded := true ] ] ] ].
  glass1Loaded
    ifTrue: [ 
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
        ifFalse: [ 
          "Bootstrap Metacello Preview, using mcz files (#'previewBootstrap' symbolic version"
          Transcript
            cr;
            show: '-----Loading Metacello Preview'.
          Gofer new
            gemsource: 'metacello';
            package: 'ConfigurationOfMetacello';
            load.
          GsDeployer
            deploy: [ 
              "load the Metacello Preview"
              ((Smalltalk at: #'ConfigurationOfMetacello') project
                version: #'previewBootstrap') load.
              (Smalltalk at: #'Metacello') new
                configuration: 'MetacelloPreview';
                version: #'stable';
                repository: 'github://dalehenrich/metacello-work:configuration';
                load ] ].
      GsDeployer
        deploy: [ | greaseLocked |
          Transcript
            cr;
            show: '-----Upgrading Metacello'.
          metacello := Metacello image baseline: 'Metacello'.
          metacello copy get.
          metacello copy load.
          Transcript
            cr;
            show: '-----Upgrading GLASS1'.
          metacello := Metacello image baseline: 'GLASS1'.
          metacello copy get.
          metacello copy load.
          greaseLocked := false.
          (Metacello image
            baseline: [:spec | spec name = 'BaselineOfGrease' ];
            list) do: [:greaseSpec | greaseLocked := greaseSpec isLocked ].
          greaseLocked
            ifFalse: [
              Transcript
                cr;
                show: '-----Locking Grease'.
              Metacello new
                baseline: 'Grease';
                repository: 'github://GsDevKit/Grease:master/repository';
                lock ] ] ]
    ifFalse: [ 
      glassVersion := ConfigurationOfGLASS project currentVersion.
      glassVersion versionNumber < '1.0-beta.9.3' asMetacelloVersionNumber
        ifTrue: [ 
          Transcript
            cr;
            show: '-----Upgrading GLASS to 1.0-beta.9.3'.
          GsDeployer
            deploy: [ 
              Gofer new
                package: 'ConfigurationOfGLASS';
                url: 'http://seaside.gemtalksystems.com/ss/MetacelloRepository';
                load.
              (((System stoneVersionAt: 'gsVersion') beginsWith: '2.')
                and: [ glassVersion versionNumber < '1.0-beta.9.2' asMetacelloVersionNumber ])
                ifTrue: [ ((Smalltalk at: #'ConfigurationOfGLASS') project version: '1.0-beta.9.2') load ].
              ((Smalltalk at: #'ConfigurationOfGLASS') project
                version: '1.0-beta.9.3') load ] ].
      GsDeployer
        deploy: [ | greaseLocked |
          Transcript
            cr;
            show: '-----Upgrading Metacello'.
          metacello := Metacello new
            baseline: 'Metacello';
            repository: 'github://dalehenrich/metacello-work:master/repository'.
          metacello copy get.
          metacello copy load.
          Transcript
            cr;
            show: '-----Loading GLASS1'.
          metacello := Metacello new
            baseline: 'GLASS1';
            repository: 'github://glassdb/glass:master/repository'.
          metacello copy get.
          metacello copy load.
          Transcript
            cr;
            show: '-----Locking Grease'.
          Metacello new
            baseline: 'Grease';
            repository: 'github://GsDevKit/Grease:master/repository';
            lock ] ]

```
