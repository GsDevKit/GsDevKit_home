# GsDevKit Stones Registry

### Why register stones?

If you intend to use a stone with GsDevKit it needs to be registered. This allows GsDevKit to know about your stone and superdoit scripts to lookup and find your stone with little to no additional scripting.

When you create a stone using the GsDevKit `createStone` command, it is automatically registered.

When you delete a stone using the GsDevKit `deleteStone` command, it is automatically deregistered.

### Registering stones

If you copy a GsDevKit stone to a new machine also running GsDevKit, you will need to manually register it.

```
registerStone <registry-name> <path-to-stone>
```
This will create a registry entry named `<registry-name>` mapping to the stone in the `<path-to-stone-root>` directory.

Before creating the registry entry, registerStone will lookup the stone.context file located on the path `<path-to-stone>/stone.context`

If the file is missing, the registerStone command will display an error.

If there is already a registration that maps to `<path-to-stone-root>`, no changes will be made and an error will be displayed.  You can use `--replace` argument to replace an existing entry with the same name or path with the one provided.

To remove a stone registry entry use the command `deregisterStone`
```
deregisterStone <stone-name>
```
This will remove the registry entry for the stone named `<stone-name>`

### Registering remote stones

You may want GsDevKit scripts and tools to connect to stones on remote hosts.

To register a remote stone... (more thought needed) copy the stone.context file from the remote stone to a directory on your local machine, then edit it and update the #stoneHost, #gemHost, osUser, and osPassword values to allow connection to the remote stone.

Then register the remote stone using the command registerRemoteStone
```
registerRemoteStone <registry-name> <path-containing-stone-context>
```





### Registering stone groups

```
registerStoneGroup <name> <stoneName>[,<stoneName>]
```
This will register a group named `<name>` containing the stones named in  `<stoneName>[,<stoneName>]`

If any of the stones named are not already registered, no changes will be made and an error will let you know which stones can not be added to the group.

```
deregisterStoneGroup <name>
```
This will remove the registration for the group named `<name>`.
