versions
version101: spec
	<version: '1.0.1'>
	spec
		for: #'pharo3.x'
		do: [ 
			spec blessing: #development.
			spec repository: 'filetree://' , (FileSystem workingDirectory parent / 'repository') pathString.
			spec
				package: 'GsDevKit-CommandLine' with: [ spec requires: #('Tode' 'OSProcess') ];
				configuration: 'OSProcess'
					with: [ 
							spec
								loads: 'Core';
								version: #stable;
								repository: 'http://smalltalkhub.com/mc/Pharo/MetaRepoForPharo30/main' ];
				baseline: 'Tode'
					with: [ 
							spec
								loads: 'GemStone Dev';
								repository: 'github://dalehenrich/tode:dev/repository' ];
				postLoadDoIt: #post30Load;
				yourself ]