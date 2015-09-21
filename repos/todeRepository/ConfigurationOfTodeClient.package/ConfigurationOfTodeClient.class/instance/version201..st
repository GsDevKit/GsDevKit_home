versions
version201: spec
	<version: '2.0.1'>
	spec
		for: #(#'pharo3.x' #'pharo4.x')
		do: [ 
			spec blessing: #development.
			spec description: 'points at tode dev branch'.
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
				import: 'Tode' provides: #('Visualize');
				postLoadDoIt: #post30Load2x;
				yourself.
			spec
				group: 'default' with: #('Core');
				group: 'Core' with: #('GsDevKit-CommandLine');
				yourself ]