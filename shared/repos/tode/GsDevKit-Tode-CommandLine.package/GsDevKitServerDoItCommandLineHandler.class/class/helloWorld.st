examples
helloWorld
	"self helloWorld"

	| handler |
	handler := self new stoneName: 'tode'.
	^ handler evaluate: 'Transcript cr; show: ''hello world''. ''success'''