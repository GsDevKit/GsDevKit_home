activations
applyOptionsFromConfigurationSpec: configSpec
	configSpec timeZone
		ifNotNil: [ :timeZoneName | 
			| sd sess |
			sd := self sessionDescription copy.
			sd
				userId: 'SystemUser';
				password: 'swordfish'.
			Transcript
				cr;
				tab;
				show: 'Defining default TimeZone for stone: ' , timeZoneName printString.
			sess := TodeSession new.
			(sess loginWith: sd)
				ifFalse: [ 
					| gciError messageText |
					gciError := sess getAndClearLastError.
					messageText := gciError message.
					^ Error signal: messageText , ' For further information about login failures, check the gem log file' ].
			sess
				executeStringExpectingStringNB:
						'TimeZone default: (TimeZone named: ' , timeZoneName printString , '). System commit.'
					envId: 0;
				logout ]