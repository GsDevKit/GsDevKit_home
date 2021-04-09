commands
classMethod: aString className: className
	^ SuperDoitExtensionMethodCommand
		chunk: aString
		className: className
		isMeta: true