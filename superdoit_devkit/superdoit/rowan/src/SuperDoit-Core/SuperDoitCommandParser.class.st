Class {
	#name : 'SuperDoitCommandParser',
	#superclass : 'Object',
	#instVars : [
		'stream',
		'done',
		'doitResult',
		'usage',
		'specs',
		'superDoitExecutionClass',
		'instVarNames',
		'scriptArgs',
		'scriptPath',
		'systemDictionary',
		'optionSpecs'
	],
	#category : 'SuperDoit-Core'
}

{ #category : 'instance creation' }
SuperDoitCommandParser class >> processInputFile [
	"command line looks like the following:
		<path-to-topaz>/topaz <topaz arguments> -- <script-file-path> -- <script-args>
	"

	| args scriptArgStart argIndex scriptPath scriptFile scriptArgs scriptArgIndex |
	args := System commandLineArguments.
	scriptArgStart := args indexOf: '--'.
	argIndex := scriptArgStart + 1.	"arg after initial --"
	(scriptArgStart <= 0 or: [ argIndex > args size ])
		ifTrue: [ self error: 'input file is expected to be specified on the command line' ].
	scriptFile := args at: argIndex.
	scriptArgIndex := args indexOf: '--' startingAt: argIndex + 1.
	scriptArgs := scriptArgIndex = 0
		ifTrue: [ #() ]
		ifFalse: [ args copyFrom: scriptArgIndex + 1 to: args size ].
	 
	scriptPath := scriptFile asFileReference.
	^ self new 
		scriptPath: scriptPath;
		scriptArgs: scriptArgs;
		parseAndExecuteScriptFile: scriptPath;
		yourself
]

{ #category : 'commands' }
SuperDoitCommandParser >> doit: string [
	| instance |
	self superDoitExecutionClass
		compileMethod:
			'doit ^ ' , string printString
				,
					' evaluateInContext: self 
				symbolList: GsCurrentSession currentSession transientSymbolList '.
	instance := self superDoitExecutionClass new.
	instance scriptPath: self scriptPath.
	instance scriptArgs: self scriptArgs.
	instance usage: self usage.
	instance optionSpecs: self optionSpecs.
	instance processDynamicSections: self.
	instance displayResult: instance doit
]

{ #category : 'accessing' }
SuperDoitCommandParser >> done [
^ done ifNil: [ false ]
]

{ #category : 'accessing' }
SuperDoitCommandParser >> instVarNames [
	^ instVarNames ifNil: [ instVarNames := {} ]
]

{ #category : 'commands' }
SuperDoitCommandParser >> instVarNames: string [
	instVarNames := self instVarNames , (('#(' , string , ')') evaluate)
]

{ #category : 'commands' }
SuperDoitCommandParser >> method: string [
	self superDoitExecutionClass compileMethod: string
]

{ #category : 'commands' }
SuperDoitCommandParser >> method: string in: className [
	(Rowan globalNamed: className)
		ifNotNil: [ :class | class compileMethod: string ]
		ifNil: [ self error: 'No class ' , className printString , ' found' ]
]

{ #category : 'parsing' }
SuperDoitCommandParser >> nextChunk [
	| str line |
	str := String new.
	[ stream atEnd not ]
		whileTrue: [ 
			line := stream nextLine trimTrailingSeparators.
			(line notEmpty and: [ line first = $% ])
				ifTrue: [ ^ str ].
			str
				addAll: line;
				lf ].
	self error: 'ran off end of file!'
]

{ #category : 'commands' }
SuperDoitCommandParser >> options: string [
	| ivNames |
	ivNames := self instVarNames.
	optionSpecs := Dictionary new.
	string evaluate do: [:optionSpec |
		optionSpecs at: optionSpec longName put: optionSpec ].
	optionSpecs
		do: [ :option | 
			| longName |
			longName := option longName.
			self method: longName , '  ^ (self optionSpecs at: ' , longName printString , ') value'.
			self
				method:
					longName , ': optionValue (self optionSpecs at:' , longName printString
						, ') value: optionValue' ]
]

{ #category : 'accessing' }
SuperDoitCommandParser >> optionSpecs [
	^ optionSpecs
]

{ #category : 'execution' }
SuperDoitCommandParser >> parseAndExecuteScriptFile: scriptFileReference [
	scriptFileReference
		readStreamDo: [ :fStream | 
			stream := ZnBufferedReadStream on: fStream.
			[ self done ] whileFalse: [ self processNextCommand ].
			^ doitResult ]
]

{ #category : 'parsing' }
SuperDoitCommandParser >> processNextCommand [
	| line words command firstChar commandSelector |
	stream atEnd
		ifTrue: [ 
			done := true.
			^ self ].
	line := stream nextLine trimSeparators.
	words := line subStrings.
	words isEmpty
		ifTrue: [ ^ nil ].
	command := words first asUppercase.
	((firstChar := command at: 1) == $! or: [ firstChar == $# ])
		ifTrue: [ ^ nil ].

	command = 'DOIT'
		ifTrue: [ ^ self doit: self nextChunk ].
	command = 'METHOD'
		ifTrue: [ ^ self method: self nextChunk ].
	command = 'METHOD:'
		ifTrue: [ ^ self method: self nextChunk in: (words at: 2) ].
	command = 'OPTIONS'
		ifTrue: [ ^ self options: self nextChunk ].
	command = 'INSTVARS'
		ifTrue: [ ^ self instVarNames: self nextChunk ].
	command = 'SPECS'
		ifTrue: [ ^ self specSton: self nextChunk ].
	command = 'SPECURLS'
		ifTrue: [ ^ self specUrls: self nextChunk ].
	command = 'USAGE'
		ifTrue: [ ^ self usage: self nextChunk ].
	commandSelector := (command asLowercase , ':') asSymbol.
	(self respondsTo: commandSelector)
		ifTrue: [ ^ self perform: commandSelector with: self nextChunk ].
	self error: 'Unknown command ' , command printString
]

{ #category : 'accessing' }
SuperDoitCommandParser >> scriptArgs [
^ scriptArgs ifNil: [ #() ]
]

{ #category : 'accessing' }
SuperDoitCommandParser >> scriptArgs: aColl [
 scriptArgs := aColl
]

{ #category : 'accessing' }
SuperDoitCommandParser >> scriptPath [
	^ scriptPath
]

{ #category : 'accessing' }
SuperDoitCommandParser >> scriptPath: aFileReference [
	scriptPath := aFileReference
]

{ #category : 'accessing' }
SuperDoitCommandParser >> specs [
	^ specs ifNil: [ specs := {} ]
]

{ #category : 'commands' }
SuperDoitCommandParser >> specSton: string [
	| stonStream |
	stonStream := string readStreamPortable.
	[ stonStream atEnd ]
		whileFalse: [ 
			| obj |
			obj := STON fromStream: stonStream.
			obj _isArray
				ifTrue: [ self specs addAll: obj ]
				ifFalse: [ self specs add: obj ] ]
]

{ #category : 'commands' }
SuperDoitCommandParser >> specUrls: string [
	| urlStream |
	urlStream := string readStreamPortable.
	[ urlStream atEnd ]
		whileFalse: [ 
			| url spec |
			url := urlStream nextLine.
			spec := RwSpecification fromUrl: url.
			self specs add: spec ]
]

{ #category : 'accessing' }
SuperDoitCommandParser >> superDoitExecutionClass [
	^ superDoitExecutionClass
		ifNil: [ 
			superDoitExecutionClass := SuperDoitExecution
				subclass: 'SuperDoitExecutionClass'
				instVarNames: self instVarNames
				classVars: #()
				classInstVars: #()
				poolDictionaries: #()
				inDictionary: self systemDictionary ]
]

{ #category : 'accessing' }
SuperDoitCommandParser >> systemDictionary [
	"install the script class in a symbol dictionary in the transient symbol list ... 
		we do not want the class persisted"

	^ systemDictionary
		ifNil: [ 
			| sess symbolList name |
			sess := GsCurrentSession currentSession.
			sess _transientSymbolList ifNil: [ System refreshTransientSymbolList ].
			symbolList := sess transientSymbolList.
			name := #'superDoitSymbolDict'.
			^ systemDictionary := (symbolList resolveSymbol: name)
				ifNil: [ 
					systemDictionary := SymbolDictionary new name: name.
					symbolList insertObject: systemDictionary at: 1 ] ]
]

{ #category : 'accessing' }
SuperDoitCommandParser >> usage [
	^ usage ifNil: [ ^ 'NO HELP' ]
]

{ #category : 'commands' }
SuperDoitCommandParser >> usage: string [
	"any env var refs in string should be substituted upon display"
	usage := string
]
