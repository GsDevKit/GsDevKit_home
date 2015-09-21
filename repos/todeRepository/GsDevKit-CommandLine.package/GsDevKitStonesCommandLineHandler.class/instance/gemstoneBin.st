accessing
gemstoneBin
	gemstoneBin
		ifNil: [ self productsHome directories do: [ :gemstoneInstallDir | gemstoneBin := gemstoneInstallDir asFileReference / 'bin' ] ].
	^ gemstoneBin