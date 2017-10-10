category: 'dependency'
method: CypressClassDefinition
requirements
  "Answer list of global names required by this definition"

  self superclassName = 'nil'
    ifTrue: [ ^ #() ].
  ^ {(self superclassName)}
%
category: 'loading'
method: CypressClassDefinition
createOrReviseIndexableClass
	"To be resolved:
		- the question of an 'environment' in which to create the class.
		- the question of which SymbolDictionary in which to create the class.
	 These are perhaps the same question."

	| superClass |
	superClass := self resolveGlobalNamed: self superclassName.
	^(superClass
		indexableSubclass: self name
		instVarNames: (self instVarNames collect: [:each | each asSymbol])
		classVars: (self classVarNames collect: [:each | each asSymbol])
		classInstVars: (self classInstVarNames collect: [:each | each asSymbol])
		poolDictionaries: self poolDictionaryList
		inDictionary: (self symbolDictionaryForClassNamed: self name)
		options: #())
			category: category;
			comment: self comment
%

category: 'loading'
method: CypressClassDefinition
createOrReviseByteClass
	"To be resolved:
		- the question of an 'environment' in which to create the class.
		- the question of which SymbolDictionary in which to create the class.
	 These are perhaps the same question."

	| superClass |
	superClass := self resolveGlobalNamed: self superclassName.
	^(superClass
		byteSubclass: self name
		classVars: (self classVarNames collect: [:each | each asSymbol])
		classInstVars: (self classInstVarNames collect: [:each | each asSymbol])
		poolDictionaries: self poolDictionaryList
		inDictionary: (self symbolDictionaryForClassNamed: self name)
		options: #())
			category: category;
			comment: self comment
%

category: 'loading'
method: CypressClassDefinition
createOrReviseRegularClass
	"To be resolved:
		- the question of an 'environment' in which to create the class.
		- the question of which SymbolDictionary in which to create the class.
	 These are perhaps the same question."

	| superClass |
	superClass := self resolveGlobalNamed: self superclassName.
	^(superClass
		subclass: self name
		instVarNames: (self instVarNames collect: [:each | each asSymbol])
		classVars: (self classVarNames collect: [:each | each asSymbol])
		classInstVars: (self classInstVarNames collect: [:each | each asSymbol])
		poolDictionaries: self poolDictionaryList
		inDictionary: (self symbolDictionaryForClassNamed: self name)
		options: #())
			category: category;
			comment: self comment
%

category: 'loading'
method: CypressClassDefinition
poolDictionaryList

  ^ self poolDictionariesForNames: self poolDictionaryNames
%

category: 'loading'
method: CypressClassDefinition
poolDictionariesForNames: pdNames
  | ar existingDict symList sharedPool |
  ar := Array new.
  symList := System myUserProfile symbolList.
  pdNames
    do: [ :poolName | 
      existingDict := symList objectNamed: poolName.
      existingDict
        ifNil: [ 
          | pool |
          pool := SymbolDictionary new.
          pool name: poolName asSymbol.
          ar add: pool ]
        ifNotNil: [ 
          (existingDict isKindOf: SymbolDictionary)
            ifTrue: [ ar add: existingDict ]
            ifFalse: [ 
              sharedPool ifNil: [ sharedPool := symList objectNamed: #'SharedPool' ].
              ((existingDict isKindOf: Class)
                and: [ existingDict isSubclassOf: sharedPool ])
                ifTrue: [ 
                  | cvars pName |
                  ar add: (cvars := existingDict _createClassVarsDict).
                  pName := poolName asSymbol.	"only change dictionary name if needed , to avoid SecurityError"
                  cvars name ~~ pName
                    ifTrue: [ cvars name: pName ] ] ] ] ].
  ^ ar
%

