usage
usage: scriptName shortDescription: shortDescription description: description
  self stdout
    nextPutAll:
      (self manPageClass
        fromString:
          'NAME
	' , scriptName , ' - ' , shortDescription
            ,
              '.

SYNOPSIS
	' , scriptName
            ,
              ' [ [-H] [-D] [-V] [ <st-vm-args> ] -- ]  <script options>
----------
	'
            , (self usageSynopsis: scriptName)
            ,
              '

DESCRIPTION
	' , description
            ,
              '
' , self usageDescription
            ,
              '

	-H
		help. st_launcher script interpreter help message

	-D
		debug. bring up debugger if an error occurs while running script

	-V
		verbose. display more detail about script interpreter execution

	<st-vm-args>
		smalltalk vm specific arguments passed directly to vm when launching script

EXAMPLES
	'
            , (self usageStandardExamples: scriptName)
            , (self usageExamples: scriptName)
            ,
              '
')
        printString