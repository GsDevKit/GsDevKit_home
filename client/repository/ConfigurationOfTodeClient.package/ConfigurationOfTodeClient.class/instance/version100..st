versions
version100: spec
	<version: '1.0.0'>
	spec
		for: #'pharo3.x'
		do: [ 
			spec blessing: #release.
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
								repository: 'github://dalehenrich/tode:v0.0.?/repository' ];
				postLoadDoIt: #post30Load;
				yourself ]
