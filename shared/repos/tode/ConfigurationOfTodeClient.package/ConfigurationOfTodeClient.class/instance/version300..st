versions
version300: spec
	<version: '3.0.0'>
	spec
		for: #(#'pharo3.x' #'pharo4.x')
		do: [ 
			spec blessing: #development.
			spec description: 'This version is for use with GsDevKit_gs_server image, part of GsDevKit_home'.
			spec repository: 'filetree://' , (Smalltalk os environment at: 'GS_SHARED_TODE_REPOSITORY').
			spec
				baseline: 'Tode' with: [ spec repository: 'github://dalehenrich/tode:dev_dev/repository' ];
				yourself.
			spec project: 'Tode-CommandLine' copyFrom: 'Tode' with: [ spec loads: 'Tode-CommandLine' ].
			spec
				package: 'GsDevKit-CommandLine' with: [ spec requires: #('OSProcess' 'Tode-CommandLine') ];
				configuration: 'OSProcess'
					with: [ 
							spec
								loads: 'Core';
								version: #stable;
								repository: 'http://smalltalkhub.com/mc/Pharo/MetaRepoForPharo30/main' ];
				package: 'GsDevKit-Tode-CommandLine' with: [ spec requires: #('GsDevKit-CommandLine' 'Tode') ];
				yourself.
			spec
				group: 'default' with: #('Core');
				group: 'Core' with: #('GsDevKit-CommandLine');
				group: 'Tode-Core' with: #('GsDevKit-Tode-CommandLine');
				yourself ]