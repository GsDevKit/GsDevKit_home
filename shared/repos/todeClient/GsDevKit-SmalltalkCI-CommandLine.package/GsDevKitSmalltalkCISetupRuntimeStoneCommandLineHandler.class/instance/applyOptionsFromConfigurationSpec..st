activations
applyOptionsFromConfigurationSpec: configSpec
	configSpec timeZone
		ifNotNil: [ :timeZoneName | 
			| sd |
			sd := self sessionDescription copy.
			sd
				userId: 'SystemUser';
				password: 'swordfish'.
			Transcript
				cr;
				tab;
				show: 'Defining default TimeZone for stone: ' , timeZoneName printString.
			(GciSession loginWith: sd)
				executeStringExpectingStringNB:
						'TimeZone default: (TimeZone named: ' , timeZoneName printString , '). System commit.'
					envId: 0;
				logout ]