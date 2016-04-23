gsdevkit api
stones
	^self asFileReference directories select: [ :dir | (self stoneNamed: dir basename) isStone ]