baseline
baseline: spec
  ""

  <baseline>
  spec
    for: #'common'
    do: [ 
      spec
        package: 'GsDevKit-Core';
        package: 'GsDevKit-Tests' with: [ spec requires: #('GsDevKit-Core') ].
      spec group: 'default' with: #('GsDevKit-Tests') ].
  spec
    for: #'NeedsTDSessionDescription'
    do: [ 
      spec package: 'GsDevKit-TDSessionDescription'.
      spec group: 'default' with: #('GsDevKit-TDSessionDescription') ]