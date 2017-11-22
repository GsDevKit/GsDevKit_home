! Package: GsDevKitLibrarian-Core

! Class Declarations

doit
(Object
	subclass: 'GsDevKitLibrarian'
	instVarNames: #( projectName repositoryUrl userProfile )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'GsDevKitLibrarian-Core';
		comment: '';
		immediateInvariant.
true.
%

! Class Implementation for GsDevKitLibrarian

! ------------------- Instance methods for GsDevKitLibrarian

category: 'private'
method: GsDevKitLibrarian
_executeGsDevKitLibraryBlock: aBlock
  "Do not commit during aBlock ... we don't want session methods enabled for SystemUser"

  "for now you need to run as SystemUser"

  | librarian transientSymbolList librarianSessionMethods librarianUserGlobals |
  System
    currentObjectSecurityPolicy: self _userProfile defaultObjectSecurityPolicy.	"assume that only SystemUser can do this"
  librarian := self _librarian.
  librarianUserGlobals := librarian symbolList objectNamed: #'UserGlobals'.
  [ 
  transientSymbolList := GsCurrentSession currentSession symbolList.
  (transientSymbolList objectNamed: #'GsDevKitLibrarianSessionMethods')
    ifNil: [ 
      transientSymbolList createDictionaryNamed: #'GsDevKitLibrarianSessionMethods' at: 0.
      librarianSessionMethods := transientSymbolList
        objectNamed: #'GsDevKitLibrarianSessionMethods'.
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
method: GsDevKitLibrarian
_librarian
  ^ AllUsers userWithId: 'GsDevKitLibrarianUser' ifAbsent: [ ^ self _myUserProfile ]
%

category: 'private'
method: GsDevKitLibrarian
_librarianUserGlobals
  ^ self librarian symbolList objectNamed: #'UserGlobals'
%

category: 'private'
method: GsDevKitLibrarian
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
method: GsDevKitLibrarian
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
method: GsDevKitLibrarian
_myUserProfile
  ^ System myUserProfile
%

category: 'private'
method: GsDevKitLibrarian
_projectName
  ^ projectName
%

category: 'project specs'
method: GsDevKitLibrarian
_repositoryUrl
  ^ repositoryUrl
%

category: 'private'
method: GsDevKitLibrarian
_userProfile
  ^ userProfile ifNil: [ userProfile := self _myUserProfile ]
%

category: 'project specs'
method: GsDevKitLibrarian
baseline: aString
  projectName := aString
%

category: 'actions'
method: GsDevKitLibrarian
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
method: GsDevKitLibrarian
load: packageOrGroupNames
  "load the list of packages in the given repository into symbolList of userId"

  System
    currentObjectSecurityPolicy: self _userProfile defaultObjectSecurityPolicy.	"assume that only SystemUser can do this"
  projectName ifNil: [ ^ self _loadPackages: packageOrGroupNames ].
  self _loadMetacello: packageOrGroupNames
%

category: 'project specs'
method: GsDevKitLibrarian
repository: aRepositoryUrl
  "specify the repository url which encodes the repository type and the path to the repository"

  repositoryUrl := aRepositoryUrl
%

category: 'actions'
method: GsDevKitLibrarian
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
method: GsDevKitLibrarian
save: packageNames
  "save the list of packages in the given repository on behalf of the given userId"

  self
    _executeGsDevKitLibraryBlock: [ 
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
method: GsDevKitLibrarian
user: aUserId
  "specify the userId of the user where the package is installed"

  userProfile := AllUsers userWithId: aUserId
%

! Class Extensions

! Class initializers 

doit
true.
%



! End of Package: GsDevKitLibrarian-Core


