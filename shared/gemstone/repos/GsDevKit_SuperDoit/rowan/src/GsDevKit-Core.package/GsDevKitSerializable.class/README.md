GsDevKitStonSourcedObject represents an object that can be optionally read from and written to a file in STON format.

Instance Variables:

sourcePath - A String representing a path pointing to the directory containing the STON file, or to the STON file itself. If the path starts with '/' it is relative to the file system root, otherwise it is relative to GsDevKitRegistry-#gsDevKitRoot. If no file name is specified in the path, subclasses can provide a default file name.

sourceReference - A fully resolved FileReference to the STON file itself

modificationTime - A SmallDateAndTime indicating the last time the sourced object was modifyed in the image.