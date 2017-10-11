## Projects in tODE

Using tODE, you will be working with code in projects.  To get started, open a *Project List Browser* using the `project list` tODE command:

![project list][3]

The typeface in the project list has the following meanings:

*  italic/underlined means the project is installed; the project is present on the local disk and registered in the image, but the code is not loaded.
*  bold means loaded and the project has been marked active. Active projects are sorted to the beginning of the list.
*  normal font means the project is loaded, but not marked active.  Loaded means the Smalltalk code was filed into the Stone.
*  Asterisk * means the package is dirty in the image; the project has one or more modified packages.
*  Plus + means dirty disk for git
*  Bar | means the project is locked

You may load an existing project, such as seaside, or create a new project based on an existing Metacello project.  

## Loading an existing project

To load an existing project, for example the Seaside project, first install it.  At the tODE shell prompt, execute:

```
project install --url=http://gsdevkit.github.io/GsDevKit_home/Seaside3.ston
```

Then load the project.  You can do this using the project list menu item **load**, or execute the following:

```
project load Seaside3
```


## Creating a New Project

For a project in tODE, you need a package for managing your source code (classes and extension methods), a *BaselineOf* for specifying the load order of packages and project dependencies, a git repository to manage versions of your source code on disk, and a project entry for specifying how you want tODE to treat your project.
The `project new` command can be used to create all of these artifacts.

For example when you run the following command:

```
project new --class Foo
```

You are prompted for the attributes of a new class (by default named *Foo*):

```
Object subclass: 'Foo'
  instVarNames: #()
  classVars: #()
  classInstVars: #()
  poolDictionaries: #()
  inDictionary: ''
  category: 'Foo-Core'
```

The *Foo-Core* package is created and the *Foo* class is added to the package.
The *BaselineOfFoo* is created with the following specification:

```Smalltalk
baseline: spec
  <baseline>
  spec for: #'common' do: [ spec package: 'Foo-Core' ]
```

For a bit more information on working with the *BaselineOf*, read the [Create Baseline][40] in the [Getting Started with GitHub document][41].
The *BaselineOfFoo* package is created for storing the *BaselineOf* on disk.

The directory `$GS_HOME/shared/repos/Foo` directory is created, a git repository is created in the directory and the *BaselineOfFoo* and *Foo-Core* packages are saved in the git repository.

Finally a *project entry* is created:

```Smalltalk
^ TDProjectSpecEntryDefinition new
    baseline: 'Foo'
      repository: 'filetree://$GS_HOME/shared/repos/Foo/repository'
      loads: #('default');
    status: #( #'active' );
    locked: true;
    yourself
```

and saved in the directory `$GS_HOME/sys/local/server/projects` as Foo.ston.

Now is a good time make some modifications to your application class, update the `project list` command and play with some of the `project list` menu items:

![Foo project list][42]


---
[**FEEDBACK**](https://github.com/GsDevKit/GsDevKit_home/issues/new)
---


[1]: images/openTodeShell.png
[2]: images/todeClient.png
[3]: images/projectList.png
[4]: images/testLoginOutput.png
[5]: images/todeResizeMenu.png
[6]: images/todeMan.png


[40]: https://github.com/dalehenrich/metacello-work/blob/master/docs/GettingStartedWithGitHub.md#create-baseline
[41]: https://github.com/dalehenrich/metacello-work/blob/master/docs/GettingStartedWithGitHub.md#getting-started-with-github
[42]: images/todeFooProjectList.png
