## The tODE shell

One of the most important advantages of using the tODE development environment is the command line tODE shell.  This allows you to execute existing  commands and create your own commands, execute Smalltalk expressions and return results, work with objects and classes, and create multi-line scripts for later use.  The tODE shell acts like a Smalltalk workspace, but can accept and return arguments.

![The tODE shell][1]

The tODE shell has similarities both to the bash shell and to the GemStone topaz command line environment. 

* The tODE shell uses bash posix syntax with a few exceptions: the back tick ` is used, rather than double or single quotes " or ', to escape lines of text that includes spaces.  
* The tODE shell is object-in and object-out; as bash accepts input from stdin, and send output to stdout, the tODE shell accepts objects in, and returns objects.  
*  The initial token in each tODE shell expression is a command, which may be followed by subcommands or arguments.  All the tODE menu items are available to execute as tODE commands.
* shell variables are not yet supported

### Commands

tODE command words are registered in a lookup dictionary, which will return an instance of a Class; subcommands and options are translated to methods and arguments.  You may create your own commands as well.  

tODE commands include operations such as **man** and **project**, which are starting points for working with, respectively man page documentation and projects; each of these have many subcommands.  

To execute Smalltalk code, use the eval command.  

For example:

![tode single line eval][2]

![tode man eval][3]

#### Combining commands

The tODE expressions above return an object to the command line, as well as performing the operations.  
For `man eval`, for example, the man page is opened, but a value is also returned (the first part of the String containing the man information). You may use this to chain commands.  For example:

![tode multi line eval][4]

Commands are broken up by newlines, as in these examples, or by the | or ; characters.  So the above is the same as:

![tode chain eval][5]


[1]: images/todeShell.jpg
[2]: images/todeManEval.jpg
[3]: images/todeSingleEval.jpg
[4]: images/todeMultiEval.jpg
[5]: images/todeChainEval.jpg

