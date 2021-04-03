baseline
baseline: spec
  <baseline>
  spec
    for: #'common'
    do: [ 
      spec
        package: 'GsDevKit-Core';
        package: 'GsDevKit-Tests' with: [ spec requires: #('GsDevKit-Core') ];
        package: 'SuperDoit-Core'.
      spec
        group: 'default' with: #('GsDevKitTests');
        group: 'GsDevKit' with: #('GsDevKit-Core');
        group: 'GsDevKitTests' with: #('GsDevKit-Tests');
        group: 'SuperDoit' with: #('SuperDoit-Core') ].
  spec
    for: #'gs3.6.x'
    do: [ 
      spec package: 'SuperDoit-GemStone-Kernel36x'.
      spec group: 'GsDevKit' with: #('GsDevKit-Kernel36x') ].
  spec
    for: #(#'gs3.6.x' #'gs3.7.x')
    do: [ 
      spec package: 'SuperDoit-GemStone-Kernel'.
      spec group: 'GsDevKit' with: #('GsDevKit-Kernel') ]