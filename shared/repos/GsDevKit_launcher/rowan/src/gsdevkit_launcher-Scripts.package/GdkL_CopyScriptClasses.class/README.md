Copy script classes back and forth between Tonel and FileTree formats.

	For the work on https://github.com/GsDevKit/GsDevKit_home/issues/260 it is
	convenient/necessary to develop scripts using tODE which currently does not
	support reading/writing Tonel format. Of course in order to EXECUTE a tonel
	class file-based script, it must be in Tonel format. So this script will do
	the work of copying classes back and forth between Monticello FileTree
	packages and Rown Tonel packages.