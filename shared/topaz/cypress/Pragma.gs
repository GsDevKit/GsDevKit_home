!=========================================================================
! Copyright (C) GemTalk Systems 1986-2016.  All Rights Reserved.
!
! $Id: random.gs 38384 2016-01-08 18:22:36Z lalmarod $
!
! Superclass Hierarchy:
!   Object
!     Pragma
!
!=========================================================================

! ------------------- Class definition for Pragma
expectvalue %String
run
(Object subclass: 'Pragma'
  instVarNames: #( method keyword arguments)
  classVars: #()
  classInstVars: #()
  poolDictionaries: #()
  inDictionary: Globals
  options: #()
) definition
%
! ------------------- Remove existing behavior from Pragma
doit
Pragma removeAllMethods.
Pragma class removeAllMethods.
true
%
doit
Pragma comment: 'I represent an occurrence of a pragma in a compiled method.  A pragma is a literal message pattern that occurs between angle brackets at the start of a method after any temporaries.  A common example is the primitive pragma:
	<primitive: 123 errorCode: ''errorCode''>
but one can add one''s own and use them as metadata attached to a method.  Because pragmas are messages one can browse senders and implementors and perform them.  One can query a method for its pragmas by sendng it the pragmas message, which answers an Array of instances of me, one for each pragma in the method.

I can provide information about the defining class, method, its selector, as well as the information about the pragma keyword and its arguments. See the two ''accessing'' protocols for details. ''accessing-method'' provides information about the method the pragma is found in, while ''accessing-pragma'' is about the pragma itself.

Instances are retrieved using one of the pragma search methods of the ''finding'' protocol on the class side.'.
true
%
! ------------------- Class definition for Message
expectvalue %String
doit
(Object subclass: 'Message'
	instVarNames: #( selector args lookupClass)
	classVars: #()
	classInstVars: #()
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
) definition
%
! ------------------- Remove existing behavior from Message
doit
Message comment: 'I represent a selector and its argument values.
	
Generally, the system does not use instances of Message for efficiency reasons. However, when a message is not understood by its receiver, the interpreter will make up an instance of me in order to capture the information involved in an actual message transmission. This instance is sent it as an argument with the message doesNotUnderstand: to the receiver.'.
true
%
set compile_env: 0
! ------------------- Class methods for Pragma
category: 'finding'
classmethod: Pragma
allNamed: aSymbol from: aSubClass to: aSuperClass
	"Answer a collection of all pragmas found in methods of all classes between aSubClass and aSuperClass (inclusive) whose keyword is aSymbol."
	
	^ Array streamContents: [ :stream |
		({aSubClass} , aSubClass allSuperClasses) do: [ :class |
			self withPragmasIn: class do:  [ :pragma |
				pragma keyword = aSymbol
					ifTrue: [ stream nextPut: pragma ] ].
			aSuperClass = class
				ifTrue: [ ^ stream contents ] ] ].
%
category: 'finding'
classmethod: Pragma
allNamed: aSymbol from: aSubClass to: aSuperClass sortedByArgument: anInteger
	"Answer a collection of all pragmas found in methods of all classes between aSubClass and aSuperClass (inclusive) whose keyword is aSymbol, sorted according to argument anInteger."

	^ self allNamed: aSymbol from: aSubClass to: aSuperClass sortedUsing: [ :a :b | (a argumentAt: anInteger) < (b argumentAt: anInteger) ].
%
category: 'finding'
classmethod: Pragma
allNamed: aSymbol from: aSubClass to: aSuperClass sortedUsing: aSortBlock
	"Answer a collection of all pragmas found in methods of all classes between aSubClass and aSuperClass (inclusive) whose keyword is aSymbol, sorted according to aSortBlock."
	
	^ (self allNamed: aSymbol from: aSubClass to: aSuperClass) sortWithBlock: aSortBlock.
%
category: 'finding'
classmethod: Pragma
allNamed: aSymbol in: aClass
	"Answer a collection of all pragmas found in methods of aClass whose keyword is aSymbol."
	
	^ Array streamContents: [ :stream |
		self withPragmasIn: aClass do: [ :pragma |
			pragma keyword = aSymbol
				ifTrue: [ stream nextPut: pragma ] ] ].
%
category: 'finding'
classmethod: Pragma
allNamed: aSymbol in: aClass sortedByArgument: anInteger
	"Answer a collection of all pragmas found in methods of aClass whose keyword is aSymbol, sorted according to argument anInteger."

	^ self allNamed: aSymbol in: aClass sortedUsing: [ :a :b | (a argumentAt: anInteger) < (b argumentAt: anInteger) ].
%
category: 'finding'
classmethod: Pragma
allNamed: aSymbol in: aClass sortedUsing: aSortBlock
	"Answer a collection of all pragmas found in methods of aClass whose keyword is aSymbol, sorted according to aSortBlock."
	
	^ (self allNamed: aSymbol in: aClass) sortWithBlock: aSortBlock.
%
category: 'private'
classmethod: Pragma
keyword: aSymbol arguments: anArray
	^ self new
		setKeyword: aSymbol;
		setArguments: anArray;
		yourself.
%
category: 'private'
classmethod: Pragma
withPragmasIn: aClass do: aBlock
	(aClass methodDictForEnv: 0) keysAndValuesDo: [ :selector :method | method pragmas do: aBlock ].
%
! ------------------- Instance methods for Pragma
category: 'accessing-pragma'
method: Pragma
argumentAt: anInteger
	"Answer one of the arguments of the pragma."
	
	^ self arguments at: anInteger.
%
category: 'accessing-pragma'
method: Pragma
arguments
	"Answer the arguments of the recieving pragma. For a pragma defined as <key1: val1 key2: val2> this will answer #(val1 val2)."
	
	^ arguments
%
category: 'testing'
method: Pragma
_refersToLiteral: aLiteral
  ^ self keyword == aLiteral or: [ self arguments _refersToLiteral: aLiteral ]
%
category: 'accessing-pragma'
method: Pragma
keyword
	"Answer the keyword of the recieving pragma. For a pragma defined as <key1: val1 key2: val2> this will answer #key1:key2."
	
	^ keyword
%
category: 'accessing-pragma'
method: Pragma
message
	"Answer the message of the receiving pragma."
	
	^ Message selector: self keyword arguments: self arguments. 
%
category: 'accessing-method'
method: Pragma
method
	"Answer the compiled-method containing the pragma."
	
	^ method
%
category: 'accessing-method'
method: Pragma
methodClass
	"Answer the class of the method containing the pragma."
	
	^self method inClass
%
category: 'accessing-pragma'
method: Pragma
numArgs
	"Answer the number of arguments in the pragma."

	^ self arguments size.
%
category: 'printing'
method: Pragma
printOn: aStream
	aStream nextPut: $<.
	self keyword precedence = 1
		ifTrue: [ aStream space; nextPutAll: self keyword ]
		ifFalse: [
			self keyword keywords with: self arguments do: [ :key :arg |
				aStream space; nextPutAll: key; space; print: arg ]].
	aStream space; nextPut: $>.
%
category: 'accessing-method'
method: Pragma
selector
	"Answer the selector of the method containing the pragma."
	
	^ method selector.
%
category: 'initialization'
method: Pragma
setArguments: anArray
	arguments := anArray
%
category: 'initialization'
method: Pragma
setKeyword: aSymbol
	keyword := aSymbol
%
category: 'initialization'
method: Pragma
setMethod: aCompiledMethod
	method := aCompiledMethod
%

! ------------------- Class methods for Message
category: 'instance creation'
classmethod: Message
selector: aSymbol
	"Answer an instance of me with unary selector, aSymbol."

	^self new setSelector: aSymbol arguments: (Array new: 0)
%
category: 'instance creation'
classmethod: Message
selector: aSymbol argument: anObject 
	"Answer an instance of me whose selector is aSymbol and single 
	argument is anObject."

	^self new setSelector: aSymbol arguments: (Array with: anObject)
%
category: 'instance creation'
classmethod: Message
selector: aSymbol arguments: anArray 
	"Answer an instance of me with selector, aSymbol, and arguments, 
	anArray."

	^self new setSelector: aSymbol arguments: anArray
%
! ------------------- Instance methods for Message
category: 'accessing'
method: Message
argument
	"Answer the first (presumably sole) argument"

	^args at: 1
%
category: 'accessing'
method: Message
argument: newValue
	"Change the first argument to newValue and answer self"

	args at: 1 put: newValue
%
category: 'accessing'
method: Message
arguments
	"Answer the arguments of the receiver."

	^args
%
category: 'testing'
method: Message
hasArguments
	^args size > 0
%
category: 'accessing'
method: Message
lookupClass

	^ lookupClass
%
category: 'private'
method: Message
lookupClass: aClass

	lookupClass := aClass
%
category: 'accessing'
method: Message
numArgs
	"Answer the number of arguments in this message"

	^args size
%
category: 'printing'
method: Message
printOn: stream
	|  argsSize count |
	args isEmpty ifTrue: [^ stream nextPutAll: selector].
	count := argsSize := args size.
	args with: selector keywords do: [:arg :word |
		stream nextPutAll: word.
		stream space.
		arg printOn: stream.
		count := count - 1.
		count > 0 ifTrue: [ stream space ].
	].
%
category: 'accessing'
method: Message
selector
	"Answer the selector of the receiver."

	^selector
%
category: 'accessing'
method: Message
sends: aSelector
	"answer whether this message's selector is aSelector"

	^selector == aSelector
%
category: 'sending'
method: Message
sendTo: receiver
	"answer the result of sending this message to receiver"

	^ receiver perform: selector withArguments: args
%
category: 'private'
method: Message
setSelector: aSymbol

	selector := aSymbol.
%
category: 'private'
method: Message
setSelector: aSymbol arguments: anArray

	selector := aSymbol.
	args := anArray
%
