options
scriptMethodOptions
	^ super scriptMethodOptions, 
	{
			#('write' nil #required #write:).
	}