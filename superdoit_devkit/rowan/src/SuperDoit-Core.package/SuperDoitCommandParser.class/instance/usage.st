accessing
usage
	^ usage
		ifNil: [ 
			| stoneArgs stoneName |
			GsSession isSolo
				ifTrue: [ stoneName := stoneArgs := '' ]
				ifFalse: [ 
					stoneName := '-- gs_360'.
					stoneArgs := ' [-- [<stone-name> [<topaz-command-line-args>] ] ]' ].
			^ '-----
USAGE $basename [--help | -h] [--debug | -D]' , stoneArgs
				,
					'

OPTIONS
  -h, --help                 display usage message
  -D, --debug                bring up topaz debugger in the event of a script error

EXAMPLES
  $basename --help  ' , stoneName
				,
					'
  $basename -h      ' , stoneName
				,
					'
  $basename --debug ' , stoneName
				,
					'
  $basename -D      ' , stoneName
				,
					'
  $basename         ' , stoneName
				,
					'
-----
' ]