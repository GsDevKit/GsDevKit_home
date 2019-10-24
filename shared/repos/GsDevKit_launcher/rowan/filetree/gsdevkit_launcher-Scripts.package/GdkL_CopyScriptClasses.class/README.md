Copy script classes back and forth between Tonel and FileTree formats.

	For the work on https://github.com/GsDevKit/GsDevKit_home issues_260 it is
	convenient/necessary to develop scripts using tODE which currently does not
	support reading/writing Tonel format. Of course in order to EXECUTE a tonel
	class file-based script, it must be in Tonel format. So this script will do
	the work of copying classes back and forth between Monticello FileTree
	packages and Rown Tonel packages.

	--list
		write the array of default script classes to objOut.

	--write=[filetree|tonel]
		When the script runs the both the filetree and tonel versions of the
		script classes are read from disk. If `filetree` is specified, the 
		filetree version of the script class will be written to the tonel 
		package (rowan/tonel/gsdevkit_launcher-Scripts). If `tonel` is 
		specified, the filetree version of the script class will be written
		to the filetree package (rowan/filetree/gsdevkit_launcher-Scripts).

		The list of processed class names is written to objOut.

	<script-class-names>
		List of script class names to be transferred from filetree to tonel
		or vice versa. If <script-class-names> is empty, the default list of
		script classes will be used.
