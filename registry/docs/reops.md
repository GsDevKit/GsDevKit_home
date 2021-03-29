# GsDevKit Source Repo Registry

Source code repositories are directories that contain source code for one or more projects.

The GsDevKit Source Repo Registry allows GsDevKit to know where you store your source code.

Everyone has their own preferences for managing source code for a project but typically we

- Share source code with multiple projects,
- Each project has several copies of source code representing different versions, or
- Anything in between

### Why register source repos?

Each project is associated with a single source code repo - the directory where that projects source code will be read from, and written to.

Registering a source code repo allows GsDevKit scripts and tools to find a directory containing source code based on its registry name. Rather than typing a full path to a source code repo, you can simply enter the registry name.

### Registering source repos

To register a source code repository use the command `registerSourceRepo`.
```
registerSourceRepo <registry-name> <path-to-source-repo>
```
For example...
```
registerSourceRepo MyProject_v1 /opt/src/project_v1
```
...will register a Source code repository named *MyProject_v1* mapping to the directory at */opt/src/project_v1*
