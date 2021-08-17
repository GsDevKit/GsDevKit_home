baseline
baseline: spec
  <baseline>
  spec
    for: #'common'
    do: [ 
      spec
        package: 'GsDevKit-Core';
        package: 'GsDevKit-Tests' with: [ spec requires: #('GsDevKit-Core') ].
      spec
        group: 'default' with: #('GsDevKitTests') ].
