private
asSystemUserExecute: smalltalkString
	| sd sess |
	sd := self sessionDescription copy.
	sd
		userId: 'SystemUser';
		password: 'swordfish'.
	sess := TodeSession new.
	(sess loginWith: sd)
		ifFalse: [ 
			| gciError messageText |
			gciError := sess getAndClearLastError.
			messageText := gciError message.
			^ Error signal: messageText , ' For further information about login failures, check the gem log file' ].
	sess
		executeStringExpectingStringNB: smalltalkString envId: 0;
		logout