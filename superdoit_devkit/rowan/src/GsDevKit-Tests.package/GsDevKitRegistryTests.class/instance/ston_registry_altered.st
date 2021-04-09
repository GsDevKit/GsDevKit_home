resources
ston_registry_altered
  "Altered registry
		- Stone testStone1 path altered to stones/testStone1-altered
		- Group noStones-group added
		- testStone2 removed"

  ^ 'GsDevKitRegistry {
	#sourceRepos : [
		GsDevKitSourceRepoRegistration {
			#registryName : ''testRepo1'',
			#repoPath : ''repos/testRepo1''
		},
		GsDevKitSourceRepoRegistration {
			#registryName : ''testRepo2'',
			#repoPath : ''/git''
		}
	],
	#stones : [
		GsDevKitStoneRegistration {
			#registryName : ''testStone1'',
			#stonePath : ''stones/testStone1-altered''
		},
		GsDevKitStoneRegistration {
			#registryName : ''secondStone'',
			#stonePath : ''/outside/stones/testStone2''
		},
		GsDevKitRemoteStoneRegistration {
			#registryName : ''testStone1-remote'',
			#stonePath : ''stones/testStone1-remote''
		},
	],
	#groups : [
		GsDevKitStoneGroupRegistration {
			#registryName : ''testStone1-group'',
			#stoneRegistryNames : [
				''testStone1'',
				''testStone1-remote''
			]
		},
		GsDevKitStoneGroupRegistration {
			#registryName : ''noStones-group'',
			#stoneRegistryNames : [ ]
		},
		GsDevKitStoneGroupRegistration {
			#registryName : ''all-stones-group'',
			#stoneRegistryNames : [
				''testStone1'',
				''secondStone'',
				''testStone1-remote'',
				''testStone3''
			]
		}
	]
}'