! Package: Metacello-Base

! Class Declarations

doit
(Object
	subclass: 'AbstractMetacelloConfiguration'
	instVarNames: #( project )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Base';
		comment: 'You must use a *configuration* when your project is stored in a
repository using `.mcz` files.

If you are using a source code manager (SCM) like [git][1] and have
created a *baseline* (see the [**BaselineOf** class comment][3] for more info)
you may use a *configuration* to associate a specific
git commit (SHA, branch name, tag name) with a [Metacello version][2].

To create a new Metacello configuration:

1. Create a subclass of the **ConfigurationOf** class. The configuration
   class for your project should be names by appending the name of
   your project to the string `ConfigurationOf`. The name of the
   category and package should be the same as the name of the class:

    ```Smalltalk
    ConfigurationOf subclass: #ConfigurationOfExample
      instanceVariableNames: ''''
      classVariableNames: ''''
      poolDictionaries: ''''
      category: ''ConfigurationOfExample''
    ```

2. Create a **baselineXXXX:** method where you specify the structure of your project:

    ```Smalltalk
    baseline0100: spec
      <baseline: ''1.0-baseline''>

      spec for: #common do: [
        spec repository: ''http://ss3.gemstone.com/ss/Example''.
        spec
          package: ''Example-Core'';
          package: ''Example-Tests'' with: [
            spec requires: ''Example-Core'' ]].
    ```

3. Create a **versionXXXX:** method where you specify the specific
   versions of the packages to be loaded for this version:

    ```Smalltalk
    version01000: spec
      <version: ''1.0'' imports: #(''1.0-baseline'')>

      spec for: #common do: [
        spec blessing: #release.
        spec
          package: ''Example-Core'' with: ''Example-Core'';
          package: ''Example-Tests'' with: ''Example-Tests'' ].
    ```

4. Create a Monticello package for your **ConfigurationOf** class and save it in the repository where your packages are stored. 

[1]: http://git-scm.com/
[2]: https://github.com/dalehenrich/metacello-work/blob/master/docs/MetacelloScriptingAPI.md#metacello-version-numbers
[3]: https://github.com/dalehenrich/metacello-work/blob/master/repository/Metacello-Base.package/BaselineOf.class/README.md
';
		immediateInvariant.
true.
%

doit
(AbstractMetacelloConfiguration
	subclass: 'BaselineOf'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Base';
		comment: 'You should use a *baseline* when you are using a disk-based source
code manager (SCM) like [git][1].

When using a disk-based SCM it is not necessary to use the Metacello
*version* method, because it is intended for use with `.mcz` files. 

With a disk-based SCM you only need a single `baseline:` method. When
you change the structure of your project you can change the baseline and
save everything in a single commit. So multiple `baseline:` methods are
no longer needed.

You may still need a *configuration* when using a *baseline*. The
[Sample project][3] on GitHub has a good example of a configuration used
in conjunction with a *baseline*. See the [**ConfigurationOf** class comment][2] 
for information on creating a *configuration*.

To create a new Metacello baseline:

1. Create a subclass of the **BaselineOf** class. The baseline
   class for your project should be named by appending the name of
   your project to the string `BaselineOf`. The name of the category and
   package should be the same as the name of the class:

    ```Smalltalk
    BaselineOf subclass: #BaselineOfExample
      instanceVariableNames: ''''
      classVariableNames: ''''
      poolDictionaries: ''''
      category: ''BaselineOfExample''
    ```

2. Create a **baseline:** method where you specify the structure of your project:

    ```Smalltalk
    baseline: spec
      <baseline>

      spec for: #common do: [
        spec
          package: ''Example-Core'';
          package: ''Example-Tests'' with: [
            spec requires: ''Example-Core'' ]].
    ```

3. Create a Monticello package for your **BaselineOf** class and save it in the repository where your packages are stored.

4. To load a package from GitHub that contains a baseline evaluate the following:

```Smalltalk
| repositorySpec |
"edit to match your username, repository name and branch"
repositorySpec := ''dalehenrich/metacello-work:master''.
Metacello new
  baseline: ''Sample'';
  repository: ''github://'', repositorySpec;
  load.
```

For further documentation see For more information on the [github://](MetacelloScriptingAPI.md#github) url specifigation see the [Metacello Scripting API
reference](MetacelloScriptingAPI.md). There more information on [working with GitHub here](GettingStartedWithGitHub.md).

[1]: http://git-scm.com/
[2]: https://github.com/dalehenrich/metacello-work/blob/master/repository/Metacello-Base.package/ConfigurationOf.class/README.md
[3]: https://github.com/dalehenrich/sample/tree/configuration/ConfigurationOfSample.package/ConfigurationOfSample.class
';
		immediateInvariant.
true.
%

doit
(AbstractMetacelloConfiguration
	subclass: 'ConfigurationOf'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Base';
		comment: 'You must use a *configuration* when your project is stored in a
repository using `.mcz` files.

If you are using a source code manager (SCM) like [git][1] and have
created a *baseline* (see the [**BaselineOf** class comment][3] for more info)
you may use a *configuration* to associate a specific
git commit (SHA, branch name, tag name) with a [Metacello version][2].

To create a new Metacello configuration:

1. Create a subclass of the **ConfigurationOf** class. The configuration
   class for your project should be names by appending the name of
   your project to the string `ConfigurationOf`. The name of the
   category and package should be the same as the name of the class:

    ```Smalltalk
    ConfigurationOf subclass: #ConfigurationOfExample
      instanceVariableNames: ''''
      classVariableNames: ''''
      poolDictionaries: ''''
      category: ''ConfigurationOfExample''
    ```

2. Create a **baselineXXXX:** method where you specify the structure of your project:

    ```Smalltalk
    baseline0100: spec
      <baseline: ''1.0-baseline''>

      spec for: #common do: [
        spec repository: ''http://ss3.gemstone.com/ss/Example''.
        spec
          package: ''Example-Core'';
          package: ''Example-Tests'' with: [
            spec requires: ''Example-Core'' ]].
    ```

3. Create a **versionXXXX:** method where you specify the specific
   versions of the packages to be loaded for this version:

    ```Smalltalk
    version01000: spec
      <version: ''1.0'' imports: #(''1.0-baseline'')>

      spec for: #common do: [
        spec blessing: #release.
        spec
          package: ''Example-Core'' with: ''Example-Core'';
          package: ''Example-Tests'' with: ''Example-Tests'' ].
    ```

4. Create a Monticello package for your **ConfigurationOf** class and save it in the repository where your packages are stored. 

[1]: http://git-scm.com/
[2]: https://github.com/dalehenrich/metacello-work/blob/master/docs/MetacelloScriptingAPI.md#metacello-version-numbers
[3]: https://github.com/dalehenrich/metacello-work/blob/master/repository/Metacello-Base.package/BaselineOf.class/README.md
';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'Metacello'
	instVarNames: #( executorSpec statements )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Base';
		comment: '# Metacello User Guide

In this guide we''ll take a walk through a couple of common development
scenarios and highlight some of the features of the *Metacello Scripting
API*.

*For installatation and more detailed documentation on the Metacello
Scripting API, see the [Metcello Scripting API Documentation][1].*

## Introduction

The number one job of the *Metacello Scripting API* is to simplify the
job of loading projects into your image. As you are probably all
too aware, today it''s a two step process where you first load the
configuration into your image using [Gofer][2] and then load your
project using Metacello:

```Smalltalk
Gofer new
  package: ''ConfigurationOfSeaside30'';
  squeaksource: ''MetacelloRepository'';
  load.
((Smalltalk at: #ConfigurationOfSeaside30) version: #stable) load.
```

In the early days of Metacello (and Gofer) this was a great improvement
over the alternatives, but today, 3 years after the introduction of
Metacello, there should be a better way...and there is.
Using the *Metacello Scripting API* the above expression reduces to the
following:

```Smalltalk
Metacello new
  configuration: ''Seaside30'';
  load.
```

## Loading

In this example of the [`load` command][5] we are leveraging a couple of
default values, namely the `version` of the project and the `repository` where the
**ConfigurationOfSeaside** package can be found:

```Smalltalk
Metacello new
  configuration: ''Seaside30'';
  load.
```

Here is a variant
of the same expression with the (current) default values explicitly specified:

```Smalltalk
Metacello new
  configuration: ''Seaside30'';
  version: #stable;
  squeaksource: ''MetacelloRepository'';
  load.
```

The `version` attribute can be any legal [version number][10].
`squeaksource` is a [repository shortcut][4]. You can also specify the
full [repository description][3] as follows:

```Smalltalk
Metacello new
  configuration: ''Seaside30'';
  version: #stable;
  repository: ''http://www.squeaksource.com/MetacelloRepository'';
  load.
```

##Listing

Once you''ve loaded one or more projects into your image, you may want to
list them. The following is an example of the [`list` command][6]:

```Smalltalk
Metacello image
  configuration: [:spec | true ];
  list.
```

The `image` message tells Metacello that you''d like to look
at only loaded configurations. 

The *block* argument to the
`configuration:` message is used to *select* against the list of loaded
[MetacelloProjectSpec][7] instances in the [registry][8].

The `list` command itself returns a list of [MetacelloProjectSpec][7] instances that can be printed, inspected or otherwise manipulated.

In addition to a *select block*, you can specify a *select collection*
specifying the names of the projects you''d like to select:

```Smalltalk
Metacello registry
  configuration: #(''Seaside30'' ''MetacelloPreview'');
  list.
```

The `registry` message tells Metacello that you''d like to
look at all projects in the [registry][8] whether or not they are loaded.

The *collection* argument to the `configuration:` message is used to
*select* against the list of project names in the [registry][8].

The `list` command can also be used to look at configurations in
Monticello repositories. For example:

```Smalltalk
Metacello new
  configuration: [:spec | spec name beginsWith: ''Seaside''];
  squeaksource: ''MetacelloRepository'';
  list.
```

lists the configurations whose names (sans the `ConfigurationOf`) begin
with `Seaside` in the `MetacelloRepositry` in the
[Squeaksource](http://www.squeaksource.com) repostory.

## Getting

Once you''ve loaded a project into your image the next logical step is
upgrading your project to a new version. 

Let''s say that a new `#stable` version of Seaside30 has been released
and that you want to upgrade. This is a two step process: 

* [get a new version of the configuration][11]
* [load the new version][12]

### Get a new version of the configuration

The following expression gets the latest version of the
configuration:

```Smalltalk
Metacello image
  configuration: ''Seaside30'';
  get.
```

By using the `image` message, you can leverage the fact that the [registry][8] remembers
from which repository you loaded the original version of the configuration.

The `get` command simply downloads the latest version of the
configuration package from the repository.

You may download the configuration from a different repository:

```Smalltalk
Metacello image
  configuration: ''Seaside30'';
  squeaksource: ''Seaside30;
  get.
```

The `get` command will update the [registry][8] with the new
repository location information.

You may also use the `get` command to load a configuration for a project
into your image without actually loading the project itself:

```Smalltalk
Metacello image
  configuration: ''SeasideRest'';
  squeaksource: ''Seaside30'';
  get.
```

The ''SeasideRest'' project information will be registered in the [registry][8] and marked
as *unloaded*.

### Load the new version

Once you''ve got a new copy of the Seaside30 configuration loaded into your image, you may
upgrade your image with the following expression:

```Smalltalk
Metacello image
  configuration: ''Seaside30'';
  version: #stable;
  load.
```

By using the `image` message, you are asking Metacello to look the
project up in the [registry][8] before performing the
operation, so it isn''t necessary to supply all of the project details for every
command operation.

Of course, the `load` command updates the [registry][8].

If you want to load a project for which you''ve already done a `get`
(like the SeasideRest project earlier), you can do the following:

```Smalltalk
Metacello registry
  configuration: ''SeasideRest'';
  version: #stable;
  load.
```

In this case you use the `registry` message to indicate that you are
interested in both *loaded* and *unloaded* projects.

##Locking

Let''s say that you are using an older version of Seaside30 (say 3.0.5)
instead of the #stable version (3.0.7) and that your application doesn''t
work with newer versions of Seaside30 (you''ve tried and it''s more work
to get you application to work with the newer version of Seaside30 than
it''s worth).

Let''s also say that you want to try out something in the
SeasideRest project, but when you try loading SeasideRest, you end up
having Seaside 3.0.7 loaded as well. 

This is an unfortunate side effect of Metacello trying to *do the right
thing*, only in your case it is the wrong thing.

Fortunately, the [`lock` command][9] can give you control. First you
need to `lock` the Seaside30 project:

```Smalltalk
Metacello image
  configuration: ''Seaside30'';
  lock.
```

The `image` message tells Metacello to do a lookup in the list of loaded
projects and then to put a lock on the loaded version of the project.

If you want you can specify which version of the project you want
locked:

```Smalltalk
Metacello image
  configuration: ''Seaside30'';
  version: ''3.0.5'';
  lock.
```

After a project is locked an error (**MetacelloLockedProjectError**) is 
thrown when you attempt to load a project that has a dependency upon a 
different version of Seaside30. The error is thrown before any packages 
are actually loaded.

### Bypassing locks

Let''s say that you want to load the SeasideRest project even though it may
require a version of Seaside30 that is later than the version that you have
locked. To do that you need to suppress the upgrade of the Seaside30
project during the load of the SeasideRest project and you can do that
with the use of the `onUpgrade:` message:

```Smalltalk
Metacello new
  configuration: ''SeasideRest'';
  version: #stable;
  onUpgrade: [:ex :existing :new | 
    existing baseName = ''Seaside30''
      ifTrue: [ ex disallow ].
    ex pass ];
  load.
```

The `onUpgrade:` block tells Metacello to disallow the upgrade of any
project whose `baseName` is `Seaside30` and to continue with the load.
Of course if there are any explicit dependencies between SeasideRest and
the later version of Seaside30 (missing classes, etc.) then you may very
well get load errors or errors while using the SeasideRest, but that''s
the price you pay for not upgrading.

### Upgrading a locked project

If you want to explicitly upgrade a locked project, you can use the
`load` command. The following command will upgrade Seaside30 to version
3.0.6 even if it is locked:

 ```Smalltalk
Metacello image
  configuration: ''Seaside30'';
  version: ''3.0.6'';
  lock.
```

The newly loaded of the project will continue to be locked.

[1]: https://github.com/dalehenrich/metacello-work/blob/master/docs/MetacelloScriptingAPI.md
[2]: http://www.lukas-renggli.ch/blog/gofer
[3]: https://github.com/dalehenrich/metacello-work/blob/master/docs/MetacelloScriptingAPI.md#repository-descriptions
[4]: https://github.com/dalehenrich/metacello-work/blob/master/docs/MetacelloScriptingAPI.md#repository-shortcuts
[5]: https://github.com/dalehenrich/metacello-work/blob/master/docs/MetacelloScriptingAPI.md#loading
[6]: https://github.com/dalehenrich/metacello-work/blob/master/docs/MetacelloScriptingAPI.md#listing
[7]: https://github.com/dalehenrich/metacello-work/blob/master/docs/MetacelloScriptingAPI.md#metacelloprojectspec
[8]: https://github.com/dalehenrich/metacello-work/blob/master/docs/MetacelloScriptingAPI.md#metacello-project-registry
[9]: https://github.com/dalehenrich/metacello-work/blob/master/docs/MetacelloScriptingAPI.md#locking
[10]: https://github.com/dalehenrich/metacello-work/blob/master/docs/MetacelloScriptingAPI.md#metacello-version-numbers
[11]: https://github.com/dalehenrich/metacello-work/blob/master/docs/MetacelloUserGuide.md#get-a-new-version-of-the-configuration
[12]: https://github.com/dalehenrich/metacello-work/blob/master/docs/MetacelloUserGuide.md#load-the-new-version';
		immediateInvariant.
true.
%


! Class Implementation for AbstractMetacelloConfiguration

! ------------------- Class methods for AbstractMetacelloConfiguration

category: 'private'
classmethod: AbstractMetacelloConfiguration
ensureMetacello
    "Bootstrap Metacello and load the 'botstrap' group"

    self ensureMetacello: #('batch')
%

category: 'accessing'
classmethod: AbstractMetacelloConfiguration
project

	^self new project
%

! ------------------- Instance methods for AbstractMetacelloConfiguration

category: 'accessing'
method: AbstractMetacelloConfiguration
customProjectAttributes
    "Edit to return a collection of any custom attributes e.g. for conditional loading: Array with: #'Condition1' with: #'Condition2.
	For more information see: http://code.google.com/p/metacello/wiki/CustomProjectAttrributes "

    ^ #()
%

category: 'accessing'
method: AbstractMetacelloConfiguration
loadType
  "override in subclass to change to #atomic if desired.
   #atomic loads all packages in a single step instead of one package at a time in #linear"

  ^ #'linear'
%

category: 'accessing'
method: AbstractMetacelloConfiguration
project
  ^ project
    ifNil: [ 
      "Bootstrap Metacello if it is not already loaded"
      self class ensureMetacello.
      project := self projectClass new
        @env2: projectAttributes: self customProjectAttributes.	"Create the Metacello project"
      project @env2: versionNumberClass: self versionNumberClass.
      (project class @env2: versionConstructorClass) @env2: on: self project: project.	"Construct the project"
      project @env2: loadType: self loadType.
      project ]
%

category: 'accessing'
method: AbstractMetacelloConfiguration
project: aProject

	project ifNil: [ self class ensureMetacello ].
	project := aProject
%

! Class Implementation for BaselineOf

! ------------------- Instance methods for BaselineOf

category: 'accessing'
method: BaselineOf
projectPlatformAttributesWith: platformAttributes
  "opportunity to add attributes at the front of list if desired"

  ^ platformAttributes
%

! Class Implementation for ConfigurationOf

! ------------------- Instance methods for ConfigurationOf

category: 'defaults'
method: ConfigurationOf
bleedingEdge 
	"override if different behavior desired.
	 Use:
		self versionDoesNotExistError: #bleedingEdge
	 if #bleedingEdge version is disallowed."

	<defaultSymbolicVersion: #bleedingEdge>
	
	^self defaultBleedingEdgeVersion
%

category: 'defaults'
method: ConfigurationOf
defaultBleedingEdgeVersion
	| bleedingEdgeVersion |
	bleedingEdgeVersion := (self project map values select: [ :version | version blessing == #baseline ])
		detectMax: [ :version | version ].
	bleedingEdgeVersion ifNil: [ ^#'notDefined' ].
	^ bleedingEdgeVersion versionString
%

! Class Implementation for Metacello

! ------------------- Class methods for Metacello

category: 'instance creation'
classmethod: Metacello
classic
    "set the options such that the load performed will be identical to the classic ConfigurationOf load:
	(ConfigurationOfExample project version: '1.0') load
	
	#classic forces Metacello to look at image state to determine which version of a project is loaded instead of using
		the registry to tell us explicitly which version of a project is loaded .. image state is not PRECISE"

    "useCurrentVersion is a 'private' option for enforcing classic rules, so it's not part of scripting api"

    ^ self new
        onUpgrade: [ :ex | ex allow ];
        onConflict: [ :ex | ex allow ];
        addStatement: #'useCurrentVersion:' args: {true};
        yourself
%

category: 'instance creation'
classmethod: Metacello
image
    ^ self new
        executorSpec: #'MetacelloScriptImageExecutor' -> 'batch';
        yourself
%

category: 'instance creation'
classmethod: Metacello
registry
    ^ self new
        executorSpec: #'MetacelloScriptRegistryExecutor' -> 'batch';
        yourself
%

category: 'private'
classmethod: Metacello
scriptExecutorClass
    ^ self scriptExecutorClass: {(#'MetacelloScriptApiExecutor' -> 'batch')}
%

! ------------------- Instance methods for Metacello

category: 'private'
method: Metacello
addStatement: selector args: args
    self statements add: selector -> args
%

category: 'api projectSpec'
method: Metacello
baseline: projectName
    self addStatement: #'baselineArg:' args: {projectName}
%

category: 'api repository shortcuts'
method: Metacello
bitbucketUser: userName project: projectName commitish: commitish path: path
  | branchOrCommitOrTag |
  branchOrCommitOrTag := commitish.
  branchOrCommitOrTag isEmpty
    ifTrue: [ branchOrCommitOrTag := 'master' ].
  self
    repository:
      'bitbucket://' , userName , '/' , projectName , ':' , branchOrCommitOrTag , '/'
        , path
%

category: 'api repository shortcuts'
method: Metacello
blueplane: projectName
    self repository: 'http://squeaksource.blueplane.jp/' , projectName
%

category: 'api options'
method: Metacello
cacheRepository: aRepositoryDescription
    self addStatement: #'cacheRepository:' args: {aRepositoryDescription}
%

category: 'api projectSpec'
method: Metacello
className: className
    self addStatement: #'classNameArg:' args: {className}
%

category: 'api projectSpec'
method: Metacello
configuration: projectName
    self addStatement: #'configurationArg:' args: {projectName}
%

category: 'api repository shortcuts'
method: Metacello
croquet: projectName
    self repository: 'http://hedgehog.software.umn.edu:8888/' , projectName
%

category: 'private'
method: Metacello
execute: selector args: args
  | script |
  script := self statements copy.
  script add: selector -> args.
  ^ self scriptExecutor @env2: execute: script
%

category: 'accessing'
method: Metacello
executorSpec
    executorSpec ifNil: [ executorSpec := #'MetacelloScriptApiExecutor' -> 'batch' ].
    ^ executorSpec
%

category: 'accessing'
method: Metacello
executorSpec: anAssoc
    executorSpec := anAssoc
%

category: 'api actions'
method: Metacello
fetch
  ^ self execute: #'fetch:' args: #(#())
%

category: 'api actions'
method: Metacello
fetch: required
  ^ self execute: #'fetch:' args: {required}
%

category: 'api repository shortcuts'
method: Metacello
filetreeDirectory: directoryName
  self repository: 'filetree://' , directoryName
%

category: 'api repository shortcuts'
method: Metacello
gemsource: projectName
  self repository: 'http://seaside.gemtalksystems.com/ss/' , projectName
%

category: 'api actions'
method: Metacello
get
  "resolve project name in given repository and return an instance of MetacelloProject resolved from a ConfigurationOf or BaselineOf"

  ^ self execute: #'get' args: #()
%

category: 'api repository shortcuts'
method: Metacello
githubUser: userName project: projectName commitish: commitish path: path
  | branchOrCommitOrTag |
  branchOrCommitOrTag := commitish.
  branchOrCommitOrTag isEmpty
    ifTrue: [ branchOrCommitOrTag := 'master' ].
  self
    repository:
      'github://' , userName , '/' , projectName , ':' , branchOrCommitOrTag , '/'
        , path
%

category: 'api options'
method: Metacello
ignoreImage
    "ignore image state"

    self addStatement: #'ignoreImage:' args: {true}
%

category: 'api repository shortcuts'
method: Metacello
impara: projectName
    self repository: 'http://source.impara.de/' , projectName
%

category: 'api actions'
method: Metacello
list
  "list projects in registry"

  ^ self execute: #'list' args: #()
%

category: 'api actions'
method: Metacello
load
  ^ self execute: #'load:' args: #(#())
%

category: 'api actions'
method: Metacello
load: required
  ^ self execute: #'load:' args: {required}
%

category: 'api actions'
method: Metacello
lock
  "lock projects in registry"

  ^ self execute: #'lock' args: #()
%

category: 'api actions'
method: Metacello
locked
  "list of locked projects in registry"

  ^ self
    project: [ :projectSpec | projectSpec isLocked ];
    list
%

category: 'api options'
method: Metacello
onConflict: aBlock
    self addStatement: #'onConflict:' args: {aBlock}
%

category: 'api options'
method: Metacello
onConflictUseIncoming
  self onConflict: [ :ex :loaded :incoming | ex useIncoming ]
%

category: 'api options'
method: Metacello
onConflictUseIncoming: incomingProjects useLoaded: loadedProjects
  self
    onConflict: [ :ex :loaded :incoming | 
      (incomingProjects includes: incoming baseName)
        ifTrue: [ ex useIncoming ]
        ifFalse: [ 
          (loadedProjects includes: incoming baseName)
            ifTrue: [ ex useLoaded ] ].
      ex pass ]
%

category: 'api options'
method: Metacello
onConflictUseLoaded
  self onConflict: [ :ex :loaded :incoming | ex useLoaded ]
%

category: 'api options'
method: Metacello
onDowngrade: aBlock
    self addStatement: #'onDowngrade:' args: {aBlock}
%

category: 'api options'
method: Metacello
onDowngradeUseIncoming
  self onDowngrade: [ :ex :loaded :incoming | ex useIncoming ]
%

category: 'api options'
method: Metacello
onDowngradeUseIncoming: projectNames
  self
    onDowngrade: [ :ex :loaded :incoming | 
      (projectNames includes: loaded baseName)
        ifTrue: [ ex useIncoming ]
        ifFalse: [ ex useLoaded ] ]
%

category: 'api options'
method: Metacello
onLock: aBlock
  self addStatement: #'onLock:' args: {aBlock}
%

category: 'api options'
method: Metacello
onLockBreak
  self onLock: [ :ex :loaded :incoming | ex break ]
%

category: 'api options'
method: Metacello
onLockBreak: projectNames
  self
    onLock: [ :ex :loaded :incoming | 
      (projectNames includes: loaded baseName)
        ifTrue: [ ex break ]
        ifFalse: [ ex honor ] ]
%

category: 'api options'
method: Metacello
onUpgrade: aBlock
    self addStatement: #'onUpgrade:' args: {aBlock}
%

category: 'api options'
method: Metacello
onUpgradeUseLoaded
  self onUpgrade: [ :ex :loaded :incoming | ex useLoaded ]
%

category: 'api options'
method: Metacello
onUpgradeUseLoaded: projectNames
  self
    onUpgrade: [ :ex :loaded :incoming | 
      (projectNames includes: loaded baseName)
        ifTrue: [ ex useLoaded ]
        ifFalse: [ ex useIncoming ] ]
%

category: 'api options'
method: Metacello
onWarning: aBlock
  self addStatement: #'onWarning:' args: {aBlock}
%

category: 'api options'
method: Metacello
onWarningLog
  self
    onWarning: [ :ex | 
      Transcript
        cr;
        show: ex description.
      ex resume ]
%

category: 'api projectSpec'
method: Metacello
project: projectName
    self addStatement: #'projectArg:' args: {projectName}
%

category: 'api actions'
method: Metacello
record
  ^ self execute: #'record:' args: #(#())
%

category: 'api actions'
method: Metacello
record: required
  ^ self execute: #'record:' args: {required}
%

category: 'api actions'
method: Metacello
register
  "change registered project"

  ^ self execute: #'register' args: #()
%

category: 'api repository shortcuts'
method: Metacello
renggli: projectName
    self repository: 'http://source.lukas-renggli.ch/' , projectName
%

category: 'api projectSpec'
method: Metacello
repository: repositoryDescription
    self addStatement: #'repositoryArg:' args: {repositoryDescription}
%

category: 'api options'
method: Metacello
repositoryOverrides: aRepositoryDescriptionCollection
    self addStatement: #'repositoryOverrides:' args: {aRepositoryDescriptionCollection}
%

category: 'api repository shortcuts'
method: Metacello
saltypickle: projectName
    self repository: 'http://squeak.saltypickle.com/' , projectName
%

category: 'accessing'
method: Metacello
scriptExecutor
    ^ (self class scriptExecutorClass: self executorSpec) new
%

category: 'api options'
method: Metacello
silently
    "no progress bars"

    self addStatement: #'silently:' args: {true}
%

category: 'api repository shortcuts'
method: Metacello
smalltalkhubUser: userName project: projectName
  self
    repository:
      'http://smalltalkhub.com/mc/' , userName , '/' , projectName , '/main'
%

category: 'api repository shortcuts'
method: Metacello
squeakfoundation: projectName
    self repository: 'http://source.squeakfoundation.org/' , projectName
%

category: 'api repository shortcuts'
method: Metacello
squeaksource: projectName
    self repository: 'http://www.squeaksource.com/' , projectName
%

category: 'api repository shortcuts'
method: Metacello
squeaksource3: projectName
  self repository: 'http://ss3.gemtalksystems.com/ss/' , projectName
%

category: 'api repository shortcuts'
method: Metacello
ss3: projectName
    self squeaksource3: projectName
%

category: 'accessing'
method: Metacello
statements
    statements ifNil: [ statements := OrderedCollection new ].
    ^ statements
%

category: 'accessing'
method: Metacello
statements: anObject
	statements := anObject
%

category: 'api repository shortcuts'
method: Metacello
swa: projectName
    self swasource: projectName
%

category: 'api repository shortcuts'
method: Metacello
swasource: projectName
    self repository: 'http://www.hpi.uni-potsdam.de/hirschfeld/squeaksource/' , projectName
%

category: 'api actions'
method: Metacello
unlock
  "unlock projects in registry"

  ^ self execute: #'unlock' args: #()
%

category: 'api actions'
method: Metacello
unregister
  "unlock projects in registry"

  ^ self execute: #'unregister' args: #()
%

category: 'api projectSpec'
method: Metacello
version: versionString
    self addStatement: #'versionArg:' args: {versionString}
%

category: 'api repository shortcuts'
method: Metacello
wiresong: projectName
    self repository: 'http://source.wiresong.ca/' , projectName
%

! Class Extensions

! Class initializers 

doit
true.
%

! End of Package: Metacello-Base
