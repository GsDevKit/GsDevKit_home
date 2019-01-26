accessing
gemstoneBin
	gemstoneBin
		ifNil: [ self productsHome directories "reverse" do: [ :gemstoneInstallDir | gemstoneBin := gemstoneInstallDir asFileReference / 'bin' ] ].
	^ gemstoneBin