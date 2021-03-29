# GsDevKit Registry

This directory contains two sets of registries used by GsDevKit to keep track of the locations where source code, and stones are stored in the file system.

The registry is typically maintained automatically when using GsDevKit superdoit scripts to manage your stones and source code repos.

However, the registry can also be maintained manually if you know what you're doing. The following documentation provides the details you'll need to know to manage your registry.

If you write GsDevKit superdoit scripts, you may also want to interact with the registry. See the [Registry Classes](#registry-classes) that are available to superdoit scripts.

##### [Stones](docs/stones.md)
- [Why register stones?](docs/stones.md)
- [Registering stones](docs/stones.md)
- [Registering remote stones](docs/stones.md)

##### [Source Code](docs/sourceCode.md)
- [Why register source code locations?](docs/repos.md)
- [Registering source code locations](docs/repos.md)

##### [Registry File Formats](docs/fileFormats.md)
- [registry.ston](docs/fileFormats.md#registry.ston)
- [stone.context](docs/fileFormats.md#stone.context)

##### [Registry Classes](docs/classes.md)
- [GsDevKitRegistry](docs/classes.md#GsDevKitRegistry)
- [GsDevKitStoneRegistration](docs/classes.md#GsDevKitStoneRegistrationcontext)
- [GsDevKitRemoteStoneRegistration](docs/classes.md#GsDevKitRemoteStoneRegistration)
- [GsDevKitStoneRegistration](docs/classes.md#GsDevKitStoneRegistrationcontext)
- [GsDevKitSourceRepoRegistration](docs/classes.md#GsDevKitSourceRepoRegistration)
