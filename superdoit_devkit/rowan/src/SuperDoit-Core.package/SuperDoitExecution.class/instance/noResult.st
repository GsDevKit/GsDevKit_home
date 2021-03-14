private
noResult
	"unique object to use a return value when no result should be written to stdout"

	^ _noResult ifNil: [ _noResult := Object new ]