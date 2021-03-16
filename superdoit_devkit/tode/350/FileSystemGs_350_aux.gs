method: SequenceableCollection
writeStreamPortable

	^ WriteStreamPortable on: self
%
method: SequenceableCollection
sort
  "private for tonel support"
  "Sort this array into ascending order using the '<=' operator."

  ^ self sortWithBlock: [ :a :b | a <= b ]
%
method: Collection
sort

	"Sort this array into ascending order using the '<=' operator."

	^ self sort: [ :a :b | a <= b ]
%
method: Collection
sort: aSortBlock

	"Sort this array using aSortBlock. The block should take two arguments
	and return true if the first element should preceed the second one."

	^ self sortWithBlock: aSortBlock
%
run
DiskStore currentFileSystem
%
commit
