activation
doSetOptions
	"check that the gemstone userId exists and if not, create the user"

	super doSetOptions.
	(#('SystemUser' 'DataCurator') includes: self gemstoneUserId)
		ifFalse: [ 
			| newUserId |
			newUserId := self gemstoneUserId.
			self
				asSystemUserExecute:
					'| newUser |
newUser := AllUsers userWithId: ' , newUserId printString
						,
							' ifAbsent: [ nil ].
newUser ~~ nil
  ifTrue: [^ true ].
(AllUsers 
  addNewUserWithId: ' , newUserId printString
						,
							'
  password: ''swordfish'')
    addPrivilege: #CodeModification;
    addPrivilege: #UserPassword;
    addPrivilege: #OtherPassword;
    addPrivilege: #GarbageCollection;
    addPrivilege: #SystemControl;
    addPrivilege: #SessionAccess;
    addPrivilege: #FileControl;
    addPrivilege: #SessionPriority;
    addGroup: ''DataCuratorGroup'';
    yourself.
System commitTransaction.' ]