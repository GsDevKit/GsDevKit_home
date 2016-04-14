gsdevkit api
lockClientGsDevKitProjects
	self shared repos gitRepositories do: [ :gitRepo | gitRepo lockClientProject ]