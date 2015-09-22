versions
version201_home: spec
	<version: '2.0.1-home'>
	spec
		for: #(#'pharo3.x' #'pharo4.x')
		do: [ 
			spec blessing: #development.
			spec description: 'This version is for use with GsDevKit_todeClient, part of GsDevKit_home'.
			spec repository: 'filetree://' , (Smalltalk os environment at: 'GS_SHARED_TODE_REPOSITORY') .
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
				postLoadDoIt: #post30Load2x_home;
				yourself.
			spec
				group: 'default' with: #('Core');
				group: 'Core' with: #('GsDevKit-CommandLine');
				yourself ]
