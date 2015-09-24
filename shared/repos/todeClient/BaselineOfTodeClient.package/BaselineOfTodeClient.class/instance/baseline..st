baseline
baseline: spec
	<baseline>
	spec
		for: #(#'pharo3.x' #'pharo4.x')
		do: [ 
			spec description: 'This version is for use with GsDevKit_gs_server image, part of GsDevKit_home'.
			spec
				baseline: 'Tode' with: [ 
                                  spec 
                                    loads: 'GemStone';
                                    repository: 'github://dalehenrich/tode:dev_dev/repository';
                                    yourself ];
				yourself.
			spec project: 'Tode-Common-Core' copyFrom: 'Tode' with: [ spec loads: 'Common-Core' ].
			spec
				package: 'GsDevKit-CommandLine' with: [ spec requires: #('OSProcess' 'Tode-Common-Core') ];
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
				group: 'Tode' with: #('GsDevKit-Tode-CommandLine');
				yourself ]
