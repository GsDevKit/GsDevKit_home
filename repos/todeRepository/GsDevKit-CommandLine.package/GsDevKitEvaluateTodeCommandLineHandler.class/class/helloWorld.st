examples
helloWorld
	"self helloWorld"

	| handler |
	handler := self new stoneName: 'tode'.
	^ handler evaluate: 'eval `Transcript cr; show: ''hello world''`'