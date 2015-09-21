versions
version200: spec
	<version: '2.0.0'>
	spec
		for: #(#'pharo3.x' #'pharo4.x')
		do: [ 
			spec blessing: #release.
			spec description: 'Changes in support of https://github.com/GsDevKit/gsDevKitHome/issues/32'.
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
								repository: 'github://dalehenrich/tode:v0.?/repository' ];
				import: 'Tode' provides: #('Visualize');
				postLoadDoIt: #post30Load2x;
				yourself.
			spec
				group: 'default' with: #('Core');
				group: 'Core' with: #('GsDevKit-CommandLine');
				yourself ]