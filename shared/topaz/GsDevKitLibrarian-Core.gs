! Package: CodeLibrarian-Core

! Class Declarations

doit
(Object
	subclass: 'CodeLibrarian'
	instVarNames: #( projectName repositoryUrl userProfile )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'CodeLibrarian-Core';
		comment: '"run as SystemUser"
CodeLibrarian new
  user: ''HostAgentUser'';
  repository: ''tonel:$GITBASE/GemStone64/tonel/'';
  load: #(''X509'').

CodeLibrarian new
  user: ''CodeLibrarianUser'';
  baseline: ''Cypress'';
  repository: ''cypress:$GITBASE/CypressReferenceImplementation/cypress/'';
  load.

CodeLibrarian new
  user: ''HostAgentUser'';
  repository: ''tonel:$GITBASE/GemStone64/tonel/'';
  save: #(''X509'').

CodeLibrarian new
  user: ''CodeLibrarianUser'';
  baseline: ''Cypress'';
  repository: ''cypress:$GITBASE/CypressReferenceImplementation/cypress/'';
  save.

CodeLibrarian new
    user: ''CodeLibrarianUser'';
    baseline: ''Sample'';
    repository:
        ''cypressft:/export/foos1/users/dhenrich/dev/_home/shared/repos/gs_port/sample/repository/'';
    load

CodeLibrarian new
    repository:
        ''cypressft:$GITBASE/GemStone64/packages/'';
    load: #( ''CodeLibrarian-Core'' )

"run as user"
CodeLibrarian new
  repository: ''cypressft:$GITBASE/GemStone64/packages/'';
  save: #(''CodeLibrarian-Core'').

CodeLibrarian new
  repository: ''topaz:$ARCHBASE/image/'';
  save: #(''CodeLibrarian-Core'').

CodeLibrarian new
    repository:
        ''cypressft:/export/foos1/users/dhenrich/3.0/g_gss64bit/git/metacello/repository/'';
    save:
        #(''Metacello-GsCypress-MC'' ''Metacello-GsCypress-Platform'' ''Metacello-Platform.gscypress'')';
		immediateInvariant.
true.
%

! Class Implementation for CodeLibrarian

! ------------------- Instance methods for CodeLibrarian

category: 'private'
method: CodeLibrarian
_executeCodeLibraryBlock: aBlock
  "Do not commit during aBlock ... we don't want session methods enabled for SystemUser"

  "for now you need to run as SystemUser"

  | librarian transientSymbolList librarianSessionMethods librarianUserGlobals |
  System
    currentObjectSecurityPolicy: self _userProfile defaultObjectSecurityPolicy.	"assume that only SystemUser can do this"
  librarian := self _librarian.
  librarianUserGlobals := librarian symbolList objectNamed: #'UserGlobals'.
  [ 
  transientSymbolList := GsCurrentSession currentSession symbolList.
  (transientSymbolList objectNamed: #'CodeLibrarianSessionMethods')
    ifNil: [ 
      transientSymbolList createDictionaryNamed: #'CodeLibrarianSessionMethods' at: 0.
      librarianSessionMethods := transientSymbolList
        objectNamed: #'CodeLibrarianSessionMethods'.
      librarianSessionMethods
        at: GsPackagePolicy globalName
          put: (librarianUserGlobals at: GsPackagePolicy globalName);
        yourself.
      GsPackagePolicy current enable ].
  aBlock value ]
    ensure: [ 
      transientSymbolList remove: librarianSessionMethods ifAbsent: [  ].
      GsPackagePolicy current disable ]
%

category: 'private'
method: CodeLibrarian
_librarian
  ^ AllUsers userWithId: 'CodeLibrarianUser' ifAbsent: [ ^ self _myUserProfile ]
%

category: 'private'
method: CodeLibrarian
_librarianUserGlobals
  ^ self librarian symbolList objectNamed: #'UserGlobals'
%

category: 'private'
method: CodeLibrarian
_loadMetacello: groupNamesOrNil
  | librarian metacello |
  librarian := self _librarian.
  metacello := (librarian objectNamed: 'Metacello') new
    baseline: self _projectName;
    repository: self _repositoryUrl;
    yourself.
  ^ groupNamesOrNil
    ifNil: [ metacello load ]
    ifNotNil: [ metacello load: groupNamesOrNil ]
%

category: 'private'
method: CodeLibrarian
_loadPackages: packageNames
  "load the list of packages in the given repository into symbolList of userId"

  | packageManager repo librarian |
  librarian := self _librarian.
  packageManager := (librarian objectNamed: 'CypressEnvironmentPackageManager')
    new.
  repo := (librarian objectNamed: 'CypressAbstractRepository')
    onUrl:
      ((librarian objectNamed: 'CypressUrl') absoluteFromText: self _repositoryUrl)
    alias: ''.
  packageManager
    defaultSymbolDictionaryName: #'UserGlobals';
    defaultSymbolList: self _userProfile symbolList.
  packageNames
    do: [ :packageName | 
      packageManager
        addResolvedReference:
          ((librarian objectNamed: 'CypressResolvedReference')
            name: packageName
            repository: repo) ].
  packageManager loadResolvedReferences.
  ^ true
%

category: 'private'
method: CodeLibrarian
_myUserProfile
  ^ System myUserProfile
%

category: 'private'
method: CodeLibrarian
_projectName
  ^ projectName
%

category: 'project specs'
method: CodeLibrarian
_repositoryUrl
  ^ repositoryUrl
%

category: 'private'
method: CodeLibrarian
_userProfile
  ^ userProfile ifNil: [ userProfile := self _myUserProfile ]
%

category: 'project specs'
method: CodeLibrarian
baseline: aString
  projectName := aString
%

category: 'actions'
method: CodeLibrarian
load
  "load the default packages of the given project from the given repository into symbolList of userId"

  projectName
    ifNil: [ 
      self
        error:
          'Missing Metacello project name. Must `baseline:` to define project name.' ].
  self _loadMetacello: nil
%

category: 'actions'
method: CodeLibrarian
load: packageOrGroupNames
  "load the list of packages in the given repository into symbolList of userId"

  System
    currentObjectSecurityPolicy: self _userProfile defaultObjectSecurityPolicy.	"assume that only SystemUser can do this"
  projectName ifNil: [ ^ self _loadPackages: packageOrGroupNames ].
  self _loadMetacello: packageOrGroupNames
%

category: 'project specs'
method: CodeLibrarian
repository: aRepositoryUrl
  "specify the repository url which encodes the repository type and the path to the repository"

  repositoryUrl := aRepositoryUrl
%

category: 'actions'
method: CodeLibrarian
save
  "save the project named by eth baseline in the given repository on behalf of the given userId"

  | projectSpec librarian loadedPackages |
  projectName
    ifNil: [ 
      self
        error:
          'The name of the project needs to be specified by the `baseline:` method.' ].
  librarian := self _librarian.
  projectSpec := (librarian objectNamed: 'MetacelloProjectRegistration')
    registry baselineProjectSpecs
    detect: [ :spec | spec name = projectName ]
    ifNone: [ self error: 'registration for projectSpec: ' , projectName , ' not found' ].
  (librarian objectNamed: 'MetacelloProjectRegistration')
    registrationForProjectSpec: projectSpec
    ifAbsent: [ self error: 'registration for projectSpec: ' , projectSpec name , ' not found' ]
    ifPresent: [ :registration :ignored | 
      loadedPackages := registration projectSpec version packages
        select: [ :pkg | pkg isPackageLoaded ].
      loadedPackages addFirst: registration projectSpec projectPackage ].
  loadedPackages isEmpty
    ifTrue: [ self error: 'No loaded packages to save' ].
  self save: (loadedPackages collect: [ :each | each file ])
%

category: 'actions'
method: CodeLibrarian
save: packageNames
  "save the list of packages in the given repository on behalf of the given userId"

  self
    _executeCodeLibraryBlock: [ 
      | librarian repo |
      librarian := self _librarian.
      repo := (librarian objectNamed: 'CypressAbstractRepository')
        onUrl: ((librarian objectNamed: 'CypressUrl') for: self _repositoryUrl)
        alias: 'fnord'.
      packageNames
        do: [ :packageName | 
          | package |
          package := (librarian
            objectNamed: 'CypressEnvironmentPackageDefinition')
            ifNotNil: [ :cl | 
              (cl named: packageName)
                lookupSymbolList: self _userProfile symbolList;
                yourself ]
            ifNil: [ (librarian objectNamed: 'CypressPackageDefinition') named: packageName ].
          repo
            writePackageStructure:
              ((librarian objectNamed: 'CypressPackageStructure') fromPackage: package) ] ]
%

category: 'project specs'
method: CodeLibrarian
user: aUserId
  "specify the userId of the user where the package is installed"

  userProfile := AllUsers userWithId: aUserId
%

! Class Extensions

! Class initializers 

doit
true.
%



! End of Package: CodeLibrarian-Core


