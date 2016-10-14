! Package: Network-Url


! Remove existing behavior from package Network-Url
!!!! This can be cleaned up when some package functionality is moved to the base system.

doit
| packageName |
packageName := 'Network-Url'.
System myUserProfile symbolList do: [:symDict |
	symDict do: [:possibleClass |
			| toRemove |
		possibleClass isBehavior ifTrue: [
			{possibleClass. possibleClass class} do: [:aClass |
				aClass category = packageName
					ifTrue: [
							"*anythingbutpackagename[-anything]"
						toRemove := aClass categoryNames select: 
										[:each |
										(each first = $* and: [(each size = (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2])
														or: [each size > (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2 and: [(each at: packageName size + 2) = $-]]]])
										or: [each first ~= $*]]
					]
					ifFalse: [
							"*packagename[-anything]"
						toRemove := aClass categoryNames select: 
										[:each |
										each first = $* and: [(each size = (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2])
														or: [each size > (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2 and: [(each at: packageName size + 2) = $-]]]]]
					].
				toRemove do: [:each | aClass removeCategory: each].
			]
		]
	]
].
true.
%


! Class Declarations

doit
(Error
	subclass: 'InvalidDirectoryError'
	instVarNames: #( pathName )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Network-Url';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'Authorizer'
	instVarNames: #( users realm )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Network-Url';
		comment: 'The Authorizer does user authorization checking. Each instance of authorizer keeps track of the realm that it is authorizing for, and the table of authorized users. An authorizer can be asked to return the user name/symbol associated with a userID (which concatenates the username and password from the HTTP request) with the user: method.
';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'Url'
	instVarNames: #( fragment )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Network-Url';
		comment: 'A Uniform Resource Locator.  It specifies the location of a document on the Internet.  The base class is abstract; child classes break different types of URLs down in ways appropriate for that type.';
		immediateInvariant.
true.
%

doit
(Url
	subclass: 'FileUrl'
	instVarNames: #( host path isAbsolute )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Network-Url';
		comment: 'This class models a file URL according to (somewhat) RFC1738, see http://www.w3.org/Addressing/rfc1738.txt

Here is the relevant part of the RFC:

3.10 FILES

   The file URL scheme is used to designate files accessible on a
   particular host computer. This scheme, unlike most other URL schemes,
   does not designate a resource that is universally accessible over the
   Internet.

   A file URL takes the form:

       file://<host>/<path>

   where <host> is the fully qualified domain name of the system on
   which the <path> is accessible, and <path> is a hierarchical
   directory path of the form <directory>/<directory>/.../<name>.

   For example, a VMS file

     DISK$USER:[MY.NOTES]NOTE123456.TXT

   might become

     <URL:file://vms.host.edu/disk$user/my/notes/note12345.txt>

   As a special case, <host> can be the string "localhost" or the empty
   string; this is interpreted as `the machine from which the URL is
   being interpreted''.

   The file URL scheme is unusual in that it does not specify an
   Internet protocol or access method for such files; as such, its
   utility in network protocols between hosts is limited.

From the above we can conclude that the RFC says that the <path> part never starts or ends with a slash and is always absolute. If the last name can be a directory instead of a file is not specified clearly.

The path is stored as a SequenceableCollection of path parts.

Notes regarding non RFC features in this class:

- If the last path part is the empty string, then the FileUrl is referring to a directory. This is also shown with a trailing slash when converted to a String.

- The FileUrl has an attribute isAbsolute which signals if the path should be considered absolute or relative to the current directory. This distinction is not visible in the String representation of FileUrl, since the RFC does not have that.

- Fragment is supported (kept for historical reasons)

';
		immediateInvariant.
true.
%

doit
(Url
	subclass: 'GenericUrl'
	instVarNames: #( schemeName locator )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Network-Url';
		comment: 'a URL type that can''t be broken down in any systematic way.  For example, mailto: and telnet: URLs.  The part after the scheme name is stored available via the #locator message.';
		immediateInvariant.
true.
%

doit
(GenericUrl
	subclass: 'BrowserUrl'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Network-Url';
		comment: 'URLs that instruct a browser to do something.';
		immediateInvariant.
true.
%

doit
(GenericUrl
	subclass: 'MailtoUrl'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Network-Url';
		comment: 'a URL specifying a mailing address; activating it triggers a mail-sender to start up, if one is present.';
		immediateInvariant.
true.
%

doit
(Url
	subclass: 'HierarchicalUrl'
	instVarNames: #( schemeName authority path query port username password )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Network-Url';
		comment: 'A URL which has a hierarchical encoding.  For instance, http and ftp URLs are hierarchical.';
		immediateInvariant.
true.
%

doit
(HierarchicalUrl
	subclass: 'FtpUrl'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Network-Url';
		comment: '';
		immediateInvariant.
true.
%

doit
(HierarchicalUrl
	subclass: 'HttpUrl'
	instVarNames: #( realm )
	classVars: #( Passwords )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Network-Url';
		comment: 'A URL that can be accessed via the Hypertext Transfer Protocol (HTTP), ie, a standard Web URL

realm = the name of the security realm that has been discovered for this URL.   Look it up in Passwords.

Passwords = a Dictionary of (realm -> encoded user&password)


TODO: use the username and password, if specified
';
		immediateInvariant.
true.
%

doit
(HttpUrl
	subclass: 'HttpsUrl'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Network-Url';
		comment: '';
		immediateInvariant.
true.
%

! Class Implementation for InvalidDirectoryError

! ------------------- Class methods for InvalidDirectoryError

category: 'exceptioninstantiator'
classmethod: InvalidDirectoryError
pathName: badPathName
	^self new pathName: badPathName
%

! ------------------- Instance methods for InvalidDirectoryError

category: 'exceptiondescription'
method: InvalidDirectoryError
defaultAction

	 ^#()
%

category: 'accessing'
method: InvalidDirectoryError
pathName
	^pathName
%

category: 'accessing'
method: InvalidDirectoryError
pathName: badPathName
	pathName := badPathName
%

! Class Implementation for Authorizer

! ------------------- Class methods for Authorizer

category: 'as yet unclassified'
classmethod: Authorizer
unauthorizedFor: realm
  ^ 'HTTP/1.0 401 Unauthorized' , self crlf
    , 'WWW-Authenticate: Basic realm="Pharo/' , realm , '"'
    ,
      (String
        with: Character cr
        with: Character lf
        with: Character cr
        with: Character lf)
    , '<html><title>Unauthorized</title><body><h2>Unauthorized for ' , realm
    , '</h2></body></html>'
%

! ------------------- Instance methods for Authorizer

category: 'authentication'
method: Authorizer
encode: nameString password: pwdString
	"Encode per RFC1421 of the username:password combination."

	| clear code clearSize idx map |
	clear := (nameString, ':', pwdString) asByteArray.
	clearSize := clear size.
	[ clear size \\ 3 ~= 0 ] whileTrue: [ clear := clear, #(0) ].
	idx := 1.
	map := 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.
	code := WriteStreamPortable on: String new.
	[ idx < clear size ] whileTrue: [ code 
		nextPut: (map at: (clear at: idx) // 4 + 1);
		nextPut: (map at: (clear at: idx) \\ 4 * 16 + ((clear at: idx + 1) // 16) + 1);
   		nextPut: (map at: (clear at: idx + 1) \\ 16 * 4 + ((clear at: idx + 2) // 64) + 1);
   		nextPut: (map at: (clear at: idx + 2) \\ 64 + 1).
		idx := idx + 3 ].
	code := code contents.
	idx := code size.
	clear size - clearSize timesRepeat: [ code at: idx put: $=. idx := idx - 1].
	^code
%

category: 'authentication'
method: Authorizer
mapFrom: aKey to: aPerson
	"Establish a mapping from a RFC 1421 key to a user."

	users isNil ifTrue: [ users := Dictionary new ].
	aPerson
	 isNil ifTrue: [ users removeKey: aKey ]
	 ifFalse: [
		users removeKey: (users keyAtValue: aPerson ifAbsent: []) ifAbsent: [].
		users at: aKey put: aPerson ]
%

category: 'authentication'
method: Authorizer
mapName: nameString password: pwdString to: aPerson
	"Insert/remove the encoding per RFC1421 of the username:password combination into/from the UserMap.  DO NOT call this directly, use mapName:password:to: in your ServerAction class.  Only it knows how to record the change on the disk!"

	self mapFrom: (self encode: nameString password: pwdString) to: aPerson
%

category: 'realms'
method: Authorizer
realm
	^realm
%

category: 'realms'
method: Authorizer
realm: aString
	realm := aString
%

category: 'authentication'
method: Authorizer
user: userId
	"Return the requesting user."
	^users at: userId ifAbsent: [ self error: (self class unauthorizedFor: realm) ]
%

! Class Implementation for Url

! ------------------- Class methods for Url

category: 'instance creation'
classmethod: Url
absoluteFromFileNameOrUrlString: aString
	"Return a URL from and handle Strings without schemes
	as local relative FileUrls instead of defaulting to a HttpUrl
	as absoluteFromText: does."

	^(Url schemeNameForString: aString)
		ifNil: [aString asUrlRelativeTo: FileUrl workingDirectory]
		ifNotNil: [Url absoluteFromText: aString]
%

category: 'instance creation'
classmethod: Url
absoluteFromText: aString
	"Return a URL from a string and handle
	a String without a scheme as a HttpUrl."

	"Url absoluteFromText: 'http://chaos.resnet.gatech.edu:8000/docs/java/index.html?A%20query%20#part'" 
	"Url absoluteFromText: 'msw://chaos.resnet.gatech.edu:9000/testbook?top'"
	"Url absoluteFromText: 'telnet:chaos.resnet.gatech.edu'"
	"Url absoluteFromText: 'file:/etc/passwd'"

	| remainder index scheme fragment newUrl |
	"trim surrounding whitespace"
	remainder := aString trimSeparators.	

	"extract the fragment, if any"
	index := remainder indexOf: $#.
	index > 0 ifTrue: [
		fragment := remainder copyFrom: index + 1 to: remainder size.
		remainder := remainder copyFrom: 1 to: index - 1].

	"choose class based on the scheme name, and let that class do the bulk of the parsing"
	scheme := self schemeNameForString: remainder.
	newUrl := (self urlClassForScheme: scheme) new privateInitializeFromText: remainder.
	newUrl privateFragment: fragment.
	^newUrl
%

category: 'parsing'
classmethod: Url
combine: baseURL withRelative: relURL 
	"Take two URL as string form, combine them and return the corresponding URL in string form"

	^((self absoluteFromText: baseURL) newFromRelativeText: relURL) asString
%

category: 'constants'
classmethod: Url
schemeName
	"When searching for a class to handle a particular scheme, make sure that Url classes never match by default. This is so that abstract Url classes e.g. HierarchicalUrl can be iterated over, but will not be selected"

	^ nil.
%

category: 'parsing'
classmethod: Url
schemeNameForString: aString
	"Get the scheme name from a string, or return nil if it's not specified. 
	Used in internal parsing routines - an outsider may as well use asUrl. 
	Return scheme in lowercases."
	
	"Url schemeNameForString: 'http://www.yahoo.com'"
	"Url schemeNameForString: '/etc/passwed'"
	"Url schemeNameForString: '/etc/testing:1.2.3'"

	| index schemeName |
	index := aString indexOf: $: ifAbsent: [^ nil].
	schemeName := aString copyFrom: 1 to: index - 1.
	(schemeName allSatisfy: [:each | each isLetter]) ifFalse: [^ nil].
	^ schemeName asLowercase
%

category: 'parsing'
classmethod: Url
urlClassForScheme: scheme

	^ self allSubclasses
				detect: [ :urlClass | urlClass schemeName = scheme ]
				ifNone: [ GenericUrl ].
%

! ------------------- Instance methods for Url

category: 'downloading'
method: Url
activate
	"spawn an external handler for this URL"
	
%

category: 'converting'
method: Url
asString

	^self printString
%

category: 'converting'
method: Url
asURI
	^self asString asURI
%

category: 'converting'
method: Url
asUrl
	^self
%

category: 'converting'
method: Url
asUrlRelativeTo: aUrl
	^self
%

category: 'accessing'
method: Url
authority
	^''
%

category: 'converting'
method: Url
downloadUrl
	^self asString
%

category: 'fragment'
method: Url
fragment
	^fragment
%

category: 'downloading'
method: Url
hasContents
	"whether this URL can download contents to be displayed; if not, it fundamentally requires an outside application to deal with it.  For example, mailto: and telnet: urls"
	^false
%

category: 'parsing'
method: Url
newFromRelativeText: aString
	"return a URL relative to the current one, given by aString.  For instance, if self is 'http://host/dir/file', and aString is '/dir2/file2', then the return will be a Url for 'http://host/dir2/file2'"

	"if the scheme is the same, or not specified, then use the same class"

	| newSchemeName remainder fragmentStart newFragment newUrl bare |

	bare := aString trimSeparators.
	newSchemeName := Url schemeNameForString: bare.
	(newSchemeName notNil and: [ newSchemeName ~= self schemeName ]) ifTrue: [
		"different scheme -- start from scratch"
		^Url absoluteFromText: aString ].

	remainder := bare.

	"remove the fragment, if any"
	fragmentStart := remainder indexOf: $#.
	fragmentStart > 0 ifTrue: [
		newFragment := remainder copyFrom: fragmentStart+1 to: remainder size. 
		remainder := remainder copyFrom: 1 to: fragmentStart-1].

	"remove the scheme name"
	newSchemeName ifNotNil: [
		remainder := remainder copyFrom: (newSchemeName size + 2) to: remainder size ].

	"create and initialize the new url"
	newUrl := self class new privateInitializeFromText: remainder  relativeTo: self.


	"set the fragment"
	newUrl privateFragment: newFragment.


	^newUrl
%

category: 'printing'
method: Url
printOn: aStream

	^self subclassResponsibility: #printOn:
%

category: 'fragment'
method: Url
privateFragment: aString
	fragment := aString
%

category: 'parsing'
method: Url
privateInitializeFromText: aString

	^self subclassResponsibility: #privateInitializeFromText:
%

category: 'parsing'
method: Url
privateInitializeFromText: aString relativeTo: aUrl
	"initialize from the given string, as a relative URL.  aString will have had the scheme name removed, if it was present to begin with.  If it was, then the scheme name was the same as the receiver's scheme name"

	"by default, just do regular initialization"
	^self privateInitializeFromText: aString
%

category: 'classification'
method: Url
scheme
	"return a string with the scheme of this URL.  For instance, HTTP"

	^self subclassResponsibility: #scheme
%

category: 'classification'
method: Url
schemeName
	"return a lowercase string with the scheme of this URL.  For instance, 'http'"

	^self subclassResponsibility: #schemeName
%

category: 'fragment'
method: Url
withFragment: newFragment
	"return a URL which is the same except that it has a different fragment"
	^self copy privateFragment: newFragment; yourself
%

category: 'fragment'
method: Url
withoutFragment
	"return a URL which is identical to the receiver except that it has no fragment associated with it"
	^self withFragment: nil
%

! Class Implementation for FileUrl

! ------------------- Class methods for FileUrl

category: 'instance creation'
classmethod: FileUrl
absoluteFromText: aString
	"Method that can be called explicitly to create a FileUrl."

	^self new privateInitializeFromText: aString
%

category: 'instance creation'
classmethod: FileUrl
host: aHost pathParts: aCollectionOfPathParts isAbsolute: aBoolean
	"Create a FileUrl."

	^self new host: aHost pathParts: aCollectionOfPathParts isAbsolute: aBoolean
%

category: 'instance creation'
classmethod: FileUrl
pathParts: aCollectionOfPathParts
	"Create a FileUrl."

	^self host: nil pathParts: aCollectionOfPathParts isAbsolute: true
%

category: 'instance creation'
classmethod: FileUrl
pathParts: aCollectionOfPathParts isAbsolute: aBoolean
	"Create a FileUrl."

	^self host: nil pathParts: aCollectionOfPathParts isAbsolute: aBoolean
%

category: 'constants'
classmethod: FileUrl
schemeName
	^'file'
%

category: 'instance creation'
classmethod: FileUrl
workingDirectory

	^self absoluteFromText: CypressFileUtilities current workingDirectory
%

! ------------------- Instance methods for FileUrl

category: 'downloading'
method: FileUrl
default
	"Answer a new URL with the receiver's path relative to the current working directory."
	
	self privateInitializeFromText: self pathString relativeTo: self class workingDirectory.
%

category: 'accessing'
method: FileUrl
fileName
	"Return the last part of the path,
	most often a filename but can also be a directory."

	^self path last
%

category: 'testing'
method: FileUrl
firstPartIsDriveLetter
	"Return true if the first part of the path is a letter
	followed by a $: like 'C:' "
	
	| firstPart |
	path isEmpty ifTrue: [^false].
	firstPart := path first.
	^firstPart size = 2 and: [
		firstPart first isLetter
			and: [firstPart last = $:]]
%

category: 'downloading'
method: FileUrl
hasContents
	^true
%

category: 'accessing'
method: FileUrl
host
	"Return the host name, either 'localhost', '', or a fully qualified domain name."
	
	^host ifNil: ['']
%

category: 'accessing'
method: FileUrl
host: hostName
	"Set the host name, either 'localhost', '', or a fully qualified domain name."
	
	host := hostName
%

category: 'private-initialization'
method: FileUrl
host: aHostString pathParts: aCollection isAbsolute: aBoolean

	host := aHostString.
	path := aCollection.
	isAbsolute := aBoolean
%

category: 'private-initialization'
method: FileUrl
initializeFromPathString: aPathString
	"<aPathString> is a file path as a String.
	We construct a path collection using various heuristics."

	| pathString hasDriveLetter |
	pathString := aPathString.
	pathString isEmpty ifTrue: [pathString := '/'].
	"Copy without empty string preceeding first / or between duplicated /s."
	path := ((pathString subStrings: '/') copyWithout: '') collect: [:token | token unescapePercents].

	"A path like 'C:' refers in practice to 'c:/'"
	((pathString endsWith: '/') or:
		[(hasDriveLetter := self firstPartIsDriveLetter) and: [path size = 1]])
			ifTrue: [path add: ''].

	"Decide if we are absolute by checking for leading $/ or
	beginning with drive letter. Smarts for other OSes?"
	self isAbsolute: ((pathString beginsWith: '/')
						or: [hasDriveLetter ifNil: [self firstPartIsDriveLetter]])
%

category: 'accessing'
method: FileUrl
isAbsolute
	"Should the path be considered absolute to
	the filesystem instead of relative to the default directory?"
 
	^isAbsolute
%

category: 'accessing'
method: FileUrl
isAbsolute: aBoolean
	"Set if the path should be considered absolute to
	the filesystem instead of relative to the default directory."

	isAbsolute := aBoolean
%

category: 'accessing'
method: FileUrl
path
	"Return an ordered collection of the path elements."
	
	^path
%

category: 'accessing'
method: FileUrl
path: aCollection
	"Set the collection of path elements."

	path := aCollection
%

category: 'paths'
method: FileUrl
pathDirString
	"Path to directory as url, using slash as delimiter.
	Filename is left out."

	^String streamContents: [ :s |
		isAbsolute ifTrue: [ s nextPut: $/ ].
		1 to: self path size - 1 do: [ :ii |
			s nextPutAll: (path at: ii); nextPut: $/]]
%

category: 'paths'
method: FileUrl
pathForDirectory
	"Path using local file system's pathname delimiter.
	DOS paths with drive letters should not
	be prepended with a delimiter even though
	they are absolute. Filename is left out."

	| delimiter |
	delimiter :=  CypressFileUtilities current pathNameDelimiter.
	^String streamContents: [ :s |
		(self isAbsolute and: [self firstPartIsDriveLetter not])
			ifTrue: [ s nextPutAll: delimiter ].
		1 to: self path size - 1 do: [ :ii |
			s nextPutAll: (path at: ii); nextPutAll: delimiter]]
%

category: 'paths'
method: FileUrl
pathForFile
  ^ self pathString
%

category: 'private-initialization'
method: FileUrl
pathParts: aCollection isAbsolute: aBoolean

	^self host: nil pathParts: aCollection isAbsolute: aBoolean
%

category: 'paths'
method: FileUrl
pathString
	"Path as it appears in a URL with $/ as delimiter."
	
	
	^String streamContents: [ :s | | first |
		"isAbsolute ifTrue:[ s nextPut: $/ ]."
		first := true.
		self path do: [ :p |
			first ifFalse: [ s nextPut: $/ ].
			first := false.
			s nextPutAll: p encodeForHTTP ] ]
%

category: 'copying'
method: FileUrl
postCopy
	"Be sure not to share the path with the copy."

	super postCopy.
	path := path copy
%

category: 'printing'
method: FileUrl
printOn: aStream
	"Return the FileUrl according to RFC1738 plus supporting fragments:
		'file://<host>/<path>#<fragment>'
	Note that <host> being '' is equivalent to 'localhost'.
	Note: The pathString can not start with a leading $/
	to indicate an 'absolute' file path.
	This is not according to RFC1738 where the path should have
	no leading or trailing slashes, and always
	be considered absolute relative to the filesystem."

	aStream nextPutAll: self schemeName, '://'.

	host ifNotNil: [aStream nextPutAll: host].

	aStream
		nextPut: $/;
		nextPutAll: self pathString.

	fragment ifNotNil:
		[aStream
			nextPut: $#;
			nextPutAll: fragment encodeForHTTP].
%

category: 'private-initialization'
method: FileUrl
privateInitializeFromText: aString
	"Calculate host and path from a file URL in String format.
	Some malformed formats are allowed and interpreted by guessing."

	| schemeName pathString bare i |
	bare := aString trimSeparators.
	schemeName := Url schemeNameForString: bare.
	(schemeName isNil or: [schemeName ~= self schemeName])
		ifTrue: [
			host := ''.
			pathString := bare]
		ifFalse: [
			"First remove schemeName and colon"
			bare := bare copyFrom: (schemeName size + 2) to: bare size.
			"A proper file URL then has two slashes before host,
			A malformed URL is interpreted as using syntax file:<path>."
			(bare beginsWith: '//')
				ifTrue: [i := bare indexOf: $/ startingAt: 3.
						i=0 ifTrue: [
								host := bare copyFrom: 3 to: bare size.
								pathString := '']
							ifFalse: [
								host := bare copyFrom: 3 to: i-1.
								pathString := bare copyFrom: host size + 3 to: bare size]]
				ifFalse: [host := ''.
						pathString := bare]].
	self initializeFromPathString: pathString
%

category: 'private-initialization'
method: FileUrl
privateInitializeFromText: pathString relativeTo: aUrl
	"<pathString> should be a filesystem path.
	This url is adjusted to be aUrl + the path."

	| newPath |
	self host: aUrl host.
	self initializeFromPathString: pathString.
	self isAbsolute: aUrl isAbsolute.

	newPath := aUrl path copy.
	newPath removeLast.	"empty string that says its a directory"
	path do: [ :token |
		((token ~= '..') and: [token ~= '.']) ifTrue: [ 
			newPath addLast: token unescapePercents ].
		token = '..' ifTrue: [ 
			newPath isEmpty ifFalse: [ 
				newPath last = '..' ifFalse: [ newPath removeLast ] ] ].
		"token = '.' do nothing" ].
	path := newPath

	
%

category: 'classification'
method: FileUrl
scheme
	^self class schemeName
%

category: 'classification'
method: FileUrl
schemeName
	^self class schemeName
%

! Class Implementation for GenericUrl

! ------------------- Class methods for GenericUrl

category: 'parsing'
classmethod: GenericUrl
absoluteFromText: aString
	| schemeName locator |
	schemeName := Url schemeNameForString: aString.
	schemeName ifNil: [ ^self schemeName: 'xnoscheme' locator: aString ].
	locator := aString copyFrom: (schemeName size + 2) to: aString size.
	^self schemeName: schemeName locator: locator
%

category: 'instance creation'
classmethod: GenericUrl
schemeName: schemeName  locator: locator
	^self new schemeName: schemeName  locator: locator
%

! ------------------- Instance methods for GenericUrl

category: 'access'
method: GenericUrl
locator
	^locator
%

category: 'printing'
method: GenericUrl
printOn: aStream
	
	self schemeName ifNotNil: [
		aStream nextPutAll: self schemeName; nextPut: $:].
	
	aStream nextPutAll: self locator.

	self fragment ifNotNil: [
		aStream nextPut: $#; nextPutAll: self fragment].
%

category: 'parsing'
method: GenericUrl
privateInitializeFromText: aString
	schemeName := Url schemeNameForString: aString.
	locator :=  schemeName 
		ifNil: [ aString ]
		ifNotNil: [ aString copyFrom: (schemeName size+2) to: aString size ].
%

category: 'parsing'
method: GenericUrl
privateInitializeFromText: aString relativeTo: aUrl
	schemeName := aUrl schemeName.
	locator := aString.
%

category: 'classification'
method: GenericUrl
scheme
	^ self schemeName.
%

category: 'access'
method: GenericUrl
schemeName
	^schemeName
%

category: 'private'
method: GenericUrl
schemeName: schemeName0  locator: locator0
	schemeName := schemeName0.
	locator := locator0.
%

! Class Implementation for BrowserUrl

! ------------------- Class methods for BrowserUrl

category: 'constants'
classmethod: BrowserUrl
schemeName

	^ 'browser'
%

! ------------------- Instance methods for BrowserUrl

category: 'downloading'
method: BrowserUrl
hasContents
	^true
%

! Class Implementation for MailtoUrl

! ------------------- Class methods for MailtoUrl

category: 'constants'
classmethod: MailtoUrl
schemeName

	^ 'mailto'
%

! Class Implementation for HierarchicalUrl

! ------------------- Class methods for HierarchicalUrl

category: 'instance creation'
classmethod: HierarchicalUrl
schemeName: schemeName  authority: authority  path: path  query: query
	^self new schemeName: schemeName  authority: authority  path: path  query: query
%

! ------------------- Instance methods for HierarchicalUrl

category: 'access'
method: HierarchicalUrl
authority
	^authority
%

category: 'access'
method: HierarchicalUrl
fileName
	"Return the last part of the path,
	most often a filename but does not need to be."

	^self path last
%

category: 'printing'
method: HierarchicalUrl
fullPath
	| ans |
	ans := WriteStreamPortable on: String new.
	path do: [ :pathElem |
		ans nextPut: $/.
		ans nextPutAll: pathElem encodeForHTTP. ].
	self query isNil ifFalse: [ 
		ans nextPut: $?.
		ans nextPutAll: self query. ].
	self fragment isNil ifFalse: [
		ans nextPut: $#.
		ans nextPutAll: self fragment encodeForHTTP. ].
	
	^ans contents
%

category: 'downloading'
method: HierarchicalUrl
hasContents
	"most of these do...."
	^true
%

category: 'access'
method: HierarchicalUrl
isAbsolute
	
	path size > 0 ifFalse: [^ false].
	(path at: 1) size > 0 ifFalse: [^ false].
	^ ((path at: 1) at: 1) ~~ $.
%

category: 'access'
method: HierarchicalUrl
password
	"http://user:pword@foo.com' asUrl password"
	^password
%

category: 'access'
method: HierarchicalUrl
path
	"return a collection of the decoded path elements, as strings"
	^path
%

category: 'access'
method: HierarchicalUrl
path: aCollection
	"Set the collection of path elements."

	path := aCollection
%

category: 'access'
method: HierarchicalUrl
port
	^port
%

category: 'copying'
method: HierarchicalUrl
postCopy
	"Be sure not to share the path with the copy"

	super postCopy.
	path := path copy
%

category: 'printing'
method: HierarchicalUrl
printOn: aStream

	aStream nextPutAll: self schemeName.
	aStream nextPutAll: '://'.
	self username ifNotNil: [
		aStream nextPutAll: self username encodeForHTTP.
		self password ifNotNil: [
			aStream nextPutAll: ':'.
			aStream nextPutAll: self password encodeForHTTP].
		aStream nextPutAll: '@' ].
	aStream nextPutAll: self authority.
	port ifNotNil: [aStream nextPut: $:; nextPutAll: port printString].
	path do: [ :pathElem |
		aStream nextPut: $/.
		aStream nextPutAll: pathElem encodeForHTTP. ].
	self query isNil ifFalse: [ 
		aStream nextPut: $?.
		aStream nextPutAll: self query. ].
	self fragment isNil ifFalse: [
		aStream nextPut: $#.
		aStream nextPutAll: self fragment encodeForHTTP. ].
%

category: 'parsing'
method: HierarchicalUrl
privateInitializeFromText: aString 
	| remainder ind specifiedSchemeName |
	remainder := aString.
	schemeName ifNil: 
			[specifiedSchemeName := Url schemeNameForString: remainder.
			specifiedSchemeName ifNotNil: 
					[schemeName := specifiedSchemeName.
					remainder := remainder copyFrom: schemeName size + 2 to: remainder size].
			schemeName ifNil: 
					["assume HTTP"
					schemeName := 'http']].

	"remove leading // if it's there"
	(remainder beginsWith: '//') 
		ifTrue: [remainder := remainder copyFrom: 3 to: remainder size].

	"get the query"
	ind := remainder indexOf: $?.
	ind > 0 
		ifTrue: 
			[query := remainder copyFrom: ind + 1 to: remainder size.
			remainder := remainder copyFrom: 1 to: ind - 1].

	"get the authority"
	ind := remainder indexOf: $/.
	ind > 0 
		ifTrue: 
			[ind = 1 
				ifTrue: [authority := '']
				ifFalse: 
					[authority := remainder copyFrom: 1 to: ind - 1.
					remainder := remainder copyFrom: ind + 1 to: remainder size]]
		ifFalse: 
			[authority := remainder.
			remainder := ''].

	"extract the username+password"
	(authority includes: $@) 
		ifTrue: 
			[username := authority copyUpTo: $@.
			authority := authority copyFrom: (authority indexOf: $@) + 1
						to: authority size.
			(username includes: $:) 
				ifTrue: 
					[password := (username copyFrom: (username indexOf: $:) + 1 to: username size) unescapePercents asByteArray decodeFromUTF8 asString.
					username := (username copyUpTo: $:) unescapePercents asByteArray decodeFromUTF8 asString]
				ifFalse: 
					[password := nil.
					username := username unescapePercents asByteArray decodeFromUTF8 asString]].

	"Extract the port"
	(authority includes: $:) 
		ifTrue: 
			[| lastColonIndex portString |
			lastColonIndex := authority findLast: [:c | c = $:].
			portString := authority copyFrom: lastColonIndex + 1 to: authority size.
			(portString allSatisfy: [:each | each isDigit])
				ifTrue: 
					[port := Integer fromString: portString.
					(port > 65535) ifTrue: [self error: 'Invalid port number'].
					 authority := authority copyFrom: 1 to: lastColonIndex - 1]
				ifFalse:[self error: 'Invalid port number']].

	"get the path"
	path := self privateParsePath: remainder relativeTo: #() .
%

category: 'parsing'
method: HierarchicalUrl
privateInitializeFromText: aString relativeTo: aUrl 
	| remainder ind basePath |
	remainder := aString.
	"set the scheme"
	schemeName := aUrl schemeName.

	"a leading // means the authority is specified, meaning it is absolute"
	(remainder beginsWith: '//')
		ifTrue: [^ self privateInitializeFromText: aString].

	"otherwise, use the same authority"
	authority := aUrl authority.
	port := aUrl port.
	username := aUrl username.
	password := aUrl password.

	"get the query"
	ind := remainder indexOf: $?.
	ind > 0
		ifTrue: [query := remainder copyFrom: ind + 1 to: remainder size.
			remainder := remainder copyFrom: 1 to: ind - 1].

	"get the path"
	(remainder beginsWith: '/')
		ifTrue: [ basePath := #() ]
		ifFalse: [ basePath := aUrl path ].
	path := self privateParsePath: remainder  relativeTo: basePath.

%

category: 'parsing'
method: HierarchicalUrl
privateParsePath: remainder relativeTo: basePath 
	| nextTok s parsedPath |
	s := remainder readStream.
	parsedPath := OrderedCollection new.
	parsedPath addAll: basePath.
	parsedPath isEmpty ifFalse: [ parsedPath removeLast ].
	
	[ s peek = $/ ifTrue: [ s next ].
	nextTok := WriteStreamPortable on: String new.
	[ s atEnd or: [ s peek = $/ ] ] whileFalse: [ nextTok nextPut: s next ].
	nextTok := nextTok contents unescapePercents.
	nextTok = '..' 
		ifTrue: [ parsedPath size > 0 ifTrue: [ parsedPath removeLast ] ]
		ifFalse: [ nextTok ~= '.' ifTrue: [ parsedPath add: nextTok ] ].
	s atEnd ] whileFalse.
	parsedPath isEmpty ifTrue: [ parsedPath add: '' ].
	^ parsedPath
%

category: 'access'
method: HierarchicalUrl
query
	"return the query, the part after any ?.  Any %XY's have already been decoded.  If there wasno query part, nil is returned (it is possible to also have an empty query"
	^query 
%

category: 'classification'
method: HierarchicalUrl
scheme
	^ self schemeName.
%

category: 'access'
method: HierarchicalUrl
schemeName
	^schemeName
%

category: 'private'
method: HierarchicalUrl
schemeName: schemeName0  authority: authority0  path: path0  query: query0
	"initialize a new instance"
	schemeName := schemeName0.
	authority := authority0.
	path := path0.
	query := query0.
%

category: 'access'
method: HierarchicalUrl
username
	"http://user:pword@foo.com' asUrl username"
	^username
%

! Class Implementation for FtpUrl

! ------------------- Class methods for FtpUrl

category: 'constants'
classmethod: FtpUrl
schemeName

	^ 'ftp'.
%

! Class Implementation for HttpUrl

! ------------------- Class methods for HttpUrl

category: 'constants'
classmethod: HttpUrl
schemeName

	^ 'http'.
%

! Class Implementation for HttpsUrl

! ------------------- Class methods for HttpsUrl

category: 'constants'
classmethod: HttpsUrl
schemeName

	^ 'https'.
%

! Class Extensions

! Class Extension for String

! ------------------- Instance methods for String

category: '*network-url'
method: String
asUrl
	"convert to a Url"
	"'http://www.cc.gatech.edu/' asUrl"
	"msw://chaos.resnet.gatech.edu:9000/' asUrl"
	^Url absoluteFromText: self
%

category: '*network-url'
method: String
asUrlRelativeTo: aUrl
	^aUrl newFromRelativeText: self
%

! Class initializers 

doit
true.
%



! End of Package: Network-Url


