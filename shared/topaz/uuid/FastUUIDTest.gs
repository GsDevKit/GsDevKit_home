! ------------------- Class definition for FastUUIDTest
expectvalue /Class
doit
(AbstractUUIDTest
	subclass: 'FastUUIDTest'
	instVarNames: #( )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'UUID-Tests';
		comment: '';
		immediateInvariant.
%
! ------------------- Remove existing behavior from FastUUIDTest
expectvalue /Metaclass3       
doit
FastUUIDTest removeAllMethods.
FastUUIDTest class removeAllMethods.
%
set compile_env: 0
! ------------------- Class methods for FastUUIDTest
! ------------------- Instance methods for FastUUIDTest
category: 'running'
method: FastUUIDTest
generatorClass
  ^ FastUUIDGenerator
%
