! Package: Metacello-Platform.gscypress

! Class Declarations

doit
(MetacelloPlatform
	subclass: 'MetacelloGemStoneBasePlatform'
	instVarNames: #( stoneVersionAttribute )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Platform';
		comment: '';
		immediateInvariant.
true.
%

! Class Implementation for MetacelloGemStoneBasePlatform

! ------------------- Class methods for MetacelloGemStoneBasePlatform

category: 'accessing'
classmethod: MetacelloGemStoneBasePlatform
current
	"Each user needs to have its own instance of the receiver stored in UserGlobals."

	| userGlobals |
	userGlobals := System myUserProfile symbolList objectNamed: #UserGlobals.
	^ userGlobals at: #'MetacelloGemStoneBasePlatform_CURRENT_Instance'
		ifAbsent: [ userGlobals at: #'MetacelloGemStoneBasePlatform_CURRENT_Instance' put: self new ]
%

category: 'accessing'
classmethod: MetacelloGemStoneBasePlatform
cypressPackageManagerClass

^ self current globalNamed: self cypressPackageManagerClassName
%

category: 'accessing'
classmethod: MetacelloGemStoneBasePlatform
cypressPackageManagerClass: aClass

SessionTemps current 
  at: #'MetacelloGemStoneBasePlatform_packageManagerClass'
  put: aClass name
%

category: 'accessing'
classmethod: MetacelloGemStoneBasePlatform
cypressPackageManagerClassName

^ SessionTemps current 
  at: #'MetacelloGemStoneBasePlatform_packageManagerClass' 
  ifAbsent: [ 
    SessionTemps current 
      at: #'MetacelloGemStoneBasePlatform_packageManagerClass'
      put: #CypressPackageManager3 ]
%

category: 'initialize-release'
classmethod: MetacelloGemStoneBasePlatform
initialize
  "self initialize"

  "In GemStone need to keep the assocation for the receiver, in case it changes shape.
   The user-specific instance of the platformClass will be stored in UserGlobals. " 

   | ar |
   ar := (System myUserProfile symbolList dictionariesAndSymbolsOf: self) at: 1. "expect to find at least one or error"
   PlatformClassAssociation := (ar at: 1) associationAt: (ar at: 2)
%

category: 'initialize-release'
classmethod: MetacelloGemStoneBasePlatform
resetPlatformClassAssociation
  "self resetPlatformClassAssociation"

  "In 3.5.0, Metacello is installed and run by CodeLibrarian ... rules are a bit different."

  PlatformClassAssociation := nil
%

! ------------------- Instance methods for MetacelloGemStoneBasePlatform

category: 'utilities'
method: MetacelloGemStoneBasePlatform
authorName

	^GsPackagePolicy current authorInitials
%

category: 'utilities'
method: MetacelloGemStoneBasePlatform
authorName: aString

	^GsPackagePolicy current authorInitials: aString
%

category: 'attributes'
method: MetacelloGemStoneBasePlatform
defaultPlatformAttributes
  "gemstone   - loading into glass1 code base (extent0.seaside.dbf)
   gemstone64 - loading into base gemstone system (extent0.dbf)"

  | stoneVersionAtts |
  (stoneVersionAtts := self stoneVersionAttributes)
    ifNil: [ ^ #(#'gemstoneCommon' #'gemstone64') ].
  ^ stoneVersionAtts
%

category: 'attributes'
method: MetacelloGemStoneBasePlatform
extractAtrributesFrom: gsVersion
  "gemstone   - loading into glass1 code base (extent0.seaside.dbf)
     gs*      - used to specify version specific glass1 code
   gemstone64 - loading into base gemstone system (extent0.dbf)
     gs64_*    - used to specific version specific base code"

  | tokens attributes attribute |
  attributes := {#'gemstoneCommon'.
  #'gemstone64'}.
  tokens := gsVersion subStrings: $..
  attribute := ''.
  1 to: tokens size do: [ :index | | token |
    (token := tokens at: index) isEmpty
      ifTrue: [ ^ attributes ].
    attribute := attribute , token.
    attributes add: ('gsc' , attribute , '.x') asSymbol.
    attributes add: ('gs64_' , attribute , '.x') asSymbol.
    attribute := attribute , '.' ].
  ^ attributes
%

category: 'repository creation'
method: MetacelloGemStoneBasePlatform
repositoryFromUrl: anUrl
  | scheme x |
  scheme := anUrl scheme.
  ((x := CypressFileUrl urlClassForScheme: scheme) inheritsFrom: CypressAbstractFileUrl)
    ifTrue: [ ^ CypressAbstractRepository onUrl: anUrl alias: '' ].
  ^ super repositoryFromUrl: anUrl
%

category: 'attributes'
method: MetacelloGemStoneBasePlatform
stoneVersionAttributes
  ^ stoneVersionAttribute
    ifNil: [ 
      stoneVersionAttribute := self
        extractAtrributesFrom: (System stoneVersionAt: 'gsVersion') ]
%

category: 'testing'
method: MetacelloGemStoneBasePlatform
useCypressByDefault
  ^true
%

! Class Extensions

! Class initializers 

doit
MetacelloGemStoneBasePlatform initialize.
true.
%



! End of Package: Metacello-Platform.gscypress


