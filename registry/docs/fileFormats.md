# GsDevKit Registry File Formats

All registry files are stored in STON format. STON is a superset of json supporting Smalltalk.

Files used by the registry are created and updated using GsDevKit superdoit scripts, so you don't typically need to know anything about them.

You can also edit the files directly, with a few caveats:

- If the registry file you are editing is already in use by a GsDevKit editor or script, it may be overwritten and your changes will be lost.


### registry.ston

The GsDevKitRegistry class is part of the GsDevKit-Core package that is available to superdoit scripts.

The registry file is located in `$GS_HOME/registry/registry.ston`


### stone.context

The GsDevKitStoneContext class is part of the GsDevKit-Core package that is available to superdoit scripts.

The stone.context file is located in the root of your stone directory..
