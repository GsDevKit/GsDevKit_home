baseline
baseline: spec
	<baseline>
	spec
		for: #'common'
		do: [ 
			spec
				package: 'GsDevKit-Core';
				package: 'SuperDoit-Core';
				yourself.
			spec
				group: 'default' with: #('GsDevKit-Core');
				group: 'GsDevKit' with: #('GsDevKit-Core');
				group: 'SuperDoit' with: #('SuperDoit-Core');
				yourself ].
	spec
		for: #('gs3.6.x')
		do: [ 
			spec
				package: 'SuperDoit-GemStone-Kernel36x';
				yourself.
			spec
				group: 'GsDevKit' with: #('GsDevKit-Kernel36x');
				yourself ].
	spec
		for: #('gs3.6.x' 'gs3.7.x')
		do: [ 
			spec
				package: 'SuperDoit-GemStone-Kernel';
				yourself.
			spec
				group: 'GsDevKit' with: #('GsDevKit-Kernel');
				yourself ]