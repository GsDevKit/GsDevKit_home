# GsDevKit Registry

This directory contains two sets of registries used by GsDevKit to keep track of the locations where source code, and stones are stored in the file system.

Registration files are stored in STON format and located in sub-directories of...
```
$GS_HOME/registry
```

## Source Code Repository Root

Source code repository roots are directories that contain source code for one or more projects.

Source code repository root registration files are located in the directory...

```
$GS_HOME/registry/sourceCode
```

`GsDevKitSourceRepositoryRootRegistration` maps a name to a root directory where source code will be stored.

**Source code repository roots** are directories containing one or more source code repositories. Everyone has their own preferences for managing source code for a project. Source code repository roots simply lets GsDevKit know where source should be read from, and written to for a particular project.

You could use source code repository roots to group versions of source code for a particular version of a project, for example.

### Using the source code repository root registry

To register a source code repository root use the command...
```
registerSourceCodeRepositoryRoot <name> <path>
```
For example...
```
registerSourceCodeRepositoryRoot MyProject_v1 /opt/src/project_v1
```
...will register a Source code repository root named *MyProject_v1* mapping to the directory at */opt/src/project_v1*

## Stones and Stone groups

Stone and Stone group registration files are located in the directory...

```
$GS_HOME/registry/stones
```

`GsDevKitStoneRegistration` maps a name to a directory in the file system where a stone managed by GsDevKit is stored.

`GsDevKitStoneGroupRegistration` maps a name to a collection of stones.

### Using the Stone and Stone group registry

```
registerStone <name> <path>
deregisterStone <name>
```

```
registerStoneGroup <name> <stoneName>[,<stoneName>]
deregisterStoneGroup <name>
```
