in a 3.5.x stone with tODE loaded
```
set u SystemUser p swordfish
login
input FileSystemGs_350.gs
input FileSystemGs_350_aux.gs
commit
logout
```
`FileSystemGs_350.gs` was created by running:
```
util/./createFileSystemGsTopaz.doit --import=file:$GS_HOME/shared/repos/Rowan/platforms/gemstone/projects/FileSystemGs/rowan/specsV2/FileSystemGs.ston --version=3.5.0
```
against a Rowan close on branch masterV2.1
