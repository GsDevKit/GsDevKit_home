baseline
baseline: spec
  <baseline>
  spec
    for: #'gemstone'
    do: [ 
      spec
        package: 'gsdevkit_launcher-Core';
        package: 'gsdevkit_launcher-Scripts'
          with: [ spec requires: 'gsdevkit_launcher-Core' ];
        package: 'gsdevkit_launcher-Program-Rowan'
          with: [ spec requires: 'gsdevkit_launcher-Core' ];
        yourself.
      spec
        group: 'default' with: #('Core');
        group: 'Core' with: #('gsdevkit_launcher-Program-Rowan');
        group: 'Scripts' with: #('gsdevkit_launcher-Scripts');
        group: 'Tests' with: #();
        yourself ]