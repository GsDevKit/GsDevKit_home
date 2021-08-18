resources
ston_registry
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
			#stonePath : ''stones/testStone1''
		},
		GsDevKitStoneRegistration {
			#registryName : ''secondStone'',
			#stonePath : ''/outside/stones/testStone2''
		},
		GsDevKitRemoteStoneRegistration {
			#registryName : ''testStone1-remote'',
			#stonePath : ''stones/testStone1-remote''
		},
		GsDevKitRemoteStoneRegistration {
			#registryName : ''testStone3'',
			#stonePath : ''/productionStones/testStone3''
		}
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