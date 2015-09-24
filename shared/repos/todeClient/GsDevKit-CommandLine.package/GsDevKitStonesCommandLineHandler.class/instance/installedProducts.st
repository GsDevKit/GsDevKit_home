accessing
installedProducts
	"self new installedProducts"

	installedProducts
		ifNil: [ 
			installedProducts := Dictionary new.
			self productsHome directories
				do: [ :productDir | 
					| dirName |
					dirName := productDir basename.
					(dirName beginsWith: 'GemStone64Bit')
						ifTrue: [ 
							| productVersion dashIndex |
							dashIndex := dirName indexOf: $-.
							productVersion := dirName copyFrom: 'GemStone64Bit' size + 1 to: dashIndex - 1.
							installedProducts at: productVersion put: productDir ] ] ].
	^ installedProducts