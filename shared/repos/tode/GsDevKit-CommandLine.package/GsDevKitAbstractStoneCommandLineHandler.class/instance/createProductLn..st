actions
createProductLn: stoneDirectory
	| gsProductName gsProductDir |
	gsProductName := self gsDownloadName.
	Transcript
		cr;
		tab;
		show: 'Creating product symbolic link to ' , gsProductName.
	gsProductDir := self productsHome / gsProductName.
	gsProductDir exists not
		ifTrue: [ self exitFailure: 'The specified product directory' , gsProductDir pathString , ' does not exist' ].
	OSProcess command: 'ln -sf ' , gsProductDir pathString , ' ' , (stoneDirectory / 'product') pathString