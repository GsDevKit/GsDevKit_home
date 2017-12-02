! Package: Cypress-GitHub-Url

! Class Declarations


run
".,$s/inDictionary: UserGlobals/inDictionary: CypressPackageSymbolList/ "
UserGlobals at: #CypressPackageSymbolList put: Globals.
true
%

doit
(CypressGitFileUrl subclass: 'CypressGitHubFileUrl'
	instVarNames: #()
	classVars: #()
	classInstVars: #()
	poolDictionaries: #()
	inDictionary: CypressPackageSymbolList
	options: #())
		category: 'Cypress-GitHub-Url';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%


! ------------------- Class methods for CypressGitHubFileUrl

category: 'constants'
classmethod: CypressGitHubFileUrl
schemeName
  "A gitcypress url with a host is the target for a remote. All other parameters are optional.
	Parameters are:
		dir : the directory inside the repository where the target MC packages are.
		branch : the git branch to fetch.
		protocol: the user name part to add to the ssh Url, default to git, but can also be https (which implies read only access).
		readOnly : is the repository read only? If present, reduce the history to a minimum (and change the GUI).
	Alternative url syntax:
		github://dalehenrich/filetree:pharo5.0_dev/repository
	with:
		host : github.com
		project : dalehenrich/filetree
		branch : pharo5.0_dev
		dir : repository
"

  ^ 'github'
%

! ------------------- Instance methods for CypressGitHubFileUrl

category: 'accessing'
method: CypressGitHubFileUrl
codeFormat
  ^ 'FileTree'
%
category: 'testing'
method: CypressGitHubFileUrl
isStrict

	^false
%
category: 'private-initialization'
method: CypressGitHubFileUrl
privateInitializeFromText: aString
  "Calculate path from a file URL in String format.
	Some malformed formats are allowed and interpreted by guessing."

  | schemeName pathString bare i |
  bare := aString trimSeparators.
  schemeName := CypressUrl schemeNameForString: bare.
  host := 'github.com'.
  (schemeName isNil or: [ schemeName ~= self schemeName ])
    ifTrue: [ pathString := bare ]
    ifFalse: [ 
      "First remove schemeName and colon"
      bare := bare copyFrom: schemeName size + 2 to: bare size.
      (bare indexOfSubCollection: '//') = 1
        ifTrue: [ 
          i := bare indexOf: $/ startingAt: 3.
          i = 0
            ifTrue: [ pathString := bare ]
            ifFalse: [ pathString := bare copyFrom: 2 to: bare size ] ]
        ifFalse: [  ] ].
  self initializeFromPathString: pathString
%

category: 'paths'
method: CypressGitHubFileUrl
pathString
	"Path as it appears in a URL with $/ as delimiter."

	| s first |
	s := WriteStreamPortable on: (String new: 100).

	first := true.
	self path do: 
			[:p |
			first ifFalse: [s nextPut: $/].
			first := false.
			s nextPutAll: p ].
	^s contents
%


! End of Package: Cypress-GitHub-Url

run
UserGlobals removeKey: #CypressPackageSymbolList.
true
%

