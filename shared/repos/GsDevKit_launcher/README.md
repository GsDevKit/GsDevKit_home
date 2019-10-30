# GsDevKit_launcher
### Intro
This project implements a variant of the [st_launcher project][1].
The st_launcher project provides a mechanism for turning a Tonel class file[2] into an executable shell script.
The following is an example of a hello world gsdevkit_launcher smalltalk script:
``` smalltalk
#!/usr/bin/env gsdevkit_launcher
"
Hello world GsDevKit script
"
Class {
	#name : 'GsDevKitLauncher_Hello',
	#superclass : 'AbstractProgram',
	#category : 'gsdevKit_launcher-Scripts'
}

{ #category : 'main' }
GsDevKitLauncher_Hello >> main [

	^'hello world'
]
```
The scripts in gsdevkit_launcher project will be executed against a [GemStone 3.5.0 topaz solo extent][3].
Note that the shebang line: `#!/usr/bin/env gsdevkit_launcher` does a lookup of gsdevKit_launcher in your path.
The `gsdevkit_launcher` shell interpreter is in `$GS_HOME/alt_bin`, so `$GS_HOME/alt_bin` needs to be located in your path.

### Setup for development
```
cd $GS_HOME
git fetch --all

git checkout master
git pull origin master
updateGsDevKit -gdtcs

git checkout issue_260
git pull origin issue_260	# make sure you have latest commit in your checkout

# bootstrap gsdevkit_launcher script support
$GS_HOME/alt_bin/bootstrap_launcher

# add alt_bin and alt_bin/examples to your path
. alt_bin/defHOME_PATH.env

# test out the example scripts
hello.st
error.st
error.st -D --
```
#### tODE development image
The `bootstrap_launcher` script creates a [tODE image, that is ready for developing gsdevkit scripts][4].
The `GsdevKit_launcher` project has a BaselineOf and 3 packages.
The `gsdevkit_launcher-Scripts` package is where the filtree script packages can be found.
`/home/gsdevkit_launcher` in the tODE console is where a couple of utility tODE scripts are located. 
The `/home/gsdevkit_launcher/saveScripts`, script saves the `gsdevkit_launcher-Scripts` package copies the script classes to the tonel package, where the scripts are in a form that can be executed from a bash command line.

[1]: https://github.com/dalehenrich/st_launcher
[2]: https://github.com/pharo-vcs/tonel#tonel-spec
[3]: https://downloads.gemtalksystems.com/docs/GemStone64/3.5.x/GS64-ReleaseNotes-3.5/2-AdministrationChanges.htm#pgfId-1963111
[4]: ../../../docs/images/tode_gsdevkit_launcher_350.png
