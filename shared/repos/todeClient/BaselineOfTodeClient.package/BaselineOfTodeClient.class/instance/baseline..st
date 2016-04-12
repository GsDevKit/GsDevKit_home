baseline
baseline: spec
	<baseline>
	spec
		for: #(#'pharo3.x' #'pharo4.x')
		do: [ 
			spec description: 'This version is for use with GsDevKit_gs_server image, part of GsDevKit_home'.
			spec postLoadDoIt: #disableTodeSystemMenu.
			spec
				baseline: 'Tode'
					with: [ 
							spec
								loads: 'GemStone';
								repository: 'github://dalehenrich/tode:master/repository';
								yourself ];
				baseline: 'SmalltalkCI'
					with: [ 
							spec
								repository: 'github://hpi-swa/smalltalkCI:master/repository';
								yourself ];
				yourself.
			spec project: 'Tode Common' copyFrom: 'Tode' with: [ spec loads: 'Common-Core' ].
			spec
				package: 'GsDevKit-CommandLine' with: [ spec requires: #('OSProcess' 'Tode Common') ];
				configuration: 'OSProcess'
					with: [ 
							spec
								loads: 'Core';
								version: #stable;
								repository: 'http://smalltalkhub.com/mc/Pharo/MetaRepoForPharo30/main' ];
				package: 'GsDevKit-Tode-CommandLine' with: [ spec requires: #('GsDevKit-CommandLine' 'Tode') ];
				package: 'GsDevKit-SmalltalkCI-CommandLine' with: [ spec requires: #('GsDevKit-Tode-CommandLine' 'SmalltalkCI') ];
				yourself.
			spec
				group: 'default' with: #('CommandLine');
				group: 'CommandLine' with: #('GsDevKit-CommandLine');
				group: 'Tode-CommandLine' with: #('GsDevKit-Tode-CommandLine');
				group: 'SmalltalkCI-CommandLine' with: #('GsDevKit-SmalltalkCI-CommandLine');
				yourself ]