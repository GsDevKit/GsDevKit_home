! Package: Metacello-Core

! Class Declarations

doit
(Array
	subclass: 'MetacelloMethodSectionPath'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Constructors';
		comment: '';
		immediateInvariant.
true.
%

doit
(ConfigurationOf
	subclass: 'MetacelloBaseConfiguration'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Deprecated';
		comment: 'You should be using ConfigurationOf instead of MetacelloBaseConfiguration. 

The class is being kept around because many extant Metacello configurations use MetacelloBaseConfiguration as a sentinel class to indicate whether or not Metacello is loaded..

Once the Metacello scripting API becomes prevalent (the api has it''s own ensureMetacello logic) this class can be removed.';
		immediateInvariant.
true.
%

doit
(Error
	subclass: 'MetacelloCannotUpdateReleasedVersionError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Errors';
		comment: '';
		immediateInvariant.
true.
%

doit
(Error
	subclass: 'MetacelloNameNotDefinedError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Errors';
		comment: '';
		immediateInvariant.
true.
%

doit
(Error
	subclass: 'MetacelloPackageSpecResolutionError'
	instVarNames: #( packageSpec repositories repositoryError )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Errors';
		comment: '';
		immediateInvariant.
true.
%

doit
(Error
	subclass: 'MetacelloProjectSpecLoadError'
	instVarNames: #( projectSpec versionDoesNotExistException )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Errors';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloProjectSpecLoadError
	subclass: 'MetacelloProjectSpecLoadConflict'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Errors';
		comment: '';
		immediateInvariant.
true.
%

doit
(Error
	subclass: 'MetacelloScriptingError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloScriptingError
	subclass: 'MetacelloConflictingProjectError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloScriptingError
	subclass: 'MetacelloUseUpgradeError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(Error
	subclass: 'MetacelloValidationFailure'
	instVarNames: #( issues )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Errors';
		comment: '';
		immediateInvariant.
true.
%

doit
(Error
	subclass: 'MetacelloVersionDoesNotExistError'
	instVarNames: #( project versionString )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Errors';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloVersionDoesNotExistError
	subclass: 'MetacelloSymbolicVersionDoesNotExistError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Errors';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloSymbolicVersionDoesNotExistError
	subclass: 'MetacelloSymbolicVersionNotDefinedError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Errors';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloVersionDoesNotExistError
	subclass: 'MetacelloVersionDefinitionError'
	instVarNames: #( exception )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Errors';
		comment: '';
		immediateInvariant.
true.
%

doit
(Magnitude
	subclass: 'MetacelloSemanticVersionNumber'
	instVarNames: #( normalVersion preReleaseVersion buildVersion )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Model';
		comment: 'MetacelloSemanticVersionNumber conforms to version 2.0.0-rc.1 of  [Semantic Versioning 2.0.0-rc.1](http://semver.org/)

The most important thing that you need to know is that: 
**A normal version number MUST take the form X.Y.Z where X, Y, and Z are non-negative integers.**

**Semantic Versioning Specification** extracted from [Semantic versioning 2.0.0-rc.1](https://github.com/mojombo/semver/blob/3c7f2e8df747ea0ca15208fdfc90e3275240184f/semver.md):

Semantic Versioning Specification (SemVer)
------------------------------------------

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be
interpreted as described in RFC 2119.

1. Software using Semantic Versioning MUST declare a public API. This API
could be declared in the code itself or exist strictly in documentation.
However it is done, it should be precise and comprehensive.

1. A normal version number MUST take the form X.Y.Z where X, Y, and Z are
non-negative integers. X is the major version, Y is the minor version, and Z
is the patch version. Each element MUST increase numerically by increments of
one. For instance: 1.9.0 -> 1.10.0 -> 1.11.0.

1. Once a versioned package has been released, the contents of that version
MUST NOT be modified. Any modifications must be released as a new version.

1. Major version zero (0.y.z) is for initial development. Anything may change
at any time. The public API should not be considered stable.

1. Version 1.0.0 defines the public API. The way in which the version number
is incremented after this release is dependent on this public API and how it
changes.

1. Patch version Z (x.y.Z | x > 0) MUST be incremented if only backwards
compatible bug fixes are introduced. A bug fix is defined as an internal
change that fixes incorrect behavior.

1. Minor version Y (x.Y.z | x > 0) MUST be incremented if new, backwards
compatible functionality is introduced to the public API. It MUST be
incremented if any public API functionality is marked as deprecated. It MAY be
incremented if substantial new functionality or improvements are introduced
within the private code. It MAY include patch level changes. Patch version
MUST be reset to 0 when minor version is incremented.

1. Major version X (X.y.z | X > 0) MUST be incremented if any backwards
incompatible changes are introduced to the public API. It MAY include minor
and patch level changes. Patch and minor version MUST be reset to 0 when major
version is incremented.

1. A pre-release version MAY be denoted by appending a hyphen and a series of
dot separated identifiers immediately following the patch version. Identifiers
MUST be comprised of only ASCII alphanumerics and dash [0-9A-Za-z-].
Pre-release versions satisfy but have a lower precedence than the associated
normal version. Examples: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7,
1.0.0-x.7.z.92.

1. A build version MAY be denoted by appending a plus sign and a series of dot
separated identifiers immediately following the patch version or pre-release
version. Identifiers MUST be comprised of only ASCII alphanumerics and dash
[0-9A-Za-z-]. Build versions satisfy and have a higher precedence than the
associated normal version. Examples: 1.0.0+build.1, 1.3.7+build.11.e0f985a.

1. Precedence MUST be calculated by separating the version into major, minor,
patch, pre-release, and build identifiers in that order. Major, minor, and
patch versions are always compared numerically. Pre-release and build version
precedence MUST be determined by comparing each dot separated identifier as
follows: identifiers consisting of only digits are compared numerically and
identifiers with letters or dashes are compared lexically in ASCII sort order.
Numeric identifiers always have lower precedence than non-numeric identifiers.
Example: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-beta.2 < 1.0.0-beta.11 <
1.0.0-rc.1 < 1.0.0-rc.1+build.1 < 1.0.0 < 1.0.0+0.3.7 < 1.3.7+build <
1.3.7+build.2.b8f12d7 < 1.3.7+build.11.e0f985a.

About
-----

The Semantic Versioning specification is authored by [Tom
Preston-Werner](http://tom.preston-werner.com), inventor of Gravatars and
cofounder of GitHub.

If you''d like to leave feedback, please [open an issue on
GitHub](https://github.com/mojombo/semver/issues).


License
-------

Creative Commons - CC BY 3.0
http://creativecommons.org/licenses/by/3.0/
';
		immediateInvariant.
true.
%

doit
(Magnitude
	subclass: 'MetacelloVersion'
	instVarNames: #( spec versionNumber importedVersions versionStatus )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Model';
		comment: '';
		immediateInvariant.
true.
%

doit
(Magnitude
	indexableSubclass: 'MetacelloVersionNumber'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Model';
		comment: '# Metacello version format

Thanks to [Mozilla Toolkit version format](https://developer.mozilla.org/en/Toolkit_version_format) for inspiration.

##Version Format
A version string consists of one or more version parts, separated with dots or dashes.

A version part with a leading dot is numeric. A version part with a leading dash is string.

The rationale behind splitting a version part into a sequence of strings and numbers is that when comparing version parts, the numeric parts are compared as numbers, e.g. ''1.0-pre.1'' < ''1.0-pre.10'', while the strings are compared bytewise. See the next section for details on how versions are compared.

##Comparing versions

When two version strings are compared, their version parts are compared left to right. Empty parts are ignored.

If at some point a version part of one version string is greater than the corresponding version part of another version string, then the first version string is greater than the other one.

If a version string has extra parts and the common parts are equal, the shorter version string is less than the longer version string (1.0 is less than 1.0.0).

Otherwise, the version strings are equal. 

##Comparing version parts

Version parts are also compared left to right, A string-part that exists is always less-then a nonexisting string-part (1.6-a is less than 1.6).

Examples

```
1 == 1. < 1.0 == 1..--0
< 1.1-a < 1.1-aa < 1.1-ab < 1.1-b < 1.1-c
< 1.1-pre < 1.1-pre.0 
< 1.1-pre.1-a < 1.1-pre.1-aa < 1.1-pre.1-b < 1.1-pre.1
< 1.1-pre.2
< 1.1-pre.10
< 1.1 < 1.1.0 < 1.1.00
< 1.10
< 2.0
```';
		immediateInvariant.
true.
%

doit
(Notification
	subclass: 'MetacelloCleanNotification'
	instVarNames: #( version )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Notifications';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloCleanNotification
	subclass: 'MetacelloCleanLoadAndTestsNotification'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Notifications';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloCleanNotification
	subclass: 'MetacelloCleanLoadNotification'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Notifications';
		comment: '';
		immediateInvariant.
true.
%

doit
(Notification
	subclass: 'MetacelloClearStackCacheNotification'
	instVarNames: #( cacheNames )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Notifications';
		comment: '';
		immediateInvariant.
true.
%

doit
(Notification
	subclass: 'MetacelloErrorInProjectConstructionNotification'
	instVarNames: #( versionString exception )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Notifications';
		comment: '';
		immediateInvariant.
true.
%

doit
(Notification
	subclass: 'MetacelloIgnorePackageLoaded'
	instVarNames: #( packageSpec )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Notifications';
		comment: '';
		immediateInvariant.
true.
%

doit
(Notification
	subclass: 'MetacelloScriptGitBasedDownloadNotification'
	instVarNames: #( projectPath versionString )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(Notification
	subclass: 'MetacelloScriptNotification'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloScriptNotification
	subclass: 'MetacelloResolveProjectUpgrade'
	instVarNames: #( existingProjectRegistration newProjectRegistration )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloResolveProjectUpgrade
	subclass: 'MetacelloAllowConflictingProjectUpgrade'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloResolveProjectUpgrade
	subclass: 'MetacelloAllowLockedProjectChange'
	instVarNames: #( operationString )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloResolveProjectUpgrade
	subclass: 'MetacelloAllowProjectDowngrade'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloResolveProjectUpgrade
	subclass: 'MetacelloAllowProjectUpgrade'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloScriptNotification
	subclass: 'MetacelloScriptEnsureProjectLoadedForDevelopment'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloScriptNotification
	subclass: 'MetacelloScriptProjectSpecNotification'
	instVarNames: #( projectSpec )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloScriptProjectSpecNotification
	subclass: 'MetacelloLookupBaselineSpecForEnsureLoad'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloScriptProjectSpecNotification
	subclass: 'MetacelloLookupProjectSpec'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '**MetacelloLookupProjectSpec** is signalled to allow a handler to substitute a different (equivalent) project spec for fetching or loading purposes';
		immediateInvariant.
true.
%

doit
(MetacelloScriptProjectSpecNotification
	subclass: 'MetacelloLookupProjectSpecForLoad'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '**MetacelloLookupProjectSpecForLoad** ends up returning an instance of **MetacelloProjectSpecForLoad**';
		immediateInvariant.
true.
%

doit
(MetacelloScriptProjectSpecNotification
	subclass: 'MetacelloProjectSpecLoadedNotification'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '**MetacelloLoadProjectSpecVersionNotification** is signalled to indicate that the given project spec was loaded into the image.';
		immediateInvariant.
true.
%

doit
(Notification
	subclass: 'MetacelloSkipDirtyPackageLoad'
	instVarNames: #( packageSpec )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Notifications';
		comment: '';
		immediateInvariant.
true.
%

doit
(Notification
	subclass: 'MetacelloStackCacheNotification'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Notifications';
		comment: '';
		immediateInvariant.
true.
%

doit
(Notification
	subclass: 'MetacelloValidationNotification'
	instVarNames: #( issue )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Exceptions-Notifications';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloAbstractConstructor'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Constructors';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloAbstractConstructor
	subclass: 'MetacelloAbstractVersionConstructor'
	instVarNames: #( root configuration project attributeMap attributeOrder symbolicVersion currentContext )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Constructors';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloAbstractVersionConstructor
	subclass: 'MetacelloBaselineConstructor'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Constructors';
		comment: '##MetacelloBaselineConstructor

**MetacelloBaselineConstructor** extracts the #baseline pragma from a **BaselineOfConfiguration** and produces a **MetacelloVersion**:.

```Smalltalk
MetacelloBaselineConstructor on: BaselineOfExample
```
';
		immediateInvariant.
true.
%

doit
(MetacelloAbstractVersionConstructor
	subclass: 'MetacelloToolBoxConstructor'
	instVarNames: #( currentSection methodSections )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Constructors';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloToolBoxConstructor
	subclass: 'MetacelloToolBoxBaselineConstructor'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Constructors';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloAbstractVersionConstructor
	subclass: 'MetacelloVersionConstructor'
	instVarNames: #( errorMap )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Constructors';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloAbstractConstructor
	subclass: 'MetacelloVersionValidator'
	instVarNames: #( configurationClass exludededValidations validationReport recurse debug visited )
	classVars: #(  )
	classInstVars: #( reasonCodeDescriptions )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Validation';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloMethodSection'
	instVarNames: #( attributes )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Constructors';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloMethodSection
	subclass: 'MetacelloSymbolicVersionSpec'
	instVarNames: #( versionString )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Constructors';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloMethodSection
	subclass: 'MetacelloVersionMethodSection'
	instVarNames: #( block versionSpec parent methodSections )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Constructors';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloMethodSpec'
	instVarNames: #( project selector category versionString methodSections )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Constructors';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloMethodSpec
	subclass: 'MetacelloSymbolicVersionMethodSpec'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Constructors';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloMethodSpec
	subclass: 'MetacelloVersionMethodSpec'
	instVarNames: #( imports )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Constructors';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloVersionMethodSpec
	subclass: 'MetacelloBaselineOfMethodSpec'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Constructors';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloPlatform'
	instVarNames: #( bypassProgressBars bypassGoferLoadUpdateCategories )
	classVars: #( Current PlatformClassAssociation )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Model';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloProject'
	instVarNames: #( versionMap symbolicVersionMap errorMap loader loaderClass loadType configuration projectAttributes versionNumberClass )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Model';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloProjectRegistration'
	instVarNames: #( projectName configurationProjectSpec baselineProjectSpec loadedInImage locked mutable versionInfo )
	classVars: #( Registry )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloProjectRegistrationVersionInfo'
	instVarNames: #( versionString projectVersion )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloProjectRegistry'
	instVarNames: #( baselineRegistry configurationRegistry )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloProjectSpecForLoad'
	instVarNames: #( projectSpec useDetermineVersionForLoad overrideProjectSpec )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloProjectSpecGenerator'
	instVarNames: #( target )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloProjectSpecGenerator
	subclass: 'MetacelloBaselineSpecGenerator'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloProjectSpecGenerator
	subclass: 'MetacelloConfigurationSpecGenerator'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloScriptEngine'
	instVarNames: #( root projectSpec options )
	classVars: #( DefaultRepositoryDescription DefaultVersionString )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: 'MetacelloScriptEngine runs the execution of the script for one projectSpec';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloScriptExecutor'
	instVarNames: #( options roots singleRoot projectSpecGenerator actionArg configurationArg baselineArg projectArg classNameArg versionArg repositoryArg )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: 'MetacelloScriptExecutor decodes script args and launches MetacelloScriptEngine to run for each projectSpec encounters...i,e., primarily here to handl array and block args to configuration:, baseline: or project:.';
		immediateInvariant.
true.
%

doit
(MetacelloScriptExecutor
	subclass: 'MetacelloScriptApiExecutor'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: 'MetacelloScriptExecutor decodes script args and launches MetacelloScriptEngine to run for each projectSpec encounters...i,e., primarily here to handl array and block args to configuration:, baseline: or project:.';
		immediateInvariant.
true.
%

doit
(MetacelloScriptExecutor
	subclass: 'MetacelloScriptImageExecutor'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloScriptExecutor
	subclass: 'MetacelloScriptRegistryExecutor'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Scripts';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloSpec'
	instVarNames: #( project loader mutable )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloSpec
	subclass: 'MetacelloAbstractPackageSpec'
	instVarNames: #( name requires includes answers )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloAbstractPackageSpec
	subclass: 'MetacelloGroupSpec'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloAbstractPackageSpec
	subclass: 'MetacelloProjectReferenceSpec'
	instVarNames: #( projectReference )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloSpec
	subclass: 'MetacelloMemberListSpec'
	instVarNames: #( list memberMap )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Members';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloMemberListSpec
	subclass: 'MetacelloPackagesSpec'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloSpec
	subclass: 'MetacelloMemberSpec'
	instVarNames: #( name spec )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Members';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloMemberSpec
	subclass: 'MetacelloAddMemberSpec'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Members';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloMemberSpec
	subclass: 'MetacelloCopyMemberSpec'
	instVarNames: #( sourceName )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Members';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloMemberSpec
	subclass: 'MetacelloMergeMemberSpec'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Members';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloMemberSpec
	subclass: 'MetacelloRemoveMemberSpec'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Members';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloSpec
	subclass: 'MetacelloProjectSpec'
	instVarNames: #( name className versionString operator loads preLoadDoIt postLoadDoIt )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloProjectSpec
	subclass: 'MetacelloGenericProjectSpec'
	instVarNames: #( projectPackage repositories )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloSpec
	subclass: 'MetacelloValueHolderSpec'
	instVarNames: #( value )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloSpec
	subclass: 'MetacelloVersionSpec'
	instVarNames: #( versionString blessing description author timestamp preLoadDoIt postLoadDoIt packageList importName importArray )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloSpecLoader'
	instVarNames: #( spec )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Loaders';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloValidationIssue'
	instVarNames: #( configurationClass explanation reasonCode callSite )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Validation';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloValidationIssue
	subclass: 'MetacelloValidationCriticalWarning'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Validation';
		comment: 'MetacelloValidationCriticalWarning indicates that there is a logical inconsistency that may not be intentional and that could cause incorrect loads';
		immediateInvariant.
true.
%

doit
(MetacelloValidationIssue
	subclass: 'MetacelloValidationError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Validation';
		comment: 'MetacelloValidationError indicates that errors are to be expected if an attempt to use the configuration/version is made';
		immediateInvariant.
true.
%

doit
(MetacelloValidationIssue
	subclass: 'MetacelloValidationWarning'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Validation';
		comment: 'MetacelloValidationWarning indicates that there is a logical inconsistency that is not likely to cause any functional problems';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloVersionDiffReport'
	instVarNames: #( additions configuration modifications removals from to )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Model';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloVisitedPackages'
	instVarNames: #( groups packages projects )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-Core-Specs';
		comment: '';
		immediateInvariant.
true.
%

! patch env 2 superclasses
run
MetacelloScriptApiExecutor superclassForEnv: 2 put: MetacelloScriptExecutor.
MetacelloScriptImageExecutor superclassForEnv: 2 put: MetacelloScriptExecutor.
MetacelloScriptRegistryExecutor superclassForEnv: 2 put: MetacelloScriptExecutor.
%

set compile_env: 2

! Class Implementation for MetacelloMethodSectionPath

! ------------------- Instance methods for MetacelloMethodSectionPath

category: 'conversion'
method: MetacelloMethodSectionPath
asAttributeOrPath
    self size = 1
        ifTrue: [ 
            | attribute |
            attribute := self at: 1.
            ^ attribute size = 1
                ifTrue: [ attribute at: 1 ]
                ifFalse: [ attribute ] ].
    ^ self
%

category: 'conversion'
method: MetacelloMethodSectionPath
asMetacelloAttributePath
    ^ self
%

! Class Implementation for MetacelloBaseConfiguration

! Class Implementation for MetacelloCannotUpdateReleasedVersionError

! ------------------- Instance methods for MetacelloCannotUpdateReleasedVersionError

category: 'private'
method: MetacelloCannotUpdateReleasedVersionError
isResumable
	"Determine whether an exception is resumable."

	^ true
%

! Class Implementation for MetacelloNameNotDefinedError

! ------------------- Instance methods for MetacelloNameNotDefinedError

category: 'Accessing'
method: MetacelloNameNotDefinedError
isResumable
  "Pharo and Squeak compatibility"

  ^ true
%

! Class Implementation for MetacelloPackageSpecResolutionError

! ------------------- Instance methods for MetacelloPackageSpecResolutionError

category: 'accessing'
method: MetacelloPackageSpecResolutionError
description
    "Return a textual description of the exception."

    ^ 'Could not resolve: ' , packageSpec name , ' [' , packageSpec file , ']' , ' in' , self repositoryString
        ,
            (repositoryError == nil
                ifTrue: [ '' ]
                ifFalse: [ 
                    "report repository error to user here, since failure here is likely to be due to earlier repository error"
                    ' ERROR: ' , repositoryError description printString ])
%

category: 'accessing'
method: MetacelloPackageSpecResolutionError
packageSpec
	^ packageSpec
%

category: 'accessing'
method: MetacelloPackageSpecResolutionError
packageSpec: anObject
	packageSpec := anObject
%

category: 'accessing'
method: MetacelloPackageSpecResolutionError
repositories
	^ repositories
%

category: 'accessing'
method: MetacelloPackageSpecResolutionError
repositories: anObject
	repositories := anObject
%

category: 'accessing'
method: MetacelloPackageSpecResolutionError
repositoryError
	^ repositoryError
%

category: 'accessing'
method: MetacelloPackageSpecResolutionError
repositoryError: anObject
	repositoryError := anObject
%

category: 'private'
method: MetacelloPackageSpecResolutionError
repositoryString
    | repositoryString |
    repositoryString := ''.
    self repositories do: [ :repo | repositoryString := repositoryString , ' ' , repo description ].
    ^ repositoryString
%

category: 'Signaling'
method: MetacelloPackageSpecResolutionError
signal
  "GemStone needs this to print exception correctly"

  self messageText: self description.
  ^ super signal
%

! Class Implementation for MetacelloProjectSpecLoadError

! ------------------- Class methods for MetacelloProjectSpecLoadError

category: 'instance creation'
classmethod: MetacelloProjectSpecLoadError
projectSpec: aMetacelloMCProjectSpec

	^self new
		projectSpec: aMetacelloMCProjectSpec;
		yourself
%

! ------------------- Instance methods for MetacelloProjectSpecLoadError

category: 'private'
method: MetacelloProjectSpecLoadError
isResumable
	"Determine whether an exception is resumable."

	^ false
%

category: 'accessing'
method: MetacelloProjectSpecLoadError
possibleVersions
    ^ self versionDoesNotExistException possibleVersions
%

category: 'accessing'
method: MetacelloProjectSpecLoadError
projectSpec

	^projectSpec
%

category: 'accessing'
method: MetacelloProjectSpecLoadError
projectSpec: aMetacelloMCProjectSpec

	projectSpec := aMetacelloMCProjectSpec
%

category: 'accessing'
method: MetacelloProjectSpecLoadError
versionDoesNotExistException
	^ versionDoesNotExistException
%

category: 'accessing'
method: MetacelloProjectSpecLoadError
versionDoesNotExistException: anObject
	versionDoesNotExistException := anObject
%

category: 'accessing'
method: MetacelloProjectSpecLoadError
versionString
    ^ self versionDoesNotExistException versionString
%

! Class Implementation for MetacelloProjectSpecLoadConflict

! ------------------- Instance methods for MetacelloProjectSpecLoadConflict

category: 'private'
method: MetacelloProjectSpecLoadConflict
isResumable
	"Determine whether an exception is resumable."

	^ true
%

category: 'accessing'
method: MetacelloProjectSpecLoadConflict
possibleVersions
    "not applicable to a Conflict error"

    self shouldNotImplement
%

category: 'accessing'
method: MetacelloProjectSpecLoadConflict
versionString
    "not applicable to a Conflict error"

    self shouldNotImplement
%

! Class Implementation for MetacelloScriptingError

! Class Implementation for MetacelloConflictingProjectError

! Class Implementation for MetacelloUseUpgradeError

! Class Implementation for MetacelloValidationFailure

! ------------------- Class methods for MetacelloValidationFailure

category: 'instance creation'
classmethod: MetacelloValidationFailure
issues: anObject message: aString
    ^ self new
        issues: anObject;
        signal: aString
%

! ------------------- Instance methods for MetacelloValidationFailure

category: 'accessing'
method: MetacelloValidationFailure
issues
	^ issues
%

category: 'accessing'
method: MetacelloValidationFailure
issues: anObject
	issues := anObject
%

! Class Implementation for MetacelloVersionDoesNotExistError

! ------------------- Class methods for MetacelloVersionDoesNotExistError

category: 'instance creation'
classmethod: MetacelloVersionDoesNotExistError
project: aMetacelloProject versionString: aVersionString

	^(self new)
		project: aMetacelloProject;
		versionString: aVersionString;
		yourself
%

! ------------------- Instance methods for MetacelloVersionDoesNotExistError

category: 'printing'
method: MetacelloVersionDoesNotExistError
description
    "Return a textual description of the exception."

    ^ 'Version ' , self versionString printString , ' is not defined in ' , self project label
        , '. Possible versions include: ' , self possibleVersions printString
%

category: 'accessing'
method: MetacelloVersionDoesNotExistError
possibleVersions
    ^ self project symbolicVersionSymbols , (self project versions collect: [ :each | each versionString ])
%

category: 'accessing'
method: MetacelloVersionDoesNotExistError
project
	^ project
%

category: 'accessing'
method: MetacelloVersionDoesNotExistError
project: anObject
	project := anObject
%

category: 'Signaling'
method: MetacelloVersionDoesNotExistError
signal
  "GemStone needs this to print exception correctly"

  self messageText: self description.
  ^ super signal
%

category: 'accessing'
method: MetacelloVersionDoesNotExistError
versionString
	^ versionString
%

category: 'accessing'
method: MetacelloVersionDoesNotExistError
versionString: anObject
	versionString := anObject
%

! Class Implementation for MetacelloSymbolicVersionDoesNotExistError

! ------------------- Instance methods for MetacelloSymbolicVersionDoesNotExistError

category: 'printing'
method: MetacelloSymbolicVersionDoesNotExistError
description
    "Return a textual description of the exception."

    ^ 'The symbolic version ' , self versionString printString , ' is not defined in ' , self project label
        , ' for the current platform. Possible symbolic version values include: ' , self possibleVersions printString
%

category: 'accessing'
method: MetacelloSymbolicVersionDoesNotExistError
possibleVersions
    ^ self project symbolicVersionSymbols
%

! Class Implementation for MetacelloSymbolicVersionNotDefinedError

! ------------------- Instance methods for MetacelloSymbolicVersionNotDefinedError

category: 'printing'
method: MetacelloSymbolicVersionNotDefinedError
description
    "Return a textual description of the exception."

    ^ 'The symbolic version ' , self versionString printString , ' is EXPLICITLY not defined in ' , self project label
        , ' for the current platform (i.e., symbolic version defined as #notDefined).'
%

! Class Implementation for MetacelloVersionDefinitionError

! ------------------- Instance methods for MetacelloVersionDefinitionError

category: 'printing'
method: MetacelloVersionDefinitionError
description
    "Return a textual description of the exception."

    ^ 'The version ' , self versionString printString , ' is not defined in ' , self project label
        , ' for the current platform, because an exception occurred while creating the version:. '
        , self exception description , '. Evaluate the following to see the error: ''['
        , self project configuration class name asString
        ,
            ' project ] 
	on: MetacelloErrorInProjectConstructionNotification 
	do: [:ex | ex resume: true ].'''
        ,
            '
Possible versions include: ' , self possibleVersions printString
%

category: 'accessing'
method: MetacelloVersionDefinitionError
exception
	^ exception
%

category: 'accessing'
method: MetacelloVersionDefinitionError
exception: anObject
	exception := anObject
%

! Class Implementation for MetacelloSemanticVersionNumber

! ------------------- Class methods for MetacelloSemanticVersionNumber

category: 'private'
classmethod: MetacelloSemanticVersionNumber
extractNumericComponent: subString forPattern: forPattern
    "$. separated components are integers"

    | number |
    forPattern
        ifTrue: [ ^ subString ].
    number := [ subString asNumber ]
        on: Error
        do: [ :ex | ex return: subString ].
    ^ number asString = subString
        ifTrue: [ number ]
        ifFalse: [ subString ]
%

category: 'instance creation'
classmethod: MetacelloSemanticVersionNumber
fromString: aString
  | svn |
  svn := self fromString: aString forPattern: false.
  self validateVersionNumber: svn against: aString.
  ^ svn
%

category: 'instance creation'
classmethod: MetacelloSemanticVersionNumber
fromString: aString forPattern: forPattern
  | preRelease build versionString identifierCount normalEnd preReleaseEnd normalComponents preReleaseComponents buildComponents |
  normalComponents := OrderedCollection new.
  preReleaseComponents := OrderedCollection new.
  buildComponents := OrderedCollection new.
  preRelease := aString indexOf: $- startingAt: 1.
  build := aString indexOf: $+ startingAt: 1.
  (build > 0 and: [ preRelease > build ])
    ifTrue: [ preRelease := 0 ].
  normalEnd := preRelease = 0
    ifTrue: [ 
      build = 0
        ifTrue: [ aString size ]
        ifFalse: [ build - 1 ] ]
    ifFalse: [ preRelease - 1 ].
  versionString := aString copyFrom: 1 to: normalEnd.
  identifierCount := 0.
  (MetacelloPlatform current findTokens: '.' in: versionString)
    do: [ :subString | 
      | integer |
      forPattern
        ifTrue: [ integer := subString ]
        ifFalse: [ 
          integer := self integerFromString: subString.
          integer < 0
            ifTrue: [ 
              self
                error:
                  'invalid version number: normal version component must be integer '
                    , subString printString ] ].
      normalComponents add: integer.
      identifierCount := identifierCount + 1 ].
  (forPattern not and: [ identifierCount ~= 3 ])
    ifTrue: [ self error: 'invalid version number: normal version must have only 3 components' ].
  preReleaseEnd := build = 0
    ifTrue: [ aString size ]
    ifFalse: [ build - 1 ].
  preRelease > 0
    ifTrue: [ 
      versionString := aString copyFrom: preRelease + 1 to: preReleaseEnd.
      (MetacelloPlatform current findTokens: '.' in: versionString)
        do: [ :subString | 
          (forPattern or: [ self isSemanticIdentifier: subString ])
            ifFalse: [ 
              self
                error:
                  'invalid version number: preRelease version component must be one of [0-9A-Za-z-]' ].
          preReleaseComponents
            add:
              (self extractNumericComponent: subString forPattern: forPattern) ] ].
  build > 0
    ifTrue: [ 
      versionString := aString copyFrom: build + 1 to: aString size.
      (MetacelloPlatform current findTokens: '.' in: versionString)
        do: [ :subString | 
          (forPattern or: [ self isSemanticIdentifier: subString ])
            ifFalse: [ 
              self
                error:
                  'invalid version number: build version component must be one of [0-9A-Za-z-]' ].
          buildComponents
            add:
              (self extractNumericComponent: subString forPattern: forPattern) ] ].
  ^ self new
    normalVersion: normalComponents;
    preReleaseVersion: preReleaseComponents;
    buildVersion: buildComponents;
    yourself
%

category: 'private'
classmethod: MetacelloSemanticVersionNumber
integerFromString: aString
  aString
    detect: [ :char | char isDigit not ]
    ifNone: [ 
      | integer |
      integer := aString asInteger.
      ((aString at: 1) = $0 and: [ aString size > 1 ])
        ifTrue: [ 
          self
            error:
              'invalid version number: normal version component must not have leading 0s'
                , aString asString ].
      ^ integer ].
  self
    error:
      'invalid version number: normal version component must be integer '
        , aString asString
%

category: 'private'
classmethod: MetacelloSemanticVersionNumber
isSemanticIdentifier: aString
    "whether the receiver is composed entirely of alphanumerics"

    aString
        do: [ :c | 
            c isAlphaNumeric
                ifFalse: [ 
                    c = $-
                        ifFalse: [ ^ false ] ] ].
    ^ true
%

category: 'private'
classmethod: MetacelloSemanticVersionNumber
validateVersionNumber: svn against: aString
  svn printString = aString
    ifFalse: [ 
      self
        error:
          'The printString of a semantic version number should be equal to the source version string' ]
%

! ------------------- Instance methods for MetacelloSemanticVersionNumber

category: 'comparing'
method: MetacelloSemanticVersionNumber
< aMetacelloVersionNumber
    aMetacelloVersionNumber species = self species
        ifFalse: [ ^ false ].
    ^ self compareLessThan: aMetacelloVersionNumber
%

category: 'comparing'
method: MetacelloSemanticVersionNumber
= aMetacelloVersionNumber
    aMetacelloVersionNumber species = self species
        ifFalse: [ ^ false ].
    ^ self compareEqualTo: aMetacelloVersionNumber
%

category: 'comparing'
method: MetacelloSemanticVersionNumber
~> aMetacelloVersionNumber

	aMetacelloVersionNumber size == 1 ifTrue: [ ^false ].
	^self >= aMetacelloVersionNumber and: [ self < aMetacelloVersionNumber approximateBase ]
%

category: 'accessing'
method: MetacelloSemanticVersionNumber
approximateBase

	| base |
	base := self copyFrom: 1 to: self size - 1.
	base at: base size put: (base at: base size) + 1.
	^base
%

category: 'converting'
method: MetacelloSemanticVersionNumber
asMetacelloSemanticVersionNumber
    ^ self
%

category: 'printing'
method: MetacelloSemanticVersionNumber
asString
	"Answer a string that represents the receiver."

	^ self printString
%

category: 'accessing'
method: MetacelloSemanticVersionNumber
buildVersion
    buildVersion ifNil: [ buildVersion := #() ].
    ^ buildVersion
%

category: 'accessing'
method: MetacelloSemanticVersionNumber
buildVersion: anObject
	buildVersion := anObject
%

category: 'private'
method: MetacelloSemanticVersionNumber
compareEqualTo: aMetacelloVersionNumber
    aMetacelloVersionNumber species = self species
        ifFalse: [ ^ false ].
    (self compareEqualTo: self normalVersion other: aMetacelloVersionNumber normalVersion)
        ifFalse: [ ^ false ].
    (self compareEqualTo: self preReleaseVersion other: aMetacelloVersionNumber preReleaseVersion)
        ifFalse: [ ^ false ].
    ^ self compareEqualTo: self buildVersion other: aMetacelloVersionNumber buildVersion
%

category: 'private'
method: MetacelloSemanticVersionNumber
compareEqualTo: myComponents other: otherComponents
    | mySize |
    mySize := myComponents size.
    mySize = otherComponents size
        ifFalse: [ ^ false ].
    1 to: mySize do: [ :i | 
        (myComponents at: i) = (otherComponents at: i)
            ifFalse: [ ^ false ] ].
    ^ true
%

category: 'private'
method: MetacelloSemanticVersionNumber
compareLessThan: aMetacelloVersionNumber
    | myComponents otherComponents defaultResult |
    aMetacelloVersionNumber species = self species
        ifFalse: [ ^ false ].
    myComponents := self normalVersion.
    otherComponents := aMetacelloVersionNumber normalVersion.
    defaultResult := true.
    (self compareEqualTo: myComponents other: otherComponents)
        ifTrue: [ defaultResult := false ]
        ifFalse: [ 
            (self compareLessThan: myComponents other: otherComponents version: #'normal')
                ifFalse: [ ^ false ] ].
    myComponents := self preReleaseVersion.
    otherComponents := aMetacelloVersionNumber preReleaseVersion.
    (self compareEqualTo: myComponents other: otherComponents)
        ifTrue: [ 
            myComponents size > 0
                ifTrue: [ defaultResult := false ] ]
        ifFalse: [ ^ self compareLessThan: myComponents other: otherComponents version: #'preRelease' ].
    myComponents := self buildVersion.
    otherComponents := aMetacelloVersionNumber buildVersion.
    ^ (self compareEqualTo: myComponents other: otherComponents)
        ifTrue: [ defaultResult ]
        ifFalse: [ self compareLessThan: myComponents other: otherComponents version: #'build' ]
%

category: 'private'
method: MetacelloSemanticVersionNumber
compareLessThan: myComponents other: otherComponents version: version
    | mySize aSize commonSize count more |
    mySize := myComponents size.
    aSize := otherComponents size.
    commonSize := mySize min: aSize.
    count := 0.
    more := true.
    [ more and: [ count < commonSize ] ]
        whileTrue: [ 
            (myComponents at: count + 1) = (otherComponents at: count + 1)
                ifTrue: [ count := count + 1 ]
                ifFalse: [ more := false ] ].
    count < commonSize
        ifTrue: [ ^ (myComponents at: count + 1) metacelloSemanticVersionComponentLessThan: (otherComponents at: count + 1) ].
    mySize < aSize
        ifTrue: [ 
            mySize = 0
                ifTrue: [ 
                    #'preRelease' == version
                        ifTrue: [ ^ false ].
                    ^ true ].
            (myComponents at: commonSize) = (otherComponents at: commonSize)
                ifFalse: [ ^ true ].
            ^ true ]
        ifFalse: [ 
            mySize = aSize
                ifTrue: [ ^ false ].
            aSize = 0
                ifTrue: [ 
                    #'build' == version
                        ifTrue: [ ^ false ].
                    ^ true ].
            (myComponents at: commonSize) = (otherComponents at: commonSize)
                ifFalse: [ ^ false ].
            ^ true ]
%

category: 'copying'
method: MetacelloSemanticVersionNumber
copyFrom: start to: stop 
	"Answer a copy of a subset of the receiver, starting from element at 
	index start until element at index stop."

	| newSize new j |
	newSize := stop - start + 1.
	new := self species new: newSize.
	j := 0.
	start to: stop do: [:i |
		new at: j + 1 put: (self at: i).
		j := j + 1 ].
	^new
%

category: 'operations'
method: MetacelloSemanticVersionNumber
decrementMajorVersion
  self decrementNormalVersionAt: 1
%

category: 'operations'
method: MetacelloSemanticVersionNumber
decrementMinorVersion
  self decrementNormalVersionAt: 2
%

category: 'operations'
method: MetacelloSemanticVersionNumber
decrementMinorVersionNumber
  self decrementNormalVersionAt: 3
%

category: 'private'
method: MetacelloSemanticVersionNumber
decrementNormalVersionAt: index
  | int col |
  col := self normalVersion.
  int := col at: index.
  int > 0
    ifTrue: [ col at: index put: int - 1 ]
%

category: 'operations'
method: MetacelloSemanticVersionNumber
decrementPatchVersion
  self decrementNormalVersionAt: 3
%

category: 'enumerating'
method: MetacelloSemanticVersionNumber
do: aBlock 
	"Refer to the comment in Collection|do:."
	1 to: self size do:
		[:index | aBlock value: (self at: index)]
%

category: 'enumerating'
method: MetacelloSemanticVersionNumber
do: elementBlock separatedBy: separatorBlock
	"Evaluate the elementBlock for all elements in the receiver,
	and evaluate the separatorBlock between."

	| beforeFirst | 
	beforeFirst := true.
	self do:
		[:each |
		beforeFirst
			ifTrue: [beforeFirst := false]
			ifFalse: [separatorBlock value].
		elementBlock value: each]
%

category: 'comparing'
method: MetacelloSemanticVersionNumber
hash
    ^ self versionComponents hash
%

category: 'operations'
method: MetacelloSemanticVersionNumber
incrementMajorVersion
  self incrementNormalVersionAt: 1
%

category: 'operations'
method: MetacelloSemanticVersionNumber
incrementMinorVersion
  self incrementNormalVersionAt: 2
%

category: 'operations'
method: MetacelloSemanticVersionNumber
incrementMinorVersionNumber
  self incrementNormalVersionAt: 3
%

category: 'private'
method: MetacelloSemanticVersionNumber
incrementNormalVersionAt: index
  | int col |
  col := self normalVersion.
  int := col at: index.
  col at: index put: int + 1
%

category: 'operations'
method: MetacelloSemanticVersionNumber
incrementPatchVersion
  self incrementNormalVersionAt: 3
%

category: 'comparing'
method: MetacelloSemanticVersionNumber
match: aVersionPattern
  "Answer whether the version number of the receiver matches the given pattern string.

	 A Metacello version number is made up of version sequences delimited by the characters $. and $-.
	 The $. introduces a numeric version sequence and $- introduces an alphanumeric version sequence.
	 
	 A version pattern is made up of version pattern match sequences. also delimited by the characters $. 
	 and $-.. Each pattern match sequence is tested against the corresponding version sequence of the 
	 receiver, using the 'standard' pattern matching rules. All sequences must answer true for a match.
	
	 The special pattern sequence '?' is a match for the corresponding version sequence and all subsequent 
	 version sequences. '?' as the version pattern matches all versions. No more version pattern 
	 sequences are permitted once the '?' sequence is used. If used, it is the last version pattern
	 sequence. "

  | patternVersion mySize patternSize components platform |
  patternVersion := (self class fromString: aVersionPattern forPattern: true)
    versionComponents.
  components := self versionComponents.
  mySize := components size.
  patternSize := patternVersion size.
  mySize = patternSize
    ifFalse: [ 
      mySize < patternSize
        ifTrue: [ ^ false ].
      (patternVersion at: patternSize) ~= '?'
        ifTrue: [ ^ false ].
      mySize := patternSize ].
  platform := MetacelloPlatform current.
  1 to: mySize do: [ :i | 
    | pattern |
    pattern := (patternVersion at: i) asString.
    pattern = '?'
      ifTrue: [ 
        i = mySize
          ifFalse: [ ^ self error: 'Invalid version match pattern: ' , aVersionPattern printString ] ]
      ifFalse: [ 
        (platform matchPattern: pattern in: (components at: i) asString)
          ifFalse: [ ^ false ] ] ].
  ^ true
%

category: 'accessing'
method: MetacelloSemanticVersionNumber
normalVersion
    normalVersion ifNil: [ normalVersion := #() ].
    ^ normalVersion
%

category: 'accessing'
method: MetacelloSemanticVersionNumber
normalVersion: anObject
	normalVersion := anObject
%

category: 'copying'
method: MetacelloSemanticVersionNumber
postCopy
  normalVersion := normalVersion copy.
  preReleaseVersion := preReleaseVersion copy.
  buildVersion := buildVersion copy
%

category: 'accessing'
method: MetacelloSemanticVersionNumber
preReleaseVersion
    preReleaseVersion ifNil: [ preReleaseVersion := #() ].
    ^ preReleaseVersion
%

category: 'accessing'
method: MetacelloSemanticVersionNumber
preReleaseVersion: anObject
	preReleaseVersion := anObject
%

category: 'printing'
method: MetacelloSemanticVersionNumber
print: components prefix: prefixChar on: aStream
    | beforeFirst |
    beforeFirst := true.
    components
        do: [ :component | 
            beforeFirst
                ifTrue: [ 
                    beforeFirst := false.
                    prefixChar ifNotNil: [ aStream nextPut: prefixChar ] ]
                ifFalse: [ aStream nextPut: $. ].
            aStream nextPutAll: component asString ]
%

category: 'printing'
method: MetacelloSemanticVersionNumber
printOn: aStream
    self print: self normalVersion prefix: nil on: aStream.
    self print: self preReleaseVersion prefix: $- on: aStream.
    self print: self buildVersion prefix: $+ on: aStream
%

category: 'private'
method: MetacelloSemanticVersionNumber
versionComponents
    ^ self normalVersion , self preReleaseVersion , self buildVersion
%

category: 'accessing'
method: MetacelloSemanticVersionNumber
versionString

	| strm |
	strm := WriteStream on: String new.
	self printOn: strm.
	^strm contents
%

! Class Implementation for MetacelloVersion

! ------------------- Class methods for MetacelloVersion

category: 'instance creation'
classmethod: MetacelloVersion
fromSpec: aMetacelloVersionSpec
    ^ (self new versionNumber: aMetacelloVersionSpec versionNumber)
        spec: aMetacelloVersionSpec;
        yourself
%

category: 'instance creation'
classmethod: MetacelloVersion
fromString: aString

	^self new versionNumber: aString asMetacelloVersionNumber
%

! ------------------- Instance methods for MetacelloVersion

category: 'comparing'
method: MetacelloVersion
< aMetacelloVersion

	aMetacelloVersion species = self species ifFalse: [ ^false ].
	^self versionNumber < aMetacelloVersion versionNumber
%

category: 'comparing'
method: MetacelloVersion
= aMetacelloVersion

	aMetacelloVersion species = self species ifFalse: [ ^false ].
	^self versionNumber = aMetacelloVersion versionNumber
%

category: 'comparing'
method: MetacelloVersion
~> aMetacelloVersion

	aMetacelloVersion species = self species ifFalse: [ ^false ].
	^self versionNumber ~> aMetacelloVersion versionNumber
%

category: 'querying'
method: MetacelloVersion
author

	^self spec author value
%

category: 'accessing'
method: MetacelloVersion
basicSpec
    ^ self spec
%

category: 'querying'
method: MetacelloVersion
blessing
    ^ self basicSpec blessing value
%

category: 'private'
method: MetacelloVersion
computeVersionStatus
    ^ #'noStatus'
%

category: 'querying'
method: MetacelloVersion
description
    ^ self basicSpec description value
%

category: 'querying'
method: MetacelloVersion
difference: aMetacelloVersion
	"Return a a dictionary of additions, removals and modifications"
	
	^self spec difference: aMetacelloVersion spec
%

category: 'querying'
method: MetacelloVersion
expandToLoadableSpecNames: nameList
	"Just like #resolveToLoadableSpecs:, but returns list of spec names instead of specs"
	
	^self spec expandToLoadableSpecNames: nameList
%

category: 'querying'
method: MetacelloVersion
groups
	"Answers the list of groups associated with this version"
	
	| groups |
	groups := OrderedCollection new.
	self spec projectDo: [:ignored | ] packageDo: [:ignored | ] groupDo: [:grp | groups add: grp ].
	^groups
%

category: 'comparing'
method: MetacelloVersion
hash

	^self versionNumber hash
%

category: 'accessing'
method: MetacelloVersion
importedVersions

	importedVersions == nil ifTrue: [ importedVersions := #() ].
	^importedVersions
%

category: 'accessing'
method: MetacelloVersion
importedVersions: aCollection

	importedVersions := aCollection
%

category: 'testing'
method: MetacelloVersion
isAllLoadedToSpec
	"all projects and packages are loaded and match specification"
	
	^self spec isAllLoadedToSpec
%

category: 'testing'
method: MetacelloVersion
isLoadedMatchConstraints
	"all loaded projects and packages match constraints"
	
	^self spec isLoadedMatchConstraints
%

category: 'testing'
method: MetacelloVersion
isLoadedToSpec
	"all loaded projects and packages match specifications"
	
	^self spec isLoadedToSpec
%

category: 'testing'
method: MetacelloVersion
isPossibleBaseline

	^self spec isPossibleBaseline
%

category: 'testing'
method: MetacelloVersion
isSomethingLoaded
	"at least one project or package has been loaded"
	
	^self spec isSomethingLoaded
%

category: 'actions'
method: MetacelloVersion
load

	^self subclassResponsibility
%

category: 'actions'
method: MetacelloVersion
load: required

	^self subclassResponsibility
%

category: 'querying'
method: MetacelloVersion
loader

	^self spec loader
%

category: 'testing'
method: MetacelloVersion
name

	^self versionString
%

category: 'querying'
method: MetacelloVersion
packageNamed: aString

	^self packageNamed: aString ifAbsent: [ ^nil ].
%

category: 'querying'
method: MetacelloVersion
packageNamed: aString ifAbsent: aBlock

	| pkg |
	(pkg := self spec packageNamed: aString ifAbsent: []) == nil
		ifTrue: [ ^aBlock value ].
	^pkg referencedSpec
%

category: 'printing'
method: MetacelloVersion
printOn: aStream
    | label vs |
    (#(structural broken) includes: self blessing) not
        ifTrue: [ 
            (vs := self versionStatus) == #'somethingLoaded'
                ifTrue: [ aStream nextPutAll: '<>' ].
            vs == #'loadedMatchConstraints'
                ifTrue: [ aStream nextPutAll: '>=' ].
            vs == #'loadedToSpec'
                ifTrue: [ aStream nextPut: $~ ] ].
    self versionNumber printOn: aStream.
    self basicSpec ~~ nil
        ifTrue: [ 
            (label := self projectLabel) isEmpty
                ifFalse: [ aStream nextPutAll: ' [' , label , ']' ] ]
%

category: 'querying'
method: MetacelloVersion
project
    ^ self basicSpec project
%

category: 'accessing'
method: MetacelloVersion
projectLabel
    ^ self basicSpec projectLabel
%

category: 'querying'
method: MetacelloVersion
projects
	"Answers the list of projects associated with this version"

	| projects |
	projects := OrderedCollection new.
	self spec projectDo: [:prj | projects add: prj projectReference ] packageDo: [:ignored | ] groupDo: [:ignored | ].
	^projects
%

category: 'querying'
method: MetacelloVersion
resolveToLoadableSpecs: nameList
	"Resolves names in namelist to the  list of packages and projects in the version that would be loaded. Projects are 
	not traversed during the transitive closure. The scope is that of the version itself.
	   If the spec is a package, answer a list including the package and the transitive closure on 
			its #requires: and #includes: fields.
	   If the spec is a project, answer the project.
	   If the spec is a group, answers the list of packages in the #includes: field of the group. 
			Groups in the #includes: field are expanded following the transitive closure on groups"

	^self spec resolveToLoadableSpecs: nameList
%

category: 'accessing'
method: MetacelloVersion
spec

	^spec
%

category: 'accessing'
method: MetacelloVersion
spec: aMetacellVersionSpec

	spec := aMetacellVersionSpec
%

category: 'querying'
method: MetacelloVersion
timestamp
    ^ self basicSpec timestamp value
%

category: 'actions'
method: MetacelloVersion
unload

	^self spec unload
%

category: 'querying'
method: MetacelloVersion
versionKey
    "version printString, without the versionStatus decorations, suitable for using as a unique key for the 
	 receiver in a dictionary"

    | stream label |
    stream := WriteStream on: String new.
    self versionNumber printOn: stream.
    self basicSpec ~~ nil
      ifTrue: [ 
        (label := self projectLabel) isEmpty
          ifFalse: [ stream nextPutAll: ' [' , label , ']' ] ].
    ^ stream contents
%

category: 'querying'
method: MetacelloVersion
versionNumber

	^versionNumber
%

category: 'accessing'
method: MetacelloVersion
versionNumber: aVersionNumber

	versionNumber := aVersionNumber
%

category: 'querying'
method: MetacelloVersion
versionNumberFrom: aString
    ^ self versionNumber class fromString: aString
%

category: 'accessing'
method: MetacelloVersion
versionSpec

	^self spec
%

category: 'accessing'
method: MetacelloVersion
versionStatus

	versionStatus == nil ifTrue: [ versionStatus := self computeVersionStatus].
	^versionStatus
%

category: 'accessing'
method: MetacelloVersion
versionStatus: aSymbol

	versionStatus := aSymbol
%

category: 'querying'
method: MetacelloVersion
versionString

	^self versionNumber versionString
%

! Class Implementation for MetacelloVersionNumber

! ------------------- Class methods for MetacelloVersionNumber

category: 'private'
classmethod: MetacelloVersionNumber
extractNumericComponent: subString
	"$. separated components are integers"

	| number |
	number := [subString asNumber] 
						on: Error 
						do: [:ex | ex return: subString ].
	^number asString = subString
		ifTrue: [ number ]
		ifFalse: [ subString ]
%

category: 'instance creation'
classmethod: MetacelloVersionNumber
fromString: aString
  | new components |
  components := OrderedCollection new.
  (MetacelloPlatform current findTokens: '.' in: aString)
    do: [ :subString | 
      | strs |
      strs := MetacelloPlatform current findTokens: '-' in: subString.	"first subString token could be an integer"
      components add: (self extractNumericComponent: strs first).
      strs size > 1
        ifTrue: [ 
          "remaining are uncoditionally Strings, because of leading $-"
          components addAll: (strs copyFrom: 2 to: strs size) ] ].
  new := self new: components size.
  1 to: components size do: [ :i | new at: i put: (components at: i) ].
  ^ new
%

! ------------------- Instance methods for MetacelloVersionNumber

category: 'comparing'
method: MetacelloVersionNumber
< aMetacelloVersionNumber

	| condensed aCondensed |
	aMetacelloVersionNumber species = self species
		ifFalse: [ ^ false ].
	condensed := self collapseZeros.
	aCondensed := aMetacelloVersionNumber collapseZeros.
	(condensed ~~ self or: [ aCondensed ~~ aMetacelloVersionNumber ])
		ifTrue: [ ^ condensed compareLessThan: aCondensed ].
	^ self compareLessThan: aMetacelloVersionNumber
%

category: 'comparing'
method: MetacelloVersionNumber
= aMetacelloVersionNumber

	| condensed aCondensed |
	aMetacelloVersionNumber species = self species
		ifFalse: [ ^ false ].
	condensed := self collapseZeros.
	aCondensed := aMetacelloVersionNumber collapseZeros.
	(condensed ~~ self or: [ aCondensed ~~ aMetacelloVersionNumber ])
		ifTrue: [ ^ condensed compareEqualTo: aCondensed ].
	^ self compareEqualTo: aMetacelloVersionNumber
%

category: 'comparing'
method: MetacelloVersionNumber
~> aMetacelloVersionNumber

	aMetacelloVersionNumber size == 1 ifTrue: [ ^false ].
	^self >= aMetacelloVersionNumber and: [ self < aMetacelloVersionNumber approximateBase ]
%

category: 'accessing'
method: MetacelloVersionNumber
approximateBase

	| base |
	base := self copyFrom: 1 to: self size - 1.
	base at: base size put: (base at: base size) + 1.
	^base
%

category: 'converting'
method: MetacelloVersionNumber
asMetacelloVersionNumber

	^self
%

category: 'printing'
method: MetacelloVersionNumber
asString
	"Answer a string that represents the receiver."

	^ self printString
%

category: 'private'
method: MetacelloVersionNumber
collapseZeros
  "the rule must be that zeros can be collapsed as long as the series of zeros ends in a string term"

  | collection newSize new j lastElementIsStringOrZero canCollapse platform |
  (self size = 0 or: [ self at: 1 ]) == 0
    ifTrue: [ ^ self ].
  collection := OrderedCollection new.
  lastElementIsStringOrZero := true.
  canCollapse := true.
  platform := MetacelloPlatform current.
  self size to: 1 by: -1 do: [ :i | 
    | element |
    element := self at: i.
    (canCollapse and: [ element == 0 ])
      ifTrue: [ 
        lastElementIsStringOrZero
          ifFalse: [ 
            canCollapse := false.
            collection addFirst: element ] ]
      ifFalse: [ 
        collection addFirst: element.
        canCollapse := lastElementIsStringOrZero := platform isString: element ] ].
  collection size = self size
    ifTrue: [ ^ self ].
  newSize := collection size.
  new := self species new: newSize.
  j := 0.
  collection
    do: [ :element | 
      new at: j + 1 put: element.
      j := j + 1 ].
  ^ new
%

category: 'private'
method: MetacelloVersionNumber
compareEqualTo: aMetacelloVersionNumber

	| mySize |
	aMetacelloVersionNumber species = self species ifFalse: [ ^false ].
	mySize := self size.
	mySize = aMetacelloVersionNumber size 
		ifFalse: [ ^false ].
	1 to: mySize do: [:i |
		(self at: i) = (aMetacelloVersionNumber at: i) ifFalse: [ ^false ]].
	^true
%

category: 'private'
method: MetacelloVersionNumber
compareLessThan: aMetacelloVersionNumber
  | mySize aSize commonSize count more platform |
  platform := MetacelloPlatform current.
  mySize := self size.
  aSize := aMetacelloVersionNumber size.
  commonSize := mySize min: aSize.
  count := 0.
  more := true.
  [ more and: [ count < commonSize ] ]
    whileTrue: [ 
      (self at: count + 1) = (aMetacelloVersionNumber at: count + 1)
        ifTrue: [ count := count + 1 ]
        ifFalse: [ more := false ] ].
  count < commonSize
    ifTrue: [ 
      ^ (self at: count + 1)
        metacelloVersionComponentLessThan:
          (aMetacelloVersionNumber at: count + 1) ].
  mySize < aSize
    ifTrue: [ 
      mySize = 0
        ifTrue: [ ^ true ].	"if the versions at commonSize are equal and the next version slot in aMetacelloVersionNumber 
			 is a string, then it's considered that I'm > aMetacelloVersionNumber
			 (i.e., '2.9.9' is greater than '2.9.9-alpha.2')"
      (self at: commonSize) = (aMetacelloVersionNumber at: commonSize)
        ifFalse: [ ^ true ].
      ^ (platform isString: (aMetacelloVersionNumber at: commonSize + 1)) not ]
    ifFalse: [ 
      mySize = aSize
        ifTrue: [ ^ false ].
      aSize <= 0
        ifTrue: [ ^ false ].	"if the versions at commonSize are equal and the next version slot is a string, 
			 then it's considered that I'm < aMetacelloVersionNumber
			 (i.e., '2.9.9-alpha.2' is less than '2.9.9')"
      (self at: commonSize) = (aMetacelloVersionNumber at: commonSize)
        ifFalse: [ ^ false ].
      ^ platform isString: (self at: commonSize + 1) ]
%

category: 'copying'
method: MetacelloVersionNumber
copyFrom: start to: stop 
	"Answer a copy of a subset of the receiver, starting from element at 
	index start until element at index stop."

	| newSize new j |
	newSize := stop - start + 1.
	new := self species new: newSize.
	j := 0.
	start to: stop do: [:i |
		new at: j + 1 put: (self at: i).
		j := j + 1 ].
	^new
%

category: 'operations'
method: MetacelloVersionNumber
decrementMajorVersion
  self decrementVersionAt: 1
%

category: 'operations'
method: MetacelloVersionNumber
decrementMinorVersion
  self size < 2
    ifTrue: [ self at: 2 put: 0 ].
  self decrementVersionAt: 2
%

category: 'operations'
method: MetacelloVersionNumber
decrementMinorVersionNumber
  | int platform |
  platform := MetacelloPlatform current.
  self size to: 1 by: -1 do: [ :index | 
    (platform isString: (int := self at: index))
      ifFalse: [ 
        int > 0
          ifTrue: [ self at: index put: int - 1 ].
        ^ self ] ]
%

category: 'operations'
method: MetacelloVersionNumber
decrementPatchVersion
  self size < 2
    ifTrue: [ self at: 2 put: 0 ].
  self size < 3
    ifTrue: [ self at: 3 put: 0 ].
  self decrementVersionAt: 3
%

category: 'private'
method: MetacelloVersionNumber
decrementVersionAt: index
  | int platform |
  platform := MetacelloPlatform current.
  int := self at: index.
  (platform isString: (int := self at: index))
    ifFalse: [ 
      int > 0
        ifTrue: [ self at: index put: int - 1 ] ]
%

category: 'enumerating'
method: MetacelloVersionNumber
do: aBlock 
	"Refer to the comment in Collection|do:."
	1 to: self size do:
		[:index | aBlock value: (self at: index)]
%

category: 'enumerating'
method: MetacelloVersionNumber
do: elementBlock separatedBy: separatorBlock
	"Evaluate the elementBlock for all elements in the receiver,
	and evaluate the separatorBlock between."

	| beforeFirst | 
	beforeFirst := true.
	self do:
		[:each |
		beforeFirst
			ifTrue: [beforeFirst := false]
			ifFalse: [separatorBlock value].
		elementBlock value: each]
%

category: 'comparing'
method: MetacelloVersionNumber
hash

"Returns a numeric hash key for the receiver."

| mySize interval hashValue |

(mySize := self size) == 0
  ifTrue: [ ^15243 ].

"Choose an interval so that we sample at most 5 elements of the receiver"
interval := ((mySize - 1) // 4) max: 1.

hashValue := 4459.
1 to: mySize by: interval do: [ :i | | anElement |
  anElement := self at: i.
  (anElement isKindOf: SequenceableCollection)
    ifTrue: [
      hashValue := (hashValue bitShift: -1) bitXor: anElement size.
      ]
    ifFalse: [
      hashValue := (hashValue bitShift: -1) bitXor: anElement hash.
      ].
  ].

^ hashValue abs
%

category: 'operations'
method: MetacelloVersionNumber
incrementMajorVersion
  self incrementVersionAt: 1
%

category: 'operations'
method: MetacelloVersionNumber
incrementMinorVersion
  self size < 2
    ifTrue: [ self at: 2 put: 0 ].
  self incrementVersionAt: 2
%

category: 'operations'
method: MetacelloVersionNumber
incrementMinorVersionNumber
  | int platform |
  platform := MetacelloPlatform current.
  self size to: 1 by: -1 do: [ :index | 
    (platform isString: (int := self at: index))
      ifFalse: [ 
        self at: index put: int + 1.
        ^ self ] ]
%

category: 'operations'
method: MetacelloVersionNumber
incrementPatchVersion
  self size < 2
    ifTrue: [ self at: 2 put: 0 ].
  self size < 3
    ifTrue: [ self at: 3 put: 0 ].
  self incrementVersionAt: 3
%

category: 'private'
method: MetacelloVersionNumber
incrementVersionAt: index
  | int platform |
  platform := MetacelloPlatform current.
  int := self at: index.
  (platform isString: (int := self at: index))
    ifFalse: [ self at: index put: int + 1 ]
%

category: 'comparing'
method: MetacelloVersionNumber
match: aVersionPattern
  "Answer whether the version number of the receiver matches the given pattern string.

	 A Metacello version number is made up of version sequences delimited by the characters $. and $-.
	 The $. introduces a numeric version sequence and $- introduces an alphanumeric version sequence.
	 
	 A version pattern is made up of version pattern match sequences. also delimited by the characters $. 
	 and $-.. Each pattern match sequence is tested against the corresponding version sequence of the 
	 receiver, using the 'standard' pattern matching rules. All sequences must answer true for a match.
	
	 The special pattern sequence '?' is a match for the corresponding version sequence and all subsequent 
	 version sequences. '?' as the version pattern matches all versions. No more version pattern 
	 sequences are permitted once the '?' sequence is used. If used, it is the last version pattern
	 sequence. "

  | patternVersion mySize patternSize platform |
  patternVersion := aVersionPattern asMetacelloVersionNumber.
  mySize := self size.
  patternSize := patternVersion size.
  mySize = patternSize
    ifFalse: [ 
      mySize < patternSize
        ifTrue: [ ^ false ].
      (patternVersion at: patternSize) ~= '?'
        ifTrue: [ ^ false ].
      mySize := patternSize ].
  platform := MetacelloPlatform current.
  1 to: mySize do: [ :i | 
    | pattern |
    pattern := (patternVersion at: i) asString.
    pattern = '?'
      ifTrue: [ 
        i = mySize
          ifFalse: [ ^ self error: 'Invalid version match pattern: ' , aVersionPattern printString ] ]
      ifFalse: [ 
        (platform matchPattern: pattern in: (self at: i) asString)
          ifFalse: [ ^ false ] ] ].
  ^ true	"
  '1.1.1' asMetacelloVersionNumber match: '*.*.*'. -> true
  '1.1.1' asMetacelloVersionNumber match: '*.#.*'. -> true
  '1.10.1' asMetacelloVersionNumber match: '*.#.*'. -> false
  '1.1.1' asMetacelloVersionNumber match: '*.*'. -> false
  '1.1.1' asMetacelloVersionNumber match: '*.?'. -> true
  '1.0' asMetacelloVersionNumber match: '1.?'. -> true
  '2.0' asMetacelloVersionNumber match: '1.?'. -> false
  '1.1.1' asMetacelloVersionNumber match: '?'. -> true
  '1' asMetacelloVersionNumber match: '*.?'. -> false
  '1-alpha5.0' asMetacelloVersionNumber match: '1-alpha*.?'. -> true
  '1-alpha15.0.1' asMetacelloVersionNumber match: '1-alpha*.?'. -> true
  '1.1' asMetacelloVersionNumber match: '?.?'. -> ERROR: invalid version match pattern
"
%

category: 'printing'
method: MetacelloVersionNumber
printOn: aStream
  | beforeFirst platform |
  platform := MetacelloPlatform current.
  beforeFirst := true.
  self
    do: [ :each | 
      beforeFirst
        ifTrue: [ beforeFirst := false ]
        ifFalse: [ 
          (platform isString: each)
            ifTrue: [ aStream nextPut: $- ]
            ifFalse: [ aStream nextPut: $. ] ].
      aStream nextPutAll: each asString ]
%

category: 'accessing'
method: MetacelloVersionNumber
versionString

	| strm |
	strm := WriteStream on: String new.
	self printOn: strm.
	^strm contents
%

! Class Implementation for MetacelloCleanNotification

! ------------------- Class methods for MetacelloCleanNotification

category: 'exceptioninstantiator'
classmethod: MetacelloCleanNotification
signal: aMetacelloVersion

	^ self new signal: aMetacelloVersion
%

! ------------------- Instance methods for MetacelloCleanNotification

category: 'signaling'
method: MetacelloCleanNotification
signal: aMetacelloVersion

	self version: aMetacelloVersion.
	^ self signal
%

category: 'accessing'
method: MetacelloCleanNotification
version
	^ version
%

category: 'accessing'
method: MetacelloCleanNotification
version: anObject
	version := anObject
%

! Class Implementation for MetacelloCleanLoadAndTestsNotification

! Class Implementation for MetacelloCleanLoadNotification

! Class Implementation for MetacelloClearStackCacheNotification

! ------------------- Instance methods for MetacelloClearStackCacheNotification

category: 'accessing'
method: MetacelloClearStackCacheNotification
cacheNames
	^ cacheNames
%

category: 'accessing'
method: MetacelloClearStackCacheNotification
cacheNames: anArray
	cacheNames := anArray
%

category: 'signaling'
method: MetacelloClearStackCacheNotification
signal: anArray
	"Signal the occurrence of an exceptional condition with a specified cacheName."

	self cacheNames: anArray.
	^ self signal
%

! Class Implementation for MetacelloErrorInProjectConstructionNotification

! ------------------- Class methods for MetacelloErrorInProjectConstructionNotification

category: 'instance creation'
classmethod: MetacelloErrorInProjectConstructionNotification
versionString: aString exception: anException
    ^ self new
        versionString: aString;
        exception: anException;
        signal
%

! ------------------- Instance methods for MetacelloErrorInProjectConstructionNotification

set compile_env: 0

category: 'exception description'
method: MetacelloErrorInProjectConstructionNotification
defaultAction
    "Answer false if you want the version recorded in the errorMap.
	Answer true if you want to go ahead and throw the error"

    ^ false
%

set compile_env: 2

category: 'accessing'
method: MetacelloErrorInProjectConstructionNotification
exception
	^ exception
%

category: 'accessing'
method: MetacelloErrorInProjectConstructionNotification
exception: anObject
	exception := anObject
%

category: 'accessing'
method: MetacelloErrorInProjectConstructionNotification
versionString
	^ versionString
%

category: 'accessing'
method: MetacelloErrorInProjectConstructionNotification
versionString: anObject
	versionString := anObject
%

! Class Implementation for MetacelloIgnorePackageLoaded

! ------------------- Class methods for MetacelloIgnorePackageLoaded

category: 'signalling'
classmethod: MetacelloIgnorePackageLoaded
signal: aMetacelloPackageSpec

	^(self new packageSpec: aMetacelloPackageSpec) signal
%

! ------------------- Instance methods for MetacelloIgnorePackageLoaded

set compile_env: 0

category: 'accessing'
method: MetacelloIgnorePackageLoaded
defaultAction
  "Default action is to NOT ignore whether or not the package is loaded. 
   Basically allow for package level ignoreImage. "

  ^ false
%

set compile_env: 2

category: 'accessing'
method: MetacelloIgnorePackageLoaded
packageSpec

   ^packageSpec
%

category: 'accessing'
method: MetacelloIgnorePackageLoaded
packageSpec: anObject

   packageSpec := anObject
%

category: 'signalling'
method: MetacelloIgnorePackageLoaded
signal

  ^ self @env0: signal
%

! Class Implementation for MetacelloScriptGitBasedDownloadNotification

! ------------------- Instance methods for MetacelloScriptGitBasedDownloadNotification

category: 'accessing'
method: MetacelloScriptGitBasedDownloadNotification
projectPath
	^ projectPath
%

category: 'accessing'
method: MetacelloScriptGitBasedDownloadNotification
projectPath: anObject
	projectPath := anObject
%

category: 'accessing'
method: MetacelloScriptGitBasedDownloadNotification
versionString
	^ versionString
%

category: 'accessing'
method: MetacelloScriptGitBasedDownloadNotification
versionString: anObject
	versionString := anObject
%

! Class Implementation for MetacelloScriptNotification

! ------------------- Instance methods for MetacelloScriptNotification

category: 'handlers'
method: MetacelloScriptNotification
handleResolutionFor: aScriptEngine
    self subclassResponsibility
%

! Class Implementation for MetacelloResolveProjectUpgrade

! ------------------- Instance methods for MetacelloResolveProjectUpgrade

category: 'exception handling'
method: MetacelloResolveProjectUpgrade
allow
    self checkAllowed.
    self resume: self newProjectRegistration
%

category: 'exception handling'
method: MetacelloResolveProjectUpgrade
allowEvenIfLocked
  "for internal ScriptEngine use only. from the Scripting API use:
		onLocked: [:ex | ex allow]
		"

  self resume: self newProjectRegistration
%

category: 'private'
method: MetacelloResolveProjectUpgrade
checkAllowed
  self existingProjectRegistration locked
    ifTrue: [ 
      self
        resume:
          (MetacelloAllowLockedProjectChange new
            operationString: self operationString;
            existingProjectRegistration: self existingProjectRegistration;
            newProjectRegistration: self newProjectRegistration;
            signal) ]
%

set compile_env: 0

category: 'exception handling'
method: MetacelloResolveProjectUpgrade
defaultAction
    "Result of signal should be the projectRegistration to be used to perform the load ... default is to disallow"

    ^ self @env2: existingProjectRegistration
%

set compile_env: 2

category: 'exception handling'
method: MetacelloResolveProjectUpgrade
disallow
    "default action"

    self resume: self existingProjectRegistration
%

category: 'accessing'
method: MetacelloResolveProjectUpgrade
existingProjectRegistration
	^ existingProjectRegistration
%

category: 'accessing'
method: MetacelloResolveProjectUpgrade
existingProjectRegistration: anObject
	existingProjectRegistration := anObject
%

category: 'handlers'
method: MetacelloResolveProjectUpgrade
handleOnDownGrade: onDownGradeBlock onUpgrade: onUpgradeBlock
    self subclassResponsibility
%

category: 'handlers'
method: MetacelloResolveProjectUpgrade
handleOnDownGrade: onDownGradeBlock onUpgrade: onUpgradeBlock onLockedProjectChange: onProjectChangeBlock
  self subclassResponsibility
%

category: 'accessing'
method: MetacelloResolveProjectUpgrade
newProjectRegistration
	^ newProjectRegistration
%

category: 'accessing'
method: MetacelloResolveProjectUpgrade
newProjectRegistration: anObject
	newProjectRegistration := anObject
%

category: 'accessing'
method: MetacelloResolveProjectUpgrade
operationString
    self subclassResponsibility
%

category: 'exception handling'
method: MetacelloResolveProjectUpgrade
useExisting
  "to be deprecated: useLoaded"

  self disallow
%

category: 'exception handling'
method: MetacelloResolveProjectUpgrade
useIncoming
  self allow
%

category: 'exception handling'
method: MetacelloResolveProjectUpgrade
useLoaded
  self disallow
%

category: 'exception handling'
method: MetacelloResolveProjectUpgrade
useNew
  "to be deprecated: useIncoming"

  self allow
%

! Class Implementation for MetacelloAllowConflictingProjectUpgrade

! ------------------- Instance methods for MetacelloAllowConflictingProjectUpgrade

set compile_env: 0

category: 'exception handling'
method: MetacelloAllowConflictingProjectUpgrade
defaultAction
  self @env2: existingProjectRegistration locked
    ifTrue: [ 
      "https://github.com/dalehenrich/metacello-work/issues/263"
      ^ self @env2: useIncoming ].
  ^ MetacelloConflictingProjectError
    @env2: signal:
      'Load Conflict between existing ' , (self @env2: existingProjectRegistration printString)
        , ' and ' , (self @env2: newProjectRegistration printString)
%

set compile_env: 2

category: 'handlers'
method: MetacelloAllowConflictingProjectUpgrade
handleResolutionFor: aScriptEngine
    ^ aScriptEngine handleConflict: self
%

category: 'accessing'
method: MetacelloAllowConflictingProjectUpgrade
operationString
  ^ 'load with conflicts'
%

! Class Implementation for MetacelloAllowLockedProjectChange

! ------------------- Instance methods for MetacelloAllowLockedProjectChange

category: 'exception handling'
method: MetacelloAllowLockedProjectChange
break
  ^ self allow
%

category: 'private'
method: MetacelloAllowLockedProjectChange
checkAllowed
  "noop ... if user decided to allow lock to be broken, then so be it"
%

set compile_env: 0

category: 'exception handling'
method: MetacelloAllowLockedProjectChange
defaultAction
  Warning
    signal:
      'LOCK ENFORCED: Attempt to ' , self @env2: operationString printString
        , ' new project: ' , self @env2: newProjectRegistration printString printString
        , ' when existing project: '
        , self @env2: existingProjectRegistration printString printString
        , ' is locked. New project not loaded. Use #onLock: to intercept.'.
  ^ self @env2: disallow
%

set compile_env: 2

category: 'handlers'
method: MetacelloAllowLockedProjectChange
handleOnDownGrade: onDownGradeBlock onUpgrade: onUpgradeBlock onLockedProjectChange: onProjectChangeBlock
  ^ onProjectChangeBlock
    cull: self
    cull: self existingProjectRegistration
    cull: self newProjectRegistration
%

category: 'handlers'
method: MetacelloAllowLockedProjectChange
handleResolutionFor: aScriptEngine
  ^ aScriptEngine handleLock: self
%

category: 'exception handling'
method: MetacelloAllowLockedProjectChange
honor
  ^ self disallow
%

category: 'accessing'
method: MetacelloAllowLockedProjectChange
operationString
  ^ operationString
%

category: 'accessing'
method: MetacelloAllowLockedProjectChange
operationString: aString
  operationString := aString
%

! Class Implementation for MetacelloAllowProjectDowngrade

! ------------------- Instance methods for MetacelloAllowProjectDowngrade

set compile_env: 0

category: 'exception handling'
method: MetacelloAllowProjectDowngrade
defaultAction
  "Default for Downgrade is to disallow, but still should check for locks"

  self @env2: checkAllowed.
  ^ super defaultAction
%

set compile_env: 2

category: 'handlers'
method: MetacelloAllowProjectDowngrade
handleOnDownGrade: onDownGradeBlock onUpgrade: onUpgradeBlock
    ^ onDownGradeBlock cull: self cull: self existingProjectRegistration cull: self newProjectRegistration
%

category: 'handlers'
method: MetacelloAllowProjectDowngrade
handleOnDownGrade: onDownGradeBlock onUpgrade: onUpgradeBlock onLockedProjectChange: onProjectChangeBlock
  ^ onDownGradeBlock
    cull: self
    cull: self existingProjectRegistration
    cull: self newProjectRegistration
%

category: 'handlers'
method: MetacelloAllowProjectDowngrade
handleResolutionFor: aScriptEngine
    ^ aScriptEngine handleDowngrade: self
%

category: 'accessing'
method: MetacelloAllowProjectDowngrade
operationString
  ^ 'downgrade to'
%

! Class Implementation for MetacelloAllowProjectUpgrade

! ------------------- Instance methods for MetacelloAllowProjectUpgrade

set compile_env: 0

category: 'exception handling'
method: MetacelloAllowProjectUpgrade
defaultAction
    "Default for Upgrade is to allow"

    self @env2: checkAllowed.
    ^ self @env2: newProjectRegistration
%

set compile_env: 2

category: 'handlers'
method: MetacelloAllowProjectUpgrade
handleOnDownGrade: onDownGradeBlock onUpgrade: onUpgradeBlock
    ^ onUpgradeBlock cull: self cull: self existingProjectRegistration cull: self newProjectRegistration
%

category: 'handlers'
method: MetacelloAllowProjectUpgrade
handleOnDownGrade: onDownGradeBlock onUpgrade: onUpgradeBlock onLockedProjectChange: onProjectChangeBlock
  ^ onUpgradeBlock
    cull: self
    cull: self existingProjectRegistration
    cull: self newProjectRegistration
%

category: 'handlers'
method: MetacelloAllowProjectUpgrade
handleResolutionFor: aScriptEngine
    ^ aScriptEngine handleUpgrade: self
%

category: 'accessing'
method: MetacelloAllowProjectUpgrade
operationString
  ^ 'upgrade to'
%

! Class Implementation for MetacelloScriptEnsureProjectLoadedForDevelopment

! ------------------- Instance methods for MetacelloScriptEnsureProjectLoadedForDevelopment

set compile_env: 0

category: 'exception handling'
method: MetacelloScriptEnsureProjectLoadedForDevelopment
defaultAction
    "Go ahead and download a new copy of configuration because blessing is #development"

    ^ true
%

set compile_env: 2

category: 'handlers'
method: MetacelloScriptEnsureProjectLoadedForDevelopment
handleResolutionFor: aScriptEngine
    ^ aScriptEngine handleEnsureProjectLoadedForDevelopment: self
%

! Class Implementation for MetacelloScriptProjectSpecNotification

! ------------------- Instance methods for MetacelloScriptProjectSpecNotification

set compile_env: 0

category: 'exception description'
method: MetacelloScriptProjectSpecNotification
defaultAction
    "Result of signal should be the projectSpec to be used to perform the load"

    ^ self @env2: projectSpec
%

set compile_env: 2

category: 'accessing'
method: MetacelloScriptProjectSpecNotification
projectSpec
    ^ projectSpec
%

category: 'accessing'
method: MetacelloScriptProjectSpecNotification
projectSpec: anObject
    projectSpec := anObject
%

! Class Implementation for MetacelloLookupBaselineSpecForEnsureLoad

! ------------------- Instance methods for MetacelloLookupBaselineSpecForEnsureLoad

set compile_env: 0

category: 'exception description'
method: MetacelloLookupBaselineSpecForEnsureLoad
defaultAction
	"Answer <true> if you want to ensure the load of the baseline ... default is to load the baseline"

	^ true
%

set compile_env: 2

category: 'handlers'
method: MetacelloLookupBaselineSpecForEnsureLoad
handleResolutionFor: aScriptEngine
	^ aScriptEngine handleLookupBaselineSpecForEnsureLoad: self
%

! Class Implementation for MetacelloLookupProjectSpec

! ------------------- Instance methods for MetacelloLookupProjectSpec

category: 'handlers'
method: MetacelloLookupProjectSpec
handleResolutionFor: aScriptEngine
    ^ aScriptEngine handleLookupProjectSpec: self
%

! Class Implementation for MetacelloLookupProjectSpecForLoad

! ------------------- Instance methods for MetacelloLookupProjectSpecForLoad

set compile_env: 0

category: 'exception description'
method: MetacelloLookupProjectSpecForLoad
defaultAction
    "Result of signal should be the MetacelloProjectSpecForLoad to be used to perform the load. 
	Create a MetacelloProjectSpecForLoad and use the overrideProjectSpec: if you want to supply a different projectSpec"

    ^ MetacelloProjectSpecForLoad new
        @env2: projectSpec: self @env2: projectSpec;
        yourself
%

set compile_env: 2

category: 'handlers'
method: MetacelloLookupProjectSpecForLoad
handleResolutionFor: aScriptEngine
    ^ aScriptEngine handleLookupProjectSpecForLoad: self
%

! Class Implementation for MetacelloProjectSpecLoadedNotification

! ------------------- Instance methods for MetacelloProjectSpecLoadedNotification

set compile_env: 0

category: 'exception description'
method: MetacelloProjectSpecLoadedNotification
defaultAction
    ^ nil
%

set compile_env: 2

category: 'handlers'
method: MetacelloProjectSpecLoadedNotification
handleResolutionFor: aScriptEngine
    ^ aScriptEngine handleProjectSpecLoaded: self
%

! Class Implementation for MetacelloSkipDirtyPackageLoad

! ------------------- Class methods for MetacelloSkipDirtyPackageLoad

category: 'signalling'
classmethod: MetacelloSkipDirtyPackageLoad
signal: aMetacelloPackageSpec

	^(self new packageSpec: aMetacelloPackageSpec) signal
%

! ------------------- Instance methods for MetacelloSkipDirtyPackageLoad

set compile_env: 0

category: 'accessing'
method: MetacelloSkipDirtyPackageLoad
defaultAction
	"Default action is to skip the load of a dirty package"

	^true
%

set compile_env: 2

category: 'accessing'
method: MetacelloSkipDirtyPackageLoad
packageSpec

	^packageSpec
%

category: 'accessing'
method: MetacelloSkipDirtyPackageLoad
packageSpec: aMetacelloPackageSpec

	packageSpec := aMetacelloPackageSpec
%

! Class Implementation for MetacelloStackCacheNotification

! Class Implementation for MetacelloValidationNotification

! ------------------- Class methods for MetacelloValidationNotification

category: 'exceptioninstantiator'
classmethod: MetacelloValidationNotification
signal: aMetacelloValidationIssue

	^ self new signal: aMetacelloValidationIssue
%

! ------------------- Instance methods for MetacelloValidationNotification

category: 'accessing'
method: MetacelloValidationNotification
issue
	^ issue
%

category: 'accessing'
method: MetacelloValidationNotification
issue: anObject
	issue := anObject
%

category: 'signaling'
method: MetacelloValidationNotification
signal: aMetacelloValidationIssue

	self issue: aMetacelloValidationIssue.
	^ self signal
%

! Class Implementation for MetacelloAbstractConstructor

! ------------------- Instance methods for MetacelloAbstractConstructor

category: 'accessing'
method: MetacelloAbstractConstructor
configurationClass

	^self subclassResponsibility
%

category: 'pragma extraction'
method: MetacelloAbstractConstructor
extractAllVersionPragmas

	| aDict |
	aDict := Dictionary new.
	self extractPragmas: #version: into: aDict.
	self extractPragmas: #version:imports: into: aDict.
	^aDict
%

category: 'pragma extraction'
method: MetacelloAbstractConstructor
extractCommonDefaultSymbolicVersionPragmas

	| aDict |
	aDict := Dictionary new.
	self extractPragmas: #defaultSymbolicVersion: for: ConfigurationOf into: aDict.
	^aDict
%

category: 'pragma extraction'
method: MetacelloAbstractConstructor
extractDefaultSymbolicVersionPragmas

	| aDict |
	aDict := Dictionary new.
	self extractPragmas: #defaultSymbolicVersion: into: aDict.
	^aDict
%

category: 'private'
method: MetacelloAbstractConstructor
extractPragmas: pragmaKeyword for: aClass into: versionDict

	| versionString  pragmas |
	(Pragma 
		allNamed: pragmaKeyword
		in: aClass) do: [:pragma |
			versionString := pragma argumentAt: 1.
			pragmas := versionDict 
				at: versionString 
				ifAbsent: [ | list |
					list := OrderedCollection new.
					versionDict at: versionString put: list.
					list ].
			pragmas add: pragma ].
%

category: 'private'
method: MetacelloAbstractConstructor
extractPragmas: pragmaKeyword into: versionDict

	^self extractPragmas: pragmaKeyword for: self configurationClass into: versionDict
%

category: 'pragma extraction'
method: MetacelloAbstractConstructor
extractSymbolicVersionPragmas

	| aDict |
	aDict := Dictionary new.
	self extractPragmas: #symbolicVersion: into: aDict.
	^aDict
%

category: 'pragma extraction'
method: MetacelloAbstractConstructor
extractVersionImportPragmas

	| aDict |
	aDict := Dictionary new.
	self extractPragmas: #version:imports: into: aDict.
	^aDict
%

category: 'pragma extraction'
method: MetacelloAbstractConstructor
extractVersionPragmas

	| aDict |
	aDict := Dictionary new.
	self extractPragmas: #version: into: aDict.
	^aDict
%

! Class Implementation for MetacelloAbstractVersionConstructor

! ------------------- Class methods for MetacelloAbstractVersionConstructor

category: 'method generation'
classmethod: MetacelloAbstractVersionConstructor
symbolicMethodSelectorAndPragma: selector symbolicVersionSymbol: symbolicVersionSymbol on: strm
	strm
		nextPutAll: selector asString , ' spec';
		cr;
		tab;
		nextPutAll: '<symbolicVersion: #' , symbolicVersionSymbol asString printString;
		nextPutAll: '>';
		cr
%

! ------------------- Instance methods for MetacelloAbstractVersionConstructor

category: 'accessing'
method: MetacelloAbstractVersionConstructor
addAttribute: anAttribute

	self attributeOrder add: anAttribute
%

category: 'accessing'
method: MetacelloAbstractVersionConstructor
attributeMap

	attributeMap == nil ifTrue: [ attributeMap := Dictionary new ].
	^attributeMap
%

category: 'accessing'
method: MetacelloAbstractVersionConstructor
attributeOrder

	attributeOrder == nil ifTrue: [ attributeOrder := OrderedCollection new ].
	^attributeOrder
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
author: aBlockOrString
    "Define author field of version spec (MetacelloMCVersionSpec).
	 If <aBlockOrString> is a String, the version spec author is set to the String.
	If <aBlockOrString> is a Block, the specifications in <aBlockOrString> are applied to the author spec (MetacelloValueHolderSpec). Not Recommended!
	
		spec author: 'dkh'.
		
		spec author: [
			spec value: 'dkh'. ].
	 "

    self root @env2: author: aBlockOrString constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
authorForVersion: aBlockOrString
    aBlockOrString setAuthorInMetacelloConfig: self
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
baseline: aString
    self root @env2: baseline: aString constructor: self
%

category: 'api'
method: MetacelloAbstractVersionConstructor
baseline: aString with: aBlockOrString
    self root @env2: baseline: aString with: aBlockOrString constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
baselineForVersion: aString
    self setBaseline: aString
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
baselineForVersion: aString with: aBlock
    aBlock setBaseline: aString withInMetacelloConfig: self
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
blessing: aBlockOrString
    "Define blessing field of version spec (MetacelloMCVersionSpec).
	 If <aBlockOrString> is a String, the version spec blessing is set to the String. It is recommended to use a Symbol.
	If <aBlockOrString> is a Block, the specifications in <aBlockOrString> are applied to the blessing spec (MetacelloValueHolderSpec). Not Recommended!
	
		spec blessing: #release.
		
		spec blessing: [
			spec value: #release. ].
	
	The blessing should typically be set to one of three values:
		#baseline - indicating that the version spec is specifying a baseline version
		#development - indicating that the version spec is not stabilized and will change over time
		#release - indicating that the version spec has stabilized and will NOT change over time
	 "

    self root @env2: blessing: aBlockOrString constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
blessingForVersion: aBlockOrString
    aBlockOrString setBlessingInMetacelloConfig: self
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
className: aString
    "Define className field of a project spec (MetacelloMCProjectSpec).
	
		spec project: 'CoolBrowser' with: [
			spec className: 'ConfigurationOfCoolBrowser'. ].

	The className field is OPTIONAL in the project spec. If omitted, the className will be created by prepending 'ConfigurationOf' to the project name.
	 "

    self root @env2: className: aString constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
classNameForProject: aString
    self root className: aString
%

category: 'accessing'
method: MetacelloAbstractVersionConstructor
configuration

	^configuration
%

category: 'accessing'
method: MetacelloAbstractVersionConstructor
configuration: aConfig

	configuration := aConfig
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
configuration: aString with: aBlockOrString
    self root @env2: configuration: aString with: aBlockOrString constructor: self
%

set compile_env: 2

category: 'accessing'
method: MetacelloAbstractVersionConstructor
configurationClass

	^self configuration class
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
configurationForVersion: aString with: aBlock
    aBlock setConfiguration: aString withInMetacelloConfig: self
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
description: aBlockOrString
    "Define description field of version spec (MetacelloMCVersionSpec).
	 If <aBlockOrString> is a String, the version spec blessing is set to the String. It is recommended to use a Symbol.
	If <aBlockOrString> is a Block, the specifications in <aBlockOrString> are applied to the blessing spec (MetacelloValueHolderSpec). Not Recommended!
	
		spec description: 'Descriptive comment'.
		
		spec description: [
			spec value: 'Descriptive comment'.
	 "

    self root @env2: description: aBlockOrString constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
descriptionForVersion: aBlockOrString
    aBlockOrString setDescriptionInMetacelloConfig: self
%

category: 'private'
method: MetacelloAbstractVersionConstructor
evaluatePragma: pragma
  pragma ifNil: [ ^ self ].
  currentContext := pragma.
  [ self configuration perform: pragma selector withArguments: { self } ]
    ensure: [ currentContext := nil ]
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
file: aString
    "Define file field of a package spec (MetacelloPackageSpec) or project spec (MetacelloMCProjectSpec).

	For a package spec, the file: field is optional in a baseline. In a baseline, the file field may be used to specify a package branch for the package:
	
		spec package: 'MyPackage' with: [
			spec file: 'MyPackage.gemstone'. ]'.

	The file: field is required in a version. In a version, the file field defines the explicit version of the package to be loaded:
	
		spec package: 'MyPackage' with: [
			spec file: 'MyPackage.gemstone-dkh.1'. ]'.

	The following may be used as a short cut for specifying the file field in a version:

		spec package: 'MyPackage' with: 'MyPackage.gemstone-dkh.1'.

	For a project spec, the file field specifies the name of the Monticello package that contains the configuration. If you are using the convention of 
	naming the class and package usingthe  'ConfigurationOf' prefix, then there is no need to specify the file field:
	
		spec project: 'MyProject' with: [
			spec file: 'ConfigurationMyProject'.

	It should only be used when the package name for the configuration is different from the name of the project:

		spec project: 'MyProject' with: [
			spec file: 'MyProject-Metacello'.
	 "

    self root @env2: file: aString constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
fileForPackage: aString
    self root file: aString
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
fileForProject: aString
    self root file: aString
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
for: attributeListOrSymbol do: aBlock
    "conditional version support"

    attributeListOrSymbol @env2: setForDo: aBlock withInMetacelloConfig: self
%

category: 'api'
method: MetacelloAbstractVersionConstructor
for: attributeListOrSymbol version: aString
    "conditional symbolicVersion support"

    attributeListOrSymbol @env2: setForVersion: aString withInMetacelloConfig: self
%

category: 'api'
method: MetacelloAbstractVersionConstructor
group: aString overrides: aStringOrCollection
   self root @env2: group: aString overrides: aStringOrCollection constructor: self
%

category: 'api'
method: MetacelloAbstractVersionConstructor
group: aString with: aStringOrCollection
    self root @env2:  group: aString with: aStringOrCollection constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
groupForVersion: aString overrides: aStringOrCollection
    | spec |
    spec := self project groupSpec
        name: aString;
        includes: aStringOrCollection;
        yourself.
    self root packages add: spec
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
groupForVersion: aString with: aStringOrCollection
    | spec |
    spec := self project groupSpec
        name: aString;
        includes: aStringOrCollection;
        yourself.
    self root packages merge: spec
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
import: aStringOrCollection
  "import names defined in baseline <aString> to be used when loading the version

		spec baseline: 'Sample' with: [ spec repository: 'github://dalehenrich/sample:master/repository' ].
		spec import: 'Sample' ]
	
	or a list of names for multiple project imports:
	
		spec baseline: 'Sample' with: [ spec repository: 'github://dalehenrich/sample:master/repository' ].
		spec baseline: 'Example' with: [ spec repository: 'github://dalehenrich/example:master/repository' ].
		spec import: #('Sample' 'Example')]	
	 "

  self root @env2: import: aStringOrCollection constructor: self
%

category: 'api'
method: MetacelloAbstractVersionConstructor
import: aString provides: aCollection
  "import names defined in baseline <aString> to be used when loading the version

	
		spec baseline: 'Sample' with: [ spec repository: 'github://dalehenrich/sample:master/repository' ].
		spec import: 'Sample' provides: #('Sample Core');
		spec baseline: 'Example' with: [ spec repository: 'github://dalehenrich/example:master/repository' ].
		spec import: 'Example' provides: #('Example Core')]	
	 "

  self root @env2: import: aString provides: aCollection constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
importForVersion: aString
    self root import: aString
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
importForVersion: aString provides: anArray
  self root import: aString provides: anArray
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
includes: anObject
    self root @env2: includes: anObject constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
includesForPackage: anObject
    self root includes: anObject
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
loads: aStringOrCollection
  self root @env2: loads: aStringOrCollection constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
loadsForProject: anObject
    self root loads: anObject
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
name: anObject
    self root @env2: name: anObject constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
nameForProject: aString
    self root name: aString
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
operator: anObject
    self root @env2: operator: anObject constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
operatorForProject: anObject
    self root operator: anObject
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
package: aString
    self root @env2: package: aString constructor: self
%

category: 'api'
method: MetacelloAbstractVersionConstructor
package: aString overrides: aBlock
    self root @env2: package: aString overrides: aBlock constructor: self
%

category: 'api'
method: MetacelloAbstractVersionConstructor
package: packageName with: aBlockOrString
    "Define specification for package <packageName>.
	 If <aBlockOrString> is a String (or Symbol), the String is expected to be a version (or symbolic version).
	If <aBlockOrString> is a Block, the specifications in <aBlockOrString> are applied to the project:
	
		spec package: 'MyPackage' with: '1.0'.
		
		spec package: 'MyPackage' with: [
			spec file:'MyPackage-dkh.1'.
			spec repository: '/opt/gemstone/repository'.
	 "

    self root @env2: package: packageName with: aBlockOrString constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
packageForVersion: aString
    | spec |
    spec := self project packageSpec
        name: aString;
        yourself.
    self root packages add: spec
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
packageForVersion: aString overrides: aBlock
    | spec |
    spec := self project packageSpec
        name: aString;
        yourself.
    self root packages add: spec.
    self with: spec during: aBlock
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
packageForVersion: packageName with: aBlockOrString
    aBlockOrString setPackage: packageName withInMetacelloConfig: self
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
postLoadDoIt: aSymbol
    self root @env2: postLoadDoIt: aSymbol constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
postLoadDoItForPackage: aSymbol
    self postLoadDoItForSpec: aSymbol
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
postLoadDoItForProject: aSymbol
    self postLoadDoItForSpec: aSymbol
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
postLoadDoItForSpec: aSymbol
    self validateDoItSelector: aSymbol.
    self root postLoadDoIt: aSymbol
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
postLoadDoItForVersion: aSymbol
    self postLoadDoItForSpec: aSymbol
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
preLoadDoIt: aSymbol
    self root @env2: preLoadDoIt: aSymbol constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
preLoadDoItForPackage: aSymbol
    self preLoadDoItForSpec: aSymbol
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
preLoadDoItForProject: aSymbol
    self preLoadDoItForSpec: aSymbol
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
preLoadDoItForSpec: aSymbol
    self validateDoItSelector: aSymbol.
    self root preLoadDoIt: aSymbol
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
preLoadDoItForVersion: aSymbol
    self preLoadDoItForSpec: aSymbol
%

category: 'accessing'
method: MetacelloAbstractVersionConstructor
project
    project == nil
        ifTrue: [ project := self projectClass new ].
    ^ project
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
project: aString
    self root @env2: project: aString constructor: self
%

category: 'api'
method: MetacelloAbstractVersionConstructor
project: aString copyFrom: oldSpecName with: aBlock
    self root
        @env2: project: aString
        copyFrom: oldSpecName
        with: aBlock
        constructor: self
%

category: 'api'
method: MetacelloAbstractVersionConstructor
project: aString overrides: aBlock
    self root @env2: project: aString overrides: aBlock constructor: self
%

category: 'api'
method: MetacelloAbstractVersionConstructor
project: aString with: aBlockOrString
    self root @env2: project: aString with: aBlockOrString constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
projectForVersion: aString
  self project: aString with: ''
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
projectForVersion: aString copyFrom: oldSpecName with: aBlock
    | spec projectSpec |
    projectSpec := self project projectSpec
        name: aString;
        yourself.
    spec := self project projectReferenceSpec
        name: aString;
        projectReference: projectSpec;
        yourself.
    self root packages copy: oldSpecName to: spec.
    self with: projectSpec during: aBlock
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
projectForVersion: aString overrides: aBlock
    | spec projectSpec |
    projectSpec := self project projectSpec
        name: aString;
        yourself.
    spec := self project projectReferenceSpec
        name: aString;
        projectReference: projectSpec;
        yourself.
    self root packages add: spec.
    self with: projectSpec during: aBlock
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
projectForVersion: aString with: aBlockOrString
    aBlockOrString setProject: aString withInMetacelloConfig: self
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
projectPackage: aBlock
    "projectPackage spec data folded into project spec"

    self root @env2: projectPackage: aBlock constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
projectPackageForProject: aBlock
    self with: self root during: aBlock
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
removeGroup: aString
    self root @env2: removeGroup: aString constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
removeGroupForVersion: aString
    | spec |
    spec := self project groupSpec
        name: aString;
        yourself.
    self root packages remove: spec
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
removePackage: aString
    self root @env2: removePackage: aString constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
removePackageForVersion: aString
    | spec |
    spec := self project packageSpec
        name: aString;
        yourself.
    self root packages remove: spec
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
removeProject: aString
    self root @env2: removeProject: aString constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
removeProjectForVersion: aString
    | spec |
    spec := self project projectReferenceSpec
        name: aString;
        yourself.
    self root packages remove: spec
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
repositories: aBlock
    self root @env2: repositories: aBlock constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
repositoriesForPackage: aBlock
    self repositoriesForSpec: aBlock
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
repositoriesForProject: aBlock
    self repositoriesForSpec: aBlock
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
repositoriesForSpec: aBlock
    self with: self root repositories during: aBlock
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
repositoriesForVersion: aBlock
    self repositoriesForSpec: aBlock
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
repository: anObject
    self root @env2: repository: anObject constructor: self
%

category: 'api'
method: MetacelloAbstractVersionConstructor
repository: description username: username password: password
    self root
        @env2: repository: description
        username: username
        password: password
        constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
repositoryForPackage: anObject
    self repositoryForSpec: anObject
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
repositoryForPackage: aString username: username password: password
    self repositoryForSpec: aString username: username password: password
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
repositoryForProject: anObject
    self repositoryForSpec: anObject
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
repositoryForProject: aString username: username password: password
    self repositoryForSpec: aString username: username password: password
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
repositoryForRepositories: anObject
    self repositoryForSpec: anObject
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
repositoryForRepositories: aString username: username password: password
    self repositoryForVersion: aString username: username password: password
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
repositoryForSpec: anObject
    self root repository: anObject
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
repositoryForSpec: aString username: username password: password
    self root repository: aString username: username password: password
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
repositoryForVersion: anObject
    self repositoryForSpec: anObject
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
repositoryForVersion: aString username: username password: password
    self repositoryForSpec: aString username: username password: password
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
requires: anObject
    self root @env2: requires: anObject constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
requiresForPackage: anObject
    self root requires: anObject
%

category: 'initialization'
method: MetacelloAbstractVersionConstructor
reset
    attributeMap := attributeOrder := nil
%

set compile_env: 0

category: 'accessing'
method: MetacelloAbstractVersionConstructor
root

	^root
%

set compile_env: 2

category: 'accessing'
method: MetacelloAbstractVersionConstructor
root

	^root
%

category: 'accessing'
method: MetacelloAbstractVersionConstructor
root: aMetacelloSpec
    root := aMetacelloSpec
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setAuthorWithBlock: aBlock

	| spec |
	(spec := self root getAuthor) == nil
		ifTrue: [ 
			spec := self project valueHolderSpec.
			self root setAuthor: spec ].
	self with: spec during: aBlock
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setAuthorWithString: aString

	self root author: aString
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setBaseline: aString
    | spec projectSpec |
    projectSpec := self project baselineOfProjectSpec
        name: aString;
        className: 'BaselineOf' , aString;
        yourself.
    spec := self project projectReferenceSpec
        name: aString;
        projectReference: projectSpec;
        yourself.
    self root packages merge: spec.
    ^ projectSpec
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setBaseline: aString withBlock: aBlock
    | projectSpec |
    projectSpec := self setBaseline: aString.
    self with: projectSpec during: aBlock
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setBlessingWithBlock: aBlock

	| spec |
	(spec := self root getBlessing) == nil
		ifTrue: [ 
			spec := self project valueHolderSpec.
			self root setBlessing: spec ].
	self with: spec during: aBlock
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setBlessingWithString: aString

	self root blessing: aString
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setConfiguration: aString withBlock: aBlock
    | spec projectSpec |
    projectSpec := self project configurationOfProjectSpec
        name: aString;
        yourself.
    spec := self project projectReferenceSpec
        name: aString;
        projectReference: projectSpec;
        yourself.
    self root packages merge: spec.
    self with: projectSpec during: aBlock
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setDescriptionWithBlock: aBlock

	| spec |
	(spec := self root getDescription) == nil
		ifTrue: [ 
			spec := self project valueHolderSpec.
			self root setDescription: spec ].
	self with: spec during: aBlock
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setDescriptionWithString: aString

	self root description: aString
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setFor: attributeList do: aBlock
    "conditional version support"

    attributeList asMetacelloAttributeList
        do: [ :attribute | 
            | blockList |
            blockList := self attributeMap
                at: attribute
                ifAbsent: [ self attributeMap at: attribute put: (blockList := OrderedCollection new) ].
            blockList add: aBlock.
            self addAttribute: attribute ]
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setFor: attributeList version: aString
    "conditional symbolicVersion support"

    attributeList asMetacelloAttributeList
        do: [ :attribute | 
            self attributeMap at: attribute put: aString.
            self addAttribute: attribute ]
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setPackage: aString withBlock: aBlock

	| spec |
	spec := 
		(self project packageSpec)
			name: aString;
			yourself.
	self root packages merge: spec.
	self with: spec during: aBlock
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setPackage: aString withString: aFile

	| spec |
	spec := 
		(self project packageSpec)
			name: aString;
			file: aFile;
			yourself.
	self root packages merge: spec.
%

category: 'accessing'
method: MetacelloAbstractVersionConstructor
setProject: aProject

	project := aProject
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setProject: aString withBlock: aBlock
    | spec projectSpec |
    projectSpec := self project projectSpec
        name: aString;
        yourself.
    spec := self project projectReferenceSpec
        name: aString;
        projectReference: projectSpec;
        yourself.
    self root packages merge: spec.
    self with: projectSpec during: aBlock
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setProject: aString withString: versionString

	| spec projectSpec |
	projectSpec := 
		(self project projectSpec)
			name: aString;
			versionString: versionString;
			yourself.
	spec := 
		(self project projectReferenceSpec)
			name: aString;
			projectReference: projectSpec;
			yourself.
	self root packages merge: spec.
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setTimestampWithBlock: aBlock

	| spec |
	(spec := self root getTimestamp) == nil
		ifTrue: [ 
			spec := self project valueHolderSpec.
			self root setTimestamp: spec ].
	self with: spec during: aBlock
%

category: 'api callbacks'
method: MetacelloAbstractVersionConstructor
setTimestampWithString: aString

	self root timestamp: aString
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
supplyingAnswers: aCollection
    self root @env2: supplyingAnswers: aCollection constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
supplyingAnswersForPackage: anObject
    self root answers: anObject
%

category: 'accessing'
method: MetacelloAbstractVersionConstructor
symbolicVersion

	^symbolicVersion
%

category: 'accessing'
method: MetacelloAbstractVersionConstructor
symbolicVersion: aSymbol

	symbolicVersion := aSymbol
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
timestamp: aBlockOrStringOrDateAndTime
    "Define timestamp field of version spec (MetacelloMCVersionSpec).
	 If <aBlockOrStringOrDateAndTime> is a String, the version spec timetamp is set to the String.
	 If <aBlockOrStringOrDateAndTime> is a DateAndTime, the version spec timetamp is set to the printString of the DateAndTime.
	If <aBlockOrStringOrDateAndTime> is a Block, the specifications in <aBlockOrStringOrDateAndTime> are applied to the timestamp spec (MetacelloValueHolderSpec). Not Recommended!
	
		spec timestamp: '10/7/2009 14:40'.
		
		spec timestamp: DateAndTime now'.
		
		spec timestamp: [
			spec value: '10/7/2009 14:40'. ].
    "

    self root @env2: timestamp: aBlockOrStringOrDateAndTime constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
timestampForVersion: aBlockOrStringOrDateAndTime
    aBlockOrStringOrDateAndTime setTimestampInMetacelloConfig: self
%

category: 'validation'
method: MetacelloAbstractVersionConstructor
validateDoItSelector: anObject
  anObject == nil
    ifTrue: [ ^ self ].
  (MetacelloPlatform current isSymbol: anObject)
    ifFalse: [ self error: 'Invalid message selector for doit: ' , anObject printString ]
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
value: anObject
    self root @env2: value: anObject constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
valueForValueHolder: anObject
    self root value: anObject
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
version: anObject
    self root @env2: version: anObject constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
versionForProject: anObject
    self versionStringForProject: anObject
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
versionForVersion: anObject
    self versionStringForVersion: anObject
%

set compile_env: 0

category: 'api'
method: MetacelloAbstractVersionConstructor
versionString: anObject
    self root @env2: versionString: anObject constructor: self
%

set compile_env: 2

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
versionStringForProject: anObject
    self root versionString: anObject
%

category: 'api spec callbacks'
method: MetacelloAbstractVersionConstructor
versionStringForVersion: anObject
    self versionStringForProject: anObject
%

category: 'private'
method: MetacelloAbstractVersionConstructor
with: aMetacelloSpec during: aBlock
    | previousRoot |
    previousRoot := self root.
    self root: aMetacelloSpec.
    aBlock
        ensure: [ self root: previousRoot ]
%

! Class Implementation for MetacelloBaselineConstructor

! ------------------- Class methods for MetacelloBaselineConstructor

category: 'instance creation'
classmethod: MetacelloBaselineConstructor
on: aConfig
    ^ self new
        on: aConfig;
        yourself
%

category: 'instance creation'
classmethod: MetacelloBaselineConstructor
on: aConfig project: aProject
    ^ self new
        on: aConfig project: aProject;
        yourself
%

! ------------------- Instance methods for MetacelloBaselineConstructor

category: 'private'
method: MetacelloBaselineConstructor
calculate: aConfig project: aProject
  | pragma versionMap versionSpec |
  self configuration: aConfig.
  pragma := self extractBaselinePragmaFor: aConfig class.
  self setProject: (aProject ifNil: [ [ aConfig class project ]
            on: MessageNotUnderstood
            do: [ :ex | ex return: nil ] ]).
  versionSpec := self project versionSpec.
  self root: versionSpec.
  self evaluatePragma: pragma.
  versionMap := Dictionary new.
  self project configuration: aConfig.
  self project attributes do: [ :attribute | | blockList |
      (blockList := self attributeMap at: attribute ifAbsent: [  ]) ~~ nil
        ifTrue: [ blockList do: [ :block | self with: versionSpec during: block ] ] ].
  versionSpec versionString: self project singletonVersionName.
  versionMap at: versionSpec versionString put: versionSpec createVersion.
  self project map: versionMap
%

category: 'pragma extraction'
method: MetacelloBaselineConstructor
extractBaselinePragmaFor: aClass
  | pragmas |
  pragmas := Pragma allNamed: #'baseline' in: aClass.
  pragmas isEmpty
    ifTrue: [ ^ nil ].
  ^ pragmas first
%

category: 'initialization'
method: MetacelloBaselineConstructor
on: aConfig
    self calculate: aConfig project: nil
%

category: 'initialization'
method: MetacelloBaselineConstructor
on: aConfig project: aProject
    self calculate: aConfig project: aProject
%

! Class Implementation for MetacelloToolBoxConstructor

! ------------------- Instance methods for MetacelloToolBoxConstructor

category: 'private'
method: MetacelloToolBoxConstructor
evaluateMethodSection: methodSection version: sourceVersionString
	| versionSpec |
	versionSpec := self project versionSpec.
	versionSpec versionString: sourceVersionString.
	methodSection versionSpec: versionSpec.
	currentSection := methodSection.
	self with: versionSpec during: methodSection block.
	methodSection methodSections do: [ :ms | self evaluateMethodSection: ms version: sourceVersionString ]
%

category: 'extraction'
method: MetacelloToolBoxConstructor
extractMethodSectionsFor: sourceVersionString
	| coll pragma |
	coll := self extractAllVersionPragmas at: sourceVersionString ifAbsent: [ ^ #() ].
	coll size > 1
		ifTrue: [ self error: 'More than one pragma defining ' , sourceVersionString printString ].
	pragma := coll at: 1.
	self evaluatePragma: pragma.
	self methodSections do: [ :methodSection | self evaluateMethodSection: methodSection version: sourceVersionString ].
%

category: 'extraction'
method: MetacelloToolBoxConstructor
extractSymbolicVersionSpecsFor: sourceVersionSymbol
	| coll pragma |
	coll := self extractSymbolicVersionPragmas at: sourceVersionSymbol ifAbsent: [ ^ #() ].
	coll size > 1
		ifTrue: [ self error: 'More than one pragma defining ' , sourceVersionSymbol printString ].
	pragma := coll at: 1.
	self evaluatePragma: pragma.
	^ self methodSections
%

category: 'private'
method: MetacelloToolBoxConstructor
methodSection: methodSection do: aBlock

	methodSection methodSections do: aBlock.
	methodSection methodSections do: [ :ms | self methodSection: ms do: aBlock ]
%

category: 'private'
method: MetacelloToolBoxConstructor
methodSection: methodSection inEvaluationOrder: attributes do: aBlock
    | selected |
    selected := IdentitySet new.
    attributes
        do: [ :attribute | 
            methodSection methodSections
                do: [ :ms | 
                    (ms attributes includes: attribute)
                        ifTrue: [ selected add: ms ] ] ].
    selected do: aBlock.
    attributes size == 1
        ifTrue: [ ^ self ].
    selected
        do: [ :ms | self methodSection: ms inEvaluationOrder: (attributes copyFrom: 2 to: attributes size) do: aBlock ]
%

category: 'accessing'
method: MetacelloToolBoxConstructor
methodSectionAttributes
    | attributes |
    attributes := Set new.
    self methodSectionsDo: [ :methodSection | attributes addAll: methodSection attributes ].
    ^ attributes
%

category: 'private'
method: MetacelloToolBoxConstructor
methodSections

	methodSections == nil ifTrue: [ methodSections := OrderedCollection new ].
	^methodSections
%

category: 'enumeration'
method: MetacelloToolBoxConstructor
methodSectionsDo: aBlock

	self methodSection: self do: aBlock
%

category: 'enumeration'
method: MetacelloToolBoxConstructor
methodSectionsInEvaluationOrder: attributes do: aBlock
    "breadth first traversal ... to collect selected sections, then evaluate individual sections in attribute order"

    | selected processed |
    selected := IdentitySet new.
    self methodSection: self inEvaluationOrder: attributes do: [ :methodSection | selected add: methodSection ].
    processed := IdentitySet new.
    attributes
        do: [ :attribute | 
            | list |
            list := OrderedCollection new.
            selected
                do: [ :methodSection | 
                    (processed includes: methodSection)
                        ifFalse: [ 
                            (methodSection attributes includes: attribute)
                                ifTrue: [ 
                                    list add: methodSection.
                                    processed add: methodSection ] ] ].
            list do: aBlock ]
%

category: 'initialization'
method: MetacelloToolBoxConstructor
reset
	super reset.	"not needed, but included for completeness"
	methodSections := nil
%

category: 'api callbacks'
method: MetacelloToolBoxConstructor
setFor: attributeList do: aBlock
    "conditional version support"

    | methodSection |
    methodSection := MetacelloVersionMethodSection new
        attributes: attributeList asMetacelloAttributeList;
        block: aBlock;
        yourself.
    currentSection ~~ nil
        ifTrue: [ currentSection addMethodSection: methodSection ]
        ifFalse: [ self methodSections add: methodSection ]
%

category: 'api callbacks'
method: MetacelloToolBoxConstructor
setFor: attributeList version: aString
    "conditional symbolicVersion support"

    self methodSections
        add:
            (MetacelloSymbolicVersionSpec new
                attributes: attributeList asMetacelloAttributeList;
                versionString: aString;
                yourself)
%

! Class Implementation for MetacelloToolBoxBaselineConstructor

! ------------------- Instance methods for MetacelloToolBoxBaselineConstructor

category: 'private'
method: MetacelloToolBoxBaselineConstructor
evaluateBaselineMethodSection: methodSection
  | versionSpec |
  versionSpec := self project versionSpec.
  methodSection versionSpec: versionSpec.
  currentSection := methodSection.
  self with: versionSpec during: methodSection block.
  methodSection methodSections
    do: [ :ms | self evaluateBaselineMethodSection: ms ]
%

category: 'pragma extraction'
method: MetacelloToolBoxBaselineConstructor
extractBaselinePragmaFor: aClass
    | pragmas |
    pragmas := Pragma allNamed: #'baseline' in: aClass.
    pragmas isEmpty
        ifTrue: [ ^ self error: 'No #baseline pragma found' ].
    ^ pragmas first
%

category: 'extraction'
method: MetacelloToolBoxBaselineConstructor
extractMethodSectionsFor: aBaselineClass
  self shouldNotImplement
%

category: 'extraction'
method: MetacelloToolBoxBaselineConstructor
extractMethodSectionsForClass: aBaselineClass
  | pragma |
  pragma := self extractBaselinePragmaFor: aBaselineClass.
  self evaluatePragma: pragma.
  self methodSections
    do: [ :methodSection | self evaluateBaselineMethodSection: methodSection ]
%

! Class Implementation for MetacelloVersionConstructor

! ------------------- Class methods for MetacelloVersionConstructor

category: 'instance creation'
classmethod: MetacelloVersionConstructor
on: aConfig

	^(self new)
		on: aConfig;
		yourself
%

category: 'instance creation'
classmethod: MetacelloVersionConstructor
on: aConfig project: aProject

	^(self new)
		on: aConfig project: aProject;
		yourself
%

category: 'deprecated'
classmethod: MetacelloVersionConstructor
spawnPackageMethodIn: aConfig category: methodCategory named: newSelector sourceVersion: sourceVersionString targetVersion: targetVersionString blessing: blessing

	self deprecated: 'see MetacelloToolBox class>>createDevelopment:for:importFromBaseline:description: for a similar example'.
	^self new
		spawnPackageMethodIn: aConfig 
		category: methodCategory 
		named: newSelector
		sourceVersion: sourceVersionString 
		targetVersion: targetVersionString
		blessing: blessing
%

category: 'deprecated'
classmethod: MetacelloVersionConstructor
spawnPackageMethodIn: aConfig named: newSelector sourceVersion: sourceVersionString targetVersion: targetVersionString

	self deprecated: 'see MetacelloToolBox class>>createDevelopment:for:importFromBaseline:description: for a similar example'.
	^self 
		spawnPackageMethodIn: aConfig 
		category: 'versions'
		named: newSelector 
		sourceVersion: sourceVersionString 
		targetVersion: targetVersionString 
		blessing: #development
%

category: 'deprecated'
classmethod: MetacelloVersionConstructor
spawnPackageMethodIn: aConfig named: newSelector sourceVersion: sourceVersionString targetVersion: targetVersionString blessing: blessing

	self deprecated: 'see MetacelloToolBox class>>createDevelopment:for:importFromBaseline:description: for a similar example'.
	^self new
		spawnPackageMethodIn: aConfig 
		category: 'versions'
		named: newSelector 
		sourceVersion: sourceVersionString 
		targetVersion: targetVersionString
		blessing: blessing
%

category: 'deprecated'
classmethod: MetacelloVersionConstructor
updatePackageMethodIn: aConfig sourceVersion: sourceVersionString

	self deprecated: 'see MetacelloToolBox class>>updateDevelopment:for:updateProjects:description: for a similar example'.
	^self new
		updatePackageMethodIn: aConfig 
		sourceVersion: sourceVersionString
%

! ------------------- Instance methods for MetacelloVersionConstructor

category: 'initialization'
method: MetacelloVersionConstructor
calculate: aConfig project: aProject
  | versionMap symbolicVersionMap executionBlock pragmaDict |
  self setProject: aProject.
  self configuration: aConfig.
  versionMap := Dictionary new.
  symbolicVersionMap := Dictionary new.
  executionBlock := self specResolverBlock.
  self
    collectAllVersionsFromVersionPragmasInto: versionMap
    using: executionBlock.
  pragmaDict := self extractVersionImportPragmas.
  self verifyVersionImportPragmas: pragmaDict definedIn: versionMap.
  self
    collectAllVersionsFromVersionImportPragmasInto: versionMap
    using: executionBlock
    satisfiedPragmas: pragmaDict.
  self
    collectAllSymbolicVersionsFromVersionPragmasInto: symbolicVersionMap
    using: self symbolicVersionResolverBlock.
  self project map: versionMap.
  self project errorMap: self errorMap.
  self project symbolicVersionMap: symbolicVersionMap.
  self project configuration: aConfig.	"now that we have a nearly complete project, we can collect the defaultSymbolicVersions, which expect the project to be fully constructed"
  self
    collectDefaultSymbolicVersionsFromVersionPragmasFrom:
      self extractDefaultSymbolicVersionPragmas
    into: symbolicVersionMap
    using: self defaultSymbolicVersionResolverBlock.	"Pick up defaults from MetacelloBaseConfiguration"
  self
    collectDefaultSymbolicVersionsFromVersionPragmasFrom:
      self extractCommonDefaultSymbolicVersionPragmas
    into: symbolicVersionMap
    using: self commonDefaultSymbolicVersionResolverBlock.	"now resolive symbolicVersions defined as symbolicVersions"
  symbolicVersionMap copy
    keysAndValuesDo: [ :symbolic :original | 
      | versionString visited |
      versionString := original.
      visited := Set new.
      [ 
      visited add: versionString.
      (MetacelloPlatform current isSymbol: versionString)
        and: [ versionString ~~ #'notDefined' ] ]
        whileTrue: [ 
          versionString := symbolicVersionMap
            at: versionString
            ifAbsent: [ self error: 'Cannot resolve symbolic version ' , original printString ].
          (visited includes: versionString)
            ifTrue: [ self error: 'Loop detected resolving symbolic version ' , original printString ] ].
      symbolicVersionMap at: symbolic put: versionString ]
%

category: 'private'
method: MetacelloVersionConstructor
collectAllSymbolicVersionsFromVersionPragmasInto: symbolicVersionMap using: executionBlock
	| defined versionPragmaDict versionString |
	versionPragmaDict := self extractSymbolicVersionPragmas.
	versionPragmaDict
		keysAndValuesDo: [ :versionSymbol :pragmaColl | 
			defined := false.
			pragmaColl
				do: [ :pragma | 
					defined := true.
					versionString := executionBlock value: versionSymbol value: pragma ].
			defined
				ifTrue: [ 
					versionString == nil
						ifFalse: [ symbolicVersionMap at: versionSymbol put: versionString ]].
			self reset ]
%

category: 'private'
method: MetacelloVersionConstructor
collectAllVersionsFromVersionImportPragmasInto: versionMap using: executionBlock satisfiedPragmas: pragmaDict
    | defined done completed count |
    done := false.
    completed := IdentitySet new.
    count := 0.
    [ 
    count := count + 1.
    count > 10000
        ifTrue: [ self error: 'Apparent loop in import expansion' ].
    done ]
        whileFalse: [ 
            done := true.
            pragmaDict
                keysAndValuesDo: [ :versionString :pragmaColl | 
                    | versionSpec |
                    versionSpec := nil.
                    defined := false.
                    [ 
                    pragmaColl
                        do: [ :pragma | 
                            (completed includes: pragma)
                                ifFalse: [ 
                                    | imports |
                                    done := false.
                                    imports := pragma argumentAt: 2.
                                    imports
                                        detect: [ :importedVersion | (versionMap includesKey: importedVersion) not ]
                                        ifNone: [ 
                                            imports
                                                do: [ :importedVersion | 
                                                    | version |
                                                    (version := versionMap at: importedVersion ifAbsent: [  ]) ~~ nil
                                                        ifTrue: [ 
                                                            defined := true.
                                                            completed add: pragma.
                                                            versionSpec == nil
                                                                ifTrue: [ versionSpec := version spec copy ]
                                                                ifFalse: [ versionSpec := versionSpec mergeSpec: version spec copy ].
                                                            versionSpec versionString: versionString.
                                                            executionBlock value: versionSpec value: pragma ] ] ] ] ] ]
                        on: Error
                        do: [ :ex | 
                            (MetacelloErrorInProjectConstructionNotification versionString: versionSpec versionString exception: ex)
                                ifTrue: [ ^ ex pass ]
                                ifFalse: [ 
                                    self errorMap at: versionSpec versionString put: ex.
                                 
                                    defined := false ] ].
                    defined
                        ifTrue: [ 
                            | version importedVersions |
                            importedVersions := OrderedCollection new.
                            version := versionSpec createVersion.
                            pragmaColl do: [ :pragma | importedVersions addAll: (pragma argumentAt: 2) ].
                            version importedVersions: importedVersions.
                            self validateVersionString: versionString againstSpec: versionSpec.
                            versionMap at: versionSpec versionString put: version ].
                    self reset ] ]
%

category: 'private'
method: MetacelloVersionConstructor
collectAllVersionsFromVersionPragmasInto: versionMap using: executionBlock
    | defined versionPragmaDict |
    versionPragmaDict := self extractVersionPragmas.
    versionPragmaDict
        keysAndValuesDo: [ :versionString :pragmaColl | 
            | versionSpec |
            versionSpec := self project versionSpec.
            versionSpec versionString: versionString.
            defined := false.
            [ 
            pragmaColl
                do: [ :pragma | 
                    executionBlock value: versionSpec value: pragma.
                    defined := true ] ]
                on: Error
                do: [ :ex | 
                    (MetacelloErrorInProjectConstructionNotification versionString: versionSpec versionString exception: ex)
                        ifTrue: [ ^ ex pass ]
                        ifFalse: [ 
                            self errorMap at: versionSpec versionString put: ex.
                            defined := false ] ].
            defined
                ifTrue: [ 
                    self validateVersionString: versionString againstSpec: versionSpec.
                    versionMap at: versionSpec versionString put: versionSpec createVersion ].
            self reset ]
%

category: 'private'
method: MetacelloVersionConstructor
collectDefaultSymbolicVersionsFromVersionPragmasFrom: versionPragmaDict into: symbolicVersionMap using: executionBlock
	| defined versionString |
	versionPragmaDict
		keysAndValuesDo: [ :versionSymbol :pragmaColl | 
			defined := false.
			symbolicVersionMap
				at: versionSymbol
				ifAbsent: [ 
					"process the defaultSymbolicVersion only if the symbolicVersion is not defined yet"
					pragmaColl
						do: [ :pragma | 
							defined := true.
							versionString := executionBlock value: versionSymbol value: pragma ].
					defined
						ifTrue: [ 
							versionString == nil
								ifFalse: [ symbolicVersionMap at: versionSymbol put: versionString ] ].
					self reset ] ]
%

category: 'private'
method: MetacelloVersionConstructor
commonDefaultSymbolicVersionResolverBlock
	^ self defaultSymbolicVersionResolverBlock: (ConfigurationOf new project: self project)
%

category: 'private'
method: MetacelloVersionConstructor
defaultSymbolicVersionResolverBlock
	^ self defaultSymbolicVersionResolverBlock: self configuration
%

category: 'private'
method: MetacelloVersionConstructor
defaultSymbolicVersionResolverBlock: receiver
	^ [ :symbolicVrsn :pragma | 
	| result |
	result := nil.
	(pragma argumentAt: 1) = symbolicVrsn
		ifTrue: [ 
			self symbolicVersion: symbolicVrsn.
			result := [ receiver perform: pragma selector env: 2 withArguments: {} ] on: MetacelloVersionDoesNotExistError do: [ :ex | ex return: nil ] ].
	result ]
%

category: 'accessing'
method: MetacelloVersionConstructor
errorMap
    errorMap ifNil: [ errorMap := Dictionary new ].
    ^ errorMap
%

category: 'initialization'
method: MetacelloVersionConstructor
on: aConfig

	| cacheKey |
	cacheKey := aConfig class.
	project := MetacelloPlatform current
		stackCacheFor: #versionConstructor
		at: cacheKey
		doing: [ :cache | 
			self calculate: aConfig project: nil.
			cache at: cacheKey put:  self project ].
	self setProject: project.
%

category: 'initialization'
method: MetacelloVersionConstructor
on: aConfig project: aProject
    | cacheKey cachedProject |
    cacheKey := aConfig class.
    cachedProject := MetacelloPlatform current
        stackCacheFor: #'versionConstructor'
        at: cacheKey
        doing: [ :cache | 
            self calculate: aConfig project: aProject.
            cache at: cacheKey put: self project.
            ^ self ].
    aProject map: cachedProject map.
    aProject errorMap: cachedProject errorMap.
    aProject symbolicVersionMap: cachedProject symbolicVersionMap.
    aProject configuration: aConfig.
    self setProject: aProject
%

category: 'deprecated'
method: MetacelloVersionConstructor
prepareForMethodUpdate: aConfig sourceVersion: sourceVersionString forceUpdate: forceUpdate generating: generateBlock
	| pragmaDict versionSpecs pragmaMap updatedPackageSpecs updatedPackageSpecsMap reversed pragmaColl seenUpdatedPackageSpecs |
	self deprecated: 'see MetacelloToolBox for replacement methods'.
	self configuration: aConfig.
	versionSpecs := Dictionary new.
	pragmaMap := Dictionary new.
	pragmaDict := self extractAllVersionPragmas.
	pragmaColl := pragmaDict at: sourceVersionString ifAbsent: [ ^ self ].
	pragmaColl
		do: [ :pragma | 
			| specs versionSpec |
			specs := Dictionary new.
			self evaluatePragma: pragma.
			self attributeMap
				keysAndValuesDo: [ :attribute :blockList | 
					versionSpec := self project versionSpec.
					versionSpec versionString: sourceVersionString.
					specs at: attribute put: versionSpec.
					blockList do: [ :block | self with: versionSpec during: block ] ].
			versionSpecs
				at: pragma selector
				put:
					{specs.
					(self attributeOrder).
					nil}.
			pragmaMap at: pragma selector put: pragma.
			self reset ].
	versionSpecs
		keysAndValuesDo: [ :selector :ar | 
			updatedPackageSpecsMap := Dictionary new.
			seenUpdatedPackageSpecs := Dictionary new.
			ar at: 3 put: updatedPackageSpecsMap.
			reversed := aConfig project attributes reverse.
			reversed
				do: [ :attribute | 
					| vs |
					(vs := (ar at: 1) at: attribute ifAbsent: [  ]) ~~ nil
						ifTrue: [ 
							updatedPackageSpecs := forceUpdate
								ifTrue: [ vs forceUpdatedPackageSpecs ]
								ifFalse: [ vs updatedPackageSpecs ].
							updatedPackageSpecs associations
								do: [ :assoc | 
									| filename |
									(filename := seenUpdatedPackageSpecs at: assoc key ifAbsent: [  ]) == nil
										ifTrue: [ 
											assoc value == #uptodate
												ifTrue: [ 
													"#uptodate means that the spec is up-to-date and we mark it as
										 seen so that the spec is not update for a 'later' spec"
													seenUpdatedPackageSpecs at: assoc key put: #uptodate ]
												ifFalse: [ seenUpdatedPackageSpecs at: assoc key put: assoc value file ] ]
										ifFalse: [ 
											"if the spec was already seen as up-to-date or the file is the same as 
								 the one already seen don't propogate the file"
											(filename == #uptodate or: [ assoc value == #uptodate or: [ filename = assoc value file ] ])
												ifTrue: [ updatedPackageSpecs removeKey: assoc key ] ] ].
							updatedPackageSpecsMap at: attribute put: updatedPackageSpecs ] ].	"clear out #uptodate markers"
			updatedPackageSpecsMap
				valuesDo: [ :d | 
					d associations
						do: [ :assoc | 
							assoc value == #uptodate
								ifTrue: [ d removeKey: assoc key ] ] ].	"remove shadowed packages"
			1 to: reversed size do: [ :index | 
				| attribute d |
				attribute := reversed at: index.
				((d := updatedPackageSpecsMap at: attribute ifAbsent: [  ]) ~~ nil and: [ d keys size > 0 ])
					ifTrue: [ 
						index + 1 to: reversed size do: [ :shadowIndex | 
							d
								keysDo: [ :key | 
									| dict |
									(dict := updatedPackageSpecsMap at: (reversed at: shadowIndex) ifAbsent: [  ]) ~~ nil
										ifTrue: [ dict removeKey: key ifAbsent: [  ] ] ] ] ] ].
			updatedPackageSpecsMap keys
				do: [ :key | 
					| d |
					d := updatedPackageSpecsMap at: key.
					d isEmpty
						ifTrue: [ updatedPackageSpecsMap removeKey: key ] ].	"ready to generate source for method"
			generateBlock
				value: selector
				value: pragmaMap
				value: ar
				value: updatedPackageSpecsMap ]
%

category: 'deprecated'
method: MetacelloVersionConstructor
spawnPackageMethodIn: aConfig category: methodCategory named: newSelector sourceVersion: sourceVersionString targetVersion: targetVersionString blessing: blessing

	self deprecated: 'see MetacelloToolBox class>>createBaseline:for:from:description: for replacement method'.
	self 
		prepareForMethodUpdate: aConfig 
		sourceVersion: sourceVersionString 
		forceUpdate: blessing ~~ #baseline
		generating: [:selector :pragmaMap :ar :updatedPackageSpecsMap | | strm |
			strm := WriteStream on: String new.
			strm 
				nextPutAll: newSelector asString, ' spec'; cr;
				tab; nextPutAll: 
						'<version: ', 
						targetVersionString printString, 
						' imports: #(', sourceVersionString printString, 
						')>';cr.
			(ar at: 2) do: [:attribute | | vs d |
				vs := (ar at: 1) at: attribute.
				(d := updatedPackageSpecsMap at: attribute ifAbsent: []) ~~ nil
					ifTrue: [ 
						vs packagesSpec list do: [:member | | x |
							x := d at: member spec name ifAbsent: [].
						 	member spec updateForSpawnMethod: x ]]
					ifFalse: [
						vs packagesSpec list do: [:member |
							member spec updateForSpawnMethod: member spec copy ]].
				strm cr; tab; nextPutAll: 'spec for: ', attribute printString, ' do: ['; cr.
				attribute == #common
					ifTrue: [
						vs 
							author: MetacelloPlatform current authorName;
							timestamp: MetacelloPlatform current timestamp.
						blessing ~~ nil
							ifTrue: [ vs blessing: blessing ]].
				vs configSpawnMethodOn: strm indent: 2.
				strm nextPutAll: '].'].
				(aConfig class	
					compile: strm contents
					classified: methodCategory) == nil 
						ifTrue: [ self error: 'Error compiling the method' ]].
	^true
%

category: 'private'
method: MetacelloVersionConstructor
specResolverBlock
	^ [ :versionSpec :pragma | 
	(pragma argumentAt: 1) = versionSpec versionString
		ifTrue: [ 
			self evaluatePragma: pragma.
			self project attributes
				do: [ :attribute | 
					| blockList |
					(blockList := self attributeMap at: attribute ifAbsent: [  ]) ~~ nil
						ifTrue: [ blockList do: [ :block | self with: versionSpec during: block ] ] ] ] ]
%

category: 'private'
method: MetacelloVersionConstructor
symbolicVersionResolverBlock
	^ [ :symbolicVrsn :pragma | 
	| result |
	result := nil.
	(pragma argumentAt: 1) = symbolicVrsn
		ifTrue: [ 
			self symbolicVersion: symbolicVrsn.
			self evaluatePragma: pragma.
			self project attributes
				do: [ :attribute | 
					| versionString |
					versionString := self attributeMap at: attribute ifAbsent: [  ].
					versionString ~~ nil
						ifTrue: [ result := versionString ] ] ].
	result ]
%

category: 'deprecated'
method: MetacelloVersionConstructor
updatePackageMethodIn: aConfig sourceVersion: sourceVersionString

	self deprecated: 'see MetacelloToolBox class>>updateDevelopment:for:updateProjects:description: for replacement method'.
	self 
		prepareForMethodUpdate: aConfig 
		sourceVersion: sourceVersionString 
		forceUpdate: false
		generating: [:selector :pragmaMap :ar :updatedPackageSpecsMap | | strm pragma |
			updatedPackageSpecsMap isEmpty ifTrue: [ ^false ].
			strm := WriteStream on: String new.
			strm 
				nextPutAll: selector asString, ' spec'; cr;
				tab; nextPutAll: '<version: ', sourceVersionString printString.
			pragma := pragmaMap at: selector.
			pragma numArgs = 2
				ifTrue: [
					strm nextPutAll: ' imports: #('.
					(pragma argumentAt: 2) do: [:versionString |
						strm nextPutAll: versionString printString; space ]].
			strm nextPutAll: ')>';cr.
			(ar at: 2) do: [:attribute | | vs d |
				vs := (ar at: 1) at: attribute.
				(d := updatedPackageSpecsMap at: attribute ifAbsent: []) ~~ nil
					ifTrue: [ 
						vs packagesSpec list do: [:member | 
							member spec file ~~ nil
								ifTrue: [ | x |
									(((x := d at: member spec name ifAbsent: []) ~~ nil) and: [ x ~~ #uptodate ])
						 				ifTrue: [ member spec file: x file ]]]].
				strm cr; tab; nextPutAll: 'spec for: ', attribute printString, ' do: ['; cr.
				attribute == #common
					ifTrue: [ 
						vs 
							author: MetacelloPlatform current authorName;
							timestamp: MetacelloPlatform current timestamp ].
				vs configMethodOn: strm indent: 2.
				strm nextPutAll: '].'].
			(aConfig class	
					compile: strm contents
					classified: (aConfig class whichCategoryIncludesSelector: pragma selector)) == nil
						ifTrue: [ self error: 'Error compiling the method' ]].
	^true
%

category: 'validation'
method: MetacelloVersionConstructor
validateVersionString: versionString againstSpec: versionSpec

	versionString = versionSpec versionString
		ifFalse: [ 
			MetacelloValidationNotification
				signal:
					(MetacelloValidationError
						configurationClass: self configurationClass
						reasonCode: #incorrectVersionString
						callSite: #validateVersionString:againstSpec
						explanation:
							'The version declared in the pragma ', versionString printString , ' does not match the version in the spec '
								, versionSpec versionString printString) ].
%

category: 'private'
method: MetacelloVersionConstructor
verifyVersionImportPragmas: pragmaDict definedIn: versionMap
    pragmaDict copy
        keysAndValuesDo: [ :versionString :pragmaColl | 
            [ 
            pragmaColl
                do: [ :pragma | 
                    (pragma argumentAt: 2)
                        do: [ :importedVersion | 
                            versionMap
                                at: importedVersion
                                ifAbsent: [ 
                                    pragmaDict
                                        at: importedVersion
                                        ifAbsent: [ 
                                            ^ self
                                                error:
                                                    'The imported version:' , importedVersion printString , ' for version: ' , versionString
                                                        , ' referenced from the method: ' , pragma selector printString
                                                        , ' in configuration ' , configuration class printString
                                                        , ' has not been defined.' ] ] ] ] ]
                on: Error
                do: [ :ex | 
                    (MetacelloErrorInProjectConstructionNotification versionString: versionString exception: ex)
                        ifTrue: [ ^ ex pass ]
                        ifFalse: [ 
                            pragmaDict removeKey: versionString.
                            self errorMap at: versionString put: ex ] ] ]
%

! Class Implementation for MetacelloVersionValidator

! ------------------- Class methods for MetacelloVersionValidator

category: 'accessing'
classmethod: MetacelloVersionValidator
descriptionForReasonCode: reasonCode
	^ self reasonCodeDescriptions at: reasonCode ifAbsent: [ self error: 'Unknown reasonCode: ' , reasonCode printString ]
%

category: 'private'
classmethod: MetacelloVersionValidator
populateReasonCodeDescriptions
    "update MetacelloMCVersionValidator class comment to include any changes to descriptions"

    | dict |
    dict := Dictionary new.
    dict
        at: #'onlyBaselineVersion'
        put: 'one or more baseline versions have been defined, but no non-baseline versions are defined.'.
    dict
        at: #'duplicateVersionDefinitions' put: 'there are multiple pragma methods specifying the same version.';
        at: #'packageNameMismatch' put: 'the name in the packageSpec does not match the name of the mcz file.';
        at: #'projectClassNameFileMismatch'
            put: 'the class name of the configuration does not match the mcz file containing the configuration.';
        at: #'cannotResolveVersion'
            put: 'the version (project reference or symbolic version) was not found in the specified configuration.'.
    dict
        at: #'duplicateNames'
            put: 'multiple independent definitions for an entity with same name (project, package, or group).';
        at: #'incompleteProjectSpec' put: 'missing required fields in project reference (repository, className).';
        at: #'incorrectVersionString' put: 'the version declared in pragma doesn''t match version in versionSpec.';
        at: #'invalidDoItSelector' put: 'doit select must be a Symbol.';
        at: #'invalidVersionString' put: 'versionString must be a String.';
        at: #'missingVersionImport' put: 'version specified in import pragma not defined in configuration.';
        at: #'noVersionsDefined'
            put: 'no usable baseline or version defined in configuration ... configuration cannot be loaded.';
        at: #'projectCreationError' put: 'error occured while resolving project reference.';
        at: #'versionCreationError'
            put:
                'error occured while resolving version specification, error will be thrown if an attempt is made to use the version.';
        at: #'shadowedNames' put: 'name duplication between packages and projects.';
        at: #'versionCompositionError' put: 'error while creating versionSpec from pragmas.'.
    ^ dict
%

category: 'accessing'
classmethod: MetacelloVersionValidator
reasonCodeDescriptions

	reasonCodeDescriptions ifNil: [ reasonCodeDescriptions := self populateReasonCodeDescriptions ].
	^reasonCodeDescriptions
%

category: 'instance creation'
classmethod: MetacelloVersionValidator
validateBaseline: baselineClass
  ^ self validateBaseline: baselineClass debug: #() recurse: false
%

category: 'instance creation'
classmethod: MetacelloVersionValidator
validateBaseline: baselineClass debug: debugList recurse: aBool
  ^ (self new
    configurationClass: baselineClass;
    debug: debugList;
    recurse: aBool;
    yourself) validateBaselineOf
%

category: 'instance creation'
classmethod: MetacelloVersionValidator
validateBaseline: baselineClass recurse: aBool
  ^ self validateBaseline: baselineClass debug: #() recurse: aBool
%

category: 'instance creation'
classmethod: MetacelloVersionValidator
validateConfiguration: configurationClass

	^self validateConfiguration: configurationClass debug: #() recurse: false
%

category: 'instance creation'
classmethod: MetacelloVersionValidator
validateConfiguration: configurationClass debug: debugList recurse: aBool
	^ ((self new)
		configurationClass: configurationClass;
		debug: debugList;
		recurse: aBool;
		yourself) validate
%

category: 'instance creation'
classmethod: MetacelloVersionValidator
validateConfiguration: configurationClass recurse: aBool

	^self validateConfiguration: configurationClass debug: #() recurse: aBool
%

category: 'instance creation'
classmethod: MetacelloVersionValidator
validateProject: aMetacelloProject

	^self validateProject: aMetacelloProject debug: #() recurse: false
%

category: 'instance creation'
classmethod: MetacelloVersionValidator
validateProject: aMetacelloProject debug: debugList recurse: aBool
	^ ((self new)
		recurse: aBool;
		debug: debugList;
		configurationClass: aMetacelloProject configuration class;
		yourself) validateProject: aMetacelloProject
%

category: 'instance creation'
classmethod: MetacelloVersionValidator
validateProject: aMetacelloProject recurse: aBool

	^self validateProject: aMetacelloProject debug: #() recurse: aBool
%

category: 'instance creation'
classmethod: MetacelloVersionValidator
validateProject: aMetacelloProject version: versionString

	^self validateProject: aMetacelloProject version: versionString debug: #() recurse: false
%

category: 'instance creation'
classmethod: MetacelloVersionValidator
validateProject: aMetacelloProject version: versionString debug: debugList

	^self validateProject: aMetacelloProject version: versionString debug: debugList recurse: false
%

category: 'instance creation'
classmethod: MetacelloVersionValidator
validateProject: aMetacelloProject version: versionString debug: debugList recurse: aBool

	^ ((self new)
		configurationClass: aMetacelloProject configuration class;
		debug: debugList;
		recurse: aBool;
		yourself) validateProject: aMetacelloProject version: versionString
%

category: 'instance creation'
classmethod: MetacelloVersionValidator
validateProject: aMetacelloProject version: versionString debug: debugList recurse: aBool visited: visitied

	^(self new
		configurationClass: aMetacelloProject configuration class;
		debug: debugList;
		recurse: aBool;
		visited: visitied;
		yourself) validateProject: aMetacelloProject version: versionString
%

! ------------------- Instance methods for MetacelloVersionValidator

category: 'accessing'
method: MetacelloVersionValidator
configurationClass
	^ configurationClass
%

category: 'accessing'
method: MetacelloVersionValidator
configurationClass: anObject
	configurationClass := anObject
%

category: 'private'
method: MetacelloVersionValidator
criticalWarningReasonCodes
    ^ #(#'packageNameMismatch' #'projectClassNameFileMismatch' #'duplicateVersionDefinitions')
%

category: 'accessing'
method: MetacelloVersionValidator
debug

	debug == nil ifTrue: [ debug := #() ].
	^ debug
%

category: 'accessing'
method: MetacelloVersionValidator
debug: aCollection
	"Any combination of: #error, #criticalWarning, #warning"

	debug := aCollection
%

category: 'private'
method: MetacelloVersionValidator
errorReasonCodes
    ^ #(#'duplicateNames' #'shadowedNames' #'invalidDoItSelector' #'invalidVersionString' #'missingVersionImport' #'projectCreationError' #'noVersionsDefined' #'cannotResolveVersion' #'incompleteProjectSpec' #'incorrectVersionString' #'versionCompositionError' #'versionCreationError')
%

category: 'accessing'
method: MetacelloVersionValidator
exludededValidations

	exludededValidations == nil ifTrue: [ exludededValidations := self extractExcludedValidations ].
	^exludededValidations
%

category: 'pragma extraction'
method: MetacelloVersionValidator
extractExcludedValidations

	| exclusionDict |
	exclusionDict := Dictionary new.
	(Pragma 
		allNamed: #excludedValidationIssues:
		in: self configurationClass) do: [:pragma | | exclusions |
			exclusions := pragma argumentAt: 1.
			1 to: exclusions size by: 2 do: [:index |
			exclusionDict 
				at: (exclusions at: index) 
				put: (exclusions at: index + 1) ]].
	^exclusionDict
%

category: 'accessing'
method: MetacelloVersionValidator
recordValidationCriticalWarning: aString callSite: callSite reasonCode: aSymbol

	^self recordValidationCriticalWarning: aString versionString: nil callSite: callSite reasonCode: aSymbol
%

category: 'accessing'
method: MetacelloVersionValidator
recordValidationCriticalWarning: aString versionString: versionString callSite: callSite reasonCode: aSymbol
	"reasonCodes:
		#packageNameMismatch
		#projectClassNameFileMismatch
		#duplicateVersionDefinitions
		#duplicateAttributeBlocks
	"

	(self criticalWarningReasonCodes includes: aSymbol)
		ifFalse: [ self error: 'Unknown critical warning reason code' ].
	((self exludededValidations at: versionString ifAbsent: [ #() ]) includes: aSymbol)
		ifTrue: [ ^self ].
	(self debug includes: #criticalWarning) ifTrue: [ self halt: 'Debug triggered for critical warning: ', aString ].
	self validationReport
		add:
			(MetacelloValidationCriticalWarning
				configurationClass:
					(self recurse
						ifTrue: [ self configurationClass ]
						ifFalse: [ nil ])
				reasonCode: aSymbol
				callSite: callSite
				explanation: aString)
%

category: 'accessing'
method: MetacelloVersionValidator
recordValidationError: aString callSite: callSite reasonCode: aSymbol

	^self recordValidationError: aString versionString: nil callSite: callSite reasonCode: aSymbol
%

category: 'accessing'
method: MetacelloVersionValidator
recordValidationError: aString versionString: versionString callSite: callSite reasonCode: aSymbol
	"reasonCodes:
		#noVersionForSymbolicVersion
		#duplicateNames
		#shadowedNames
		#invalidDoItSelector
		#invalidVersionString
		#missingVersionImport
		#projectCreationError
		#noVersionsDefined
		#cannotResolveVersion
		#incompleteProjectSpec
		#incorrectVersionString
	"

	(self errorReasonCodes includes: aSymbol)
		ifFalse: [ self error: 'Unknown error reason code' ].
	((self exludededValidations at: versionString ifAbsent: [ #() ]) includes: aSymbol)
		ifTrue: [ ^self ].
	(self debug includes: #error) ifTrue: [ self halt: 'Debug triggered for error: ', aString ].
	self validationReport
		add:
			(MetacelloValidationError
				configurationClass:
					(self recurse
						ifTrue: [ self configurationClass ]
						ifFalse: [ nil ])
				reasonCode: aSymbol
				callSite: callSite
				explanation: aString)
%

category: 'accessing'
method: MetacelloVersionValidator
recordValidationWarning: aString callSite: callSite reasonCode: aSymbol

				
	^self recordValidationWarning: aString versionString: nil callSite: callSite reasonCode: aSymbol
%

category: 'accessing'
method: MetacelloVersionValidator
recordValidationWarning: aString versionString: versionString callSite: callSite reasonCode: aSymbol
	"reasonCodes:
		#onlyBaselineVersion
		#noVersionSpecified
	"

	(self warningReasonCodes includes: aSymbol)
		ifFalse: [ self error: 'Unknown warning reason code' ].
	((self exludededValidations at: versionString ifAbsent: [ #() ]) includes: aSymbol)
		ifTrue: [ ^self ].
	(self debug includes: #warning) ifTrue: [ self halt: 'Debug triggered for critical warning: ', aString ].
	self validationReport
		add:
			(MetacelloValidationWarning
				configurationClass:
					(self recurse
						ifTrue: [ self configurationClass ]
						ifFalse: [ nil ])
				reasonCode: aSymbol
				callSite: callSite
				explanation: aString)
%

category: 'accessing'
method: MetacelloVersionValidator
recurse
	recurse == nil ifTrue: [ recurse := false ].
	^ recurse
%

category: 'accessing'
method: MetacelloVersionValidator
recurse: anObject
	recurse := anObject
%

category: 'validation'
method: MetacelloVersionValidator
validate
	"Issue 5: 
		[]no shadowing of names across project/package/group boundaries
	 Issue 6: 
		[]package version supplied for each package
		[]no released (stable/bleedingEdge) versions (only development version)
		package spec used instead of project spec in baseline (ConfigurationOfPharo-DaleHenrichs.50)
	Issue 20:
		[]pre and post load doits must be symbols, not blocks
	Others:
		[]symbolic versions can be resolved.
		[]Ensure that versions are Strings and symbolic versions are symbols.
	 	[]Ensure that imported versions are defined."

	self validatePragmas.
	^self validateProject
%

category: 'validation'
method: MetacelloVersionValidator
validateBaselineOf
  self validatePragmas.
  ^ self validateBaselineProject
%

category: 'private'
method: MetacelloVersionValidator
validateBaselineProject
  | project |
  project := self
    validateProjectCreationFrom: self configurationClass
    onError: [ :ex | 
      self
        recordValidationError:
          'Error creating project: ' , ex description
            , ' to reproduce evalutate the following: '''
            , self configurationClass name asString , ' project'''
        callSite: #'validateBaselineProject'
        reasonCode: #'projectCreationError'.
      ^ self validationReport ].
  ^ self validateBaselineProject: project
%

category: 'validation'
method: MetacelloVersionValidator
validateBaselineProject: project
  | version spec |
  (self visited includes: project configuration class)
    ifTrue: [ ^ self validationReport ].
  self visited add: project configuration class.
  version := project version.
  spec := version spec.
  [ self validateBaselineVersionSpec: spec ]
    on: Error
    do: [ :ex | 
      self
        recordValidationError:
          'Error composing version ' , version versionString printString , ': '
            , ex description
        versionString: version versionString
        callSite: #'validateBaselineProject:'
        reasonCode: #'versionCompositionError' ].
  ^ self validationReport
%

category: 'private'
method: MetacelloVersionValidator
validateBaselineVersionSpec: versionSpec

	self subclassResponsibility
%

category: 'private'
method: MetacelloVersionValidator
validateDoIts: aSpec versionString: versionString errorMessage: errorMessage
  | ar |
  ar := {#'preLoadDoIt'.
  'preLoadDoIt selector for '.
  #'postLoadDoIt'.
  'postLoadDoIt selector for '}.
  1 to: ar size by: 2 do: [ :i | 
    | selector |
    selector := (aSpec perform: (ar at: i) env: 2 withArguments: {}) value.
    selector ~~ nil
      ifTrue: [ 
        (MetacelloPlatform current isSymbol: selector)
          ifFalse: [ 
            self
              recordValidationError:
                (ar at: i + 1) , errorMessage , ' is not a symbol'
              versionString: versionString
              callSite: #'validateDoIts:versionString:errorMessage:'
              reasonCode: #'invalidDoItSelector' ] ] ]
%

category: 'private'
method: MetacelloVersionValidator
validatePragmas
  "Ensure that versions are Strings and symbolic versions are symbols.
	 Ensure that imported versions are defined"

  | versionPragmas versionImportPragmas symbolicVersionPragmas versionStrings platform |
  platform := MetacelloPlatform current.
  versionPragmas := self extractVersionPragmas.
  versionImportPragmas := self extractVersionImportPragmas.
  symbolicVersionPragmas := self extractSymbolicVersionPragmas.
  versionStrings := Set new.
  versionPragmas keys , versionImportPragmas keys , symbolicVersionPragmas keys
    do: [ :versionString | 
      (versionStrings includes: versionString)
        ifTrue: [ 
          self
            recordValidationCriticalWarning:
              'version ' , versionString printString , ' is defined multiple times.'
            versionString: versionString
            callSite: #'validatePragmas'
            reasonCode: #'duplicateVersionDefinitions' ]
        ifFalse: [ versionStrings add: versionString ] ].
  versionPragmas
    keysAndValuesDo: [ :versionString :pragmaList | 
      (platform isString: versionString)
        ifFalse: [ 
          self
            recordValidationError:
              'version ' , versionString printString , ' is not a String.'
            versionString: versionString
            callSite: #'validatePragmas'
            reasonCode: #'invalidVersionString' ].
      pragmaList size > 1
        ifTrue: [ 
          self
            recordValidationCriticalWarning:
              'version ' , versionString printString , ' is defined multiple times.'
            versionString: versionString
            callSite: #'validatePragmas'
            reasonCode: #'duplicateVersionDefinitions' ] ].
  symbolicVersionPragmas
    keysAndValuesDo: [ :versionString :pragmaList | 
      (MetacelloPlatform current isSymbol: versionString)
        ifFalse: [ 
          self
            recordValidationError:
              'symbolic version ' , versionString printString , ' is not a Symbol.'
            versionString: versionString
            callSite: #'validatePragmas'
            reasonCode: #'invalidVersionString' ].
      pragmaList size > 1
        ifTrue: [ 
          self
            recordValidationCriticalWarning:
              'version ' , versionString printString , ' is defined multiple times.'
            versionString: versionString
            callSite: #'validatePragmas'
            reasonCode: #'duplicateVersionDefinitions' ] ].
  versionImportPragmas
    keysAndValuesDo: [ :versionString :pragmaList | 
      (platform isString: versionString)
        ifFalse: [ 
          self
            recordValidationError:
              'version ' , versionString printString , ' is not a String.'
            versionString: versionString
            callSite: #'validatePragmas'
            reasonCode: #'invalidVersionString' ].
      pragmaList size > 1
        ifTrue: [ 
          self
            recordValidationCriticalWarning:
              'version ' , versionString printString , ' is defined multiple times.'
            versionString: versionString
            callSite: #'validatePragmas'
            reasonCode: #'duplicateVersionDefinitions' ].
      pragmaList
        do: [ :versionImportPragma | 
          (versionImportPragma arguments at: 2)
            do: [ :importedVersionString | 
              (versionStrings includes: importedVersionString)
                ifFalse: [ 
                  self
                    recordValidationError:
                      'version ' , importedVersionString printString
                        , ' referenced in import list of version '
                        , versionString printString , ' has not been defined.'
                    versionString: versionString
                    callSite: #'validatePragmas'
                    reasonCode: #'missingVersionImport' ] ] ] ]
%

category: 'private'
method: MetacelloVersionValidator
validateProject
	| project |
	project := self
		validateProjectCreationFrom: self configurationClass
		onError: [ :ex | 
			self
				recordValidationError:
					'Error creating project: ' , ex description , ' to reproduce evalutate the following: '''
						, self configurationClass name asString , ' project'''
				callSite: #validateProject
				reasonCode: #projectCreationError.
			^ self validationReport ].
	^ self validateProject: project
%

category: 'validation'
method: MetacelloVersionValidator
validateProject: project
	| hasNoBaseline hasNoVersion |
	(self visited includes: project configuration class)
		ifTrue: [ ^ self validationReport ].
	self visited add: project configuration class.
	hasNoBaseline := hasNoVersion := true.
	project versions
		do: [ :version | 
			| spec |
			spec := version spec.
			[ 
			spec blessing value == #baseline
				ifTrue: [ 
					hasNoBaseline := false.
					self validateBaselineVersionSpec: spec ]
				ifFalse: [ 
					hasNoVersion := false.
					self validateVersionSpec: spec ] ]
				on: Error
				do: [ :ex | 
					self
						recordValidationError: 'Error composing version ' , version versionString printString , ': ' , ex description
						versionString: version versionString
						callSite: #validateProject:
						reasonCode: #versionCompositionError ] ].
	project symbolicVersionMap keys
		do: [ :symbolicVersion | 
			| version |
			version := [ project version: symbolicVersion ]
				on: Error , MetacelloSymbolicVersionNotDefinedError
				do: [ :ex | 
					"MetacelloSymbolicVersionNotDefinedError are explicitly not defined, so are not validation errors"
					(ex isKindOf: MetacelloSymbolicVersionNotDefinedError)
						ifFalse: [ 
							self
								recordValidationError:
									'symbolic version ' , symbolicVersion printString , ' does not resolve to a literal version.'
								callSite: #validatePragmas
								reasonCode: #cannotResolveVersion ].
					ex return: nil ].
			version ~~ nil
				ifTrue: [ self validateVersionSpecForSymbolicVersion: version spec symbolicVersion: symbolicVersion ] ].
	hasNoVersion
		ifTrue: [ 
			hasNoBaseline
				ifTrue: [ 
					self
						recordValidationError: 'No usable baseline or versions defined.'
						callSite: #validatePragmas
						reasonCode: #noVersionsDefined ]
				ifFalse: [ 
					self
						recordValidationWarning: 'Only baseline defined (no version defined).'
						callSite: #validatePragmas
						reasonCode: #onlyBaselineVersion ] ].
	^ self validationReport
%

category: 'validation'
method: MetacelloVersionValidator
validateProject: project version: versionString
	| version spec |
	(self visited includes: project configuration class)
		ifTrue: [ ^ self validationReport ].
	self visited add: project configuration class.
	[ version := project version: versionString ]
		on: Error
		do: [ :ex | 
			self
				recordValidationError: 'Could not resolve version ' , versionString printString , ' due to error: ' , ex description
				versionString: versionString
				callSite: #validateProject:version:
				reasonCode: #cannotResolveVersion.
			^ self validationReport ].
	spec := version spec.
	[ 
	spec blessing value == #baseline
		ifTrue: [ self validateBaselineVersionSpec: spec ]
		ifFalse: [ self validateVersionSpec: spec ] ]
		on: Error
		do: [ :ex | 
			self
				recordValidationError: 'Error composing version ' , version versionString printString , ': ' , ex description
				versionString: version versionString
				callSite: #validateProject:version:
				reasonCode: #versionCompositionError ].
	^ self validationReport
%

category: 'private'
method: MetacelloVersionValidator
validateProjectCreationFrom: aConfigurationClass onError: aBlock
    [ ^ aConfigurationClass project ]
        on: Error , MetacelloValidationNotification , MetacelloErrorInProjectConstructionNotification
        do: [ :ex | 
            (ex isKindOf: MetacelloValidationNotification)
                ifTrue: [ 
                    self validationReport add: ex issue.
                    ex resume ].
            (ex isKindOf: MetacelloErrorInProjectConstructionNotification)
                ifTrue: [ 
                    self
                        recordValidationError:
                            'Error creating version: ' , ex versionString , ' error: ' , ex exception description
                                , ' to reproduce evalutate the following: ''[' , self configurationClass name asString
                                ,
                                    ' project ] on: MetacelloErrorInProjectConstructionNotification do: [:ex | ex resume: true ]'''
                        callSite: #'validateProjectCreationFrom:onError:'
                        reasonCode: #'versionCreationError'.
                    ex resume: false ].
            ^ aBlock value: ex ]
%

category: 'private'
method: MetacelloVersionValidator
validateProjectVersion: versionString
	| project |
	project := self
		validateProjectCreationFrom: self configurationClass
		onError: [ :ex | 
			self
				recordValidationError:
					'Error creating project: ' , ex description , ' to reproduce evalutate the following: '''
						, self configurationClass name asString , ' project'''
				callSite: #validateProject
				reasonCode: #projectCreationError.
			^ self validationReport ].
	^ self validateProject: project version: versionString
%

category: 'private'
method: MetacelloVersionValidator
validateVersionSpec: versionSpec

	self subclassResponsibility
%

category: 'private'
method: MetacelloVersionValidator
validateVersionSpecForSymbolicVersion: versionSpec symbolicVersion: symbolicVersionString

	self subclassResponsibility
%

category: 'accessing'
method: MetacelloVersionValidator
validationReport
	
	validationReport == nil ifTrue: [ validationReport := OrderedCollection new ].
	^ validationReport
%

category: 'accessing'
method: MetacelloVersionValidator
validationReport: anObject
	validationReport := anObject
%

category: 'accessing'
method: MetacelloVersionValidator
visited

	visited == nil ifTrue: [ visited := IdentitySet new ].
	^visited
%

category: 'accessing'
method: MetacelloVersionValidator
visited: anIdentitySet

	visited := anIdentitySet
%

category: 'private'
method: MetacelloVersionValidator
warningReasonCodes
	^ #(#onlyBaselineVersion )
%

! Class Implementation for MetacelloMethodSection

! ------------------- Instance methods for MetacelloMethodSection

category: 'accessing'
method: MetacelloMethodSection
attribute
    self deprecated: 'Use attributes instead'.
    self attributes size > 1
        ifTrue: [ self error: 'invalid use of attribute' ].
    self attributes isEmpty
        ifTrue: [ ^ nil ].
    ^ self attributes first
%

category: 'accessing'
method: MetacelloMethodSection
attribute: anObject
    self deprecated: 'Use attributes: instead'.
    self attributes size > 1
        ifTrue: [ self error: 'invalid use of attribute:' ].
    attributes := OrderedCollection with: anObject
%

category: 'printing'
method: MetacelloMethodSection
attributePrintString
    | stream |
    stream := WriteStream on: String new.
    self attributes size = 1
        ifTrue: [ stream nextPutAll: '#' , attributes first asString printString ]
        ifFalse: [ 
            stream nextPutAll: '#('.
            self attributes
                do: [ :attribute | 
                    stream
                        nextPutAll: '#' , attribute asString printString;
                        space ].
            stream nextPut: $) ].
    ^ stream contents
%

category: 'accessing'
method: MetacelloMethodSection
attributes
    attributes ifNil: [ attributes := OrderedCollection new ].
    ^ attributes
%

category: 'accessing'
method: MetacelloMethodSection
attributes: aCollectionOrSymbol
    attributes := aCollectionOrSymbol asMetacelloAttributeList
%

category: 'testing'
method: MetacelloMethodSection
includesAttributeFrom: attributeCollection
    ^ (attributeCollection asSet intersection: self attributes asSet) notEmpty
%

! Class Implementation for MetacelloSymbolicVersionSpec

! ------------------- Instance methods for MetacelloSymbolicVersionSpec

category: 'accessing'
method: MetacelloSymbolicVersionSpec
versionString
	^ versionString
%

category: 'accessing'
method: MetacelloSymbolicVersionSpec
versionString: anObject
	versionString := anObject
%

! Class Implementation for MetacelloVersionMethodSection

! ------------------- Instance methods for MetacelloVersionMethodSection

category: 'accessing'
method: MetacelloVersionMethodSection
addMethodSection: methodSection

	methodSection parent: self.
	self methodSections add: methodSection
%

category: 'accessing'
method: MetacelloVersionMethodSection
attributeOrPath
    ^ self parent == nil
        ifTrue: [ 
            self attributes size == 1
                ifTrue: [ self attributes first ]
                ifFalse: [ self attributes ] ]
        ifFalse: [ self attributePath ]
%

category: 'accessing'
method: MetacelloVersionMethodSection
attributePath
    | path |
    path := MetacelloMethodSectionPath with: self attributes.
    ^ self parent == nil
        ifTrue: [ path ]
        ifFalse: [ self parent attributePath , path ]
%

category: 'accessing'
method: MetacelloVersionMethodSection
block
	^ block
%

category: 'accessing'
method: MetacelloVersionMethodSection
block: anObject
	block := anObject
%

category: 'accessing'
method: MetacelloVersionMethodSection
methodSections

	methodSections ifNil: [ methodSections := OrderedCollection new ].
	^methodSections
%

category: 'accessing'
method: MetacelloVersionMethodSection
parent
	^ parent
%

category: 'accessing'
method: MetacelloVersionMethodSection
parent: anObject
	parent := anObject
%

category: 'accessing'
method: MetacelloVersionMethodSection
printOn: aStream
  aStream
    nextPutAll: self class name asString;
    nextPut: $(.
  self versionSpec printOn: aStream.
  aStream nextPut: $)
%

category: 'accessing'
method: MetacelloVersionMethodSection
topParent
	self parent == nil
		ifTrue: [ ^ self ].
	^ self parent topParent
%

category: 'accessing'
method: MetacelloVersionMethodSection
versionSpec
	^ versionSpec
%

category: 'accessing'
method: MetacelloVersionMethodSection
versionSpec: anObject
	versionSpec := anObject
%

! Class Implementation for MetacelloMethodSpec

! ------------------- Instance methods for MetacelloMethodSpec

category: 'accessing'
method: MetacelloMethodSpec
category
	^ category
%

category: 'accessing'
method: MetacelloMethodSpec
category: anObject
	category := anObject
%

category: 'method generation'
method: MetacelloMethodSpec
compileMethod

	(project configuration class
		compile: self methodSource
		classified: self category) == nil
		ifTrue: [ self error: 'Error compiling the method' ]
%

category: 'accessing'
method: MetacelloMethodSpec
methodSections

	methodSections == nil ifTrue: [ methodSections := OrderedCollection new ].
	^ methodSections
%

category: 'accessing'
method: MetacelloMethodSpec
methodSections: anObject
	methodSections := anObject
%

category: 'method generation'
method: MetacelloMethodSpec
methodSource

	self subclassResponsibility
%

category: 'accessing'
method: MetacelloMethodSpec
project
	^ project
%

category: 'accessing'
method: MetacelloMethodSpec
project: anObject
	project := anObject
%

category: 'accessing'
method: MetacelloMethodSpec
selector
	^ selector
%

category: 'accessing'
method: MetacelloMethodSpec
selector: anObject
	selector := anObject
%

category: 'accessing'
method: MetacelloMethodSpec
versionString
	^ versionString
%

category: 'accessing'
method: MetacelloMethodSpec
versionString: aStringOrSymbol
	versionString := aStringOrSymbol
%

! Class Implementation for MetacelloSymbolicVersionMethodSpec

! ------------------- Instance methods for MetacelloSymbolicVersionMethodSpec

category: 'adding'
method: MetacelloSymbolicVersionMethodSpec
addMethodSection: attribute versionString: aString
    self methodSections
        add:
            (MetacelloSymbolicVersionSpec new
                attributes: attribute asMetacelloAttributeList;
                versionString: aString;
                yourself)
%

category: 'method generation'
method: MetacelloSymbolicVersionMethodSpec
methodSource
  | strm |
  strm := WriteStream on: String new.
  self
    symbolicMethodSelectorAndPragma: self selector
    symbolicVersionSymbol: self versionString
    on: strm.
  (MetacelloPlatform current
    sort: self methodSections asArray
    with: [ :a :b | a attributes first <= b attributes first ])
    do: [ :methodSection | 
      | vs |
      strm
        cr;
        tab;
        nextPutAll:
            'spec for: ' , methodSection attributePrintString , ' version: '.
      vs := methodSection versionString.
      (MetacelloPlatform current isSymbol: vs)
        ifTrue: [ strm nextPut: $# ].
      strm
        nextPutAll: vs asString printString , '.';
        cr ].
  ^ strm contents
%

category: 'method generation'
method: MetacelloSymbolicVersionMethodSpec
symbolicMethodSelectorAndPragma: aSelector symbolicVersionSymbol: symbolicVersionSymbol on: strm
	strm
		nextPutAll: aSelector asString , ' spec';
		cr;
		tab;
		nextPutAll: '<symbolicVersion: #' , symbolicVersionSymbol asString printString;
		nextPutAll: '>';
		cr
%

category: 'accessing'
method: MetacelloSymbolicVersionMethodSpec
versionString: aStringOrSymbol
  (MetacelloPlatform current isSymbol: aStringOrSymbol)
    ifFalse: [ 
      self
        error:
          'Version symbol ' , aStringOrSymbol printString
            , ' for symbolic version method must be a Symbol' ].
  super versionString: aStringOrSymbol
%

! Class Implementation for MetacelloVersionMethodSpec

! ------------------- Instance methods for MetacelloVersionMethodSpec

category: 'adding'
method: MetacelloVersionMethodSpec
addMethodSection: attributePath versionSpec: versionSpec
    | attributeList methodSection index sections found |
    attributeList := attributePath last.
    methodSection := MetacelloVersionMethodSection new
        attributes: attributeList;
        versionSpec: versionSpec;
        yourself.
    attributePath size > 1
        ifTrue: [ 
            index := 1.
            sections := self methodSections.
            found := true.
            [ found ]
                whileTrue: [ 
                    found := false.
                    sections
                        do: [ :ms | 
                            ms attributes = (attributePath at: index)
                                ifTrue: [ 
                                    index == (attributePath size -1)
                                        ifTrue: [ 
                                            ms methodSections add: methodSection.
                                            ^ self ].
                                    sections := ms methodSections.
                                    index := index + 1.
                                    found := true ] ] ].
            self error: 'Method section for attribute: ' , (attributePath at: index) printString , ' not found.' ]
        ifFalse: [ self methodSections add: methodSection ]
%

category: 'adding'
method: MetacelloVersionMethodSpec
findMethodSection: attributeOrPath sectionIndex: sectionIndex
    | attributePath index sections found |
    attributePath := attributeOrPath asMetacelloAttributePath.
    index := 1.
    sections := self methodSections.
    found := true.
    [ found ]
        whileTrue: [ 
            found := false.
            sections
                do: [ :ms | 
                    ms attributes = (attributePath at: index)
                        ifTrue: [ 
                            index == attributePath size
                                ifTrue: [ ^ ms ].
                            sections := ms methodSections.
                            index := index + 1.
                            found := true ] ] ].
    self error: 'Method section for attribute: ' , attributePath printString , ' not found.'
%

category: 'accessing'
method: MetacelloVersionMethodSpec
imports
	imports == nil ifTrue: [ imports := #() ].
	^ imports
%

category: 'accessing'
method: MetacelloVersionMethodSpec
imports: anObject
	imports := anObject
%

category: 'private'
method: MetacelloVersionMethodSpec
methodSection: methodSection pre: preBlock last: last post: postBlock indent: indent
	| list |
	methodSection ~~ self
		ifTrue: [ preBlock value: methodSection value: indent ].
	list := methodSection methodSections.
	1 to: list size
		do: [ :index | | ms | 
			ms := list at: index.
			self
				methodSection: ms
				pre: preBlock
				last: index ~= list size
				post: postBlock
				indent: indent + 1 ].
	methodSection ~~ self
		ifTrue: [ postBlock value: methodSection value: indent value: last ]
%

category: 'method generation'
method: MetacelloVersionMethodSpec
methodSelectorAndPragma: aSelector imports: importList versionString: aString on: strm
	strm
		nextPutAll: aSelector asString , ' spec';
		cr;
		tab;
		nextPutAll: '<version: ' , aString printString.
	importList notEmpty
		ifTrue: [ 
			strm nextPutAll: ' imports: #('.
			importList
				do: [ :importVersionString | 
					strm
						nextPutAll: importVersionString printString;
						space ].
			strm nextPut: $) ].
	strm
		nextPutAll: '>';
		cr
%

category: 'method generation'
method: MetacelloVersionMethodSpec
methodSource
  | strm |
  strm := WriteStream on: String new.
  self
    methodSelectorAndPragma: self selector
    imports: self imports
    versionString: self versionString
    on: strm.
  self
    methodSection: self
    pre: [ :methodSection :indent | 
      strm cr.
      indent timesRepeat: [ strm tab ].
      strm
        nextPutAll: 'spec for: ' , methodSection attributePrintString , ' do: [';
        cr.
      methodSection versionSpec
        configMethodOn: strm
        last: methodSection methodSections isEmpty
        indent: indent + 1 ]
    last: false
    post: [ :methodSection :indent :last | 
      strm nextPutAll: ' ].'.
      (last
        or: [ indent = 1 or: [ methodSection methodSections isEmpty and: [ indent = 1 ] ] ])
        ifTrue: [ strm cr ] ]
    indent: 0.
  ^ strm contents
%

category: 'accessing'
method: MetacelloVersionMethodSpec
versionString: aStringOrSymbol
  (MetacelloPlatform current isSymbol: aStringOrSymbol)
    ifTrue: [ 
      self
        error:
          'Version string ' , aStringOrSymbol printString
            , ' for version method must be a String' ].
  super versionString: aStringOrSymbol
%

! Class Implementation for MetacelloBaselineOfMethodSpec

! ------------------- Instance methods for MetacelloBaselineOfMethodSpec

category: 'method generation'
method: MetacelloBaselineOfMethodSpec
methodSelectorAndPragma: aSelector imports: importList on: strm
  strm
    nextPutAll: aSelector asString , ' spec';
    cr;
    tab;
    nextPutAll: '<baseline>'
%

category: 'method generation'
method: MetacelloBaselineOfMethodSpec
methodSource
  | strm |
  strm := WriteStream on: String new.
  self methodSelectorAndPragma: self selector imports: self imports on: strm.
  self
    methodSection: self
    pre: [ :methodSection :indent | 
      strm cr.
      indent timesRepeat: [ strm tab ].
      strm
        nextPutAll: 'spec for: ' , methodSection attributePrintString , ' do: [';
        cr.
      methodSection versionSpec
        configMethodOn: strm
        last: methodSection methodSections isEmpty
        indent: indent + 1 ]
    last: false
    post: [ :methodSection :indent :last | 
      strm nextPutAll: ' ].'.
      (last
        or: [ indent = 1 or: [ methodSection methodSections isEmpty and: [ indent = 1 ] ] ])
        ifTrue: [ strm cr ] ]
    indent: 0.
  ^ strm contents
%

! Class Implementation for MetacelloPlatform

! ------------------- Class methods for MetacelloPlatform

category: 'accessing'
classmethod: MetacelloPlatform
current
	PlatformClassAssociation ifNotNil: [:platformClassAssoc | 
	"When Metacello is installed as SystemUser in GemStone, each user must have an instance of the platform class stored in UserGlobals."
	^ platformClassAssoc value current ].
	Current ifNil: [
		"Expect Current to be set by #select --- MetacelloPlatform is not functional by itself"
		Current := MetacelloPlatform new].
	^ Current
%

category: 'initialize-release'
classmethod: MetacelloPlatform
initialize
  "noop ... use #select"
%

category: 'initialize-release'
classmethod: MetacelloPlatform
select
  Current := self new
%

category: 'initialize-release'
classmethod: MetacelloPlatform
unselect
  MetacelloPlatform current class = self
    ifTrue: [ Current := nil ]
%

! ------------------- Instance methods for MetacelloPlatform

category: 'accessing'
method: MetacelloPlatform
authorName
  self globalNamed: #'Author' ifPresent: [ :cl | ^ cl perform: #'initials' env: 2 withArguments: {} ].
  ^ 'no developer initials'
%

category: 'utilities'
method: MetacelloPlatform
authorName: aString
	"Primarily used for testing"

	self subclassResponsibility
%

category: 'accessing'
method: MetacelloPlatform
bypassGoferLoadUpdateCategories

	bypassGoferLoadUpdateCategories == nil ifTrue: [ bypassGoferLoadUpdateCategories := false ].
	^ bypassGoferLoadUpdateCategories
%

category: 'accessing'
method: MetacelloPlatform
bypassGoferLoadUpdateCategories: anObject
	bypassGoferLoadUpdateCategories := anObject
%

category: 'accessing'
method: MetacelloPlatform
bypassProgressBars

	bypassProgressBars == nil ifTrue: [ bypassProgressBars := false ].
	^ bypassProgressBars
%

category: 'accessing'
method: MetacelloPlatform
bypassProgressBars: anObject
	bypassProgressBars := anObject
%

category: 'caching'
method: MetacelloPlatform
clearCurrentVersionCache
	MetacelloClearStackCacheNotification signal: #(#currentVersion #currentVersionAgainst: #currentVersionInfo)
%

category: 'package cache'
method: MetacelloPlatform
clearPackageCache
  "make sure that the package cache is empty, by hook or by crook"

  | cache dir |
  cache := self defaultPackageCache.
  cache flushCache.	"GemStone and Pharo1.4"
  dir := cache directory.
  dir ~~ nil
    ifTrue: [ 
      "delete directory - Squeak and Pharo"
      [ self recursiveDelete: dir ]
        on: Error
        do: [ :ignore |  ] ]
%

category: 'notification'
method: MetacelloPlatform
collection: aCollection do: aBlock displaying: aString

	aCollection do: aBlock
%

category: 'accessing'
method: MetacelloPlatform
confirm: aString
  self
    globalNamed: #'UIManager'
    ifPresent: [ :cl | ^ cl default perform: #'confirm:' env: 2 withArguments: { aString } ] Warning
    signal: aString.	"throw warning and answer true, if no way to announce"
  ^ true
%

category: 'reflection'
method: MetacelloPlatform
copyClass: oldClass as: newName inCategory: newCategoryName

	self subclassResponsibility
%

category: 'scripting'
method: MetacelloPlatform
defaultRepositoryDescription
    ^ 'http://www.squeaksource.com/MetacelloRepository'
%

category: 'tests'
method: MetacelloPlatform
defaultTimeout
	"squeak compatability"
	^60
%

category: 'file system'
method: MetacelloPlatform
deleteFileNamed: filePath
	(self fileDirectoryClass on: filePath) containingDirectory deleteFileNamed: (self fileDirectoryClass localNameFor: filePath)
%

category: 'tests'
method: MetacelloPlatform
disableUndefinedSybolUpdates
  "noop for most platforms - needed for GemStone"

  ^ nil
%

category: 'notification'
method: MetacelloPlatform
do: aBlock displaying: aString

	aBlock value
%

category: 'github/bitbucket support'
method: MetacelloPlatform
downloadErrorFileNameFor: zipFileName
  | pid |
  pid := self processPID.
  ^ '/tmp/curl-' , pid , '-' , (zipFileName select: [ :c | c isAlphaNumeric ])
    , '.err'
%

category: 'github/bitbucket support'
method: MetacelloPlatform
downloadJSON: url eTagsCache: eTagsCache eTagsKey: eTagsKey username: username pass: pass
  "return result of parsing JSON downloaded from url. username:pass may be nil, but calls will be subject to severe rate limits."

  "To minimize GitHub rate limiting problems, we are caching the ETags for the tag request: https://developer.github.com/v3/#conditional-requests"

  ^ self downloadJSON: url username: username pass: pass
%

category: 'github/bitbucket support'
method: MetacelloPlatform
downloadJSON: url username: username pass: pass
  "return result of parsing JSON downloaded from url. username:pass may be nil, but calls will be subject to severe rate limits."

  self subclassResponsibility
%

category: 'github/bitbucket support'
method: MetacelloPlatform
downloadZipArchive: url to: outputFileName
  "download zip archive from <url> into <outputFileName>"

  self subclassResponsibility
%

category: 'github/bitbucket support'
method: MetacelloPlatform
extractRepositoryFrom: zipFile to: directory
    "unzip <zipFile> into <directory>"

    self subclassResponsibility
%

category: 'repository creation'
method: MetacelloPlatform
extractTypeFromDescription: description
  description == nil
    ifTrue: [ ^ nil ].
  (((description indexOfSubCollection: '/') = 1) or: [ description second = $: ])
    ifTrue: [ ^ 'directory' ].
  ((description indexOfSubCollection: 'dictionary://') = 1)
    ifTrue: [ ^ 'dictionary' ].
  ((description indexOfSubCollection: 'filetree://') = 1)
    ifTrue: [ ^ 'filetree' ].
  ((description indexOfSubCollection: 'github://') = 1)
    ifTrue: [ ^ 'github' ].
  ((description indexOfSubCollection: 'gitorious://') = 1)
    ifTrue: [ ^ 'gitorious' ].
  ((description indexOfSubCollection: 'bitbucket://') = 1)
    ifTrue: [ ^ 'bitbucket' ].
  ((description indexOfSubCollection: 'globalrepo:') = 1)
    ifTrue: [ ^ 'globalrepo' ].
  ^ 'http'
%

category: 'file system'
method: MetacelloPlatform
fileHandleOn: aPath
	"Get an handle on a file."

	^ self fileDirectoryClass on: aPath
%

category: 'git support'
method: MetacelloPlatform
gitBranchNameFor: aDirectory
  "return current branch for git repository located at <aDirectory>, if <aDirectory> is not a git repository, return nil"

  ^ nil
%

category: 'git support'
method: MetacelloPlatform
gitCommitShaFor: aDirectory
  "return SHA for git repository located at <aDirectory>, if <aDirectory> is not a git repository, return nil"

  ^ nil
%

category: 'repository creation'
method: MetacelloPlatform
packageInfoFor: aMCWorkingCopy
  ^ aMCWorkingCopy packageInfo
%

category: 'file system'
method: MetacelloPlatform
parentDirectoryOf: aFileHandler
	"Get the parent directory of this file."
	
	^ aFileHandler containingDirectory
%

category: 'caching'
method: MetacelloPlatform
primeStackCacheFor: cacheName doing: noArgBlock defaultDictionary: aDictionary

	self deprecated: 'use #primeStackCacheWith:doing:'.
	self 
		useStackCacheDuring: [:dict | | cache |
			cache := dict at: cacheName ifAbsent: [].
			cache == nil
				ifTrue: [ 
					cache := Dictionary new.
					dict at: cacheName put: cache ].
			^noArgBlock value ] 
		defaultDictionary: aDictionary
%

category: 'caching'
method: MetacelloPlatform
primeStackCacheWith: aDictionary doing: noArgBlock

	self 
		useStackCacheDuring: [:dict | ^noArgBlock value ] 
		defaultDictionary: aDictionary
%

category: 'github/bitbucket support'
method: MetacelloPlatform
processPID
  "return pid of process as string if available"

  ^ ''
%

category: 'file system'
method: MetacelloPlatform
readStreamOn: aFileHandle do: aBlock
	"Get a read stream on the file handle and execute some actions on it."
	| stream |
	stream := aFileHandle readStream.
	^ [ aBlock value: stream ] 
		ensure: [ stream close ]
%

category: 'tests'
method: MetacelloPlatform
reenableUndefinedSybolUpdates: undefinedSymbols
  "noop for most platforms - needed for GemStone"

%

category: 'caching'
method: MetacelloPlatform
stackCacheFor: cacheName at: key doing: aBlock

	^self stackCacheFor: cacheName cacheClass: Dictionary at: key doing: aBlock
%

category: 'caching'
method: MetacelloPlatform
stackCacheFor: cacheName cacheClass: cacheClass at: key doing: aBlock

	self 
		useStackCacheDuring: [:dict | | cache |
			cache := dict at: cacheName ifAbsent: [].
			cache ~~ nil
				ifTrue: [ | value hasEntry |
					hasEntry := true.
					value := cache at: key ifAbsent: [ hasEntry := false ].
					hasEntry ifTrue: [ ^value ]]
				ifFalse: [ 
					cache := cacheClass new.
					dict at: cacheName put: cache ].
			^aBlock value: cache ] 
		defaultDictionary: nil
%

category: 'utilities'
method: MetacelloPlatform
string: aString includesSubstring: aSubstring
	"abstract String>>includesSubstring: to have the same message on all supported platforms."

	^aString includesSubString: aSubstring
%

category: 'file system'
method: MetacelloPlatform
tempFileFor: aName suffix: aSuffixString
	^ '/tmp/' , aName , aSuffixString
%

category: 'utilities'
method: MetacelloPlatform
timestamp

	^DateAndTime now printString
%

category: 'transactions'
method: MetacelloPlatform
transact: aBlock
	"On GemStone, we want to optionally abort before command execution and commit after 
	 common execution. Other plaforms don't need to do anything special.
	 Returning out of block, skips commit."
	
	aBlock value
%

category: 'testing'
method: MetacelloPlatform
useCypressByDefault
  ^ false
%

category: 'caching'
method: MetacelloPlatform
useStackCacheDuring: aBlock defaultDictionary: defaultDictionary
	| dict |
	dict := MetacelloStackCacheNotification signal.
	dict == nil
		ifTrue: [ 
			dict := defaultDictionary == nil
				ifTrue: [ Dictionary new ]
				ifFalse: [ defaultDictionary ] ].
	[ ^ aBlock value: dict ]
		on: MetacelloStackCacheNotification , MetacelloClearStackCacheNotification
		do: [ :ex | 
			(ex isKindOf: MetacelloStackCacheNotification)
				ifTrue: [ ex resume: dict ].
			(ex isKindOf: MetacelloClearStackCacheNotification)
				ifTrue: [ 
					| keys |
					keys := ex cacheNames.
					keys ifNil: [ keys := dict keys ].
					keys
						do: [ :k | 
							(dict includesKey: k)
								ifTrue: [ 
									| c |
									c := dict at: k.
									c keys do: [ :ck | c removeKey: ck ].
									dict removeKey: k ] ].
					ex resume ] ]
%

! Class Implementation for MetacelloProject

! ------------------- Class methods for MetacelloProject

category: 'instance creation'
classmethod: MetacelloProject
new

	| inst |
	inst := self basicNew.
	^inst configuration: inst; yourself
%

category: 'instance creation'
classmethod: MetacelloProject
on: aConfig

	^self basicNew configuration: aConfig; yourself
%

category: 'accessing'
classmethod: MetacelloProject
versionConstructorClass
    ^ MetacelloVersionConstructor
%

! ------------------- Instance methods for MetacelloProject

category: 'private'
method: MetacelloProject
attributes

	^(OrderedCollection with: #common)
		addAll: self platformAttributes;
		yourself
%

category: 'spec classes'
method: MetacelloProject
baselineOfProjectSpec
    ^ self baselineOfProjectSpecClass for: self
%

category: 'spec classes'
method: MetacelloProject
baselineOfProjectSpecClass
    ^ self subclassResponsibility
%

category: 'spec classes'
method: MetacelloProject
baselineOfVersionSpecClass
    ^ self subclassResponsibility
%

category: 'versions'
method: MetacelloProject
bleedingEdge

	^self version: #bleedingEdge
%

category: 'accessing'
method: MetacelloProject
configuration
	^ configuration
%

category: 'accessing'
method: MetacelloProject
configuration: anObject
	configuration := anObject
%

category: 'spec classes'
method: MetacelloProject
configurationOfProjectSpec
    ^ self configurationOfProjectSpecClass for: self
%

category: 'spec classes'
method: MetacelloProject
configurationOfProjectSpecClass
    ^ self subclassResponsibility
%

category: 'scripting'
method: MetacelloProject
copyAsConformingBaselineOfProjectSpec: aProjectSpec
  "noop by default"

  ^ aProjectSpec
%

category: 'versions'
method: MetacelloProject
currentVersion
	| cacheKey cv |
	cacheKey := self configuration class.
	^ MetacelloPlatform current
		stackCacheFor: #currentVersion
		at: cacheKey
		doing: [ :cache | 
			cv := self currentVersionAgainst: nil.
			^ cache at: cacheKey put: cv ]
%

category: 'versions'
method: MetacelloProject
currentVersionAgainst: resolvedPackageAndProjectNames
  | cacheKey |
  cacheKey := resolvedPackageAndProjectNames isNil
    ifTrue: [ Array with: self configuration class with: nil ]
    ifFalse: [ 
      Array
        with: self configuration class
        with:
          (MetacelloPlatform current
            sort: resolvedPackageAndProjectNames
            with: [ :a :b | a <= b ]) ].
  ^ MetacelloPlatform current
    stackCacheFor: #'currentVersionAgainst:'
    at: cacheKey
    doing: [ :cache | 
      | cv versions latestSomethingLoaded |
      cv := nil.
      versions := self sortedAndFilteredVersions.
      versions
        do: [ :version | 
          | status matchBlock |
          status := resolvedPackageAndProjectNames isNil
            ifTrue: [ version spec isPartiallyCurrent ]
            ifFalse: [ version spec isPartiallyCurrentAgainst: resolvedPackageAndProjectNames ].
          matchBlock := [ :matchStatus | 
          cv := version copy.
          cv versionStatus: matchStatus.
          ^ cache at: cacheKey put: cv ].
          status isAllLoadedToSpec: matchBlock.
          status isLoadedToSpec: matchBlock.
          status isLoadedMatchConstraints: matchBlock.
          status
            isSomethingLoaded: [ :matchStatus | 
              latestSomethingLoaded isNil
                ifTrue: [ 
                  cv := version copy.
                  cv versionStatus: matchStatus.
                  latestSomethingLoaded := cv ] ] ].
      latestSomethingLoaded
        ifNotNil: [ ^ cache at: cacheKey put: latestSomethingLoaded ].
      ^ cache at: cacheKey put: nil ]
%

category: 'accessing'
method: MetacelloProject
defaultBlessing

	^#release
%

category: 'spec classes'
method: MetacelloProject
defaultLoaderClass

	^MetacelloSpecLoader
%

category: 'private'
method: MetacelloProject
defaultPlatformAttributes

	^ MetacelloPlatform current defaultPlatformAttributes
%

category: 'versions'
method: MetacelloProject
development

	^self version: #development
%

category: 'accessing'
method: MetacelloProject
errorMap
  errorMap ifNil: [ errorMap := Dictionary new ].
  ^ errorMap
%

category: 'accessing'
method: MetacelloProject
errorMap: anObject
    errorMap ifNil: [ errorMap := Dictionary new ].
    errorMap := anObject
%

category: 'private'
method: MetacelloProject
excludeFromLatestVersion

	^#(structural development broken baseline)
%

category: 'spec classes'
method: MetacelloProject
groupSpec

	^self groupSpecClass for: self
%

category: 'spec classes'
method: MetacelloProject
groupSpecClass

	^MetacelloGroupSpec
%

category: 'versions'
method: MetacelloProject
hasVersion: versionString

	self version: versionString ifAbsent: [ ^false ].
	^true
%

category: 'accessing'
method: MetacelloProject
label

	^self configuration class name
%

category: 'versions'
method: MetacelloProject
lastVersion
  | coll |
  coll := (MetacelloPlatform current
    sort: self map values asArray
    with: [ :a :b | a <= b ]) asOrderedCollection.
  coll isEmpty
    ifTrue: [ ^ nil ].
  ^ coll last
%

category: 'versions'
method: MetacelloProject
latestVersion
  | excluded |
  "	self deprecated: 'Please use #stableVersion instead.'.
"
  self flag: 'deprecate after version 1.0'.
  excluded := self excludeFromLatestVersion.
  ^ MetacelloPlatform current
    detectMax: [ :version | version ]
    in: (self map values
        select: [ :version | (excluded includes: version blessing) not ])
%

category: 'versions'
method: MetacelloProject
latestVersion: blessing
  ^ MetacelloPlatform current
    detectMax: [ :version | version ]
    in: (self map values select: [ :version | blessing = version blessing ])
%

category: 'versions'
method: MetacelloProject
latestVersionMatching: versionPatternString
	"Answer whether the version number of the receiver matches the given pattern string.

	 A Metacello version number is made up of version sequences delimited by the characters $. and $-.
	 The $. introduces a numeric version sequence and $- introduces an alphanumeric version sequence.
	 
	 A version pattern is made up of version pattern match sequences. also delimited by the characters $. 
	 and $-.. Each pattern match sequence is tested against the corresponding version sequence of the 
	 receiver, using the 'standard' pattern matching rules. All sequences must answer true for a match.
	
	 The special pattern sequence '?' is a match for the corresponding version sequence and all subsequent 
	 version sequences. '?' as the version pattern matches all versions. No more version pattern 
	 sequences are permitted once the '?' sequence is used. If used, it is the last version pattern
	 sequence."

	^self 
		latestVersionMatching: versionPatternString 
		includedBlessings: #()
		excludedBlessings: self excludeFromLatestVersion
%

category: 'versions'
method: MetacelloProject
latestVersionMatching: versionPatternString excludedBlessings: excluded

	^self 
		latestVersionMatching: versionPatternString 
		includedBlessings: #()
		excludedBlessings: excluded
%

category: 'versions'
method: MetacelloProject
latestVersionMatching: versionPatternString includedBlessings: included

	^self 
		latestVersionMatching: versionPatternString 
		includedBlessings: included
		excludedBlessings: self excludeFromLatestVersion
%

category: 'versions'
method: MetacelloProject
latestVersionMatching: versionPatternString includedBlessings: included excludedBlessings: excludedBlessings
  | excluded |
  excluded := excludedBlessings asSet copy.
  MetacelloPlatform current removeFrom: excluded allFoundIn: included.
  ^ MetacelloPlatform current
    detectMax: [ :version | version ]
    in: (self map values
        select: [ :version | (included isEmpty or: [ included includes: version blessing ])
            and: [ (excluded includes: version blessing) not
                and: [ version versionNumber match: versionPatternString ] ] ])
%

category: 'loading'
method: MetacelloProject
load: aVersionString

	^(self version: aVersionString) load
%

category: 'spec classes'
method: MetacelloProject
loader

	^loader
%

category: 'spec classes'
method: MetacelloProject
loader: aLoader

	loader := aLoader
%

category: 'spec classes'
method: MetacelloProject
loaderClass

	loaderClass == nil ifTrue: [ loaderClass := self defaultLoaderClass ].
	^loaderClass
%

category: 'spec classes'
method: MetacelloProject
loaderClass: aMetacelloSpecLoader

	loaderClass := aMetacelloSpecLoader
%

category: 'accessing'
method: MetacelloProject
loadType
	"#atomic or #linear"

	loadType == nil ifTrue: [ ^#atomic ].
	^loadType
%

category: 'accessing'
method: MetacelloProject
loadType: aSymbol
	"#atomic or #linear"

	loadType := aSymbol
%

category: 'private'
method: MetacelloProject
lookupVersion: aVersionString ifAbsent: aBlock
    "please use version:...this is a private method"

    ^ self map
        at: aVersionString
        ifAbsent: [ 
            (MetacelloVersionDefinitionError project: self project versionString: aVersionString)
                exception: (self errorMap at: aVersionString ifAbsent: [ ^ aBlock value ]);
                signal ]
%

category: 'accessing'
method: MetacelloProject
map
	versionMap ifNil: [ ^ Dictionary new ].
	^ versionMap
%

category: 'accessing'
method: MetacelloProject
map: aDictionary

	versionMap := aDictionary
%

category: 'spec classes'
method: MetacelloProject
packagesSpec

	^self packagesSpecClass for: self
%

category: 'spec classes'
method: MetacelloProject
packagesSpecClass

	^MetacelloPackagesSpec
%

category: 'private'
method: MetacelloProject
platformAttributes

	 ^self projectPlatformAttributes
%

category: 'private'
method: MetacelloProject
pragmaKeywords

	^#(version:attribute: blessing:attribute: description:attribute: required:attribute: groups:attribute: doits:attribute:)
%

category: 'printing'
method: MetacelloProject
printOn: aStream
	| label |
	self configuration class printOn: aStream.
	aStream nextPut: $(.
	self versions
		do: [ :vrsn | 
			aStream nextPutAll: vrsn versionString.
			vrsn spec ~~ nil
				ifTrue: [ 
					(label := vrsn spec projectLabel) isEmpty
						ifFalse: [ aStream nextPutAll: ' [' , label , ']' ] ].
			aStream
				nextPut: $,;
				space ].
	aStream nextPut: $)
%

category: 'accessing'
method: MetacelloProject
project

	^self
%

category: 'private'
method: MetacelloProject
projectAttributes

	projectAttributes ~~ nil ifTrue: [ ^projectAttributes ].
	^#()
%

category: 'private'
method: MetacelloProject
projectAttributes: aList

	projectAttributes := aList
%

category: 'scripting'
method: MetacelloProject
projectForScriptEngine: aMetacelloScriptEngine
    ^ self projectForScriptEngine: aMetacelloScriptEngine unconditionalLoad: false
%

category: 'scripting'
method: MetacelloProject
projectForScriptEngine: aMetacelloScriptEngine unconditionalLoad: aBool
    ^ self subclassResponsibility
%

category: 'private'
method: MetacelloProject
projectPlatformAttributes
  ^ self defaultPlatformAttributes , self projectAttributes
%

category: 'spec classes'
method: MetacelloProject
projectReferenceSpec

	^self projectReferenceSpecClass for: self
%

category: 'spec classes'
method: MetacelloProject
projectReferenceSpecClass

	^MetacelloProjectReferenceSpec
%

category: 'spec classes'
method: MetacelloProject
projectSpec

	^self projectSpecClass for: self
%

category: 'spec classes'
method: MetacelloProject
projectSpecClass
    ^ MetacelloProjectSpec
%

category: 'private'
method: MetacelloProject
sortedAndFilteredVersions
  ^ (MetacelloPlatform current
    sort: self map values asArray
    with: [ :a :b | a >= b ])
    select: [ :vrsn | (#(#'structural' #'broken' #'baseline') includes: vrsn blessing) not ]
%

category: 'versions'
method: MetacelloProject
stableVersion

	^self version: #stable
%

category: 'accessing'
method: MetacelloProject
symbolicVersionMap

	^symbolicVersionMap
%

category: 'accessing'
method: MetacelloProject
symbolicVersionMap: aDictionary

	symbolicVersionMap := aDictionary
%

category: 'versions'
method: MetacelloProject
symbolicVersionSymbols
  ^ MetacelloPlatform current
    sort: self symbolicVersionMap keys asArray
    with: [ :a :b | a <= b ]
%

category: 'spec classes'
method: MetacelloProject
valueHolderSpec

	^self valueHolderSpecClass for: self
%

category: 'spec classes'
method: MetacelloProject
valueHolderSpecClass

	^MetacelloValueHolderSpec
%

category: 'versions'
method: MetacelloProject
version: aVersionString
  (MetacelloPlatform current isSymbol: aVersionString)
    ifTrue: [ 
      | symbolicVersionString |
      symbolicVersionString := self symbolicVersionMap
        at: aVersionString
        ifAbsent: [ 
          (MetacelloSymbolicVersionDoesNotExistError
            project: self project
            versionString: aVersionString) signal ].
      symbolicVersionString == #'notDefined'
        ifTrue: [ 
          (MetacelloSymbolicVersionNotDefinedError
            project: self project
            versionString: aVersionString) signal ].
      ^ self
        lookupVersion: symbolicVersionString
        ifAbsent: [ 
          (MetacelloSymbolicVersionDoesNotExistError
            project: self project
            versionString: symbolicVersionString) signal ] ].
  ^ self
    lookupVersion: aVersionString
    ifAbsent: [ 
      (MetacelloVersionDoesNotExistError
        project: self project
        versionString: aVersionString) signal ]
%

category: 'versions'
method: MetacelloProject
version: aVersionString ifAbsent: aBlock

	^[ self version: aVersionString ] on: MetacelloVersionDoesNotExistError do: [:ex | aBlock value ].
%

category: 'versions'
method: MetacelloProject
versionNumberClass
    versionNumberClass ifNil: [ versionNumberClass := MetacelloVersionNumber ].
    ^ versionNumberClass
%

category: 'versions'
method: MetacelloProject
versionNumberClass: aClass
    versionNumberClass := aClass
%

category: 'versions'
method: MetacelloProject
versions
  ^ MetacelloPlatform current
    sort: self map values asArray
    with: [ :a :b | a <= b ]
%

category: 'spec classes'
method: MetacelloProject
versionSpec

	^self versionSpecClass for: self
%

category: 'spec classes'
method: MetacelloProject
versionSpecClass

	^MetacelloVersionSpec
%

! Class Implementation for MetacelloProjectRegistration

! ------------------- Class methods for MetacelloProjectRegistration

category: 'accessing'
classmethod: MetacelloProjectRegistration
baselineClasses
    "Return a set of the Metacello baseline classes that have been loaded into the image."

    "self baselineClasses"

    ^ BaselineOf allSubclasses
%

category: 'accessing'
classmethod: MetacelloProjectRegistration
baselineProjectSpecs
    "MetacelloProjectRegistration baselineProjectSpecs"

    ^ self registry baselineProjectSpecs
%

category: 'accessing'
classmethod: MetacelloProjectRegistration
classRemoved: aClassRemovalAnnouncement
  "aRemovalAnnouncement is platform-specific ... responds to #itemClass to 
   answer the class that was removed."

  | aClass registration |
  aClass := aClassRemovalAnnouncement itemClass.
  registration := self registry
    registrationForExactClassNamed: aClass name asString
    ifAbsent: [ ^ self ].
  registration unregisterProject
%

category: 'accessing'
classmethod: MetacelloProjectRegistration
configurationClasses
    "Return a set of the Metacello configuration classes that have been loaded into the image."

    "self configurationClasses"

    | answer |
    answer := IdentitySet new.
    ConfigurationOf allSubclasses
        do: [ :cl | 
            (cl == BaselineOf or: [ cl inheritsFrom: BaselineOf ])
                ifFalse: [ answer add: cl ] ].
    Object allSubclasses
        do: [ :cl | 
            (answer includes: cl)
                ifFalse: [ 
                    (([ cl isMetacelloConfig ]
                        on: Error
                        do: [ :ex | ex return: false ]) and: [ (cl name asString indexOfSubCollection: 'ConfigurationOf') = 1 ])
                        ifTrue: [ answer add: cl ] ] ].
    ^ answer
%

category: 'accessing'
classmethod: MetacelloProjectRegistration
configurationProjectSpecs
    "MetacelloProjectRegistration configurationProjectSpecs"

    ^ self registry configurationProjectSpecs
%

category: 'mutability'
classmethod: MetacelloProjectRegistration
copyRegistryRestoreOnErrorWhile: aBlock
  "install copy of registry for duration of <aBlock> execution."

  "registrations will be copied on write during <aBlock> execution."

  "if <aBlock> does not return control to this context, revert to the original
	version of the registry. Otherwise leave the new copy installed."

  | oldRegistry newRegistry |
  oldRegistry := self registry.
  newRegistry := self registry copy.
  self registry: newRegistry.
  aBlock
    ensure: [ 
      "install old version of registry"
      newRegistry := self registry.	"see https://github.com/dalehenrich/metacello-work/issues/210"
      self registry: oldRegistry ].
  self registry: newRegistry	"if control returned, install newRegistry"
%

category: 'mutability'
classmethod: MetacelloProjectRegistration
copyRegistryWhile: aBlock
    "install copy of registry for duration of <aBlock> execution."

    "registrations will be copied on write during <aBlock> execution."

    "Unconditionally revert to the original
	version of the registry. Otherwise leave the new copy installed."

    | oldRegistry newRegistry |
    oldRegistry := self registry.
    newRegistry := self registry copy.
    self registry: newRegistry.
    aBlock
        ensure: [ 
            "install old version of registry"
            self registry: oldRegistry ]
%

category: 'instance creation'
classmethod: MetacelloProjectRegistration
fromMCBaselineProjectSpec: aProjectSpec
    ^ self new
        projectName: aProjectSpec name;
        baselineProjectSpec: aProjectSpec;
        yourself
%

category: 'instance creation'
classmethod: MetacelloProjectRegistration
fromMCConfigurationProjectSpec: aProjectSpec
    ^ self new
        projectName: aProjectSpec name;
        configurationProjectSpec: aProjectSpec;
        yourself
%

category: 'accessing'
classmethod: MetacelloProjectRegistration
primeRegistryFromImage
    "MetacelloProjectRegistration primeRegistryFromImage"

    self registry primeRegistryFromImage
%

category: 'querying'
classmethod: MetacelloProjectRegistration
projectSpecForClassNamed: aClassName ifAbsent: absentBlock
    ^ self registry projectSpecForClassNamed: aClassName ifAbsent: absentBlock
%

category: 'accessing'
classmethod: MetacelloProjectRegistration
projectSpecs
    "MetacelloProjectRegistration projectSpecs"

    ^ self configurationProjectSpecs , self baselineProjectSpecs
%

category: 'registration'
classmethod: MetacelloProjectRegistration
registerProjectSpec: aProjectSpec ifPresent: presentBlock
    | newRegistration |
    newRegistration := aProjectSpec asProjectRegistration.
    ^ self registry
        registrationFor: newRegistration
        ifPresent: [ :existing | presentBlock value: existing value: newRegistration ]
        ifAbsent: [ newRegistration registerProject ]
%

category: 'querying'
classmethod: MetacelloProjectRegistration
registrationForClassNamed: aClassName ifAbsent: absentBlock
    ^ self registry registrationForClassNamed: aClassName ifAbsent: absentBlock
%

category: 'querying'
classmethod: MetacelloProjectRegistration
registrationForProjectSpec: aProjectSpec ifAbsent: absentBlock ifPresent: presentBlock
    | newRegistration |
    newRegistration := aProjectSpec asProjectRegistration.
    self registry
        registrationFor: newRegistration
        ifPresent: [ :existing | ^ presentBlock value: existing value: newRegistration ]
        ifAbsent: [ ^ absentBlock value: newRegistration ]
%

category: 'accessing'
classmethod: MetacelloProjectRegistration
resetRegistry
    Registry := nil
%

! ------------------- Instance methods for MetacelloProjectRegistration

category: 'comparision'
method: MetacelloProjectRegistration
= aRegistration
    aRegistration class == self class
        ifFalse: [ ^ false ].
    ^ (configurationProjectSpec registrationsCompareEqual: aRegistration configurationProjectSpec)
        and: [ baselineProjectSpec registrationsCompareEqual: aRegistration baselineProjectSpec ]
%

category: 'accessing'
method: MetacelloProjectRegistration
baselineProjectSpec
  "only one of baselineProjectSpec or configurationProjectSpec should ever be set"

  ^ baselineProjectSpec
%

category: 'accessing'
method: MetacelloProjectRegistration
baselineProjectSpec: anObject
  "force the registration to be consistent -- difficult for Metacello to 
   repair registrations during load -- I've tried. "

  "https://github.com/dalehenrich/metacello-work/issues/212"

  self shouldBeMutable.
  configurationProjectSpec := nil.
  anObject isBaselineOfProjectSpec
    ifFalse: [ self error: 'Expected a baseline' ].
  baselineProjectSpec := anObject
%

category: 'accessing'
method: MetacelloProjectRegistration
baselineProjectSpecIfAbsent: absentBlock
  ^ baselineProjectSpec ifNil: absentBlock
%

category: 'accessing'
method: MetacelloProjectRegistration
baselineProjectSpecIfPresent: presentBlock ifAbsent: absentBlock
     ^ baselineProjectSpec ifNotNil: [ presentBlock cull: baselineProjectSpec ]  ifNil: absentBlock
%

category: 'accessing'
method: MetacelloProjectRegistration
baseName
	^ self projectSpec baseName
%

category: 'testing'
method: MetacelloProjectRegistration
canDowngradeTo: aProjectRegistration
    "true if there are no load conflicts
        OR
       if the load conflicts involved two cofigurations ONLY and a downgrade is allowed"

    (self hasLoadConflicts: aProjectRegistration)
        ifFalse: [ ^ true ].
    configurationProjectSpec
        ifNotNil: [ 
            aProjectRegistration configurationProjectSpec
                ifNotNil: [ 
                    configurationProjectSpec ensureProjectLoaded.
                    ^ configurationProjectSpec canDowngradeTo: aProjectRegistration configurationProjectSpec ] ].
    ^ false
%

category: 'testing'
method: MetacelloProjectRegistration
canUpgradeTo: aProjectRegistration
  "true if there are no load conflicts
        OR
       if the load conflicts involved two cofigurations ONLY and an upgrade is allowed"

  (self hasLoadConflicts: aProjectRegistration)
    ifFalse: [ ^ true ].
  configurationProjectSpec
    ifNotNil: [ 
      aProjectRegistration configurationProjectSpec
        ifNotNil: [ 
          configurationProjectSpec copy ensureProjectLoaded.
          ^ configurationProjectSpec
            canUpgradeTo: aProjectRegistration configurationProjectSpec ] ].
  baselineProjectSpec
    ifNotNil: [ 
      aProjectRegistration baselineProjectSpec
        ifNotNil: [ 
          baselineProjectSpec copy ensureProjectLoaded.
          ^ baselineProjectSpec
            canUpgradeTo: aProjectRegistration baselineProjectSpec ] ].
  ^ false
%

category: 'accessing'
method: MetacelloProjectRegistration
configurationProjectSpec
  "only one of baselineProjectSpec or configurationProjectSpec should ever be set"

  ^ configurationProjectSpec
%

category: 'accessing'
method: MetacelloProjectRegistration
configurationProjectSpec: anObject
  "force the registration to be consistent -- difficult for Metacello to 
   repair registrations during load -- I've tried. "

  "https://github.com/dalehenrich/metacello-work/issues/212"

  self shouldBeMutable.
  baselineProjectSpec := nil.
  anObject isConfigurationOfProjectSpec
    ifFalse: [ self error: 'Expected a configuration' ].
  configurationProjectSpec := anObject
%

category: 'accessing'
method: MetacelloProjectRegistration
configurationProjectSpecIfAbsent: absentBlock
    ^ configurationProjectSpec ifNil: absentBlock
%

category: 'accessing'
method: MetacelloProjectRegistration
configurationProjectSpecIfPresent: presentBlock ifAbsent: absentBlock
    ^ configurationProjectSpec ifNotNil: [ presentBlock cull: configurationProjectSpec ]  ifNil: absentBlock
%

category: 'mutability'
method: MetacelloProjectRegistration
copyOnWrite: aBlock
    "assume that only registered projects are immutable ... otherwise you'll get an error"

    | copy |
    self class registry
        registrationFor: self
        ifPresent: [ :existing |  ]
        ifAbsent: [ 
            aBlock value: self.
            ^ self ].
    self unregisterProject.
    copy := self copy.
    aBlock value: copy.
    copy registerProject.
    ^ copy
%

category: 'accessing'
method: MetacelloProjectRegistration
currentBranchName
  ^ self configurationProjectSpec
    ifNotNil: [ 
      configurationProjectSpec versionOrNil
        ifNil: [ '' ]
        ifNotNil: [ :vrsn | vrsn blessing asString ] ]
    ifNil: [ baselineProjectSpec repositoryBranchName ]
%

category: 'querying'
method: MetacelloProjectRegistration
currentlyLoadedClassesInProject
	^ self projectSpec currentlyLoadedClassesInVersion asSet
%

category: 'accessing'
method: MetacelloProjectRegistration
currentVersionString
  ^ self configurationProjectSpec
    ifNotNil: [ :aSpec | aSpec versionString ]
    ifNil: [ baselineProjectSpec repositoryVersionString ]
%

category: 'comparision'
method: MetacelloProjectRegistration
hash
    ^ ((String stringHash: projectName initialHash: 0) bitXor: configurationProjectSpec metacelloRegistrationHash)
        bitXor: baselineProjectSpec metacelloRegistrationHash
%

category: 'testing'
method: MetacelloProjectRegistration
hasLoadConflicts: aProjectRegistration
  "5 combinations of loads with no load conflicts:
        No configs and baselines =
        configs = and no baselines
        configs = and baselines =
        configs = and no baseline loaded (self) with a baseline to load (aProjectRegistration)
        config loaded (self), no config to load (aProjectRegistration) and no baseline loaded(self) with a baseline to load (aProjectRegistration) "

  aProjectRegistration validate.
  self isValid
    ifFalse: [ ^ false ].
  (self projectSpec hasConflictWithProjectSpec: aProjectRegistration projectSpec)
    ifTrue: [ 
      "if the registration is not locked and not loaded, the there are no load conflicts"
      "see MetacelloAbstractBaselineTests>>testBasicBaselineLockNUnlockNload and MetacelloScriptingLockEnableUndefinedSymbolsTestCase>>testBasicBaselineLockNUnlockNload"
      ^ self locked or: [ self loadedInImage ] ].
  ^ false
%

category: 'mutability'
method: MetacelloProjectRegistration
immutable
    mutable := false
%

category: 'mutability'
method: MetacelloProjectRegistration
isMutable
  ^ mutable ifNil: [ ^ true ]
%

category: 'testing'
method: MetacelloProjectRegistration
isValid
  " has a name and one or the other of the projectSpecs is non-nil, but not both ... this is CRITICAL"

  projectName ifNil: [ ^ false ].
  configurationProjectSpec isNil
    ifTrue: [ ^ baselineProjectSpec notNil ].
  ^ baselineProjectSpec isNil
%

category: 'accessing'
method: MetacelloProjectRegistration
loadedInImage
    loadedInImage ifNil: [ loadedInImage := false ].
    ^ loadedInImage
%

category: 'accessing'
method: MetacelloProjectRegistration
loadedInImage: anObject
    self shouldBeMutable.
    loadedInImage := anObject
%

category: 'accessing'
method: MetacelloProjectRegistration
locked
    locked ifNil: [ locked := false ].
    ^ locked
%

category: 'accessing'
method: MetacelloProjectRegistration
locked: anObject
    self shouldBeMutable.
    locked := anObject
%

category: 'lookup'
method: MetacelloProjectRegistration
lookupBaselineSpec
  baselineProjectSpec ifNotNil: [ :spec | ^ spec ].
  ^ configurationProjectSpec
%

category: 'lookup'
method: MetacelloProjectRegistration
lookupConfigurationSpec
  configurationProjectSpec ifNotNil: [ :spec | ^ spec ].
  ^ baselineProjectSpec
%

category: 'accessing'
method: MetacelloProjectRegistration
merge: aProjectRegistration
  " ... merge is done when a spec has been loaded into the image"

  self shouldBeMutable.
  aProjectRegistration validate.
  aProjectRegistration configurationProjectSpec
    ifNotNil: [ :aSpec | 
      configurationProjectSpec := aSpec copy.
      configurationProjectSpec versionOrNil
        ifNotNil: [ :version | 
          "resolve symbolic versions for loaded projects"
          configurationProjectSpec versionString: version versionString ].
      baselineProjectSpec := nil.
      self versionInfo versionString: configurationProjectSpec versionString ]
    ifNil: [ 
      baselineProjectSpec := aProjectRegistration baselineProjectSpec.
      configurationProjectSpec := nil.
      self versionInfo
        versionString: baselineProjectSpec repositoryVersionString ]
%

category: 'mutability'
method: MetacelloProjectRegistration
mutable
    mutable := true
%

set compile_env: 0

category: 'copying'
method: MetacelloProjectRegistration
postCopy
    super postCopy.
    mutable := nil
%

set compile_env: 2

category: 'printing'
method: MetacelloProjectRegistration
printOn: aStream
  | label versionString descriptions |
  self
    configurationProjectSpecIfPresent: [ :spec | 
      label := spec className.
      versionString := spec versionString ]
    ifAbsent: [ 
      "baseline"
      label := self baselineProjectSpec className.
      versionString := '[baseline]' ].
  aStream nextPutAll: label.
  versionString
    ifNil: [ aStream nextPutAll: ' --no version specified--' ]
    ifNotNil: [ 
      aStream
        space;
        nextPutAll: versionString ].
  (descriptions := self repositoryDescriptions) isEmpty
    ifTrue: [ ^ self ].
  aStream nextPutAll: ' from '.
  descriptions size = 1
    ifTrue: [ aStream nextPutAll: descriptions first ]
    ifFalse: [ 
      aStream nextPut: ${.
      descriptions do: [ :description | aStream nextPutAll: description ].
      aStream nextPut: $} ]
%

category: 'accessing'
method: MetacelloProjectRegistration
projectName
	^ projectName
%

category: 'accessing'
method: MetacelloProjectRegistration
projectName: anObject
    self shouldBeMutable.
    projectName := anObject
%

category: 'accessing'
method: MetacelloProjectRegistration
projectSpec
  ^ baselineProjectSpec
    ifNil: [ 
      configurationProjectSpec notNil
        ifFalse: [ self error: 'Project spec unexpectedly nil.' ].
      configurationProjectSpec ]
%

category: 'accessing'
method: MetacelloProjectRegistration
projectVersion
  | pv |
  pv := self versionInfo projectVersion.
  pv
    ifNil: [ 
      pv := self projectSpec versionOrNil.
      self versionInfo projectVersion: pv ].
  ^ pv
%

category: 'registration'
method: MetacelloProjectRegistration
registerProject
    "unconditionally register <newRegistration> ... use with care"

    self class registry registerProjectRegistration: self
%

category: 'accessing'
method: MetacelloProjectRegistration
repositoryDescriptions
    ^ (self configurationProjectSpecIfAbsent: [ self baselineProjectSpec ]) repositoryDescriptions
%

category: 'mutability'
method: MetacelloProjectRegistration
shouldBeMutable
    self isMutable
        ifTrue: [ ^ self ].
    self error: 'Not allowed to modify an immutable object'
%

category: 'registration'
method: MetacelloProjectRegistration
unregisterProject
    self class registry unregisterProjectRegistration: self
%

category: 'accessing'
method: MetacelloProjectRegistration
validate
	self isValid
		ifFalse: [ self error: 'Invalid project registration' ]
%

category: 'accessing'
method: MetacelloProjectRegistration
versionInfo
  versionInfo
    ifNil: [ 
      versionInfo := MetacelloProjectRegistrationVersionInfo new.
      self
        configurationProjectSpecIfPresent: [ versionInfo versionString: self version ]
        ifAbsent: [ 
          "do not set versionString for freshly minted baseline ... 
           see https://github.com/dalehenrich/metacello-work/issues/328"
           ] ].
  ^ versionInfo
%

category: 'accessing'
method: MetacelloProjectRegistration
versionInfo: aMetacelloProjectRegistrationVersionInfo
  versionInfo := aMetacelloProjectRegistrationVersionInfo
%

! Class Implementation for MetacelloProjectRegistrationVersionInfo

! ------------------- Instance methods for MetacelloProjectRegistrationVersionInfo

category: 'accessing'
method: MetacelloProjectRegistrationVersionInfo
projectVersion
  ^ projectVersion
%

category: 'accessing'
method: MetacelloProjectRegistrationVersionInfo
projectVersion: anObject
  projectVersion := anObject
%

category: 'accessing'
method: MetacelloProjectRegistrationVersionInfo
setVersionString: anObject
  "set versionString, only if it does not already have avalue"

  versionString ifNil: [ self versionString: anObject ]
%

category: 'accessing'
method: MetacelloProjectRegistrationVersionInfo
versionString

   ^versionString
%

category: 'accessing'
method: MetacelloProjectRegistrationVersionInfo
versionString: anObject
  versionString := anObject.
  projectVersion := nil
%

! Class Implementation for MetacelloProjectRegistry

! ------------------- Instance methods for MetacelloProjectRegistry

category: 'accessing'
method: MetacelloProjectRegistry
baselineProjectSpecs
    "MetacelloProjectRegistration baselineProjectSpecs"

    | projectSpecs |
    projectSpecs := OrderedCollection new.
    self baselineRegistry
        keysAndValuesDo: [ :className :registration | projectSpecs add: (self projectSpecForClassNamed: className ifAbsent: [ self error: 'not expected' ]) ].
    ^ projectSpecs asArray
%

category: 'accessing'
method: MetacelloProjectRegistry
baselineRegistry
    baselineRegistry ifNil: [ baselineRegistry := Dictionary new ].
    ^ baselineRegistry
%

category: 'accessing'
method: MetacelloProjectRegistry
configurationProjectSpecs
    "MetacelloProjectRegistration configurationProjectSpecs"

    | projectSpecs |
    projectSpecs := OrderedCollection new.
    self configurationRegistry
        keysAndValuesDo: [ :className :registration | projectSpecs add: (self projectSpecForClassNamed: className ifAbsent: [ self error: 'not expected' ]) ].
    ^ projectSpecs asArray
%

category: 'accessing'
method: MetacelloProjectRegistry
configurationRegistry
    configurationRegistry ifNil: [ configurationRegistry := Dictionary new ].
    ^ configurationRegistry
%

category: 'accessing'
method: MetacelloProjectRegistry
isEmpty
  ^ self configurationProjectSpecs isEmpty
    and: [ self baselineProjectSpecs isEmpty ]
%

category: 'copying'
method: MetacelloProjectRegistry
postCopy
    super postCopy.
    baselineRegistry := self baselineRegistry copy.
    configurationRegistry := self configurationRegistry copy
%

category: 'initialization'
method: MetacelloProjectRegistry
primeRegisterLoadedProjectSpec: projectSpec
  MetacelloProjectRegistration
    registrationForProjectSpec: projectSpec
    ifAbsent: [ :new | 
      new
        loadedInImage: true;
        registerProject ]
    ifPresent: [ :existing :new | 
      existing
        copyOnWrite: [ :existingCopy | 
          existingCopy loadedInImage: true.
          existing locked
            ifFalse: [ 
              "lock takes precedence when priming from image"
              existingCopy merge: new ] ] ]
%

category: 'initialization'
method: MetacelloProjectRegistry
primeRegistryCurrentVersionFor: cl
  ^ [ cl project currentVersion ]
    on: Error
    do: [ :ex | 
      Warning
        signal:
          'Error finding current version of ' , cl name asString
            , '. Probably an invalid specification.'.
      nil ]
%

category: 'initialization'
method: MetacelloProjectRegistry
primeRegistryFromImage
  "MetacelloProjectRegistration primeRegistryFromImage"

  self primeRegistryFromImage: false
%

category: 'initialization'
method: MetacelloProjectRegistry
primeRegistryFromImage: prioritizeConfiguration
  "MetacelloProjectRegistration primeRegistryFromImage"

  self
    primeRegistryFromImage: MetacelloProjectRegistration configurationClasses
    baselineClasses: MetacelloProjectRegistration baselineClasses
    prioritizeConfiguration: prioritizeConfiguration
%

category: 'initialization'
method: MetacelloProjectRegistry
primeRegistryFromImage: configurationClasses baselineClasses: baselineClasses
  "MetacelloProjectRegistration primeRegistryFromImage"

  self
    primeRegistryFromImage: configurationClasses
    baselineClasses: baselineClasses
    prioritizeConfiguration: false
%

category: 'initialization'
method: MetacelloProjectRegistry
primeRegistryFromImage: configurationClasses baselineClasses: baselineClasses prioritizeConfiguration: prioritizeConfiguration
  "MetacelloProjectRegistration primeRegistryFromImage"

  baselineClasses
    do: [ :cl | 
      (self baselineRegistry includesKey: cl name asString)
        ifFalse: [ 
          "not registered"
          (self primeRegistryCurrentVersionFor: cl)
            ifNotNil: [ :version | 
              | projectSpec |
              projectSpec := (version project projectSpec
                name: (MetacelloScriptEngine baseNameOf: cl name asString);
                repositories: version project projectPackage repositories copy;
                yourself) asBaselineProjectSpec.
              self primeRegisterLoadedProjectSpec: projectSpec ] ] ].
  configurationClasses
    do: [ :cl | 
      (self configurationRegistry includesKey: cl name asString)
        ifFalse: [ 
          "not registered"
          (self primeRegistryCurrentVersionFor: cl)
            ifNotNil: [ :version | 
              | projectSpec repos projectPackage project |
              project := version project.
              projectPackage := project projectPackage.
              repos := nil.
              projectPackage ~~ nil
                ifTrue: [ repos := projectPackage repositories copy ].
              projectSpec := (version project projectSpec
                name: (MetacelloScriptEngine baseNameOf: cl name asString);
                className: cl name asString;
                versionString: version versionString;
                repositories: repos;
                yourself) asConfigurationProjectSpec.
              (prioritizeConfiguration
                or: [ (self primeRegistryProjectSpecRegistered: projectSpec) not ])
                ifTrue: [ 
                  "Configuration override existing registrations or nothing registered yet"
                  self primeRegisterLoadedProjectSpec: projectSpec ] ] ] ]
%

category: 'initialization'
method: MetacelloProjectRegistry
primeRegistryProjectSpecRegistered: projectSpec
  MetacelloProjectRegistration
    registrationForProjectSpec: projectSpec
    ifAbsent: [ :new | ^ false ]
    ifPresent: [ :existing :new | ^ true ]
%

category: 'querying'
method: MetacelloProjectRegistry
projectSpecForClassNamed: aClassName ifAbsent: absentBlock
    ^ (self configurationRegistry
        at: aClassName
        ifAbsent: [ ^ (self baselineRegistry at: aClassName ifAbsent: [^absentBlock value]) baselineProjectSpec ])
        configurationProjectSpec
%

category: 'accessing'
method: MetacelloProjectRegistry
projectSpecs
    "MetacelloProjectRegistration projectSpecs"

    ^ self configurationProjectSpecs , self baselineProjectSpecs
%

category: 'registration'
method: MetacelloProjectRegistry
registerProjectRegistration: aMetacelloProjectRegistration
  "unconditionally register <newRegistration> ... use with care"

  aMetacelloProjectRegistration configurationProjectSpec copy
    ifNotNil: [ :spec | 
      self configurationRegistry
        at: spec className
        ifPresent: [ :existing | 
          (existing configurationProjectSpec registrationsCompareEqual: spec)
            ifFalse: [ 
              Transcript
                cr;
                show:
                    'REGISTRATION OF INCOMPATABLE PROJECTS: ' , existing printString
                        , ' REPLACED BY '
                        , aMetacelloProjectRegistration printString ] ].
      spec versionOrNil
        ifNotNil: [ :version | 
          "resolve symbolic versions for loaded projects"
          spec versionString: version versionString ].
      aMetacelloProjectRegistration configurationProjectSpec: spec.
      (aMetacelloProjectRegistration respondsTo: #'versionInfo')
        ifTrue: [ aMetacelloProjectRegistration versionInfo setVersionString: spec versionString ].
      spec immutable.
      self configurationRegistry
        at: spec className
        put: aMetacelloProjectRegistration ].
  aMetacelloProjectRegistration baselineProjectSpec
    ifNotNil: [ :spec | 
      self baselineRegistry
        at: spec className
        ifPresent: [ :existing | 
          (existing baselineProjectSpec registrationsCompareEqual: spec)
            ifFalse: [ 
              Transcript
                cr;
                show:
                    'REGISTRATION OF INCOMPATABLE PROJECTS: ' , existing printString
                        , ' REPLACED BY '
                        , aMetacelloProjectRegistration printString ] ].
      (aMetacelloProjectRegistration respondsTo: #'versionInfo')
        ifTrue: [ 
          aMetacelloProjectRegistration versionInfo
            setVersionString: spec repositoryVersionString ].
      spec immutable.
      self baselineRegistry
        at: spec className
        put: aMetacelloProjectRegistration ].
  aMetacelloProjectRegistration immutable
%

category: 'registration'
method: MetacelloProjectRegistry
registrationFor: aMetacelloProjectRegistration ifPresent: presentBlock ifAbsent: absentBlock
    | baseName |
    baseName := aMetacelloProjectRegistration baseName.
    aMetacelloProjectRegistration configurationProjectSpec
        ifNotNil: [ :spec | self configurationRegistry at: spec className ifPresent: [ :existing | ^ presentBlock value: existing ] ].
    aMetacelloProjectRegistration baselineProjectSpec
        ifNotNil: [ :spec | self baselineRegistry at: spec className ifPresent: [ :existing | ^ presentBlock value: existing ] ].
    self configurationRegistry
        at: 'ConfigurationOf' , baseName
        ifPresent: [ :existing | ^ presentBlock value: existing ].
    self baselineRegistry at: 'BaselineOf' , baseName ifPresent: [ :existing | ^ presentBlock value: existing ].
    ^ absentBlock value
%

category: 'querying'
method: MetacelloProjectRegistry
registrationForClassNamed: aClassName ifAbsent: absentBlock
  ^ self
    registrationForExactClassNamed: aClassName
    ifAbsent: [ 
      | baseName |
      baseName := MetacelloScriptEngine baseNameOf: aClassName.
      self configurationRegistry
        at: 'ConfigurationOf' , baseName
        ifPresent: [ :registration | ^ registration ].
      self baselineRegistry
        at: 'BaselineOf' , baseName
        ifPresent: [ :registration | ^ registration ].
      absentBlock value ]
%

category: 'querying'
method: MetacelloProjectRegistry
registrationForExactClassNamed: aClassName ifAbsent: absentBlock
  self configurationRegistry
    at: aClassName
    ifPresent: [ :registration | ^ registration ].
  self baselineRegistry
    at: aClassName
    ifPresent: [ :registration | ^ registration ].
  ^ absentBlock value
%

category: 'accessing'
method: MetacelloProjectRegistry
registrations
  ^ self baselineRegistry values , self configurationRegistry values
%

category: 'registration'
method: MetacelloProjectRegistry
unregisterProjectRegistration: aMetacelloProjectRegistration
    aMetacelloProjectRegistration configurationProjectSpec
        ifNotNil: [ :spec | 
            self configurationRegistry
                removeKey: spec className
                ifAbsent: [ self error: 'unexpectedly missing project registration' ] ].
    aMetacelloProjectRegistration baselineProjectSpec
        ifNotNil: [ :spec | self baselineRegistry removeKey: spec className ifAbsent: [ self error: 'unexpectedly missing project registration' ] ]
%

! Class Implementation for MetacelloProjectSpecForLoad

! ------------------- Instance methods for MetacelloProjectSpecForLoad

category: 'testing'
method: MetacelloProjectSpecForLoad
hasOverride
    ^ self overrideProjectSpec ~~ nil
%

category: 'accessing'
method: MetacelloProjectSpecForLoad
overrideProjectSpec
	^ overrideProjectSpec
%

category: 'accessing'
method: MetacelloProjectSpecForLoad
overrideProjectSpec: anObject
	overrideProjectSpec := anObject
%

category: 'operations'
method: MetacelloProjectSpecForLoad
performCurrentVersionTestAgainst: vrsn operator: anOperator targetVersionStatus: targetVersionStatus using: anMCLoader
  "answer true if the current state of image is to be left as is"

  | currentVersion existing new |
  vrsn ifNil: [ ^ false ].
  self useDetermineVersionForLoad
    ifTrue: [ 
      | prjct cv |
      self hasOverride
        ifTrue: [ 
          self
            error:
              'unexpected logic combination: useDeterminVersionForLoad & hasOverride' ].
      prjct := self projectSpec projectClassProject.
      prjct loader: anMCLoader.
      (cv := prjct currentVersion) == nil
        ifTrue: [ ^ false ].
      (targetVersionStatus includes: cv versionStatus)
        ifTrue: [ ^ cv perform: anOperator env: 2 withArguments: { vrsn } ].
      ^ false ].
  true
    ifTrue: [ 
      "unconditional fail test at this point for Issue #388"
      "https://github.com/dalehenrich/metacello-work/issues/388"
      ^ false ].
  (self hasOverride not or: [ targetVersionStatus ~= #(#'allLoadedToSpec') ])
    ifTrue: [ ^ false ].
  (self overrideProjectSpec allPackagesLoaded: anMCLoader)
    ifFalse: [ 
      "roughly equivalent to versionStatus test above (#'allLoadedToSpec')"
      ^ false ].
  (self overrideProjectSpec
    isPartiallyLoaded: self overrideProjectSpec copy loader)
    ifFalse: [ 
      "if the project is not loaded at all"
      ^ false ].
  (currentVersion := self overrideProjectSpec versionOrNil) ifNil: [ ^ false ].
  currentVersion = vrsn
    ifTrue: [ ^ true ].
  existing := self overrideProjectSpec asProjectRegistration.
  new := self projectSpec asProjectRegistration.
  ^ currentVersion > vrsn
    ifTrue: [ 
      "answer false if downgrade allowed"
      (MetacelloAllowProjectDowngrade new
        existingProjectRegistration: existing;
        newProjectRegistration: new;
        signal) == existing ]
    ifFalse: [ 
      "answer false if upgrade allowed"
      (MetacelloAllowProjectUpgrade new
        existingProjectRegistration: existing;
        newProjectRegistration: new;
        signal) == existing ]
%

category: 'operations'
method: MetacelloProjectSpecForLoad
performLoad
  | displayString spec |
  spec := self projectSpec.
  displayString := 'Project: ' , spec name.
  spec versionString ~~ nil
    ifTrue: [ displayString := displayString , ' ' , spec versionString ].
  Transcript
    cr;
    show: displayString.
  self hasOverride
    ifTrue: [ 
      | override |
      override := self overrideProjectSpec copy.
      override mergeScriptLoads: spec.
      override loadVersion: nil ]
    ifFalse: [ 
      | vrsn |
      vrsn := self useDetermineVersionForLoad
        ifTrue: [ spec determineCurrentVersionForLoad ]
        ifFalse: [ spec versionOrNil ].
      (spec asProjectSpecForVersion: vrsn) loadVersion: vrsn ]
%

category: 'accessing'
method: MetacelloProjectSpecForLoad
projectSpec
	^ projectSpec
%

category: 'accessing'
method: MetacelloProjectSpecForLoad
projectSpec: anObject
	projectSpec := anObject
%

category: 'accessing'
method: MetacelloProjectSpecForLoad
useDetermineVersionForLoad
    useDetermineVersionForLoad ifNil: [ useDetermineVersionForLoad := true ].
    ^ useDetermineVersionForLoad
%

category: 'accessing'
method: MetacelloProjectSpecForLoad
useDetermineVersionForLoad: anObject
	useDetermineVersionForLoad := anObject
%

! Class Implementation for MetacelloProjectSpecGenerator

! ------------------- Instance methods for MetacelloProjectSpecGenerator

category: 'accessing'
method: MetacelloProjectSpecGenerator
projectSpecListBlock
    ^ [ MetacelloProjectRegistration projectSpecs ]
%

category: 'accessing'
method: MetacelloProjectSpecGenerator
projectSpecLookupBlock
    ^ [ :projectName | 
    {(MetacelloProjectRegistration
        projectSpecForClassNamed: (MetacelloScriptEngine baselineNameFrom: projectName)
        ifAbsent: [  ]).
    (MetacelloProjectRegistration
        projectSpecForClassNamed: (MetacelloScriptEngine configurationNameFrom: projectName)
        ifAbsent: [  ])} ]
%

category: 'accessing'
method: MetacelloProjectSpecGenerator
target
	^ target
%

category: 'accessing'
method: MetacelloProjectSpecGenerator
target: anObject
	target := anObject
%

! Class Implementation for MetacelloBaselineSpecGenerator

! ------------------- Instance methods for MetacelloBaselineSpecGenerator

category: 'accessing'
method: MetacelloBaselineSpecGenerator
projectSpecListBlock
    ^ [ MetacelloProjectRegistration baselineProjectSpecs ]
%

category: 'accessing'
method: MetacelloBaselineSpecGenerator
projectSpecLookupBlock
    ^ [ :projectName | 
    {(MetacelloProjectRegistration
        projectSpecForClassNamed: (MetacelloScriptEngine baselineNameFrom: projectName)
        ifAbsent: [  ])} ]
%

! Class Implementation for MetacelloConfigurationSpecGenerator

! ------------------- Instance methods for MetacelloConfigurationSpecGenerator

category: 'accessing'
method: MetacelloConfigurationSpecGenerator
projectSpecListBlock
    ^ [ MetacelloProjectRegistration configurationProjectSpecs ]
%

category: 'accessing'
method: MetacelloConfigurationSpecGenerator
projectSpecLookupBlock
    ^ [ :projectName | 
    {(MetacelloProjectRegistration
        projectSpecForClassNamed: (MetacelloScriptEngine configurationNameFrom: projectName)
        ifAbsent: [  ])} ]
%

! Class Implementation for MetacelloScriptEngine

! ------------------- Class methods for MetacelloScriptEngine

category: 'utility'
classmethod: MetacelloScriptEngine
baselineNameFrom: baseName
  "Return the fully-qualified configuration class name."

  ^ (baseName indexOfSubCollection: 'BaselineOf' startingAt: 1) > 0
    ifTrue: [ baseName ]
    ifFalse: [ 'BaselineOf' , baseName ]
%

category: 'utility'
classmethod: MetacelloScriptEngine
baseNameOf: className
  ^ ((className indexOfSubCollection: 'BaselineOf') = 1)
    ifTrue: [ className copyFrom: 'BaselineOf' size + 1 to: className size ]
    ifFalse: [ 
      ((className indexOfSubCollection: 'ConfigurationOf') = 1)
        ifTrue: [ className copyFrom: 'ConfigurationOf' size + 1 to: className size ]
        ifFalse: [ className ] ]
%

category: 'utility'
classmethod: MetacelloScriptEngine
configurationNameFrom: baseName
  "Return the fully-qualified configuration class name."

  ^ (baseName indexOfSubCollection: 'ConfigurationOf' startingAt: 1) > 0
    ifTrue: [ baseName ]
    ifFalse: [ 'ConfigurationOf' , baseName ]
%

category: 'defaults'
classmethod: MetacelloScriptEngine
defaultRepositoryDescription
    DefaultRepositoryDescription
        ifNil: [ DefaultRepositoryDescription := MetacelloPlatform current defaultRepositoryDescription ].
    ^ DefaultRepositoryDescription
%

category: 'defaults'
classmethod: MetacelloScriptEngine
defaultRepositoryDescription: descriptionOrNil
  DefaultRepositoryDescription := descriptionOrNil
%

category: 'defaults'
classmethod: MetacelloScriptEngine
defaultVersionString
    DefaultVersionString ifNil: [ DefaultVersionString := #'stable' ].
    ^ DefaultVersionString
%

! ------------------- Instance methods for MetacelloScriptEngine

category: 'defaults'
method: MetacelloScriptEngine
defaultRepositoryDescription
    ^ self class defaultRepositoryDescription
%

category: 'defaults'
method: MetacelloScriptEngine
defaultVersionString
    ^ self class defaultVersionString
%

category: 'actions api'
method: MetacelloScriptEngine
fetch: required
    self
        fetchRecord: [ :version | 
            required isEmpty
                ifTrue: [ version fetch ]
                ifFalse: [ version fetch: required ] ]
        required: required
%

category: 'actions api'
method: MetacelloScriptEngine
fetchRecord: fetchRecordBlock required: required
  MetacelloProjectRegistration
    copyRegistryWhile: [ 
      self
        handleNotificationsForAction: [ 
          | version loadedSpec |
          self setDefaultsAndValidateProjectSpec.
          [ loadedSpec := self lookupProjectSpecFor: self projectSpec ]
            on: MetacelloAllowProjectDowngrade , MetacelloAllowProjectUpgrade
            do: [ :notification | 
              notification
                handleOnDownGrade: [ :ex :existing :new | ex allowEvenIfLocked ]
                onUpgrade: [ :ex :existing :new | ex allowEvenIfLocked ] ].
          version := loadedSpec versionForScriptEngine: self.
          self root: (fetchRecordBlock value: version) loadDirective ] ]
%

category: 'actions api'
method: MetacelloScriptEngine
get
  " load a fresh copy from repo"

  | spec projectPackage |
  MetacelloProjectRegistration
    copyRegistryRestoreOnErrorWhile: [ 
      | rootProject |
      self setDefaultsAndValidateProjectSpec.
      spec := self projectSpec.
      projectPackage := spec projectPackage.
      projectPackage repositorySpecs
        do: [ :repoSpec | repoSpec createRepository flushForScriptGet ].
      self cacheRepository
        ifNotNil: [ :cacheRepository | projectPackage loader loaderPolicy cacheRepository: cacheRepository ].
      projectPackage load.
      rootProject := (MetacelloPlatform current
        globalNamed: spec className asSymbol) project.
      self root: rootProject.
      spec := spec copyAsConformingProjectSpec: rootProject.
      MetacelloProjectRegistration
        registrationForProjectSpec: spec
        ifAbsent: [ :new | new registerProject ]
        ifPresent: [ :existing :new | 
          existing
            copyOnWrite: [ :existingCopy | 
              spec
                copyForRegistration: existingCopy
                onWrite: [ :specCopy | 
                  specCopy
                    ifNil: [ existingCopy merge: new ]
                    ifNotNil: [ specCopy mergeScriptRepository: spec ] ] ] ] ]
%

category: 'project lookup'
method: MetacelloScriptEngine
getBaselineProjectUnconditionalLoad: unconditionalLoad
    | project |
    project := (self getBaselineUnconditionalLoad: unconditionalLoad) project.
    project version spec repositories: self repositories copy.
    ^ project
%

category: 'project lookup'
method: MetacelloScriptEngine
getBaselineUnconditionalLoad: unconditionalLoad
  | spec |
  spec := self projectSpec.
  MetacelloPlatform current
    globalNamed: spec className asSymbol
    ifPresent: [ :cl | 
      unconditionalLoad
        ifFalse: [ ^ cl ] ].
  spec := self lookupProjectSpecFor: spec.
  [ spec projectPackage load ]
    on: MetacelloIgnorePackageLoaded
    do: [ :ex | 
      "see https://github.com/dalehenrich/metacello-work/issues/244 ... uncoditionally load
        baseline"
      ex resume: true ].
  ^ MetacelloPlatform current globalNamed: spec className asSymbol
%

category: 'project lookup'
method: MetacelloScriptEngine
getConfigurationProjectUnconditionalLoad: unconditionalLoad
    ^ (self getConfigurationUnconditionalLoad: unconditionalLoad) project
%

category: 'project lookup'
method: MetacelloScriptEngine
getConfigurationUnconditionalLoad: unconditionalLoad
  | spec |
  spec := self projectSpec.
  MetacelloPlatform current
    globalNamed: spec className asSymbol
    ifPresent: [ :cl | 
      unconditionalLoad
        ifFalse: [ ^ cl ] ].
  (spec := self lookupProjectSpecFor: spec) projectPackage load.
  ^ MetacelloPlatform current globalNamed: spec className asSymbol
%

category: 'handlers'
method: MetacelloScriptEngine
handleConflict: exception
    ^ (self options at: #'onConflict' ifAbsent: [ ^ exception pass ])
        cull: exception
        cull: exception existingProjectRegistration
        cull: exception newProjectRegistration
%

category: 'handlers'
method: MetacelloScriptEngine
handleDowngrade: exception
    ^ (self options at: #'onDowngrade' ifAbsent: [ ^ exception pass ])
        cull: exception
        cull: exception existingProjectRegistration
        cull: exception newProjectRegistration
%

category: 'handlers'
method: MetacelloScriptEngine
handleEnsureProjectLoadedForDevelopment: exception
    "if useCurrentVersion resume with true, else resume with false"

    ^ exception resume: self useCurrentVersion
%

category: 'handlers'
method: MetacelloScriptEngine
handleLock: exception
  ^ (self options at: #'onLock' ifAbsent: [ ^ exception pass ])
    cull: exception
    cull: exception existingProjectRegistration
    cull: exception newProjectRegistration
%

category: 'handlers'
method: MetacelloScriptEngine
handleLookupBaselineSpecForEnsureLoad: exception
  "if requested and registered don't compare equal, then ensure the new baseline is loaded"

  | requested registered |
  requested := exception projectSpec.
  registered := self lookupProjectSpecFor: exception projectSpec.
  ^ exception resume: (registered compareEqual: requested) not
%

category: 'handlers'
method: MetacelloScriptEngine
handleLookupProjectSpec: exception
    ^ exception
        resume:
            ((self lookupProjectSpecFor: exception projectSpec) ifNil: [ ^ exception resume: exception projectSpec ])
%

category: 'handlers'
method: MetacelloScriptEngine
handleLookupProjectSpecForLoad: exception
  "if overrideProjectSpec is nil, use currentVersion in image, ignoreImage is false"

  | requested override |
  requested := exception projectSpec.
  override := self useCurrentVersion
    ifTrue: [ 
      "don't do lookup in registry if we expect to use the #currentVersion calculation"
      nil ]
    ifFalse: [ 
      | registered |
      registered := self lookupProjectSpecFor: exception projectSpec.
      (registered compareEqual: requested)
        ifFalse: [ 
          "counts as override, only if they differ in some aspect"
          override := registered ] ].
  ^ exception
    resume:
      (MetacelloProjectSpecForLoad new
        projectSpec: requested;
        useDetermineVersionForLoad: self useCurrentVersion;
        overrideProjectSpec: override;
        yourself)
%

category: 'handlers'
method: MetacelloScriptEngine
handleNotificationsForAction: actionBlock
  [ 
  [ 
  [ 
  actionBlock
    on:
      MetacelloLookupProjectSpec , MetacelloLookupProjectSpecForLoad
        , MetacelloProjectSpecLoadedNotification
        , MetacelloScriptEnsureProjectLoadedForDevelopment
        , MetacelloLookupBaselineSpecForEnsureLoad
    do: [ :ex | 
      "lookup and registration handlers need to be innermost set of handlers ...they may throw option notifications"
      ex handleResolutionFor: self ] ]
    on:
      MetacelloAllowProjectDowngrade , MetacelloAllowProjectUpgrade
        , MetacelloAllowConflictingProjectUpgrade
    do: [ :ex | 
      "option handlers need to be outermost set of handlers ... last line of defense before users are involved"
      ex handleResolutionFor: self ] ]
    on: MetacelloAllowLockedProjectChange
    do: [ :ex | 
      "MetacelloAllowLockedProjectChange need to be outermost handler ... since it is signaled from second line of handlers"
      ex handleResolutionFor: self ] ]
    on: Warning
    do: [ :ex | 
      "Warning is absolute outermost handler"
      self handleWarning: ex ]
%

category: 'handlers'
method: MetacelloScriptEngine
handleProjectSpecLoaded: exception
    MetacelloProjectRegistration
        registrationForProjectSpec: exception projectSpec
        ifAbsent: [ :new | 
            new
                loadedInImage: true;
                registerProject ]
        ifPresent: [ :existing :new | 
            "unconditionally merge new with existing (updates registration)"
            existing
                copyOnWrite: [ :existingCopy | 
                    existingCopy
                        loadedInImage: true;
                        merge: new ] ].
    exception resume
%

category: 'handlers'
method: MetacelloScriptEngine
handleUpgrade: exception
    ^ (self options at: #'onUpgrade' ifAbsent: [ ^ exception pass ])
        cull: exception
        cull: exception existingProjectRegistration
        cull: exception newProjectRegistration
%

category: 'handlers'
method: MetacelloScriptEngine
handleWarning: exception
  ^ (self options at: #'onWarning' ifAbsent: [ ^ exception pass ])
    cull: exception
%

category: 'options'
method: MetacelloScriptEngine
ignoreImage
    ^ self options at: #'ignoreImage' ifAbsent: [ false ]
%

category: 'actions api'
method: MetacelloScriptEngine
list
  self setDefaultsAndValidateProjectSpec.
  self root: self projectSpec
%

category: 'actions api'
method: MetacelloScriptEngine
load: required
  "allow downgrade, upgrade and broken lock when a locked project is directly loaded"

  self
    load: required
    onProjectDownGrade: [ :ex :existing :new | ex allowEvenIfLocked ]
    onProjectUpgrade: [ :ex :existing :new | ex allowEvenIfLocked ]
    onLockedProjectChange: [ :ex :existing :new | ex allowEvenIfLocked ]
%

category: 'actions api'
method: MetacelloScriptEngine
load: required onProjectDownGrade: onDownGradeBlock onProjectUpgrade: onUpgradeBlock onLockedProjectChange: onProjectChangeBlock
  MetacelloProjectRegistration
    copyRegistryRestoreOnErrorWhile: [ 
      self
        handleNotificationsForAction: [ 
          | version loadedSpec |
          self setDefaultsAndValidateProjectSpec.
          [ loadedSpec := (self lookupProjectSpecFor: self projectSpec) copy ]
            on:
              MetacelloAllowProjectDowngrade , MetacelloAllowProjectUpgrade
                , MetacelloAllowLockedProjectChange
            do: [ :ex | 
              ex
                handleOnDownGrade: onDownGradeBlock
                onUpgrade: onUpgradeBlock
                onLockedProjectChange: onProjectChangeBlock ].
          version := loadedSpec versionForScriptEngine: self.
          self
            root:
              (required isEmpty
                ifTrue: [ version load ]
                ifFalse: [ version load: required ]) loadDirective.
          loadedSpec loads: required.
          MetacelloProjectRegistration
            registrationForProjectSpec: loadedSpec
            ifAbsent: [ :new | 
              new
                loadedInImage: true;
                registerProject ]
            ifPresent: [ :existing :new | 
              existing
                copyOnWrite: [ :existingCopy | 
                  existingCopy
                    loadedInImage: true;
                    merge: new ] ] ] ]
%

category: 'actions api'
method: MetacelloScriptEngine
lock
  | spec |
  MetacelloProjectRegistration
    copyRegistryRestoreOnErrorWhile: [ 
      self setDefaultsAndValidate: self projectSpec copy.	"don't add defaults"
      spec := self projectSpec.
      MetacelloProjectRegistration
        registrationForProjectSpec: spec
        ifAbsent: [ :new | 
          new
            locked: true;
            registerProject ]
        ifPresent: [ :existing :new | 
          existing
            copyOnWrite: [ :existingCopy | 
              existingCopy locked: true.
              spec
                copyForRegistration: existingCopy
                onWrite: [ :specCopy | 
                  specCopy
                    ifNil: [ existingCopy merge: new ]
                    ifNotNil: [ 
                      specCopy mergeScriptRepository: spec.
                      spec := specCopy ] ] ] ].
      self root: spec ]
%

category: 'project lookup'
method: MetacelloScriptEngine
lookupProjectSpecFor: aProjectSpec
  "if there is no conflict, choose new spec"

  | registration |
  registration := MetacelloProjectRegistration
    registrationForProjectSpec: aProjectSpec
    ifAbsent: [ :new | new ]
    ifPresent: [ :existing :new | 
      (existing hasLoadConflicts: new)
        ifTrue: [ 
          ((existing canUpgradeTo: new)
            ifTrue: [ MetacelloAllowProjectUpgrade new ]
            ifFalse: [ 
              (existing canDowngradeTo: new)
                ifTrue: [ MetacelloAllowProjectDowngrade new ]
                ifFalse: [ MetacelloAllowConflictingProjectUpgrade new ] ])
            existingProjectRegistration: existing;
            newProjectRegistration: new;
            signal ]
        ifFalse: [ new ] ].
  ^ registration projectSpec
%

category: 'accessing'
method: MetacelloScriptEngine
options
    options ifNil: [ options := Dictionary new ].
    ^ options
%

category: 'accessing'
method: MetacelloScriptEngine
options: aDictionary
    options := aDictionary
%

category: 'accessing'
method: MetacelloScriptEngine
projectName
    ^ self projectSpec name
%

category: 'accessing'
method: MetacelloScriptEngine
projectSpec
    ^ projectSpec
%

category: 'accessing'
method: MetacelloScriptEngine
projectSpec: aProjectSpec
    projectSpec := aProjectSpec
%

category: 'actions api'
method: MetacelloScriptEngine
record: required
    self
        fetchRecord: [ :version | 
            required isEmpty
                ifTrue: [ version record ]
                ifFalse: [ version record: required ] ]
        required: required
%

category: 'actions api'
method: MetacelloScriptEngine
register
  | spec |
  self setDefaultsAndValidate: self projectSpec copy.	"don't add defaults"
  spec := self projectSpec.
  MetacelloProjectRegistration
    registrationForProjectSpec: spec
    ifAbsent: [ :new | new registerProject ]
    ifPresent: [ :existing :new | existing copyOnWrite: [ :existingCopy | existingCopy merge: new ] ].
  self root: spec
%

category: 'accessing'
method: MetacelloScriptEngine
repositories
    ^ self projectSpec repositories
%

category: 'accessing'
method: MetacelloScriptEngine
root
	^ root
%

category: 'accessing'
method: MetacelloScriptEngine
root: anObject
	root := anObject
%

category: 'project lookup'
method: MetacelloScriptEngine
setDefaultsAndValidate: aProjectSpec
  "NOTE: aProjectSpec has defaults assigned if versionString or repository missing"

  | issues |
  issues := aProjectSpec
    validateForScriptLoad: self
    withDefaultVersionString: self defaultVersionString
    withDefaultRepositoryDecription: self defaultRepositoryDescription.
  issues isEmpty
    ifTrue: [ ^ self ].
  (MetacelloValidationFailure
    issues: issues
    message: 'Project spec validation failure') signal
%

category: 'project lookup'
method: MetacelloScriptEngine
setDefaultsAndValidateProjectSpec
  "NOTE: projectSpec has defaults assigned if versionString or repository missing"

  self setDefaultsAndValidate: self projectSpec
%

category: 'options'
method: MetacelloScriptEngine
silently
    ^ self options at: #'silently' ifAbsent: [ false ]
%

category: 'actions api'
method: MetacelloScriptEngine
unlock
  | spec |
  MetacelloProjectRegistration
    copyRegistryRestoreOnErrorWhile: [ 
      self setDefaultsAndValidate: self projectSpec copy.	"don't add defaults"
      spec := self projectSpec.
      MetacelloProjectRegistration
        registrationForProjectSpec: spec
        ifAbsent: [ :ignored |  ]
        ifPresent: [ :existing :new | existing copyOnWrite: [ :existingCopy | existingCopy locked: false ] ].
      self root: spec ]
%

category: 'actions api'
method: MetacelloScriptEngine
unregister
  | spec |
  self setDefaultsAndValidate: self projectSpec copy.	"don't add defaults"
  spec := self projectSpec.
  MetacelloProjectRegistration
    registrationForProjectSpec: spec
    ifAbsent: [ :ignored |  ]
    ifPresent: [ :existing :new | existing unregisterProject ].
  self root: spec
%

category: 'options'
method: MetacelloScriptEngine
useCurrentVersion
    "private option used to implement the classic mode"

    ^ self options at: #'useCurrentVersion' ifAbsent: [ false ]
%

! Class Implementation for MetacelloScriptExecutor

! ------------------- Instance methods for MetacelloScriptExecutor

category: 'execution'
method: MetacelloScriptExecutor
applyArgsToProjectSpec: aProjectSpec
    classNameArg ifNotNil: [ aProjectSpec className: classNameArg ].
    versionArg ifNotNil: [ aProjectSpec versionString: versionArg ].
    repositoryArg ifNotNil: [ aProjectSpec repository: repositoryArg ].
    ^ aProjectSpec
%

category: 'args'
method: MetacelloScriptExecutor
baselineArg
	^ baselineArg
%

category: 'args'
method: MetacelloScriptExecutor
baselineArg: anObject
	baselineArg := anObject
%

category: 'options api'
method: MetacelloScriptExecutor
cacheRepository: aRepositoryDescription
    self options at: #'cacheRepository' put: aRepositoryDescription
%

category: 'args'
method: MetacelloScriptExecutor
classNameArg
    ^ classNameArg
%

category: 'args'
method: MetacelloScriptExecutor
classNameArg: anObject
    classNameArg := anObject
%

category: 'args'
method: MetacelloScriptExecutor
configurationArg
    ^ configurationArg
%

category: 'args'
method: MetacelloScriptExecutor
configurationArg: anObject
    configurationArg := anObject
%

category: 'execution'
method: MetacelloScriptExecutor
execute: statements
  statements
    do: [ :assoc | 
      assoc value
        ifNil: [ self perform: assoc key env: 2 withArguments: {} ]
        ifNotNil: [ self perform: assoc key env: 2 withArguments: assoc value ] ].
  projectSpecGenerator := self projectSpecGenerator.
  projectSpecGenerator target
    execute: [ :projectSpec | 
      | engine |
      engine := MetacelloScriptEngine new
        options: self options copy;
        projectSpec: projectSpec;
        yourself.
      engine perform: actionArg key env: 2 withArguments: actionArg value.
      engine root ifNotNil: [ :root | self roots add: root ] ]
    against: self.
  ^ (self singleRoot and: [ self roots size == 1 ])
    ifTrue: [ self roots first ]
    ifFalse: [ self roots ]
%

category: 'execution callback'
method: MetacelloScriptExecutor
executeBlock: selectBlock do: projectSpecBlock
    ((projectSpecGenerator projectSpecListBlock value select: selectBlock) select: self projectSpecSelectBlock)
        do: [ :projectSpec | projectSpecBlock value: (self applyArgsToProjectSpec: projectSpec copy) ]
%

category: 'execution callback'
method: MetacelloScriptExecutor
executeCollection: aCollection do: projectSpecBlock
    aCollection
        do: [ :projectName | 
            ((projectSpecGenerator projectSpecLookupBlock value: projectName) select: self projectSpecSelectBlock)
                do: [ :projectSpec | projectSpecBlock value: (self applyArgsToProjectSpec: projectSpec copy) ] ]
%

category: 'execution callback'
method: MetacelloScriptExecutor
executeString: aString do: projectSpecBlock
  singleRoot ifNil: [ self singleRoot: true ].
  ((projectSpecGenerator projectSpecLookupBlock value: aString)
    select: self projectSpecSelectBlock)
    do: [ :projectSpec | projectSpecBlock value: (self applyArgsToProjectSpec: projectSpec copy) ]
%

category: 'actions api'
method: MetacelloScriptExecutor
fetch: required
    actionArg := #'fetch:' -> {required}
%

category: 'actions api'
method: MetacelloScriptExecutor
get
    actionArg := #'get' -> #()
%

category: 'options api'
method: MetacelloScriptExecutor
ignoreImage: aBool
    self options at: #'ignoreImage' put: aBool
%

category: 'actions api'
method: MetacelloScriptExecutor
list
  actionArg := #'list' -> #().
  self singleRoot: false
%

category: 'actions api'
method: MetacelloScriptExecutor
load: required
    actionArg := #'load:' -> {required}
%

category: 'actions api'
method: MetacelloScriptExecutor
lock
    actionArg := #'lock' -> #()
%

category: 'options api'
method: MetacelloScriptExecutor
onConflict: aBlock
    self options at: #'onConflict' put: aBlock
%

category: 'options api'
method: MetacelloScriptExecutor
onDowngrade: aBlock
    self options at: #'onDowngrade' put: aBlock
%

category: 'options api'
method: MetacelloScriptExecutor
onLock: aBlock
  self options at: #'onLock' put: aBlock
%

category: 'options api'
method: MetacelloScriptExecutor
onUpgrade: aBlock
    self options at: #'onUpgrade' put: aBlock
%

category: 'options api'
method: MetacelloScriptExecutor
onWarning: aBlock
  self options at: #'onWarning' put: aBlock
%

category: 'accessing'
method: MetacelloScriptExecutor
options
    options ifNil: [ options := Dictionary new ].
    ^ options
%

category: 'args'
method: MetacelloScriptExecutor
projectArg
    ^ projectArg
%

category: 'args'
method: MetacelloScriptExecutor
projectArg: anObject
    projectArg := anObject
%

category: 'execution'
method: MetacelloScriptExecutor
projectSpecGenerator
    baselineArg
        ifNotNil: [ 
            configurationArg ifNotNil: [ self error: ' baseline: and configuration: are both be specified' ].
            projectArg ifNotNil: [ self error: ' baseline: and project are both be specified' ].
            ^ MetacelloBaselineSpecGenerator new
                target: baselineArg;
                yourself ].
    configurationArg
        ifNotNil: [ 
            baselineArg ifNotNil: [ self error: ' baseline: and configuration: are both be specified' ].
            projectArg ifNotNil: [ self error: ' configuration and project are both be specified' ].
            ^ MetacelloConfigurationSpecGenerator new
                target: configurationArg;
                yourself ].
    projectArg
        ifNotNil: [ 
            configurationArg ifNotNil: [ self error: ' project and configuration: are both be specified' ].
            baselineArg ifNotNil: [ self error: ' baseline: and project are both be specified' ].
            ^ MetacelloProjectSpecGenerator new
                target: projectArg;
                yourself ].
    self error: 'project, baseline, or configuration not specified'
%

category: 'execution callback'
method: MetacelloScriptExecutor
projectSpecSelectBlock
    ^ [ :projectSpec | true ]
%

category: 'actions api'
method: MetacelloScriptExecutor
record: required
    actionArg := #'record:' -> {required}
%

category: 'actions api'
method: MetacelloScriptExecutor
register
  actionArg := #'register' -> #()
%

category: 'args'
method: MetacelloScriptExecutor
repositoryArg
    ^ repositoryArg
%

category: 'args'
method: MetacelloScriptExecutor
repositoryArg: anObject
    repositoryArg := anObject
%

category: 'options api'
method: MetacelloScriptExecutor
repositoryOverrides: aRepositoryDescriptionList
    self options at: #'repositoryOverrides' put: aRepositoryDescriptionList
%

category: 'accessing'
method: MetacelloScriptExecutor
roots
    roots ifNil: [ roots := OrderedCollection new ].
    ^ roots
%

category: 'options api'
method: MetacelloScriptExecutor
silently: aBool
    self options at: #'silently' put: aBool
%

category: 'accessing'
method: MetacelloScriptExecutor
singleRoot
  singleRoot ifNil: [ singleRoot := false ].
  ^ singleRoot
%

category: 'accessing'
method: MetacelloScriptExecutor
singleRoot: aBool
  singleRoot := aBool
%

category: 'actions api'
method: MetacelloScriptExecutor
unlock
    actionArg := #'unlock' -> #()
%

category: 'actions api'
method: MetacelloScriptExecutor
unregister
  actionArg := #'unregister' -> #()
%

category: 'options api'
method: MetacelloScriptExecutor
useCurrentVersion: aBool
    "private option used to implement the classic mode"

    self options at: #'useCurrentVersion' put: aBool
%

category: 'args'
method: MetacelloScriptExecutor
versionArg
    ^ versionArg
%

category: 'args'
method: MetacelloScriptExecutor
versionArg: anObject
    versionArg := anObject
%

! Class Implementation for MetacelloScriptApiExecutor

! ------------------- Instance methods for MetacelloScriptApiExecutor

category: 'execution callback'
method: MetacelloScriptApiExecutor
executeBlock: selectBlock do: projectSpecBlock
    (self projectSpecsFromRepositoryArg select: selectBlock)
        do: [ :projectSpec | projectSpecBlock value: (self applyArgsToProjectSpec: projectSpec copy) ]
%

category: 'execution callback'
method: MetacelloScriptApiExecutor
executeCollection: aCollection do: projectSpecBlock
    self projectSpecsFromRepositoryArg
        do: [ :projectSpec | 
            (aCollection includes: (MetacelloScriptEngine baseNameOf: projectSpec className))
                ifTrue: [ projectSpecBlock value: (self applyArgsToProjectSpec: projectSpec copy) ] ]
%

category: 'execution callback'
method: MetacelloScriptApiExecutor
executeString: aString do: projectSpecBlock
  singleRoot ifNil: [ self singleRoot: true ].
  (projectSpecGenerator projectSpecCreationBlock value: aString)
    do: [ :projectSpec | 
      projectSpec
        ifNotNil: [ projectSpecBlock value: (self applyArgsToProjectSpec: projectSpec copy) ] ]
%

! Class Implementation for MetacelloScriptImageExecutor

! ------------------- Instance methods for MetacelloScriptImageExecutor

category: 'execution callback'
method: MetacelloScriptImageExecutor
projectSpecSelectBlock
    ^ [ :projectSpec | 
    projectSpec
        ifNil: [ false ]
        ifNotNil: [ 
            MetacelloProjectRegistration
                registrationForProjectSpec: projectSpec
                ifAbsent: [ false ]
                ifPresent: [ :existingRegistration :newRegistration | existingRegistration loadedInImage ] ] ]
%

! Class Implementation for MetacelloScriptRegistryExecutor

! ------------------- Instance methods for MetacelloScriptRegistryExecutor

category: 'actions api'
method: MetacelloScriptRegistryExecutor
prime
%

category: 'execution callback'
method: MetacelloScriptRegistryExecutor
projectSpecSelectBlock
  ^ [ :projectSpec | projectSpec notNil ]
%

category: 'actions api'
method: MetacelloScriptRegistryExecutor
remove
%

category: 'actions api'
method: MetacelloScriptRegistryExecutor
reset
%

! Class Implementation for MetacelloSpec

! ------------------- Class methods for MetacelloSpec

category: 'instance creation'
classmethod: MetacelloSpec
for: aVersionMap

	^(self platformClass new)
		for: aVersionMap;
		yourself
%

category: 'accessing'
classmethod: MetacelloSpec
platformClass

	^self
%

! ------------------- Instance methods for MetacelloSpec

category: 'merging'
method: MetacelloSpec
aboutToCopy
%

category: 'spec creation'
method: MetacelloSpec
addMember

	^MetacelloAddMemberSpec for: self project
%

category: 'querying'
method: MetacelloSpec
answers

	^#()
%

category: 'printing'
method: MetacelloSpec
configMethodOn: aStream

	self configMethodOn: aStream indent: 0
%

category: 'printing'
method: MetacelloSpec
configMethodOn: aStream indent: indent

	self subclassResponsibility
%

category: 'spec creation'
method: MetacelloSpec
copyMember

	^MetacelloCopyMemberSpec for: self project
%

category: 'mutability'
method: MetacelloSpec
copyOnWrite: aBlock
    "assume that only registered projects are immutable ... otherwise you'll get an error"

    | copy |
    copy := self copy.
    aBlock value: copy.
    ^ copy
%

category: 'doits'
method: MetacelloSpec
doItBlock: selector

	selector == nil ifTrue: [ ^nil ].
	selector numArgs = 0
		ifTrue: [ ^[ self project configuration perform: selector env: 2 withArguments: {} ] ].
	selector numArgs = 1
		ifTrue: [ ^[:aLoader | self project configuration perform: selector env: 2 withArguments: { aLoader } ] ].
	selector numArgs = 2
		ifTrue: [ ^[:aLoader :pkgSpec | self project configuration perform: selector env: 2 withArguments: {aLoader. pkgSpec } ] ].
	^nil
%

category: 'initialization'
method: MetacelloSpec
for: aProject
    self shouldBeMutable.
    project := aProject
%

category: 'mutability'
method: MetacelloSpec
immutable
    mutable := false
%

category: 'mutability'
method: MetacelloSpec
isMutable
  ^ mutable ifNil: [ ^ true ]
%

category: 'printing'
method: MetacelloSpec
label

	^self printString
%

category: 'accessing'
method: MetacelloSpec
loader

	loader == nil 
		ifTrue: [ | prjctLoader |
			(prjctLoader := self project loader) == nil
				ifTrue: [ self loader: (self project loaderClass on: self) ]
				ifFalse: [ self loader: prjctLoader ]].
	^loader
%

category: 'accessing'
method: MetacelloSpec
loader: aLoader
    "We're interested in propogating the loader state, _except_ for the spec"

    self shouldBeMutable.
    loader := aLoader copy.
    loader spec: self
%

category: 'importing'
method: MetacelloSpec
mergeImportLoads: aLoadList
    self error: 'import: can only be used with baseline project specs'
%

category: 'merging'
method: MetacelloSpec
mergeMap

	^Dictionary new.
%

category: 'spec creation'
method: MetacelloSpec
mergeMember

	^MetacelloMergeMemberSpec for: self project
%

category: 'merging'
method: MetacelloSpec
mergeSpec: aSpec
  | newSpec nonOverridable platform |
  self validateMergeForSpec: aSpec.
  newSpec := self copy.
  nonOverridable := self nonOverridable.
  platform := MetacelloPlatform current.
  aSpec mergeMap
    keysAndValuesDo: [ :key :value | 
      (nonOverridable includes: key)
        ifFalse: [ 
          value ~~ nil
            ifTrue: [ platform object: newSpec atInstVarNamed: key asString put: value ] ] ].
  ^ newSpec
%

category: 'mutability'
method: MetacelloSpec
mutable
    mutable := true
%

category: 'merging'
method: MetacelloSpec
nonOverridable

	^#()
%

set compile_env: 0

category: 'copying'
method: MetacelloSpec
postCopy
    super postCopy.
    mutable := nil.
    loader ~~ nil
        ifTrue: [ self loader: loader ].
%

set compile_env: 2

category: 'doits'
method: MetacelloSpec
postLoadDoIt
  ^ self project valueHolderSpec
    value: nil;
    yourself
%

category: 'doits'
method: MetacelloSpec
postLoadDoItBlock

	^self doItBlock: self postLoadDoIt value
%

category: 'doits'
method: MetacelloSpec
preLoadDoIt
  ^ self project valueHolderSpec
    value: nil;
    yourself
%

category: 'doits'
method: MetacelloSpec
preLoadDoItBlock

	^self doItBlock: self preLoadDoIt value
%

category: 'printing'
method: MetacelloSpec
printOn: aStream

	self configMethodOn: aStream indent: 0
%

category: 'querying'
method: MetacelloSpec
project

	^project
%

category: 'spec creation'
method: MetacelloSpec
removeMember

	^MetacelloRemoveMemberSpec for: self project
%

category: 'mutability'
method: MetacelloSpec
shouldBeMutable
    self isMutable
        ifTrue: [ ^ self ].
    self error: 'Not allowed to modify an immutable object'
%

category: 'merging'
method: MetacelloSpec
speciesForMerge

  ^ self class
%

category: 'merging'
method: MetacelloSpec
validateMergeForSpec: aSpec
    aSpec speciesForMerge = self speciesForMerge
        ifFalse: [ 
            self
                error:
                    'The project spec ' , self name printString , ' in project ' , self project label , ' has incompatible specs. '
                        , aSpec class name asString , ' and ' , self class name asString , ' are not compatible.' ]
%

! Class Implementation for MetacelloAbstractPackageSpec

! ------------------- Instance methods for MetacelloAbstractPackageSpec

category: 'adding'
method: MetacelloAbstractPackageSpec
addToMetacelloPackages: aMetacelloPackagesSpec

	aMetacelloPackagesSpec addMember: 
		(aMetacelloPackagesSpec addMember 
			name: self name;
			spec: self;
			yourself)
%

category: 'querying'
method: MetacelloAbstractPackageSpec
answers

	answers == nil ifTrue: [ answers := #() ].
	^answers
%

category: 'accessing'
method: MetacelloAbstractPackageSpec
answers: aListOfPairs

	self setAnswers: aListOfPairs
%

category: 'printing'
method: MetacelloAbstractPackageSpec
configMethodBodyOn: aStream hasName: hasName cascading: cascading indent: indent
  | hasCascading hasRequires hasIncludes hasAnswers platform |
  platform := MetacelloPlatform current.
  hasCascading := cascading.
  hasRequires := self requires isEmpty not.
  hasIncludes := self includes isEmpty not.
  hasAnswers := self answers isEmpty not.
  hasRequires
    ifTrue: [ 
      hasName | hasIncludes | hasAnswers | hasCascading
        ifTrue: [ 
          aStream cr.
          indent timesRepeat: [ aStream tab ] ].
      aStream nextPutAll: 'requires: #('.
      self requires do: [ :str | aStream nextPutAll: str printString , ' ' ].
      hasIncludes | hasAnswers | hasCascading
        ifTrue: [ aStream nextPutAll: ');' ]
        ifFalse: [ aStream nextPut: $) ] ].
  hasIncludes
    ifTrue: [ 
      hasName | hasRequires | hasAnswers | hasCascading
        ifTrue: [ 
          aStream cr.
          indent timesRepeat: [ aStream tab ] ].
      aStream nextPutAll: 'includes: #('.
      self includes do: [ :str | aStream nextPutAll: str printString , ' ' ].
      hasAnswers | hasCascading
        ifTrue: [ aStream nextPutAll: ');' ]
        ifFalse: [ aStream nextPut: $) ] ].
  hasAnswers
    ifTrue: [ 
      hasName | hasRequires | hasIncludes | hasCascading
        ifTrue: [ 
          aStream cr.
          indent timesRepeat: [ aStream tab ] ].
      aStream nextPutAll: 'supplyingAnswers: #( '.
      self answers
        do: [ :ar | 
          aStream nextPutAll: '#( '.
          ar
            do: [ :val | 
              ((platform isString: val)
                or: [ 
                  (platform isNumber: val)
                    or: [ (platform isSymbol: val) or: [ platform isCharacter: val ] ] ])
                ifTrue: [ aStream nextPutAll: val printString , ' ' ].
              val == true
                ifTrue: [ aStream nextPutAll: 'true ' ].
              val == false
                ifTrue: [ aStream nextPutAll: 'false ' ] ].
          aStream nextPutAll: ') ' ].
      hasCascading
        ifTrue: [ aStream nextPutAll: ');' ]
        ifFalse: [ aStream nextPut: $) ] ]
%

category: 'printing'
method: MetacelloAbstractPackageSpec
configMethodCascadeOn: aStream member: aMember last: lastCascade indent: indent

	self subclassResponsibility
%

category: 'printing'
method: MetacelloAbstractPackageSpec
configMethodOn: aStream for: aValue selector: selector cascading: cascading cascade: cascade indent: indent
  | valuePrintString |
  aValue == nil
    ifTrue: [ ^ self ].
  cascading
    ifTrue: [ 
      aStream cr.
      indent timesRepeat: [ aStream tab ] ].
  valuePrintString := (MetacelloPlatform current isSymbol: aValue value)
    ifTrue: [ '#' , aValue value asString printString ]
    ifFalse: [ aValue value printString ].
  aStream nextPutAll: selector , valuePrintString.
  cascade
    ifTrue: [ aStream nextPut: $; ]
%

category: 'testing'
method: MetacelloAbstractPackageSpec
hasRepository
    ^ false
%

category: 'querying'
method: MetacelloAbstractPackageSpec
includes

	includes == nil ifTrue: [ includes := #() ].
	^includes
%

category: 'accessing'
method: MetacelloAbstractPackageSpec
includes: aCollection

	aCollection setIncludesInMetacelloPackage: self
%

category: 'private'
method: MetacelloAbstractPackageSpec
includesForPackageOrdering
  ^ #()
%

category: 'private'
method: MetacelloAbstractPackageSpec
includeSpecNamesForPackageOrdering: aVersionSpec
  ^ self specs: self includesForPackageOrdering forPackageOrdering: aVersionSpec
%

category: 'printing'
method: MetacelloAbstractPackageSpec
label

	^self name
%

category: 'merging'
method: MetacelloAbstractPackageSpec
mergeIntoMetacelloPackages: aMetacelloPackagesSpec

	aMetacelloPackagesSpec addMember: 
		(aMetacelloPackagesSpec mergeMember 
			name: self name;
			spec: self;
			yourself)
%

category: 'merging'
method: MetacelloAbstractPackageSpec
mergeMap

	| map |
	map := super mergeMap.
	map at: #requires put: requires.
	map at: #includes put: includes.
	map at: #answers put: answers.
	^map
%

category: 'merging'
method: MetacelloAbstractPackageSpec
mergeSpec: anotherSpec

	| newSpec map anotherRequires anotherIncludes anotherAnswers |
	newSpec := super mergeSpec: anotherSpec.
	map := anotherSpec mergeMap.
	anotherSpec name ~~ nil 
		ifTrue: [ newSpec name: anotherSpec name ].
	(anotherRequires := map at: #requires) ~~ nil
		ifTrue: [ newSpec setRequires: self requires, anotherRequires ].
	(anotherIncludes := map at: #includes) ~~ nil
		ifTrue: [ newSpec setIncludes: self includes, anotherIncludes ].
	(anotherAnswers := map at: #answers) ~~ nil
		ifTrue: [ newSpec setAnswers: self answers, anotherAnswers ].
	^newSpec
%

category: 'querying'
method: MetacelloAbstractPackageSpec
name

	^name
%

category: 'accessing'
method: MetacelloAbstractPackageSpec
name: aString
    ((aString at: 1) isSeparator or: [ (aString at: aString size) isSeparator ])
        ifTrue: [ self error: 'Names are not allowed to have leading or trailing blanks: ' , aString printString ].
    name := aString
%

category: 'merging'
method: MetacelloAbstractPackageSpec
nonOverridable

	^#( includes requires answers )
%

category: 'copying'
method: MetacelloAbstractPackageSpec
postCopy

	super postCopy.
	requires := requires copy.
	includes := includes copy.
	answers := answers copy.
%

category: 'visiting'
method: MetacelloAbstractPackageSpec
projectDo: projectBlock packageDo: packageBlock groupDo: groupBlock

	self subclassResponsibility
%

category: 'accessing'
method: MetacelloAbstractPackageSpec
referencedSpec

	^self
%

category: 'removing'
method: MetacelloAbstractPackageSpec
removeFromMetacelloPackages: aMetacelloPackagesSpec

	aMetacelloPackagesSpec addMember: 
		(aMetacelloPackagesSpec removeMember 
			name: self name;
			spec: self;
			yourself)
%

category: 'private'
method: MetacelloAbstractPackageSpec
requiredSpecNamesForPackageOrdering: aVersionSpec
  ^ (self requiredSpecsForPackageOrdering: aVersionSpec)
    collect: [ :spec | spec name ]
%

category: 'private'
method: MetacelloAbstractPackageSpec
requiredSpecsForPackageOrdering: aVersionSpec
  ^ self specs: self requires forPackageOrdering: aVersionSpec
%

category: 'querying'
method: MetacelloAbstractPackageSpec
requires

	requires == nil ifTrue: [ requires := #() ].
	^requires
%

category: 'accessing'
method: MetacelloAbstractPackageSpec
requires: aCollection

	aCollection setRequiresInMetacelloPackage: self
%

category: 'private'
method: MetacelloAbstractPackageSpec
requiresSpecsForPackageOrdering: aVersionSpec
  ^ {self}
%

category: 'private'
method: MetacelloAbstractPackageSpec
resolveSpecsForPackageOrdering: aVersionSpec
  ^ {self}
%

category: 'private'
method: MetacelloAbstractPackageSpec
setAnswers: aCollection

	answers := aCollection
%

category: 'private'
method: MetacelloAbstractPackageSpec
setIncludes: aCollection

	includes := aCollection
%

category: 'private'
method: MetacelloAbstractPackageSpec
setRequires: aCollection

	requires := aCollection
%

category: 'private'
method: MetacelloAbstractPackageSpec
specs: specNames forPackageOrdering: aVersionSpec
  | packageOrProjectSpecs |
  packageOrProjectSpecs := Set new.
  specNames
    do: [ :specName | 
      | spec |
      "get project/group/package specs"
      spec := aVersionSpec
        packageNamed: specName
        ifAbsent: [ 
          MetacelloNameNotDefinedError
            signal:
              'project group, or package named: ' , specName printString
                ,
                  ' not found when used in requires: or includes: field of package: '
                , self name printString , ' for version: '
                , aVersionSpec versionString , ' of '
                , aVersionSpec projectLabel , '.'.
          nil	"return nil if resumed" ].
      spec
        ifNotNil: [ 
          packageOrProjectSpecs
            addAll: (spec resolveSpecsForPackageOrdering: aVersionSpec) ] ].
  ^ packageOrProjectSpecs
%

! Class Implementation for MetacelloGroupSpec

! ------------------- Instance methods for MetacelloGroupSpec

category: 'accessing'
method: MetacelloGroupSpec
answers: aListOfPairs

	self shouldNotImplement
%

category: 'printing'
method: MetacelloGroupSpec
configMethodCascadeOn: aStream member: aMember last: lastCascade indent: indent

	aMember methodUpdateSelector == #remove:
		ifTrue: [ aStream nextPutAll: 'removeGroup: ', self name printString. ]
		ifFalse: [
			aStream 
				nextPutAll: 'group: ', self name printString;
				space; 
				nextPutAll: aMember methodUpdateSelector asString, ' #('.
			self includes do: [:str | aStream nextPutAll: str printString, ' ' ].
			aStream nextPut: $) ].
	lastCascade
		ifTrue: [ aStream nextPut: $. ]
		ifFalse: [ aStream nextPut: $;; cr ].
%

category: 'printing'
method: MetacelloGroupSpec
configMethodOn: aStream indent: indent
  indent timesRepeat: [ aStream tab ].
  aStream
    nextPutAll: 'spec ';
    cr.
  indent + 1 timesRepeat: [ aStream tab ].
  aStream nextPutAll: 'name: ' , self name printString , ';'.
  self
    configMethodBodyOn: aStream
    hasName: true
    cascading: false
    indent: indent + 1.
  aStream nextPut: $.
%

category: 'private'
method: MetacelloGroupSpec
includeSpecNamesForPackageOrdering: aVersionSpec
  ^ #()
%

category: 'visiting'
method: MetacelloGroupSpec
projectDo: projectBlock packageDo: packageBlock groupDo: groupBlock

	groupBlock value: self
%

category: 'private'
method: MetacelloGroupSpec
requiredSpecsForPackageOrdering: aVersionSpec
  ^ #()
%

category: 'accessing'
method: MetacelloGroupSpec
requires: aCollection

	self shouldNotImplement
%

category: 'private'
method: MetacelloGroupSpec
requiresSpecsForPackageOrdering: aVersionSpec
  "expand the names in the group to a package or project"

  | packageOrProjectSpecs |
  packageOrProjectSpecs := Set new.
  self includes
    do: [ :specName | 
      (aVersionSpec packageNamed: specName ifAbsent: [  ])
        ifNotNil: [ :pkgSpec | 
          packageOrProjectSpecs
            addAll:
              (pkgSpec
                resolveToPackagesIn: aVersionSpec
                andProjects: true
                visited: MetacelloVisitedPackages new) ] ].
  ^ packageOrProjectSpecs
%

category: 'private'
method: MetacelloGroupSpec
resolveSpecsForPackageOrdering: aVersionSpec
  "expand the names in the group to a package or project"

  | packageOrProjectSpecs |
  packageOrProjectSpecs := Set new.
  self includes
    do: [ :specName | 
      (aVersionSpec packageNamed: specName ifAbsent: [  ])
        ifNotNil: [ :pkgSpec | 
          packageOrProjectSpecs
            addAll:
              (pkgSpec
                resolveToPackagesIn: aVersionSpec
                andProjects: true
                visited: MetacelloVisitedPackages new) ] ].
  ^ packageOrProjectSpecs
%

! Class Implementation for MetacelloProjectReferenceSpec

! ------------------- Instance methods for MetacelloProjectReferenceSpec

category: 'merging'
method: MetacelloProjectReferenceSpec
aboutToCopy
    self projectReference className
%

category: 'accessing'
method: MetacelloProjectReferenceSpec
answers: aListOfPairs

	self shouldNotImplement
%

category: 'printing'
method: MetacelloProjectReferenceSpec
configMethodCascadeOn: aStream member: aMember last: lastCascade indent: indent
    aMember methodUpdateSelector == #'remove:'
        ifTrue: [ aStream nextPutAll: 'removeProject: ' , self name printString ]
        ifFalse: [ 
            self projectReference == nil
                ifTrue: [ ^ self ].
            aStream nextPutAll: self projectLabel , ': ' , self projectName printString , ' '.
            (aMember methodUpdateSelector == #'copy:' and: [ self projectReference hasNonVersionStringField ])
                ifTrue: [ aStream nextPutAll: 'copyFrom: ' , aMember sourceName printString , ' ' ].
            self projectReference configShortCutMethodOn: aStream member: aMember indent: indent + 1 ].
    lastCascade
        ifTrue: [ aStream nextPut: $. ]
        ifFalse: [ 
            aStream
                nextPut: $;;
                cr ]
%

category: 'printing'
method: MetacelloProjectReferenceSpec
configMethodOn: aStream indent: indent
  indent timesRepeat: [ aStream tab ].
  aStream
    nextPutAll: 'spec ';
    cr.
  indent + 1 timesRepeat: [ aStream tab ].
  aStream
    nextPutAll: 'name: ' , self name printString;
    nextPut: $;;
    cr.
  indent + 1 timesRepeat: [ aStream tab ].
  aStream
    nextPutAll: 'projectReference: ';
    nextPut: $[;
    cr.
  indent + 2 timesRepeat: [ aStream tab ].
  aStream nextPutAll: 'spec'.
  self projectReference
    ifNotNil: [ self projectReference configMethodBodyOn: aStream indent: indent + 2 ].
  aStream nextPutAll: ' ].'
%

category: 'testing'
method: MetacelloProjectReferenceSpec
hasRepository
    ^ self projectReference hasRepository
%

category: 'accessing'
method: MetacelloProjectReferenceSpec
includes: aCollection

	self shouldNotImplement
%

category: 'importing'
method: MetacelloProjectReferenceSpec
mergeImportLoads: aLoadList
    self projectReference mergeImportLoads: aLoadList
%

category: 'merging'
method: MetacelloProjectReferenceSpec
mergeMap

	| map |
	map := super mergeMap.
	map at: #projectReference put: projectReference.
	^map
%

category: 'merging'
method: MetacelloProjectReferenceSpec
mergeSpec: anotherSpec

	| newSpec map anotherProjectReference |
	newSpec := super mergeSpec: anotherSpec.
	map := anotherSpec mergeMap.
	(anotherProjectReference := map at: #projectReference) ~~ nil
		ifTrue: [ 
			newSpec projectReference: 
				(newSpec projectReference == nil
					ifTrue: [ anotherProjectReference ]
					ifFalse: [ newSpec projectReference mergeSpec: anotherProjectReference ])].
	^newSpec
%

category: 'merging'
method: MetacelloProjectReferenceSpec
nonOverridable

	^super nonOverridable, #( projectReference )
%

category: 'copying'
method: MetacelloProjectReferenceSpec
postCopy

	super postCopy.
	projectReference := projectReference copy.
%

category: 'visiting'
method: MetacelloProjectReferenceSpec
projectDo: projectBlock packageDo: packageBlock groupDo: groupBlock

	projectBlock value: self
%

category: 'accessing'
method: MetacelloProjectReferenceSpec
projectLabel
    ^ self projectReference projectLabel
%

category: 'accessing'
method: MetacelloProjectReferenceSpec
projectName
	^self projectReference name
%

category: 'querying'
method: MetacelloProjectReferenceSpec
projectReference
	^ projectReference
%

category: 'accessing'
method: MetacelloProjectReferenceSpec
projectReference: anObject
	projectReference := anObject
%

category: 'accessing'
method: MetacelloProjectReferenceSpec
referencedSpec

	^self projectReference
%

category: 'querying'
method: MetacelloProjectReferenceSpec
relativeCurrentVersion

	^self projectReference relativeCurrentVersion
%

category: 'querying'
method: MetacelloProjectReferenceSpec
repositories
    ^ self referencedSpec repositories
%

category: 'loading'
method: MetacelloProjectReferenceSpec
repositorySpecs

	^self repositories map values
%

category: 'accessing'
method: MetacelloProjectReferenceSpec
requires: aCollection

	self shouldNotImplement
%

category: 'querying'
method: MetacelloProjectReferenceSpec
version

	^self projectReference version
%

category: 'querying'
method: MetacelloProjectReferenceSpec
versionOrNil

	^self projectReference versionOrNil
%

category: 'querying'
method: MetacelloProjectReferenceSpec
versionString: aString

	^self projectReference versionString: aString
%

! Class Implementation for MetacelloMemberListSpec

! ------------------- Instance methods for MetacelloMemberListSpec

category: 'actions'
method: MetacelloMemberListSpec
add: aSpec

	self subclassResponsibility
%

category: 'adding'
method: MetacelloMemberListSpec
addMember: aMember

	self list add: aMember.
	self clearMemberMap
%

category: 'private'
method: MetacelloMemberListSpec
clearMemberMap

	memberMap := nil.
%

category: 'enumeration'
method: MetacelloMemberListSpec
collect: aBlock 
	| newCollection |
	newCollection :=OrderedCollection new.
	self do: [:each | newCollection add: (aBlock value: each)].
	^ newCollection
%

category: 'actions'
method: MetacelloMemberListSpec
copy: aMemberSpec

	self addMember: aMemberSpec
%

category: 'actions'
method: MetacelloMemberListSpec
copy: specNamed to: aSpec

	self subclassResponsibility
%

category: 'toolbox support'
method: MetacelloMemberListSpec
deleteSpec: aSpec
    "remove the spec from list"

    | member |
    member := self list detect: [ :aMember | aMember spec = aSpec ] ifNone: [ ^ self ].
    self list remove: member
%

category: 'enumeration'
method: MetacelloMemberListSpec
detect: aBlock
	"Evaluate aBlock with each of the receiver's elements as the argument. 
	Answer the first element for which aBlock evaluates to true."

	^ self detect: aBlock ifNone: [ self error: 'Object is not in the collection.' ]
%

category: 'enumeration'
method: MetacelloMemberListSpec
detect: aBlock ifNone: exceptionBlock
	"Evaluate aBlock with each of the receiver's elements as the argument.  
	Answer the first element for which aBlock evaluates to true. If none  
	evaluate to true, then evaluate the argument, exceptionBlock."

	self
		do: [ :each | 
			(aBlock value: each)
				ifTrue: [ ^ each ] ].
	^ exceptionBlock value
%

category: 'enumeration'
method: MetacelloMemberListSpec
do: aBlock

	self map values do: aBlock
%

category: 'testing'
method: MetacelloMemberListSpec
isEmpty

	^self list isEmpty
%

category: 'accessing'
method: MetacelloMemberListSpec
list

	list == nil ifTrue: [ list := OrderedCollection new ].
	^list
%

category: 'accessing'
method: MetacelloMemberListSpec
list: aCollection

	list := aCollection.
	self clearMemberMap
%

category: 'accessing'
method: MetacelloMemberListSpec
map
	
	| map |
	memberMap ~~ nil ifTrue: [ ^memberMap ].
	map := Dictionary new.
	self list do: [:member | 
		member
			applyAdd: [:memberSpec | self mapAdd: memberSpec into: map ] 
			copy: [:memberSpec | self mapCopy: memberSpec into: map ]
			merge: [:memberSpec | self mapMerge: memberSpec into: map ] 
			remove: [:memberSpec | self mapRemove: memberSpec into: map ]].
	memberMap := map.
	^memberMap
%

category: 'private'
method: MetacelloMemberListSpec
mapAdd: aMemberSpec into: map
	
	map at: aMemberSpec name put: aMemberSpec spec
%

category: 'private'
method: MetacelloMemberListSpec
mapCopy: aMemberSpec into: map
    | spec |
    spec := map at: aMemberSpec sourceName ifAbsent: [  ].
    spec == nil
        ifTrue: [ ^ self error: 'Source spec named ' , aMemberSpec sourceName printString , ' not found' ]
        ifFalse: [ 
            spec aboutToCopy.
            map at: aMemberSpec name put: (spec copy mergeSpec: aMemberSpec spec copy) ]
%

category: 'private'
method: MetacelloMemberListSpec
mapMerge: aMemberSpec into: map
	| spec |
	spec :=  map at: aMemberSpec name ifAbsent: [].
	spec == nil
		ifTrue: [ map at: aMemberSpec name put: aMemberSpec spec copy ]
		ifFalse: [ map at: aMemberSpec name put: (spec mergeSpec: aMemberSpec spec)]
%

category: 'private'
method: MetacelloMemberListSpec
mapRemove: aMemberSpec into: map
	
	map removeKey: aMemberSpec name ifAbsent: []
%

category: 'actions'
method: MetacelloMemberListSpec
merge: aSpec

	self subclassResponsibility
%

category: 'merging'
method: MetacelloMemberListSpec
mergeSpec: anotherSpec

	| newSpec |
	newSpec := super mergeSpec: anotherSpec.
	newSpec list: self list copy.
	anotherSpec list do: [:groupMember | groupMember applyToList: newSpec ].
	^newSpec
%

category: 'testing'
method: MetacelloMemberListSpec
notEmpty

	^self list notEmpty
%

category: 'copying'
method: MetacelloMemberListSpec
postCopy

	super postCopy.
	list := list copy.
	self clearMemberMap
%

category: 'actions'
method: MetacelloMemberListSpec
remove: aSpec

	self subclassResponsibility
%

category: 'enumeration'
method: MetacelloMemberListSpec
select: aBlock 
	| newCollection |
	newCollection := OrderedCollection new.
	self do: [:each | (aBlock value: each) ifTrue: [newCollection add: each]].
	^newCollection
%

category: 'enumeration'
method: MetacelloMemberListSpec
specListDetect: aBlock
	"Evaluate aBlock with each of the receiver's elements as the argument. 
	Answer the first element for which aBlock evaluates to true."

	^ self specListDetect: aBlock ifNone: [ self error: 'Object is not in the collection.' ]
%

category: 'enumeration'
method: MetacelloMemberListSpec
specListDetect: aBlock ifNone: exceptionBlock
	"Evaluate aBlock with each of the receiver's elements as the argument.  
	Answer the first element for which aBlock evaluates to true. If none  
	evaluate to true, then evaluate the argument, exceptionBlock."

	self
		specListDo: [ :each | 
			(aBlock value: each)
				ifTrue: [ ^ each ] ].
	^ exceptionBlock value
%

category: 'enumeration'
method: MetacelloMemberListSpec
specListDo: aBlock

	self list do: [:member |  aBlock value: member spec ]
%

category: 'enumeration'
method: MetacelloMemberListSpec
specListSelect: aBlock 
	| newCollection |
	newCollection := OrderedCollection new.
	self specListDo: [:each | (aBlock value: each) ifTrue: [newCollection add: each]].
	^newCollection
%

! Class Implementation for MetacelloPackagesSpec

! ------------------- Instance methods for MetacelloPackagesSpec

category: 'actions'
method: MetacelloPackagesSpec
add: aSpec

	aSpec addToMetacelloPackages: self
%

category: 'accessing'
method: MetacelloPackagesSpec
applyIncludesTo: orderedSpecs for: pkgSpec firstTime: firstTime for: aVersionSpec
  | movedSpecs baseIndex |
  movedSpecs := Set new.
  baseIndex := orderedSpecs indexOf: pkgSpec.
  (pkgSpec includeSpecNamesForPackageOrdering: aVersionSpec)
    do: [ :includedSpec | 
      | includedSpecName spec |
      includedSpecName := includedSpec name.
      spec := orderedSpecs
        detect: [ :aSpec | aSpec name = includedSpecName ]
        ifNone: [  ].
      (self
        slideIn: orderedSpecs
        spec: spec
        baseIndex: baseIndex
        seen: IdentitySet new
        firstTime: firstTime
        for: aVersionSpec)
        ifTrue: [ movedSpecs add: spec name ] ].
  ^ movedSpecs
%

category: 'printing'
method: MetacelloPackagesSpec
configMethodOn: aStream indent: indent
  | packageSpecs |
  packageSpecs := self map values.
  packageSpecs size = 0
    ifTrue: [ ^ aStream nextPutAll: 'spec add: []' ].
  packageSpecs size = 1
    ifTrue: [ 
      indent timesRepeat: [ aStream tab ].
      aStream
        nextPutAll: 'spec add: [';
        cr.
      packageSpecs first configMethodOn: aStream indent: indent + 1.
      aStream
        nextPut: $];
        cr ]
    ifFalse: [ 
      indent timesRepeat: [ aStream tab ].
      aStream nextPutAll: 'spec'.
      1 to: packageSpecs size do: [ :index | 
        | packageSpec |
        packageSpec := packageSpecs at: index.
        indent + 1 timesRepeat: [ aStream tab ].
        aStream
          nextPutAll: 'add: [';
          cr.
        packageSpec configMethodOn: aStream indent: indent + 2.
        aStream nextPut: $].
        index < packageSpecs size
          ifTrue: [ aStream nextPut: $; ].
        aStream cr ] ]
%

category: 'actions'
method: MetacelloPackagesSpec
copy: specNamed to: spec

	self addMember: 
		(self copyMember 
			name: spec name;
			sourceName: specNamed;
			spec: spec;
			yourself)
%

category: 'actions'
method: MetacelloPackagesSpec
merge: aSpec

	aSpec mergeIntoMetacelloPackages: self
%

category: 'accessing'
method: MetacelloPackagesSpec
packageNamed: aString ifAbsent: aBlock

	^self map at: aString ifAbsent: aBlock
%

category: 'accessing'
method: MetacelloPackagesSpec
packageSpecsInLoadOrderFor: aVersionSpec
  "order only the packageSpecs and projectSpecs. groupSpec order does not matter"

  | orderedPackageSpecs groupSpecs moved lastMovedSpecs count terminationLimit map specsWithIncludes firstTime groupLoops |
  map := self map.
  orderedPackageSpecs := OrderedCollection new.
  groupSpecs := Set new.
  self list
    do: [ :member | 
      | spec |
      spec := map at: member name ifAbsent: [  ].
      (spec == nil or: [ orderedPackageSpecs includes: spec ])
        ifFalse: [ 
          spec
            projectDo: [ :prjSpec | 
              "specification order is the default order"
              orderedPackageSpecs add: prjSpec ]
            packageDo: [ :pkgSpec | 
              "specification order is the default order"
              orderedPackageSpecs add: pkgSpec ]
            groupDo: [ :groupSpec | groupSpecs add: groupSpec ] ] ].
  orderedPackageSpecs isEmpty
    ifTrue: [ ^ orderedPackageSpecs , groupSpecs asOrderedCollection ].
  moved := true.
  count := 0.
  terminationLimit := orderedPackageSpecs size * 2.
  groupLoops := IdentitySet new.
  [ moved ]
    whileTrue: [ 
      count := count + 1.
      count > terminationLimit
        ifTrue: [ 
          "Cheap termination hack - an APPARENT loop"
          self error: 'Apparent loop in before/after dependency definitions' ].
      moved := false.
      orderedPackageSpecs copy
        do: [ :packageSpec | 
          moved := moved
            or: [ 
              self
                sortPackageSpecs: orderedPackageSpecs
                packageSpec: packageSpec
                groupLoops: groupLoops
                for: aVersionSpec ] ] ].
  lastMovedSpecs := Set new.
  moved := true.
  count := 0.
  specsWithIncludes := orderedPackageSpecs
    select: [ :pkgSpec | pkgSpec includesForPackageOrdering isEmpty not ].
  firstTime := true.
  [ moved ]
    whileTrue: [ 
      | result |
      count := count + 1.	"count > terminationLimit"
      count > 14
        ifTrue: [ 
          "Cheap termination hack - an APPARENT loop"
          self error: 'Apparent loop in before/after dependency definitions' ].
      moved := false.
      result := Set new.
      specsWithIncludes
        do: [ :packageSpec | 
          result
            addAll:
              (self
                applyIncludesTo: orderedPackageSpecs
                for: packageSpec
                firstTime: firstTime
                for: aVersionSpec) ].
      result size = lastMovedSpecs size
        ifTrue: [ 
          result
            do: [ :name | 
              (lastMovedSpecs includes: name)
                ifFalse: [ moved := true ] ] ]
        ifFalse: [ moved := true ].
      lastMovedSpecs := result.
      firstTime := false ].
  ^ orderedPackageSpecs , groupSpecs asOrderedCollection
%

category: 'actions'
method: MetacelloPackagesSpec
remove: aSpec

	aSpec removeFromMetacelloPackages: self
%

category: 'accessing'
method: MetacelloPackagesSpec
slideIn: orderedSpecs spec: targetSpec baseIndex: baseIndex seen: seen firstTime: firstTime for: aVersionSpec
  | targetIndex requiredSpecNames targetRequires targetRequiresIndexes minIndex baseSpec required |
  (seen includes: targetSpec)
    ifTrue: [ ^ false ].
  targetIndex := orderedSpecs indexOf: targetSpec.
  baseIndex >= targetIndex
    ifTrue: [ ^ false ].
  required := false.
  baseSpec := orderedSpecs at: baseIndex.
  baseIndex + 1 to: targetIndex - 1 do: [ :index | | spec |
    spec := orderedSpecs at: index.
    ((spec requiredSpecNamesForPackageOrdering: aVersionSpec)
      includes: baseSpec name)
      ifTrue: [ required := true ] ].
  firstTime
    ifFalse: [ required
        ifFalse: [ ^ false ] ].
  requiredSpecNames := targetSpec
    requiredSpecNamesForPackageOrdering: aVersionSpec.
  targetRequires := orderedSpecs
    select: [ :spec | requiredSpecNames includes: spec name ].
  targetRequiresIndexes := targetRequires
    collect: [ :spec | orderedSpecs indexOf: spec ].
  targetRequiresIndexes add: baseIndex.
  minIndex := MetacelloPlatform current
    detectMax: [ :each | each ]
    in: targetRequiresIndexes.
  minIndex + 1 < targetIndex
    ifTrue: [ orderedSpecs remove: targetSpec.
      orderedSpecs add: targetSpec afterIndex: minIndex.
      seen add: targetSpec ]
    ifFalse: [ ^ self
        slideIn: orderedSpecs
        spec: (orderedSpecs at: minIndex)
        baseIndex: 1
        seen: seen
        firstTime: firstTime
        for: aVersionSpec ].
  ^ true
%

category: 'private'
method: MetacelloPackagesSpec
sortPackageSpecs: orderedSpecs packageSpec: packageSpec groupLoops: groupLoops for: aVersionSpec
  | packageIndex moved movePackage targetPackage targetIndex targetSpecNames groupLoopDetected |
  packageIndex := orderedSpecs indexOf: packageSpec.
  moved := movePackage := false.
  targetSpecNames := packageSpec
    requiredSpecNamesForPackageOrdering: aVersionSpec.
  groupLoopDetected := groupLoops includes: packageSpec.
  groupLoopDetected
    ifFalse: [ 
      targetSpecNames
        do: [ :targetPackageOrProjectName | 
          targetPackage := orderedSpecs
            detect: [ :each | each name = targetPackageOrProjectName ]
            ifNone: [ 
              MetacelloNameNotDefinedError
                signal:
                  'project group, or package named: ' , targetPackageOrProjectName printString
                    ,
                      ' not found when used in requires: or includes: field of package: '
                    , packageSpec name printString , ' for version: '
                    , aVersionSpec versionString , ' of '
                    , aVersionSpec projectLabel , '.'.
              nil	"return nil if resumed" ].
          targetIndex := orderedSpecs indexOf: targetPackage.
          (groupLoopDetected not and: [ packageIndex = targetIndex ])
            ifTrue: [ 
              self
                notify:
                  'A group loop has been detected. The package: ' , packageSpec name printString
                    ,
                      ' requires a group that includes itself. If you resume, the group loop will be ignored and details will be written to the Transcript.'.
              groupLoopDetected := true.
              groupLoops add: packageSpec.
              Transcript
                cr;
                show: 'Package: ' , packageSpec name printString;
                cr;
                tab;
                show: 'Raw Requires:'.
              packageSpec requires
                do: [ :each | 
                  Transcript
                    cr;
                    tab;
                    tab;
                    show: each name ].
              Transcript
                cr;
                show:
                    'Package: ' , packageSpec name printString , ' has a group loop:';
                cr;
                tab;
                show: 'Expanded Requires:'.
              targetSpecNames
                do: [ :each | 
                  Transcript
                    cr;
                    tab;
                    tab;
                    show: each name ] ].
          movePackage := movePackage or: [ packageIndex <= targetIndex ].
          false
            ifTrue: [ 
              "use for debugging non-obvious reference loops"
              packageIndex < targetIndex
                ifTrue: [ 
                  Transcript
                    cr;
                    show:
                        'Moving ' , targetPackageOrProjectName , ' from ' , targetIndex printString
                            , ' to ' , packageIndex printString ] ] ] ].
  groupLoopDetected
    ifTrue: [ 
      "old implementation that does not resolve group names"
      targetSpecNames := packageSpec requires.
      targetSpecNames
        do: [ :targetPackageName | 
          targetPackage := orderedSpecs
            detect: [ :each | each name = targetPackageName ]
            ifNone: [  ].
          targetIndex := orderedSpecs indexOf: targetPackage.
          movePackage := movePackage or: [ packageIndex <= targetIndex ] ] ].
  movePackage
    ifTrue: [ 
      moved := true.
      orderedSpecs
        remove: packageSpec
        ifAbsent: [ ^ self error: 'unexpected error removing package' ].
      targetIndex := 0.
      targetSpecNames
        do: [ :targetPackageOrProjectName | 
          (targetPackage := orderedSpecs
            detect: [ :each | each name = targetPackageOrProjectName ]
            ifNone: [  ]) ~~ nil
            ifTrue: [ targetIndex := targetIndex max: (orderedSpecs indexOf: targetPackage) ] ].
      targetIndex == 0
        ifTrue: [ orderedSpecs add: packageSpec beforeIndex: packageIndex ]
        ifFalse: [ orderedSpecs add: packageSpec afterIndex: targetIndex ] ].
  ^ moved
%

! Class Implementation for MetacelloMemberSpec

! ------------------- Instance methods for MetacelloMemberSpec

category: 'actions'
method: MetacelloMemberSpec
applyAdd: addBlock copy: copyBlock merge: mergeBlock remove: removeBlock

	self subclassResponsibility
%

category: 'actions'
method: MetacelloMemberSpec
applyToList: aListSpec

	self subclassResponsibility
%

category: 'printing'
method: MetacelloMemberSpec
configMethodCascadeOn: aStream last: lastCascade indent: indent

	self spec 
		configMethodCascadeOn: aStream 
		member: self 
		last: lastCascade 
		indent: indent
%

category: 'printing'
method: MetacelloMemberSpec
configMethodOn: aStream indent: indent

	aStream nextPutAll: self class name asString, ' member: ('.
	self spec configMethodOn: aStream indent: indent.
	aStream nextPutAll: ')'.
%

category: 'accessing'
method: MetacelloMemberSpec
methodUpdateSelector

	^self subclassResponsibility
%

category: 'accessing'
method: MetacelloMemberSpec
name

	^name
%

category: 'accessing'
method: MetacelloMemberSpec
name: aString

	name := aString
%

category: 'accessing'
method: MetacelloMemberSpec
sourceName

	^self name
%

category: 'accessing'
method: MetacelloMemberSpec
spec

	^spec
%

category: 'accessing'
method: MetacelloMemberSpec
spec: aMetacelloSpec

	spec := aMetacelloSpec
%

! Class Implementation for MetacelloAddMemberSpec

! ------------------- Instance methods for MetacelloAddMemberSpec

category: 'actions'
method: MetacelloAddMemberSpec
applyAdd: addBlock copy: copyBlock merge: mergeBlock remove: removeBlock

	addBlock value: self
%

category: 'actions'
method: MetacelloAddMemberSpec
applyToList: aListSpec

	aListSpec add: self
%

category: 'accessing'
method: MetacelloAddMemberSpec
methodUpdateSelector

	^#overrides:
%

! Class Implementation for MetacelloCopyMemberSpec

! ------------------- Instance methods for MetacelloCopyMemberSpec

category: 'actions'
method: MetacelloCopyMemberSpec
applyAdd: addBlock copy: copyBlock merge: mergeBlock remove: removeBlock
    copyBlock value: self
%

category: 'actions'
method: MetacelloCopyMemberSpec
applyToList: aListSpec

	aListSpec copy: self
%

category: 'accessing'
method: MetacelloCopyMemberSpec
methodUpdateSelector

	^#copy:
%

category: 'accessing'
method: MetacelloCopyMemberSpec
sourceName

	^sourceName
%

category: 'accessing'
method: MetacelloCopyMemberSpec
sourceName: aString

	sourceName := aString
%

! Class Implementation for MetacelloMergeMemberSpec

! ------------------- Instance methods for MetacelloMergeMemberSpec

category: 'actions'
method: MetacelloMergeMemberSpec
applyAdd: addBlock copy: copyBlock merge: mergeBlock remove: removeBlock

	mergeBlock value: self
%

category: 'actions'
method: MetacelloMergeMemberSpec
applyToList: aListSpec

	aListSpec merge: self
%

category: 'accessing'
method: MetacelloMergeMemberSpec
methodUpdateSelector

	^#with:
%

! Class Implementation for MetacelloRemoveMemberSpec

! ------------------- Instance methods for MetacelloRemoveMemberSpec

category: 'actions'
method: MetacelloRemoveMemberSpec
applyAdd: addBlock copy: copyBlock merge: mergeBlock remove: removeBlock

	removeBlock value: self
%

category: 'actions'
method: MetacelloRemoveMemberSpec
applyToList: aListSpec

	aListSpec remove: self
%

category: 'accessing'
method: MetacelloRemoveMemberSpec
methodUpdateSelector

	^#remove:
%

! Class Implementation for MetacelloProjectSpec

! ------------------- Instance methods for MetacelloProjectSpec

category: 'adding'
method: MetacelloProjectSpec
addToMetacelloPackages: aMetacelloPackagesSpec

	| spec |
	spec := (aMetacelloPackagesSpec project projectReferenceSpec)
			name: self name;
			projectReference: self copy;
			yourself.
	aMetacelloPackagesSpec addMember: 
		(aMetacelloPackagesSpec addMember 
			name: spec name;
			spec: spec;
			yourself)
%

category: 'scripting'
method: MetacelloProjectSpec
canDowngradeTo: aMetacelloProjectSpec
  (self className = aMetacelloProjectSpec className
    and: [ self operator == aMetacelloProjectSpec operator ])
    ifFalse: [ ^ false ].
  self versionOrNil == nil
    ifTrue: [ 
      "https://github.com/dalehenrich/metacello-work/issues/198#issuecomment-21737458"
      ^ true ].
  ^ (self compareVersions: aMetacelloProjectSpec usingOperator: self operator)
    not
%

category: 'scripting'
method: MetacelloProjectSpec
canUpgradeTo: aMetacelloProjectSpec
  (self className = aMetacelloProjectSpec className
    and: [ self operator == aMetacelloProjectSpec operator ])
    ifFalse: [ ^ false ].
  self versionOrNil == nil
    ifTrue: [ 
      "https://github.com/dalehenrich/metacello-work/issues/198#issuecomment-21737458"
      ^ true ].
  ^ self compareVersions: aMetacelloProjectSpec usingOperator: self operator
%

category: 'querying'
method: MetacelloProjectSpec
className
    className ifNil: [ self name ifNotNil: [ self className: self constructClassName ] ].
    ^ className
%

category: 'accessing'
method: MetacelloProjectSpec
className: aString
    self shouldBeMutable.
    className := aString
%

category: 'construction'
method: MetacelloProjectSpec
className: aString constructor: aVersionConstructor
    aVersionConstructor classNameForProject: aString
%

category: 'scripting'
method: MetacelloProjectSpec
compareEqual: aMetacelloProjectSpec
  "name className versionString operator loads preLoadDoIt postLoadDoIt"

  ^ self className = aMetacelloProjectSpec className
    and: [ 
      (self compareVersionsEqual: aMetacelloProjectSpec)
        and: [ 
          self operator == aMetacelloProjectSpec operator
            and: [ 
              self loads = aMetacelloProjectSpec loads
                and: [ 
                  self preLoadDoIt value == aMetacelloProjectSpec preLoadDoIt value
                    and: [ self postLoadDoIt value == aMetacelloProjectSpec postLoadDoIt value ] ] ] ] ]
%

category: 'scripting'
method: MetacelloProjectSpec
compareVersions: aMetacelloProjectSpec usingOperator: anOperator
  ^ aMetacelloProjectSpec versionOrNil == nil
    ifTrue: [ 
      "https://github.com/dalehenrich/metacello-work/issues/199#issuecomment-21739622"
      aMetacelloProjectSpec versionString asMetacelloVersionNumber
        perform: anOperator
        env: 2
        withArguments: { self version versionNumber } ]
    ifFalse: [ ^ aMetacelloProjectSpec version perform: anOperator env: 2 withArguments: { self version } ]
%

category: 'scripting'
method: MetacelloProjectSpec
compareVersionsEqual: aMetacelloProjectSpec
  | vrsn otherVrsn |
  vrsn := self versionOrNil.
  otherVrsn := aMetacelloProjectSpec versionOrNil.
  vrsn ifNil: [ ^ vrsn = otherVrsn ].
  otherVrsn ifNil: [ ^ false ].
  ^ vrsn versionNumber = otherVrsn versionNumber
%

category: 'printing'
method: MetacelloProjectSpec
configHasVersionString
  ^ self versionString ~~ nil
%

category: 'printing'
method: MetacelloProjectSpec
configMethodBodyOn: aStream indent: indent
  ^ self configMethodBodyOn: aStream indent: indent fromShortCut: false
%

category: 'printing'
method: MetacelloProjectSpec
configMethodBodyOn: aStream indent: indent fromShortCut: fromShortCut
  | hasVersionString hasOperator hasProjectPackage hasLoads hasClassName hasPreLoadDoIt hasPostLoadDoIt |
  hasClassName := self hasClassName.
  hasVersionString := self configHasVersionString.
  hasOperator := operator ~~ nil.
  hasProjectPackage := self hasRepository
    or: [ hasClassName & (self getFile ~~ nil) ].
  hasLoads := self loads ~~ nil.
  hasPreLoadDoIt := self getPreLoadDoIt ~~ nil.
  hasPostLoadDoIt := self getPostLoadDoIt ~~ nil.
  hasClassName
    ifTrue: [ 
      hasVersionString | hasOperator | hasProjectPackage | hasLoads
        ifTrue: [ 
          aStream cr.
          indent + 1 timesRepeat: [ aStream tab ] ]
        ifFalse: [ aStream space ].
      aStream nextPutAll: 'className: ' , self className printString.
      hasVersionString | hasPreLoadDoIt | hasPostLoadDoIt | hasOperator
        | hasLoads | hasProjectPackage
        ifTrue: [ aStream nextPut: $; ] ].
  hasVersionString
    ifTrue: [ 
      | vs |
      hasClassName | hasOperator | hasProjectPackage | hasLoads | hasPreLoadDoIt
        | hasPostLoadDoIt
        ifTrue: [ 
          aStream cr.
          indent + 1 timesRepeat: [ aStream tab ] ]
        ifFalse: [ aStream space ].
      vs := self versionString.
      aStream nextPutAll: 'versionString: '.
      (MetacelloPlatform current isSymbol: vs)
        ifTrue: [ aStream nextPut: $# ].
      aStream nextPutAll: vs asString printString.
      hasPreLoadDoIt | hasPostLoadDoIt | hasOperator | hasProjectPackage
        | hasLoads
        ifTrue: [ aStream nextPut: $; ] ].
  hasPreLoadDoIt
    ifTrue: [ 
      hasClassName | hasOperator | hasProjectPackage | hasLoads | hasPreLoadDoIt
        ifTrue: [ 
          aStream cr.
          indent + 1 timesRepeat: [ aStream tab ] ]
        ifFalse: [ aStream space ].
      aStream nextPutAll: 'preLoadDoIt: '.
      (MetacelloPlatform current isSymbol: self preLoadDoIt value)
        ifTrue: [ 
          aStream
            nextPut: $#;
            nextPutAll: self preLoadDoIt value asString printString ]
        ifFalse: [ aStream nextPutAll: self preLoadDoIt value asString ].
      hasPostLoadDoIt | hasOperator | hasProjectPackage | hasLoads
        ifTrue: [ aStream nextPut: $; ] ].
  hasPostLoadDoIt
    ifTrue: [ 
      hasClassName | hasOperator | hasProjectPackage | hasLoads | hasPostLoadDoIt
        ifTrue: [ 
          aStream cr.
          indent + 1 timesRepeat: [ aStream tab ] ]
        ifFalse: [ aStream space ].
      aStream nextPutAll: 'postLoadDoIt: '.
      (MetacelloPlatform current isSymbol: self postLoadDoIt value)
        ifTrue: [ 
          aStream
            nextPut: $#;
            nextPutAll: self postLoadDoIt value asString printString ]
        ifFalse: [ aStream nextPutAll: self postLoadDoIt value asString ].
      hasOperator | hasProjectPackage | hasLoads
        ifTrue: [ aStream nextPut: $; ] ].
  hasOperator
    ifTrue: [ 
      hasClassName | hasVersionString | hasProjectPackage | hasLoads | hasPreLoadDoIt
        | hasPostLoadDoIt
        ifTrue: [ 
          aStream cr.
          indent + 1 timesRepeat: [ aStream tab ] ]
        ifFalse: [ aStream space ].
      aStream nextPutAll: 'operator: #' , self operator asString printString.
      hasProjectPackage | hasLoads
        ifTrue: [ aStream nextPut: $; ] ].
  hasLoads
    ifTrue: [ 
      hasClassName | hasVersionString | hasOperator | hasProjectPackage
        | hasPreLoadDoIt | hasPostLoadDoIt
        ifTrue: [ 
          aStream cr.
          indent + 1 timesRepeat: [ aStream tab ] ]
        ifFalse: [ aStream space ].
      aStream nextPutAll: 'loads: #('.
      self loads do: [ :str | aStream nextPutAll: str printString , ' ' ].
      aStream nextPut: $).
      hasProjectPackage
        ifTrue: [ aStream nextPut: $; ] ].
  hasProjectPackage
    ifTrue: [ 
      | hasName hasRepo |
      hasRepo := self hasRepository.
      hasName := self file ~= self className.
      hasName
        ifTrue: [ 
          hasClassName | hasVersionString | hasOperator | hasLoads | hasPreLoadDoIt
            | hasPostLoadDoIt
            ifTrue: [ 
              aStream cr.
              indent + 1 timesRepeat: [ aStream tab ] ]
            ifFalse: [ aStream space ].
          aStream nextPutAll: 'file: ' , self file printString.
          hasRepo
            ifTrue: [ aStream nextPut: $; ] ].
      hasRepo
        ifTrue: [ 
          | repos |
          repos := self repositories map values.
          repos size = 1
            ifTrue: [ 
              fromShortCut
                ifTrue: [ 
                  hasClassName | hasVersionString | hasOperator | hasLoads | hasPreLoadDoIt
                    | hasPostLoadDoIt | hasName
                    ifTrue: [ 
                      aStream cr.
                      indent + 1 timesRepeat: [ aStream tab ] ]
                    ifFalse: [ aStream space ] ]
                ifFalse: [ 
                  aStream cr.
                  indent + 1 timesRepeat: [ aStream tab ] ].
              repos first configMethodCascadeOn: aStream lastCascade: true ]
            ifFalse: [ 
              aStream cr.
              self repositories configMethodCascadeOn: aStream indent: indent ] ] ]
%

category: 'printing'
method: MetacelloProjectSpec
configMethodOn: aStream indent: indent
  indent timesRepeat: [ aStream tab ].
  aStream
    nextPutAll: 'spec ';
    cr.
  indent + 1 timesRepeat: [ aStream tab ].
  aStream nextPutAll: 'name: ' , self name printString , ';'.
  self configMethodBodyOn: aStream indent: indent.
  aStream nextPut: $.
%

category: 'printing'
method: MetacelloProjectSpec
configShortCutMethodOn: aStream member: aMember indent: indent
  | hasVersionString hasOperator hasProjectPackage hasLoads hasClassName hasPreLoadDoIt hasPostLoadDoIt |
  hasClassName := self hasClassName.
  hasVersionString := self configHasVersionString.
  hasOperator := operator ~~ nil.
  hasProjectPackage := self hasRepository
    or: [ hasClassName & (self getFile ~~ nil or: [ className ~= self name ]) ].
  hasLoads := self loads ~~ nil.
  hasPreLoadDoIt := self getPreLoadDoIt ~~ nil.
  hasPostLoadDoIt := self getPostLoadDoIt ~~ nil.
  hasClassName | hasOperator | hasProjectPackage | hasLoads | hasPreLoadDoIt
    | hasPostLoadDoIt
    ifTrue: [ 
      (aMember methodUpdateSelector == #'copy:'
        or: [ aMember methodUpdateSelector == #'with:' ])
        ifTrue: [ 
          aStream
            nextPutAll: 'with: [';
            cr ]
        ifFalse: [ 
          aStream
            nextPutAll: 'overrides: [';
            cr ].
      indent timesRepeat: [ aStream tab ].
      aStream nextPutAll: 'spec'.
      self configMethodBodyOn: aStream indent: indent fromShortCut: true.
      aStream nextPutAll: ' ]'.
      ^ self ].
  hasVersionString
    ifTrue: [ 
      | vs |
      vs := self versionString.
      aStream nextPutAll: 'with: '.
      (MetacelloPlatform current isSymbol: vs)
        ifTrue: [ aStream nextPut: $# ].
      aStream nextPutAll: vs asString printString ]
%

category: 'private'
method: MetacelloProjectSpec
constructClassName
    ^ nil
%

category: 'querying'
method: MetacelloProjectSpec
currentlyLoadedClassesInVersion
    self versionOrNil ifNotNil: [ :vrsn | ^ vrsn currentlyLoadedClassesInVersion ].
    ^ #()
%

category: 'accessing'
method: MetacelloProjectSpec
file
    ^ self className
%

category: 'accessing'
method: MetacelloProjectSpec
getClassName
    "raw access to iv"

    ^ className
%

category: 'accessing'
method: MetacelloProjectSpec
getFile
    "raw access to iv"

    ^ nil
%

category: 'accessing'
method: MetacelloProjectSpec
getOperator

	^operator
%

category: 'querying'
method: MetacelloProjectSpec
getPostLoadDoIt
  ^ postLoadDoIt
%

category: 'querying'
method: MetacelloProjectSpec
getPreLoadDoIt
  ^ preLoadDoIt
%

category: 'accessing'
method: MetacelloProjectSpec
getRepositories
    "raw access to iv"

    ^ nil
%

category: 'printing'
method: MetacelloProjectSpec
hasClassName
    ^ className ~~ nil
%

category: 'testing'
method: MetacelloProjectSpec
hasLoadConflicts: aMetacelloProjectSpec
  ^ (self hasNoLoadConflicts: aMetacelloProjectSpec) not
%

category: 'scripting'
method: MetacelloProjectSpec
hasNoLoadConflicts: aMetacelloProjectSpec
  "same as compareEqual:, except if versionString and/or repositories are not 
	specified for either one, then there are not conflicts"

  ^ self className = aMetacelloProjectSpec className
    and: [ 
      (self compareVersionsEqual: aMetacelloProjectSpec)
        and: [ self operator == aMetacelloProjectSpec operator ] ]
%

category: 'testing'
method: MetacelloProjectSpec
hasNonVersionStringField
    | hasVersionString hasOperator hasProjectPackage hasLoads hasClassName hasPreLoadDoIt hasPostLoadDoIt |
    hasClassName := self hasClassName.
    hasVersionString := self versionString ~~ nil.
    hasOperator := operator ~~ nil.
    hasProjectPackage := (self file ~~ nil and: [ hasClassName and: [ self className ~= self name ] ])
        or: [ self hasRepository ].
    hasLoads := self loads ~~ nil.
    hasPreLoadDoIt := self getPreLoadDoIt ~~ nil.
    hasPostLoadDoIt := self getPostLoadDoIt ~~ nil.
    ^ hasClassName | hasOperator | hasProjectPackage | hasLoads | hasPreLoadDoIt | hasPostLoadDoIt
%

category: 'testing'
method: MetacelloProjectSpec
hasRepository
    ^ false
%

category: 'scripting'
method: MetacelloProjectSpec
isLocked
  ^ self registration locked
%

category: 'printing'
method: MetacelloProjectSpec
label

	^self name
%

category: 'loading'
method: MetacelloProjectSpec
load

	self subclassResponsibility
%

category: 'private'
method: MetacelloProjectSpec
loadListForVersion: vrsn 

	^ (self loads == nil
			or: [self loads isEmpty])
		ifTrue: [vrsn spec defaultPackageNames]
		ifFalse: [self loads]
%

category: 'querying'
method: MetacelloProjectSpec
loads
	^ loads
%

category: 'accessing'
method: MetacelloProjectSpec
loads: aCollection

	aCollection setLoadsInMetacelloProject: self
%

category: 'construction'
method: MetacelloProjectSpec
loads: anObject constructor: aVersionConstructor
    aVersionConstructor loadsForProject: anObject
%

category: 'merging'
method: MetacelloProjectSpec
mergeMap

	| map |
	map := super mergeMap.
	map at: #name put: name.
	map at: #className put: className.
	map at: #versionString put: versionString.
	map at: #operator put: operator.
	map at: #loads put: loads.
	map at: #preLoadDoIt put: preLoadDoIt.
	map at: #postLoadDoIt put: postLoadDoIt.
	^map
%

category: 'scripting'
method: MetacelloProjectSpec
mergeScriptLoads: aSpec
    self shouldBeMutable.
    aSpec loads
        ifNotNil: [ :otherLoads | self loads ifNil: [ loads := otherLoads ] ifNotNil: [ loads := (loads , otherLoads) asSet asArray ] ].
    self loader: aSpec loader
%

category: 'scripting'
method: MetacelloProjectSpec
metacelloRegistrationHash
    "name className versionString operator loads preLoadDoIt postLoadDoIt"

    | hash |
    hash := String stringHash: name initialHash: 0.
    hash := String stringHash: self className initialHash: hash.
    hash := String stringHash: self versionString initialHash: hash.
    hash := String stringHash: self operator asString initialHash: hash.
    hash := String stringHash: self preLoadDoIt asString initialHash: hash.
    hash := String stringHash: self postLoadDoIt asString initialHash: hash.
    ^ hash bitXor: loads hash
%

category: 'querying'
method: MetacelloProjectSpec
name

	^name
%

category: 'accessing'
method: MetacelloProjectSpec
name: aString
    ((aString at: 1) isSeparator or: [ (aString at: aString size) isSeparator ])
        ifTrue: [ self error: 'Names are not allowed to have leading or trailing blanks: ' , aString printString ].
    self shouldBeMutable.
    name := aString
%

category: 'construction'
method: MetacelloProjectSpec
name: aString constructor: aVersionConstructor
    aVersionConstructor nameForProject: aString
%

category: 'querying'
method: MetacelloProjectSpec
operator

	operator == nil ifTrue: [ ^#>= ].
	^ operator
%

category: 'accessing'
method: MetacelloProjectSpec
operator: anObject
    " #= #~= #> #< #>= #<= #~> "

    self shouldBeMutable.
    operator := anObject
%

category: 'construction'
method: MetacelloProjectSpec
operator: anObject constructor: aVersionConstructor
    aVersionConstructor operatorForProject: anObject
%

category: 'querying'
method: MetacelloProjectSpec
postLoadDoIt
  ^ postLoadDoIt ifNil: [ super postLoadDoIt ]
%

category: 'accessing'
method: MetacelloProjectSpec
postLoadDoIt: anObject

	anObject setPostLoadDoItInMetacelloSpec: self
%

category: 'construction'
method: MetacelloProjectSpec
postLoadDoIt: aSymbol constructor: aVersionConstructor
    aVersionConstructor postLoadDoItForProject: aSymbol
%

category: 'querying'
method: MetacelloProjectSpec
preLoadDoIt
  ^ preLoadDoIt ifNil: [ super preLoadDoIt ]
%

category: 'accessing'
method: MetacelloProjectSpec
preLoadDoIt: anObject

	anObject setPreLoadDoItInMetacelloSpec: self
%

category: 'construction'
method: MetacelloProjectSpec
preLoadDoIt: aSymbol constructor: aVersionConstructor
    aVersionConstructor preLoadDoItForProject: aSymbol
%

category: 'visiting'
method: MetacelloProjectSpec
projectDo: projectBlock packageDo: packageBlock groupDo: groupBlock
    projectBlock value: self
%

category: 'printing'
method: MetacelloProjectSpec
projectLabel
    ^ 'project'
%

category: 'querying'
method: MetacelloProjectSpec
projectPackage

	^nil
%

category: 'scripting'
method: MetacelloProjectSpec
registration
    ^ MetacelloProjectRegistration
        registrationForProjectSpec: self
        ifAbsent: [ :ignored |  ]
        ifPresent: [ :existing :new | existing ]
%

category: 'scripting'
method: MetacelloProjectSpec
registrationsCompareEqual: aMetacelloProjectSpec
    "name className versionString operator loads preLoadDoIt postLoadDoIt"

    ^ self className = aMetacelloProjectSpec className
        and: [ self versionString = aMetacelloProjectSpec versionString and: [ self operator == aMetacelloProjectSpec operator ] ]
%

category: 'private'
method: MetacelloProjectSpec
resolveToLoadableSpec

	^self copy
%

category: 'private'
method: MetacelloProjectSpec
setLoads: aCollection
    self shouldBeMutable.
    loads := aCollection
%

category: 'private'
method: MetacelloProjectSpec
setName: aStringOrNil
    self shouldBeMutable.
    name := aStringOrNil
%

category: 'accessing'
method: MetacelloProjectSpec
setPostLoadDoIt: aSymbolOrValueHolderSpec
  self shouldBeMutable.
  postLoadDoIt := aSymbolOrValueHolderSpec
%

category: 'accessing'
method: MetacelloProjectSpec
setPreLoadDoIt: aSymbolOrValueHolderSpec
  self shouldBeMutable.
  preLoadDoIt := aSymbolOrValueHolderSpec
%

category: 'scripting'
method: MetacelloProjectSpec
unregisterProject
    ^ MetacelloProjectRegistration
        registrationForProjectSpec: self
        ifAbsent: [  ]
        ifPresent: [ :existing :new | existing unregisterProject ]
%

category: 'querying'
method: MetacelloProjectSpec
version
    self subclassResponsibility
%

category: 'construction'
method: MetacelloProjectSpec
version: anObject constructor: aVersionConstructor
    aVersionConstructor versionForProject: anObject
%

category: 'querying'
method: MetacelloProjectSpec
versionKey
	"suitable for using as a unique key for the receiver's version in a dictionary"

	^ self version versionKey
%

category: 'querying'
method: MetacelloProjectSpec
versionOrNil

	^[ self version ] on: MetacelloVersionDoesNotExistError do: [:ex | ^nil ].
%

category: 'querying'
method: MetacelloProjectSpec
versionString
	^ versionString
%

category: 'accessing'
method: MetacelloProjectSpec
versionString: anObject
    self shouldBeMutable.
    versionString := anObject
%

category: 'construction'
method: MetacelloProjectSpec
versionString: anObject constructor: aVersionConstructor
    aVersionConstructor versionStringForProject: anObject
%

! Class Implementation for MetacelloGenericProjectSpec

! ------------------- Instance methods for MetacelloGenericProjectSpec

category: 'scripting'
method: MetacelloGenericProjectSpec
compareEqual: aMetacelloProjectSpec
    "'projectPackage repositories'"

    ^ (super compareEqual: aMetacelloProjectSpec)
        and: [ self repositories compareEqual: aMetacelloProjectSpec repositories ]
%

category: 'scripting'
method: MetacelloGenericProjectSpec
copyAsConformingProjectSpec: aMetacelloProject
  "Only needed when receiver is a MetacelloMCBaselineOfProjectSpec and aMetacelloProject is a MetacelloCypressBaselineProject"

  ^ self
%

category: 'loading'
method: MetacelloGenericProjectSpec
determineCurrentVersionForLoad
    self subclassResponsibility
%

category: 'accessing'
method: MetacelloGenericProjectSpec
getRepositories
    "raw access to iv"

    ^ repositories
%

category: 'scripting'
method: MetacelloGenericProjectSpec
hasNoLoadConflicts: aMetacelloProjectSpec
  "'projectPackage repositories'"

  ^ (super hasNoLoadConflicts: aMetacelloProjectSpec)
    and: [ 
      (self repositories isEmpty or: [ aMetacelloProjectSpec repositories isEmpty ])
        or: [ self repositories hasNoLoadConflicts: aMetacelloProjectSpec repositories ] ]
%

category: 'testing'
method: MetacelloGenericProjectSpec
hasRepository
    ^ self repositorySpecs notEmpty
%

category: 'loading'
method: MetacelloGenericProjectSpec
load
    (MetacelloLookupProjectSpecForLoad new
        projectSpec: self;
        yourself) signal performLoad
%

category: 'loading'
method: MetacelloGenericProjectSpec
loadVersion: aVersionOrNil
    self subclassResponsibility
%

category: 'merging'
method: MetacelloGenericProjectSpec
mergeMap
    | map |
    map := super mergeMap.
    map at: #'repositories' put: repositories.
    ^ map
%

category: 'merging'
method: MetacelloGenericProjectSpec
mergeRepositoriesSpec: anotherRepositories
  self
    repositories:
      (self getRepositories == nil
        ifTrue: [ anotherRepositories ]
        ifFalse: [ self repositories mergeSpec: anotherRepositories ])
%

category: 'scripting'
method: MetacelloGenericProjectSpec
mergeScriptRepository: anotherSpec
    self repositories: anotherSpec repositories
%

category: 'merging'
method: MetacelloGenericProjectSpec
mergeSpec: anotherSpec
  | newSpec map anotherRepositories |
  newSpec := super mergeSpec: anotherSpec.
  map := anotherSpec mergeMap.
  (anotherRepositories := map at: #'repositories') ~~ nil
    ifTrue: [ newSpec mergeRepositoriesSpec: anotherRepositories ].
  ^ newSpec
%

category: 'scripting'
method: MetacelloGenericProjectSpec
metacelloRegistrationHash
    "projectPackage (ignored) repositories"

    ^ super metacelloRegistrationHash bitXor: self repositories metacelloRegistrationHash
%

category: 'accessing'
method: MetacelloGenericProjectSpec
name: aString
    super name: aString.
    self projectPackage: nil
%

category: 'merging'
method: MetacelloGenericProjectSpec
nonOverridable
    ^ super nonOverridable , #(#'projectPackage' #'repositories')
%

category: 'copying'
method: MetacelloGenericProjectSpec
postCopy
    super postCopy.
    repositories := repositories copy.
    projectPackage := nil
%

category: 'accessing'
method: MetacelloGenericProjectSpec
projectPackage
    self subclassResponsibility
%

category: 'accessing'
method: MetacelloGenericProjectSpec
projectPackage: aProjectPackage
    self shouldBeMutable.
    projectPackage := aProjectPackage
%

category: 'construction'
method: MetacelloGenericProjectSpec
projectPackage: aBlock constructor: aVersionConstructor
    aVersionConstructor projectPackageForProject: aBlock
%

category: 'accessing'
method: MetacelloGenericProjectSpec
repositories
    repositories ifNil: [ repositories := self project repositoriesSpec ].
    ^ repositories
%

category: 'accessing'
method: MetacelloGenericProjectSpec
repositories: anObject
    self shouldBeMutable.
    repositories := anObject.
    self projectPackage: nil
%

category: 'construction'
method: MetacelloGenericProjectSpec
repositories: aBlock constructor: aVersionConstructor
    aVersionConstructor repositoriesForProject: aBlock
%

category: 'querying'
method: MetacelloGenericProjectSpec
repository
    | specs |
    self deprecated: 'Use repositories or repositorySpecs'.
    (specs := self repositorySpecs) isEmpty
        ifTrue: [ ^ nil ].
    ^ specs first
%

category: 'accessing'
method: MetacelloGenericProjectSpec
repository: aStringOrMetacelloRepositorySpec
    self repositories repository: aStringOrMetacelloRepositorySpec.
    self projectPackage: nil
%

category: 'construction'
method: MetacelloGenericProjectSpec
repository: anObject constructor: aVersionConstructor
    aVersionConstructor repositoryForProject: anObject
%

category: 'accessing'
method: MetacelloGenericProjectSpec
repository: aString username: username password: password
    self repositories repository: aString username: username password: password.
    self projectPackage: nil
%

category: 'construction'
method: MetacelloGenericProjectSpec
repository: aString username: username password: password constructor: aVersionConstructor
    aVersionConstructor repositoryForProject: aString username: username password: password
%

category: 'querying'
method: MetacelloGenericProjectSpec
repositoryDescriptions
    ^ self repositorySpecs collect: [ :repoSpec | repoSpec description ]
%

category: 'querying'
method: MetacelloGenericProjectSpec
repositorySpecs
    repositories ifNil: [ ^ #() ].
    ^ self repositories map values
%

! Class Implementation for MetacelloValueHolderSpec

! ------------------- Instance methods for MetacelloValueHolderSpec

category: 'printing'
method: MetacelloValueHolderSpec
configMethodOn: aStream indent: indent
  indent timesRepeat: [ aStream tab ].
  aStream nextPutAll: 'spec value: ' , self value printString
%

category: 'merging'
method: MetacelloValueHolderSpec
mergeMap

	| map |
	map := super mergeMap.
	map at: #value put: value.
	^map
%

category: 'private'
method: MetacelloValueHolderSpec
setAuthorInMetacelloVersion: aMetacelloVersionSpec

	aMetacelloVersionSpec setAuthor: self
%

category: 'private'
method: MetacelloValueHolderSpec
setBlessingInMetacelloVersion: aMetacelloVersionSpec

	aMetacelloVersionSpec setBlessing: self
%

category: 'private'
method: MetacelloValueHolderSpec
setDescriptionInMetacelloVersion: aMetacelloVersionSpec

	aMetacelloVersionSpec setDescription: self
%

category: 'private'
method: MetacelloValueHolderSpec
setPostLoadDoItInMetacelloSpec: aMetacelloSpec

	aMetacelloSpec setPostLoadDoIt: self
%

category: 'private'
method: MetacelloValueHolderSpec
setPreLoadDoItInMetacelloSpec: aMetacelloSpec

	aMetacelloSpec setPreLoadDoIt: self
%

category: 'private'
method: MetacelloValueHolderSpec
setTimestampInMetacelloVersion: aMetacelloVersionSpec

	aMetacelloVersionSpec setTimestamp: self
%

category: 'querying'
method: MetacelloValueHolderSpec
value
	^ value
%

category: 'accessing'
method: MetacelloValueHolderSpec
value: anObject
	value := anObject
%

category: 'construction'
method: MetacelloValueHolderSpec
value: anObject constructor: aVersionConstructor
    aVersionConstructor valueForValueHolder: anObject
%

! Class Implementation for MetacelloVersionSpec

! ------------------- Instance methods for MetacelloVersionSpec

category: 'accessing'
method: MetacelloVersionSpec
author

	author == nil 
		ifTrue: [
			^self project valueHolderSpec
				value: '';
				yourself].
	^ author
%

category: 'accessing'
method: MetacelloVersionSpec
author: anObject

	anObject setAuthorInMetacelloVersion: self
%

category: 'construction'
method: MetacelloVersionSpec
author: aBlockOrString constructor: aVersionConstructor
    aVersionConstructor authorForVersion: aBlockOrString
%

category: 'construction'
method: MetacelloVersionSpec
baseline: aString constructor: aVersionConstructor
    aVersionConstructor baselineForVersion: aString
%

category: 'construction'
method: MetacelloVersionSpec
baseline: aString with: aBlockOrString constructor: aVersionConstructor
    aVersionConstructor baselineForVersion: aString with: aBlockOrString
%

category: 'accessing'
method: MetacelloVersionSpec
blessing

	blessing == nil 
		ifTrue: [
			^self project valueHolderSpec
				value: self project defaultBlessing;
				yourself].
	^ blessing
%

category: 'accessing'
method: MetacelloVersionSpec
blessing: anObject

	anObject setBlessingInMetacelloVersion: self
%

category: 'construction'
method: MetacelloVersionSpec
blessing: aBlockOrString constructor: aVersionConstructor
    aVersionConstructor blessingForVersion: aBlockOrString
%

category: 'printing'
method: MetacelloVersionSpec
configMethodBasicOn: aStream last: last indent: indent
    | values lastIndex lastBlock |
    last
        ifTrue: [ 
            "need to calculate last statement with a value"
            values := {(self getBlessing).
            (self getDescription).
            (self getPreLoadDoIt).
            (self getPostLoadDoIt).
            (self getAuthor).
            (self getTimestamp)}.
            1 to: values size do: [ :index | 
                (values at: index) ~~ nil
                    ifTrue: [ lastIndex := index ] ].
            lastBlock := [ :arg | arg = lastIndex ] ]
        ifFalse: [ lastBlock := [ :arg | false ] ].
    self
        configMethodValueOn: aStream
        for: self getBlessing
        selector: 'blessing:'
        last: (lastBlock value: 1)
        indent: indent.
    self
        configMethodValueOn: aStream
        for: self getDescription
        selector: 'description:'
        last: (lastBlock value: 2)
        indent: indent.
    self
        configMethodValueOn: aStream
        for: self getPreLoadDoIt
        selector: 'preLoadDoIt:'
        last: (lastBlock value: 3)
        indent: indent.
    self
        configMethodValueOn: aStream
        for: self getPostLoadDoIt
        selector: 'postLoadDoIt:'
        last: (lastBlock value: 4)
        indent: indent.
    self
        configMethodValueOn: aStream
        for: self getAuthor
        selector: 'author:'
        last: (lastBlock value: 5)
        indent: indent.
    self
        configMethodValueOn: aStream
        for: self getTimestamp
        selector: 'timestamp:'
        last: (lastBlock value: 6)
        indent: indent
%

category: 'printing'
method: MetacelloVersionSpec
configMethodOn: aStream for: spec selector: selector last: last indent: indent
  spec == nil
    ifTrue: [ ^ self ].
  indent timesRepeat: [ aStream tab ].
  aStream
    nextPutAll: 'spec ' , selector , ' [';
    cr.
  spec configMethodOn: aStream indent: indent + 1.
  aStream nextPutAll: ' ].'.
  last
    ifFalse: [ aStream cr ]
%

category: 'printing'
method: MetacelloVersionSpec
configMethodOn: aStream indent: indent

	self configMethodOn: aStream last: true indent: indent
%

category: 'printing'
method: MetacelloVersionSpec
configMethodOn: aStream last: last indent: indent
    | hasPackageSpecs |
    hasPackageSpecs := false.
    self packagesSpec list
        do: [ :member | 
            member spec
                projectDo: [ :proj | 
                    member spec name ~~ nil
                        ifTrue: [ hasPackageSpecs := true ] ]
                packageDo: [ :package | 
                    member spec name ~~ nil
                        ifTrue: [ hasPackageSpecs := true ] ]
                groupDo: [ :group | 
                    member spec name ~~ nil
                        ifTrue: [ hasPackageSpecs := true ] ] ].
    self configMethodBasicOn: aStream last: hasPackageSpecs not indent: indent.
    self configPackagesSpecMethodOn: aStream indent: indent.
    last
        ifFalse: [ aStream cr ]
%

category: 'printing'
method: MetacelloVersionSpec
configMethodValueOn: aStream for: spec selector: selector last: last indent: indent
  | valuePrintString |
  spec == nil
    ifTrue: [ ^ self ].
  valuePrintString := (MetacelloPlatform current isSymbol: spec value)
    ifTrue: [ '#' , spec value asString printString ]
    ifFalse: [ spec value printString ].
  indent timesRepeat: [ aStream tab ].
  aStream nextPutAll: 'spec ' , selector , ' ' , valuePrintString , '.'.
  last
    ifFalse: [ aStream cr ]
%

category: 'printing'
method: MetacelloVersionSpec
configPackagesSpecMethodOn: aStream indent: indent
  | projectSpecs packageSpecs groupSpecs |
  projectSpecs := OrderedCollection new.
  packageSpecs := OrderedCollection new.
  groupSpecs := OrderedCollection new.
  self packagesSpec list
    do: [ :member | 
      member spec
        projectDo: [ :proj | 
          member spec name ~~ nil
            ifTrue: [ projectSpecs add: member ] ]
        packageDo: [ :package | 
          member spec name ~~ nil
            ifTrue: [ packageSpecs add: member ] ]
        groupDo: [ :group | 
          member spec name ~~ nil
            ifTrue: [ groupSpecs add: member ] ] ].
  projectSpecs isEmpty not
    ifTrue: [ 
      indent timesRepeat: [ aStream tab ].
      aStream nextPutAll: 'spec '.
      projectSpecs size > 1
        ifTrue: [ 
          aStream cr.
          indent + 1 timesRepeat: [ aStream tab ] ].
      1 to: projectSpecs size do: [ :index | 
        (projectSpecs at: index)
          configMethodCascadeOn: aStream
          last: index == projectSpecs size
          indent: indent + 1.
        index ~= projectSpecs size
          ifTrue: [ indent + 1 timesRepeat: [ aStream tab ] ] ] ].
  packageSpecs isEmpty not
    ifTrue: [ 
      projectSpecs isEmpty not
        ifTrue: [ aStream cr ].
      indent timesRepeat: [ aStream tab ].
      aStream nextPutAll: 'spec '.
      packageSpecs size > 1
        ifTrue: [ 
          aStream cr.
          indent + 1 timesRepeat: [ aStream tab ] ].
      1 to: packageSpecs size do: [ :index | 
        (packageSpecs at: index)
          configMethodCascadeOn: aStream
          last: index == packageSpecs size
          indent: indent + 1.
        index ~= packageSpecs size
          ifTrue: [ indent + 1 timesRepeat: [ aStream tab ] ] ] ].
  groupSpecs isEmpty not
    ifTrue: [ 
      projectSpecs isEmpty not | packageSpecs isEmpty not
        ifTrue: [ aStream cr ].
      indent timesRepeat: [ aStream tab ].
      aStream nextPutAll: 'spec '.
      groupSpecs size > 1
        ifTrue: [ 
          aStream cr.
          indent + 1 timesRepeat: [ aStream tab ] ].
      1 to: groupSpecs size do: [ :index | 
        (groupSpecs at: index)
          configMethodCascadeOn: aStream
          last: index == groupSpecs size
          indent: indent + 1.
        index ~= groupSpecs size
          ifTrue: [ indent + 1 timesRepeat: [ aStream tab ] ] ] ]
%

category: 'printing'
method: MetacelloVersionSpec
configSpawnMethodOn: aStream indent: indent

	self configMethodValueOn: aStream for: self getBlessing selector: 'blessing:' last: false indent: indent.
	self configMethodValueOn: aStream for: self getAuthor selector: 'author:' last: false indent: indent.
	self configMethodValueOn: aStream for: self getTimestamp selector: 'timestamp:' last: false indent: indent.
%

category: 'construction'
method: MetacelloVersionSpec
configuration: aString with: aBlockOrString constructor: aVersionConstructor
    aVersionConstructor configurationForVersion: aString with: aBlockOrString
%

category: 'private'
method: MetacelloVersionSpec
createVersion

	^self versionClass fromSpec: self
%

category: 'loading'
method: MetacelloVersionSpec
defaultPackageNames
	"if there is a package named 'default' (a group) then it defines the default package names,
	 otherwise answer a list of all of the package names in this version"

	self packages packageNamed: 'default' ifAbsent: [ ^self packageNames ].
	^#('default')
%

category: 'toolbox support'
method: MetacelloVersionSpec
deleteSpec: aSpec
    "remove the spec from packages"

    self packages deleteSpec: aSpec
%

category: 'accessing'
method: MetacelloVersionSpec
description

	description == nil 
		ifTrue: [
			^self project valueHolderSpec
				value: '';
				yourself].
	^ description
%

category: 'accessing'
method: MetacelloVersionSpec
description: anObject

	anObject setDescriptionInMetacelloVersion: self
%

category: 'construction'
method: MetacelloVersionSpec
description: aBlockOrString constructor: aVersionConstructor
    aVersionConstructor descriptionForVersion: aBlockOrString
%

category: 'querying'
method: MetacelloVersionSpec
difference: otherVersionSpec
    "Return a dictionary of additions, removals and modifications"

    | report myProjectSpecs otherProjectSpecs |
    report := MetacelloVersionDiffReport new.
    myProjectSpecs := Dictionary new.
    self
        projectDo: [ :projectSpec | myProjectSpecs at: projectSpec name put: projectSpec ]
        packageDo: [ :ignored |  ]
        groupDo: [ :ignored |  ].
    otherProjectSpecs := Dictionary new.
    otherVersionSpec
        projectDo: [ :projectSpec | otherProjectSpecs at: projectSpec name put: projectSpec ]
        packageDo: [ :ignored |  ]
        groupDo: [ :ignored |  ].
    myProjectSpecs
        valuesDo: [ :myProjectSpec | 
            | otherProjectSpec |
            otherProjectSpec := otherProjectSpecs at: myProjectSpec name ifAbsent: [  ].
            otherProjectSpec == nil
                ifTrue: [ 
                    report removals
                        at: myProjectSpec name
                        put:
                            {(myProjectSpec versionString).
                            ''} ]
                ifFalse: [ 
                    myProjectSpec versionString = otherProjectSpec versionString
                        ifFalse: [ 
                            report modifications
                                at: myProjectSpec name
                                put:
                                    {(myProjectSpec versionString).
                                    (otherProjectSpec versionString)} ] ] ].
    otherProjectSpecs
        valuesDo: [ :otherProjectSpec | 
            (myProjectSpecs at: otherProjectSpec name ifAbsent: [  ]) == nil
                ifTrue: [ 
                    report additions
                        at: otherProjectSpec name
                        put:
                            {''.
                            (otherProjectSpec versionString)} ] ].
    ^ report
%

category: 'loading'
method: MetacelloVersionSpec
expandToLoadableSpecNames: nameList

	| cacheKey names |
	cacheKey := Array with: self label with: nameList.
	^MetacelloPlatform current
		stackCacheFor: #loadableSpecNames
		at: cacheKey
		doing: [ :cache | 
			names := (self resolveToLoadableSpecs: nameList) collect: [:spec | spec name ].
			cache at: cacheKey put: names ].
%

category: 'accessing'
method: MetacelloVersionSpec
getAuthor
	^author
%

category: 'accessing'
method: MetacelloVersionSpec
getBlessing
	^blessing
%

category: 'accessing'
method: MetacelloVersionSpec
getDescription
	^description
%

category: 'accessing'
method: MetacelloVersionSpec
getPostLoadDoIt
  ^ postLoadDoIt
%

category: 'accessing'
method: MetacelloVersionSpec
getPreLoadDoIt
  ^ preLoadDoIt
%

category: 'accessing'
method: MetacelloVersionSpec
getTimestamp
	^timestamp
%

category: 'construction'
method: MetacelloVersionSpec
group: aString overrides: aStringOrCollection constructor: aVersionConstructor
    aVersionConstructor groupForVersion: aString overrides: aStringOrCollection
%

category: 'construction'
method: MetacelloVersionSpec
group: aString with: aStringOrCollection constructor: aVersionConstructor
    aVersionConstructor groupForVersion: aString with: aStringOrCollection
%

category: 'accessing'
method: MetacelloVersionSpec
import
    ^ importName
%

category: 'accessing'
method: MetacelloVersionSpec
import: aString
  importName := aString
%

category: 'construction'
method: MetacelloVersionSpec
import: aString constructor: aVersionConstructor
    aVersionConstructor importForVersion: aString
%

category: 'accessing'
method: MetacelloVersionSpec
import: aString provides: anArray
  importArray := importArray
    ifNil: [ {(aString -> anArray)} ]
    ifNotNil: [ importArray , {(aString -> anArray)} ]
%

category: 'construction'
method: MetacelloVersionSpec
import: aString provides: anArray constructor: aVersionConstructor
  aVersionConstructor importForVersion: aString provides: anArray
%

category: 'accessing'
method: MetacelloVersionSpec
importArray
  ^ importArray
%

category: 'testing'
method: MetacelloVersionSpec
isPartiallyCurrent: notLoadedMatters useEquality: useEquality

	self subclassResponsibility
%

category: 'testing'
method: MetacelloVersionSpec
isPossibleBaseline
    self subclassResponsibility
%

category: 'printing'
method: MetacelloVersionSpec
label

	^self versionString, ' [', self projectLabel, ']'
%

category: 'merging'
method: MetacelloVersionSpec
mergeMap
    | map |
    map := super mergeMap.
    map at: #'versionString' put: versionString.
    map at: #'blessing' put: blessing.
    map at: #'description' put: description.
    map at: #'author' put: author.
    map at: #'timestamp' put: timestamp.
    map at: #'preLoadDoIt' put: preLoadDoIt.
    map at: #'postLoadDoIt' put: postLoadDoIt.
    map at: #'packageList' put: self packages.
    ^ map
%

category: 'merging'
method: MetacelloVersionSpec
mergeSpec: anotherSpec
    | newSpec map anotherPackages |
    newSpec := super mergeSpec: anotherSpec.
    map := anotherSpec mergeMap.
    (anotherPackages := map at: #'packageList') isEmpty not
        ifTrue: [ 
            newSpec
                packages:
                    (self packages isEmpty
                        ifTrue: [ anotherPackages ]
                        ifFalse: [ self packages mergeSpec: anotherPackages ]) ].
    ^ newSpec
%

category: 'merging'
method: MetacelloVersionSpec
nonOverridable
    ^ super nonOverridable , #(#'packageList')
%

category: 'querying'
method: MetacelloVersionSpec
packageNamed: aString

	^self packageNamed: aString ifAbsent: [ nil ]
%

category: 'querying'
method: MetacelloVersionSpec
packageNamed: aString forLoad: ignored forMap: map ifAbsent: absentBlock
  "at the end of the day, I don't the forLoad arg is important ... 
   it just ends up triggering an error ... when during a real load, you would 
   not get error. After a decent period of mourning we should just scrub this 
   arg from system"

  | importSpec |
  ^ map
    at: aString
    ifAbsent: [ 
      (self importArray notNil or: [ self import notNil ])
        ifTrue: [ 
          "expect the 'missing' name to be satisfied within context of imported project"
          importArray
            ifNotNil: [ 
              importArray
                do: [ :assoc | 
                  ((assoc value includes: aString) and: [ map includesKey: assoc key ])
                    ifTrue: [ 
                      importSpec := (map at: assoc key)
                        mergeImportLoads: {aString};
                        yourself ] ].
              importSpec ifNotNil: [ ^ importSpec ] ].
          (importSpec isNil and: [ self import notNil ])
            ifTrue: [ 
              ^ (map at: self import ifAbsent: absentBlock)
                mergeImportLoads: {aString};
                yourself ] ].
      (aString = 'default' or: [ aString = 'ALL' ])
        ifTrue: [ 
          self project groupSpec
            name: aString;
            includes: self packageNames;
            yourself ]
        ifFalse: [ absentBlock value ] ]
%

category: 'querying'
method: MetacelloVersionSpec
packageNamed: aString forMap: map ifAbsent: absentBlock
    "import: only allowed to be used with baseline project specs"

    ^ self
        packageNamed: aString
        forLoad: true
        forMap: map
        ifAbsent: absentBlock
%

category: 'querying'
method: MetacelloVersionSpec
packageNamed: aString ifAbsent: aBlock

	^self packageNamed: aString forMap: self packages map ifAbsent: aBlock
%

category: 'querying'
method: MetacelloVersionSpec
packageNames
    packageList == nil
        ifTrue: [ ^ #() ].
    ^ self packages map keys asSet
%

category: 'accessing'
method: MetacelloVersionSpec
packages
    packageList == nil
        ifTrue: [ packageList := self project packagesSpec ].
    ^ packageList
%

category: 'accessing'
method: MetacelloVersionSpec
packages: anObject
    packageList := anObject
%

category: 'querying'
method: MetacelloVersionSpec
packageSpecsInLoadOrder
  ^ self packages packageSpecsInLoadOrderFor: self
%

category: 'accessing'
method: MetacelloVersionSpec
packagesSpec

	^self packages
%

category: 'copying'
method: MetacelloVersionSpec
postCopy
    super postCopy.
    blessing := blessing copy.
    description := description copy.
    author := author copy.
    timestamp := timestamp copy.
    packageList := packageList copy
%

category: 'querying'
method: MetacelloVersionSpec
postLoadDoIt
  ^ postLoadDoIt ifNil: [ super postLoadDoIt ]
%

category: 'accessing'
method: MetacelloVersionSpec
postLoadDoIt: anObject

	anObject setPostLoadDoItInMetacelloSpec: self
%

category: 'construction'
method: MetacelloVersionSpec
postLoadDoIt: aSymbol constructor: aVersionConstructor
    aVersionConstructor postLoadDoItForVersion: aSymbol
%

category: 'querying'
method: MetacelloVersionSpec
preLoadDoIt
  ^ preLoadDoIt ifNil: [ super preLoadDoIt ]
%

category: 'accessing'
method: MetacelloVersionSpec
preLoadDoIt: anObject

	anObject setPreLoadDoItInMetacelloSpec: self
%

category: 'construction'
method: MetacelloVersionSpec
preLoadDoIt: aSymbol constructor: aVersionConstructor
    aVersionConstructor preLoadDoItForVersion: aSymbol
%

category: 'construction'
method: MetacelloVersionSpec
project: aString constructor: aVersionConstructor
    aVersionConstructor projectForVersion: aString
%

category: 'construction'
method: MetacelloVersionSpec
project: aString copyFrom: oldSpecName with: aBlock constructor: aVersionConstructor
    aVersionConstructor projectForVersion: aString copyFrom: oldSpecName with: aBlock
%

category: 'construction'
method: MetacelloVersionSpec
project: aString overrides: aBlock constructor: aVersionConstructor
    aVersionConstructor projectForVersion: aString overrides: aBlock
%

category: 'construction'
method: MetacelloVersionSpec
project: aString with: aBlockOrString constructor: aVersionConstructor
    aVersionConstructor projectForVersion: aString with: aBlockOrString
%

category: 'enumerating'
method: MetacelloVersionSpec
projectDo: projectBlock packageDo: packageBlock groupDo: groupBlock

	self packageSpecsInLoadOrder do: [:pkgSpec |
		pkgSpec projectDo: projectBlock packageDo: packageBlock groupDo: groupBlock ]
%

category: 'accessing'
method: MetacelloVersionSpec
projectLabel

	^self project label
%

category: 'construction'
method: MetacelloVersionSpec
removeGroup: aString constructor: aVersionConstructor
    aVersionConstructor removeGroupForVersion: aString
%

category: 'construction'
method: MetacelloVersionSpec
removeProject: aString constructor: aVersionConstructor
    aVersionConstructor removeProjectForVersion: aString
%

category: 'construction'
method: MetacelloVersionSpec
repositories: aBlock constructor: aVersionConstructor
    aVersionConstructor repositoriesForVersion: aBlock
%

category: 'construction'
method: MetacelloVersionSpec
repository: anObject constructor: aVersionConstructor
    aVersionConstructor repositoryForVersion: anObject
%

category: 'construction'
method: MetacelloVersionSpec
repository: aString username: username password: password constructor: aVersionConstructor
    aVersionConstructor repositoryForVersion: aString username: username password: password
%

category: 'loading'
method: MetacelloVersionSpec
resolveToLoadableSpec: aString forLoad: forLoad forMap: map packages: packageMap
    | package |
    package := self
        packageNamed: aString
        forLoad: forLoad
        forMap: map
        ifAbsent: [ ^ self error: 'Name not found: ' , aString ].
    packageMap at: package name put: package.
    ^ {package}
%

category: 'loading'
method: MetacelloVersionSpec
resolveToLoadableSpecs: nameList
  "Resolves names in namelist to the  list of packages and projects in the version that would be loaded. Projects are 
	not traversed during the transitive closure. The scope is that of the version itself.
	   If the spec is a package, answer a list including the package and the transitive closure on 
			its #requires: and #includes: fields.
	   If the spec is a project, answer the project.
	   If the spec is a group, answers the list of packages in the #includes: field of the group. 
			Groups in the #includes: field are expanded following the transitive closure on groups"

  | map |
  map := Dictionary new.
  self resolveToLoadableSpecs: nameList forLoad: false map: map.
  ^ map values
%

category: 'loading'
method: MetacelloVersionSpec
resolveToLoadableSpecs: required forLoad: forLoad map: packageMap
  | reqd allReqd map newReqd platform |
  reqd := required copy.
  allReqd := Set new.
  map := self packages map.
  platform := MetacelloPlatform current.
  [ reqd isEmpty ]
    whileFalse: [ 
      newReqd := Set new.
      reqd
        do: [ :req | 
          (self
            resolveToLoadableSpec: req
            forLoad: forLoad
            forMap: map
            packages: packageMap)
            do: [ :loadableSpec | 
              newReqd addAll: loadableSpec requires.
              newReqd addAll: loadableSpec includes ] ].
      allReqd addAll: reqd.
      platform removeFrom: newReqd allFoundIn: allReqd.
      reqd := newReqd ].
  packageMap keys
    do: [ :pkgName | 
      | spec |
      spec := (packageMap at: pkgName) resolveToLoadableSpec.
      spec == nil
        ifTrue: [ packageMap removeKey: pkgName ]
        ifFalse: [ packageMap at: pkgName put: spec ] ]
%

category: 'accessing'
method: MetacelloVersionSpec
setAuthor: anObject
	author := anObject
%

category: 'accessing'
method: MetacelloVersionSpec
setBlessing: anObject
	blessing := anObject
%

category: 'accessing'
method: MetacelloVersionSpec
setDescription: anObject
	description := anObject
%

category: 'accessing'
method: MetacelloVersionSpec
setImport: anArray
  importArray := importArray
    ifNil: [ anArray ]
    ifNotNil: [ importArray , anArray ]
%

category: 'accessing'
method: MetacelloVersionSpec
setPostLoadDoIt: aSymbolOrValueHolderSpec
  postLoadDoIt := aSymbolOrValueHolderSpec
%

category: 'accessing'
method: MetacelloVersionSpec
setPreLoadDoIt: aSymbolOrValueHolderSpec
  preLoadDoIt := aSymbolOrValueHolderSpec
%

category: 'accessing'
method: MetacelloVersionSpec
setTimestamp: anObject
	timestamp := anObject
%

category: 'accessing'
method: MetacelloVersionSpec
timestamp

	timestamp == nil 
		ifTrue: [
			^self project valueHolderSpec
				value: '';
				yourself].
	^ timestamp
%

category: 'accessing'
method: MetacelloVersionSpec
timestamp: anObject

	anObject setTimestampInMetacelloVersion: self
%

category: 'construction'
method: MetacelloVersionSpec
timestamp: aBlockOrStringOrDateAndTime constructor: aVersionConstructor
    aVersionConstructor timestampForVersion: aBlockOrStringOrDateAndTime
%

category: 'private'
method: MetacelloVersionSpec
versionClass

	^MetacelloVersion
%

category: 'private'
method: MetacelloVersionSpec
versionNumber
    ^ self project versionNumberClass fromString: self versionString
%

category: 'querying'
method: MetacelloVersionSpec
versionString
	versionString == nil ifTrue: [ ^'' ].
	^ versionString
%

category: 'accessing'
method: MetacelloVersionSpec
versionString: anObject
	versionString := anObject
%

category: 'construction'
method: MetacelloVersionSpec
versionString: anObject constructor: aVersionConstructor
    aVersionConstructor versionStringForVersion: anObject
%

! Class Implementation for MetacelloSpecLoader

! ------------------- Class methods for MetacelloSpecLoader

category: 'instance creation'
classmethod: MetacelloSpecLoader
on: aMetacelloPackagesSpec

	^(self new) 
		spec: aMetacelloPackagesSpec;
		yourself
%

! ------------------- Instance methods for MetacelloSpecLoader

category: 'actions'
method: MetacelloSpecLoader
load

	self subclassResponsibility
%

category: 'accessing'
method: MetacelloSpecLoader
loadType
	"#atomic or #linear"
	
	^self project loadType
%

category: 'accessing'
method: MetacelloSpecLoader
project

	^self spec project
%

category: 'accessing'
method: MetacelloSpecLoader
spec

	^spec
%

category: 'accessing'
method: MetacelloSpecLoader
spec: aMetacelloPackagesSpec

	spec := aMetacelloPackagesSpec
%

category: 'actions'
method: MetacelloSpecLoader
unload

	self subclassResponsibility
%

! Class Implementation for MetacelloValidationIssue

! ------------------- Class methods for MetacelloValidationIssue

category: 'instance creation'
classmethod: MetacelloValidationIssue
configurationClass: aClass reasonCode: aSymbol callSite: aCallSite explanation: aString

	^(self new)
		configurationClass: aClass;
		reasonCode: aSymbol;
		callSite: aCallSite;
		explanation: aString;
		yourself
%

! ------------------- Instance methods for MetacelloValidationIssue

category: 'accessing'
method: MetacelloValidationIssue
callSite
	^ callSite
%

category: 'accessing'
method: MetacelloValidationIssue
callSite: anObject
	callSite := anObject
%

category: 'accessing'
method: MetacelloValidationIssue
configurationClass
	^ configurationClass
%

category: 'accessing'
method: MetacelloValidationIssue
configurationClass: aClass
	configurationClass := aClass
%

category: 'accessing'
method: MetacelloValidationIssue
explanation
	^ explanation
%

category: 'accessing'
method: MetacelloValidationIssue
explanation: aString
	explanation := aString
%

category: 'testing'
method: MetacelloValidationIssue
isCritical

	^self isError or: [ self isCriticalWarning ]
%

category: 'testing'
method: MetacelloValidationIssue
isCriticalWarning

	^false
%

category: 'testing'
method: MetacelloValidationIssue
isError

	^false
%

category: 'testing'
method: MetacelloValidationIssue
isWarning

	^false
%

category: 'accessing'
method: MetacelloValidationIssue
label

	^''
%

category: 'printing'
method: MetacelloValidationIssue
printOn: aStream
	aStream
		nextPutAll: self label;
		nextPut: $:;
		space;
		nextPutAll: self explanation.
	self reasonCode ~~ #none
		ifTrue: [ 
			aStream
				space;
				nextPut: ${;
				space;
				nextPutAll: self reasonCode asString;
				space;
				nextPut: $} ].
	(self configurationClass ~~ nil or: [ self callSite ~~ nil ])
		ifTrue: [ 
			aStream
				space;
				nextPut: $[;
				space.
			self configurationClass ~~ nil
				ifTrue: [ 
					aStream
						nextPutAll: self configurationClass name asString;
						space ].
			self callSite ~~ nil
				ifTrue: [ 
					aStream
						nextPutAll: self callSite name asString;
						space ].
			aStream nextPut: $] ]
%

category: 'accessing'
method: MetacelloValidationIssue
reasonCode

	reasonCode == nil ifTrue: [ reasonCode := #none ].
	^ reasonCode
%

category: 'accessing'
method: MetacelloValidationIssue
reasonCode: anObject
	reasonCode := anObject
%

! Class Implementation for MetacelloValidationCriticalWarning

! ------------------- Instance methods for MetacelloValidationCriticalWarning

category: 'testing'
method: MetacelloValidationCriticalWarning
isCriticalWarning

	^true
%

category: 'accessing'
method: MetacelloValidationCriticalWarning
label

	^'Critical Warning'
%

! Class Implementation for MetacelloValidationError

! ------------------- Instance methods for MetacelloValidationError

category: 'testing'
method: MetacelloValidationError
isError

	^true
%

category: 'accessing'
method: MetacelloValidationError
label

	^'Error'
%

! Class Implementation for MetacelloValidationWarning

! ------------------- Instance methods for MetacelloValidationWarning

category: 'testing'
method: MetacelloValidationWarning
isWarning

	^true
%

category: 'accessing'
method: MetacelloValidationWarning
label

	^'Warning'
%

! Class Implementation for MetacelloVersionDiffReport

! ------------------- Instance methods for MetacelloVersionDiffReport

category: 'accessing'
method: MetacelloVersionDiffReport
additions
	additions ifNil: [ additions := Dictionary new ].
	^ additions
%

category: 'accessing'
method: MetacelloVersionDiffReport
additions: anObject
	additions := anObject
%

category: 'accessing'
method: MetacelloVersionDiffReport
configuration
	^ configuration
%

category: 'accessing'
method: MetacelloVersionDiffReport
configuration: anObject
	configuration := anObject
%

category: 'accessing'
method: MetacelloVersionDiffReport
from
	^ from
%

category: 'accessing'
method: MetacelloVersionDiffReport
from: anObject
	from := anObject
%

category: 'accessing'
method: MetacelloVersionDiffReport
modifications
	modifications ifNil: [ modifications := Dictionary new ].
	^ modifications
%

category: 'accessing'
method: MetacelloVersionDiffReport
modifications: anObject
	modifications := anObject
%

category: 'printing'
method: MetacelloVersionDiffReport
printOn: aStream
  | printBlock |
  printBlock := [ :pkgName :ar | 
  2 timesRepeat: [ aStream tab ].
  aStream
    nextPutAll: pkgName asString;
    cr.
  3 timesRepeat: [ aStream tab ].
  aStream
    nextPutAll: (ar at: 1) asString printString;
    nextPutAll: ' to ';
    nextPutAll: (ar at: 2) asString printString;
    cr ].
  aStream
    nextPutAll: self configuration asString;
    space;
    nextPutAll: from asString printString;
    nextPutAll: ' to ';
    nextPutAll: to asString printString;
    cr.
  aStream
    tab;
    nextPutAll: 'Additions:';
    cr.
  self additions keysAndValuesDo: printBlock.
  aStream
    tab;
    nextPutAll: 'Modifications:';
    cr.
  self modifications keysAndValuesDo: printBlock.
  aStream
    tab;
    nextPutAll: 'Removals:';
    cr.
  self removals keysAndValuesDo: printBlock
%

category: 'accessing'
method: MetacelloVersionDiffReport
removals
	removals ifNil: [ removals := Dictionary new ].
	^ removals
%

category: 'accessing'
method: MetacelloVersionDiffReport
removals: anObject
	removals := anObject
%

category: 'accessing'
method: MetacelloVersionDiffReport
to
	^ to
%

category: 'accessing'
method: MetacelloVersionDiffReport
to: anObject
	to := anObject
%

! Class Implementation for MetacelloVisitedPackages

! ------------------- Class methods for MetacelloVisitedPackages

category: 'instance creation'
classmethod: MetacelloVisitedPackages
new
  ^ self basicNew initialize
%

! ------------------- Instance methods for MetacelloVisitedPackages

category: 'initialize-release'
method: MetacelloVisitedPackages
initialize

	groups := Set new.
	packages := Set new.
	projects := Set new.
%

category: 'visiting'
method: MetacelloVisitedPackages
pushProject: aBlock

	| oldGroups oldPackages oldProjects |
	oldGroups := groups.
	oldPackages := packages.
	oldProjects := projects.
	groups := Set new.
	packages := Set new.
	^aBlock ensure: [
		groups := oldGroups.
		packages := oldPackages.
		projects := oldProjects ]
%

category: 'visiting'
method: MetacelloVisitedPackages
visit: aSpec doing: aBlock

	aSpec
		projectDo: [:spec | 
			(projects includes: spec name) ifTrue: [ ^self ].
			projects add: spec name ] 
		packageDo: [:spec | 
			(packages includes: spec name) ifTrue: [ ^self ].
			packages add: spec name ] 
		groupDo: [:spec | 
			(groups includes: spec name) ifTrue: [ ^self ].
			groups add: spec name ].
	aBlock value: aSpec
%

! Class Extensions

! Class Extension for AbstractMetacelloConfiguration

! ------------------- Instance methods for AbstractMetacelloConfiguration

category: '*metacello-core'
method: AbstractMetacelloConfiguration
versionNumberClass
    ^ MetacelloSemanticVersionNumber
%

set compile_env: 0

! Class Extension for BaselineOf

! ------------------- Instance methods for BaselineOf

category: '*metacello-core'
method: BaselineOf
versionNumberClass
    ^ MetacelloVersionNumber
%

! Class Extension for ConfigurationOf

! ------------------- Instance methods for ConfigurationOf

category: '*metacello-core'
method: ConfigurationOf
versionDoesNotExistError: versionStringOrSymbol
  (MetacelloSymbolicVersionDoesNotExistError
    project: self project
    versionString: versionStringOrSymbol) signal
%

! Class Extension for Metacello

! ------------------- Class methods for Metacello

category: '*metacello-core'
classmethod: Metacello
registrations
  ^ MetacelloProjectRegistration registry registrations
%

category: '*metacello-core'
classmethod: Metacello
scriptExecutorClass: anExecutorSpec
  | currentPlatform |
  currentPlatform :=  MetacelloPlatform @env2: current.
  currentPlatform
    @env2: 
      globalNamed: anExecutorSpec key
      ifAbsent: [ ConfigurationOf ensureMetacello: anExecutorSpec value ].
  ^ currentPlatform @env2: globalNamed: anExecutorSpec key
%

set compile_env: 2

! Class initializers 

doit
MetacelloPlatform initialize.
true.
%



! End of Package: Metacello-Core

set compile_env: 0

