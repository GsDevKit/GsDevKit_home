commands
classMethod: aString in: className
	^ SuperDoitExtensionMethodCommand
		chunk: aString
		className: className
		isMeta: true