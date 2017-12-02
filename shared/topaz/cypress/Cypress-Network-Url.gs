! Package: Cypress-Network-Url

! Class Declarations

doit
(Object
	subclass: 'CypressUrl'
	instVarNames: #( fragment )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Network-Url';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.

A Uniform Resource Locator.  It specifies the location of a document on the Internet.  The base class is abstract; child classes break different types of URLs down in ways appropriate for that type.';
		immediateInvariant.
true.
%

doit
(CypressUrl
	subclass: 'CypressFileUrl'
	instVarNames: #( host path isAbsolute )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Network-Url';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.

This class models a file URL according to (somewhat) RFC1738, see http://www.w3.org/Addressing/rfc1738.txt

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
(CypressUrl
	subclass: 'CypressGenericUrl'
	instVarNames: #( schemeName locator )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Network-Url';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.

a URL type that can''t be broken down in any systematic way.  For example, mailto: and telnet: URLs.  The part after the scheme name is stored available via the #locator message.';
		immediateInvariant.
true.
%

doit
(CypressGenericUrl
	subclass: 'CypressBrowserUrl'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Network-Url';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.

URLs that instruct a browser to do something.';
		immediateInvariant.
true.
%

doit
(CypressGenericUrl
	subclass: 'CypressMailtoUrl'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Network-Url';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.

a URL specifying a mailing address; activating it triggers a mail-sender to start up, if one is present.';
		immediateInvariant.
true.
%

doit
(CypressUrl
	subclass: 'CypressHierarchicalUrl'
	instVarNames: #( schemeName authority path query port username password )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Network-Url';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.

A URL which has a hierarchical encoding.  For instance, http and ftp URLs are hierarchical.';
		immediateInvariant.
true.
%

doit
(CypressHierarchicalUrl
	subclass: 'CypressFtpUrl'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Network-Url';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(CypressHierarchicalUrl
	subclass: 'CypressHttpUrl'
	instVarNames: #( realm )
	classVars: #( Passwords )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Network-Url';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.

A URL that can be accessed via the Hypertext Transfer Protocol (HTTP), ie, a standard Web URL

realm = the name of the security realm that has been discovered for this URL.   Look it up in Passwords.

Passwords = a Dictionary of (realm -> encoded user&password)


TODO: use the username and password, if specified
';
		immediateInvariant.
true.
%

doit
(CypressHttpUrl
	subclass: 'CypressHttpsUrl'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Network-Url';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%


! Class Implementation for CypressUrl

! ------------------- Class methods for CypressUrl

category: 'instance creation'
classmethod: CypressUrl
absoluteFromFileNameOrUrlString: aString
	"Return a URL from and handle Strings without schemes
	as local relative FileUrls instead of defaulting to a HttpUrl
	as absoluteFromText: does."

	^(CypressUrl schemeNameForString: aString)
		ifNil: [CypressFileUrl workingDirectory newFromRelativeText: aString]
		ifNotNil: [CypressUrl absoluteFromText: aString]
%

category: 'instance creation'
classmethod: CypressUrl
absoluteFromText: aString
	"Return a URL from a string and handle
	a String without a scheme as a HttpUrl."

	"CypressUrl absoluteFromText: 'http://chaos.resnet.gatech.edu:8000/docs/java/index.html?A%20query%20#part'" 
	"CypressUrl absoluteFromText: 'msw://chaos.resnet.gatech.edu:9000/testbook?top'"
	"CypressUrl absoluteFromText: 'telnet:chaos.resnet.gatech.edu'"
	"CypressUrl absoluteFromText: 'file:/etc/passwd'"

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
classmethod: CypressUrl
combine: baseURL withRelative: relURL 
	"Take two URL as string form, combine them and return the corresponding URL in string form"

	^((self absoluteFromText: baseURL) newFromRelativeText: relURL) asString
%

category: 'instance creation'
classmethod: CypressUrl
for: aString
	"Return a URL from a string and handle
	a String without a scheme as a HttpUrl."

	^self absoluteFromText: aString
%

category: 'encoding'
classmethod: CypressUrl
isCharacterSafeForHttp: aChar
	"Answer whether a character is 'safe', or needs to be escaped when used, eg, in a URL."

	^aChar codePoint < 128
		and: [aChar isAlphaNumeric or: ['.-_' includes: aChar]]
%

category: 'constants'
classmethod: CypressUrl
schemeName
	"When searching for a class to handle a particular scheme, make sure that Url classes never match by default. This is so that abstract Url classes e.g. HierarchicalUrl can be iterated over, but will not be selected"

	^ nil.
%

category: 'parsing'
classmethod: CypressUrl
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
classmethod: CypressUrl
urlClassForScheme: scheme

	| allSubclasses |
	allSubclasses := self userId = System myUserProfile userId
		ifTrue: [ ClassOrganizer new allSubclassesOf: self ]
		ifFalse: [ (ClassOrganizer newWithRoot: self forUserId: self userId) allSubclassesOf: self ].
	^allSubclasses detect: [:urlClass | urlClass schemeName = scheme]
		ifNone: [CypressGenericUrl]
%

category: 'encoding'
classmethod: CypressUrl
writeWithHttpEscapes: aCollection on: aStream
	"Write the given string or Utf8 on the stream with 'dangerous' characters 
	escaped to their %XX form, for use in HTTP transactions.
	Note that Utf8s containing code points over 128 will not work properly here."

	aCollection do: 
			[:each |
			| char |
			char := each asCharacter.
			(self isCharacterSafeForHttp: char)
				ifTrue: [aStream nextPut: char]
				ifFalse: 
					[| int |
					aStream nextPut: $%.
					int := each asInteger.
					int // 16 printOn: aStream base: 16 showRadix: false.
					int \\ 16 printOn: aStream base: 16 showRadix: false]]
%

! ------------------- Instance methods for CypressUrl

category: 'downloading'
method: CypressUrl
activate
	"spawn an external handler for this URL"
	
%

category: 'converting'
method: CypressUrl
asString

	^self printString
%

category: 'converting'
method: CypressUrl
asURI
	^self asString asURI
%

category: 'converting'
method: CypressUrl
asUrl
	^self
%

category: 'converting'
method: CypressUrl
asUrlRelativeTo: aUrl
	^self
%

category: 'accessing'
method: CypressUrl
authority
	^''
%

category: 'encoding'
method: CypressUrl
decodeHttpEscapesOf: aString
	"decode string including %XX form
	 (adapted from Pharo 2.0)"

	| unescaped pos sourceSize |
	unescaped := ReadWriteStreamPortable on: String new.
	pos := 1.
	sourceSize := aString size.
	[pos > sourceSize] whileFalse: 
			[| char |
			char := aString at: pos.
			(char = $% and: [pos + 2 <= sourceSize])
				ifTrue: 
					[| asciiVal |
					asciiVal := ((aString at: pos + 1) asUppercase digitValueInRadix: 16) * 16
								+ ((aString at: pos + 2) asUppercase digitValueInRadix: 16).
					asciiVal > 255 ifTrue: [^aString].
					unescaped nextPut: (Character withValue: asciiVal).
					pos := pos + 3]
				ifFalse: 
					[char = $+
						ifTrue: [unescaped nextPut: Character space]
						ifFalse: [unescaped nextPut: char].
					pos := pos + 1]].
	^unescaped contents
%

category: 'converting'
method: CypressUrl
downloadUrl
	^self asString
%

category: 'fragment'
method: CypressUrl
fragment
	^fragment
%

category: 'downloading'
method: CypressUrl
hasContents
	"whether this URL can download contents to be displayed; if not, it fundamentally requires an outside application to deal with it.  For example, mailto: and telnet: urls"
	^false
%

category: 'parsing'
method: CypressUrl
newFromRelativeText: aString
	"return a URL relative to the current one, given by aString.  For instance, if self is 'http://host/dir/file', and aString is '/dir2/file2', then the return will be a Url for 'http://host/dir2/file2'"

	"if the scheme is the same, or not specified, then use the same class"

	| newSchemeName remainder fragmentStart newFragment newUrl bare |

	bare := aString trimSeparators.
	newSchemeName := CypressUrl schemeNameForString: bare.
	(newSchemeName notNil and: [ newSchemeName ~= self schemeName ]) ifTrue: [
		"different scheme -- start from scratch"
		^CypressUrl absoluteFromText: aString ].

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
method: CypressUrl
printOn: aStream

	^self subclassResponsibility: #printOn:
%

category: 'fragment'
method: CypressUrl
privateFragment: aString
	fragment := aString
%

category: 'parsing'
method: CypressUrl
privateInitializeFromText: aString

	^self subclassResponsibility: #privateInitializeFromText:
%

category: 'parsing'
method: CypressUrl
privateInitializeFromText: aString relativeTo: aUrl
	"initialize from the given string, as a relative URL.  aString will have had the scheme name removed, if it was present to begin with.  If it was, then the scheme name was the same as the receiver's scheme name"

	"by default, just do regular initialization"
	^self privateInitializeFromText: aString
%

category: 'classification'
method: CypressUrl
scheme
	"return a string with the scheme of this URL.  For instance, HTTP"

	^self subclassResponsibility: #scheme
%

category: 'classification'
method: CypressUrl
schemeName
	"return a lowercase string with the scheme of this URL.  For instance, 'http'"

	^self subclassResponsibility: #schemeName
%

category: 'fragment'
method: CypressUrl
withFragment: newFragment
	"return a URL which is the same except that it has a different fragment"
	^self copy privateFragment: newFragment; yourself
%

category: 'fragment'
method: CypressUrl
withoutFragment
	"return a URL which is identical to the receiver except that it has no fragment associated with it"
	^self withFragment: nil
%

category: 'encoding'
method: CypressUrl
writeWithHttpEscapes: aCollection on: aStream

	self class writeWithHttpEscapes: aCollection on: aStream
%

! Class Implementation for CypressFileUrl

! ------------------- Class methods for CypressFileUrl

category: 'instance creation'
classmethod: CypressFileUrl
absoluteFromText: aString
	"Method that can be called explicitly to create a FileUrl."

	^self new privateInitializeFromText: aString
%

category: 'instance creation'
classmethod: CypressFileUrl
host: aHost pathParts: aCollectionOfPathParts isAbsolute: aBoolean
	"Create a FileUrl."

	^self new host: aHost pathParts: aCollectionOfPathParts isAbsolute: aBoolean
%

category: 'instance creation'
classmethod: CypressFileUrl
pathParts: aCollectionOfPathParts
	"Create a FileUrl."

	^self host: nil pathParts: aCollectionOfPathParts isAbsolute: true
%

category: 'instance creation'
classmethod: CypressFileUrl
pathParts: aCollectionOfPathParts isAbsolute: aBoolean
	"Create a FileUrl."

	^self host: nil pathParts: aCollectionOfPathParts isAbsolute: aBoolean
%

category: 'constants'
classmethod: CypressFileUrl
schemeName
	^'file'
%

category: 'instance creation'
classmethod: CypressFileUrl
workingDirectory

	^self absoluteFromText: CypressFileUtilities current workingDirectory
%

! ------------------- Instance methods for CypressFileUrl

category: 'downloading'
method: CypressFileUrl
default
	"Answer a new URL with the receiver's path relative to the current working directory."
	
	self privateInitializeFromText: self pathString relativeTo: self class workingDirectory.
%

category: 'accessing'
method: CypressFileUrl
fileName
	"Return the last part of the path,
	most often a filename but can also be a directory."

	^self path last
%

category: 'testing'
method: CypressFileUrl
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
method: CypressFileUrl
hasContents
	^true
%

category: 'accessing'
method: CypressFileUrl
host
	"Return the host name, either 'localhost', '', or a fully qualified domain name."
	
	^host ifNil: ['']
%

category: 'accessing'
method: CypressFileUrl
host: hostName
	"Set the host name, either 'localhost', '', or a fully qualified domain name."
	
	host := hostName
%

category: 'private-initialization'
method: CypressFileUrl
host: aHostString pathParts: aCollection isAbsolute: aBoolean

	host := aHostString.
	path := aCollection.
	isAbsolute := aBoolean
%

category: 'private-initialization'
method: CypressFileUrl
initializeFromPathString: aPathString
	"<aPathString> is a file path as a String.
	We construct a path collection using various heuristics."

	| pathString hasDriveLetter |
	pathString := aPathString.
	pathString isEmpty ifTrue: [pathString := '/'].
	"Copy without empty string preceeding first / or between duplicated /s."
	path := ((pathString subStrings: '/') copyWithout: '')
				collect: [:token | self decodeHttpEscapesOf: token].

	"A path like 'C:' refers in practice to 'c:/'"
	(pathString last = $/
		or: [(hasDriveLetter := self firstPartIsDriveLetter) and: [path size = 1]])
			ifTrue: [path add: ''].

	"Decide if we are absolute by checking for leading $/ or
	beginning with drive letter. Smarts for other OSes?"
	self isAbsolute: ((pathString at: 1) = $/
				or: [hasDriveLetter ifNil: [self firstPartIsDriveLetter]])
%

category: 'accessing'
method: CypressFileUrl
isAbsolute
	"Should the path be considered absolute to
	the filesystem instead of relative to the default directory?"
 
	^isAbsolute
%

category: 'accessing'
method: CypressFileUrl
isAbsolute: aBoolean
	"Set if the path should be considered absolute to
	the filesystem instead of relative to the default directory."

	isAbsolute := aBoolean
%

category: 'accessing'
method: CypressFileUrl
path
	"Return an ordered collection of the path elements."
	
	^path
%

category: 'accessing'
method: CypressFileUrl
path: aCollection
	"Set the collection of path elements."

	path := aCollection
%

category: 'paths'
method: CypressFileUrl
pathDirString
	"Path to directory as url, using slash as delimiter.
	Filename is left out."

	| s |
	s := WriteStreamPortable on: (String new: 100).
	isAbsolute ifTrue: [s nextPut: $/].
	1 to: self path size - 1
		do: 
			[:ii |
			s
				nextPutAll: (path at: ii);
				nextPut: $/].
	^s contents
%

category: 'paths'
method: CypressFileUrl
pathForDirectory
	"Path using local file system's pathname delimiter.
	DOS paths with drive letters should not
	be prepended with a delimiter even though
	they are absolute. Filename is left out."

	| delimiter s |
	delimiter := CypressFileUtilities current pathNameDelimiter.
	s := WriteStreamPortable on: (String new: 100).
	(self isAbsolute and: [self firstPartIsDriveLetter not])
		ifTrue: [s nextPutAll: delimiter].
	1 to: self path size - 1
		do: 
			[:ii |
			s
				nextPutAll: (path at: ii);
				nextPutAll: delimiter].
	^s contents
%

category: 'paths'
method: CypressFileUrl
pathForFile
  ^ self pathString
%

category: 'private-initialization'
method: CypressFileUrl
pathParts: aCollection isAbsolute: aBoolean

	^self host: nil pathParts: aCollection isAbsolute: aBoolean
%

category: 'paths'
method: CypressFileUrl
pathString
	"Path as it appears in a URL with $/ as delimiter."

	| s first |
	s := WriteStreamPortable on: (String new: 100).

	"isAbsolute ifTrue:[ s nextPut: $/ ]."
	first := true.
	self path do: 
			[:p |
			first ifFalse: [s nextPut: $/].
			first := false.
			self writeWithHttpEscapes: p on: s].
	^s contents
%

category: 'copying'
method: CypressFileUrl
postCopy
	"Be sure not to share the path with the copy."

	super postCopy.
	path := path copy
%


category: 'printing'
method: CypressFileUrl
printOn: aStream
	"Return the FileUrl according to RFC3986
		'file:'['//'<host>]<path>#<fragment>
	Note that <host> being '' is equivalent to 'localhost' and is not printed."

	aStream
		nextPutAll: self schemeName;
		nextPut: $:.

	"File URLs with hosts (which are fairly useless) cannot be relative."
	host isEmpty
		ifFalse: 
			[isAbsolute
				ifFalse: 
					[aStream nextPutAll: '<ErroneousURL>'.
					^nil].
			aStream
				nextPutAll: '//';
				nextPutAll: host].
	isAbsolute ifTrue: [aStream nextPut: $/].
	aStream nextPutAll: self pathString.
	fragment
		ifNotNil: 
			[aStream nextPut: $#.
			self writeWithHttpEscapes: fragment on: aStream]
%


category: 'private-initialization'
method: CypressFileUrl
privateInitializeFromText: aString
	"Calculate host and path from a file URL in String format.
	Some malformed formats are allowed and interpreted by guessing."

	| schemeName pathString bare i |
	bare := aString trimSeparators.
	schemeName := CypressUrl schemeNameForString: bare.
	(schemeName isNil or: [schemeName ~= self schemeName])
		ifTrue: 
			[host := ''.
			pathString := bare]
		ifFalse: 
			["First remove schemeName and colon"
			bare := bare copyFrom: schemeName size + 2 to: bare size.
			"A proper file URL then has two slashes before host,
			A malformed URL is interpreted as using syntax file:<path>."
			(bare indexOfSubCollection: '//') = 1
				ifTrue: 
					[i := bare indexOf: $/ startingAt: 3.
					i = 0
						ifTrue: 
							[host := bare copyFrom: 3 to: bare size.
							pathString := '']
						ifFalse: 
							[host := bare copyFrom: 3 to: i - 1.
							pathString := bare copyFrom: host size + 3 to: bare size]]
				ifFalse: 
					[host := ''.
					pathString := bare]].
	self initializeFromPathString: pathString
%

category: 'private-initialization'
method: CypressFileUrl
privateInitializeFromText: pathString relativeTo: aUrl
	"<pathString> should be a filesystem path.
	This url is adjusted to be aUrl + the path."

	| newPath |
	self host: aUrl host.
	self initializeFromPathString: pathString.
	self isAbsolute: aUrl isAbsolute.
	newPath := aUrl path copy.
	newPath removeLast.	"empty string that says its a directory"
	path do: 
			[:token |
			(token ~= '..' and: [token ~= '.'])
				ifTrue: [newPath addLast: (self decodeHttpEscapesOf: token)].
			token = '..'
				ifTrue: 
					[newPath isEmpty
						ifFalse: [newPath last = '..' ifFalse: [newPath removeLast]]]
			"token = '.' do nothing"].
	path := newPath
%

category: 'classification'
method: CypressFileUrl
scheme
	^self class schemeName
%

category: 'classification'
method: CypressFileUrl
schemeName
	^self class schemeName
%

! Class Implementation for CypressGenericUrl

! ------------------- Class methods for CypressGenericUrl

category: 'parsing'
classmethod: CypressGenericUrl
absoluteFromText: aString

	| schemeName locator |
	schemeName := CypressUrl schemeNameForString: aString.
	schemeName ifNil: [^self schemeName: 'xnoscheme' locator: aString].
	locator := aString copyFrom: schemeName size + 2 to: aString size.
	^self schemeName: schemeName locator: locator
%

category: 'instance creation'
classmethod: CypressGenericUrl
schemeName: schemeName  locator: locator
	^self new schemeName: schemeName  locator: locator
%

! ------------------- Instance methods for CypressGenericUrl

category: 'access'
method: CypressGenericUrl
locator
	^locator
%

category: 'printing'
method: CypressGenericUrl
printOn: aStream
	
	self schemeName ifNotNil: [
		aStream nextPutAll: self schemeName; nextPut: $:].
	
	aStream nextPutAll: self locator.

	self fragment ifNotNil: [
		aStream nextPut: $#; nextPutAll: self fragment].
%

category: 'parsing'
method: CypressGenericUrl
privateInitializeFromText: aString

	schemeName := CypressUrl schemeNameForString: aString.
	locator := schemeName
				ifNil: [aString]
				ifNotNil: [aString copyFrom: schemeName size + 2 to: aString size]
%

category: 'parsing'
method: CypressGenericUrl
privateInitializeFromText: aString relativeTo: aUrl
	schemeName := aUrl schemeName.
	locator := aString.
%

category: 'classification'
method: CypressGenericUrl
scheme
	^ self schemeName.
%

category: 'access'
method: CypressGenericUrl
schemeName
	^schemeName
%

category: 'private'
method: CypressGenericUrl
schemeName: schemeName0  locator: locator0
	schemeName := schemeName0.
	locator := locator0.
%

! Class Implementation for CypressBrowserUrl

! ------------------- Class methods for CypressBrowserUrl

category: 'constants'
classmethod: CypressBrowserUrl
schemeName

	^'browser'
%

! ------------------- Instance methods for CypressBrowserUrl

category: 'downloading'
method: CypressBrowserUrl
hasContents

	^true
%

! Class Implementation for CypressMailtoUrl

! ------------------- Class methods for CypressMailtoUrl

category: 'constants'
classmethod: CypressMailtoUrl
schemeName

	^ 'mailto'
%

! Class Implementation for CypressHierarchicalUrl

! ------------------- Class methods for CypressHierarchicalUrl

category: 'instance creation'
classmethod: CypressHierarchicalUrl
schemeName: schemeName  authority: authority  path: path  query: query
	^self new schemeName: schemeName  authority: authority  path: path  query: query
%

! ------------------- Instance methods for CypressHierarchicalUrl

category: 'access'
method: CypressHierarchicalUrl
authority
	^authority
%

category: 'access'
method: CypressHierarchicalUrl
fileName
	"Return the last part of the path,
	most often a filename but does not need to be."

	^self path last
%

category: 'printing'
method: CypressHierarchicalUrl
fullPath

	| ans |
	ans := WriteStreamPortable on: String new.
	path do: 
			[:pathElem |
			ans nextPut: $/.
			self writeWithHttpEscapes: pathElem on: ans].
	self query isNil
		ifFalse: 
			[ans nextPut: $?.
			ans nextPutAll: self query].
	self fragment isNil
		ifFalse: 
			[ans nextPut: $#.
			self writeWithHttpEscapes: self fragment on: ans].
	^ans contents
%

category: 'downloading'
method: CypressHierarchicalUrl
hasContents
	"most of these do...."
	^true
%

category: 'access'
method: CypressHierarchicalUrl
isAbsolute
	
	path size > 0 ifFalse: [^ false].
	(path at: 1) size > 0 ifFalse: [^ false].
	^ ((path at: 1) at: 1) ~~ $.
%

category: 'access'
method: CypressHierarchicalUrl
password
	"http://user:pword@foo.com' asUrl password"
	^password
%

category: 'access'
method: CypressHierarchicalUrl
path
	"return a collection of the decoded path elements, as strings"
	^path
%

category: 'access'
method: CypressHierarchicalUrl
path: aCollection
	"Set the collection of path elements."

	path := aCollection
%

category: 'access'
method: CypressHierarchicalUrl
port
	^port
%

category: 'copying'
method: CypressHierarchicalUrl
postCopy
	"Be sure not to share the path with the copy"

	super postCopy.
	path := path copy
%

category: 'printing'
method: CypressHierarchicalUrl
printOn: aStream

	aStream nextPutAll: self schemeName.
	aStream nextPutAll: '://'.
	self username
		ifNotNil: 
			[self writeWithHttpEscapes: self username on: aStream.
			self password
				ifNotNil: 
					[aStream nextPutAll: ':'.
					self writeWithHttpEscapes: self password on: aStream].
			aStream nextPutAll: '@'].
	aStream nextPutAll: self authority.
	port
		ifNotNil: 
			[aStream
				nextPut: $:;
				nextPutAll: port printString].
	path do: 
			[:pathElem |
			aStream nextPut: $/.
			self writeWithHttpEscapes: pathElem on: aStream].
	self query isNil
		ifFalse: 
			[aStream nextPut: $?.
			aStream nextPutAll: self query].
	self fragment isNil
		ifFalse: 
			[aStream nextPut: $#.
			self writeWithHttpEscapes: self fragment on: aStream]
%

category: 'parsing'
method: CypressHierarchicalUrl
privateInitializeFromText: aString

	| remainder ind specifiedSchemeName |
	remainder := aString.
	schemeName
		ifNil: 
			[specifiedSchemeName := CypressUrl schemeNameForString: remainder.
			specifiedSchemeName
				ifNotNil: 
					[schemeName := specifiedSchemeName.
					remainder := remainder copyFrom: schemeName size + 2 to: remainder size].
			schemeName
				ifNil: 
					["assume HTTP"
					schemeName := 'http']].

	"remove leading // if it's there"
	(remainder indexOfSubCollection: '//') = 1
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
	ind := authority indexOf: $@.
	ind > 0
		ifTrue: 
			[username := authority copyFrom: 1 to: ind - 1.
			authority := authority copyFrom: ind + 1 to: authority size.
			ind := username indexOf: $:.
			ind > 0
				ifTrue: 
					[password := (self
								decodeHttpEscapesOf: (username copyFrom: ind + 1 to: username size))
									asByteArray decodeFromUTF8
								asString.
					username := username copyFrom: 1 to: ind - 1]
				ifFalse: [password := nil].
			username := (self decodeHttpEscapesOf: username) asByteArray
						decodeFromUTF8 asString].

	"Extract the port"
	(authority includes: $:)
		ifTrue: 
			[| lastColonIndex portString |
			lastColonIndex := authority findLast: [:c | c = $:].
			portString := authority copyFrom: lastColonIndex + 1 to: authority size.
			(portString allSatisfy: [:each | each isDigit])
				ifTrue: 
					[port := Integer fromString: portString.
					port > 65535 ifTrue: [self error: 'Invalid port number'].
					authority := authority copyFrom: 1 to: lastColonIndex - 1]
				ifFalse: [self error: 'Invalid port number']].

	"get the path"
	path := self privateParsePath: remainder relativeTo: #()
%

category: 'parsing'
method: CypressHierarchicalUrl
privateInitializeFromText: aString relativeTo: aUrl

	| remainder ind basePath |
	remainder := aString.
	"set the scheme"
	schemeName := aUrl schemeName.

	"a leading // means the authority is specified, meaning it is absolute"
	(remainder indexOfSubCollection: '//') = 1
		ifTrue: [^self privateInitializeFromText: aString].

	"otherwise, use the same authority"
	authority := aUrl authority.
	port := aUrl port.
	username := aUrl username.
	password := aUrl password.

	"get the query"
	ind := remainder indexOf: $?.
	ind > 0
		ifTrue: 
			[query := remainder copyFrom: ind + 1 to: remainder size.
			remainder := remainder copyFrom: 1 to: ind - 1].

	"get the path"
	(remainder indexOfSubCollection: '/') = 1
		ifTrue: [basePath := #()]
		ifFalse: [basePath := aUrl path].
	path := self privateParsePath: remainder relativeTo: basePath
%

category: 'parsing'
method: CypressHierarchicalUrl
privateParsePath: remainder relativeTo: basePath

	| nextTok s parsedPath |
	s := remainder readStream.
	parsedPath := OrderedCollection new.
	parsedPath addAll: basePath.
	parsedPath isEmpty ifFalse: [parsedPath removeLast].
	
	[s peek = $/ ifTrue: [s next].
	nextTok := WriteStreamPortable on: String new.
	[s atEnd or: [s peek = $/]] whileFalse: [nextTok nextPut: s next].
	nextTok := self decodeHttpEscapesOf: nextTok contents.
	nextTok = '..'
		ifTrue: [parsedPath size > 0 ifTrue: [parsedPath removeLast]]
		ifFalse: [nextTok ~= '.' ifTrue: [parsedPath add: nextTok]].
	s atEnd]
			whileFalse.
	parsedPath isEmpty ifTrue: [parsedPath add: ''].
	^parsedPath
%

category: 'access'
method: CypressHierarchicalUrl
query
	"return the query, the part after any ?.  Any %XY's have already been decoded.  If there wasno query part, nil is returned (it is possible to also have an empty query"
	^query 
%

category: 'classification'
method: CypressHierarchicalUrl
scheme
	^ self schemeName.
%

category: 'access'
method: CypressHierarchicalUrl
schemeName
	^schemeName
%

category: 'private'
method: CypressHierarchicalUrl
schemeName: schemeName0  authority: authority0  path: path0  query: query0
	"initialize a new instance"
	schemeName := schemeName0.
	authority := authority0.
	path := path0.
	query := query0.
%

category: 'access'
method: CypressHierarchicalUrl
username
	"http://user:pword@foo.com' asUrl username"
	^username
%

! Class Implementation for CypressFtpUrl

! ------------------- Class methods for CypressFtpUrl

category: 'constants'
classmethod: CypressFtpUrl
schemeName

	^ 'ftp'.
%

! Class Implementation for CypressHttpUrl

! ------------------- Class methods for CypressHttpUrl

category: 'constants'
classmethod: CypressHttpUrl
schemeName

	^ 'http'.
%

! Class Implementation for CypressHttpsUrl

! ------------------- Class methods for CypressHttpsUrl

category: 'constants'
classmethod: CypressHttpsUrl
schemeName

	^ 'https'.
%

! Class Extensions

! Class initializers 

doit
true.
%



! End of Package: Cypress-Network-Url

