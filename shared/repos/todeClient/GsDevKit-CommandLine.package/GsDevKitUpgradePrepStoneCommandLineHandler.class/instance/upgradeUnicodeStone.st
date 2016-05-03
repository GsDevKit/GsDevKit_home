activations
upgradeUnicodeStone
	"Move and rename the icu libraries to the target stone's lib directory"

	| targetLibDir sourceLibDir |
	sourceLibDir := self gs_stonesHome / self sourceStoneName / 'product' / 'lib'.
	targetLibDir := self gs_stonesHome / self targetStoneName / 'product' / 'lib'