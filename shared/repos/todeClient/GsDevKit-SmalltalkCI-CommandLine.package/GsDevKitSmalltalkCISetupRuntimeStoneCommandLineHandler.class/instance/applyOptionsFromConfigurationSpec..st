activations
applyOptionsFromConfigurationSpec: configSpec
	configSpec timeZone
		ifNotNil: [ :timeZoneName | 
			Transcript
				cr;
				tab;
				show: 'Defining default TimeZone for stone: ' , timeZoneName printString.
			self asSystemUserExecute: 'TimeZone default: (TimeZone named: ' , timeZoneName printString , '). System commit.' ]