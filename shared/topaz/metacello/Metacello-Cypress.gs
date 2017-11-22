! Package: Metacello-Cypress

! Class Declarations

doit
(MetacelloMCBaselineOfProjectSpec
	subclass: 'MetacelloCypressBaselineProjectSpec'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Cypress-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloMCBaselineProject
	subclass: 'MetacelloCypressBaselineProject'
	instVarNames: #(  )
	classVars: #( UseCypressPackagesForAllBaselines )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Cypress';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloPackageSpec
	subclass: 'MetacelloCypressPackageSpec'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Cypress-Specs';
		comment: '';
		immediateInvariant.
true.
%

! Class Implementation for MetacelloCypressBaselineProjectSpec

! ------------------- Instance methods for MetacelloCypressBaselineProjectSpec

category: 'scripting'
method: MetacelloCypressBaselineProjectSpec
asBaselineProjectSpec
  ^ self asCypressBaselineProjectSpec
%

category: 'scripting'
method: MetacelloCypressBaselineProjectSpec
asCypressBaselineProjectSpec
  ^ self
%

category: 'scripting'
method: MetacelloCypressBaselineProjectSpec
copyAsConformingProjectSpec: aMetacelloProject
  "Only needed when receiver is a MetacelloMCBaselineOfProjectSpec and aMetacelloProject is a MetacelloCypressBaselineProject"

  ^ self
%

! Class Implementation for MetacelloCypressBaselineProject

! ------------------- Class methods for MetacelloCypressBaselineProject

category: 'accessing'
classmethod: MetacelloCypressBaselineProject
singletonVersionName
    ^ 'baseline'
%

category: 'accessing'
classmethod: MetacelloCypressBaselineProject
useCypressPackagesForAllBaselines
  UseCypressPackagesForAllBaselines ifNil: [ ^ false ].
  ^ UseCypressPackagesForAllBaselines
%

category: 'accessing'
classmethod: MetacelloCypressBaselineProject
useCypressPackagesForAllBaselines: aBool
	"self useCypressPackagesForAllBaselines: true"

	UseCypressPackagesForAllBaselines := aBool
%

category: 'accessing'
classmethod: MetacelloCypressBaselineProject
versionConstructorClass
    ^ MetacelloBaselineConstructor
%

! ------------------- Instance methods for MetacelloCypressBaselineProject

category: 'scripting'
method: MetacelloCypressBaselineProject
asCypressBaselineProject
  ^ self
%

category: 'spec classes'
method: MetacelloCypressBaselineProject
baselineOfProjectSpecClass
    ^ MetacelloCypressBaselineProjectSpec
%

category: 'scripting'
method: MetacelloCypressBaselineProject
copyAsConformingBaselineOfProjectSpec: aMetacelloMCBaselineOfProjectSpec
  "convert the MetacelloMCBaselineOfProjectSpec into a MetacelloCypressBaselineProjectSpec"

  | aCypressProjectSpec |
  aCypressProjectSpec := MetacelloCypressBaselineProjectSpec for: self.
  ^ aMetacelloMCBaselineOfProjectSpec copyForScriptingInto: aCypressProjectSpec
%

category: 'spec classes'
method: MetacelloCypressBaselineProject
packageSpecClass
  ^ MetacelloCypressPackageSpec
%

! Class Implementation for MetacelloCypressPackageSpec

! ------------------- Instance methods for MetacelloCypressPackageSpec

category: 'querying'
method: MetacelloCypressPackageSpec
ancestors
  ^ nil
%

category: 'testing'
method: MetacelloCypressPackageSpec
compareCurrentVersion: anOperator targetVersionStatus: statusIgnored using: anMCLoader
  ^ false
%

category: 'fetching'
method: MetacelloCypressPackageSpec
searchCacheRepositoryForPackage: searchBlock
  "evaluate the <searchBlock> if you want to search for the package in a local package cache"

  "for Cypress packages the answer is NO!"

%

! Class Extensions

! Class Extension for MetacelloMCBaselineProject

! ------------------- Instance methods for MetacelloMCBaselineProject

category: '*metacello-cypress'
method: MetacelloMCBaselineProject
packageSpecClass
  "One could argue that Baselines should have done this from the very beginning ... the cost is that every package is fetched (from disk) and the snapshots for every package are created ... the advantage is that you will properly downgrade packages when switching git versions ... for now a class variable is sufficient"

  MetacelloCypressBaselineProject useCypressPackagesForAllBaselines
    ifTrue: [ ^ MetacelloCypressPackageSpec ].
  ^ super packageSpecClass
%

! Class Extension for MetacelloMCProject

! ------------------- Instance methods for MetacelloMCProject

category: '*metacello-cypress'
method: MetacelloMCProject
asCypressBaselineProject
  ^ MetacelloCypressBaselineProject new
%

! Class Extension for MetacelloMCProjectSpec

! ------------------- Instance methods for MetacelloMCProjectSpec

category: '*metacello-cypress'
method: MetacelloMCProjectSpec
asCypressBaselineProjectSpec
  ^ self
    copyForScriptingInto:
      (MetacelloCypressBaselineProjectSpec for: self project asCypressBaselineProject)
%

! Class initializers 

doit
true.
%



! End of Package: Metacello-Cypress


