other
main
	| resultStream |

	resultStream := String new writeStream.
	self installedProductsReportOn: resultStream.

	^resultStream contents
