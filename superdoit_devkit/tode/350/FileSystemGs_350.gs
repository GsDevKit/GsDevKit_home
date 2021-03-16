! FileSysteGs fileout for FileSystemGs [dfef7ec6] 2021-03-16T13:40:44.689132-07:00
! Class Declarations
! Generated file, do not Edit

doit
(ByteArray
	subclass: 'UUID'
	instVarNames: #(  )
	classVars: #( GeneratorClass )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Network-UUID';
		immediateInvariant.
true.
%

doit
(Error
	subclass: 'FileException'
	instVarNames: #( fileName )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Files';
		comment: 'Common superclass for exceptions while using file streams';
		immediateInvariant.
true.
%

doit
(FileException
	subclass: 'CannotDeleteFileException'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Files';
		comment: 'Notfify when not able to delete';
		immediateInvariant.
true.
%

doit
(FileException
	subclass: 'FileAlreadyExistsException'
	instVarNames: #( file )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Files';
		comment: 'I am an exception that notifies that a file already exists.';
		immediateInvariant.
true.
%

doit
(FileException
	subclass: 'FileDoesNotExistException'
	instVarNames: #( readOnly )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Files';
		comment: 'I am raised when an operation is attempted on a file that does not exist.

The method used to signal the exception depends on the form the file name exists in:

- For strings: (FileDoesNotExistException file fileName: aString) signal 
- For Files: FileDoesNotExistException signalOnFile: aFile
- For FileReferences: FileDoesNotExistException signalWith: aFileReference


Applications that want to offer the user the opportunity to select a different file can use:

	UIManager default fileDoesNotExistsDefaultAction: exception
';
		immediateInvariant.
true.
%

doit
(FileException
	subclass: 'FileWriteError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Files';
		comment: 'Notify about an error when trying to attempt to write to a file';
		immediateInvariant.
true.
%

doit
(Error
	subclass: 'FileSystemError'
	instVarNames: #( reference )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am an abstract superclass for errors that may occur during filesystem operations.';
		immediateInvariant.
true.
%

doit
(FileSystemError
	subclass: 'DirectoryDoesNotExist'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am raised when I an operation is attempted inside a directory that does not exist. ';
		immediateInvariant.
true.
%

doit
(FileSystemError
	subclass: 'DirectoryExists'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am raised on an attempt to create a directory that already exists.';
		immediateInvariant.
true.
%

doit
(FileSystemError
	subclass: 'DirectoryIsNotEmpty'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am raised on an attempt to delete a directory when is not empty.';
		immediateInvariant.
true.
%

doit
(FileSystemError
	subclass: 'FileExists'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am raised on an attempt to create a file or directory over top of an existing file.';
		immediateInvariant.
true.
%

doit
(FileSystemError
	subclass: 'IllegalName'
	instVarNames: #( name )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am raised on an attempt to use an illegal file name
';
		immediateInvariant.
true.
%

doit
(Error
	subclass: 'ZnCharacterEncodingError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Core';
		comment: 'I am ZnCharacterEncodingError.
I am an Error.

I signal when something goes wrong while encoding or decoding characters.

Part of Zinc HTTP Components';
		immediateInvariant.
true.
%

doit
(Notification
	subclass: 'ResolutionRequest'
	instVarNames: #( origin )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I represent a request for user assistance in resolving an origin. I am a resumable exception that gets raised when there is no way of automatically resolving a particular origin. ';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'AbstractFileReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am an abstract superclass for FileLocator and FileReference. By implementing most of the methods on myself most code duplucation between the locator and the reference can be avoided';
		immediateInvariant.
true.
%

doit
(AbstractFileReference
	subclass: 'FileLocator'
	instVarNames: #( origin path )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am a late-bound reference. I refer to a file or directory in relation to a well-known location on the filesystem, called an origin. When asked to perform concrete operation, I look up the current location of my origin, and resolve my path against it. 

Usage
----------
FileLocator vmDirectory parent pathString
	> ''/Applications''


FileLocator desktop.
FileLocator desktop basename.

FileLocator home basename.
FileLocator image.
FileLocator vmBinary asAbsolute pathString 
	>  ''/Applications/CogVM.app/Contents/MacOS/CogVM''
FileLocator vmBinary pathString 
	> ''/Applications/CogVM.app/Contents/MacOS/CogVM''
		




Implementation
------------------------
origin 
	A symbolic name for base reference I use to resolve myself.

path
	A relative path that is resolved against my origin"
	
	';
		immediateInvariant.
true.
%

doit
(AbstractFileReference
	subclass: 'FileReference'
	instVarNames: #( filesystem path )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I combine a filesystem and path, which is sufficient to refer to a concrete file or directory. I provide methods for navigating my filesystem, performing filesystem operations and opening and closing files.  I am the primary mechanism for working with files and directories. 

| working |
working := FileSystem disk workingDirectory.
working files 

| disk |
disk := FileSystem disk.
disk root.                               	"a reference to the root directory"
disk working.                         	"a reference to the working directory"';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'FastUUIDGenerator'
	instVarNames: #( bits1 bits2 bits3 bits4 random semaphoreForGenerator )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Network-UUID';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'File'
	instVarNames: #( name )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Files';
		comment: 'I represent a sequential binary File. I provide the minimum operations to:

- move the cursor fo the file
- reading
- writing

I am also the entry point of the FilePlugin primitives.

!Examples of usage

"Creating a file"
file := File named: ''asd.txt'' asFileReference fullName.

"Opening / closing it"
file open.
file openForAppend.
file close.

"Accessing the file properties"
file size.
file position.
file position: 0.
file seekAbsolute: 10.
file seekRelative: 10.
file atEnd.

"Writing"
file nextPutAll: ''sdd''.

"Reading"
file next: 2.

"Buffered write"
file next: 2 putAll: ''abc'' startingAt: 2.

"Buffered read"
buffer := ByteArray new: 5.
file readInto: buffer startingAt: 1 count: 5.
buffer asString.';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'FileSystem'
	instVarNames: #( store )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I present a low-level protocol for interacting with filesystems. I hold a reference to
a store (a subinstance of FileSystemStore) which takes care of the details of performing 
file and directory operations on the filesystem I represent. 

I am responsible for resolving all paths that
I pass into my store. My store acts as a factory and offers platform specific actions.


FileSystem instances know two methods that return a Reference object: workingDirectory and root.

FileSystem disk workingDirectory
FileSystem disk root

';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'FileSystemDirectoryEntry'
	instVarNames: #( reference creation modification isDirectory isSymlink size posixPermissions )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am a cache for metadata about a file or directory. The information I hold is as follows:

reference
	A reference to the file or directory to which my data pertains.
	
creation
	The creation date and time, stored as number seconds since the 
	Smalltalk epoch.
	
modification
	The modification date and time, number seconds since the Smalltalk epoch.
	
isDirectory 
	True if my data pertains to a directory, false if a file.
	
size
	Size in bytes for a file, 0 for a directory.
';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'FileSystemGuide'
	instVarNames: #( visitor work selectChildren )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am an abstract superclass for objects that fulfill the Guide role in the Guide/Visitor pattern. My subclasses know how to traverse a filesystem in a specific order, "showing" the files and directories they encounter to a visitor.

visitor
	An object that fulfills the Visitor role and implements the visitor protocol.
	
work
	An OrderedCollection, used to keep track of filesystem nodes that have not yet been visited';
		immediateInvariant.
true.
%

doit
(FileSystemGuide
	subclass: 'BreadthFirstGuide'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I traverse the filesystem in breadth-first order. Given this hierarchy:

alpha
	beta
	gamma
delta
	epsilon

I would visit the nodes in the following order:  alpha, delta, beta, gamma, epsilon.

I use my work instance variable as a queue, adding nodes to be visited to the end and retrieving them from the beginning.
';
		immediateInvariant.
true.
%

doit
(FileSystemGuide
	subclass: 'PostorderGuide'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I traverse the filesystem in depth-first post order. Given this hierarchy:

alpha
	beta
	gamma
delta
	epsilon

I would visit the nodes in the following order:  beta, gamma, alpha, epsilon, delta.

I use my work instance variable as a stack. I push messages that cause nodes to be traversed or visited, and execute them in reverse order.';
		immediateInvariant.
true.
%

doit
(FileSystemGuide
	subclass: 'PreorderGuide'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I traverse the filesystem in depth-first pre order. Given this hierarchy:

alpha
	beta
	gamma
delta
	epsilon

I would visit the nodes in the following order: alpha, beta, gamma, delta, epsilon.

I use my work instance variable as a stack. I push nodes to be visited and visit them in reverse order.';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'FileSystemHandle'
	instVarNames: #( reference writable )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am an abstract superclass for file handle implementations. I provide a uniform interface that streams can use for read and write operations on a file regardless of the filesystem. I encapsulate the actual IO primitives.';
		immediateInvariant.
true.
%

doit
(FileSystemHandle
	subclass: 'FileHandle'
	instVarNames: #( id )
	classVars: #( Registry )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Disk';
		comment: 'I provide an interface for doing IO on an open file. I keep an id, which as an opaque identifier used by the FilePlugin primitives. I translate positions from the 1-based indexes used in Smalltalk to the 0-based offsets used by the primitives.

I implement the primitives on my class side.';
		immediateInvariant.
true.
%

doit
(FileSystemHandle
	subclass: 'MemoryHandle'
	instVarNames: #( entry )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Memory';
		comment: 'I provide "primitives" for doing IO on files in a MemoryFileSystem. I delegate most of my actions to the MemoryFile. This way there is only one place needed where the data is stored.';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'FileSystemPermission'
	instVarNames: #( posixPermission )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I''m a set of permissions for a Directory Entry';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'FileSystemResolver'
	instVarNames: #( next )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am an abstract superclass for objects that can resolve origins into references. Such objects use the Chain of Responsibility pattern, and when unable to resolve a particular origin, delegate that resolution request to the next resolver in the list.

next
	The next resolver in the list, or nil
';
		immediateInvariant.
true.
%

doit
(FileSystemResolver
	subclass: 'InteractiveResolver'
	instVarNames: #( cache )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I resolve origins by consulting the user. I maintain a cache of the user''s responses.';
		immediateInvariant.
true.
%

doit
(FileSystemResolver
	subclass: 'PlatformResolver'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am an abstract superclass for platform-specific resolvers.';
		immediateInvariant.
true.
%

doit
(PlatformResolver
	subclass: 'MacOSResolver'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am an expert on Mac OS X filesystem conventions. I resolve origins according to these conventions.';
		immediateInvariant.
true.
%

doit
(PlatformResolver
	subclass: 'UnixResolver'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am an expert on Unix filesystem conventions. I resolve origins according to these conventions.';
		immediateInvariant.
true.
%

doit
(PlatformResolver
	subclass: 'WindowsResolver'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am an expert on Windows filesystem conventions. I resolve origins according to these conventions.';
		immediateInvariant.
true.
%

doit
(FileSystemResolver
	subclass: 'SystemResolver'
	instVarNames: #(  )
	classVars: #( UserLocalDirectory )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I resolve origins that are related to the currently running Smalltalk system, using primitives provided by the VM. ';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'FileSystemStore'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am an abstract superclass for store implementations. My subclasses provide access to the actual data storage of a particular kind of filesystem. 

The file system can be accessed via
	FileSystem disk 
	FileSystem memory
	
My associated filesystem can be accessed as follows:
      DiskStore currentFileSystem';
		immediateInvariant.
true.
%

doit
(FileSystemStore
	subclass: 'DiskStore'
	instVarNames: #( maxFileNameLength )
	classVars: #( CurrentFS DefaultWorkingDirectory )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Disk';
		comment: 'I am an abstract superclass for disk store implementations. My subclasses provide access to the actual data storage of a particular kind of filesystem. 
';
		immediateInvariant.
true.
%

doit
(DiskStore
	subclass: 'UnixStore'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Disk';
		comment: 'I''m a specific store for Unix file systems';
		immediateInvariant.
true.
%

doit
(UnixStore
	subclass: 'MacStore'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Disk';
		comment: 'I''m a specific store for OSX file systems';
		immediateInvariant.
true.
%

doit
(DiskStore
	subclass: 'WindowsStore'
	instVarNames: #( disk )
	classVars: #( Disks )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Disk';
		comment: 'I''m a specific store for Windows file systems';
		immediateInvariant.
true.
%

doit
(FileSystemStore
	subclass: 'MemoryStore'
	instVarNames: #( root )
	classVars: #( CurrentFS )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Memory';
		comment: 'I''m a specific store for memory file system';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'FileSystemVisitor'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am an abstract superclass for objects that can perform operations on directory trees. My subclasses implement the visitor protocol, and process filesystem nodes shown to them by guides.';
		immediateInvariant.
true.
%

doit
(FileSystemVisitor
	subclass: 'AbstractEnumerationVisitor'
	instVarNames: #( out block )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I''m an abstract superclass for enumeration operations on directory entries. ';
		immediateInvariant.
true.
%

doit
(AbstractEnumerationVisitor
	subclass: 'CollectVisitor'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am a visitor that collects objects from the nodes I visit. I take a block similar to those passed to Collection>>collect:. I evaluate the block with DirectoryEntries for the nodes I visit, and collect the objects answered into an array.

I can use any guide, and the objects in the array I produce will reflect the order imposed by the guide.';
		immediateInvariant.
true.
%

doit
(AbstractEnumerationVisitor
	subclass: 'SelectVisitor'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I am a visitor that selects objects from the nodes I visit. I take a block similar to those passed to Collection>>select:. I evaluate the block with DirectoryEntries for the nodes I visit.

I can use any guide, and the objects in the array I produce will reflect the order imposed by the guide.';
		immediateInvariant.
true.
%

doit
(FileSystemVisitor
	subclass: 'CopyVisitor'
	instVarNames: #( source dest )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I create a copy of the directory tree that I visit. I use the PreorderGuide so that I can create directories before creating their contents. ';
		immediateInvariant.
true.
%

doit
(FileSystemVisitor
	subclass: 'DeleteVisitor'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Core';
		comment: 'I delete the directory tree that I visit. I use the PostorderGuide so that I can delete files before deleting their containing directories.';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MemoryFileSystemEntry'
	instVarNames: #( creationTime modificationTime basename )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Memory';
		comment: 'I am an abstract file system entry for a memory file system.
My subclasses should specialize on the kind of file they are.';
		immediateInvariant.
true.
%

doit
(MemoryFileSystemEntry
	subclass: 'MemoryFileSystemDirectory'
	instVarNames: #( entries )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Memory';
		comment: 'I represent a memory file system entry for a directory';
		immediateInvariant.
true.
%

doit
(MemoryFileSystemEntry
	subclass: 'MemoryFileSystemFile'
	instVarNames: #( bytes size closed )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Memory';
		comment: 'I represent a memory file system entry for a regular file';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MemoryFileWriteStream'
	instVarNames: #( file writeStream stream )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Memory';
		comment: 'A file write stream - but within memory';
		immediateInvariant.
true.
%

doit
(Object
	indexableSubclass: 'Path'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Path';
		comment: 'I''m a private and abstract filesystem path, independent of the string representation used to describe paths on a specific filesystem. I provide methods for navigating the filesystem hierarchy and working with absolute and relative paths. I only refer to a concrete file or directory with regard to a specific filesystem. Normally users should not use me directly. 

API instance creation:

- #from: parses the supplied string using the default delimeter
- #from:delimiter: parses the supplied string using the supplied delimiter.
- #/ creates an absolute path from the supplied string
- #* creates a relative path from the supplied string

API path manipulation:

- #/ adds the supplied string to the receiver
';
		immediateInvariant.
true.
%

doit
(Path
	subclass: 'AbsolutePath'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Path';
		comment: 'I represent an absolute path (a position starting from Path root)';
		immediateInvariant.
true.
%

doit
(Path
	subclass: 'RelativePath'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Path';
		comment: 'I represent a relative path (a position starting from Path workingDirectory)';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'ZnBufferedReadStream'
	instVarNames: #( stream buffer position limit )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Core';
		comment: 'I am ZnBufferedReadStream.

I wrap another ReadStream and add efficient buffering for the typical access pattern of parsers: sending lots of #next, #peek and #atEnd messages.

By design I do not implement #position and #position: or anything based on that.

I can wrap both binary or character streams and act accordingly.

Part of Zinc HTTP Components.';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'ZnBufferedReadWriteStream'
	instVarNames: #( readStream writeStream lastRead )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Core';
		comment: 'I am ZnBufferedReadWriteStream.
I wrap a buffered read stream and a buffered write stream on the same file.

I discard my read buffer on writes, and flush my write buffer on reads.
Make sure to always send me #flush or #close when you''re done,
otherwise the last buffer might not yet have been written.
My class side''s #on:do: helps to ensure this.

I can wrap both binary or character streams and act accordingly.

Part of Zinc HTTP Components.';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'ZnBufferedWriteStream'
	instVarNames: #( stream buffer position )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Core';
		comment: 'I am ZnBufferedWriteStream.
I wrap a write stream and add buffering.

Make sure to always send me #flush or #close when you''re done,
otherwise the last buffer might not yet have been written.
My class side''s #on:do: helps to ensure this.

I can wrap both binary or character streams and act accordingly.

Part of Zinc HTTP Components.';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'ZnCharacterEncoder'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Core';
		comment: 'I am ZnCharacterEncoder, I encode and decode Character objects to and from a binary stream.
I am an abstract class with following protocol:

#nextFromStream:
#nextPut:toStream:
#encodedByteCountFor:
#backOnStream:

The first two are compatible with TextConverter and subclasses.

I add some convenience methods:

#encodeString:
#decodeBytes:
#encodedByteCountForString:

Contrary to older encoders, I work strictly from strings to bytes and vice versa and I will throw errors instead of silently ignoring them.

I also implement optimized bulk operations:

#next:putAll:startingAt:toStream:
#readInto:startingAt:count:fromStream:

Additionally, I can encode Integer code points to a binary stream as well as read Integer code points from a binary stream. This is in a sense a more fundamental operation that avoids instanciating Character objects.

#nextCodePointFromStream:
#nextPutCodePoint:toStream:
#encodedByteCountForCodePoint:

#decodeAsCodePoints:
#encodeCodePoints:
#encodedByteCountForCodePoints:

Part of Zinc HTTP Components.';
		immediateInvariant.
true.
%

doit
(ZnCharacterEncoder
	subclass: 'ZnUTF8Encoder'
	instVarNames: #(  )
	classVars: #( Default )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Core';
		comment: 'I am the GemStone/S implementation of ZnUTF8Encoder.
I implement the variable length UTF-8 encoding and decoding of Unicode according to RFC 3629.

Wikipedia reference http://en.wikipedia.org/wiki/UTF-8

Part of Zinc HTTP Components.

I use the ICU library to encode strings and decode ByteArray and Utf8 instances ... ';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'ZnCharacterReadWriteStream'
	instVarNames: #( readStream writeStream )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Core';
		comment: 'I am a read-write character stream. I am mainly used to open the Pharo source and changes files.';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'ZnEncodedStream'
	instVarNames: #( stream encoder )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Core';
		comment: 'I am ZnEncodedStream, an abstract support class for read and write streams on an encoded binary stream.

Part of Zinc HTTP Components';
		immediateInvariant.
true.
%

doit
(ZnEncodedStream
	subclass: 'ZnEncodedReadStream'
	instVarNames: #( peeked )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Core';
		comment: 'I am ZnEncodedReadStream, an abstract support class for read streams on a binary encoded wrapped stream.

Part of Zinc HTTP Components';
		immediateInvariant.
true.
%

doit
(ZnEncodedReadStream
	subclass: 'ZnCharacterReadStream'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Core';
		comment: 'I am ZnCharacterReadStream.
I wrap another binary ReadStream and use a ZnCharacerEncoder to allow Characters to be read.

I am not positionable, but I do allow a one character peek using a one character internal buffer.

Part of Zinc HTTP Components.
';
		immediateInvariant.
true.
%

doit
(ZnEncodedStream
	subclass: 'ZnEncodedWriteStream'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Core';
		comment: 'I am ZnEncodedWriteStream, an abstract support class for write streams on a binary encoded wrapped stream.

Part of Zinc HTTP Components';
		immediateInvariant.
true.
%

doit
(ZnEncodedWriteStream
	subclass: 'ZnCharacterWriteStream'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Core';
		comment: 'I am ZnCharacterWriteStream.
I wrap another binary WriteStream and use a ZnCharacerEncoder to allow Characters to be written.

Part of Zinc HTTP Components.';
		immediateInvariant.
true.
%

doit
(Stream
	subclass: 'AbstractBinaryFileStream'
	instVarNames: #( file handle forWrite )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Files';
		comment: 'Provides a simple, platform-independent, file stream. I am 
   - binary
   - not buffered
   - provide no encoding/conversions

!Examples of usage

"Creating a file"
stream := (File named: ''asd.txt'' asFileReference fullName) readStream.

"Accessing the stream properties"
stream position.
stream atEnd.

"Writing"
stream nextPut: 17.
stream nextPutAll: ''sdd''.

"Reading"
stream next.
stream next: 2.

"Skipping"
stream skip: 2. 

"reading up to something"
stream upTo: 23.
stream upToAnyOf: #[ 13 30 ].

"peeking"
stream peek.';
		immediateInvariant.
true.
%

doit
(AbstractBinaryFileStream
	subclass: 'BinaryFileStream'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Files';
		comment: 'I am a concrete subclass of AbstractBinaryFileStream for normal files. Regardless the position of the file, I will make my operarions on my position and then return the file it''s own position.

In addition to my superclass'' API I provide the following methods.

stream upToEnd
"reads the full stream up to the end and returns the contents"';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'AbstractUUIDTest'
	instVarNames: #( currentUuidGeneratorClass )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Network-UUID-Tests';
		immediateInvariant.
true.
%

doit
(AbstractUUIDTest
	subclass: 'FastUUIDTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Network-UUID-Tests';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'DirectoryEntryTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for FileSystemDirectoryEntry';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'FileLocatorTest'
	instVarNames: #( locator )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit test for FileLocator';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'FileReferenceAttributeTests'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Attributes';
		comment: 'Try and test file attribute access from FileReference.

As Pharo doesn''t provide a mechanism to set the attributes, pick a few well known files and make sure they have reasonable attributes, e.g. the VM is executable, it isn''t older than when the classes were first created or newer than today, etc.
';
		immediateInvariant.
true.
%

doit
(TestCase
	indexableSubclass: 'FileReferenceTest'
	instVarNames: #( filesystem )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for file reference';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'FileSystemHandleTest'
	instVarNames: #( filesystem handle reference )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for FileSystemHandle';
		immediateInvariant.
true.
%

doit
(FileSystemHandleTest
	subclass: 'FileHandleTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Disk';
		comment: 'SUnit tests for file handles, the tests may be found in superclass';
		immediateInvariant.
true.
%

doit
(FileSystemHandleTest
	subclass: 'MemoryHandleTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Memory';
		comment: 'SUnit tests for memory handles, the tests may be found in superclass';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'FileSystemResolverTest'
	instVarNames: #( resolver )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for FileSystemResolver';
		immediateInvariant.
true.
%

doit
(FileSystemResolverTest
	subclass: 'InteractiveResolverTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for InteractiveResolver';
		immediateInvariant.
true.
%

doit
(FileSystemResolverTest
	subclass: 'PlatformResolverTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for PlatformResolver';
		immediateInvariant.
true.
%

doit
(FileSystemResolverTest
	subclass: 'SystemResolverTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for SystemResolver';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'FileSystemTest'
	instVarNames: #( filesystem toDelete )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'I am an abstract file system test. 
I directly test 
- the public interface of a FileSystem using these methods directly
- the FileSystem in general through the operation methods of the FileReference';
		immediateInvariant.
true.
%

doit
(FileSystemTest
	subclass: 'DiskFileSystemTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Disk';
		comment: 'SUnit tests for the disk filesystem';
		immediateInvariant.
true.
%

doit
(FileSystemTest
	subclass: 'MemoryFileSystemTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Memory';
		comment: 'SUnit tests for MemoryFileSystem';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'FileSystemTreeTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for a file system tree';
		immediateInvariant.
true.
%

doit
(FileSystemTreeTest
	subclass: 'CopyVisitorTest'
	instVarNames: #( source dest )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for CopyVisitor';
		immediateInvariant.
true.
%

doit
(FileSystemTreeTest
	subclass: 'SingleTreeTest'
	instVarNames: #( filesystem )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for a single file system tree (depth one)';
		immediateInvariant.
true.
%

doit
(SingleTreeTest
	subclass: 'AbstractEnumerationVisitorTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for AbstractEnumerationVisitor';
		immediateInvariant.
true.
%

doit
(AbstractEnumerationVisitorTest
	subclass: 'CollectVisitorTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for class CollectVisitor';
		immediateInvariant.
true.
%

doit
(AbstractEnumerationVisitorTest
	subclass: 'SelectVisitorTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for class SelectVistor
';
		immediateInvariant.
true.
%

doit
(SingleTreeTest
	subclass: 'DeleteVisitorTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for class DeleteVisitor';
		immediateInvariant.
true.
%

doit
(SingleTreeTest
	subclass: 'GuideTest'
	instVarNames: #( guide visited )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'Common superclass for tests of guidance through the filesystem';
		immediateInvariant.
true.
%

doit
(GuideTest
	subclass: 'BreadthFirstGuideTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for class BreadthFirstGuide';
		immediateInvariant.
true.
%

doit
(GuideTest
	subclass: 'PostorderGuideTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for class PostorderGuide';
		immediateInvariant.
true.
%

doit
(GuideTest
	subclass: 'PreorderGuideTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for class PreorderGuide';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'FileTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Files-Tests';
		comment: 'Unit tests for file operations';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'FSGemStoneKernelTests'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-GemStone';
		immediateInvariant.
true.
%

doit
(TestCase
	indexableSubclass: 'PathTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Core';
		comment: 'SUnit tests for file system paths';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'WindowsStoreTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Disk';
		comment: 'SUnit tests for class WindowsStore';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'ZnBufferedReadStreamTests'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Tests';
		comment: 'I am ZnBufferedReadStreamTests.';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'ZnBufferedReadWriteStreamTests'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Tests';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'ZnBufferedStreamByteTests'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Tests';
		comment: 'Tests for bufferer read/write streams that are assumed to contain bytes.

Right now, integer encoding/decoding

References

https://en.wikipedia.org/wiki/Endianness
https://en.wikipedia.org/wiki/Two%27s_complement';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'ZnBufferedWriteStreamTests'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Tests';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'ZnCharacterEncoderTests'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Tests';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'ZnCharacterStreamTests'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'Zinc-Character-Encoding-Tests';
		immediateInvariant.
true.
%

doit
(TestResource
	subclass: 'DiskFileAttributesTestsResources'
	instVarNames: #( file beforeCreationTime afterCreationTime )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Tests-Attributes';
		comment: 'DiskFileAttributesTestsResources provides a file with known attributes that can be used to test attribute retrieval in the File System.

DiskFileAttributesTestsResources is currently used by FileReferenceAttributeTests.

    Instance Variables
	afterCreationTime:	The time just after file was created	<DateAndTime>
	beforeCreationTime:	The time just before file was created	<DateAndTime>
	file:					The name of the file (with known attributes)	<FileReference>


    Implementation Points';
		immediateInvariant.
true.
%

doit
(WriteStreamPortable
	subclass: 'MemoryWriteStream'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'FileSystem-Memory';
		comment: 'I am like a WriteStream but I have more capacities than it.
I am closer to a FileStream so I delegate some operations to my handle (collection instance variable)';
		immediateInvariant.
true.
%

! Class implementation for 'UUID'

!		Class methods for 'UUID'

category: 'instance creation'
classmethod: UUID
fromString: aString
	| object |
	aString size ~= 36 ifTrue: [Error signal].
	object := self nilUUID. 
	object asUUID: aString.
	^object
%

category: 'accessing'
classmethod: UUID
generatorClass
  self _generatorClass ifNil: [ ^ FastUUIDGenerator ].
  ^ self _generatorClass
%

category: 'accessing'
classmethod: UUID
generatorClass: aClass
  GeneratorClass := aClass.
  aClass ifNotNil: [ aClass initialize ]
%

category: 'instance creation'
classmethod: UUID
new
  ^ (self new: 16) initialize
%

category: 'instance creation'
classmethod: UUID
nilUUID
	"Must call basicNew: here because I have a non-trivial initialize method."

	^self basicNew: 16
%

category: 'private'
classmethod: UUID
_generatorClass
  ^ GeneratorClass
%

!		Instance methods for 'UUID'

category: 'comparing'
method: UUID
< aMagnitude
  "Answer whether the receiver is less than the argument."

  self size = aMagnitude size
    ifFalse: [ ^ self size < aMagnitude size ].
  1 to: self size do: [ :i | 
    (self at: i) = (aMagnitude at: i)
      ifFalse: [ ^ (self at: i) < (aMagnitude at: i) ] ].
  ^ false
%

category: 'comparing'
method: UUID
<= uuid
	^ (self = uuid) or: [ self < uuid ]
%

category: 'comparing'
method: UUID
> uuid
	^ uuid < self
%

category: 'comparing'
method: UUID
>= uuid
	^ (self = uuid) or: [ uuid < self ]
%

category: 'converting'
method: UUID
asInteger
  ^ self inject: 0 into: [ :sum :each | sum * 256 + each ]
%

category: 'converting'
method: UUID
asString
	| result data |
	data := String new: 36.
	result := WriteStream on: data.
	1 to: 4 do:[:i| self printHexAt: i to: result].
	result nextPut: $-.
	5 to: 6 do:[:i| self printHexAt: i to: result].
	result nextPut: $-.
	7 to: 8 do:[:i| self printHexAt: i to: result].
	result nextPut: $-.
	9 to: 10 do:[:i| self printHexAt: i to: result].
	result nextPut: $-.
	11 to: 16 do:[:i| self printHexAt: i to: result].
	^data.
%

category: 'converting'
method: UUID
asString36
	"Encode the UUID as a base 36 string using 0-9 and lowercase a-z.
	This is the shortest representation still being able to work as
	filenames etc since it does not depend on case nor characters
	that might cause problems, and it fits into short filenames like on
	the old MacOS HFS filesystem. The check for 36r is to make this code
	work in versions before Squeak 3.8."

	| num candidate |
	num := 0.
	1 to: self size do: [:i | num := num + ((256 raisedTo: i - 1) * (self at: i))].
	candidate := num printStringBase: 36.
	^((candidate beginsWith: '36r')
			ifTrue: [candidate copyFrom: 4 to: candidate size]
			ifFalse: [candidate]) asLowercase
%

category: 'converting'
method: UUID
asUUID: aString
	| stream token byte sz |
	stream := ReadStream on: (aString copyReplaceAll: '-' with: '') asUppercase.
	sz := stream _collection size.
	1 to: sz/2 do: [:i | 
		token := stream next: 2.
		byte := Integer fromHexString: token.
		self at: i put: byte].
	^self
%

category: 'initialization'
method: UUID
initialize
  self _primMakeUUID
%

category: 'testing'
method: UUID
isNilUUID
  1 to: self size do: [ :i | 
    (self at: i) ~= 0
      ifTrue: [ ^ false ] ].
  ^ true
%

category: 'converting'
method: UUID
printHexAt: index to: aStream
	| map v |
	map := '0123456789abcdef'.
	v := self at: index.
	aStream nextPut: (map at: (v bitShift: -4) + 1). 
	aStream nextPut: (map at: (v bitAnd: 15) + 1).
%

category: 'printing'
method: UUID
printOn: aStream
	aStream nextPutAll: 'an UUID('.
	self asString printOn: aStream.
	aStream nextPutAll: ')'
%

category: 'printing'
method: UUID
printString

	^self asString
%

category: 'private'
method: UUID
_primMakeUUID
  self class generatorClass default generateBytes: self forVersion: 4
%

! Class implementation for 'FileException'

!		Class methods for 'FileException'

category: 'exceptioninstantiator'
classmethod: FileException
fileName: aFileName
	^self new fileName: aFileName
%

category: 'instance creation'
classmethod: FileException
signalOnFile: aFile 
	
	(self fileName: aFile basename) signal: aFile name
%

category: 'instance creation'
classmethod: FileException
signalWith: aReference
	"Signal a new instance of the receiver with the supplied reference.
	aReference is something that can be converted to a path, e.g. a String, Path or FileReference"
  | str |
	^(self fileName: (str := aReference asPath pathString)) signal: str
%

!		Instance methods for 'FileException'

category: 'exceptiondescription'
method: FileException
buildMessageText
  self details: fileName printString .
  super buildMessageText
%

category: 'exceptiondescription'
method: FileException
fileName
	^fileName
%

category: 'exceptionbuilder'
method: FileException
fileName: aFileName
	fileName := aFileName
%

category: 'exceptiondescription'
method: FileException
isResumable
	"Determine whether an exception is resumable."

	^true
%

! Class implementation for 'FileAlreadyExistsException'

!		Class methods for 'FileAlreadyExistsException'

category: 'instance creation'
classmethod: FileAlreadyExistsException
signalOnFile: aFile 
	
	self new
		file: aFile;
		signal: aFile name "use signal: so filename shows up in exception printString"
%

!		Instance methods for 'FileAlreadyExistsException'

category: 'accessing'
method: FileAlreadyExistsException
buildMessageText
  self details:  'File already exists: ', (file ifNotNil:[:f | f basename] ifNil:['nil']).
  super buildMessageText 
%

category: 'accessing'
method: FileAlreadyExistsException
file
	^ file
%

category: 'accessing'
method: FileAlreadyExistsException
file: aFile
	
	file := aFile
%

! Class implementation for 'FileDoesNotExistException'

!		Class methods for 'FileDoesNotExistException'

category: 'signalling'
classmethod: FileDoesNotExistException
signalWithFile: aFile writeMode: writeMode

  | ex |
	^ (ex := self fileName: aFile basename)
		readOnly: writeMode not;
		signal: ex fileName  "use signal: so file name shows up in  ex printString"
%

!		Instance methods for 'FileDoesNotExistException'

category: 'accessing'
method: FileDoesNotExistException
readOnly
	^readOnly == true
%

category: 'accessing'
method: FileDoesNotExistException
readOnly: aBoolean
	readOnly := aBoolean
%

! Class implementation for 'FileSystemError'

!		Class methods for 'FileSystemError'

category: 'instance creation'
classmethod: FileSystemError
reference: aReference
	^ self basicNew initializeWithReference: aReference
%

category: 'instance creation'
classmethod: FileSystemError
signalWith: aReference
	^ (self reference: aReference) signal
%

!		Instance methods for 'FileSystemError'

category: 'initialize-release'
method: FileSystemError
initializeWithReference: aReference
	reference := aReference.
	self details: aReference printString
%

category: 'testing'
method: FileSystemError
isResumable
	^ true
%

category: 'accessing'
method: FileSystemError
reference
	^ reference
%

! Class implementation for 'IllegalName'

!		Class methods for 'IllegalName'

category: 'instance creation'
classmethod: IllegalName
name: aName
	^ self basicNew initializeWithName: aName
%

category: 'instance creation'
classmethod: IllegalName
signalWith: aName
	^ (self name: aName) signal
%

!		Instance methods for 'IllegalName'

category: 'initialization'
method: IllegalName
initializeWithName: aName
	name := aName.
	self messageText: aName
%

category: 'accessing'
method: IllegalName
name
	^ name
%

! Class implementation for 'ResolutionRequest'

!		Class methods for 'ResolutionRequest'

category: 'instance creation'
classmethod: ResolutionRequest
for: origin
	^ self new
		origin: origin;
		signal
%

!		Instance methods for 'ResolutionRequest'

category: 'exceptionDescription'
method: ResolutionRequest
defaultAction
"
	| filedir ref |
	filedir := UIManager default chooseDirectory: 'Where is ', origin asString, '?'.
	ref := filedir ifNotNil: [FileSystem disk referenceTo: filedir fullName].
	self resume: ref
"

	self error: 'Not yet implemented'
%

category: 'accessing'
method: ResolutionRequest
origin: aSymbol
	origin := aSymbol
%

! Class implementation for 'AbstractFileReference'

!		Instance methods for 'AbstractFileReference'

category: 'copying'
method: AbstractFileReference
, extension
	^ self resolve, extension
%

category: 'navigating'
method: AbstractFileReference
/ aString
	"aString is either a file or path.  If aString is relative, it is appended to the receiver, if it is absolute, an instance of the receiver with the path is answered"

	^ self withPath: (self path resolvePath: (self fileSystem pathFromString: aString))
%

category: 'comparing'
method: AbstractFileReference
<= other
	^ self path <= other path
%

category: 'accessing'
method: AbstractFileReference
absolutePath
	"Returns the absolute path"
	
	^ self subclassResponsibility
%

category: 'enumerating'
method: AbstractFileReference
allChildren
	"Return all the files and folders recursively nested in the receiver"
	
	^ CollectVisitor breadthFirst: self resolve collect: [:entry | entry reference]
%

category: 'enumerating'
method: AbstractFileReference
allChildrenMatching: aPattern
    "Return all the files and folders recursively nested in the receiver and matching the pattern, aPattern"
    
    ^ self allChildren select: [ :each |  aPattern match: each basename ]
%

category: 'enumerating'
method: AbstractFileReference
allDirectories
	"Return all the directories recursively nested in the receiver."
	^ (SelectVisitor breadthFirst: self resolve select: [:entry | entry isDirectory ])
		collect: [ :each| each reference ]
%

category: 'enumerating'
method: AbstractFileReference
allDirectoriesMatching: aPattern
    "Return all the directories recursively nested in the receiver."
    ^ (SelectVisitor 
			breadthFirst: self resolve 
			select: [:entry | entry isDirectory and: [ aPattern match: entry basename ] ])
        collect: [ :each | each reference ]
%

category: 'enumerating'
method: AbstractFileReference
allEntries
	^ CollectVisitor breadthFirst: self resolve
%

category: 'enumerating'
method: AbstractFileReference
allFiles
	"Return all the files (not directories) recursively nested in the receiver."
	^ (SelectVisitor breadthFirst: self resolve select: [:entry | entry isFile ])
		collect: [ :each| each reference ]
%

category: 'converting'
method: AbstractFileReference
asAbsolute 
	self subclassResponsibility
%

category: 'converting'
method: AbstractFileReference
asFileReference 
	self subclassResponsibility 
%

category: 'converting'
method: AbstractFileReference
asPath
	"Answer the receiver's path"

	self subclassResponsibility 
%

category: 'delegated'
method: AbstractFileReference
asPathWith: anObject
	^ self resolve asPathWith: anObject
%

category: 'resolving'
method: AbstractFileReference
asResolvedBy: anObject
	^ anObject resolveReference: self
%

category: 'accessing'
method: AbstractFileReference
base
	"Returns the base of the basename, i.e. /foo/gloops.taz base is 'gloops'"
	^ self fullPath base
%

category: 'accessing'
method: AbstractFileReference
basename
	"Returns the basename, i.e. /foo/gloops.taz basename is 'gloops.taz'"
	^ self fullPath basename
%

category: 'accessing'
method: AbstractFileReference
basenameWithIndicator
	"Returns the basename with the indicator appended, i.e. /foo/gloops.taz basenameWithIndicator is 'gloops.taz', whereras /foo basenameWithIndicator is 'foo/'" 
	^ self basename, self indicator   
%

category: 'accessing'
method: AbstractFileReference
basenameWithoutExtension
	"Returns the basename, i.e. /foo/gloops.taz basenameWithoutExtension is 'gloops'"
	^ self fullPath basenameWithoutExtension
%

category: 'accessing'
method: AbstractFileReference
basenameWithoutExtension: anExtension
	"Returns the basename without specified extension (if any)
	('/foo/gloops.taz' asFileReference basenameWithoutExtension: 'taz') = 'gloops'
	"
	^ self fullPath basenameWithoutExtension: anExtension
%

category: 'streams-compatibility'
method: AbstractFileReference
binaryReadStream
	^ self subclassResponsibility
%

category: 'streams-compatibility'
method: AbstractFileReference
binaryReadStreamDo: aBlock
	| stream |
	stream := self binaryReadStream.
	^ [ aBlock value: stream ] 
		ensure: [ stream close ]
%

category: 'streams-compatibility'
method: AbstractFileReference
binaryReadStreamDo: doBlock ifAbsent: absentBlock
	^ self isFile 
		ifTrue: [ self binaryReadStreamDo: doBlock ]
		ifFalse: absentBlock
%

category: 'streams-compatibility'
method: AbstractFileReference
binaryReadStreamIfAbsent: absentBlock
	^ self isFile
		ifTrue: [ self binaryReadStream ]
		ifFalse: absentBlock
%

category: 'streams'
method: AbstractFileReference
binaryWriteStream
	"Answer a binary write stream on the receiver"

	^ self subclassResponsibility
%

category: 'streams'
method: AbstractFileReference
binaryWriteStreamDo: aBlock
	"Pass a binary write stream on the receiver to the supplied block, and ensure that the stream is closed after evaluation."

	| stream |

	stream := self binaryWriteStream.
	^ [ aBlock value: stream ] 
		ensure: [ stream close ]
%

category: 'streams'
method: AbstractFileReference
binaryWriteStreamDo: doBlock ifPresent: presentBlock
	^ self isFile
		ifTrue: presentBlock
		ifFalse: [ self binaryWriteStreamDo: doBlock ]
%

category: 'delegated'
method: AbstractFileReference
canonicalize
	"Answer the receiver with references to the current folder (.) and parent folder (..) removed"

	^ self withPath: self resolve path canonicalize
%

category: 'private'
method: AbstractFileReference
childGeneratorBlock: doBlock matching: patterns
	"
	FileSystem workingDirectory filesMatching: '*'
	FileSystem workingDirectory filesMatching: '*.image;*.changes'
	"
	
	| files reference|
	files := Set new.
	reference := self resolve.
	
	(patterns subStrings: ';', String crlf) do: [ :pattern | 
		doBlock value: reference value: [ :basename|
			(pattern match: basename)
				ifTrue: [ files add: (self / basename) ]]].
	
	^files asOrderedCollection
%

category: 'enumerating'
method: AbstractFileReference
childNames
	^ self children collect: [:each | each basename ]
%

category: 'enumerating'
method: AbstractFileReference
children
	"Answer an array containing references to the direct children of this reference."
	| reference |
	reference := self resolve.
	^ (reference fileSystem childNamesAt: reference path) 
		collect: [ :aName | self / aName ]
%

category: 'enumerating'
method: AbstractFileReference
childrenMatching: patterns
	"
	FileSystem disk workingDirectory childrenMatching: '*'
	FileSystem disk workingDirectory childrenMatching: '*.image;*.changes'
	"
	^ self 
		childGeneratorBlock: [:reference : aBlock| 
			reference fileSystem childNamesAt: reference path do: aBlock ]
		matching:  patterns 
%

category: 'comparing'
method: AbstractFileReference
contains: anObject
	"Return true if anObject is in a subfolder of me"
	^ anObject isContainedBy: self resolve
%

category: 'comparing'
method: AbstractFileReference
containsPath: aPath
	^ self fullPath containsPath: aPath
%

category: 'accessing'
method: AbstractFileReference
contents
	self readStreamDo: [ :stream |
		^ stream contents ]
%

category: 'operations'
method: AbstractFileReference
copyAllTo: aResolvable
	"Performs a deep copy of the receiver, to a location specified by the argument. If the receiver is a file, the file will be copied; if a directory, the directory and its contents will be copied recursively. The argument must be a reference that doesn't exist; it will be created by the copy."
	
	CopyVisitor copy: self resolve asAbsolute to: aResolvable resolve
%

category: 'delegated'
method: AbstractFileReference
copyTo: aReference
	^ self resolve copyTo: aReference resolve
%

category: 'copying'
method: AbstractFileReference
copyWithPath: newPath
	self subclassResponsibility
%

category: 'enumerating'
method: AbstractFileReference
createDirectory
	"Verifies that the directory does not exist and only creates if necessary. Do not remove files contained if they exist.If the parents does not exist return an exception"
	self parent exists ifFalse:[DirectoryDoesNotExist signalWith: self parent path].
	^ self resolve ensureCreateDirectory
%

category: 'enumerating'
method: AbstractFileReference
createFile
	"Create if necessary a file for the receiver. If the parent does not exist return an exception"
	self parent exists ifFalse:[DirectoryDoesNotExist signalWith: self parent path].
	self writeStream close.
	
%

category: 'accessing'
method: AbstractFileReference
creationTime
	^ self resolve creationTime 
%

category: 'operations'
method: AbstractFileReference
delete
	"Delete the receiver, does raise an error if it is not present."
	
	^ self resolve delete
%

category: 'operations'
method: AbstractFileReference
deleteAll
	"Delete this directory and all children of it, raise an error if the file does not exist."
	DeleteVisitor delete: self resolve
%

category: 'operations'
method: AbstractFileReference
deleteAllChildren
	"delete all children of the receiver, raise an error if the receiver does not exist"
	
	self children do: [:aReference | aReference deleteAll ]
%

category: 'operations'
method: AbstractFileReference
deleteIfAbsent: aBlock
	"Delete the receiver, when it does not exist evaluate the block"
	self resolve deleteIfAbsent: aBlock
%

category: 'enumerating'
method: AbstractFileReference
directories
	"Return all the directories (by opposition to files) contained in the receiver"

	| reference |
	reference := self resolve.
	^ (reference fileSystem directoryNamesAt: reference path) 
		collect: [ :aName | self withPath: self path / aName ]
%

category: 'enumerating'
method: AbstractFileReference
directoriesMatching: patterns
	"
	FileSystem disk workingDirectory directoriesMatching: '*'
	FileSystem disk workingDirectory directoriesMatching: 'package-cache'
	"
	^ self 
		childGeneratorBlock: [:reference : aBlock| 
			reference fileSystem directoryNamesAt: reference path do: aBlock ]
		matching:  patterns 
%

category: 'enumerating'
method: AbstractFileReference
directoryNames
	^ self directories collect: #basename
%

category: 'operations'
method: AbstractFileReference
ensureCreateDirectory
	"Verifies that the directory does not exist and only creates if necessary. Do not remove files contained if they exist.Creates the parents if needed"
	^ self resolve ensureCreateDirectory
%

category: 'operations'
method: AbstractFileReference
ensureCreateFile
	"Create if necessary a file for the receiver. If the parent does not exist creates it"
	self parent ensureCreateDirectory.
	self writeStream close.
	
%

category: 'operations'
method: AbstractFileReference
ensureDelete
	"Delete the file and does not raise exception if it does not exist contrary to delete.
	However if it is a directory and it has children an error is signaled. If it is required to 
	delete even with children, use #ensureDeleteAll."
	
	self deleteIfAbsent: [].
%

category: 'operations'
method: AbstractFileReference
ensureDeleteAll
	"Delete this directory and all children of it, and does not raise an error if the file does not exist."
	
	self exists ifFalse: [ ^ self  ].
	self deleteAll
	
%

category: 'operations'
method: AbstractFileReference
ensureDeleteAllChildren
	"delete all children of the receiver and does not raise an error if the receiver does not exist"
	
	self exists ifFalse: [ ^ self  ].
	self deleteAllChildren
%

category: 'enumerating'
method: AbstractFileReference
entries
	^ self resolve entries
%

category: 'accessing'
method: AbstractFileReference
entry
	^ self resolve entry
%

category: 'delegated'
method: AbstractFileReference
exists
	"Return true if the file reference exist (e.g., if there is a file on the hard disk pointed by the file reference)
	
	E.g., (if you are on Unix or OSX)
	'/tmp/' asFileReference exists => true
	'/tmp/zorkbar' asFileReference exists => false
	"
	^ self resolve exists
%

category: 'accessing'
method: AbstractFileReference
extension
	
	^ self fullPath extension.
%

category: 'accessing'
method: AbstractFileReference
extensions
	  "#('foo' 'foo.tar' 'foo.tar.gz' 'foo.1.tar' 'foo.1.tar.gz') collect: [:thing| thing extensions] => #(#() #('tar') #('tar' 'gz') #('1' 'tar') #('1' 'tar' 'gz'))"
	
        ^ self fullPath extensions
%

category: 'enumerating'
method: AbstractFileReference
fileNames
	^ self files collect: #basename
%

category: 'enumerating'
method: AbstractFileReference
files
	"Return all the files (as opposed to folders) contained in the receiver"
	
	| reference |
	reference := self resolve.
	^ (reference fileSystem fileNamesAt: reference path) 
		collect: [ :aName | self withPath: self path / aName ]
%

category: 'enumerating'
method: AbstractFileReference
filesMatching: patterns
	"
	FileSystem disk workingDirectory filesMatching: '*'
	FileSystem disk workingDirectory filesMatching: '*.image;*.changes'
	"
	^ self 
		childGeneratorBlock: [:reference : aBlock| 
			reference fileSystem fileNamesAt: reference path do: aBlock ]
		matching:  patterns 
%

category: 'accessing'
method: AbstractFileReference
fileSystem
	^ self resolve fileSystem
%

category: 'delegated'
method: AbstractFileReference
fullName

	^ self resolve fullName
%

category: 'accessing'
method: AbstractFileReference
fullNameWithIndicator
	"Returns the basename with the indicator appended, i.e. /foo/gloops.taz basenameWithIndicator is '/foo/gloops.taz', whereras /foo basenameWithIndicator is '/foo/'" 
	^ self fullName, self indicator   
%

category: 'accessing'
method: AbstractFileReference
fullPath
	"Returns the absolute path, better use absolutePath"
	
	^ self subclassResponsibility
%

category: 'enumerating'
method: AbstractFileReference
glob: aBlock
	^ SelectVisitor breadthFirst: self resolve select: aBlock
%

category: 'testing'
method: AbstractFileReference
hasChildren
	^self resolve hasChildren
%

category: 'testing'
method: AbstractFileReference
hasDirectories
	^self resolve hasDirectories
%

category: 'testing'
method: AbstractFileReference
hasFiles
	^self resolve hasFiles
%

category: 'comparing'
method: AbstractFileReference
hash
	"Hash is reimplemented because #= is reimplemented"
	^ self path  hash
%

category: 'accessing'
method: AbstractFileReference
humanReadableSize
	^ self size humanReadableSIByteSize
%

category: 'testing'
method: AbstractFileReference
ifFile: fBlock ifDirectory: dBlock ifAbsent: aBlock
	^ self isFile
		ifTrue: fBlock
		ifFalse: [
			self isDirectory
				ifTrue: dBlock
				ifFalse: aBlock ]
%

category: 'printing'
method: AbstractFileReference
indicator
	"Returns a string indicating the type of reference:
	- '?' for a non existing reference',
	- '/' for a directory,
	- the empty string for a file."
	"When this framework gets more complete, it is possible to extend this behavior with the following indicators (taken from unix ls utility):
	- '*' for a regular file that is executable
	- '@' for a symbolic link
	- '|' for FIFOs
	- '=' for sockets
	- '>' for doors"
	^ self exists
		ifTrue: [self isDirectory ifTrue: ['/'] ifFalse: ['']  ]
		ifFalse: ['?']
%

category: 'initialization'
method: AbstractFileReference
initialize
%

category: 'testing'
method: AbstractFileReference
isAbsolute 
	self subclassResponsibility 
%

category: 'testing'
method: AbstractFileReference
isChildOf: anObject
	^ self parent = anObject
%

category: 'comparing'
method: AbstractFileReference
isContainedBy: anObject
	"DoubleDispatch helper for #contains:"
	^ anObject containsReference: self resolve
%

category: 'testing'
method: AbstractFileReference
isDirectory
	^ self resolve isDirectory
%

category: 'testing'
method: AbstractFileReference
isFile
	^ self resolve isFile
%

category: 'testing'
method: AbstractFileReference
isReadable
	^ self resolve isReadable
%

category: 'testing'
method: AbstractFileReference
isRelative 
	self subclassResponsibility 
%

category: 'testing'
method: AbstractFileReference
isRoot
	^ self resolve isRoot
%

category: 'testing'
method: AbstractFileReference
isWritable
	^ self resolve isWritable
%

category: 'accessing'
method: AbstractFileReference
item
	^ self
%

category: 'navigating'
method: AbstractFileReference
makeRelative: anObject
	^ anObject relativeToReference: self resolve
%

category: 'accessing'
method: AbstractFileReference
modificationTime
	^ self resolve modificationTime 
%

category: 'operations'
method: AbstractFileReference
moveTo: aReference
	"Move the receiver in the location passed as argument.
	
	(FileSystem disk workingDirectory / 'paf' ) ensureCreateFile.
	(FileSystem disk workingDirectory / 'fooFolder') ensureCreateDirectory. 
	(FileSystem disk workingDirectory / 'paf' ) moveTo: (FileSystem disk workingDirectory / 'fooFolder' / 'paf')
	"
	^ self resolve moveTo: aReference
%

category: 'utilities'
method: AbstractFileReference
nextVersion
	^ self resolve nextVersion
%

category: 'streams'
method: AbstractFileReference
openWritable: aBoolean
	^ self resolve openWritable: aBoolean
%

category: 'delegated'
method: AbstractFileReference
parent
	^ self withPath: self resolve path parent
%

category: 'delegated'
method: AbstractFileReference
parentUpTo: aParentDirName
	^ self withPath: (self path parentUpTo: aParentDirName)
%

category: 'accessing'
method: AbstractFileReference
pathSegments
	^ self fullPath segments
%

category: 'delegated'
method: AbstractFileReference
pathString
	^ self resolve pathString
%

category: 'accessing'
method: AbstractFileReference
permissions
	"Return the FileSystemPermission for this node"
	^ self resolve permissions
%

category: 'streams'
method: AbstractFileReference
readStream
	self subclassResponsibility
%

category: 'streams'
method: AbstractFileReference
readStreamDo: aBlock
	| stream |
	stream := self readStream.
	^ [ aBlock value: stream ] 
		ensure: [ stream close ]
%

category: 'streams'
method: AbstractFileReference
readStreamDo: doBlock ifAbsent: absentBlock
	^ self isFile 
		ifTrue: [ self readStreamDo: doBlock ]
		ifFalse: absentBlock
%

category: 'streams'
method: AbstractFileReference
readStreamEncoded: anEncoding

	^ ZnCharacterReadStream
		on: self binaryReadStream
		encoding: anEncoding
%

category: 'streams'
method: AbstractFileReference
readStreamEncoded: anEncoding do: aBlock
	| stream |
	stream := self readStreamEncoded: anEncoding.
	^ [ aBlock value: stream ] 
		ensure: [ stream close ]
%

category: 'streams'
method: AbstractFileReference
readStreamIfAbsent: absentBlock
	^ self isFile
		ifTrue: [ self readStream ]
		ifFalse: absentBlock
%

category: 'navigating'
method: AbstractFileReference
relativeTo: landmark
	"Answer a new path relative to landmark."
	
	"parent/child/grandChild relativeTo: parent returns child/grandChild
	(Filesystem disk / 'griffle' / 'plonk' / 'nurp') relativeTo: (Filesystem disk / 'griffle') 
	returns plonk/nurp"

	^ landmark makeRelative: self resolve
%

category: 'navigating'
method: AbstractFileReference
relativeToPath: landmarkPath 
	
	^ self fullPath relativeTo: landmarkPath
%

category: 'navigating'
method: AbstractFileReference
relativeToReference: landmarkReference
	"Return the path of the receiver relative to landmarkReference."
	
	^ self fullPath relativeTo: landmarkReference path
%

category: 'operations'
method: AbstractFileReference
renameTo: newBasename
	self subclassResponsibility
%

category: 'navigating'
method: AbstractFileReference
resolve
	^ self subclassResponsibility 
%

category: 'navigating'
method: AbstractFileReference
resolve: anObject
	^ anObject asResolvedBy: self
%

category: 'navigating'
method: AbstractFileReference
resolvePath: aPath
	^ self withPath: (self path resolvePath: aPath)
%

category: 'navigating'
method: AbstractFileReference
resolveReference: aReference
	^ aReference isAbsolute
		ifTrue: [ aReference ]
		ifFalse: [ self withPath: aReference path ]
%

category: 'navigating'
method: AbstractFileReference
resolveString: aString 
	self subclassResponsibility
%

category: 'accessing'
method: AbstractFileReference
size
	"Return the size of the file in bytes."
	
	^ self resolve size
%

category: 'streams'
method: AbstractFileReference
streamWritable: writable do: aBlock
	^ writable 
		ifTrue: [ self writeStreamDo: aBlock ]
		ifFalse: [ self readStreamDo: aBlock ]
%

category: 'accessing'
method: AbstractFileReference
uri
	"Convert my path into a file:// type url. For odd characters use %20 notation."

	^ self asUrl
%

category: 'navigating'
method: AbstractFileReference
withExtension: aString
	^ self withPath: (self path withExtension: aString)
%

category: 'copying'
method: AbstractFileReference
withoutExtension
  "Returns the new reference based on receiver with fullname without its extension"

  ^  (self parent / self basenameWithoutExtension)
%

category: 'navigating'
method: AbstractFileReference
withPath: newPath
	^ self path == newPath
		ifTrue: [ self ]
		ifFalse: [ self copyWithPath: newPath ]
%

category: 'streams'
method: AbstractFileReference
writeStream
	self subclassResponsibility
%

category: 'streams'
method: AbstractFileReference
writeStreamDo: aBlock
	| stream |
	stream := self writeStream.
	^ [ aBlock value: stream ]
		ensure: [ stream close ]
%

category: 'streams'
method: AbstractFileReference
writeStreamDo: doBlock ifPresent: presentBlock
	^ self isFile
		ifTrue: presentBlock
		ifFalse: [ self writeStreamDo: doBlock ]
%

category: 'streams'
method: AbstractFileReference
writeStreamEncoded: anEncoding

	^ ZnCharacterWriteStream
		on: self binaryWriteStream
		encoding: anEncoding
%

category: 'streams'
method: AbstractFileReference
writeStreamEncoded: anEncoding do: aBlock
	| stream |
	stream := self writeStreamEncoded: anEncoding.
	^ [ aBlock value: stream ]
		ensure: [ stream close ]
%

category: 'streams'
method: AbstractFileReference
writeStreamIfPresent: presentBlock
	^ self isFile 
		ifTrue: presentBlock
		ifFalse: [ self writeStream ]
%

! Class implementation for 'FileLocator'

!		Class methods for 'FileLocator'

category: 'windows-origins'
classmethod: FileLocator
A
	^ self driveNamed: #A 
%

category: 'adding'
classmethod: FileLocator
addResolver: aResolver
	self resolver addResolver: aResolver
%

category: 'windows-origins'
classmethod: FileLocator
B
	^ self driveNamed: #B
%

category: 'windows-origins'
classmethod: FileLocator
C
	^ self driveNamed: #C
%

category: 'origins'
classmethod: FileLocator
cache
	^ self origin: #cache
%

category: 'gemstone-origins'
classmethod: FileLocator
clientWorkingDirectory
	^ FileSystem client referenceTo: RelativePath new
%

category: 'origins'
classmethod: FileLocator
cwd
	^ self workingDirectory
%

category: 'windows-origins'
classmethod: FileLocator
D
	^ self driveNamed: #D
%

category: 'gemstone-origins'
classmethod: FileLocator
dbfScratchDir
	"Answer the path to the DBF_SCRATCH_DIR"

	^ self origin: #dbfScratchDir
%

category: 'origins'
classmethod: FileLocator
desktop
	^ self origin: #desktop
%

category: 'origins'
classmethod: FileLocator
documents
	^ self origin: #documents
%

category: 'windows-origins'
classmethod: FileLocator
driveNamed: driveName
	^ FileReference fileSystem: (FileSystem disk) path: Path / (driveName, ':')
%

category: 'windows-origins'
classmethod: FileLocator
E
	^ self driveNamed: #E
%

category: 'gemstone-origins'
classmethod: FileLocator
extent1
	"Answer the path to the first exent extent"

	^ self origin: #extent1
%

category: 'gemstone-origins'
classmethod: FileLocator
extent1Directory

	^ self origin: #extent1Directory
%

category: 'gemstone-origins'
classmethod: FileLocator
extent: extentIndex
	"Answer the path to the extent at extentIndex in DBF_EXTENT_NAMES: (System stoneConfigurationReport at: #DBF_EXTENT_NAMES) at: extentIndex"

	^ self origin: ('extent', extentIndex printString) asSymbol
%

category: 'windows-origins'
classmethod: FileLocator
F
	^ self driveNamed: #F
%

category: 'flushing'
classmethod: FileLocator
flushCaches
	self resolver flushCaches
%

category: 'windows-origins'
classmethod: FileLocator
G
	^ self driveNamed: #G
%

category: 'gemstone-origins'
classmethod: FileLocator
gemLogDirectory
	"locator for the log directory (parent directory of gemLog)"

	^ self origin: #gemLogDirectory
%

category: 'windows-origins'
classmethod: FileLocator
H
	^ self driveNamed: #H
%

category: 'origins'
classmethod: FileLocator
home
	^ self origin: #home
%

category: 'windows-origins'
classmethod: FileLocator
I
	^ self driveNamed: #I
%

category: 'gemstone-origins'
classmethod: FileLocator
image
	"commonly used, so we need to define it, but the closest that GemStone comes is the #dbfScratchDir"

	^ self dbfScratchDir
%

category: 'gemstone-origins'
classmethod: FileLocator
imageDirectory
	"commonly used, so we need to define it, but the closest that GemStone comes is the #dbfScratchDir"

	^ self dbfScratchDir
%

category: 'windows-origins'
classmethod: FileLocator
J
	^ self driveNamed: #J
%

category: 'windows-origins'
classmethod: FileLocator
K
	^ self driveNamed: #K
%

category: 'windows-origins'
classmethod: FileLocator
L
	^ self driveNamed: #L
%

category: 'windows-origins'
classmethod: FileLocator
M
	^ self driveNamed: #M
%

category: 'windows-origins'
classmethod: FileLocator
N
	^ self driveNamed: #N
%

category: 'windows-origins'
classmethod: FileLocator
O
	^ self driveNamed: #O
%

category: 'instance creation'
classmethod: FileLocator
origin: aSymbol 
	^ self origin: aSymbol path: Path workingDirectory
%

category: 'instance creation'
classmethod: FileLocator
origin: aSymbol path: aPath
	^ self basicNew 
			initializeWithOrigin: aSymbol path: aPath
%

category: 'windows-origins'
classmethod: FileLocator
P
	^ self driveNamed: #P
%

category: 'origins'
classmethod: FileLocator
preferences
	^ self origin: #preferences
%

category: 'windows-origins'
classmethod: FileLocator
Q
	^ self driveNamed: #Q
%

category: 'windows-origins'
classmethod: FileLocator
R
	^ self driveNamed: #R
%

category: 'accessing'
classmethod: FileLocator
resolver

	^ SessionTemps current at: #FileLocator_Resolver ifAbsentPut: [
		InteractiveResolver new
			addResolver: SystemResolver new;
			addResolver: PlatformResolver forCurrentPlatform;
			yourself ]
%

category: 'origins'
classmethod: FileLocator
root
	^ FileSystem disk root
%

category: 'windows-origins'
classmethod: FileLocator
S
	^ self driveNamed: #S
%

category: 'gemstone-origins'
classmethod: FileLocator
serverWorkingDirectory
	^ FileSystem server referenceTo: RelativePath new
%

category: 'accessing'
classmethod: FileLocator
supportedOrigins
	| origins current |
	origins := IdentitySet new.
	current := self resolver.
	[current notNil] whileTrue:
		[origins addAll: current supportedOrigins.
		current := current next].
	^ origins
%

category: 'mac-origins'
classmethod: FileLocator
systemApplicationSupport
	^ self origin: #systemApplicationSupport
%

category: 'mac-origins'
classmethod: FileLocator
systemLibrary
	^ self origin: #systemLibrary
%

category: 'windows-origins'
classmethod: FileLocator
T
	^ self driveNamed: #T
%

category: 'origins'
classmethod: FileLocator
temp
	^ self origin: #temp
%

category: 'gemstone-origins'
classmethod: FileLocator
tranlog
	"Answer the path to the current tranlog directory"

	^ self origin: #tranlog
%

category: 'windows-origins'
classmethod: FileLocator
U
	^ self driveNamed: #U
%

category: 'mac-origins'
classmethod: FileLocator
userApplicationSupport
	^ self origin: #userApplicationSupport
%

category: 'unix-origins'
classmethod: FileLocator
userData
	^ self origin: #userData
%

category: 'mac-origins'
classmethod: FileLocator
userLibrary
	^ self origin: #userLibrary
%

category: 'windows-origins'
classmethod: FileLocator
V
	^ self driveNamed: #V
%

category: 'windows-origins'
classmethod: FileLocator
W
	^ self driveNamed: #W
%

category: 'origins'
classmethod: FileLocator
workingDirectory
	^ FileSystem disk referenceTo: RelativePath new
%

category: 'windows-origins'
classmethod: FileLocator
X
	^ self driveNamed: #X
%

category: 'windows-origins'
classmethod: FileLocator
Y
	^ self driveNamed: #Y
%

category: 'windows-origins'
classmethod: FileLocator
Z
	^ self driveNamed: #Z
%

!		Instance methods for 'FileLocator'

category: 'comparing'
method: FileLocator
= other
	^ self species = other species
		and: [origin = other origin
			and: [path = other path]]
%

category: 'accessing'
method: FileLocator
absolutePath
	"Return the absolute path"
	^ self resolve path
%

category: 'converting'
method: FileLocator
asAbsolute
	^ self 
%

category: 'converting'
method: FileLocator
asFileReference
	^ self resolve
%

category: 'converting'
method: FileLocator
asPath
	"Answer the receiver's path"

	^self resolve asPath
%

category: 'streams-compatibility'
method: FileLocator
binaryReadStream
	^ self resolve binaryReadStream
%

category: 'streams-compatibility'
method: FileLocator
binaryWriteStream
	"Answer a binary write stream on the receiver"

	^ self resolve binaryWriteStream
%

category: 'copying'
method: FileLocator
copyWithPath: newPath
	^ self class origin: origin path: newPath
%

category: 'error handling'
method: FileLocator
doesNotUnderstand: aMessage
	"Redirect message to the resolved version of this FileLocator.
	If FileReference won't understand the message send a normal DNU."

	| resolved |
	
	resolved := self resolve.
	(resolved respondsTo: aMessage selector)
		ifTrue: [ ^ resolved perform: aMessage selector withArguments: aMessage arguments ].
	
	^ super doesNotUnderstand: aMessage.
%

category: 'accessing'
method: FileLocator
fullPath
	^ self resolve path
%

category: 'comparing'
method: FileLocator
hash
	^ origin hash bitXor: path hash
%

category: 'initialize-release'
method: FileLocator
initializeWithOrigin: aSymbol path: aPath
	self initialize.
	origin := aSymbol.
	path := aPath.
%

category: 'testing'
method: FileLocator
isAbsolute
	^ true
%

category: 'testing'
method: FileLocator
isRelative
	^ false
%

category: 'accessing'
method: FileLocator
origin
	^ origin
%

category: 'accessing'
method: FileLocator
path
	^ path
%

category: 'printing'
method: FileLocator
printOn: aStream
	| fs |
	aStream
		nextPut: ${;
		nextPutAll: origin;
		nextPut: $}.
	path isWorkingDirectory
		ifTrue: [ ^ self ].
	fs := self fileSystem.
	aStream nextPut: fs delimiter.
	fs printPath: path on: aStream
%

category: 'streams'
method: FileLocator
readStream
	^ self resolve readStream 
%

category: 'operations'
method: FileLocator
renameTo: newBasename
	
	| result |
	result := self resolve renameTo: newBasename.
	path size > 0
		ifTrue: [ path basename: newBasename ]
		ifFalse: [ path := result path ]
%

category: 'navigating'
method: FileLocator
resolve
	^ (self class resolver resolve: origin) resolve: path
%

category: 'navigating'
method: FileLocator
resolveString: aString
	| filesystem thePath |
	filesystem := (self class resolver resolve: origin) fileSystem.
	thePath := filesystem pathFromString: aString.
	^ self withPath: (path resolvePath: thePath)
%

category: 'streams'
method: FileLocator
writeStream
	^ self resolve writeStream 
%

! Class implementation for 'FileReference'

!		Class methods for 'FileReference'

category: 'cross platform'
classmethod: FileReference
/ aString
	"Answer a reference to the argument resolved against the root of the current disk filesystem."
	
	^ FileSystem disk / aString
%

category: 'instance creation'
classmethod: FileReference
fileSystem: aFilesystem path: aPath
	^ self new setFileSystem: aFilesystem path: aPath
%

category: 'instance creation'
classmethod: FileReference
newTempFilePrefix: prefix suffix: suffix
	| tmpDir random fileName |
	
	tmpDir := FileLocator temp asFileReference.
	[ 
		random := UUID new asInteger asString.
		fileName := prefix , random , suffix.
		(tmpDir / fileName) exists ] whileTrue.
	^ tmpDir / fileName
%

!		Instance methods for 'FileReference'

category: 'navigating'
method: FileReference
, extension
	^ self withPath: self path, extension
%

category: 'comparing'
method: FileReference
= other
	"Two FileReferences are considered equal if they refer to the same file / directory.
	As paths can have multiple relative representations, compare the absolute paths."
	"Perform the path comparison last as conversion to absolute paths is relatively expensive"
	^ self species = other species
		and: [self fileSystem = other fileSystem
			and: [self absolutePath = other absolutePath]]
%

category: 'accessing'
method: FileReference
absolutePath
	"Return the absolute of the receiver"
	^ self path isRelative
		ifFalse: [ self path ]
		ifTrue: [ filesystem resolve: self path ]
%

category: 'converting'
method: FileReference
asAbsolute
	"Return the receiver as an absolute file reference."
	
	^ self isAbsolute
		ifTrue: [ self ]
		ifFalse: [ filesystem referenceTo: (filesystem resolve: path) ]
%

category: 'converting'
method: FileReference
asFileReference
	^ self
%

category: 'converting'
method: FileReference
asPath
	"Answer the receivers path"

	^path
%

category: 'printing'
method: FileReference
asString
  "needed for informative topaz stack display"
  ^ path asString 
%

category: 'streams'
method: FileReference
binaryReadStream
	
	^ filesystem binaryReadStreamOn: self path
%

category: 'streams'
method: FileReference
binaryWriteStream
	"Answer a binary write stream on the receiver"

	^ ZnBufferedWriteStream on: (filesystem binaryWriteStreamOn: self path)
%

category: 'comparing'
method: FileReference
containsReference: aReference
	^  aReference fileSystem = filesystem and: [path contains: aReference path]
%

category: 'operations'
method: FileReference
copyTo: aReference
	self isDirectory
		ifTrue: [ aReference ensureCreateDirectory ]
		ifFalse: [ filesystem copy: path toReference: aReference ]
%

category: 'copying'
method: FileReference
copyWithPath: newPath
	^ filesystem referenceTo: newPath
%

category: 'accessing'
method: FileReference
creationTime 
	^ filesystem creationTimeOf: self path
%

category: 'operations'
method: FileReference
delete
	"Deletes the referenced file or directory. If the directory is not empty, 
	raises an error. Use #deleteAll to delete with the children."

	(self isDirectory and:[self hasChildren]) 
		ifTrue:[DirectoryIsNotEmpty signalWith: self].
	filesystem delete: path
%

category: 'operations'
method: FileReference
deleteIfAbsent: aBlock
	self exists 
		ifTrue: [ self delete ]
		ifFalse: aBlock
%

category: 'operations'
method: FileReference
ensureCreateDirectory
	"Create if necessary a directory for the receiver."
	filesystem ensureCreateDirectory: path
	
%

category: 'navigating'
method: FileReference
entries
	"Return the entries (meta data - file description) of the direct children of the receiver"
	^ self fileSystem entriesAt: self path 
%

category: 'accessing'
method: FileReference
entry
	"Return the entry (meta data) describing the receiver."
	^ filesystem entryAt: path
%

category: 'testing'
method: FileReference
exists
	^ filesystem exists: path
%

category: 'accessing'
method: FileReference
fileSystem
	"Return the filesystem to which the receiver belong."
	^ filesystem
%

category: 'accessing'
method: FileReference
fullName
	"Return the full path name of the receiver."
	^ filesystem stringFromPath: (filesystem resolve: path)
%

category: 'accessing'
method: FileReference
fullPath
	^ self path
%

category: 'testing'
method: FileReference
hasChildren
	"Return whether the receiver has any children."
	"FileSystem workingDirectory hasChildren"
	
	^ filesystem hasChildren: path
%

category: 'testing'
method: FileReference
hasDirectories
	"Return whether the receiver has children that are directories."
	"FileSystem workingDirectory hasDirectories"
	
	^ filesystem hasDirectories: path
%

category: 'testing'
method: FileReference
hasFiles
	"Return whether the receiver has children that are files."
	"FileSystem workingDirectory hasFiles"
	
	^ filesystem hasFiles: path
%

category: 'comparing'
method: FileReference
hash
	^ path hash bitXor: filesystem hash
%

category: 'testing'
method: FileReference
isAbsolute
	^ path isAbsolute
%

category: 'testing'
method: FileReference
isDirectory
	^ filesystem isDirectory: path
%

category: 'testing'
method: FileReference
isFile
	^ filesystem isFile: path
%

category: 'testing'
method: FileReference
isReadable
	^ filesystem isReadable: path
%

category: 'testing'
method: FileReference
isRelative
	^ path isRelative
%

category: 'testing'
method: FileReference
isRoot
	^ path isRoot
%

category: 'testing'
method: FileReference
isSymlink 
	^ filesystem isSymlink: path
%

category: 'testing'
method: FileReference
isWritable
	^ filesystem isWritable: path
%

category: 'utilities'
method: FileReference
lastFileFor: baseFileName extension: extension
  "Assumes a file is named using a version number encoded as '.' followed by digits
  preceding the file extension, e.g., games.22.ston
  Answer the file name with the largest number.
  If a version number is not found, raises an error"

  "FileSystem workingDirectory lastFileFor: 'games' extension: 'ston'"

    | files |
    files := self childrenMatching: baseFileName , '.*.' , extension.
    files ifEmpty: [ ^ self error: 'No file with number pattern' ].
    ^ (files asSortedCollection: [ :a :b | a basename < b basename ]) last
%

category: 'accessing'
method: FileReference
modificationTime 
	"Returns the last date of modification of self"
	^ filesystem modificationTimeOf: self path
%

category: 'operations'
method: FileReference
moveTo: aReference
	
	| result |
	result := self fileSystem 
		move: self path
		to: aReference resolve.
	result ifNotNil: [
		self setFileSystem: result fileSystem path: result path ].		
%

category: 'utilities'
method: FileReference
nextNameFor: baseFileName extension: extension
  "Assumes a file name includes a version number encoded as '.' followed by digits 
   preceding the file extension, e.g., games.22.ston
   Increment the version number (of the largest one) and answer the new file name, e.g., games23.ston
   If a version number is not found, set the version to 1 and answer a new file name"

	"(FileSystem workingDirectory nextNameFor: 'games' extension: 'ston') asFileReference ensureCreateFile"

	| files splits version |
	files := self childrenMatching: baseFileName , '.*.' , extension.
	files ifEmpty: [ ^ baseFileName , '.1.' , extension ].
	splits := files
		collect: [ :filename | filename basename splitOn: $. ]
		thenSelect: [ :split | (split at: 1) = baseFileName and: [ split size = 3 ] ].
	splits := splits asSortedCollection: [ :a :b | (a at: 2) asNumber < (b at: 2) asNumber ].
	version := splits isEmpty
		ifTrue: [ 1 ]
		ifFalse: [ (splits last at: 2) asNumber + 1 ].
	^ baseFileName , '.' , version asString , '.' , extension
%

category: 'utilities'
method: FileReference
nextVersion
	"Assumes a file (or folder) name includes a version number encoded as '.' followed by digits 
	preceding the file extension.  Increment the version number and answer the new file name.
	If a version number is not found, return just the file"

	| parent version versionNumbers nameWithoutExtension |
	
	self exists
		ifFalse: [ ^ self ].
	
	parent := self parent.
	nameWithoutExtension := self basename copyUpTo: $..
	
	versionNumbers := parent children 
				select: [ :f| 
					(f basename beginsWith: nameWithoutExtension) ]
				thenCollect: [ :f| 
					Number squeezeNumberOutOfString: (f basename copyLast: (f basename size - nameWithoutExtension size))   ifFail: [ 0 ]].
	
	versionNumbers ifEmpty: [ ^self ].
	
	version := versionNumbers max + 1.
	^ parent / (nameWithoutExtension , '.', version asString) , self extension
%

category: 'streams'
method: FileReference
openWritable: aBoolean 
	^ filesystem open: path writable: aBoolean
%

category: 'accessing'
method: FileReference
path
	"Return the path internal representation that denotes the receiver in the context of its filesystem. "
	^ path
%

category: 'printing'
method: FileReference
pathString
	"Return the full path name of the receiver."
	
	^ filesystem stringFromPath: (filesystem resolve: path)
%

category: 'accessing'
method: FileReference
permissions
	^ filesystem permissions: self path
%

category: 'printing'
method: FileReference
printOn: aStream
	filesystem forReferencePrintOn: aStream.
	filesystem printPath: path on: aStream
%

category: 'streams'
method: FileReference
readStream

	^ self readStreamEncoded: 'utf8'
%

category: 'operations'
method: FileReference
renameTo: newBasename
	
	| destinationPath |
	destinationPath := self fileSystem 
		rename: self 
		to: self parent / newBasename.
	
	destinationPath ifNotNil: [
		self 
			setFileSystem: filesystem 
			path: destinationPath ].
	^ self
		
%

category: 'accessing'
method: FileReference
resolve
	^ self
%

category: 'resolving'
method: FileReference
resolvePath: anObject
	^ self withPath: (path resolve: anObject)
%

category: 'resolving'
method: FileReference
resolveReference: aReference
	
	^ (filesystem = aReference fileSystem or: [aReference isRelative])
		ifTrue: [filesystem referenceTo: (path resolvePath: aReference path)]
		ifFalse: [aReference]
%

category: 'resolving'
method: FileReference
resolveString: aString 
	| thePath |
	thePath := filesystem pathFromString: aString.
	^ filesystem referenceTo: (path resolve: thePath)
%

category: 'initialize-release'
method: FileReference
setFileSystem: aFilesystem path: aPath
	filesystem := aFilesystem.
	path := aPath
%

category: 'accessing'
method: FileReference
size
	^ filesystem sizeOf: path
%

category: 'streams'
method: FileReference
writeStream
	
	^ self writeStreamEncoded: 'utf8'
%

! Class implementation for 'FastUUIDGenerator'

!		Class methods for 'FastUUIDGenerator'

category: 'accessing'
classmethod: FastUUIDGenerator
default
	^(SessionTemps current at: self _defaultKey ifAbsent: [])
		ifNil: [
			| default |
			default := self new initialize.
      SessionTemps current at: self _defaultKey put: default ]
%

category: 'initialization'
classmethod: FastUUIDGenerator
initialize

	SessionTemps current removeKey: self _defaultKey ifAbsent: []
%

category: 'accessing'
classmethod: FastUUIDGenerator
next
	"Return a UUID using the shared generator"
	
	"self next"
	
	"[ UUIDGenerator next ] bench"
	
	^ self default next
%

category: 'private'
classmethod: FastUUIDGenerator
_defaultKey

	^ #'UUID_DEFAULT'
%

!		Instance methods for 'FastUUIDGenerator'

category: 'instance creation'
method: FastUUIDGenerator
generateBytes: aPlaceHolder forVersion: aVersion
	aVersion = 4 ifTrue: [self generateFieldsVersion4]
		ifFalse: [self error: 'Unsupported version'].
	self placeFields: aPlaceHolder.
%

category: 'instance creation'
method: FastUUIDGenerator
generateFieldsVersion4

	semaphoreForGenerator critical: 
			[bits1 := random integer.
			bits2 := random integer.
			bits3 := random integer.
			bits4 := random integer].
	bits2 := (bits2 bitAnd: 16rFFFF0FFF) bitOr: 16r4000.
	bits3 := (bits3 bitAnd: 16r3FFFFFFF) bitOr: 16r80000000
%

category: 'instance creation'
method: FastUUIDGenerator
initialize

	random := Random new.
	semaphoreForGenerator := Semaphore forMutualExclusion
%

category: 'accessing'
method: FastUUIDGenerator
next

	"Return the next UUID"
	
	| uuid |
	uuid := UUID nilUUID.
	self generateBytes: uuid forVersion: 4.
	^ uuid
%

category: 'instance creation'
method: FastUUIDGenerator
placeFields: aPlaceHolder

	aPlaceHolder
		unsigned32At: 1 put: bits1;
		unsigned32At: 5 put: bits2;
		unsigned32At: 9 put: bits3;
		unsigned32At: 13 put: bits4
%

! Class implementation for 'File'

!		Class methods for 'File'

category: 'primitives-file'
classmethod: File
atEnd: aGsFile
	"Answer true if the file position is at the end of the file."

	^ aGsFile atEnd
%

category: 'primitives-file'
classmethod: File
close: aGsFile
	"Close this file."

	aGsFile ifNil: [ ^ self ].
	aGsFile close
%

category: 'primitives-file'
classmethod: File
closed: aGsFile
	^ aGsFile isNil or: [ (self sizeOrNil: aGsFile) isNil ]
%

category: 'primitives-file'
classmethod: File
connectToFile: filePointer writable: writableFlag
	"Open the file with the supplied FILE* pointer, and return the file ID obtained.
	writeableFlag indicates whether to allow write operations and must be compatible with the way the file was opened.
	It is the responsibility of the caller to coordinate closing the file."

"
	<primitive: 'primitiveConnectToFile' module: 'FilePlugin' error: error>
	error = #'bad argument' ifTrue: [ 
		(filePointer isKindOf: ByteArray) ifFalse: 
			[ ^self error: 'filePointer must be a ByteArray' ].
		(writableFlag isKindOf: Boolean) ifFalse: 
			[ ^self error: 'writableFlag must be a boolean' ] ].
	^ self primitiveFailed 
"
self error: 'not yet implmented'
%

category: 'primitives-file'
classmethod: File
connectToFileDescriptor: fileDescriptor writable: writableFlag
	"Connect to the file with fileDescriptor number, and return the file ID obtained.
	writeableFlag indicates whether to allow write operations and must be compatible with the way the file was opened.
	It is the responsibility of the caller to coordinate closing the file."

"
	<primitive: 'primitiveConnectToFileDescriptor' module: 'FilePlugin' error: error>
	error = #'bad argument' ifTrue: [ 
		fileDescriptor isInteger ifFalse: 
			[ ^self error: 'fileDescriptor must be an integer' ].
		(writableFlag isKindOf: Boolean) ifFalse: 
			[ ^self error: 'writableFlag must be a boolean' ] ].
	^ self primitiveFailed 
"
self error: 'not yet implmented'

%

category: 'primitives-path'
classmethod: File
createDirectory: fullPath
	"Create a directory named by the given path. 
	Fail if the path is bad or if a file or directory by that name already exists."

	^ GsFile createServerDirectory: fullPath
%

category: 'primitives-path'
classmethod: File
deleteDirectory: fullPath
	"Delete the directory named by the given path. 
	Fail if the path is bad or if a directory by that name does not exist."

	(GsFile removeServerDirectory: fullPath)
		ifNil: [ self error: 'Error deleting directory ', fullPath printString, ' :: ', GsFile serverErrorString ]
%

category: 'primitives-path'
classmethod: File
deleteFile: aFileName
	"Delete the file of the given name. 
	Return self if the primitive succeeds, nil otherwise."

	^ GsFile _removeFile: aFileName onClient: false
%

category: 'primitives-path'
classmethod: File
delimiter
	"Return the path delimiter for the underlying platform's file system."

	"Was a primitive ... only needed to resolve whether or not we're on Windows"

	^ $/
%

category: 'primitives-file'
classmethod: File
fileDescriptorIsAvailable: anInteger
	"Answer a boolean indicating whether the supplied file descriptor (anInteger) is available.
	A file descriptor is considered available if it is connected to a console / terminal, pipe or a file.  cygwin terminals are currently not supported (the pipe is created, but nothing appears in the terminal)"

	^ (self fileDescriptorType: anInteger) between: 1 and: 3
%

category: 'primitives-file'
classmethod: File
fileDescriptorType: fdNum
	"Allow to test if the standard input/output files are from a console or not
	Return values:
	* -1 - Error
	* 0 - no console (windows only)
	* 1 - normal terminal (unix terminal / windows console)
	* 2 - pipe
	* 3 - file
	* 4 - cygwin terminal (windows only)"

"
	<primitive: 'primitiveFileDescriptorType' module: 'FilePlugin' error: error>
	error = #'bad argument'
		ifTrue: [ fdNum isInteger
				ifFalse: [ ^ self error: 'File Descriptor must be an integer!' ] ].
	^ self primitiveFailed
"
self error: 'not yet implmented'
%

category: 'primitives-file'
classmethod: File
flush: aGsFile
	"On Unix, the FilePlugin uses stdio FILE* structs which maintain their
	own internal buffer to minimize write() syscalls. This flushes that buffer.
	On Windows this and primSync: do the same thing."

	aGsFile flush
%

category: 'primitives-path'
classmethod: File
getMacFile: fileName type: typeString creator: creatorString
	"Get the Macintosh file type and creator info for the file with the given name. Fails if the file does not exist or if the type and creator type arguments are not strings of length 4. This primitive is Mac specific; it is a noop on other platforms."

"
 	<primitive: 'primitiveDirectoryGetMacTypeAndCreator' module: 'FilePlugin'>
"
self error: 'not yet implmented'

%

category: 'primitives-file'
classmethod: File
getPosition: aGsFile
	"Get this files current position."

	^ aGsFile position
%

category: 'primitives-path'
classmethod: File
lookupDirectory: fullPath filename: fileName

	"Look up <fileName> (a simple file name) in the directory identified by <fullPath> and 
   return entry array or nil "

	^ self lookupPath: fullPath, '/', fileName
%

category: 'primitives-path'
classmethod: File
lookupPath: fullPath

	"Look up the file or directory identified by <fullPath> and return an array containing:

	<fileName> 			
	<creationTime> 			(in seconds since the start of the Linux time epoch)
	<modificationTime> 	(in seconds since the start of the Linux time epoch)
	<dirFlag> 				DirFlag is true if the entry is a directory
	<fileSize> 				FileSize the file size in bytes or zero for directories
	<posixPermissions> 	Numeric Notation 
	<symLinkFlag>			seemingly, symLinkFlag is true if the entry is a symLink

	On Unix, the empty path denotes '/'. 
   On Macs and PCs, it is the container of the system volumes."

	| gsFileStat |
	(GsFile existsOnServer: fullPath) ifFalse: [^ nil ].
	gsFileStat := GsFile stat: fullPath isLstat: true.
	gsFileStat _isSmallInteger ifTrue: [ ^ nil ].
	^	{
		(Path from: fullPath) basename.
		gsFileStat ctimeUtcSeconds .
		gsFileStat mtimeUtcSeconds .
		gsFileStat isDirectory .
		gsFileStat size.
		gsFileStat mode bitAnd: 8r777. "https://github.com/GemTalk/FileSystemGs/issues/11"
		(gsFileStat mode bitAnd: 8r0120000) = 8r0120000. "https://github.com/GemTalk/FileSystemGs/issues/10"
	}
%

category: 'file creation'
classmethod: File
named: fileName
	"Open a file with the given name for reading and writing. If the name has no directory part, then the file will be created in the default directory. If the file already exists, its prior contents may be modified or replaced, but the file will not be truncated on close."

	^ self new named: fileName
%

category: 'primitives-file'
classmethod: File
open: fileName writable: writeMode
	"Open a file of the given name, and return the GsFile obtained.
	If writableFlag is true, then
		if there is none with this name, then create one
		else prepare to overwrite the existing from the beginning
	otherwise
		if the file exists, open it read-only
		else return nil"

	"writeMode - #read, #append, #write"

	| mode |
	mode := writeMode == #write 
		ifTrue: [ 'w+' ] 
		ifFalse: [ 
			writeMode = #read
				ifTrue: [ 'r' ]
				ifFalse: [ 
           writeMode == #append 
             ifTrue:[ 'a+' ] 
             ifFalse:[ Error signal:'invalid mode']]].
	^ GsFile
		open: fileName 
		mode: mode 
		onClient: false
%

category: 'file creation'
classmethod: File
openAndTruncateForWriteFileNamed: aName

	^ (self named: aName)
		delete;
		openForWrite
%

category: 'file creation'
classmethod: File
openForReadFileNamed: aName

	^ (self named: aName)
		openForRead
%

category: 'file creation'
classmethod: File
openForWriteFileNamed: aName

	^ (self named: aName) openForWrite
%

category: 'primitives-file'
classmethod: File
read: aGsFile into: byteArray startingAt: startIndex count: count
	"Read up to count bytes of data from this file into the given string or byte array starting at the given index. 
		Answer the number of bytes actually read."

	| buf cnt |
	buf := byteArray species new: count.
	cnt := aGsFile next: count into: buf.
	cnt ifNil: [ 
		(self closed: aGsFile)
			ifTrue: [ ^ self error: 'File is closed' ].
		self error: 'File read failed: ' , (GsFile serverErrorString ifNil: [ '']) ].
	byteArray replaceFrom: startIndex to: startIndex + cnt - 1 with: buf.
	^cnt
%

category: 'primitives-path'
classmethod: File
rename: oldFileFullName to: newFileFullName 
	"Rename the file of the given name to the new name. Fail if there is no file of the old name 
	or if there is an existing file with the new name."

	(GsFile renameFileOnServer: oldFileFullName to: newFileFullName) = 0
		ifFalse: [ self error: 'Rename file failed'].
%

category: 'primitives-file'
classmethod: File
setPosition: aGsFile to: anInteger
	"Set this file to the given position."

	| pos |
	pos := aGsFile position: anInteger.
	pos ifNil: [ self error: 'position error' ].
%

category: 'primitives-file'
classmethod: File
sizeOf: aGsFile
	"Answer the size of this file."

	^ aGsFile fileSize
%

category: 'primitives-file'
classmethod: File
sizeOrNil: aGsFile
	"Answer the size of this file."

	aGsFile ifNil: [ ^ nil ].
	^ aGsFile fileSize
%

category: 'primitives-file'
classmethod: File
stdioHandles
"
	<primitive: 'primitiveFileStdioHandles' module: 'FilePlugin' error: ec>
	self primitiveFailed
"
self error: 'not yet implmented'
%

category: 'primitives-file'
classmethod: File
stdioIsAvailable
	"Answer a boolean indicating whether stdio is available on the current platform.
	stdio is considered available if any one of the three files (stdin, stdout, stderr) is available."

	^ (0 to: 2)
		anySatisfy: [ :fdNum | self fileDescriptorIsAvailable: fdNum ]
%

category: 'primitives-file'
classmethod: File
sync: id
	"On Unix, this syncs any written or flushed data still in the kernel file
	system buffers to disk. On Windows this and primFlush: do the same thing"

"
	<primitive: 'primitiveFileSync' module: 'FilePlugin'>

"
self error: 'not yet implmented'

	"fsync() failing cannot be ignored"
	self primitiveFailed
%

category: 'primitives-file'
classmethod: File
truncate: id to: anInteger
	"Truncate this file to the given position."
"
	<primitive: 'primitiveFileTruncate' module: 'FilePlugin'>
	self primitiveFailed
"
self error: 'not yet implmented'
%

category: 'primitives-file'
classmethod: File
write: aGsFile from: stringOrByteArray startingAt: startIndex count: count
	"Write count bytes onto this file from the given string or byte array starting at the given index. 	Answer the number of bytes written."

	| written |
	written := (startIndex = 1 and: [ count = stringOrByteArray size])
		ifTrue: [ aGsFile nextPutAll: stringOrByteArray ]
		ifFalse: [ aGsFile nextPutAll: (stringOrByteArray copyFrom: startIndex to: startIndex + count - 1) ].
	written ifNil: [ self error: 'failed write' ].
	^ written
%

!		Instance methods for 'File'

category: 'printing'
method: File
asString
  "Needed for topaz debugging"
  ^ name
%

category: 'accessing'
method: File
basename
	^self name
%

category: 'open/close'
method: File
basicOpenForWrite: writeMode 
	"Open the file with the given name. If writeMode is true, allow writing, otherwise open the file in read-only mode."

	"writeMode - #read, #append, #write"

	^ self class open: name writable: writeMode
%

category: 'testing'
method: File
checkDoesNotExist
	"This method implements a backwards compatible logic to #newFileNamed:
	
	If the file does not exist, this method has no effect, and returns self.
	
	If the file exists, it will throw a FileAlreadyExistsException.
	If unhandled, this will open a pop-up asking the user to enter a new name or to override the existing file.
	In this case, this method returns a new file with the options selected by the user.
	"
	self exists ifTrue: [
		^ FileAlreadyExistsException signalOnFile: self ]
%

category: 'open/close'
method: File
delete
	"We retries with GC because in some platforms open files cannot be open"
	self class deleteFile: name.
	self exists
		ifTrue: [ (CannotDeleteFileException new messageText: 'Could not delete file ' , name,'. Check the file is not open.') signal ].
%

category: 'testing'
method: File
exists

	| handle |
	"We open it for read. If the returned handle is nil, the file could not be opened"
	handle := self basicOpenForWrite: #read.
	handle ifNil: [^ false].
	self class close: handle.
	^ true
%

category: 'instance creation'
method: File
name

	^ name
%

category: 'instance creation'
method: File
named: fileName

	name := fileName
%

category: 'open/close'
method: File
openForAppend

	| stream |
	stream := self openForWrite: #append.
	^ stream setToEnd; yourself
%

category: 'open/close'
method: File
openForRead

	^ self openForWrite: #read
%

category: 'open/close'
method: File
openForWrite

	^ self openForWrite: #write
%

category: 'open/close'
method: File
openForWrite: writeMode
	"Open the file with the given name. If writeMode is true, allow writing, otherwise open the file in read-only mode."

	"writeMode - #read, #append, #write"

	| fileHandle |
	fileHandle := self basicOpenForWrite: writeMode.
	fileHandle ifNil: [
		"Opening the file failed.
		If the file does not exist, we throw an explicit FileDoesNotExistException.
		Otherwise, we throw a generic FileException."
		self exists
			ifFalse: [ ^ FileDoesNotExistException signalWithFile: self writeMode: writeMode == #write ].
		CannotDeleteFileException signal: name
	].

	^ BinaryFileStream handle: fileHandle file: self forWrite: writeMode ~~ #read
%

category: 'streaming'
method: File
readStream
	
	^ self openForRead
%

category: 'streaming'
method: File
readStreamDo: aBlock
	| stream |
	stream := self readStream.
	^ [ aBlock value: stream ]
		ensure: [ stream close ]
%

category: 'accessing'
method: File
size

	^ self readStreamDo: [ :stream | stream size ]
%

category: 'streaming'
method: File
writeStream

	^ self openForWrite
%

category: 'streaming'
method: File
writeStreamDo: aBlock
	| stream |
	stream := self writeStream.
	^ [ aBlock value: stream ]
		ensure: [ stream close ]
%

! Class implementation for 'FileSystem'

!		Class methods for 'FileSystem'

category: 'instance creation'
classmethod: FileSystem
store: aStore
	^ self basicNew
		initializeWithStore: aStore;
		yourself
%

!		Instance methods for 'FileSystem'

category: 'navigating'
method: FileSystem
* anObject
	"Return a relative reference."
	
	^ self referenceTo:( Path * anObject)
%

category: 'navigating'
method: FileSystem
/ anObject
	"Return the absolute reference obtained by resolving anObject against the
	root of this filesystem."
	
	^ self root / anObject
%

category: 'comparing'
method: FileSystem
= other
	^ self species = other species and: [self store = other store]
%

category: 'public'
method: FileSystem
binaryReadStreamOn: aResolvable
	"Resolve the argument into an absolute path and open a file handle on the file
	at that path. Ask the handle to give us a read stream for reading the file."

	^ (self open: aResolvable writable: false) binaryReadStream.
%

category: 'public'
method: FileSystem
binaryWriteStreamOn: aResolvable
	"Resolve the argument into an absolute path and open a file handle on the file
	at that path. Ask the handle to give us a binary write stream for reading the file."

	^ (self open: aResolvable writable: true) binaryWriteStream.
%

category: 'public'
method: FileSystem
checkName: aString fixErrors: fixErrors
	^ store checkName: aString fixErrors: fixErrors
%

category: 'public-enumerating'
method: FileSystem
childNamesAt: aResolvable
	^ Array streamContents: [ :out | 
		self childNamesAt: aResolvable do: [ :path|
			out nextPut: path ]].
%

category: 'public-enumerating'
method: FileSystem
childNamesAt: aResolvable do: aBlock
	| path |
	path := self resolve: aResolvable.
	store
		directoryAt: path
		ifAbsent: [ store signalDirectoryDoesNotExist: path ]
		nodesDo: [ :entry | 
			aBlock value: (store basenameFromEntry: entry) ]
%

category: 'public-enumerating'
method: FileSystem
childrenAt: aResolvable
	^ Array streamContents: [ :out | 
		self childrenAt: aResolvable do: [ :path|
			out nextPut: path ]].
%

category: 'public-enumerating'
method: FileSystem
childrenAt: aResolvable do: aBlock
	| path |
	path := self resolve: aResolvable.
	store
		directoryAt: path
		ifAbsent: [ store signalDirectoryDoesNotExist: path ]
		nodesDo: [ :entry | 
			aBlock value: path / (store basenameFromEntry: entry) ]
%

category: 'public'
method: FileSystem
close
	store close
%

category: 'public'
method: FileSystem
copy: sourcePath ifAbsent: absentBlock to: destinationPath ifPresent: presentBlock
	"Copy the file referenced as sourcePath to the destination referred as destPath. Perform associate actions in case of problems."

	store
		copy: (self resolve: sourcePath)
		ifAbsent: absentBlock
		to: (self resolve: destinationPath)
		ifPresent: presentBlock
		fileSystem: self
%

category: 'public'
method: FileSystem
copy: sourcePath to: destPath
	"Copy the file referenced as sourcePath to the destination referred as destPath.  
	If there is no file at sourcePath, raise FileDoesNotExist.
	If destPath is a file, raise FileExists."
	
	self
		copy: sourcePath
		ifAbsent: [ store signalFileDoesNotExist: sourcePath ]
		to: destPath
		ifPresent: [ store signalFileExists: destPath ]
%

category: 'public'
method: FileSystem
copy: aPath toReference: destinationReference

	^self = destinationReference fileSystem
		ifTrue: [ self copy: aPath to: destinationReference resolve path ]
		ifFalse: [ self copy: aPath toRemote: destinationReference ]
%

category: 'public'
method: FileSystem
copy: aPath toRemote: destRef
	| inputStream path |
	path := self resolve: aPath.
	[ inputStream := self binaryReadStreamOn: path.
	inputStream ifNil: [ store signalFileDoesNotExist: path ].
	destRef fileSystem copyFrom: inputStream to: destRef path ]
		ensure: [ inputStream ifNotNil: [ inputStream close ] ]
%

category: 'public'
method: FileSystem
copyAndDelete: sourcePath to: destination
	"Copy the file referenced as sourcePath to the destination referred as destPath.  
	If there is no file at sourcePath, raise FileDoesNotExist.
	If destPath is a file, raise FileExists.
	If an error occurs during the operation, try and roll back to the original state."
	
	[
		self copy: sourcePath toReference: destination.
		self delete: sourcePath.
	] on: Error do: [ :error |
		destination delete.
		error signal.
	]
%

category: 'private'
method: FileSystem
copyFrom: inputStream to: destPath
	| buffer out |
	out := nil.
	(self exists: destPath)
		ifTrue: [ store signalFileExists: destPath ].
	^ [ 
	out := self binaryWriteStreamOn: destPath.
	buffer := ByteArray new: 1024.
	[ inputStream atEnd ]
		whileFalse: [ 
			buffer := inputStream nextInto: buffer.
			out nextPutAll: buffer ]] ensure: [ out ifNotNil: [ out close ]]
%

category: 'public'
method: FileSystem
createDirectory: aResolvable
	"Resolve aResolvable into an absolute path, then as the store to create a directory there. 
	The store is expected to raise an exception if it cannot do so."

	^ store createDirectory: (self resolve: aResolvable)
%

category: 'public'
method: FileSystem
creationTimeOf: aResolvable
	"Returns the creation date of aResolvable"

	^ store creationTimeOf: (self resolve: aResolvable)
%

category: 'public'
method: FileSystem
delete: aResolvable
	store delete: (self resolve: aResolvable)
%

category: 'public'
method: FileSystem
delimiter
	"Return path delimiter used by this filesystem."

	^ store delimiter
%

category: 'public-enumerating'
method: FileSystem
directoriesAt: aResolvable
	^ Array streamContents: [ :out | 
		self directoriesAt: aResolvable do: [ :path|
			out nextPut: path ]].
%

category: 'public-enumerating'
method: FileSystem
directoriesAt: aResolvable do: aBlock
	| path |
	path := self resolve: aResolvable.
	store
		directoryAt: path
		ifAbsent: [ store signalDirectoryDoesNotExist: path ]
		directoryNodesDo: [ :entry | 
			aBlock value: path / (store basenameFromEntry: entry) ]
%

category: 'public-enumerating'
method: FileSystem
directoryNamesAt: aResolvable
	^ Array streamContents: [ :out | 
		self directoryNamesAt: aResolvable do: [ :name|
			out nextPut: name ]].
%

category: 'public-enumerating'
method: FileSystem
directoryNamesAt: aResolvable do: aBlock
	| path |
	path := self resolve: aResolvable.
	store
		directoryAt: path
		ifAbsent: [ store signalDirectoryDoesNotExist: path ]
		directoryNodesDo: [ :entry | 
			aBlock value: (store basenameFromEntry: entry) ]
%

category: 'public'
method: FileSystem
ensureCreateDirectory: aResolvable
	"Resolve the argument to an absolute path, then ask the store to make
	sure that all the directories contained in the argument path exist or are created."
	
	store ensureCreateDirectory: (self resolve: aResolvable)
%

category: 'public-enumerating'
method: FileSystem
entriesAt: aResolvable
	^ Array
		streamContents: [ :out | 
			self entriesAt: aResolvable do: [ :entry | out nextPut: entry ]
		]
%

category: 'public-enumerating'
method: FileSystem
entriesAt: aResolvable do: aBlock
	^ self 
		entriesAt: aResolvable 
		ifAbsent: [ store signalDirectoryDoesNotExist: ( self resolve: aResolvable) ]
		do: aBlock 
%

category: 'public-enumerating'
method: FileSystem
entriesAt: aResolvable ifAbsent: absentBlock do: aBlock
	| path entry aFilesystem |
	path := self resolve: aResolvable.
	aFilesystem := self.
	store
		directoryAt: path
		ifAbsent: [ ^ absentBlock value ]
		nodesDo: [ :node | 
			entry := store entryFromNode: node path: path for: aFilesystem.
			aBlock value: entry ]
%

category: 'public'
method: FileSystem
entryAt: aResolvable
	| path |
	path := self resolve: aResolvable.
	^ store
		nodeAt: path
		ifPresent: [ :node | store entryFromNode: node fileSystem: self path: path ]
		ifAbsent: [ store signalFileDoesNotExist: path ]
%

category: 'public'
method: FileSystem
exists: aResolvable
	"Resolve the argument, and answer true if the there is
	a file or directory at that path, false if there is not."
	
	^ store exists: (self resolve: aResolvable)
%

category: 'public'
method: FileSystem
extensionDelimiter
	^ $.
%

category: 'public-enumerating'
method: FileSystem
fileNamesAt: aResolvable
	^ Array streamContents: [ :out | 
		self fileNamesAt: aResolvable do: [ :path|
			out nextPut: path ]].
%

category: 'public-enumerating'
method: FileSystem
fileNamesAt: aResolvable do: aBlock
	| path |
	path := self resolve: aResolvable.
	store
		directoryAt: path
		ifAbsent: [ store signalDirectoryDoesNotExist: path ]
		fileNodesDo: [ :entry | 
			aBlock value: (store basenameFromEntry: entry) ]
%

category: 'public-enumerating'
method: FileSystem
filesAt: aResolvable
	^ Array streamContents: [ :out | 
		self filesAt: aResolvable do: [ :path|
			out nextPut: path ]].
%

category: 'public-enumerating'
method: FileSystem
filesAt: aResolvable do: aBlock
	| path |
	path := self resolve: aResolvable.
	store
		directoryAt: path
		ifAbsent: [ store signalDirectoryDoesNotExist: path ]
		fileNodesDo: [ :entry | 
			aBlock value: path / (store basenameFromEntry: entry) ]
%

category: 'printing'
method: FileSystem
forReferencePrintOn: aStream
	store forReferencePrintOn: aStream
%

category: 'public-testing'
method: FileSystem
hasChildren: aResolvable
	"Returns whether aResolvable has children."
	store directoryAt: (self resolve: aResolvable)
			ifAbsent: [ ^false ]
			nodesDo:  [ :node | ^true ].
	^false
%

category: 'public-testing'
method: FileSystem
hasDirectories: aResolvable
	self
		entriesAt: aResolvable
		ifAbsent: [  ^ false ]
		do: [ :entry | 
			entry isDirectory ifTrue: [ ^true ] ].
	^false
%

category: 'public-testing'
method: FileSystem
hasFiles: aResolvable
	self
		entriesAt: aResolvable
		ifAbsent: [  ^ false ]
		do: [ :entry | entry isFile ifTrue: [ ^true ] ].
	^false
%

category: 'comparing'
method: FileSystem
hash
	^ store hash
%

category: 'initialize-release'
method: FileSystem
initializeWithStore: aStore
	store := aStore
%

category: 'public-testing'
method: FileSystem
isCaseSensitive
	^ self store isCaseSensitive
%

category: 'public-testing'
method: FileSystem
isDirectory: aResolvable
	"Resolve the argument, and answer true if the result refers
	to a directory, false if it refers to a file or doesn't exist."

	^ store isDirectory: (self resolve: aResolvable)
%

category: 'public-testing'
method: FileSystem
isFile: aResolvable
	"Resolve the argument, and answer true if the result refers
	to a file, false if it refers to a directory or doesn't exist."

	^ store isFile: (self resolve: aResolvable)
%

category: 'public-testing'
method: FileSystem
isReadable: aResolvable
	"Resolve the argument, and answer true if the there is
	a file or directory that can be read from."
	
	^ (self permissions: aResolvable) isReadable
%

category: 'public-testing'
method: FileSystem
isSymlink: aResolvable
	"Resolve the argument, and answer true if the result refers
	to a directory, false if it refers to a file or doesn't exist."

	^ store isSymlink: (self resolve: aResolvable)
%

category: 'public-testing'
method: FileSystem
isWritable: aResolvable
	"Resolve the argument, and answer true if the there is
	a file that can be written to or directory that can be changed."
	
	^  (self permissions: aResolvable) isWritable
%

category: 'public'
method: FileSystem
modificationTime: aResolvable
	"Returns the date of the last modification of aResolvable"

	^ store modificationTimeOf: (self resolve: aResolvable)
%

category: 'public'
method: FileSystem
modificationTimeOf: aResolvable
	"Returns the last date of modification of aResolvable"

	^ store modificationTimeOf: (self resolve: aResolvable)
%

category: 'public'
method: FileSystem
move: sourcePath to: destination
	"Move the file /directory referenced as sourcePath to the destination referred as destPath.  
	If there is no file at sourcePath, raise FileDoesNotExist.
	If destPath is a file, raise FileExists.
	If destPath is a directory, move the sourcePath in to the directory"

	| fullDestination |

	destination isFile ifTrue: [ FileExists signalWith: destination ].
	destination isDirectory
		ifTrue: [ fullDestination := destination / sourcePath basename ]
		ifFalse: [ fullDestination := destination ].
	self = destination fileSystem ifTrue: 
	[
		"Ideally we would test whether the source and destination are on the same filesystem from the OSs perspective.
		Since we can't do that, just try rename, and if that fails, copy and delete."
		[ self rename: sourcePath to: fullDestination resolve path ]
			on: Error
			do: [ :error | self copyAndDelete: sourcePath to: fullDestination ].
	] ifFalse:
		[ self copyAndDelete: sourcePath to: fullDestination ].
	^fullDestination
%

category: 'public'
method: FileSystem
open
	"Some kinds of filesystems need to open connections to external resources. Does nothing by default."
	
	store open
%

category: 'public'
method: FileSystem
open: aResolvable writable: aBoolean 
	"Resolve aResolvable into an absolute path, then ask the store to open the file at
	that path using the specified access mode."
	
	| path |
	path := self resolve: aResolvable.
	^ store handleClass 
		open: (FileReference fileSystem: self path: path) 
		writable: aBoolean
		
%

category: 'delegated'
method: FileSystem
openFileStream: aResolvable writable: aBoolean
	^ store 
		openFileStream: (self resolve: aResolvable) 
		writable: aBoolean
%

category: 'private'
method: FileSystem
openStreamDescription: aResolvable writable: writeMode
	"I am  a helper method to delegate basicOpen:writable: to the store.
	 I am called from FileSystemHandle implementations."
	
	"writeMode - #read, #append, #write"

	| path |
	
	path := self resolve: aResolvable.
	^ store basicOpen: path writable: writeMode
%

category: 'converting'
method: FileSystem
pathFromObject: anObject 
	^ anObject asPathWith: self
%

category: 'converting'
method: FileSystem
pathFromString: aString
	^ store pathFromString: aString
%

category: 'public'
method: FileSystem
permissions: aResolvable
	"Resolve the argument and return the Permissions for this file or directory "

	^ store permissions: (self resolve: aResolvable)
%

category: 'printing'
method: FileSystem
printPath: aPath on: aStream
	store printPath: aPath on: aStream
%

category: 'public'
method: FileSystem
readStreamOn: aResolvable
	"Resolve the argument into an absolute path and open a file handle on the file
	at that path. Ask the handle to give us a read stream for reading the file."

	^ (self open: aResolvable writable: false) readStream.
%

category: 'public'
method: FileSystem
referenceTo: aResolvable 
	"Answer a reference to the argument from the context of the receiver filesystem.  	
		Example: Filesystem disk referenceTo: 'plonk.taz'"

	^ FileReference 
		fileSystem: self
		path: (self pathFromObject: aResolvable)
%

category: 'public'
method: FileSystem
rename: sourcePath ifAbsent: aBlock to: destPath ifPresent: pBlock
	"Rename the file referenced as sourcePath to the destination referred as destPath. 
	Perform associate actions in case of problems."
	
	| source destination |
	source := self resolve: sourcePath.
	destination := self resolve: destPath.
	store
		rename: source
		ifAbsent: aBlock
		to: destination
		ifPresent: pBlock
		fileSystem: self.
	^ destination
%

category: 'public'
method: FileSystem
rename: sourcePath to: destName
	"Rename the file referenced as sourcePath to destPath.  Raise exceptions 
	FileExists or FileDoesNotExist  if the operation fails"
	
	^ self
		rename: sourcePath
		ifAbsent: [store signalFileDoesNotExist: sourcePath]
		to: destName
		ifPresent: [store signalFileExists: destName]
%

category: 'public'
method: FileSystem
resolve: aResolvable
	^ aResolvable asResolvedBy: self
%

category: 'navigating'
method: FileSystem
resolvePath: aPath
	"Return a path where the argument is resolved in the context of the
	receiver. The behavior is similar to the one of a command line.
		> cd /a/b/c
		> cd b
		The shell will attempt to make /a/b/c/b the current directory. "

	^ self workingDirectoryPath resolve: aPath
%

category: 'navigating'
method: FileSystem
resolveReference: aReference
	^ aReference fileSystem = self ifTrue:
		[self workingDirectoryPath resolvePath: aReference path]
%

category: 'navigating'
method: FileSystem
resolveString: aString
	"Returns the root of the receiver filesystem, i.e. / on unix"
	
	^ self workingDirectoryPath resolvePath: (store pathFromString: aString)
%

category: 'accessing'
method: FileSystem
root
	"Returns the root of the receiver filesystem, i.e. / on unix"
	^ self referenceTo: Path root
%

category: 'accessing'
method: FileSystem
separator
	"Return path separator used by this filesystem."

	^ store separator
%

category: 'public'
method: FileSystem
sizeOf: aResolvable
	"Resolve the argument and return the size for this file or directory "

	^ store sizeOf: (self resolve: aResolvable)
%

category: 'accessing'
method: FileSystem
store
	^ store
%

category: 'converting'
method: FileSystem
stringFromPath: aPath
	^ store stringFromPath: aPath
%

category: 'accessing'
method: FileSystem
workingDirectory
	"Returns a reference to the directory from where the image was launched"

	^ self referenceTo: self workingDirectoryPath
%

category: 'accessing'
method: FileSystem
workingDirectoryPath
	^ store defaultWorkingDirectory
%

category: 'public'
method: FileSystem
writeStreamOn: aResolvable
	"Open a write stream on the file referred by the argument. It can be a string or a path"

	^ (self open: aResolvable writable: true) writeStream.
%

! Class implementation for 'FileSystemDirectoryEntry'

!		Class methods for 'FileSystemDirectoryEntry'

category: 'accessing'
classmethod: FileSystemDirectoryEntry
allPosixPermissions 
	^8r777
%

category: 'instance creation'
classmethod: FileSystemDirectoryEntry
fileSystem: aFilesystem path: aPath creation: cTime modification: mTime isDir: aBoolean size: anInteger posixPermissions: posixNumber isSymlink: symlinkBooleam
	"Create a directory entry given a filesystem and a path in such filesystem. In addition, the creation and modification time are required as well as a boolean that indicates whether the entry is a folder or a file and its size."

	^ self 
		reference: (aFilesystem referenceTo: aPath)
		creation: cTime
		modification: mTime
		isDir: aBoolean
		size: anInteger
		posixPermissions: posixNumber
		isSymlink: symlinkBooleam
%

category: 'instance creation'
classmethod: FileSystemDirectoryEntry
reference: ref creation: cTime modification: mTime isDir: aBoolean size: anInteger posixPermissions: posixNumber isSymlink: symlinkBoolean
	"Create a directory entry for the file reference ref, with the creation time, cTime, the modification time, mTime. aBoolean indicates if the entry represents a directory or a file of size given by anInteger"
	
	^ self basicNew
		initializeWithRef: ref
		creation: cTime
		modification: mTime
		isDir: aBoolean
		size: anInteger
		posixPermissions: posixNumber
		isSymlink: symlinkBoolean
%

!		Instance methods for 'FileSystemDirectoryEntry'

category: 'converting'
method: FileSystemDirectoryEntry
asFileReference
	^ reference
%

category: 'accessing'
method: FileSystemDirectoryEntry
basename

	^ reference basename
%

category: 'accessing'
method: FileSystemDirectoryEntry
creation
	^ self creationTime 
%

category: 'accessing'
method: FileSystemDirectoryEntry
creationSeconds
	"Return the creation date and time of the entry receiver in seconds."
		
	^ creation asSeconds
%

category: 'accessing'
method: FileSystemDirectoryEntry
creationTime
	"Return the creation date and time of the entry receiver."
	
	^ creation
%

category: 'delegate'
method: FileSystemDirectoryEntry
extension
	^ reference extension
%

category: 'delegate'
method: FileSystemDirectoryEntry
fullName
	^ reference fullName
%

category: 'initialize-release'
method: FileSystemDirectoryEntry
initializeWithRef: ref 
	creation: cTime 
	modification: mTime 
	isDir: directoryBoolean
	size: bytes 
	posixPermissions: posixNumber 
	isSymlink: symlinkBoolean
	
	reference := ref.
	creation := cTime.
	modification := mTime.
	isDirectory := directoryBoolean.
	size := bytes.
	posixPermissions := posixNumber.
	isSymlink := symlinkBoolean.
%

category: 'testing'
method: FileSystemDirectoryEntry
isDirectory
	"Return whether the receiver is a directory"
	
	^ isDirectory
%

category: 'testing'
method: FileSystemDirectoryEntry
isFile
	"Return whether the receiver is a file"
	
	^ isDirectory not
%

category: 'testing'
method: FileSystemDirectoryEntry
isSymlink 
	^isSymlink
%

category: 'accessing'
method: FileSystemDirectoryEntry
modification
	^ self modificationTime 
%

category: 'accessing'
method: FileSystemDirectoryEntry
modificationSeconds
	"Return the modification date and time of the entry receiver in seconds."
	^ modification
%

category: 'accessing'
method: FileSystemDirectoryEntry
modificationTime
	"Return the modification date and time of the entry receiver."

	^  modification
%

category: 'accessing'
method: FileSystemDirectoryEntry
name
    ^ self basename
%

category: 'delegate'
method: FileSystemDirectoryEntry
pathSegments
	^ reference pathSegments
%

category: 'accessing'
method: FileSystemDirectoryEntry
permissions 
	^self posixPermissions
		ifNotNil: [ FileSystemPermission posixPermissions: self posixPermissions ]
%

category: 'accessing'
method: FileSystemDirectoryEntry
posixPermissions 
	^posixPermissions
%

category: 'printing'
method: FileSystemDirectoryEntry
printOn: aStream

	aStream nextPutAll: 'DirectoryEntry: '.
	reference ifNotNil: [:ref | aStream nextPutAll: reference printString].
%

category: 'delegate'
method: FileSystemDirectoryEntry
readStream
	^ reference readStreamPortable
%

category: 'delegate'
method: FileSystemDirectoryEntry
readStreamPortable
	^ reference readStreamPortable
%

category: 'accessing'
method: FileSystemDirectoryEntry
reference
	^ reference
%

category: 'accessing'
method: FileSystemDirectoryEntry
size
	"Returns the receiver size"
	^ size
%

category: 'delegate'
method: FileSystemDirectoryEntry
writeStream
	^ reference writeStream
%

! Class implementation for 'FileSystemGuide'

!		Class methods for 'FileSystemGuide'

category: 'instance creation'
classmethod: FileSystemGuide
for: aVisitor
	^ self basicNew initializeWithVisitor: aVisitor
%

category: 'instance creation'
classmethod: FileSystemGuide
show: aReference to: aVisitor
	^ (self for: aVisitor) show: aReference
%

category: 'instance creation'
classmethod: FileSystemGuide
show: aReference to: aVisitor selecting: aBlock
	^ (self for: aVisitor)
		selectChildren:  aBlock;
		show: aReference
%

!		Instance methods for 'FileSystemGuide'

category: 'initialization'
method: FileSystemGuide
initialize

	work := OrderedCollection new
%

category: 'initialize-release'
method: FileSystemGuide
initializeWithVisitor: aVisitor
	self initialize.
	visitor := aVisitor.
	
%

category: 'removing'
method: FileSystemGuide
pop
	^ work removeLast
%

category: 'adding'
method: FileSystemGuide
push: anObject
	work add: anObject
%

category: 'showing'
method: FileSystemGuide
pushAll: aCollection 
	aCollection do: [ :ea | self push: ea ]
%

category: 'accessing'
method: FileSystemGuide
selectChildren
	^ selectChildren
%

category: 'accessing'
method: FileSystemGuide
selectChildren: aBlock
	"With this block you can control how the guide spreads over directories.
	Example: 
		self selectChildren: [ :parentEntry | parentEntry isSymlink not ].
		This will prevent the outer visitor to see any children of symlinked directories.
		
	Since the guides essentially rearrange the files visited controlling which children
	you see is the main concern of the guide. All the other visiting aspects can be 
	controlled in the visitor."
	selectChildren := aBlock
%

category: 'testing'
method: FileSystemGuide
shouldVisitChildrenOf: anEntry
	^ selectChildren 
		ifNil: [ true ]
		ifNotNil: [ selectChildren cull: anEntry ]
%

category: 'showing'
method: FileSystemGuide
show: aReference
	self subclassResponsibility
%

category: 'accessing'
method: FileSystemGuide
top
	^ work removeFirst
%

category: 'showing'
method: FileSystemGuide
whileNotDoneDo: aBlock
	[ work isEmpty ] whileFalse: [ aBlock value ]
%

! Class implementation for 'BreadthFirstGuide'

!		Instance methods for 'BreadthFirstGuide'

category: 'showing'
method: BreadthFirstGuide
show: aReference 
	self push: aReference entry.
	self whileNotDoneDo: [ self visitNextEntry: self top ]
%

category: 'showing'
method: BreadthFirstGuide
visitNextEntry: entry
		
	entry isFile 
		ifTrue: [ ^ visitor visitFile: entry ].
	
	visitor visitDirectory: entry.
	
	(self shouldVisitChildrenOf: entry)
		ifTrue: [ self pushAll: entry reference entries ].
%

! Class implementation for 'PostorderGuide'

!		Instance methods for 'PostorderGuide'

category: 'showing'
method: PostorderGuide
pushTraverse: aReference 
	self push: (Message 
				selector: #traverse:
				argument: aReference)
%

category: 'showing'
method: PostorderGuide
pushVisit: aReference 
	self push: (Message 
				selector: #visit:
				argument: aReference)
%

category: 'showing'
method: PostorderGuide
show: aReference 
	self pushTraverse: aReference entry.
	self whileNotDoneDo: [ self pop sendTo: self ]
%

category: 'showing'
method: PostorderGuide
traverse: anEntry 
		
	self pushVisit: anEntry.
	
	anEntry isDirectory ifTrue: [ 
		(self shouldVisitChildrenOf: anEntry)
			ifFalse: [ ^ self ].
		anEntry reference entries reverseDo: [ :each | 
			self pushTraverse: each ]]
%

category: 'showing'
method: PostorderGuide
visit: anEntry
	anEntry isDirectory
		ifTrue: [ visitor visitDirectory: anEntry ]
		ifFalse: [ visitor visitFile: anEntry ]
%

! Class implementation for 'PreorderGuide'

!		Instance methods for 'PreorderGuide'

category: 'showing'
method: PreorderGuide
pushAll: aCollection 
	aCollection reverseDo: [ :each | work add: each ]
%

category: 'showing'
method: PreorderGuide
show: aReference
	self push: aReference entry.
	self whileNotDoneDo: [ self visitNextEntry: self pop ]
%

category: 'showing'
method: PreorderGuide
visitNextEntry: entry
	
	entry isFile
		ifTrue: [ visitor visitFile: entry ]
		ifFalse: [ 
			visitor visitDirectory: entry.
			(self shouldVisitChildrenOf: entry)
				ifTrue: [ self pushAll: entry reference entries ]]
%

! Class implementation for 'FileSystemHandle'

!		Class methods for 'FileSystemHandle'

category: 'instance creation'
classmethod: FileSystemHandle
on: aReference writable: aBoolean
	^ self new setReference: aReference writable: aBoolean
%

category: 'instance creation'
classmethod: FileSystemHandle
open: aReference writable: aBoolean
	^ (self on: aReference writable: aBoolean) open
%

!		Instance methods for 'FileSystemHandle'

category: 'public'
method: FileSystemHandle
at: index
	| buffer |
	buffer := ByteArray new: 1.
	self at: index read: buffer startingAt: 1 count: 1.
	^ buffer at: 1
%

category: 'public'
method: FileSystemHandle
at: index put: anObject
	| buffer |
	buffer := ByteArray with: (anObject isCharacter
		ifTrue: [ anObject codePoint ]
		ifFalse: [ anObject ]).
	self at: index write: buffer startingAt: 1 count: 1.
	
%

category: 'public'
method: FileSystemHandle
at: offset read: buffer startingAt: start count: count
	self subclassResponsibility
%

category: 'public'
method: FileSystemHandle
at: offset write: buffer startingAt: start count: count
	self subclassResponsibility
%

category: 'private'
method: FileSystemHandle
basicOpen
	"get the raw stream description from the filesystem's store"
	^ self fileSystem 
		openStreamDescription: reference path
		writable: (writable ifTrue: [ #write ] ifFalse: [ #read ])
%

category: 'streams'
method: FileSystemHandle
binaryReadStream
	
	self subclassResponsibility 
%

category: 'streams'
method: FileSystemHandle
binaryWriteStream
	
	self subclassResponsibility 
%

category: 'public'
method: FileSystemHandle
close
	self subclassResponsibility
%

category: 'public'
method: FileSystemHandle
ensureClosed
	reference exists ifTrue: [self close]
%

category: 'accessing'
method: FileSystemHandle
fileSystem
	^ reference fileSystem 
%

category: 'public'
method: FileSystemHandle
flush
	self subclassResponsibility
%

category: 'accessing'
method: FileSystemHandle
fullName
	^ reference fullName
%

category: 'testing'
method: FileSystemHandle
isOpen
	self subclassResponsibility
%

category: 'testing'
method: FileSystemHandle
isWritable
	^ writable
%

category: 'public'
method: FileSystemHandle
open
	self subclassResponsibility
%

category: 'accessing'
method: FileSystemHandle
reference
	^ reference
%

category: 'public'
method: FileSystemHandle
reopen
	self close.
	self open
%

category: 'initialize-release'
method: FileSystemHandle
setReference: aReference writable: aBoolean
	reference := aReference resolve.
	writable := aBoolean
%

category: 'public'
method: FileSystemHandle
sync
	self subclassResponsibility
%

category: 'public'
method: FileSystemHandle
truncateTo: anInteger
	self subclassResponsibility
%

! Class implementation for 'FileHandle'

!		Class methods for 'FileHandle'

category: 'class initialization'
classmethod: FileHandle
startUp: resuming
	"This functionality is disabled for now, to avoid doing a lot of processing at
	image start up. To reenable, add this class to the start up list."
	
	resuming ifTrue: [self allInstancesDo: [:ea | ea startUp]]
%

!		Instance methods for 'FileHandle'

category: 'public'
method: FileHandle
assureOpen
	"Compatibility method to make the FileHandle Tests pass"
	self isOpen ifFalse: [ id := self basicOpen ].
%

category: 'public'
method: FileHandle
at: index read: buffer startingAt: start count: count
	
	self flag: 'TODO: remove once FileHandles are really used!'.
	self assureOpen.
	
	^ File 
		setPosition: id to: index - 1;
		read: id into: buffer startingAt: start count: count
%

category: 'public'
method: FileHandle
at: index write: buffer startingAt: start count: count
	
	self flag: 'TODO: remove once FileHandles are really used!'.
	self assureOpen.
	
	File 
		setPosition: id to: index - 1;
		write: id from: buffer startingAt: start count: count
%

category: 'public'
method: FileHandle
binaryReadStream
	^ ZnBufferedReadStream on: (File named: reference fullName) readStream
%

category: 'public'
method: FileHandle
binaryWriteStream
	^ (File named: reference fullName) writeStream
%

category: 'public'
method: FileHandle
close
	File close: id.
	id := nil
%

category: 'finalization'
method: FileHandle
finalize
	File close: id
%

category: 'public'
method: FileHandle
flush
	
	self flag: 'TODO: remove once FileHandles are really used!'.
	self assureOpen.
	
	File flush: id
%

category: 'testing'
method: FileHandle
isOpen
	^ (File sizeOrNil: id) notNil
%

category: 'public'
method: FileHandle
open
	self flag: 'TODO: for now we solely rely on the old FileStreams'
	"id := self basicOpen.
	id ifNil: 	[
		reference exists ifFalse: [FileDoesNotExist signalWith: reference].
		self error: 'Unable to open file ' , reference printString]"
%

category: 'public'
method: FileHandle
size
	
	self flag: 'TODO: remove once FileHandles are really used!'.
	self assureOpen.
	
	^ File sizeOf: id
%

category: 'private'
method: FileHandle
startUp
	"This functionality is disabled for now, to avoid doing lots of processing
	on start up."
	
	"We're starting up in a new OS process, so the file id will be invalid.
	Try to reopen the file, but fail silently: just leave the id as nil. #isOpen will
	answer false, and we'll raise an error if anyone tries to do IO."
	
	self basicOpen
%

category: 'public'
method: FileHandle
streamError
	reference exists
		ifFalse: [FileDoesNotExistException signalWith: reference].
	self error: 'Unable to open file ' , reference printString
%

category: 'public'
method: FileHandle
sync
	
	self flag: 'TODO: remove once FileHandles are really used!'.
	self assureOpen.
	
	File sync: id
%

category: 'public'
method: FileHandle
truncateTo: anInteger
	File setPosition: id to: anInteger.
	File truncate: id to: anInteger.
	self reopen
%

! Class implementation for 'MemoryHandle'

!		Instance methods for 'MemoryHandle'

category: 'public'
method: MemoryHandle
at: index
	^ entry at: index
%

category: 'public'
method: MemoryHandle
at: index put: anObject
	^ entry at: index put: anObject
%

category: 'public'
method: MemoryHandle
at: index read: aCollection startingAt: start count: count 
	^ entry at: index read: aCollection startingAt: start count: count 
%

category: 'public'
method: MemoryHandle
at: first write: aCollection startingAt: start count: count 
	writable ifFalse: [ self primitiveFailed ].
	entry at: first write: aCollection startingAt: start count: count.
%

category: 'streams'
method: MemoryHandle
binaryReadStream

	^ entry binaryReadStream
%

category: 'streams'
method: MemoryHandle
binaryWriteStream
	
	^ entry binaryWriteStream
%

category: 'public'
method: MemoryHandle
close
	self isOpen ifFalse: [ ^ self ].
	self truncate.
	entry := nil.
%

category: 'stream-protocol'
method: MemoryHandle
copyFrom: from to: position
	^ entry copyFrom: from to: position
%

category: 'public'
method: MemoryHandle
flush
	self truncate
%

category: 'private'
method: MemoryHandle
grow
	entry grow
%

category: 'stream-protocol'
method: MemoryHandle
grownBy: length
	entry grownBy: length
%

category: 'testing'
method: MemoryHandle
isOpen
	^ entry notNil
%

category: 'public'
method: MemoryHandle
open
	entry := self basicOpen.
%

category: 'accessing'
method: MemoryHandle
size
	"return the size for the interna"
	^ entry internalSize
%

category: 'public'
method: MemoryHandle
sync
	self flush
%

category: 'public'
method: MemoryHandle
truncate
	entry truncate
%

category: 'public'
method: MemoryHandle
truncateTo: anInteger
	entry truncateTo: anInteger
%

! Class implementation for 'FileSystemPermission'

!		Class methods for 'FileSystemPermission'

category: 'instance creation'
classmethod: FileSystemPermission
default
	^ self posixPermissions: 8r777
%

category: 'instance creation'
classmethod: FileSystemPermission
new 
	self error: 'Should not be called. Use #posixPermission: instead'
%

category: 'instance creation'
classmethod: FileSystemPermission
posixPermissions: aNumber
	^self basicNew 
		initialize: aNumber;
		yourself
%

!		Instance methods for 'FileSystemPermission'

category: 'comparing'
method: FileSystemPermission
< other
	^ posixPermission < other posixPermission
%

category: 'comparing'
method: FileSystemPermission
<= other
	^ (posixPermission > other posixPermission) not
%

category: 'comparing'
method: FileSystemPermission
> other
	^ other posixPermission < posixPermission
%

category: 'comparing'
method: FileSystemPermission
>= other
	^ other posixPermission <= posixPermission
%

category: 'accessing'
method: FileSystemPermission
groupExecute
	^ self permissionBitAt: 4
%

category: 'accessing'
method: FileSystemPermission
groupRead
	^ self permissionBitAt: 6
%

category: 'accessing'
method: FileSystemPermission
groupWrite
	^ self permissionBitAt: 5
%

category: 'initialization'
method: FileSystemPermission
initialize
%

category: 'initialization'
method: FileSystemPermission
initialize: aNumber
	posixPermission := aNumber.
	self initialize.	
%

category: 'testing'
method: FileSystemPermission
isReadable
	^ self ownerRead
%

category: 'testing'
method: FileSystemPermission
isWritable
	^ self ownerWrite
%

category: 'accessing'
method: FileSystemPermission
otherExecute
	^ self permissionBitAt: 1
%

category: 'accessing'
method: FileSystemPermission
otherRead
	^ self permissionBitAt: 3
%

category: 'accessing'
method: FileSystemPermission
otherWrite
	^ self permissionBitAt: 2
%

category: 'accessing'
method: FileSystemPermission
ownerExecute
	^ self permissionBitAt: 7
%

category: 'accessing'
method: FileSystemPermission
ownerRead
	^ self permissionBitAt: 9
%

category: 'accessing'
method: FileSystemPermission
ownerWrite
	^ self permissionBitAt: 8
%

category: 'accessing'
method: FileSystemPermission
permissionBitAt: bitIndex
	^ (posixPermission bitAt: bitIndex) == 1
%

category: 'private'
method: FileSystemPermission
posixPermission
	^ posixPermission
%

category: 'printing'
method: FileSystemPermission
printOn: aStream
	aStream 
		"Owner"
		nextPut: (self ownerRead ifTrue: [ $r ] ifFalse: [ $- ]);
		nextPut: (self ownerWrite ifTrue: [ $w ] ifFalse: [ $- ]);
		nextPut: (self ownerExecute ifTrue: [ $x ] ifFalse: [ $- ]);
		"Group"
		nextPut: (self groupRead ifTrue: [ $r ] ifFalse: [ $- ]);
		nextPut: (self groupWrite ifTrue: [ $w ] ifFalse: [ $- ]);
		nextPut: (self groupExecute ifTrue: [ $x ] ifFalse: [ $- ]);
		"Other"
		nextPut: (self otherRead ifTrue: [ $r ] ifFalse: [ $- ]);
		nextPut: (self otherWrite ifTrue: [ $w ] ifFalse: [ $- ]);
		nextPut: (self otherExecute ifTrue: [ $x ] ifFalse: [ $- ])
		
%

! Class implementation for 'FileSystemResolver'

!		Class methods for 'FileSystemResolver'

category: 'instance creation'
classmethod: FileSystemResolver
new

	^ self basicNew
		initialize;
		yourself
%

!		Instance methods for 'FileSystemResolver'

category: 'accessing'
method: FileSystemResolver
addResolver: aResolver
	next
		ifNil: [next := aResolver]
		ifNotNil: [next addResolver: aResolver]
%

category: 'resolving'
method: FileSystemResolver
canResolve: aSymbol
	^ self supportedOrigins includes: aSymbol
%

category: 'accessing'
method: FileSystemResolver
flushCaches
	self flushLocalCache.
	next ifNotNil: [next flushCaches]
%

category: 'accessing'
method: FileSystemResolver
flushLocalCache
%

category: 'initialization'
method: FileSystemResolver
initialize
%

category: 'accessing'
method: FileSystemResolver
next
	^ next
%

category: 'resolving'
method: FileSystemResolver
resolve: aSymbol
	^ (self canResolve: aSymbol)
		ifTrue: [self perform: aSymbol]
		ifFalse: [self unknownOrigin: aSymbol]
%

category: 'resolving'
method: FileSystemResolver
resolveString: aString
	| decoded fs |
	"The argument string is actually a byte array encoded differently on each platform.
	We are transforming it to an image string.
	We assume for now that the string is utf8 encoded."
	decoded := aString decodeFromUTF8 asString.
	fs := FileSystem disk.
	^ FileReference 
		fileSystem: fs 
		path: (fs pathFromString: decoded)
%

category: 'resolving'
method: FileSystemResolver
supportedOrigins
	^ #()
%

category: 'resolving'
method: FileSystemResolver
unknownOrigin: aSymbol
	^ next ifNotNil: [next resolve: aSymbol]
%

! Class implementation for 'InteractiveResolver'

!		Instance methods for 'InteractiveResolver'

category: 'accessing'
method: InteractiveResolver
flushLocalCache
	cache := IdentityDictionary new
%

category: 'initialization'
method: InteractiveResolver
initialize
	self flushLocalCache
%

category: 'resolving'
method: InteractiveResolver
resolve: origin
	^ cache at: origin ifAbsent: [self unknownOrigin: origin]
	
%

category: 'resolving'
method: InteractiveResolver
unknownOrigin: origin
	| reference |
	^ (next ifNotNil: [next resolve: origin]) ifNil: 
			[reference := ResolutionRequest for: origin.
			reference ifNotNil: [cache at: origin put: reference]]
%

! Class implementation for 'PlatformResolver'

!		Class methods for 'PlatformResolver'

category: 'instance creation'
classmethod: PlatformResolver
forCurrentPlatform
	| platformName |
	platformName :=  System gemVersionAt: 'osName' .
	^ (self allSubclasses detect: [:ea | ea platformName = platformName]) new
%

category: 'accessing'
classmethod: PlatformResolver
platformName
	^ nil
%

!		Instance methods for 'PlatformResolver'

category: 'origins'
method: PlatformResolver
cache
	"Operating Systems often define standard locations for a personal cache directory. The cache directory is a user-specific non-essential (cached) place where data should be written."
	self subclassResponsibility
%

category: 'private'
method: PlatformResolver
cantFindOriginError
	^ Error signal: 'Can''t find the requested origin' 
%

category: 'origins'
method: PlatformResolver
desktop
	^ self subclassResponsibility
%

category: 'private'
method: PlatformResolver
directoryFromEnvVariableNamed: aString
	^ self directoryFromEnvVariableNamed: aString or: [ self cantFindOriginError ]
%

category: 'private'
method: PlatformResolver
directoryFromEnvVariableNamed: aString or: aBlock
	| envValue |
	envValue := [ System gemEnvironmentVariable: aString ]
		on: Error
		do: [ ^ aBlock value ].
	^ envValue isEmptyOrNil
		ifTrue: [ aBlock value ]
		ifFalse: [ self resolveString: envValue ]
%

category: 'origins'
method: PlatformResolver
documents
	^ self subclassResponsibility
%

category: 'origins'
method: PlatformResolver
home
	^ self subclassResponsibility
%

category: 'origins'
method: PlatformResolver
preferences
	^ self subclassResponsibility
%

category: 'resolving'
method: PlatformResolver
supportedOrigins
	^ #(home desktop documents preferences cache temp)
%

category: 'origins'
method: PlatformResolver
temp
	"Where to put files that are not supposed to last long"
	^ self subclassResponsibility 
%

! Class implementation for 'MacOSResolver'

!		Class methods for 'MacOSResolver'

category: 'accessing'
classmethod: MacOSResolver
platformName
	^  'Mac OS'
%

!		Instance methods for 'MacOSResolver'

category: 'origins'
method: MacOSResolver
cache
	^ self library / 'Caches'
%

category: 'origins'
method: MacOSResolver
desktop
	^ self home / 'Desktop'
%

category: 'origins'
method: MacOSResolver
documents
	^ self home / 'Documents'
%

category: 'origins'
method: MacOSResolver
home
	^ self directoryFromEnvVariableNamed: 'HOME'
%

category: 'origins'
method: MacOSResolver
library
	^ self userLibrary
%

category: 'origins'
method: MacOSResolver
preferences 
	^ self home / 'Library' / 'Preferences'
%

category: 'resolving'
method: MacOSResolver
supportedOrigins
	^ super supportedOrigins , #(userApplicationSupport systemApplicationSupport systemLibrary userLibrary)
%

category: 'origins'
method: MacOSResolver
systemApplicationSupport
	^ self systemLibrary / 'Application Support'
%

category: 'origins'
method: MacOSResolver
systemLibrary
	^  FileSystem disk root / 'Library'
%

category: 'origins'
method: MacOSResolver
temp
	^ '/tmp' asFileReference
%

category: 'origins'
method: MacOSResolver
userApplicationSupport
	^self userLibrary / 'Application Support'
%

category: 'origins'
method: MacOSResolver
userLibrary
	^  self home / 'Library'
%

! Class implementation for 'UnixResolver'

!		Class methods for 'UnixResolver'

category: 'accessing'
classmethod: UnixResolver
platformName
	^  'Linux'
%

!		Instance methods for 'UnixResolver'

category: 'origins'
method: UnixResolver
cache
	"http://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html"

	^ self directoryFromEnvVariableNamed: 'XDG_CACHE_HOME' or: [ self home / '.cache' ]
%

category: 'origins'
method: UnixResolver
desktop
	^ (self xdgUserDir: 'DESKTOP') ifNil: [ self home / 'Desktop' ]
%

category: 'origins'
method: UnixResolver
documents
	^ (self xdgUserDir: 'DOCUMENTS') ifNil: [ self home / 'Documents' ]
%

category: 'origins'
method: UnixResolver
home
	^ self directoryFromEnvVariableNamed: 'HOME'
%

category: 'origins'
method: UnixResolver
preferences
	"http://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html"

	^ self directoryFromEnvVariableNamed: 'XDG_CONFIG_HOME' or: [ self home / '.config' ]
%

category: 'resolving'
method: UnixResolver
supportedOrigins
	^ super supportedOrigins , #( userData )
%

category: 'origins'
method: UnixResolver
temp
	^ '/tmp' asFileReference
%

category: 'origins'
method: UnixResolver
userData
	^ self directoryFromEnvVariableNamed: 'XDG_DATA_HOME' or: [ self home / '.local' / 'share' ]
%

category: 'helpers'
method: UnixResolver
xdgParseUserDirLine: aStream
	"Format is XDG_xxx_DIR=""$HOME/yyy"", where yyy is a shell-escaped homedir-relative path, or XDG_xxx_DIR=""/yyy"", where /yyy is an absolute path. No other format is supported."
	| path firstChar |
	(aStream next = $") ifFalse: [ ^ nil ].
	firstChar := aStream next.
	(#($$ $/) includes: firstChar) ifFalse: [ ^ nil ].
	path := firstChar = $$
				ifTrue: [ (aStream next: 5) = 'HOME/' ifFalse: [ ^ nil ].
					       self home / (aStream upTo: $") ]
				ifFalse: [ self resolveString: '/', (aStream upTo: $") ].
	^ path
%

category: 'helpers'
method: UnixResolver
xdgUserDir: userDirName
	"Read ~/.config/user-dirs.dirs to find the directory of userDirName (e.g., 'DESKTOP')"
	"http://freedesktop.org/wiki/Software/xdg-user-dirs"
	"This file is written by xdg-user-dirs-update If you want to change or add directories, just edit the line you're interested in. All local changes will be retained on the next run Format is XDG_xxx_DIR=""$HOME/yyy"", where yyy is a shell-escaped homedir-relative path, or XDG_xxx_DIR=""/yyy"", where /yyy is an absolute path. No other format is supported."
	| configFile |
	configFile := self preferences / 'user-dirs.dirs'.
	(configFile isFile and: [ configFile isReadable ]) ifFalse: [ ^ nil ].
	configFile readStreamDo: [ :stream | 
		[ stream atEnd ]
			whileFalse: [ 
				((stream peek ~= $#) and: [ (stream upTo: $=) = ('XDG_', userDirName, '_DIR') ])
							ifTrue: [ ^ self xdgParseUserDirLine: stream ]
							ifFalse: [ stream nextLine ] ] ].
	^ nil
%

! Class implementation for 'WindowsResolver'

!		Class methods for 'WindowsResolver'

category: 'accessing'
classmethod: WindowsResolver
platformName
	^ 'Win32'
%

!		Instance methods for 'WindowsResolver'

category: 'origins'
method: WindowsResolver
cache
	"Because Windows does not define any location for putting cache files, we chose to use the preference directory. http://libertyboy.free.fr/computing/reference/envariables/"
	^ self preferences
%

category: 'origins'
method: WindowsResolver
desktop
	^ self home / 'Desktop'
%

category: 'origins'
method: WindowsResolver
documents
	^ self home / 'Documents'
%

category: 'origins'
method: WindowsResolver
home
	"Value of the $USERPROFILE environment variable."

	^ self directoryFromEnvVariableNamed: 'USERPROFILE'
%

category: 'origins'
method: WindowsResolver
preferences
	^ self directoryFromEnvVariableNamed: 'APPDATA' or: [ self home ]
%

category: 'origins'
method: WindowsResolver
temp
	^ self directoryFromEnvVariableNamed: 'TEMP' or: [ FileLocator C / 'windows' / 'temp' ]
%

! Class implementation for 'SystemResolver'

!		Class methods for 'SystemResolver'

category: 'accessing'
classmethod: SystemResolver
defaultLocalDirectoryName
	^ 'pharo-local'
%

category: 'accessing'
classmethod: SystemResolver
userLocalDirectory
	^ UserLocalDirectory ifNil: [ 
		(FileLocator imageDirectory / self defaultLocalDirectoryName) resolve  ]
%

category: 'accessing'
classmethod: SystemResolver
userLocalDirectory: aFileReference
	UserLocalDirectory := aFileReference
%

!		Instance methods for 'SystemResolver'

category: 'origins'
method: SystemResolver
dbfScratchDir
	"Answer the path to the DBF_SCRATCH_DIR"

	^ self  resolveString: (System stoneConfigurationReport at: #DBF_SCRATCH_DIR)
%

category: 'origins'
method: SystemResolver
extent1

	^ self _extent: 1
%

category: 'origins'
method: SystemResolver
extent1Directory

	^ self extent1 parent
%

category: 'origins'
method: SystemResolver
gemLogDirectory
	"Answer the path to the gem log directory"

	^ self  resolveString: (System gemLogPath)
%

category: 'origins'
method: SystemResolver
image

	^ self dbfScratchDir
%

category: 'origins'
method: SystemResolver
imageDirectory

	^ self dbfScratchDir
%

category: 'origins'
method: SystemResolver
rowanProjectsHome

	"Answer the path to $ROWAN_PROJECTS_HOME"

	^ (System gemEnvironmentVariable: 'ROWAN_PROJECTS_HOME')
		ifNil: [ self error: '$ROWAN_PROJECTS_HOME not defined' ]
		ifNotNil: [:str | self  resolveString: str ]
%

category: 'resolving'
method: SystemResolver
supportedOrigins
	^ #(image imageDirectory extent1 extent1Directory tranlog dbfScratchDir workingDirectory rowanProjectsHome )
%

category: 'origins'
method: SystemResolver
tranlog
	"Answer the path to the current tranlog"

	^ self  resolveString: (System stoneConfigurationReport at: #StnCurrentTranLogNames)
%

category: 'private'
method: SystemResolver
_extent: extentIndex
	"Answer the path to the extent at extentIndex in DBF_EXTENT_NAMES: (System stoneConfigurationReport at: #DBF_EXTENT_NAMES) at: extentIndex"

	| extentNames extentName |
	extentNames := System stoneConfigurationReport at: #DBF_EXTENT_NAMES.
	extentNames _isArray
		ifTrue: [  
			extentIndex > extentNames size ifTrue: [  self error: 'Requested extent index (', extentIndex printString, ') exceeds number of extents present in system (', extentNames size printString, ')'  ].
			extentName := extentNames ]
		ifFalse: [ 
			extentIndex ~= 1 ifTrue: [  self error: 'Requested extent index (', extentIndex printString, ') exceeds number of extents present in system (1)'  ].
			extentName := extentNames ].
	^ self  resolveString: extentName
%

! Class implementation for 'FileSystemStore'

!		Class methods for 'FileSystemStore'

category: 'accessing'
classmethod: FileSystemStore
delimiter
	^ self shouldBeImplemented 
%

category: 'accessing'
classmethod: FileSystemStore
isCaseSensitive
	^ self shouldBeImplemented
%

category: 'instance creation'
classmethod: FileSystemStore
new

	^self basicNew
		initialize;
		yourself
%

category: 'accessing'
classmethod: FileSystemStore
separator
	self shouldBeImplemented
%

!		Instance methods for 'FileSystemStore'

category: 'public'
method: FileSystemStore
basenameFromEntry: aNode
	"Used to extract the basename from the low-level representation (node / entry) from the store."
	self subclassResponsibility
%

category: 'abstract'
method: FileSystemStore
basicCreationTimeOf: aNode
	"Used to decide whether the low-level representation (node / entry) from the store is a readable
	file or a directory whose contents can be listed."
	self subclassResponsibility 
%

category: 'abstract'
method: FileSystemStore
basicEntry: directoryEntry path: aPath nodesDo: aBlock
	self subclassResponsibility 
%

category: 'abstract'
method: FileSystemStore
basicIsDirectory: aNode
	"Used to decide whether the low-level representation (node / entry) from the store is a directory.
	This private message should only be called form within the store."
	self subclassResponsibility 
%

category: 'abstract'
method: FileSystemStore
basicIsFile: aNode
	"Used to decide whether the low-level representation (node / entry) from the store is a file.
	This private message should only be called form within the store."
	self subclassResponsibility 
%

category: 'abstract'
method: FileSystemStore
basicIsSymlink: aNode
	^self subclassResponsibility 
	
%

category: 'abstract'
method: FileSystemStore
basicIsWritable: aNode
	"Used to decide whether the low-level representation (node / entry) from the store is 
	a writable file or can be changed."
	self subclassResponsibility 
%

category: 'abstract'
method: FileSystemStore
basicModificationTime: aNode
	"Used to decide whether the low-level representation (node / entry) from the store is a readable
	file or a directory whose contents can be listed."
	self subclassResponsibility 
%

category: 'error signalling'
method: FileSystemStore
basicOpen: aPath writable: aBoolean
	"open the file at the given path and return an identifier"
	self subclassResponsibility
%

category: 'abstract'
method: FileSystemStore
basicPosixPermissions: aNode
	"Used to get the posix permissions from a low-level filesystem entry / node"
	self subclassResponsibility 
%

category: 'abstract'
method: FileSystemStore
basicSizeOf: aNode
	"Used to get the size of the low-level representation (node / entry) "
	self subclassResponsibility 
%

category: 'public'
method: FileSystemStore
checkName: aString fixErrors: fixErrors
	^ self subclassResponsibility
%

category: 'abstract'
method: FileSystemStore
close
	"Some kinds of filesystems need to open connections to external resources"
%

category: 'private'
method: FileSystemStore
copy: sourcePath ifAbsent: absentBlock to: destinationPath ifPresent: presentBlock fileSystem: aFilesystem

	| buffer out in |
	
	in := nil.
	out := nil.
	buffer := nil.
	[
		in := aFilesystem binaryReadStreamOn: sourcePath.
		in ifNil: [ ^ absentBlock value ].
		
		(self exists: destinationPath)
			ifTrue: [ "cannot overwrite destination"
				^ presentBlock value ].
			
		out := aFilesystem binaryWriteStreamOn: destinationPath.
		buffer := ByteArray new: 1024.
		
		[ in atEnd ]
			whileFalse: [ 
				buffer := in nextInto: buffer.
				out nextPutAll: buffer ]]
	ensure: [ 
		in ifNotNil: [ in close ].
		out ifNotNil: [ out close ]]
%

category: 'abstract'
method: FileSystemStore
createDirectory: aPath
	self subclassResponsibility 
%

category: 'public'
method: FileSystemStore
creationTimeOf: aPath
	"Return the date of creation of the File described by aPath"
	^ self 
		nodeAt: aPath 
		ifPresent: [ :entry | self basicCreationTimeOf: entry ] 
		ifAbsent: [ self signalFileDoesNotExist: aPath ].
	
%

category: 'accessing'
method: FileSystemStore
defaultWorkingDirectory
	^ Path root
%

category: 'abstract'
method: FileSystemStore
delete: aPath
	self subclassResponsibility 
%

category: 'accessing'
method: FileSystemStore
delimiter
	^ self class delimiter
%

category: 'public'
method: FileSystemStore
directoryAt: aPath ifAbsent: absentBlock directoryNodesDo: aBlock
	^ self 
		directoryAt: aPath 
		ifAbsent: absentBlock 
		nodesDo: [ :entry|
			(self basicIsDirectory: entry) 
				ifTrue: [ aBlock value: entry ]].
%

category: 'public'
method: FileSystemStore
directoryAt: aPath ifAbsent: absentBlock fileNodesDo: aBlock
	^ self 
		directoryAt: aPath 
		ifAbsent: absentBlock 
		nodesDo: [ :entry|
			(self basicIsDirectory: entry) 
				ifFalse: [ aBlock value: entry ]].
%

category: 'public'
method: FileSystemStore
directoryAt: aPath ifAbsent: absentBlock nodesDo: aBlock
	^ self
		nodeAt: aPath
		ifPresent: [ :entry | 
			(self basicIsDirectory: entry)
				ifTrue: [ self basicEntry: entry path: aPath nodesDo: aBlock ]
				ifFalse: [ DirectoryDoesNotExist signalWith: aPath ] ]
		ifAbsent: absentBlock
%

category: 'public'
method: FileSystemStore
ensureCreateDirectory: aPath
	(self isDirectory: aPath) ifTrue: [ ^ self ].
	self ensureCreateDirectory: aPath parent.
	self createDirectory: aPath
%

category: 'private'
method: FileSystemStore
entryFromNode: aNode fileSystem: aFilesystem path: aPath
	^ FileSystemDirectoryEntry
		fileSystem: aFilesystem
		path: aPath
		creation: (self basicCreationTimeOf: aNode)
		modification:(self basicModificationTimeOf: aNode)
		isDir: (self basicIsDirectory: aNode)
		size: (self basicSizeOf: aNode)
		posixPermissions: (self basicPosixPermissions: aNode)
		isSymlink: (self basicIsSymlink: aNode)
%

category: 'public'
method: FileSystemStore
entryFromNode: node path: path for: aFileystem
	| entryPath |
	entryPath := path / (self basenameFromEntry: node).
	^ self entryFromNode: node fileSystem: aFileystem path: entryPath
%

category: 'public'
method: FileSystemStore
exists: aPath
	self 
		nodeAt: aPath 
		ifPresent: [ :entry | ^ true ] 
		ifAbsent: [ ^ false ].
	
%

category: 'private'
method: FileSystemStore
filename: aByteString matches: aByteString2
	^ aByteString = aByteString2
%

category: 'initialization'
method: FileSystemStore
initialize
%

category: 'accessing'
method: FileSystemStore
isCaseSensitive
	^ self class isCaseSensitive
%

category: 'public'
method: FileSystemStore
isDirectory: aPath
	aPath isRoot ifTrue: [ ^ true ].
	self 
		nodeAt: aPath 
		ifPresent: [ :entry | ^ self basicIsDirectory: entry ] 
		ifAbsent: [ ^ false ].
	
%

category: 'public'
method: FileSystemStore
isFile: aPath
	"slow solution for big directories! "
	^ self 
		nodeAt: aPath 
		ifPresent: [ :entry | ^ self basicIsFile: entry ] 
		ifAbsent: [ ^ false ]
	
%

category: 'public'
method: FileSystemStore
isSymlink: aPath
	aPath isRoot ifTrue: [ ^ true ].
	self 
		nodeAt: aPath 
		ifPresent: [ :entry | ^ self basicIsSymlink: entry ] 
		ifAbsent: [ ^ false ].
	
%

category: 'public'
method: FileSystemStore
isWritable: aPath
	self nodeAt: aPath 
		ifPresent: [ :entry | ^ self basicIsWritable: entry ] 
		ifAbsent: [ ^ false ].
	
%

category: 'public'
method: FileSystemStore
modificationTimeOf: aPath
	"Returns the last date of modification of the File described by aPath"
	^ self 
		nodeAt: aPath 
		ifPresent: [ :entry | self basicModificationTimeOf: entry ] 
		ifAbsent: [ self signalFileDoesNotExist: aPath ].
	
%

category: 'public'
method: FileSystemStore
nodeAt: aPath
	^ self 
		nodeAt: aPath 
		ifPresent: [ :node| node ]
		ifAbsent: [ self error: 'the node ', aPath printString, ' not found.' ]
%

category: 'abstract'
method: FileSystemStore
nodeAt: aPath ifPresent: presentBlock ifAbsent: absentBlock
	self subclassResponsibility 
%

category: 'abstract'
method: FileSystemStore
open
	"Some kinds of filesystems need to open connections to external resources"
%

category: 'public'
method: FileSystemStore
openFileStream: path writable: writable
	self subclassResponsibility
%

category: 'converting'
method: FileSystemStore
pathFromString: aString
	"Use the unix convention by default, since many filesystems are based on it."
	
	^ Path from: aString delimiter: self delimiter
%

category: 'public'
method: FileSystemStore
permissions: aPath
	self nodeAt: aPath 
		ifPresent: [ :entry | ^ FileSystemPermission posixPermissions: (self basicPosixPermissions: entry) ] 
		ifAbsent: [ ^ FileSystemPermission default ].
	
%

category: 'converting'
method: FileSystemStore
printPath: aPath on: out
	"Use the unix convention by default, since it's the most common."
	
	aPath isAbsolute ifTrue: [ out nextPut: self delimiter ].
	^ aPath printOn: out delimiter: self delimiter
%

category: 'private'
method: FileSystemStore
rename: sourcePath ifAbsent: absentBlock to: destinationPath ifPresent: presentBlock fileSystem: anFSFilesystem

	| result |
	(self exists: destinationPath) ifTrue: [ ^ presentBlock value ].
	(self exists: sourcePath) ifFalse: [ ^ absentBlock value ].
	result := self rename: sourcePath to: destinationPath.
	result ifNil: [ self primitiveFailed ].
	^ self.
%

category: 'abstract'
method: FileSystemStore
rename: sourcePath to: destinationPath
	self subclassResponsibility 
%

category: 'accessing'
method: FileSystemStore
separator
	^ self class separator
%

category: 'error signalling'
method: FileSystemStore
signalDirectoryDoesNotExist: aPath
	^ DirectoryDoesNotExist signalWith: aPath
%

category: 'error signalling'
method: FileSystemStore
signalDirectoryExists: aPath
	^ DirectoryExists signalWith: aPath
%

category: 'error signalling'
method: FileSystemStore
signalFileDoesNotExist: aPath
	^ FileDoesNotExistException
		signalWithFile: (File named: aPath asPath pathString)
		writeMode: false
%

category: 'error signalling'
method: FileSystemStore
signalFileExists: aPath
	^ FileExists signalWith: aPath
%

category: 'public'
method: FileSystemStore
sizeOf: aPath
	"Return the size of the File described by aPath"
	^ self 
		nodeAt: aPath 
		ifPresent: [ :entry | self basicSizeOf: entry ] 
		ifAbsent: [ self signalFileDoesNotExist: aPath ]
	
%

category: 'converting'
method: FileSystemStore
stringFromPath: aPath
	^ String streamContents: [ :out | 
		self printPath: aPath on: out ]
%

! Class implementation for 'DiskStore'

!		Class methods for 'DiskStore'

category: 'current'
classmethod: DiskStore
activeClass
	self allSubclasses do: [:ea | 
		ea isActiveClass ifTrue: [^ ea]].
  "Various methods go into infinite recursion if we return self."
	Error signal:'Cannot find an active subclass of DiskStore' .
%

category: 'current'
classmethod: DiskStore
createDefault
	^ self new
%

category: 'current'
classmethod: DiskStore
current
	^ self currentFileSystem store
%

category: 'current'
classmethod: DiskStore
currentFileSystem
	^ CurrentFS ifNil: [
		CurrentFS := FileSystem store: self activeClass createDefault]
%

category: 'accessing'
classmethod: DiskStore
defaultWorkingDirectory
	"Ask the VM for the default working directory.
	Clients should normally use the instance side method which caches this value."
	| pathString |

	pathString := (GsFile _expandEnvVariable: 'PWD' isClient:false).
	^(Path from: pathString delimiter: self delimiter).
%

category: 'public'
classmethod: DiskStore
delimiter
	^ self current delimiter
%

category: 'current'
classmethod: DiskStore
isActiveClass
	^ self delimiter = File delimiter
%

category: 'public'
classmethod: DiskStore
maxFileNameLength
	self subclassResponsibility 
%

category: 'current'
classmethod: DiskStore
reset
	DefaultWorkingDirectory := nil.
	CurrentFS := nil
%

category: 'system startup'
classmethod: DiskStore
shutDown: quitting
	"Force to detect filesystem after image restart"
	self reset
%

category: 'system startup'
classmethod: DiskStore
startUp: resuming
	resuming 
		ifTrue: [ self reset ].
	DefaultWorkingDirectory := self defaultWorkingDirectory.
%

!		Instance methods for 'DiskStore'

category: 'comparing'
method: DiskStore
= other
	^ self species = other species
%

category: 'private'
method: DiskStore
basenameFromEntry: entry
	^ entry at: 1
%

category: 'private'
method: DiskStore
basicCreationTimeOf: anEntry
	" the entry contains the seconds since the squeak epoch in local time"

	"this method should be reimplemented with the new file system code"

	| dt offset |
	offset := Duration seconds: 0.
	dt := DateAndTime posixSeconds: (anEntry at: 2) offset: offset.
	offset := Duration
		seconds: (dt currentTimeZone transitionAtUTC: dt) offsetFromUTC.
	^ DateAndTime posixSeconds: (anEntry at: 2) offset: offset	"SmallDateAndTime prevents changing the offset, so create a new instance, as suggesed"
%

category: 'private'
method: DiskStore
basicEntry: ignored path: aPath nodesDo: aBlock
	| pathString intOrArray |
	pathString := self stringFromPath: aPath.
	intOrArray := GsFile _contentsOfServerDirectory: pathString expandPath: true.
	intOrArray _isArray ifFalse: [ ^ self signalDirectoryDoesNotExist: aPath ].
	intOrArray
		do: [:entryPathString |
			((entryPathString endsWith: '.')  or: [ entryPathString endsWith: '..' ])
				ifFalse: [ | aFile |
          aFile := File lookupPath: entryPathString .
          "For now, ignore symLinks which reference a non-existant file."
          aFile ifNil:[ 
             (GsFile isSymbolicLink: entryPathString onClient: false) ifFalse:[
                self signalFileDoesNotExist: entryPathString 
             ]
          ] ifNotNil:[
            aBlock value: aFile 
          ]]]
%

category: 'public'
method: DiskStore
basicEntryAt: aPath
	| path basename |
	
	path := self stringFromPath: aPath parent.
	basename := aPath basename.
	
	^ (File lookupDirectory: path filename: basename)
		ifNil: [ #badDirectoryPath ].
%

category: 'private'
method: DiskStore
basicIsDirectory: anEntry
	^ anEntry at: 4
%

category: 'private'
method: DiskStore
basicIsFile: anEntry
	^ (anEntry at: 4) not
%

category: 'private'
method: DiskStore
basicIsSymlink: anEntry
	^(anEntry size >= 7)
		ifTrue: [ anEntry at: 7 ]
		ifFalse: [ false ]
%

category: 'private'
method: DiskStore
basicModificationTimeOf: anEntry
	" the entry contains the seconds since the squeak epoch in local time"

	| dt offset |
	offset := Duration seconds: 0.
	dt := DateAndTime posixSeconds: (anEntry at: 3) offset: offset.
	offset := Duration
		seconds: (dt currentTimeZone transitionAtUTC: dt) offsetFromUTC.
	^ DateAndTime posixSeconds: (anEntry at: 3) offset: offset
%

category: 'public'
method: DiskStore
basicOpen: aPath writable: writeMode

	"writeMode - #read, #append, #write"

	| string |
	string := self stringFromPath: aPath.
	^ File open: string writable: writeMode
%

category: 'private'
method: DiskStore
basicPosixPermissions: anEntry
	^ (anEntry size >= 6)
		ifTrue: [ anEntry at: 6 ]
		ifFalse: [ nil ].
%

category: 'private'
method: DiskStore
basicSizeOf: anEntry
	^ (anEntry at: 5)
%

category: 'public'
method: DiskStore
checkName: aFileName fixErrors: fixErrors
	"Check a string aFileName for validity as a file name. Answer the original file name if it is valid. If the name is not valid (e.g., it is too long or contains illegal characters) and fixing is false, raise an error. If fixing is true, fix the name (usually by truncating and/or tranforming characters), and answer the corrected name. The default behavior is just to truncate the name to the maximum length for this platform. Subclasses can do any kind of checking and correction appropriate for their platform."
	
	| maxLength |
	aFileName size = 0 ifTrue: [self error: 'zero length file name'].
	maxLength := self maxFileNameLength.
	aFileName size > maxLength ifTrue: [
		fixErrors
			ifTrue: [^ aFileName contractTo: maxLength]
			ifFalse: [self error: 'file name is too long']].
	^ aFileName
%

category: 'public'
method: DiskStore
createDirectory: path
	"Create a directory for the argument path. 
	If the path refers to an existing file, raise FileExists.
	If the path refers to an existing directory, raise DirectoryExists.
	If the parent directory of the path does not exist, raise DirectoryDoesNotExist"

	| parent pathString result |
	pathString := self stringFromPath: path.
	result := File createDirectory: pathString.
	result
		ifNil: [ 
			parent := path parent.
			(self exists: path)
				ifTrue: [ 
					(self isFile: path)
						ifTrue: [ self signalFileExists: path ]
						ifFalse: [ self signalDirectoryExists: path ] ].
			(self isDirectory: parent)
				ifFalse: [ ^ self signalDirectoryDoesNotExist: parent ].
			self primitiveFailed ].
	^ self
%

category: 'accessing'
method: DiskStore
defaultWorkingDirectory
	"Answer the default working directory, which is defined as the directory where the image resides."

	^ DefaultWorkingDirectory
		ifNil: [ self class defaultWorkingDirectory ]
%

category: 'public'
method: DiskStore
delete: path
	| pathString |
	
	(self exists: path)
		ifFalse: [ ^ FileDoesNotExistException signalWith: path ].
		
	pathString := self stringFromPath: path.
	
	(self isDirectory: path)
		ifTrue: [ File deleteDirectory: pathString ]
		ifFalse: [ 
			(File named: pathString) delete ]
%

category: 'printing'
method: DiskStore
forReferencePrintOn: aStream
	aStream nextPutAll: 'File @ '
%

category: 'accessing'
method: DiskStore
handleClass
	^ FileHandle
%

category: 'comparing'
method: DiskStore
hash
	^ self species hash
%

category: 'initialization'
method: DiskStore
initialize
	super initialize.
	maxFileNameLength := 255.
%

category: 'public'
method: DiskStore
isDirectory: aPath
	| entry |
	
	aPath isRoot ifTrue: [ ^ true ].
	
	entry := self  basicEntryAt: aPath.
	
	^ entry == #badDirectoryPath 
		ifTrue: [  false ]
		ifFalse: [ self basicIsDirectory: entry ].
	
%

category: 'testing'
method: DiskStore
isDiskFileSystem
	^ true
%

category: 'public'
method: DiskStore
isFile: aPath
	| entry |
	
	aPath isRoot ifTrue: [ ^ false ].
	
	entry := self  basicEntryAt: aPath.
	
	^ entry == #badDirectoryPath 
		ifTrue: [  false ]
		ifFalse: [ self basicIsFile: entry ].
	
%

category: 'public'
method: DiskStore
isReadable: aPath
	(self exists: aPath) ifFalse: [ ^ false ].
	self flag: 'TODO: we need a decent primitive for this...'.
	(self basicOpen: aPath writable: #read) 
		ifNotNil: [ :id|
			File close: id.
			^ true].
	^ false
%

category: 'public'
method: DiskStore
isSymlink: aPath
	| entry |
	
	aPath isRoot ifTrue: [ ^false ].
	
	entry := self  basicEntryAt: aPath.
	
	^ entry == #badDirectoryPath 
		ifTrue: [  false ]
		ifFalse: [ self basicIsSymlink: entry ].
	
%

category: 'public'
method: DiskStore
isWritable: aPath
	(self exists: aPath) ifFalse: [ ^ false ].
	self flag: 'TODO: we need a decent primitive for this...'.
	(self basicOpen: aPath writable: #write) 
		ifNotNil: [ :id|
			File close: id.
			^ true].
	^ false
%

category: 'public'
method: DiskStore
maxFileNameLength
	^ maxFileNameLength
%

category: 'private'
method: DiskStore
nodeAt: aPath ifPresent: presentBlock ifAbsent: absentBlock
	
	| entry |
	
	aPath isRoot ifTrue: [ ^ presentBlock value: self rootNode ].
	
	entry := self basicEntryAt: aPath.
	
	^ entry == #badDirectoryPath 
		ifTrue: absentBlock
		ifFalse: [
			entry at: 1 put: aPath basename.
			presentBlock value: entry ].
%

category: 'public'
method: DiskStore
openFileStream: path writable: writable
	| fullPath |
	fullPath := self stringFromPath: path.
	"redirect over the default implementation"
	^ writable 
		ifFalse: [ FileStreamPortable readOnlyFileNamed: fullPath ]
		ifTrue: [ FileStreamPortable fileNamed: fullPath ]
%

category: 'public'
method: DiskStore
rename: sourcePath to: destinationPath

	| sourcePathString targetPathString |
	sourcePathString := self stringFromPath: sourcePath.
	targetPathString := self stringFromPath: destinationPath.
	^ File rename: sourcePathString to: targetPathString.
%

category: 'private'
method: DiskStore
rootNode
	^ #('' 0 0 true 0 8r555)
%

! Class implementation for 'UnixStore'

!		Class methods for 'UnixStore'

category: 'public'
classmethod: UnixStore
delimiter
	^ $/
%

category: 'current'
classmethod: UnixStore
isActiveClass
  | osNam |
  osNam := System gemVersionAt: 'osName'.
  ^ (#( 'Linux' 'Darwin' 'SunOS' 'AIX') includes: osNam) and:[ super isActiveClass ]
%

category: 'public'
classmethod: UnixStore
isCaseSensitive

	^ true
%

category: 'public'
classmethod: UnixStore
maxFileNameLength

	^ 255
%

category: 'public'
classmethod: UnixStore
separator 
	^ $:
%

!		Instance methods for 'UnixStore'

category: 'public'
method: UnixStore
checkName: aFileName fixErrors: fixing
	"Check if the file name contains any invalid characters"
	| fName |
	fName := super checkName: aFileName fixErrors: fixing.
	
	(fName includes: self delimiter) ifFalse:
		[^fName].
	
	fixing ifFalse: [self error:'Invalid file name'].
	
	^ fName copyReplaceAll: self delimiter asString with: '#'
%

! Class implementation for 'MacStore'

!		Class methods for 'MacStore'

category: 'current'
classmethod: MacStore
isActiveClass
	^ ((System gemVersionAt: 'osName') = 'Darwin') and: [ super isActiveClass ]
%

category: 'public'
classmethod: MacStore
isCaseSensitive

	^ true
%

! Class implementation for 'WindowsStore'

!		Class methods for 'WindowsStore'

category: 'accessing'
classmethod: WindowsStore
delimiter
	^ $\
%

category: 'accessing'
classmethod: WindowsStore
isCaseSensitive
	^ false
%

category: 'accessing'
classmethod: WindowsStore
maxFileNameLength
	self flag: 'TODO: more tests needed here!'.
	^ 255
%

category: 'accessing'
classmethod: WindowsStore
separator 
	^ $\
%

!		Instance methods for 'WindowsStore'

category: 'public'
method: WindowsStore
checkName: aFileName fixErrors: fixing
	"Check if the file name contains any invalid characters"
	
	| fName badChars |
	fName := super checkName: aFileName fixErrors: fixing.
	badChars := (#( $: $< $> $| $/ $\ $? $* $"), ((0 to: 31) collect: [:n | n asCharacter])) asSet.
	
	(fName includesAnyOf: badChars)
		ifFalse: [^ fName].
	
	fixing ifFalse: [^self error: 'filename contains invalid characters'].
	
	^ fName collect:
		[:char | (badChars includes: char) 
				ifTrue: [$#] 
				ifFalse: [char]]
%

category: 'converting'
method: WindowsStore
currentDisk
	^ disk ifNil: [  disk := FileSystem workingDirectory path segments first ]
%

category: 'converting'
method: WindowsStore
pathFromString: aString
	"Need to distinguish '' and '/' , so tag latter with invalid character ':'  "
	| normalized pathClass pathElements |
	normalized := aString copy replaceAll: UnixStore delimiter with: self delimiter.
	pathElements := self delimiter split: normalized.
	pathClass := (Path isAbsoluteWindowsPath: normalized)
		ifTrue: [ (normalized = self delimiter asString) ifTrue: [ pathElements := { ':' } ].
			AbsolutePath ]
		ifFalse: [ self stripDrive: pathElements.
			RelativePath ].
	^pathClass withAll: pathElements
%

category: 'converting'
method: WindowsStore
printPath: aPath on: aStream
	| hasDrive |
	aPath isRoot
		ifTrue: [ ^ self ].	"effectively Windows root is empty string"
	aPath isWorkingDirectory
		ifTrue: [ ^ aPath printOn: aStream delimiter: self delimiter ].
	aPath isRelative
		ifTrue: [ ^ aPath printOn: aStream delimiter: self delimiter ].
	aPath segments first first = $:
		ifTrue: [ ^ aStream nextPut: self delimiter ].	"as tagged in #pathFromString:  "
	hasDrive := aPath segments first second = $:.
	(hasDrive not )
		ifTrue: [ aStream nextPut: self delimiter ].
	aPath printOn: aStream delimiter: self delimiter.
	(hasDrive and: [ aPath segments size = 1 ])
		ifTrue: [ aStream nextPut: self delimiter ]
%

category: 'converting'
method: WindowsStore
stripDrive: pathElements
	pathElements ifNotEmpty: [ pathElements at: 1 put: ( ($: split: pathElements first) last)  ]
%

! Class implementation for 'MemoryStore'

!		Class methods for 'MemoryStore'

category: 'current'
classmethod: MemoryStore
currentFileSystem
	^ CurrentFS ifNil: [ CurrentFS := FileSystem store: MemoryStore new ]
%

category: 'public'
classmethod: MemoryStore
delimiter
	^ $/
%

category: 'public'
classmethod: MemoryStore
isCaseSensitive
	^ true
%

category: 'class initialization'
classmethod: MemoryStore
reset
	CurrentFS := nil
%

category: 'public'
classmethod: MemoryStore
separator 
	^ $:
%

category: 'system startup'
classmethod: MemoryStore
startUp
	self reset
%

!		Instance methods for 'MemoryStore'

category: 'public'
method: MemoryStore
basenameFromEntry: aMemoryFileSystemEntry
	^ aMemoryFileSystemEntry basename
%

category: 'private'
method: MemoryStore
basicCreationTimeOf: aMemoryFileSystemEntry
	"Returns the creation date of aMemoryFileSystemEntry"
	^ aMemoryFileSystemEntry creationTime
%

category: 'private'
method: MemoryStore
basicEntry: entry nodesDo: aBlock
	entry fileEntriesDo: aBlock
%

category: 'private'
method: MemoryStore
basicEntry: directoryEntry path: aPath nodesDo: aBlock
	directoryEntry fileEntriesDo: aBlock
%

category: 'private'
method: MemoryStore
basicIsDirectory: aMemoryFileSystemEntry
	^ aMemoryFileSystemEntry isDirectory
%

category: 'private'
method: MemoryStore
basicIsFile: aMemoryFileSystemEntry
	^ aMemoryFileSystemEntry isFile
%

category: 'private'
method: MemoryStore
basicIsSymlink: aNode
	^false
%

category: 'private'
method: MemoryStore
basicModificationTimeOf: aMemoryFileSystemEntry
	"Return the basic modification time of aMemoryFileSystemEntry"
	^ aMemoryFileSystemEntry modificationTime
%

category: 'private'
method: MemoryStore
basicOpen: path writable: writeMode
	^ self
		nodeAt: path
		ifPresent: [ :aMemoryFileSystemEntry | 
			aMemoryFileSystemEntry
				basicOpen;
				yourself ]
		ifAbsent: [ writeMode == #write
				ifFalse: [ self signalFileDoesNotExist: path ]
				ifTrue: [ self createFile: path ] ]
%

category: 'private'
method: MemoryStore
basicPosixPermissions: anEntry
	^ 8r777
%

category: 'private'
method: MemoryStore
basicSizeOf: aMemoryFileSystemEntry
	"Return the basic size of aMemoryFileSystemEntry"
	^ aMemoryFileSystemEntry fileSize
%

category: 'public'
method: MemoryStore
checkName: aString fixErrors: fixErrors
	aString ifEmpty: [ self error: 'zero length file name' ].
	^ aString
%

category: 'private'
method: MemoryStore
copy: sourcePath ifAbsent: absentBlock to: destinationPath ifPresent: presentBlock fileSystem: aFilesystem
        | sourceNode destinationNode |

        sourceNode := self
                nodeAt: sourcePath
                ifPresent: [ :source | source ]
                ifAbsent: [ ^ absentBlock value].

        sourceNode isDirectory
                ifTrue: [ ^ absentBlock value ].

        destinationNode := self
                nodeAt: destinationPath parent
                ifPresent: [ :destination |  destination ]
                ifAbsent: [ ^ self signalDirectoryDoesNotExist: destinationPath parent ].

        destinationNode isFile
                ifTrue: [ self signalDirectoryDoesNotExist: destinationPath parent ].

        (destinationNode fileEntriesIncludes: destinationPath basename)
                ifTrue: [ "cannot overwrite existing file"^ presentBlock value ].

        destinationNode
                fileEntryAt: destinationPath basename
                put: (sourceNode copy
                                        basename: destinationPath basename;
                                        yourself)
%

category: 'public'
method: MemoryStore
createDirectory: path
	| parent |
	parent := path parent.
	^ self
		nodeAt: parent
		ifPresent: [ :entry | 
			entry
				fileEntryAt: path basename
				ifPresent: [ :node | 
					node isDirectory
						ifTrue: [ self signalDirectoryExists: path ]
						ifFalse: [ self signalFileExists: path ] ].
			entry ensureCreateDirectory: path basename  ]
		ifAbsent: [ self signalDirectoryDoesNotExist: parent ]
%

category: 'private'
method: MemoryStore
createFile: aPath
	^ self
		nodeAt: aPath parent
		ifPresent: [ :entry | 
			entry isDirectory
				ifTrue: [ entry ensureCreateFile: aPath basename ]]
		ifAbsent: [ self signalDirectoryDoesNotExist: aPath parent ]
%

category: 'public'
method: MemoryStore
delete: path
	self 
		nodeAt: path parent
		ifPresent: [ :dict | 
			dict fileEntryRemove: path basename ifAbsent: [ FileDoesNotExistException signalWith: path ]] 
		ifAbsent: [ DirectoryDoesNotExist signalWith: path parent ]
%

category: 'printing'
method: MemoryStore
forReferencePrintOn: aStream
	aStream nextPutAll: 'memory://'
%

category: 'accessing'
method: MemoryStore
handleClass
	^ MemoryHandle 
%

category: 'initialization'
method: MemoryStore
initialize 
	root := MemoryFileSystemDirectory new
%

category: 'testing'
method: MemoryStore
isMemoryFileSystem
	^ true
%

category: 'private'
method: MemoryStore
nodeAt: aPath ifPresent: presentBlock ifAbsent: absentBlock
	| current |
	aPath isRoot
		ifTrue: [ ^ presentBlock value: self root ].
	current := self root.
	aPath
		do: [ :segment | 
			current isDirectory
				ifTrue: [ current := current fileEntryAt: segment ifAbsent: [ ^ absentBlock value ] ]
				ifFalse: [ ^ absentBlock value ] ].
	^ presentBlock value: current
%

category: 'public'
method: MemoryStore
openFileStream: path writable: writeMode

	"writeMode - #read, #append, #write"

	| entry |
	entry := self basicOpen: path writable: writeMode.
	^ writeMode == #write
		ifTrue: [ entry writeStream ]
		ifFalse: [ entry readStreamPortable ]
%

category: 'public'
method: MemoryStore
rename: sourcePath to: destinationPath
	| sourceEntry destinationParentEntry newName |
	
	sourceEntry := self nodeAt: sourcePath.
	newName := destinationPath basename.
	
	destinationParentEntry := self nodeAt: destinationPath parent.
	
	destinationParentEntry isDirectory
		ifFalse: [ Error signal: 'Copy destination has to be a directory' ].
	destinationParentEntry 
		fileEntryAt: newName
		ifPresent: [ Error signal: 'Destination file exists already' ].
		
	destinationParentEntry 
		fileEntryAt: newName
		put: sourceEntry.
	sourceEntry basename: newName.
	
	
	(self nodeAt: sourcePath parent)
		fileEntryRemove: sourcePath basename 
	
%

category: 'private'
method: MemoryStore
replaceFile: path in: aBlock
	^ self
		nodeAt: path parent
		ifPresent: [ :entry | | old new |
			entry isDirectory
				ifFalse: [ self signalFileDoesNotExist: path ].
			old := entry fileEntryAt: path basename ifAbsent: [ self signalFileDoesNotExist: path ].
			new := aBlock value: old.
			entry fileEntryAt: path basename put: new ]
		ifAbsent: [ self signalFileDoesNotExist: path ]
%

category: 'accessing'
method: MemoryStore
root
	^ root
%

! Class implementation for 'FileSystemVisitor'

!		Instance methods for 'FileSystemVisitor'

category: 'initialization'
method: FileSystemVisitor
initialize
%

category: 'visiting'
method: FileSystemVisitor
visitDirectory: aReference
	^ self visitReference: aReference
%

category: 'visiting'
method: FileSystemVisitor
visitFile: aReference
	^ self visitReference: aReference
%

category: 'visiting'
method: FileSystemVisitor
visitReference: aReference
%

! Class implementation for 'AbstractEnumerationVisitor'

!		Instance methods for 'AbstractEnumerationVisitor'

category: 'visiting'
method: AbstractEnumerationVisitor
breadthFirst: aReference
	^ self visit: aReference with: (BreadthFirstGuide for: self)
%

category: 'initialization'
method: AbstractEnumerationVisitor
initializeWithBlock: aBlock
	self initialize.
	block := aBlock
%

category: 'visiting'
method: AbstractEnumerationVisitor
postorder: aReference
	^ self visit: aReference with: (PostorderGuide for: self)
%

category: 'visiting'
method: AbstractEnumerationVisitor
preorder: aReference
	^ self visit: aReference with: (PreorderGuide for: self)
%

category: 'visiting'
method: AbstractEnumerationVisitor
visit: aReference with: aGuide
	out := (Array new: 10) writeStreamPortable.
	aGuide show: aReference.
	^ out contents
%

category: 'visiting'
method: AbstractEnumerationVisitor
visitReference: anEntry
	self subclassResponsibility
%

! Class implementation for 'CollectVisitor'

!		Class methods for 'CollectVisitor'

category: 'instance creation'
classmethod: CollectVisitor
breadthFirst: aReference
	^ self breadthFirst: aReference collect: [:entry | entry]
%

category: 'instance creation'
classmethod: CollectVisitor
breadthFirst: aReference collect: aBlock
	^ (self collect: aBlock) breadthFirst: aReference
%

category: 'instance creation'
classmethod: CollectVisitor
collect: aBlock
	^ self basicNew initializeWithBlock: aBlock
%

category: 'instance creation'
classmethod: CollectVisitor
postorder: aReference
	^ self postorder: aReference collect: [:entry | entry]
%

category: 'instance creation'
classmethod: CollectVisitor
postorder: aReference collect: aBlock
	^ (self collect: aBlock) postorder: aReference
%

category: 'instance creation'
classmethod: CollectVisitor
preorder: aReference
	^ self preorder: aReference collect: [:entry | entry]
%

category: 'instance creation'
classmethod: CollectVisitor
preorder: aReference collect: aBlock
	^ (self collect: aBlock) preorder: aReference
%

!		Instance methods for 'CollectVisitor'

category: 'visiting'
method: CollectVisitor
visitReference: anEntry
	out nextPut: (block value: anEntry)
%

! Class implementation for 'SelectVisitor'

!		Class methods for 'SelectVisitor'

category: 'instance creation'
classmethod: SelectVisitor
breadthFirst: aReference
	^ self breadthFirst: aReference select: [:entry | true]
%

category: 'instance creation'
classmethod: SelectVisitor
breadthFirst: aReference select: aBlock
	^ (self select: aBlock) breadthFirst: aReference
%

category: 'instance creation'
classmethod: SelectVisitor
postorder: aReference
	^ self postorder: aReference select: [:entry | true]
%

category: 'instance creation'
classmethod: SelectVisitor
postorder: aReference select: aBlock
	^ (self select: aBlock) postorder: aReference
%

category: 'instance creation'
classmethod: SelectVisitor
preorder: aReference
	^ self preorder: aReference select: [:entry | true]
%

category: 'instance creation'
classmethod: SelectVisitor
preorder: aReference select: aBlock
	^ (self select: aBlock) preorder: aReference
%

category: 'instance creation'
classmethod: SelectVisitor
select: aBlock
	^ self basicNew initializeWithBlock: aBlock
%

!		Instance methods for 'SelectVisitor'

category: 'visiting'
method: SelectVisitor
visitReference: anEntry
	(block value: anEntry) 
		ifTrue: [ out nextPut: anEntry ]
%

! Class implementation for 'CopyVisitor'

!		Class methods for 'CopyVisitor'

category: 'instance creation'
classmethod: CopyVisitor
copy: source to: dest
	(self from: source to: dest) visit
%

category: 'instance creation'
classmethod: CopyVisitor
from: srcReference to: dstReference
	^ self basicNew
		initializeWithSource: srcReference 
		dest: dstReference
%

!		Instance methods for 'CopyVisitor'

category: 'visiting'
method: CopyVisitor
copyDirectory: aReference
	| directory |
	directory := dest resolve: (aReference relativeTo: source).
	directory createDirectory
%

category: 'visiting'
method: CopyVisitor
copyFile: aReference
	| copy |
	copy := dest resolve: (aReference relativeTo: source).
	aReference copyTo: copy
%

category: 'initialize-release'
method: CopyVisitor
initializeWithSource: srcReference dest: dstReference
	self initialize.
	source := srcReference.
	dest := dstReference
%

category: 'visiting'
method: CopyVisitor
visit
	(PreorderGuide for: self) 
		show: source
%

category: 'visiting'
method: CopyVisitor
visitDirectory: anEntry
	| reference |
	reference := anEntry reference.
	reference = source
		ifTrue: [dest ensureCreateDirectory]
		ifFalse: [self copyDirectory: reference]
%

category: 'visiting'
method: CopyVisitor
visitFile: anEntry
	| reference |
	reference := anEntry reference.
	reference = source
		ifTrue: [source copyTo: dest]
		ifFalse: [self copyFile: reference]
%

! Class implementation for 'DeleteVisitor'

!		Class methods for 'DeleteVisitor'

category: 'instance creation'
classmethod: DeleteVisitor
delete: aReference
	^ self new visit: aReference
%

!		Instance methods for 'DeleteVisitor'

category: 'visiting'
method: DeleteVisitor
visit: aReference
	PostorderGuide 
		show: aReference 
		to: self 
		selecting: [ :entry | entry isSymlink not ]
%

category: 'visiting'
method: DeleteVisitor
visitReference: anEntry
	anEntry reference delete
%

! Class implementation for 'MemoryFileSystemEntry'

!		Class methods for 'MemoryFileSystemEntry'

category: 'instance creation'
classmethod: MemoryFileSystemEntry
named: aFileName
	^ self new
		basename: aFileName;
		yourself
%

category: 'instance creation'
classmethod: MemoryFileSystemEntry
new

	^ self basicNew
		initialize;
		yourself
%

!		Instance methods for 'MemoryFileSystemEntry'

category: 'accessing'
method: MemoryFileSystemEntry
basename
	^ basename
%

category: 'accessing'
method: MemoryFileSystemEntry
basename: aString
	basename := aString
%

category: 'accessing'
method: MemoryFileSystemEntry
creationTime
	
	^ creationTime
%

category: 'accessing'
method: MemoryFileSystemEntry
fileSize
	self subclassResponsibility 
%

category: 'initialization'
method: MemoryFileSystemEntry
initialize 
	creationTime := modificationTime := DateAndTime now.
%

category: 'testing'
method: MemoryFileSystemEntry
isDirectory
	self subclassResponsibility
%

category: 'testing'
method: MemoryFileSystemEntry
isFile
	^ self isDirectory not
%

category: 'accessing'
method: MemoryFileSystemEntry
modificationTime
	^ modificationTime
%

category: 'accessing'
method: MemoryFileSystemEntry
modificationTime: anObject
	
	modificationTime := anObject
%

category: 'private'
method: MemoryFileSystemEntry
modified
	modificationTime := DateAndTime now.
%

! Class implementation for 'MemoryFileSystemDirectory'

!		Instance methods for 'MemoryFileSystemDirectory'

category: 'creation'
method: MemoryFileSystemDirectory
ensureCreateDirectory: aDirectoryName
	^ self 
		fileEntryAt: aDirectoryName
		put: (self class named: aDirectoryName)
%

category: 'creation'
method: MemoryFileSystemDirectory
ensureCreateFile: aFileName
	^ self 
		fileEntryAt: aFileName 
		put: (MemoryFileSystemFile named: aFileName)
%

category: 'accessing'
method: MemoryFileSystemDirectory
entries
	^ entries
%

category: 'enumeration'
method: MemoryFileSystemDirectory
fileEntriesDo: aBlock
	
	entries keys sort do: [ :fileName|
		aBlock value: (entries at: fileName)].
%

category: 'accessing'
method: MemoryFileSystemDirectory
fileEntriesIncludes: aFileName
	^ entries includesKey: aFileName
%

category: 'accessing'
method: MemoryFileSystemDirectory
fileEntryAt: aFileName
	^ entries at: aFileName
%

category: 'accessing'
method: MemoryFileSystemDirectory
fileEntryAt: aFileName ifAbsent: aBlock
	^ entries at: aFileName ifAbsent: aBlock
%

category: 'accessing'
method: MemoryFileSystemDirectory
fileEntryAt: aFileName ifPresent: aBlock
	^ (entries at: aFileName ifAbsent: [])
			ifNotNil: [:entry | aBlock value: entry ]
%

category: 'accessing'
method: MemoryFileSystemDirectory
fileEntryAt: aFileName put: anEntry
	^ entries 
		at: aFileName 
		ifAbsentPut: [
			self modified.
			anEntry ]
%

category: 'accessing'
method: MemoryFileSystemDirectory
fileEntryRemove: aFileName
	^ self fileEntryRemove: aFileName ifAbsent: [ FileDoesNotExistException signalWith: aFileName ]
%

category: 'accessing'
method: MemoryFileSystemDirectory
fileEntryRemove: aFileName ifAbsent: absentBlock
	| deletedEntry |
	deletedEntry := entries removeKey: aFileName ifAbsent: [ ^ absentBlock value ].
	modificationTime := DateAndTime now.
	^ deletedEntry
%

category: 'accessing'
method: MemoryFileSystemDirectory
fileSize
	^ 0
%

category: 'initialization'
method: MemoryFileSystemDirectory
initialize
	super initialize.
	entries := Dictionary new.
%

category: 'testing'
method: MemoryFileSystemDirectory
isDirectory
	^ true
%

! Class implementation for 'MemoryFileSystemFile'

!		Instance methods for 'MemoryFileSystemFile'

category: 'stream-protocol'
method: MemoryFileSystemFile
at: index
	^ bytes at: index
%

category: 'stream-protocol'
method: MemoryFileSystemFile
at: index put: anObject
	index > bytes size
		ifTrue: [ self grow ].
	bytes
		at: index
		put:
			(anObject isCharacter
				ifTrue: [ anObject codePoint ]
				ifFalse: [ anObject ]).
	size := size max: index.
	self modified
%

category: 'stream-protocol'
method: MemoryFileSystemFile
at: index read: aCollection startingAt: start count: count 
	| max stop |
	max := size - index + 1 min: count.
	stop := start + max - 1.
	aCollection 
		replaceFrom: start
		to: stop
		with: bytes
		startingAt: index.
	^ stop - start + 1
%

category: 'stream-protocol'
method: MemoryFileSystemFile
at: first write: aCollection startingAt: start count: count
	| last |
	last := first + count - 1.
	last > bytes size
		ifTrue: [ self grownBy: last - size ].
	bytes
		replaceFrom: first
		to: last
		with: aCollection
		startingAt: start.
	size := last.
	self modified
%

category: 'open/close'
method: MemoryFileSystemFile
basicOpen
	closed := false
%

category: 'streams-compatibility'
method: MemoryFileSystemFile
binaryReadStream
	^ ReadStreamPortable on: self bytes from: 1 to: size
%

category: 'streams'
method: MemoryFileSystemFile
binaryWriteStream
	^ MemoryFileWriteStream on: self
%

category: 'accessing'
method: MemoryFileSystemFile
bytes
	^ bytes
%

category: 'open/close'
method: MemoryFileSystemFile
close
	 closed := true
%

category: 'testing'
method: MemoryFileSystemFile
closed
	^ closed
%

category: 'stream-protocol'
method: MemoryFileSystemFile
copyFrom: from to: position
	^ bytes copyFrom: from to: position
%

category: 'accessing'
method: MemoryFileSystemFile
fileSize
	^ size
%

category: 'stream-protocol'
method: MemoryFileSystemFile
grow
	self grownBy: self sizeIncrement
%

category: 'accessing'
method: MemoryFileSystemFile
grownBy: length
	bytes := bytes grownBy: length.
	self modified
%

category: 'initialization'
method: MemoryFileSystemFile
initialize
	super initialize.
	bytes := ByteArray new.
	size := 0.
	closed := false
%

category: 'accessing'
method: MemoryFileSystemFile
internalSize
	^ bytes size
%

category: 'testing'
method: MemoryFileSystemFile
isDirectory
	^ false
%

category: 'stream-protocol'
method: MemoryFileSystemFile
readStream
	^ ReadStream on: self bytes asString from: 1 to: size
%

category: 'accessing'
method: MemoryFileSystemFile
size

	^ size
%

category: 'accessing'
method: MemoryFileSystemFile
sizeIncrement
	^ (bytes size min: 20) max: 1024
%

category: 'accessing'
method: MemoryFileSystemFile
truncate
	self truncateTo: size
%

category: 'accessing'
method: MemoryFileSystemFile
truncateTo: aSize
	bytes size = aSize
		ifFalse: [ bytes := bytes size < aSize
				ifTrue: [ (ByteArray new: aSize)
						replaceFrom: 1
						to: bytes size
						with: bytes
						startingAt: 1 ]
				ifFalse: [ bytes copyFrom: 1 to: aSize ] ].
	size := bytes size.
	self modified
%

category: 'private'
method: MemoryFileSystemFile
updateContents: aCollection
	bytes := aCollection.
	self updateSize: aCollection size
%

category: 'private'
method: MemoryFileSystemFile
updateSize: newSize
	size := newSize.
	self modified
%

category: 'stream-protocol'
method: MemoryFileSystemFile
writeStreamDo: aBlock
	ByteArray
		streamContents: [ :aStream | 
			aBlock value: aStream.
			bytes := aStream contents ].
	self updateSize: bytes size
%

! Class implementation for 'MemoryFileWriteStream'

!		Class methods for 'MemoryFileWriteStream'

category: 'instance creation'
classmethod: MemoryFileWriteStream
on: aFile

	^ self new
		file: aFile;
		yourself
%

!		Instance methods for 'MemoryFileWriteStream'

category: 'opening-closing'
method: MemoryFileWriteStream
close
	self stream close.
	file close
%

category: 'opening-closing'
method: MemoryFileWriteStream
closed
	^ file closed
%

category: 'accessing'
method: MemoryFileWriteStream
file: aMemoryFileSystemFile 
	file := aMemoryFileSystemFile
%

category: 'writing'
method: MemoryFileWriteStream
flush
	file updateContents: self stream contents
%

category: 'testing'
method: MemoryFileWriteStream
isBinary
	^ self stream isBinary
%

category: 'writing'
method: MemoryFileWriteStream
nextPut: aCollection
	^ self stream nextPut: aCollection
%

category: 'writing'
method: MemoryFileWriteStream
nextPutAll: aCollection
	^ self stream nextPutAll: aCollection
%

category: 'positioning'
method: MemoryFileWriteStream
position
	^ self stream position
%

category: 'positioning'
method: MemoryFileWriteStream
setToEnd
	^ self stream setToEnd
%

category: 'accessing'
method: MemoryFileWriteStream
size
	^ file size
%

category: 'accessing'
method: MemoryFileWriteStream
stream
	^ stream ifNil: [ stream := WriteStreamPortable on: file bytes from: 1 to: file size ]
%

! Class implementation for 'Path'

!		Class methods for 'Path'

category: 'instance creation'
classmethod: Path
* aString
	"Answer a relative path with aString as its sole segment. For example,
	Path * 'griffle' will produce the same result as ./griffle in a unix shell.
	The selector #* was chosen for it's visual similarity to $."
	
	"Note: aString is not parsed, so supplying a string like '/griffle/plonk'
	will not create an absolute path."
	
	^ RelativePath with: aString
%

category: 'instance creation'
classmethod: Path
/ aString
	"Answer an absolute path with aString as it's sole segment. The selector
	was chosen to allow path construction with Smalltalk syntax, which 
	neverthelesss resembles paths as they appear in a unix shell. Eg.
	Path / 'griffle' / 'plonk'."
	
	aString isEmptyOrNil 
		ifTrue: [ Error signal: 'Path element cannot be empty or nil'].
	^ AbsolutePath with: aString
%

category: 'private'
classmethod: Path
addElement: element to: result
	element = '..'
		ifTrue: [ ^ self addParentElementTo: result ].
	element = ''
		ifTrue: [ ^ self addEmptyElementTo: result ].
	element = '.'
		ifFalse: [ result add: element ]
%

category: 'private'
classmethod: Path
addEmptyElementTo: result
	result isEmpty ifTrue: [result add: '']
		
%

category: 'private'
classmethod: Path
addParentElementTo: result
	(result isEmpty or: [ result last = '..' ])
		ifTrue: [ result add: '..' ]
		ifFalse: [ result removeLast ]
		
%

category: 'private'
classmethod: Path
canonicalizeElements: aCollection
	| result |
	result := OrderedCollection new.
	aCollection do: [ :element |
		self addElement: element to: result].
	^ result
%

category: 'encodings'
classmethod: Path
delimeter
	"Internal path delimeter"
	
	^$/
%

category: 'encodings'
classmethod: Path
extensionDelimiter
	"Return the extension delimiter character."
	^ $.
%

category: 'instance creation'
classmethod: Path
from: aString
	"Answer an instance of the receiver with the supplied path using the default delimiter"

	^ self from: aString delimiter: self delimeter
%

category: 'instance creation'
classmethod: Path
from: aString delimiter: aDelimiterCharacter 
	"Answer a path composed of several elements delimited by aCharacter"
	| pathClass splitPathElements |
	aString isEmpty
		ifTrue: [ ^ self root ].

	aString first = $$
		ifTrue: [
			| pathElements envVarString envVarElement eVar |
			"GemStone paths are allowed to start with an environment variable"
			pathElements := aDelimiterCharacter split: aString.
			envVarElement := (pathElements at: 1) .
			envVarString := System gemEnvironmentVariable: (eVar := envVarElement copyFrom: 2 to: envVarElement size). 
      envVarString ifNil:[ Error signal:'environment variable ' , eVar ,' not defined']. 
      envVarString := envVarString decodeFromUTF8 asString .
			pathClass :=  ((self isAbsolutePath: envVarString delimiter: aDelimiterCharacter) or: 
									[self isAbsoluteWindowsPath: envVarString]) 
				ifTrue: [ AbsolutePath ]
				ifFalse:[ RelativePath ].
			splitPathElements :=  (aDelimiterCharacter split: envVarString) , (pathElements copyFrom: 2 to: pathElements size) ]
		ifFalse: [ 	
			pathClass :=  ((self isAbsolutePath: aString delimiter: aDelimiterCharacter) or: 
									[self isAbsoluteWindowsPath: aString]) 
				ifTrue: [ AbsolutePath ]
				ifFalse:[ RelativePath ] .
			splitPathElements := aDelimiterCharacter split: aString. ].
	
	^ pathClass withAll: splitPathElements
%

category: 'ston'
classmethod: Path
fromSton: stonReader
	| elements |
	elements := Array streamContents: [ :out |
		stonReader parseListDo: [ :each | out nextPut: each ] ].
	^ self withAll: elements
%

category: 'private'
classmethod: Path
isAbsolutePath: aString delimiter: aCharacter
	"Answer a boolean indicating whether the supplied path is considered absolute"

	^aString first = aCharacter
%

category: 'private'
classmethod: Path
isAbsoluteUnixPath: aString
	^aString first = $/ 
%

category: 'private'
classmethod: Path
isAbsoluteWindowsPath: aString
	aString ifEmpty: [ ^ false ].
	(aString first = $\) ifTrue: [ ^ true ]. "e.g. \file"
	^ ((aString size > 2) and: [ aString first isLetter ])
		ifTrue: [ (aString second = $:) and: [aString third = $\] ] "e.g. C:\..."
		ifFalse: [ false ]
%

category: 'instance creation'
classmethod: Path
parent
	"Answer a path that resolves to the parent of the current
	working directory. This is similar to .. in unix, but doesn't
	rely on actual hardlinks being present in the filesystem."

	^ RelativePath with: '..'
%

category: 'instance creation'
classmethod: Path
parents: anInteger
	| path |
	path := self new: anInteger.
	1 to: anInteger do: [:i | path at: i put: '..'].
	^ path
%

category: 'private'
classmethod: Path
removeRedundantSegments: segments
	"Remove redundant elements ('.' and '') from the supplied segments"

	^segments select:
		[ :segment | segment notEmpty and: [ segment ~= '.' ] ]
%

category: 'instance creation'
classmethod: Path
root
	"Answer the root path - ie, / on unix"
	
	^ AbsolutePath new
%

category: 'private'
classmethod: Path
with: aString
	"Answer an instance of the receiver representing the supplied string.
	This should only be sent to one of the concrete subclasses, e.g. AbsolutePath and RelativePath"
	| inst parsedCollection |

	parsedCollection := self delimeter split: aString.
	parsedCollection := self removeRedundantSegments: parsedCollection.
	inst := self new: parsedCollection size.
	parsedCollection withIndexDo: [:segment :index |
		inst at: index put: segment].
	^ inst
%

category: 'private'
classmethod: Path
withAll: aCollection
	"Answer an instance of the receiver representing the supplied collection of strings.
	This should only be sent to one of the concrete subclasses, e.g. AbsolutePath and RelativePath"
	| inst parsedCollection |

	parsedCollection := OrderedCollection new: (aCollection size max: 10).
	aCollection do: [ :each |
		parsedCollection addAll: (self delimeter split: each) ].
	parsedCollection := self removeRedundantSegments: parsedCollection.
	inst := self new: parsedCollection size.
	parsedCollection withIndexDo: [:segment :index |
		inst at: index put: segment].
	^ inst
%

category: 'instance creation'
classmethod: Path
workingDirectory
	"Answer a path that will always resolve to the current working directory."
	
	^ RelativePath new
%

!		Instance methods for 'Path'

category: 'navigating'
method: Path
, extension 
	^ self withName: self basename extension: extension
%

category: 'navigating'
method: Path
/ aString
	"aString is either a file or path.  If aString is relative, it is appended to the receiver, if it is absolute, an instance of the receiver with the path is answered"

	aString isEmptyOrNil 
		ifTrue: [ Error signal: 'Path element cannot be empty or nil'].

	^self resolvePath: (self class from: aString)
%

category: 'comparing'
method: Path
<= other
	^ self fullName <= other fullName
%

category: 'comparing'
method: Path
= other
	^ self species = other species
		and: [self size = other size
			and: [(1 to: self size) allSatisfy: [:i | (self at: i) = (other at: i)]]]
%

category: 'converting'
method: Path
asPath
	^ self
%

category: 'converting'
method: Path
asPathWith: anObject
	^ self
%

category: 'navigating'
method: Path
asResolvedBy: anObject
	^ anObject resolvePath: self
%

category: 'accessing'
method: Path
base
	^self basenameWithoutExtension 
%

category: 'accessing'
method: Path
basename
	"Returns the base of the basename, 
		i.e. 
		/foo/gloops.taz basename is 'gloops.taz'
		If empty, it is the emptyPathString"

	self isEmpty ifTrue: 
		[ ^ self emptyPathString ].
	^ self at: self size
%

category: 'accessing'
method: Path
basename: newBasename
	"change the basename"
	self size == 0
		"the root node"
		ifTrue: [ ^ Error signal: '0 length Path, cannot change basename'].
	self at: self size put: newBasename
%

category: 'accessing'
method: Path
basenameWithoutExtension
	"Returns the base of the basename but without its extension, 
		i.e. 
		/foo/gloops.taz basenameWithoutExtension is 'gloops'
		/ basenameWithoutExtension is '/'"
	
	^ self basename copyUpToLast: self extensionDelimiter
%

category: 'accessing'
method: Path
basenameWithoutExtension: anExtension
	"Returns the basename without specified extension (if any)
	('/foo/gloops.taz' asPath basenameWithoutExtension: 'taz') = 'gloops'
	"
	| extensionWithDelimiter |

	extensionWithDelimiter := anExtension copyWithFirst: self extensionDelimiter.
	(self basename endsWith: extensionWithDelimiter)
		ifTrue: [^ self basename allButLast: extensionWithDelimiter size]
		ifFalse: [ ^ self basename ]
%

category: 'navigating'
method: Path
canonicalize
	"Answer the receiver with references to the current folder (.) and parent folder (..) removed"
	
	^self class withAll: (self class canonicalizeElements: self segments).
%

category: 'comparing'
method: Path
contains: anObject
	"Return true if anObject is in a subfolder of me"
	^ anObject isContainedBy: self
%

category: 'comparing'
method: Path
containsPath: aPath
	self size < aPath size ifFalse: [^ false].
	1	to: self size 
		do: [:i | (self at: i) = (aPath at: i) ifFalse: [^ false]].
	^ true
%

category: 'comparing'
method: Path
containsReference: aReference
	^ false
%

category: 'private'
method: Path
copyFrom: aPath
	| size |
	size := aPath size min: self size.
	1 to: size do: [:i | self at: i put: (aPath at: i)].
	
%

category: 'accessing'
method: Path
delimiter
	^ $/
%

category: 'enumerating'
method: Path
do: aBlock 
	1 
		to: self size
		do: 
			[ :index || segment |
			segment := self at: index.
			segment isEmpty ifFalse: [ aBlock value: segment ] ]
%

category: 'accessing'
method: Path
emptyPathString
	"Answer the string representing an empty (size = 0) instance of the receiver"

	^self delimiter asString
%

category: 'accessing'
method: Path
extension
	"Return the extension of path basename i.e., /foo/gloops.taz extension is 'taz'"
	
	^ self basename copyAfterLast: self extensionDelimiter
%

category: 'accessing'
method: Path
extensionDelimiter
	^ self class extensionDelimiter
%

category: 'accessing'
method: Path
extensions
	"Return the extensions of the receiver in order of appearance"
	"(Path from: '/foo/bar.tar.gz') extensions"
	^ (self extensionDelimiter split: self basename) allButFirst
%

category: 'accessing'
method: Path
fullName
	"Return the fullName of the receiver."
	
	^ self pathString
%

category: 'comparing'
method: Path
hash

"Returns a numeric hash key for the receiver."

| mySize interval hashValue |

(mySize := self size) == 0
  ifTrue: [ ^15243 ].

"Choose an interval so that we sample at most 5 elements of the receiver"
interval := ((mySize - 1) // 4) max: 1.

hashValue := 4459.
1 to: mySize by: interval do: [ :i | | anElement |
  anElement := self at: i.
  hashValue := (hashValue bitShift: -1) bitXor: anElement hash.
  ].

^ hashValue abs
%

category: 'testing'
method: Path
isAbsolute
	self subclassResponsibility 
%

category: 'private'
method: Path
isAllParents
	1 to: self size do: [:i | (self at: i) = '..' ifFalse: [^ false]].
	^ true
%

category: 'comparing'
method: Path
isChildOf: anObject
	^ self parent = anObject
%

category: 'comparing'
method: Path
isContainedBy: anObject
	"DoubleDispatch helper for #contains:"
	^ anObject containsPath: self
%

category: 'testing'
method: Path
isEmpty
	^ self size = 0
%

category: 'testing'
method: Path
isRelative
	^ self isAbsolute not
%

category: 'testing'
method: Path
isRoot
	self subclassResponsibility 
%

category: 'testing'
method: Path
isWorkingDirectory
	^ self size = 0
%

category: 'private'
method: Path
lengthOfStemWith: aPath
	| limit index |
	limit := self size min: aPath size.
	index := 1.
	[index <= limit and: [(self at: index) = (aPath at: index)]] 
		whileTrue: [index := index + 1].
	^ index - 1
%

category: 'navigating'
method: Path
makeRelative: anObject
	^ anObject relativeToPath: self
%

category: 'navigating'
method: Path
parent
	| size parent |
	self isRoot ifTrue: [^ self].
	self isAllParents ifTrue: [^ self / '..'].
	
	size := self size - 1.
	parent := self class new: size.
	1 to: size do: [:i | parent at: i put: (self at: i)].
	^ parent
%

category: 'navigating'
method: Path
parentUpTo: aParentDirName
	"Answers the path of the parent dir with name aParentDirName or root if not found."

	self withParents
		reverseDo: [ :dir | 
			dir basename = aParentDirName
				ifTrue: [ ^ dir ] ].
	^ Path root
%

category: 'printing'
method: Path
pathString
	"Return a string containing the path elements of the receiver, without the 'Path *' part"

	"((FileSystem workingDirectory / 'book-result' / 'W01-Welcome')
		relativeToReference: FileSystem workingDirectory) pathString
	>>> 'book-result/W01-Welcome'"

	^String streamContents: [ :stream | 
		self printPathOn: stream delimiter: self delimiter ]
%

category: 'printing'
method: Path
printOn: aStream 
	self printOn: aStream delimiter: self delimiter.
%

category: 'printing'
method: Path
printOn: aStream delimiter: aCharacter
	(1 to: self size)
		do: [:index | aStream nextPutAll: (self at: index)]
		separatedBy: [aStream nextPut: aCharacter]
%

category: 'printing'
method: Path
printPathOn: aStream
	"Print the receiver's path on aStream (without 'Path' prepended) using the default delimiter"
	"String streamContents: [ :str| 
		((FileSystem workingDirectory / 'book-result' / 'W01-Welcome') 
			relativeToReference: FileSystem workingDirectory) printPathOn: str]
	>>> 'book-result/W01-Welcome'"

	self printPathOn: aStream delimiter: self delimiter.
%

category: 'printing'
method: Path
printPathOn: aStream delimiter: aCharacter
	"Print the receiver's path on aStream (without 'Path' prepended)"
	"String streamContents: [ :str| 
		((FileSystem workingDirectory / 'book-result' / 'W01-Welcome')
			relativeToReference: FileSystem workingDirectory) printPathOn: str delimiter: $|]
	>>> 'book-result|W01-Welcome'"

	(1 to: self size)
		do: [:index | aStream nextPutAll: (self at: index)]
		separatedBy: [aStream nextPut: aCharacter]
%

category: 'printing'
method: Path
printWithDelimiter: aCharacter
	^ String streamContents: [:out | self printOn: out delimiter: aCharacter]
%

category: 'navigating'
method: Path
relativeTo: anObject
	^ anObject makeRelative: self
%

category: 'navigating'
method: Path
relativeToPath: aPath
	"Return the receiver as relative to the argument aPath"

	"(Path / 'griffle' / 'plonk' / 'nurp') 
		relativeToPath: (Path / 'griffle') 
			returns  plonk/nurp"

	| prefix relative |
	prefix := self lengthOfStemWith: aPath.
	relative := RelativePath parents: aPath size - prefix.
	prefix + 1 to: self size do: [ :i | relative := relative / (self at: i) ].
	^ relative
%

category: 'navigating'
method: Path
resolve
	^ self
%

category: 'navigating'
method: Path
resolve: anObject
	"Return a path in which the argument has been interpreted in the context of the receiver. Different 
	argument types have different resolution semantics, so we use double dispatch to resolve them correctly."
	
	^ anObject asResolvedBy: self
%

category: 'navigating'
method: Path
resolvePath: aPath
	"Answers a path created by resolving the argument against the receiver.
	If the argument is abolute answer the argument itself. Otherwise, concatenate the
	two paths."

	| elements |

	aPath isAbsolute ifTrue: [^ aPath].
	elements := Array new: self size + aPath size.

	1 to: self size do: [:i | elements at: i put: (self at: i)].
	1 to: aPath size do: [:i | elements at: self size + i put: (aPath at: i)].
	
	^ self class withAll: elements
%

category: 'navigating'
method: Path
resolveReference: aReference
	^ aReference
%

category: 'navigating'
method: Path
resolveString: aString
	"Treat strings as relative paths with a single element."
	
	^ self / aString
%

category: 'accessing'
method: Path
segments
	"return an array with all the path segements separated"
	| segments |
	
	segments := OrderedCollection new.
	
	self do: [ :part|
		segments add: part
	].
	
	^ segments asArray 
%

category: 'ston'
method: Path
stonOn: stonWriter
	stonWriter 
		writeObject: self 
		streamShortList: [ :listWriter | 
			self do: [ :each | listWriter add: each ] ]
%

category: 'navigating'
method: Path
withExtension: extension 
	| basename name |
	basename := self basename.
	^ (basename endsWith: extension) 
		ifTrue: [ self ]
		ifFalse: 
			[name := basename copyUpToLast: self extensionDelimiter.
			self withName: name extension: extension]
%

category: 'private'
method: Path
withName: name extension: extension
	| basename |
	basename :=String streamContents:
		[:out |
		out nextPutAll: name.
		out nextPut: self extensionDelimiter.
		out nextPutAll: extension].
	^ self copy 
		at: self size put: basename;
		yourself
%

category: 'enumerating'
method: Path
withParents
	| paths |
	paths := OrderedCollection new.
	1 to: self size -1 do: [ :index | paths add: ((self class new: index) copyFrom: self) ].
	paths add: self.
	
	^ paths
%

! Class implementation for 'AbsolutePath'

!		Class methods for 'AbsolutePath'

category: 'as yet unclassified'
classmethod: AbsolutePath
addEmptyElementTo: result
%

category: 'as yet unclassified'
classmethod: AbsolutePath
from: aString delimiter: aDelimiterCharater
	aString = '/'
		ifTrue: [ ^ self root ].
		
	^ super from: aString delimiter: aDelimiterCharater
%

!		Instance methods for 'AbsolutePath'

category: 'printing'
method: AbsolutePath
asString
  "used by topaz stack display"
  | str sz |
  str := '/' copy .
  1 to: (sz := self size) - 1 do:[:j | str addAll: (self at: j) ; add: $/ ].
  str add: (self at: sz ).
  ^ str
%

category: 'testing'
method: AbsolutePath
isAbsolute
	^ true
%

category: 'testing'
method: AbsolutePath
isRoot
	^ self size = 0
%

category: 'printing'
method: AbsolutePath
printOn: aStream
	aStream nextPutAll: 'Path'.
	self isRoot
		ifTrue: [aStream nextPutAll: ' root']
		ifFalse:
			[1 to: self size do:
				[:i |
				aStream 
					nextPutAll: ' / ''';
				 	nextPutAll: (self at: i);
					nextPut: $']]
%

category: 'printing'
method: AbsolutePath
printPathOn: aStream delimiter: aCharacter
	"Print the path elements of the receiver, without the 'Path *' part"

	aStream nextPut: aCharacter.
	super printPathOn: aStream delimiter: aCharacter
%

category: 'enumerating'
method: AbsolutePath
withParents
	^ super withParents addFirst: (Path root); yourself
%

! Class implementation for 'RelativePath'

!		Instance methods for 'RelativePath'

category: 'accessing'
method: RelativePath
emptyPathString
	"Answer the string representing an empty (size = 0) instance of the receiver.
	For a relative path, this is the current directory"

	^'.'
%

category: 'testing'
method: RelativePath
isAbsolute
	^ false
%

category: 'testing'
method: RelativePath
isRoot
	^ false
%

category: 'printing'
method: RelativePath
printOn: aStream
	aStream nextPutAll: 'Path '.
	self isWorkingDirectory
		ifTrue: [aStream nextPutAll: 'workingDirectory']
		ifFalse: 
			[aStream 
				nextPutAll: '* ''';
				nextPutAll: (self at: 1) asString;
				nextPut: $'.
			2 to: self size do:
				[:i |
				aStream
					nextPutAll: ' / ''';
					nextPutAll: (self at: i);
					nextPut: $']]
					
			
%

category: 'printing'
method: RelativePath
printOn: aStream delimiter: aCharacter
	self isWorkingDirectory ifTrue: [aStream nextPut: $.. ^ self].
	super printOn: aStream delimiter: aCharacter
%

! Class implementation for 'ZnBufferedReadStream'

!		Class methods for 'ZnBufferedReadStream'

category: 'instance creation'
classmethod: ZnBufferedReadStream
new

	^ self basicNew
		initialize;
		yourself
%

category: 'instance creation'
classmethod: ZnBufferedReadStream
on: readStream
	^ self new
		on: readStream;
		yourself
%

category: 'convenience'
classmethod: ZnBufferedReadStream
on: readStream do: block
	"Execute block with as argument a ZnBufferedReadStream on readStream.
	Return the value of block."

	^ block value: (self on: readStream)
%

!		Instance methods for 'ZnBufferedReadStream'

category: 'testing'
method: ZnBufferedReadStream
atEnd
	^ position > limit and: [ stream atEnd ]
	
%

category: 'initialize-release'
method: ZnBufferedReadStream
close
	stream close
%

category: 'testing'
method: ZnBufferedReadStream
closed
	^ stream closed
%

category: 'accessing'
method: ZnBufferedReadStream
collectionSpecies
	^ stream isBinary
		ifTrue: [ ByteArray ]
		ifFalse: [ String ]
%

category: 'accessing'
method: ZnBufferedReadStream
contents
	
	^ self upToEnd
%

category: 'accessing'
method: ZnBufferedReadStream
defaultBufferSize
	^ 2 raisedToInteger: 16
%

category: 'private'
method: ZnBufferedReadStream
discardBuffer
	limit := 0.
	position := 1
%

category: 'initialization'
method: ZnBufferedReadStream
initialize

	position := 1.
	limit := 0
%

category: 'accessing-bytes'
method: ZnBufferedReadStream
int16
	^ self nextIntegerOfSize: 2 signed: true bigEndian: true 
%

category: 'accessing-bytes'
method: ZnBufferedReadStream
int32
	^ self nextIntegerOfSize: 4 signed: true bigEndian: true
%

category: 'accessing-bytes'
method: ZnBufferedReadStream
int8
	^ self nextIntegerOfSize: 1 signed: true bigEndian: true 
%

category: 'accessing'
method: ZnBufferedReadStream
isBinary
	^ stream isBinary
%

category: 'testing'
method: ZnBufferedReadStream
isStream
	^ true
%

category: 'accessing'
method: ZnBufferedReadStream
next
	"Return the next element and move over it"
	
	position > limit
		ifTrue: [ self nextBuffer ].
	^ position <= limit
		ifTrue: [ 
			| char |
			char := buffer at: position.
			position := position + 1.
			char ]
		ifFalse: [ nil ]
%

category: 'accessing'
method: ZnBufferedReadStream
next: requestedCount 
	"Read requestedCount elements and return them as a collection.
	If less are available, a smaller collection will be returned."

	^ self 
		next: requestedCount 
		into: (self collectionSpecies new: requestedCount)
%

category: 'accessing'
method: ZnBufferedReadStream
next: requestedCount into: collection
	"Read requestedCount elements into collection,
	returning a copy if less elements are available"
	
	^ self 
		next: requestedCount 
		into: collection 
		startingAt: 1   
%

category: 'accessing'
method: ZnBufferedReadStream
next: requestedCount into: collection startingAt: offset
	"Read requestedCount elements into collection starting at offset,
	returning a copy if less elements are available"
	
	| read |
	read := self 
		readInto: collection 
		startingAt: offset 
		count: requestedCount.
	^ read = requestedCount 
		ifTrue: [ collection ]
		ifFalse: [ collection copyFrom: 1 to: offset + read - 1 ]     
%

category: 'private'
method: ZnBufferedReadStream
nextBuffer
	stream atEnd ifTrue: [ ^ self ].
	limit := stream readInto: buffer startingAt: 1 count: buffer size.
	position := 1
%

category: 'accessing-bytes'
method: ZnBufferedReadStream
nextInt32
	^ self nextIntegerOfSize: 4 signed: true bigEndian: true
%

category: 'accessing-bytes'
method: ZnBufferedReadStream
nextIntegerOfSize: numberOfBytes signed: signed bigEndian: bigEndian
	"Assuming the receiver is a stream of bytes, read the next integer of size numberOfBytes.
	If bigEndian is true, use network byte order, most significant byte first, 
	else use little endian order, least significant byte first.
	If signed is true, interpret as a two-complement signed value, 
	else interpret as a plain unsigned value."
	
	| value |
	value := 0.
	bigEndian
		ifTrue: [ 
			(numberOfBytes - 1) * 8 to: 0 by: -8 do: [ :shift |
				value := value + (self next bitShift: shift) ] ]
		ifFalse: [ 
			0 to: (numberOfBytes - 1) * 8 by: 8 do: [ :shift |
				value := value + (self next bitShift: shift) ] ].
	^ (signed and: [ (value bitAt: numberOfBytes * 8) = 1 ])
		ifTrue: [ value - (1 << (numberOfBytes * 8)) ]
		ifFalse: [ value ]
%

category: 'accessing'
method: ZnBufferedReadStream
nextInto: collection
	"Read the next elements of the receiver into collection,
	returning a copy if less elements are available"
	
	^ self
		next: collection size
		into: collection
%

category: 'accessing'
method: ZnBufferedReadStream
nextLine
"Answer next line (may be empty) without line end delimiters, or nil if at end.
Leave the stream positioned after the line delimiter(s).
Handle a zoo of line delimiters CR, LF, or CR-LF pair"

| cr lf chrcls result ch |
self atEnd ifTrue: [^nil].
cr := (chrcls:= Character) cr.
lf := chrcls  lf.
result := self collectionSpecies new.
[ ch := self next .
  (ch == cr or:[ ch == lf ]) ifTrue:[ 
    ch == cr ifTrue:[ self peekFor: lf ].
    ^ result 
  ].
  result add: ch .
  self atEnd 
] whileFalse .
^ result
%

category: 'accessing-bytes'
method: ZnBufferedReadStream
nextLittleEndianNumber: numberOfBytes
	^ self nextIntegerOfSize: numberOfBytes signed: false bigEndian: false
%

category: 'accessing-bytes'
method: ZnBufferedReadStream
nextNumber: numberOfBytes
	^ self nextIntegerOfSize: numberOfBytes signed: false bigEndian: true
%

category: 'accessing-bytes'
method: ZnBufferedReadStream
nextWord
	^ self nextIntegerOfSize: 2 signed: false bigEndian: true
%

category: 'initialize-release'
method: ZnBufferedReadStream
on: readStream
	stream := readStream.
	self sizeBuffer: self defaultBufferSize
%

category: 'accessing'
method: ZnBufferedReadStream
peek
	"Return the next element but do not move over it"
	
	position > limit
		ifTrue: [ self nextBuffer ].
	^ position <= limit
		ifTrue: [ buffer at: position ]
		ifFalse: [ nil ]
%

category: 'accessing'
method: ZnBufferedReadStream
peek: count
  self peek .
  ^ buffer copyFrom: position to: (position + count min: limit)
%

category: 'accessing'
method: ZnBufferedReadStream
peekFor: object
	"Answer false and do not move over the next element if it is not equal to object, or if the receiver is at the end. 
	Answer true and move over the next element when it is equal to object."

	^ self peek = object
		ifTrue: [ 
			self next.
			true ]
		ifFalse: [ false ]
%

category: 'accessing'
method: ZnBufferedReadStream
position
	
	"If the buffer advanced, we need to check the original stream position, minus what we have read.
	The -1 is because the buffer is base 1"
	^ stream position - limit + position - 1
%

category: 'accessing'
method: ZnBufferedReadStream
position: anInteger 
	
	| bufferEnd bufferStart |
	bufferEnd := stream position.
	bufferStart := bufferEnd - limit.
	(anInteger between: bufferStart and: bufferEnd)
		ifTrue: [ position := anInteger - bufferStart + 1 ]
		ifFalse: [ 
			"We reset the buffer and update the position in the underlying stream"
			limit := 0.
			position := 1.
			stream position: anInteger ]
%

category: 'private'
method: ZnBufferedReadStream
readFromBufferInto: collection startingAt: offset count: requestedCount
	"Read up to requestedCount elements into collection starting at offset,
	from my buffer, answering the number of elements read.
	There could be fewer elements buffered."

	| read |
	read := 0.
	position <= limit
		ifTrue: [ read := limit - position + 1 min: requestedCount.
			collection
				replaceFrom: offset
				to: offset + read - 1
				with: buffer
				startingAt: position.
			position := position + read ].
	^ read
%

category: 'accessing'
method: ZnBufferedReadStream
readInto: collection startingAt: offset count: requestedCount
	"Read requestedCount elements into collection starting at offset,
	answering the number of elements read, there could be fewer elements available."

	| countRead countYetToRead |
	"First, read from elements already in my buffer."
	countRead := self readFromBufferInto: collection startingAt: offset count: requestedCount.
	countYetToRead := requestedCount - countRead.
	countYetToRead > 0
		ifTrue: [ "See if there are more elements to be read from the underlying stream"
			| newOffset |
			newOffset := offset + countRead.
			(self shouldBufferReadOfCount: countYetToRead)
				ifTrue: [ self nextBuffer.
					position > limit ifTrue: [ ^ countRead ].
					limit > 0
						ifTrue:
							[ countRead := countRead + (self readInto: collection startingAt: newOffset count: countYetToRead) ] ]
				ifFalse:
					[ countRead := countRead + (stream readInto: collection startingAt: newOffset count: countYetToRead) ] ].
	^ countRead
%

category: 'accessing'
method: ZnBufferedReadStream
setToEnd
	
	stream setToEnd
%

category: 'private'
method: ZnBufferedReadStream
shouldBufferReadOfCount: elementCount
	"For larger read requests, buffering fails to give an advantage."

	^ elementCount < (buffer size / 2)
%

category: 'accessing'
method: ZnBufferedReadStream
size

	^ stream size
%

category: 'initialize-release'
method: ZnBufferedReadStream
sizeBuffer: size
	buffer := self collectionSpecies new: size
%

category: 'accessing'
method: ZnBufferedReadStream
skip: count
	"Skip over count elements.
	This could be further optimzed."
	
	count timesRepeat: [ self next ]
%

category: 'accessing-bytes'
method: ZnBufferedReadStream
uint16
	^ self nextIntegerOfSize: 2 signed: false bigEndian: true 
%

category: 'accessing-bytes'
method: ZnBufferedReadStream
uint32
	^ self nextIntegerOfSize: 4 signed: false bigEndian: true 
%

category: 'accessing-bytes'
method: ZnBufferedReadStream
uint8
	^ self nextIntegerOfSize: 1 signed: false bigEndian: true
%

category: 'accessing'
method: ZnBufferedReadStream
upTo: value 
	"Read upto but not including value and return them as a collection.
	If value is not found, return the entire contents of the stream.
	This could be further optimzed."
	
	^ self collectionSpecies 
		streamContents: [ :writeStream | | element |
			[ self atEnd or: [ (element := self next) = value ] ] whileFalse: [ 
				writeStream nextPut: element ] ]
%

category: 'accessing'
method: ZnBufferedReadStream
upToAll: aCollection 
"Answer a subcollection from the current access position to the occurrence (if any, but not inclusive) of aCollection. If aCollection is not in the stream, answer the entire rest of the stream."

| startPos endMatch result x |
startPos := self position.
x := self upTo: aCollection first.
self atEnd ifTrue: [ ^ x ].
2 to: aCollection size do: [:i |
	self peek = (aCollection at: i)
		ifTrue: [ self next ]
		ifFalse: [ self position: startPos.
		^ self upToEnd ] ].
endMatch := self position.
self position: startPos.
result := self next: endMatch - startPos - aCollection size.
self position: endMatch.
^ result
%

category: 'accessing'
method: ZnBufferedReadStream
upToEnd
	"Read elements until the stream is atEnd and return them as a collection."

	^ self collectionSpecies
		streamContents: [ :out | 
			[ self atEnd ] whileFalse: [ 
				position > limit
					ifTrue: [ self nextBuffer ].	
				out next: limit - position + 1 putAll: buffer startingAt: position.
				position := limit + 1 ] ]
%

category: 'accessing'
method: ZnBufferedReadStream
wrappedStream
	^ stream
%

category: 'accessing'
method: ZnBufferedReadStream
wrappedStreamName
	^ stream wrappedStreamName
%

! Class implementation for 'ZnBufferedReadWriteStream'

!		Class methods for 'ZnBufferedReadWriteStream'

category: 'instance creation'
classmethod: ZnBufferedReadWriteStream
on: writeStream
	^ self basicNew
		on: writeStream;
		yourself
%

category: 'convenience'
classmethod: ZnBufferedReadWriteStream
on: readStream do: block
	"Execute block with as argument a ZnBufferedReadStream on readStream.
	Return the value of block."

	^ block value: (self on: readStream)
%

!		Instance methods for 'ZnBufferedReadWriteStream'

category: 'testing'
method: ZnBufferedReadWriteStream
atEnd
	
	^ self readingActionDo: [ readStream atEnd ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
close
	
	writeStream flush.
	writeStream close.
%

category: 'testing'
method: ZnBufferedReadWriteStream
closed
	^ readStream closed
%

category: 'accessing'
method: ZnBufferedReadWriteStream
flush
	
	self writingActionDo: [ writeStream flush ]
%

category: 'testing'
method: ZnBufferedReadWriteStream
isBinary
	
	^ readStream isBinary
%

category: 'testing'
method: ZnBufferedReadWriteStream
isReadOnly
	
	^ false
%

category: 'testing'
method: ZnBufferedReadWriteStream
isStream

	^ true
%

category: 'accessing'
method: ZnBufferedReadWriteStream
next
	
	^ self readingActionDo: [ 
		readStream next ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
next: anInteger 
	
	^ self readingActionDo: [ 
		readStream next: anInteger ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
next: count putAll: collection

	self writingActionDo: [ 
		writeStream next: count putAll: collection ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
next: count putAll: collection startingAt: offset
	
	self writingActionDo: [
		writeStream next: count putAll: collection startingAt: offset ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
nextPut: aCharacter 
	
	self writingActionDo: [ writeStream nextPut: aCharacter ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
nextPutAll: aString 
	
	^ self writingActionDo: [ writeStream nextPutAll: aString ]
%

category: 'instance creation'
method: ZnBufferedReadWriteStream
on: aStream

	lastRead := true.
	readStream := ZnBufferedReadStream on: aStream.
	writeStream := ZnBufferedWriteStream on: aStream.
%

category: 'accessing'
method: ZnBufferedReadWriteStream
peek
	
	^ self readingActionDo: [ 
		readStream peek ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
position
	
	^ lastRead
		ifTrue: [ readStream position ]
		ifFalse: [ writeStream position ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
position: anInteger 
	
	self writingActionDo: [ 
		writeStream position: anInteger ]
	
%

category: 'private'
method: ZnBufferedReadWriteStream
readingActionDo: aBlock

	"Reading from the read stream.
	We should 
	 - flush the write stream
	 - discard the read buffer (which may contain incorrect data).
	 - and then perform the read."
	
	lastRead ifFalse: [ 
		writeStream flush.
		readStream discardBuffer ].
	^ aBlock ensure: [ lastRead := true ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
readInto: collection startingAt: offset count: requestedCount
	
	^ self readingActionDo: [ 
		readStream readInto: collection startingAt: offset count: requestedCount ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
setToEnd
	
	^ self writingActionDo: [ 
		writeStream setToEnd ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
size
	^ readStream size
%

category: 'initialize-release'
method: ZnBufferedReadWriteStream
sizeBuffer: anInteger 
	
	readStream sizeBuffer: anInteger.
	writeStream sizeBuffer: anInteger.
%

category: 'accessing'
method: ZnBufferedReadWriteStream
skip: anInteger 
	
	self readingActionDo: [ 
		readStream skip: anInteger ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
truncate
	
	self writingActionDo: [ writeStream truncate ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
truncate: anInteger 
	
	self writingActionDo: [ writeStream truncate: anInteger ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
upTo: aCharacter 
	
	^ self readingActionDo: [ readStream upTo: aCharacter ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
upToEnd
	
	^ self readingActionDo: [ readStream upToEnd ]
%

category: 'accessing'
method: ZnBufferedReadWriteStream
wrappedStream

	^ readStream wrappedStream
%

category: 'accessing'
method: ZnBufferedReadWriteStream
wrappedStreamName

	^ readStream wrappedStreamName
%

category: 'accessing'
method: ZnBufferedReadWriteStream
writingActionDo: aBlock
	
	"Writing to the write stream.
	We should 
	 - write the write stream
	 - discard the read buffer (which may contain incorrect data)"
	lastRead ifTrue: [ 
		writeStream discardBuffer ].
	readStream discardBuffer.
	^ aBlock ensure: [ lastRead := false ]
%

! Class implementation for 'ZnBufferedWriteStream'

!		Class methods for 'ZnBufferedWriteStream'

category: 'instance creation'
classmethod: ZnBufferedWriteStream
on: writeStream
	^ self basicNew
		on: writeStream;
		yourself
%

category: 'convenience'
classmethod: ZnBufferedWriteStream
on: writeStream do: block
	"Execute block with as argument a ZnBufferedWriteStream on writeStream,
	making sure #flush is called at the end. Return the value of block."
	
	| bufferedWriteStream result |
	bufferedWriteStream := self on: writeStream.
	result := block value: bufferedWriteStream.
	bufferedWriteStream flush.
	^ result
%

!		Instance methods for 'ZnBufferedWriteStream'

category: 'private'
method: ZnBufferedWriteStream
buffer
	buffer isNil 
		ifTrue: [ self sizeBuffer: self defaultBufferSize ].
	^ buffer
%

category: 'accessing'
method: ZnBufferedWriteStream
bufferFreeSize
	^ self bufferSize - position
%

category: 'accessing'
method: ZnBufferedWriteStream
bufferSize
	^ buffer isNil 
		ifTrue: [ self defaultBufferSize ]
		ifFalse: [ buffer size ]
%

category: 'initialize-release'
method: ZnBufferedWriteStream
close
	self flush.
	stream close
%

category: 'accessing'
method: ZnBufferedWriteStream
cr
	self nextPut: Character cr
%

category: 'accessing'
method: ZnBufferedWriteStream
crlf
	self cr; lf
%

category: 'accessing'
method: ZnBufferedWriteStream
defaultBufferSize
	^ 2 raisedToInteger: 16
%

category: 'private'
method: ZnBufferedWriteStream
discardBuffer

	position := 0
%

category: 'accessing'
method: ZnBufferedWriteStream
flush
	self flushBuffer.
	stream flush
%

category: 'private'
method: ZnBufferedWriteStream
flushBuffer
	position = 0 ifTrue: [ ^ self ].
	position = self bufferSize
		ifTrue: [ stream nextPutAll: buffer ]
		ifFalse: [ stream nextPutAll: (buffer copyFrom: 1 to: position) ].
	position := 0
%

category: 'private'
method: ZnBufferedWriteStream
flushBufferIfFull
	position = self bufferSize 
		ifTrue: [ self flushBuffer ]
%

category: 'accessing-bytes'
method: ZnBufferedWriteStream
int16: integer
	^ self nextIntegerOfSize: 2 signed: true bigEndian: true put: integer
%

category: 'accessing-bytes'
method: ZnBufferedWriteStream
int32: integer
	^ self nextIntegerOfSize: 4 signed: true bigEndian: true put: integer
%

category: 'accessing-bytes'
method: ZnBufferedWriteStream
int8: integer
	^ self nextIntegerOfSize: 1 signed: true bigEndian: true put: integer
%

category: 'testing'
method: ZnBufferedWriteStream
isBinary

	^ stream isBinary
%

category: 'testing'
method: ZnBufferedWriteStream
isStream

	^ true
%

category: 'accessing'
method: ZnBufferedWriteStream
lf
	self nextPut: Character lf
%

category: 'accessing'
method: ZnBufferedWriteStream
next: count putAll: collection
	"Write count elements from collection"
	
	self 
		next: count 
		putAll: collection 
		startingAt: 1
%

category: 'accessing'
method: ZnBufferedWriteStream
next: count putAll: collection startingAt: offset
	"Write count elements from collection starting at offset."
	
	self flushBufferIfFull.
	count <= self bufferFreeSize
		ifTrue: [
			self buffer replaceFrom: position + 1 to: position + count with: collection startingAt: offset.
			position := position + count ]
		ifFalse: [
			self flushBuffer.
			count > (self bufferSize / 2)
				ifTrue: [ stream next: count putAll: collection startingAt: offset ]
				ifFalse: [ self next: count putAll: collection startingAt: offset ] ]
%

category: 'accessing-bytes'
method: ZnBufferedWriteStream
nextInt32Put: integer
	^ self nextIntegerOfSize: 4 signed: true bigEndian: true put: integer
%

category: 'accessing-bytes'
method: ZnBufferedWriteStream
nextIntegerOfSize: numberOfBytes signed: signed bigEndian: bigEndian put: value
	"Assuming the receiver is a stream of bytes, write value as the next integer of size numberOfBytes.
	If bigEndian is true, use network byte order, most significant byte first, 
	else use little endian order, least significant byte first.
	If signed is true, encode as a two-complement signed value, 
	else encode as a plain unsigned value."
	
	| unsignedValue |
	unsignedValue := (signed and: [ value negative ])
		ifTrue: [ (1 << (numberOfBytes * 8)) + value ] 
		ifFalse: [ value ].
	(unsignedValue between: 0 and: (2 raisedTo: (numberOfBytes * 8)) - 1)
		ifFalse: [ self error: 'Domain Error ', unsignedValue printString, ' outside of expected range' ].
	bigEndian
		ifTrue: [ 
			numberOfBytes to: 1 by: -1 do: [ :index |
				self nextPut: (unsignedValue digitAt: index) ] ]
		ifFalse: [ 
			1 to: numberOfBytes do: [ :index |
				self nextPut: (unsignedValue digitAt: index) ] ].
	^ value
%

category: 'accessing-bytes'
method: ZnBufferedWriteStream
nextLittleEndianNumber: numberOfBytes put: integer
	^ self nextIntegerOfSize: numberOfBytes signed: false bigEndian: false put: integer
%

category: 'accessing-bytes'
method: ZnBufferedWriteStream
nextNumber: numberOfBytes put: integer
	^ self nextIntegerOfSize: numberOfBytes signed: false bigEndian: true put: integer
%

category: 'accessing'
method: ZnBufferedWriteStream
nextPut: object
	self flushBufferIfFull.
	position := position + 1.
	self buffer at: position put: object
%

category: 'accessing'
method: ZnBufferedWriteStream
nextPutAll: collection
	"Write a collection"
	
	self 
		next: collection size 
		putAll: collection 
		startingAt: 1
%

category: 'accessing-bytes'
method: ZnBufferedWriteStream
nextWordPut: integer
	^ self nextIntegerOfSize: 2 signed: false bigEndian: true put: integer
%

category: 'initialize-release'
method: ZnBufferedWriteStream
on: writeStream
	stream := writeStream.
	position := 0
%

category: 'accessing'
method: ZnBufferedWriteStream
position

	^ stream position + position
%

category: 'accessing'
method: ZnBufferedWriteStream
position: anInteger 
	self flush.
	stream position: anInteger
%

category: 'accessing'
method: ZnBufferedWriteStream
print: object
	object printOn: self
%

category: 'printing'
method: ZnBufferedWriteStream
printOn: aStream
	aStream 
		nextPutAll: 'a '; 
		nextPutAll: self class name
%

category: 'accessing'
method: ZnBufferedWriteStream
setToEnd
	
	self flush.
	stream setToEnd
%

category: 'accessing'
method: ZnBufferedWriteStream
sizeBuffer: size
	buffer := (stream isBinary ifTrue: [ ByteArray ] ifFalse: [ String ]) new: size
%

category: 'accessing'
method: ZnBufferedWriteStream
space
	self nextPut: Character space
%

category: 'accessing'
method: ZnBufferedWriteStream
tab
	self nextPut: Character tab
%

category: 'accessing'
method: ZnBufferedWriteStream
truncate
	
	stream truncate
%

category: 'accessing'
method: ZnBufferedWriteStream
truncate: anInteger 
	
	self flush.
	stream truncate: anInteger
%

category: 'accessing-bytes'
method: ZnBufferedWriteStream
uint16: integer
	^ self nextIntegerOfSize: 2 signed: false bigEndian: true put: integer
%

category: 'accessing-bytes'
method: ZnBufferedWriteStream
uint32: integer
	^ self nextIntegerOfSize: 4 signed: false bigEndian: true put: integer
%

category: 'accessing-bytes'
method: ZnBufferedWriteStream
uint8: integer
	^ self nextIntegerOfSize: 1 signed: false bigEndian: true put: integer
%

! Class implementation for 'ZnCharacterEncoder'

!		Class methods for 'ZnCharacterEncoder'

category: 'accessing'
classmethod: ZnCharacterEncoder
canonicalEncodingIdentifier: string
	^ (string select: [ :each | each isAlphaNumeric ]) asLowercase
%

category: 'accessing'
classmethod: ZnCharacterEncoder
handlesEncoding: string
	"Return true when my instances handle the encoding described by string"
	
	self subclassResponsibility: #handlesEncoding:
%

category: 'accessing'
classmethod: ZnCharacterEncoder
knownEncodingIdentifiers
	"Return a collection of all known encoding identifiers in the system"
	
	self = ZnCharacterEncoder ifFalse: [ ^ #() ].
	^ Array streamContents: [ :all |
		self allSubclasses do: [ :subClass |
			all nextPutAll: subClass knownEncodingIdentifiers ] ]
%

category: 'instance creation'
classmethod: ZnCharacterEncoder
newForEncoding: string
	"Return a new character encoder object for an encoding described by string.
	Search for a subclass that handles it and delegate (subclassResponsibility)."
	
	| concreteSubclass |
	concreteSubclass := self allSubclasses 
		detect: [ :each | each handlesEncoding: string ] 
		ifNone: [ ^ self error: 'The ', string printString, ' is not currently supported.' ].
	^ concreteSubclass newForEncoding: string
%

!		Instance methods for 'ZnCharacterEncoder'

category: 'converting'
method: ZnCharacterEncoder
asZnCharacterEncoder
	^ self
%

category: 'converting'
method: ZnCharacterEncoder
backOnStream: stream
	"Move back one character on stream, assuming stream understands #back"
	
	self subclassResponsibility: #backOnStream:
%

category: 'convenience'
method: ZnCharacterEncoder
decodeAsCodePoints: bytes
	"Decode bytes and return the resulting code points"
	
	self subclassResponsibility: #decodeAsCodePoints:
%

category: 'convenience'
method: ZnCharacterEncoder
encodeCodePoints: codePoints
	"Encode codePoints and return the resulting byte array"
	
	^ self subclassResponsibility: #encodeCodePoints:
%

category: 'converting'
method: ZnCharacterEncoder
encodedByteCountFor: character
	"Return how many bytes are needed to encode character"
	
	"We should use #codePoint but #asInteger is faster"
	
	^ self encodedByteCountForCodePoint: character asInteger
%

category: 'convenience'
method: ZnCharacterEncoder
encodedByteCountForCodePoints: codePoints
	"Return the exact number of bytes it would take to encode codePoints as a byte array"

	^self subclassResponsibility: #encodedByteCountForCodePoints:
%

category: 'convenience'
method: ZnCharacterEncoder
encodedByteCountForString: string
	"Return the exact number of bytes it would take to encode string as a byte array"

	^self subclassResponsibility: #encodedByteCountForCodePoints:
%

category: 'convenience'
method: ZnCharacterEncoder
next: count putAll: string startingAt: offset toStream: stream
	"Write count characters from string starting at offset to stream."
	
	offset to: offset + count - 1 do: [ :index | 
		self nextPut: (string at: index) toStream: stream ]
%

category: 'converting'
method: ZnCharacterEncoder
nextCodePointFromStream: stream
	"Read and return the next integer code point from stream"
	
	self subclassResponsibility: #nextCodePointFromStream:
%

category: 'converting'
method: ZnCharacterEncoder
nextFromStream: stream
	"Read and return the next character from stream"
	
	"We should use #codePoint: but #value: is faster"
	
	^ Character value: (self nextCodePointFromStream: stream)
%

category: 'converting'
method: ZnCharacterEncoder
nextPut: character toStream: stream
	"Write the encoding for character to stream"
	
	"We should use #codePoint but #asInteger is faster"
	
	self nextPutCodePoint: character asInteger toStream: stream
%

! Class implementation for 'ZnUTF8Encoder'

!		Class methods for 'ZnUTF8Encoder'

category: 'accessing'
classmethod: ZnUTF8Encoder
default
	"Return a cached instance of the most commonly used encoder,
	which is faster than going via #newForEncoding: that does a subclass search"
	
	^ Default ifNil: [ Default := self new ]
%

category: 'accessing'
classmethod: ZnUTF8Encoder
handlesEncoding: string
	"Return true when my instances handle the encoding described by string"
	
	^ (self canonicalEncodingIdentifier: string) = 'utf8'
%

category: 'accessing'
classmethod: ZnUTF8Encoder
knownEncodingIdentifiers
	^ #( utf8 )
%

category: 'instance creation'
classmethod: ZnUTF8Encoder
newForEncoding: string
	"No further parametrization needed"
	
	^ self new
%

!		Instance methods for 'ZnUTF8Encoder'

category: 'converting'
method: ZnUTF8Encoder
backOnStream: stream
	"Move back one character on stream"

	self error: 'not currently supported'
%

category: 'convenience'
method: ZnUTF8Encoder
decodeAsCodePoints: bytes
	"Decode bytes and return the resulting code points"

	| ar |
	ar := {}.
	bytes decodeFromUTF8 do: [:char | ar add: char codePoint ].
	^ ar
%

category: 'convenience'
method: ZnUTF8Encoder
decodeBytes: bytes
	"Decode bytes and return the resulting string"

	^ bytes decodeFromUTF8
%

category: 'convenience'
method: ZnUTF8Encoder
encodeCodePoints: codePoints
	"Encode codePoints and return the resulting byte array"
	
	^ codePoints asByteArray asUnicodeString encodeAsUTF8
%

category: 'converting'
method: ZnUTF8Encoder
encodedByteCountFor: character
	"Return how many bytes are needed to encode character"
		
	^ character asString encodeAsUTF8 size
%

category: 'convenience'
method: ZnUTF8Encoder
encodedByteCountForCodePoints: codePoints
	"Return the exact number of bytes it would take to encode codePoints as a byte array"

	^ (self encodeCodePoints: codePoints) size
%

category: 'convenience'
method: ZnUTF8Encoder
encodedByteCountForString: string
	"Return the exact number of bytes it would take to encode string as a byte array"

	^ (self encodeString: string) size
%

category: 'convenience'
method: ZnUTF8Encoder
encodeString: string
	"Encode string and return the resulting Utf8 instance"
	
	^ string encodeAsUTF8 asByteArray
%

category: 'accessing'
method: ZnUTF8Encoder
identifier
	^ #utf8
%

category: 'convenience'
method: ZnUTF8Encoder
next: count putAll: string startingAt: offset toStream: stream
	"Write count characters from string starting at offset to stream."
	
	stream nextPutAll: (string copyFrom: offset to: offset + count - 1) encodeAsUTF8 asByteArray
%

category: 'converting'
method: ZnUTF8Encoder
nextCodePointFromStream: stream
	"Read and return the next integer code point from stream"

	self error: 'not currently supported'
%

category: 'converting'
method: ZnUTF8Encoder
nextPutCodePoint: codePoint toStream: stream
	"Write the encoding for Integer code point to stream"

	^ stream nextPutAll: (Character codePoint: codePoint) asString encodeAsUTF8
%

category: 'convenience'
method: ZnUTF8Encoder
readInto: aCollection startingAt: offset count: requestedCount fromStream: stream
	"Read requestedCount characters into string starting at offset,
	returning the number read, there could be less available when stream is atEnd"

	| decodedCollection pos |
	pos := stream position.
	decodedCollection := self decodeBytes: stream contents.
	aCollection 
		replaceFrom: offset 
		to: offset + (requestedCount min: decodedCollection size) - 1
		with: decodedCollection
		startingAt: pos + 1.
	stream setToEnd.
	^ 	requestedCount min: decodedCollection size
%

! Class implementation for 'ZnCharacterReadWriteStream'

!		Class methods for 'ZnCharacterReadWriteStream'

category: 'instance creation'
classmethod: ZnCharacterReadWriteStream
on: wrappedStream encoding: encoding

	^ self new
		on: wrappedStream encoding: encoding;
		yourself
%

!		Instance methods for 'ZnCharacterReadWriteStream'

category: 'accessing'
method: ZnCharacterReadWriteStream
atEnd
	
	^ readStream atEnd
%

category: 'accessing'
method: ZnCharacterReadWriteStream
close
	
	writeStream close
%

category: 'testing'
method: ZnCharacterReadWriteStream
closed
	^ writeStream closed
%

category: 'accessing'
method: ZnCharacterReadWriteStream
collectionSpecies
	^ String
%

category: 'accessing'
method: ZnCharacterReadWriteStream
cr
	
	writeStream cr
%

category: 'accessing'
method: ZnCharacterReadWriteStream
flush

	writeStream flush
%

category: 'testing'
method: ZnCharacterReadWriteStream
isReadOnly
	
	^ false
%

category: 'accessing'
method: ZnCharacterReadWriteStream
next
	
	^ readStream next
%

category: 'accessing'
method: ZnCharacterReadWriteStream
next: anInteger 
	
	^ readStream next: anInteger
%

category: 'accessing'
method: ZnCharacterReadWriteStream
nextPut: aCharacter

	^ writeStream nextPut: aCharacter
%

category: 'accessing'
method: ZnCharacterReadWriteStream
nextPutAll: aString

	^ writeStream nextPutAll: aString
%

category: 'instance creation'
method: ZnCharacterReadWriteStream
on: aStream encoding: encoding
	| encoder |
	encoder := encoding asZnCharacterEncoder.
	readStream := ZnCharacterReadStream on: aStream encoding: encoder.
	writeStream := ZnCharacterWriteStream on: aStream encoding: encoder
%

category: 'accessing'
method: ZnCharacterReadWriteStream
peek
	
	^ readStream peek
%

category: 'accessing'
method: ZnCharacterReadWriteStream
position

	^ readStream position
%

category: 'accessing'
method: ZnCharacterReadWriteStream
position: anInteger 
	
	readStream position: anInteger
%

category: 'accessing'
method: ZnCharacterReadWriteStream
readOnlyCopy

	^ readStream
%

category: 'accessing'
method: ZnCharacterReadWriteStream
setToEnd

	writeStream setToEnd
%

category: 'accessing'
method: ZnCharacterReadWriteStream
size

	^ readStream size
%

category: 'accessing'
method: ZnCharacterReadWriteStream
skip: anInteger 
	
	readStream skip: anInteger
%

category: 'accessing'
method: ZnCharacterReadWriteStream
space
	
	writeStream space
%

category: 'accessing'
method: ZnCharacterReadWriteStream
upToAll: aCollection
	"Answer a subcollection from the current access position to the occurrence (if any, but not inclusive) of aCollection. If aCollection is not in the stream, answer the entire rest of the stream."
	
	^ self collectionSpecies streamContents: [ :out |
		| partialMatch pattern matched |
		partialMatch := (self collectionSpecies new: aCollection size) writeStream.
		pattern := aCollection readStream.
		matched := false.
		([ matched or: [ self atEnd or: [ pattern atEnd ] ] ]) whileFalse: [
			| ch |
			(ch := self next) = pattern next
				ifTrue: [
					pattern atEnd
						ifTrue: [ matched := true ]
						ifFalse: [ partialMatch nextPut: ch ] ]
				ifFalse: [
					pattern reset.
					out nextPutAll: partialMatch contents.
					partialMatch reset.
					out nextPut: ch ] ].
		matched ifFalse: [ out nextPutAll: partialMatch contents ] ]
%

category: 'accessing'
method: ZnCharacterReadWriteStream
upToEnd
	
	^ readStream upToEnd
%

! Class implementation for 'ZnEncodedStream'

!		Class methods for 'ZnEncodedStream'

category: 'accessing'
classmethod: ZnEncodedStream
defaultEncoder
	^ ZnUTF8Encoder default
%

category: 'instance creation'
classmethod: ZnEncodedStream
on: wrappedStream
	^ self new
		on: wrappedStream;
		yourself
%

category: 'instance creation'
classmethod: ZnEncodedStream
on: wrappedStream encoding: encoding
	^ self new
		on: wrappedStream;
		encoding: encoding;
		yourself
%

!		Instance methods for 'ZnEncodedStream'

category: 'initialize-release'
method: ZnEncodedStream
close
	stream close
%

category: 'testing'
method: ZnEncodedStream
closed
	^ stream closed
%

category: 'accessing'
method: ZnEncodedStream
encoder
	^ encoder ifNil: [ encoder := self class defaultEncoder ]
%

category: 'initialize-release'
method: ZnEncodedStream
encoder: characterEncoder
	encoder := characterEncoder
%

category: 'initialize-release'
method: ZnEncodedStream
encoding: encoding
	encoder := encoding asZnCharacterEncoder
%

category: 'testing'
method: ZnEncodedStream
isStream
  ^ true
%

category: 'initialize-release'
method: ZnEncodedStream
on: wrappedStream
	stream := wrappedStream
%

category: 'accessing'
method: ZnEncodedStream
position
	^ stream position
%

category: 'accessing'
method: ZnEncodedStream
position: aPosition
	stream position: aPosition
%

category: 'accessing'
method: ZnEncodedStream
setToEnd
	stream setToEnd
%

category: 'accessing'
method: ZnEncodedStream
size
	^ stream size
%

category: 'accessing'
method: ZnEncodedStream
truncate
	stream truncate
%

category: 'accessing'
method: ZnEncodedStream
truncate: anInteger 
	stream truncate: anInteger
%

category: 'accessing'
method: ZnEncodedStream
wrappedStream
	^ stream
%

category: 'accessing'
method: ZnEncodedStream
wrappedStreamName
	^ stream wrappedStreamName
%

! Class implementation for 'ZnEncodedReadStream'

!		Instance methods for 'ZnEncodedReadStream'

category: 'testing'
method: ZnEncodedReadStream
atEnd
	^ peeked isNil and: [ stream atEnd ]
%

category: 'accessing'
method: ZnEncodedReadStream
contents
	
	^ self collectionSpecies
		streamContents: [ :collectionStream | 
			collectionStream nextPutAll: (self encoder decodeBytes: stream  contents) ]
%

category: 'testing'
method: ZnEncodedReadStream
isBinary
	^ false
%

category: 'testing'
method: ZnEncodedReadStream
isReadOnly

	^ true
%

category: 'accessing'
method: ZnEncodedReadStream
next
	^ peeked
		ifNil: [ 
			stream atEnd ifFalse: [ self nextElement ] ]
		ifNotNil: [ | character |
			character := peeked.
			peeked := nil.
			character ]
%

category: 'accessing'
method: ZnEncodedReadStream
next: requestedCount 
	"Read requestedCount elements into new collection and return it,
	 it could be that less elements were available"

	^ self 
		next: requestedCount 
		into: (self collectionSpecies new: requestedCount)
%

category: 'accessing'
method: ZnEncodedReadStream
next: requestedCount into: collection
	"Read requestedCount elements into collection,
	returning a copy if less elements are available"
	
	^ self
		next: requestedCount
		into: collection
		startingAt: 1
%

category: 'accessing'
method: ZnEncodedReadStream
next: requestedCount into: collection startingAt: offset
	"Read requestedCount elements into collection starting at offset,
	returning a copy if less elements are available"
	
	| readCount |
	readCount := self 
		readInto: collection 
		startingAt: offset 
		count: requestedCount.
	^ requestedCount = readCount
		ifTrue: [ collection ]
		ifFalse: [ collection copyFrom: 1 to: offset + readCount - 1 ]
%

category: 'private'
method: ZnEncodedReadStream
nextElement
	self subclassResponsibility 
%

category: 'accessing'
method: ZnEncodedReadStream
nextInto: collection
	"Read the next elements of the receiver into collection,
	returning a copy if less elements are available"
	
	^ self
		next: collection size
		into: collection
%

category: 'accessing'
method: ZnEncodedReadStream
peek
	^ peeked
		ifNil: [
			stream atEnd ifFalse: [ peeked := self nextElement ] ]
%

category: 'accessing'
method: ZnEncodedReadStream
peekFor: object
	^ self peek = object
		ifTrue: [ 
			self next.
			true ]
		ifFalse: [ false ]
%

category: 'accessing'
method: ZnEncodedReadStream
position

	^ super position - (peeked ifNil: [ 0 ] ifNotNil: [ 1 ])
%

category: 'accessing'
method: ZnEncodedReadStream
position: anInteger
	super position: anInteger.
	peeked := nil
%

category: 'accessing'
method: ZnEncodedReadStream
readInto: collection startingAt: offset count: requestedCount
	"Read requestedCount elements into collection starting at offset,
	returning the number of elements read, there could be less elements available.
	This is an inefficient abstract implementation, reading one by one."
	
	0 to: requestedCount - 1 do: [ :count | | object |
		(object := self next) ifNil: [ ^ count ].  
		collection at: offset + count put: object ].
	^ requestedCount
%

category: 'accessing'
method: ZnEncodedReadStream
skip: count
	count timesRepeat: [ self next ]
%

category: 'accessing'
method: ZnEncodedReadStream
upTo: anObject 	
	^ self collectionSpecies 
		streamContents: [ :out | | element |
			[ self atEnd or: [ (element := self next) = anObject ] ] whileFalse: [ 
				out nextPut: element ] ]
%

category: 'accessing'
method: ZnEncodedReadStream
upToEnd
	^ self collectionSpecies
		streamContents: [ :collectionStream | 
			[ self atEnd ] whileFalse: [ collectionStream nextPut: self next ] ]
%

! Class implementation for 'ZnCharacterReadStream'

!		Instance methods for 'ZnCharacterReadStream'

category: 'accessing'
method: ZnCharacterReadStream
collectionSpecies
	^ String
%

category: 'accessing'
method: ZnCharacterReadStream
match: subCollection 
	"Set the access position of the receiver to be past the next occurrence of the subCollection. Answer whether subCollection is found.  No wildcards, and case does matter."
	| pattern startMatch |
	pattern := subCollection readStream.
	startMatch := nil.
	[ pattern atEnd ] whileFalse: 
		[ self atEnd ifTrue: [ ^ false ].
		self next = pattern next 
			ifTrue: [ pattern position = 1 ifTrue: [ startMatch := self position ] ]
			ifFalse: 
				[ pattern position: 0.
				startMatch ifNotNil: 
					[ self position: startMatch.
					startMatch := nil ] ] ].
	^ true
%

category: 'private'
method: ZnCharacterReadStream
nextElement
	^ self encoder nextFromStream: stream
%

category: 'accessing'
method: ZnCharacterReadStream
nextLine
	"Read a CR, LF or CRLF terminated line, returning the contents of the line without the EOL. Return nil when the receiver is #atEnd."
	
	self atEnd ifTrue: [ ^ nil ].
	^ self collectionSpecies streamContents: [ :out |
		out nextPutAll: (self encoder decodeBytes: stream nextLine) ]
%

category: 'accessing'
method: ZnCharacterReadStream
readInto: collection startingAt: offset count: requestedCount 
	"Read count elements and place them in collection starting at offset.
	Return the number of elements actually read."
	
	^ peeked 
		ifNil: [ | readCount |
			readCount := self encoder 
					readInto: collection 
					startingAt: offset 
					count: requestedCount 
					fromStream: stream.
			readCount ]
		ifNotNil: [ 
			collection at: offset put: peeked.
			peeked := nil.
			(self 
				readInto: collection 
				startingAt: offset + 1
				count: requestedCount - 1) + 1 ]
%

category: 'accessing'
method: ZnCharacterReadStream
upToAll: aCollection
	"Answer a subcollection from the current access position to the occurrence (if any, but not inclusive) of aCollection. If aCollection is not in the stream, answer the entire rest of the stream."
	
	^ self collectionSpecies streamContents: [ :out |
		| partialMatch pattern matched |
		partialMatch := (self collectionSpecies new: aCollection size) writeStreamPortable.
		pattern := aCollection readStreamPortable.
		matched := false.
		([ matched or: [ self atEnd or: [ pattern atEnd ] ] ]) whileFalse: [
			| ch |
			(ch := self next) = pattern next
				ifTrue: [
					pattern atEnd
						ifTrue: [ matched := true ]
						ifFalse: [ partialMatch nextPut: ch ] ]
				ifFalse: [
					pattern reset.
					out nextPutAll: partialMatch contents.
					partialMatch reset.
					out nextPut: ch ] ].
		matched ifFalse: [ out nextPutAll: partialMatch contents ] ]
%

! Class implementation for 'ZnEncodedWriteStream'

!		Instance methods for 'ZnEncodedWriteStream'

category: 'accessing'
method: ZnEncodedWriteStream
<< collection
	^ self nextPutAll: collection
%

category: 'accessing'
method: ZnEncodedWriteStream
flush
	stream flush
%

category: 'testing'
method: ZnEncodedWriteStream
isBinary
	^ false
%

category: 'accessing'
method: ZnEncodedWriteStream
next: count putAll: collection	
	self 
		next: count 
		putAll: collection 
		startingAt: 1
%

category: 'accessing'
method: ZnEncodedWriteStream
next: count putAll: collection startingAt: offset
	"Write count items from collection starting at offset.
	This is an inefficient abstract implementation writing one by one."
	
	0 to: count - 1 do: [ :each | 
		self nextPut: (collection at: offset + each) ]
%

category: 'accessing'
method: ZnEncodedWriteStream
nextPut: anObject
	self subclassResponsibility
%

category: 'accessing'
method: ZnEncodedWriteStream
nextPutAll: collection

	stream nextPutAll: (self encoder encodeString: collection)
%

! Class implementation for 'ZnCharacterWriteStream'

!		Instance methods for 'ZnCharacterWriteStream'

category: 'accessing'
method: ZnCharacterWriteStream
cr
	self nextPut: Character cr
%

category: 'accessing'
method: ZnCharacterWriteStream
crlf
	self cr; lf
%

category: 'accessing'
method: ZnCharacterWriteStream
lf
	self nextPut: Character lf
%

category: 'accessing'
method: ZnCharacterWriteStream
next: count putAll: collection startingAt: offset
	"Write count characters from collection starting at offset."
	
	self encoder 
		next: count 
		putAll: collection 
		startingAt: offset 
		toStream: stream 
%

category: 'accessing'
method: ZnCharacterWriteStream
nextPut: object
	self encoder 
		nextPut: object 
		toStream: stream.
	^ object
%

category: 'accessing'
method: ZnCharacterWriteStream
print: object
	object printOn: self
%

category: 'accessing'
method: ZnCharacterWriteStream
space
	self nextPut: Character space
%

category: 'accessing'
method: ZnCharacterWriteStream
tab
	self nextPut: Character tab
%

! Class implementation for 'AbstractBinaryFileStream'

!		Class methods for 'AbstractBinaryFileStream'

category: 'instance creation'
classmethod: AbstractBinaryFileStream
handle: aCollection file: aFile forWrite: aTrue
	
	^ self basicNew
		handle: aCollection file: aFile forWrite: aTrue;
		yourself
%

!		Instance methods for 'AbstractBinaryFileStream'

category: 'testing'
method: AbstractBinaryFileStream
atEnd

	^ File atEnd: handle
%

category: 'accessing'
method: AbstractBinaryFileStream
contents
	"Answer the contents of the receiver while leaving the position unchanged.
	Fail if the receiver doesn't support positioning.
	#upToEnd provides an alternative that doesn't rely on stream positioning."

	| savedPosition contents |

	savedPosition := self position.
	self position: 0.
	contents := self upToEnd.
	self position: savedPosition.
	^contents
%

category: 'character writing'
method: AbstractBinaryFileStream
cr
	
	self nextPut: Character cr asInteger
%

category: 'character writing'
method: AbstractBinaryFileStream
crlf
	
	self nextPutAll: String crlf
%

category: 'accessing'
method: AbstractBinaryFileStream
file
	^ file
%

category: 'accessing'
method: AbstractBinaryFileStream
file: aFile 
	
	file := aFile
%

category: 'flushing'
method: AbstractBinaryFileStream
flush
	"When writing, this flushes the write buffer the stream uses to reduce
	the number of write() system calls it makes. This should generally be
	used before #sync, but on Windows they do the same thing."
	
	File flush: handle
%

category: 'initialization'
method: AbstractBinaryFileStream
handle: aCollection file: aFile forWrite: aBoolean
	
	handle := aCollection.
	file := aFile.
	forWrite := aBoolean
%

category: 'testing'
method: AbstractBinaryFileStream
isBinary
	^ true
%

category: 'character writing'
method: AbstractBinaryFileStream
lf

	self nextPut: Character lf asInteger
%

category: 'accessing'
method: AbstractBinaryFileStream
name

	^ file name
%

category: 'accessing'
method: AbstractBinaryFileStream
next
	"Answer the next byte from this file, or nil if at the end of the file."

	^ (self next: 1) ifEmpty: [ nil ] ifNotEmpty: [ :col | col first ]
%

category: 'accessing'
method: AbstractBinaryFileStream
next: n
	"Return a string with the next n characters of the filestream in it."

	^ self next: n into: (ByteArray new: n)
%

category: 'accessing'
method: AbstractBinaryFileStream
next: n into: aBuffer
	"Return a string with the next n characters of the filestream in it."
	| readBuffer read |
	readBuffer := aBuffer.
	read := File read: handle into: readBuffer startingAt: 1 count: n.
	^read = n 
		ifTrue: [ readBuffer ]
		ifFalse: [ readBuffer copyFrom: 1 to: read ]
%

category: 'reading'
method: AbstractBinaryFileStream
next: n into: aString startingAt: startIndex
	"Read n bytes into the given string.
	Return aString or a partial copy if less than
	n elements have been read."
	|read|
	read := (self readInto: aString startingAt: startIndex count: n).
	^read = n 
		ifTrue: [ aString ]
		ifFalse: [ aString copyFrom: 1 to: startIndex + read - 1 ]	
%

category: 'writing'
method: AbstractBinaryFileStream
next: amount putAll: aByteArray

	forWrite
		ifFalse: [ ^ self error: 'Cannot write a read-only file' ].
	[ File
		write: handle
		from: aByteArray
		startingAt: 1
		count: amount ]
		on: Error
		do: [:ex | (FileWriteError fileName: self name)
				signal:
					(self close
						ifTrue: [ 'File ' , self name , ' is closed' ]
						ifFalse: [ 'File ' , self name , ' write failed' ]) ].
	^ aByteArray
%

category: 'writing'
method: AbstractBinaryFileStream
next: anInteger putAll: aCollection startingAt: startIndex
"Store the next anInteger elements from the given collection."
(startIndex = 1 and:[anInteger = aCollection size])
	ifTrue:[^self nextPutAll: aCollection].
^self nextPutAll: (aCollection copyFrom: startIndex to: startIndex+anInteger-1)
%

category: 'accessing'
method: AbstractBinaryFileStream
nextInto: aBuffer
	"Return a string with the next n characters of the filestream in it."

	^ self next: aBuffer size into: aBuffer
%

category: 'endianess'
method: AbstractBinaryFileStream
nextLittleEndianNumber: n 
	"Answer the next n bytes as a positive Integer or LargePositiveInteger, where the bytes are ordered from least significant to most significant."

	| bytes s |
	bytes := self next: n.
	s := 0.
	n to: 1 by: -1 do: [:i | s := (s bitShift: 8) bitOr: (bytes at: i)].
	^ s
%

category: 'endianess'
method: AbstractBinaryFileStream
nextLittleEndianNumber: n put: value
	"Answer the next n bytes as a positive Integer or LargePositiveInteger, where the bytes are ordered from least significant to most significant."
	| bytes |
	bytes := ByteArray new: n.
	1 to: n do: [:i | bytes at: i put: (value digitAt: i)].
	self nextPutAll: bytes
%

category: 'writing'
method: AbstractBinaryFileStream
nextPut: anInteger

	^ self nextPutAll: (ByteArray with: anInteger asInteger)
%

category: 'writing'
method: AbstractBinaryFileStream
nextPutAll: aByteArray
	self next: aByteArray basicSize putAll: aByteArray
%

category: 'accessing'
method: AbstractBinaryFileStream
peek
	"Answer what would be returned if the message next were sent to the receiver. If the receiver is at the end, answer nil.  "
	self subclassResponsibility
%

category: 'positioning'
method: AbstractBinaryFileStream
position

	^ File getPosition: handle
%

category: 'positioning'
method: AbstractBinaryFileStream
position: aPosition
	
	File setPosition: handle to: aPosition
%

category: 'printing'
method: AbstractBinaryFileStream
printOn: aStream
	"Put a printed version of the receiver onto aStream."

	aStream
		nextPutAll: self class name;
		nextPutAll: ': ';
		print: file name
%

category: 'reading'
method: AbstractBinaryFileStream
readInto: readBuffer startingAt: startIndex count: count

	^ File read: handle into: readBuffer startingAt: startIndex count: count
%

category: 'positioning'
method: AbstractBinaryFileStream
reset
	self position: 0
%

category: 'positioning'
method: AbstractBinaryFileStream
setToEnd
	
	self position: self size
%

category: 'accessing'
method: AbstractBinaryFileStream
size

	^ File sizeOf: handle
%

category: 'positioning'
method: AbstractBinaryFileStream
skip: n
	"Set the character position to n characters from the current position.
	Error if not enough characters left in the file.
	By default we read n characters and we avoid reading the output"
	self next: n
%

category: 'flushing'
method: AbstractBinaryFileStream
sync	
	"When writing, this syncs any written/flushed data still in the kernel
	file system buffers to disk. This should generally be used after #flush,
	but on Windows they do the same thing."

	File sync: handle
%

category: 'accessing'
method: AbstractBinaryFileStream
upTo: delim

	^ self upToAnyOf: (ByteArray with: delim)
%

category: 'accessing'
method: AbstractBinaryFileStream
upToAnyOf: delimiters

	^ ByteArray new: 1000 streamContents: [ :stream | | ch |
		[ (ch := self next) isNil or: [ delimiters includes: ch] ] 
			whileFalse: [ stream nextPut: ch ] ]
%

category: 'accessing'
method: AbstractBinaryFileStream
upToEnd
	"Answer a subcollection from the current access position through the last element of the receiver."

	^ByteArray streamContents: [ :newStream |
		| next |
		[ (next := self next) isNil ] whileFalse: [
			newStream nextPut: next ] ]
%

category: 'accessing'
method: AbstractBinaryFileStream
wrappedStreamName

	^self name
%

! Class implementation for 'BinaryFileStream'

!		Instance methods for 'BinaryFileStream'

category: 'open/close'
method: BinaryFileStream
close
	self closed
		ifTrue: [ ^ self ].
	handle close.
	handle := nil
%

category: 'testing'
method: BinaryFileStream
closed
	^ handle isOpen not
%

category: 'finalization'
method: BinaryFileStream
finalize

	^ self close
%

category: 'accessing'
method: BinaryFileStream
peek
	"Answer what would be returned if the message next were sent to the receiver. If the receiver is at the end, answer nil.  "
	| next |
	self atEnd ifTrue: [^ nil].
	next := self next.
	self position: self position - 1.
	^ next
%

category: 'positioning'
method: BinaryFileStream
skip: n
	"Set the character position to n characters from the current position."
	self position: self position + n
%

category: 'positioning'
method: BinaryFileStream
truncate

	self truncate: 0
%

category: 'positioning'
method: BinaryFileStream
truncate: pos
	"Truncate to this position"

	^ File truncate: handle to: pos
%

! Class implementation for 'AbstractUUIDTest'

!		Class methods for 'AbstractUUIDTest'

category: 'Testing'
classmethod: AbstractUUIDTest
isAbstract
  "Override to true if a TestCase subclass is Abstract and should not have
	TestCase instances built from it"

  ^ self sunitName = #'AbstractUUIDTest'
%

!		Instance methods for 'AbstractUUIDTest'

category: 'running'
method: AbstractUUIDTest
generatorClass
  self subclassResponsibility
%

category: 'running'
method: AbstractUUIDTest
setUp
  super setUp.
  currentUuidGeneratorClass := UUID _generatorClass.
  UUID generatorClass: self generatorClass
%

category: 'running'
method: AbstractUUIDTest
tearDown
  super tearDown.
  UUID generatorClass: currentUuidGeneratorClass
%

category: 'tests'
method: AbstractUUIDTest
testComparison
  "self debug: #testComparison"

  | a b |
  a := UUID fromString: '0608b9dc-02e4-4dd0-9f8a-ea45160df641'.
  b := UUID fromString: 'e85ae7ba-3ca3-4bae-9f62-cc2ce51c525e'.
  self assert: a < b.
  self deny: a > b.
  a := UUID fromString: '0608b9dc-02e4-4dd0-9f8a-ea45160df641'.
  b := UUID fromString: '0608b9dc-02e4-4dd0-9f8a-ea45160df642'.
  self assert: a < b.
  a := UUID fromString: '0608b9dc-02e4-4dd0-9f8a-ea45160df641'.
  b := UUID fromString: '0608b9dc-02e4-4dd0-9f8a-ea45160df640'.
  self assert: a > b
%

category: 'tests'
method: AbstractUUIDTest
testComparisonA
  | a b |
  a := UUID fromString: '0608b9dc-02e4-4dd0-9f8a-ea45160df641'.
  b := UUID fromString: 'e85ae7ba-3ca3-4bae-9f62-cc2ce51c525e'.
  self assert: a = a copy.
  self assert: b = b copy.
  self assert: a < b.
  self assert: b > a.
  self deny: a > b = (b > a)
%

category: 'tests'
method: AbstractUUIDTest
testCreation
  | uuid |
  uuid := UUID new.
  self should: [ uuid size = 16 ].
  self shouldnt: [ uuid isNilUUID ].
  self should: [ uuid asString size = 36 ]
%

category: 'tests'
method: AbstractUUIDTest
testCreationEquality
  | uuid1 uuid2 |
  uuid1 := UUID new.
  uuid2 := UUID new.
  self should: [ uuid1 = uuid1 ].
  self should: [ uuid2 = uuid2 ].
  self shouldnt: [ uuid1 = uuid2 ].
  self shouldnt: [ uuid1 hash = uuid2 hash ]
%

category: 'tests'
method: AbstractUUIDTest
testCreationFromString
  | uuid string |
  string := UUID nilUUID asString.
  uuid := UUID fromString: string.
  self should: [ uuid size = 16 ].
  self should: [ uuid = UUID nilUUID ].
  self should: [ uuid isNilUUID ].
  self should: [ uuid asString size = 36 ].
  self should: [ uuid asArray asSet size = 1 ].
  self should: [ (uuid asArray asSet asArray at: 1) = 0 ]
%

category: 'tests'
method: AbstractUUIDTest
testCreationFromStringNotNil
  | uuid string |
  string := UUID new asString.
  uuid := UUID fromString: string.
  self should: [ uuid size = 16 ].
  self should: [ uuid asString size = 36 ]
%

category: 'tests'
method: AbstractUUIDTest
testCreationNil
  | uuid |
  uuid := UUID nilUUID.
  self should: [ uuid size = 16 ].
  self should: [ uuid isNilUUID ].
  self should: [ uuid asString size = 36 ].
  self should: [ uuid asArray asSet size = 1 ].
  self should: [ (uuid asArray asSet asArray at: 1) = 0 ]
%

category: 'tests'
method: AbstractUUIDTest
testCreationNodeBased
  (UUID new asString copyLast: 12) = (UUID new asString copyLast: 12)
    ifFalse: [ ^ self ].
  1000
    timesRepeat: [ 
      | uuid |
      uuid := UUID new.
      self should: [ ((uuid at: 7) bitAnd: 16rF0) = 16r10 ].
      self should: [ ((uuid at: 9) bitAnd: 16rC0) = 16r80 ] ]
%

category: 'tests'
method: AbstractUUIDTest
testDuplicationsKinda
  | check size |
  size := 5000.
  check := Set new: size.
  size
    timesRepeat: [ 
      | uuid |
      uuid := UUID new.
      self shouldnt: [ check includes: uuid ].
      check add: uuid ]
%

category: 'tests'
method: AbstractUUIDTest
testOrder
  100
    timesRepeat: [ 
      | uuid1 uuid2 |
      uuid1 := UUID new.
      uuid2 := UUID new.
      (uuid1 asString copyLast: 12) = (uuid2 asString copyLast: 12)
        ifTrue: [ 
          self should: [ uuid1 < uuid2 ].
          self should: [ uuid2 > uuid1 ].
          self shouldnt: [ uuid1 = uuid2 ] ] ]
%

category: 'tests'
method: AbstractUUIDTest
testUniqueness
  "Test uniqueness for a given number of generated values"

  | maxTestValue |
  maxTestValue := 1000.
  self
    assert:
      ((1 to: maxTestValue) collect: [ :i | UUID new asString ]) asSet size
        = maxTestValue
%

! Class implementation for 'FastUUIDTest'

!		Instance methods for 'FastUUIDTest'

category: 'running'
method: FastUUIDTest
generatorClass
  ^ FastUUIDGenerator
%

! Class implementation for 'DirectoryEntryTest'

!		Instance methods for 'DirectoryEntryTest'

category: 'accessing'
method: DirectoryEntryTest
entry
	System sessionIsOnStoneHost ifFalse: [ self error: 'DirectoryEntryTest needs to be run on the stone''s host' ].
	^ FileLocator extent1 resolve entry
%

category: 'tests'
method: DirectoryEntryTest
testCreationTimeIsADateAndTimeInstance
	"While creation is the message sent to a directory entry, creation returns a DateAndTime object"

	| creation |
	creation := self entry creation.
	self assert: creation class equals: DateAndTime
	
%

category: 'tests'
method: DirectoryEntryTest
testIsDirectory
	| ref entry |
	ref := FileLocator imageDirectory resolve.
	entry := ref entry.
	self assert: entry isDirectory.
	self assert: FileLocator imageDirectory resolve equals: FileLocator dbfScratchDir resolve
%

category: 'tests'
method: DirectoryEntryTest
testIsFile
	self assert: self entry isFile.
	self deny: self entry isDirectory
%

category: 'tests'
method: DirectoryEntryTest
testIsNotDirectory
	self deny: self entry isDirectory
%

category: 'tests'
method: DirectoryEntryTest
testIsNotFile
	| ref |
	ref := FileLocator imageDirectory resolve.
	self deny: ref entry isFile
%

category: 'tests'
method: DirectoryEntryTest
testModificationTimeIsADateAndTimeInstance
	"While modification is the message sent to a directory entry, modification returns a DateAndTime object"

	| modification |
	modification := self entry modification.
	self assert: modification class equals: DateAndTime
	
%

category: 'tests'
method: DirectoryEntryTest
testReference
	| ref entry |
	ref := FileLocator image resolve.
	entry := ref entry.
	self assert: entry reference equals: ref
%

category: 'tests'
method: DirectoryEntryTest
testSize
	self assert: self entry size _isInteger
%

! Class implementation for 'FileLocatorTest'

!		Instance methods for 'FileLocatorTest'

category: 'compatibility tests'
method: FileLocatorTest
testAsAbsolute
	locator := FileLocator image.
	self assert: locator asAbsolute = locator
%

category: 'compatibility tests'
method: FileLocatorTest
testBasename
	locator := FileLocator image / 'griffle'.
	self assert: locator basename = 'griffle'
%

category: 'compatibility tests'
method: FileLocatorTest
testCommaAddsExtension
	locator := FileLocator image / 'griffle'.
	self assert: (locator , 'plonk') basename = 'griffle.plonk'
%

category: 'compatibility tests'
method: FileLocatorTest
testCommaAddsExtensionAgain
	locator := FileLocator image / 'griffle.plonk'.
	self assert: (locator , 'nurp') basename = 'griffle.plonk.nurp'
%

category: 'compatibility tests'
method: FileLocatorTest
testContainsLocator
	locator := FileLocator image.
	self assert: (locator contains: locator / 'griffle').
%

category: 'compatibility tests'
method: FileLocatorTest
testContainsPath
	
	locator := FileLocator image.
	self assert: (locator contains: (locator resolve / 'griffle') path).
%

category: 'compatibility tests'
method: FileLocatorTest
testContainsReference
	locator := FileLocator image.
	self assert: (locator contains: (locator resolve / 'griffle')).
%

category: 'tests'
method: FileLocatorTest
testCPath
	| ref |
	ref := FileLocator C / 'WINDOWS'.
	self assert: (ref fileSystem isKindOf: FileSystem).
	self assert: ref path = (Path / 'C:' / 'WINDOWS')
%

category: 'compatibility tests'
method: FileLocatorTest
testEqual
	| a b |
	a := FileLocator image.
	b := FileLocator image.
	self deny: a == b.
	self assert: a = b.
%

category: 'compatibility tests'
method: FileLocatorTest
testExtension
	locator := FileLocator image, 'bak'.
	self assert: (locator basename endsWith: '.bak')	
%

category: 'compatibility tests'
method: FileLocatorTest
testFileSystem
	locator := FileLocator image.
	self assert: (locator fileSystem isKindOf: FileSystem)
%

category: 'resolution tests'
method: FileLocatorTest
testImageDirectory
	locator := FileLocator image.
	self assert: locator resolve equals: FileLocator image resolve
%

category: 'compatibility tests'
method: FileLocatorTest
testIsAbsolute
	locator := FileLocator image.
	self assert: locator isAbsolute
%

category: 'compatibility tests'
method: FileLocatorTest
testIsNotRoot
	locator := FileLocator image.
	self deny: locator isRoot
%

category: 'compatibility tests'
method: FileLocatorTest
testIsRelative
	locator := FileLocator image.
	self deny: locator isRelative
%

category: 'compatibility tests'
method: FileLocatorTest
testIsRoot
	locator := FileLocator image.
	(locator resolve path size) timesRepeat: [locator := locator / '..'].
	self assert: locator canonicalize isRoot
%

category: 'compatibility tests'
method: FileLocatorTest
testMoveTo
	| old new |
	[
		old := FileLocator imageDirectory / 'testMoveTo_old'.
		old ensureCreateFile.
		
		new := FileLocator home / 'testMoveTo_new'.
		old moveTo: new.
		
		self deny: old exists.
		self assert: new exists.
	] ensure: [ 
		old ensureDelete.
		new ensureDelete.
	]
%

category: 'compatibility tests'
method: FileLocatorTest
testOriginBasename
	locator := FileLocator image.
	self assert: locator basename = FileLocator image resolve basename
%

category: 'compatibility tests'
method: FileLocatorTest
testParent
	locator := FileLocator extent1.
	self assert: locator parent resolve = FileLocator extent1Directory resolve
%

category: 'resolution tests'
method: FileLocatorTest
testResolveAbsoluteReference
	| result reference |
	locator := FileLocator image / 'plonk'.
	reference := FileSystem memory / 'griffle'.
	result := locator resolve: reference.
	self assert: result == reference
%

category: 'resolution tests'
method: FileLocatorTest
testResolveCompoundString
	| result compound |
	locator := FileLocator image / 'plonk'.
	compound := 'griffle', locator fileSystem delimiter asString, 'nurp'.
	result := locator resolve: compound.
	self assert: result class = locator class.
	self assert: result origin = locator origin.
	self assert: result path = ((Path * 'plonk') / 'griffle' / 'nurp')
%

category: 'resolution tests'
method: FileLocatorTest
testResolvePath
	| result path |
	locator := FileLocator image / 'plonk'.
	result := locator resolve: (Path * 'griffle').
	path := (Path * 'plonk') / 'griffle'.
	self assert: result class = locator class.
	self assert: result origin = locator origin.
	self assert: result path = path.
%

category: 'resolution tests'
method: FileLocatorTest
testResolveRelativeReference
	| result reference |
	locator := FileLocator image / 'plonk'.
	self flag: 'this is a bit weird...'.
	reference := FileSystem memory * 'griffle'.
	result := locator resolve: reference.
	self assert: result class equals: locator class.
	self assert: result origin equals: locator origin.
	self assert: result path equals: reference path
%

category: 'resolution tests'
method: FileLocatorTest
testResolveString
	| result path |
	locator := FileLocator image / 'plonk'.
	result := locator resolve: 'griffle'.
	path := (Path * 'plonk') / 'griffle'.
	self assert: result class = locator class.
	self assert: result origin = locator origin.
	self assert: result path = path.
%

category: 'compatibility tests'
method: FileLocatorTest
testSlash
	locator := FileLocator image / 'griffle'.
	self assert: locator = (FileLocator image / 'griffle')
%

category: 'compatibility tests'
method: FileLocatorTest
testWithExtensionAddsExtension
	locator := FileLocator image / 'griffle'.
	self assert: (locator withExtension: 'plonk') basename = 'griffle.plonk'
%

category: 'compatibility tests'
method: FileLocatorTest
testWithExtensionReplacesExtension
	locator := FileLocator image / 'griffle.nurp'.
	self assert: (locator withExtension: 'plonk') basename = 'griffle.plonk'
%

! Class implementation for 'FileReferenceAttributeTests'

!		Class methods for 'FileReferenceAttributeTests'

category: 'resources'
classmethod: FileReferenceAttributeTests
resources

	^Array with: DiskFileAttributesTestsResources.
%

!		Instance methods for 'FileReferenceAttributeTests'

category: 'helper methods'
method: FileReferenceAttributeTests
tempFileResource

	^DiskFileAttributesTestsResources current
%

category: 'tests'
method: FileReferenceAttributeTests
testCreationTime

	| resource creationTime x |
	resource := self tempFileResource.
	creationTime := resource file creationTime.
	self assert: (x := resource beforeCreationTime) <= creationTime.
	self assert: (x := resource afterCreationTime) >= creationTime.
%

category: 'tests'
method: FileReferenceAttributeTests
testExists

	self assert: self tempFileResource file exists
%

category: 'tests'
method: FileReferenceAttributeTests
testFileSize

	self assert: self tempFileResource file size equals: 72.
%

category: 'tests'
method: FileReferenceAttributeTests
testIsCharacter

	self deny: self tempFileResource file isCharacter
%

category: 'tests'
method: FileReferenceAttributeTests
testIsDirectory

	self deny: self tempFileResource file isDirectory.
	self assert: FileLocator temp isDirectory.
%

category: 'tests'
method: FileReferenceAttributeTests
testIsFile

	self assert: self tempFileResource file isFile.
	self deny: FileLocator temp isFile.
%

category: 'tests'
method: FileReferenceAttributeTests
testIsReadable

	self assert: self tempFileResource file isReadable.
%

category: 'tests'
method: FileReferenceAttributeTests
testIsSymlink

	self deny: self tempFileResource file resolve isSymlink.
%

category: 'tests'
method: FileReferenceAttributeTests
testIsWriteable

	self assert: self tempFileResource file isWritable.
%

category: 'tests'
method: FileReferenceAttributeTests
testModificationTime

	| resource modificationTime |
	resource := self tempFileResource.
	modificationTime := resource file modificationTime.
	self assert: resource beforeCreationTime <= modificationTime.
	self assert: resource afterCreationTime >= modificationTime.
%

! Class implementation for 'FileReferenceTest'

!		Instance methods for 'FileReferenceTest'

category: 'support'
method: FileReferenceTest
createFile: aPath
	filesystem ensureCreateDirectory: aPath parent.
	(filesystem resolve: aPath) writeStream close
%

category: 'running'
method: FileReferenceTest
setUp
	super setUp.
	filesystem := FileSystem memory
%

category: 'tests'
method: FileReferenceTest
testAllChildren
	"allChildren returns all the files and folders recursively nested in a reference"

	<publicTest>
	| ref children |
	[ filesystem createDirectory: '/alpha'.
	filesystem createDirectory: '/alpha/beta'.
	filesystem createDirectory: '/alpha/beta/delta'.
	filesystem createDirectory: '/alpha/gamma'.
	ref := filesystem / 'alpha'.
	children := ref allChildren.
	"all children returns the nodes: '/alpha', '/alpha/beta',  '/alpha/beta/delta', and '/alpha/gamma'."
	self assert: children size equals: 4.
	children
		do: [ :child | 
			self assert: child class equals: FileReference.
			self assert: (ref = child or: [ ref contains: child ]) ].
	self assert: (children collect: [ :ea | ea basename ]) equals: #('alpha' 'beta' 'gamma' 'delta') ]
		ensure: [ (filesystem / 'alpha') ensureDeleteAll ]
%

category: 'tests'
method: FileReferenceTest
testAllDirectories
	"allDirectories returns all folders recursively nested in a reference"

	<publicTest>
	| ref children |
	[ filesystem createDirectory: '/alpha'.
	filesystem createDirectory: '/alpha/beta'.
	filesystem createDirectory: '/alpha/beta/delta'.
	filesystem createDirectory: '/alpha/gamma'.
	ref := filesystem / 'alpha'.
	children := ref allDirectories.
	"all children returns the directories: '/alpha', '/alpha/beta', and '/alpha/gamma'."
	self assert: children size equals: 4.
	children
		do: [ :child | 
			self assert: child class equals: FileReference.
			self assert: (ref = child or: [ ref contains: child ]) ].
	self assert: (children collect: [ :ea | ea basename ]) equals: #('alpha' 'beta' 'gamma' 'delta') ]
		ensure: [ (filesystem / 'alpha') ensureDeleteAll ]
%

category: 'tests'
method: FileReferenceTest
testAllEntries
	| ref entries |
	[ filesystem createDirectory: '/alpha'.
	filesystem createDirectory: '/alpha/beta'.
	filesystem createDirectory: '/alpha/beta/delta'.
	filesystem createDirectory: '/alpha/gamma'.
	ref := filesystem / 'alpha'.
	entries := ref allEntries.
	self assert: entries size equals: 4.
	entries
		do: [ :entry | 
			self assert: entry class equals: FileSystemDirectoryEntry.
			self assert: (ref = entry reference or: [ ref contains: entry reference ]) ].
	self assert: (entries collect: [ :ea | ea basename ]) equals: #('alpha' 'beta' 'gamma' 'delta') ]
		ensure: [ (filesystem / 'alpha') ensureDeleteAll ]
%

category: 'tests'
method: FileReferenceTest
testAsAbsoluteConverted
	"Converts a relative reference to absolute, and asserts
	that it's absolute and still has the same path."

	| ref absolute |
	ref := filesystem * 'plonk'.
	absolute := ref asAbsolute.
	self assert: absolute isAbsolute.
	self assert: (absolute path at: 1) equals: 'plonk'
%

category: 'tests'
method: FileReferenceTest
testAsAbsoluteIdentity
	| ref |
	ref := filesystem / 'plonk'.
	self assert: ref asAbsolute == ref
%

category: 'tests'
method: FileReferenceTest
testAsReference
	| ref |
	ref := filesystem * 'plonk'.
	self assert: ref asFileReference == ref
%

category: 'tests'
method: FileReferenceTest
testBaseAndExtension
	| noExtension simpleExtension complexExtension |
	noExtension := filesystem * 'plonk'.
	self assert: noExtension extension equals: ''.

	"We create a reference to the plonk/griffle.taz in the context of filesystem"
	simpleExtension := filesystem * 'plonk' / 'griffle.taz'.
	self assert: simpleExtension base equals: 'griffle'.
	self assert: simpleExtension extension equals: 'taz'.

	"Note that the extension of a complex extension starts after the last extension delimiter"
	complexExtension := filesystem * 'plonk' / 'griffle.taz.txt'.
	self assert: complexExtension base equals: 'griffle.taz'.
	self assert: complexExtension extension equals: 'txt'
%

category: 'tests'
method: FileReferenceTest
testBasename
	| ref |
	ref := filesystem root.
	self assert: ref basename equals: '/'.
	ref := filesystem * 'plonk' / 'griffle'.
	self assert: ref basename equals: 'griffle'.
	ref := filesystem * 'plonk' / 'griffle.taz'.
	self assert: ref basename equals: 'griffle.taz'
%

category: 'tests'
method: FileReferenceTest
testBasenameWithoutExtension
	
	| ref |	
	ref := filesystem root.
	self assert: ref basename equals: '/'.
	
	ref := filesystem * 'plonk' / 'griffle'.
	self assert: ref basenameWithoutExtension equals: 'griffle'.
	self assert: (ref basenameWithoutExtension: 'griffle') equals: 'griffle'.
	self assert: (ref basenameWithoutExtension: 'taz') equals: 'griffle'.
	
	ref := filesystem * 'plonk' / 'griffle.taz'.
	self assert: ref basenameWithoutExtension equals: 'griffle'.
	self assert: (ref basenameWithoutExtension: 'taz') equals: 'griffle'.
	self assert: (ref basenameWithoutExtension: 'griffle.taz') equals: 'griffle.taz'.
	self assert: (ref basenameWithoutExtension: 'zork') equals: 'griffle.taz'.
	
	ref := filesystem * 'plonk' / 'griffle.taz.zork'.
	self assert: ref basenameWithoutExtension equals: 'griffle.taz'.
	self assert: (ref basenameWithoutExtension: 'zork') equals: 'griffle.taz'.
	self assert: (ref basenameWithoutExtension: 'taz.zork') equals: 'griffle'.
	self assert: (ref basenameWithoutExtension: 'griffle.taz.zork') equals: 'griffle.taz.zork'.
	self assert: (ref basenameWithoutExtension: 'taz') equals: 'griffle.taz.zork'.
%

category: 'tests'
method: FileReferenceTest
testCanonicalization

	| ref |

	ref := 'a/b/c' asFileReference canonicalize.
	self assert: ref path segments equals: #('a' 'b' 'c').

	ref := '/a/b/c' asFileReference canonicalize.
	self assert: ref path segments equals: #('a' 'b' 'c').

	ref := '../a/b/c' asFileReference canonicalize.
	self assert: ref path segments equals: #('..' 'a' 'b' 'c').

	ref := 'a/b/c/..' asFileReference canonicalize.
	self assert: ref path segments equals: #('a' 'b').

	ref := '/a/b/c/..' asFileReference canonicalize.
	self assert: ref path segments equals: #('a' 'b').

	ref := 'a/b/../c' asFileReference canonicalize.
	self assert: ref path segments equals: #('a' 'c').

	ref := '/a/b/../c' asFileReference canonicalize.
	self assert: ref path segments equals: #('a' 'c').
%

category: 'tests'
method: FileReferenceTest
testChildDirectories
	| childDirectories |
	[ filesystem createDirectory: '/beta'.
	filesystem createDirectory: '/gamma'.
	filesystem / 'delta' writeStreamDo: [ :stream | stream nextPutAll: '1' ].
	filesystem / 'epsilon' writeStreamDo: [ :stream | stream nextPutAll: '2' ].
	childDirectories := filesystem root directories.
	self assert: childDirectories size equals: 2.
	childDirectories
		do: [ :each | 
			self assert: each class equals: FileReference.
			self
				assert: each isDirectory
				description: 'Collection should not contain references to files.' ] ]
		ensure: [ (filesystem / 'beta') ensureDeleteAll.
			(filesystem / 'gamma') ensureDeleteAll.
			(filesystem / 'delta') ensureDelete.
			(filesystem / 'epsilon') ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testChildFiles
	| childFiles |
	[ filesystem createDirectory: '/beta'.
	filesystem createDirectory: '/gamma'.
	filesystem / 'delta' writeStreamDo: [ :stream | stream nextPutAll: '1' ].
	filesystem / 'epsilon' writeStreamDo: [ :stream | stream nextPutAll: '2' ].
	childFiles := filesystem root files.
	self assert: childFiles size equals: 2.
	childFiles
		do: [ :each | 
			self assert: each class equals: FileReference.
			self assert: each isFile description: 'Collection should not contain references to directories.' ] ]
		ensure: [ (filesystem / 'beta') ensureDeleteAll.
			(filesystem / 'gamma') ensureDeleteAll.
			(filesystem / 'delta') ensureDelete.
			(filesystem / 'epsilon') ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testChildOfPath
	| parent  child |
	parent := Path / 'griffle'.
	child := filesystem / 'griffle' / 'nurb'.
	self deny: (child isChildOf: parent).
	self deny: (parent isChildOf: child).
%

category: 'tests'
method: FileReferenceTest
testChildOfReference
	| parent  child |
	parent := filesystem / 'griffle'.
	child := filesystem / 'griffle' / 'nurb'.
	self assert: (child isChildOf: parent).
	self deny: (parent isChildOf: child).
%

category: 'tests'
method: FileReferenceTest
testChildren
	| ref children |
	[ filesystem createDirectory: '/alpha'.
	filesystem createDirectory: '/alpha/beta'.
	filesystem createDirectory: '/alpha/gamma'.
	ref := filesystem / 'alpha'.
	children := ref children.
	self assert: children size equals: 2.
	children
		do: [ :child | 
			self assert: child class equals: FileReference.
			self assert: (child isChildOf: ref).
			self assert: (#('beta' 'gamma') includes: child basename) ] ]
		ensure: [ (filesystem / 'alpha') ensureDeleteAll ]
%

category: 'tests'
method: FileReferenceTest
testCommaAddsExtension
	| ref result |
	ref := filesystem * 'plonk'.
	result := ref , 'griffle'.
	self assert: result basename equals: 'plonk.griffle'
%

category: 'tests'
method: FileReferenceTest
testCommaAddsExtensionAgain
	| ref result |
	ref := filesystem * 'plonk.griffle'.
	result := ref , 'nurp'.
	self assert: result basename equals: 'plonk.griffle.nurp'
%

category: 'tests'
method: FileReferenceTest
testContainsLocator
	| ref |
	ref := FileLocator imageDirectory resolve parent.
	self assert: (ref contains: FileLocator image)
%

category: 'tests'
method: FileReferenceTest
testContainsPath
	| ref |
	ref := filesystem  * 'griffle'.
	self assert: (ref contains: (ref / 'nurp') path)
%

category: 'tests'
method: FileReferenceTest
testContainsReference
	| ref |
	ref := filesystem * 'griffle'.
	self assert: (ref contains: ref / 'nurp')
%

category: 'tests'
method: FileReferenceTest
testContents
	| ref contents |
	contents := '12345 abcdf!'.
	ref := filesystem * 'file'.
	[ ref writeStreamDo: [ :stream | stream nextPutAll: contents ].
	self assert: ref contents asString equals: contents ]
		ensure: [ ref ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testDeleteAll
	"allChildren returns all the files and folders recursively nested in a reference"

	<publicTest>
	[ | ref |
	filesystem createDirectory: '/alpha'.
	filesystem createDirectory: '/alpha/beta'.
	filesystem createDirectory: '/alpha/beta/delta'.
	filesystem createDirectory: '/alpha/gamma'.
	ref := filesystem / 'alpha'.
	ref deleteAll.
	self deny: ref exists.
	self deny: (ref / 'beta') exists.
	self deny: (ref / 'beta' / 'delta') exists.
	self deny: (ref / 'beta' / 'gamma') exists ]
		ensure: [ (filesystem / 'alpha') ensureDeleteAll ]
%

category: 'tests'
method: FileReferenceTest
testDeleteAllChildren
	"allChildren returns all the files and folders recursively nested in a reference"

	<publicTest>
	[ | ref |
	filesystem createDirectory: '/alpha'.
	filesystem createDirectory: '/alpha/beta'.
	filesystem createDirectory: '/alpha/beta/delta'.
	filesystem createDirectory: '/alpha/gamma'.
	ref := filesystem / 'alpha'.
	ref deleteAllChildren.
	self assert: ref exists.
	self deny: (ref / 'beta') exists.
	self deny: (ref / 'beta' / 'delta') exists.
	self deny: (ref / 'beta' / 'gamma') exists ]
		ensure: [ (filesystem / 'alpha') ensureDeleteAll ]
%

category: 'tests'
method: FileReferenceTest
testDeleteIfAbsent
	| flag reference |
	flag := false.
	reference := filesystem / 'plonk'.
	reference ensureCreateFile.
	[ reference exists
		ifFalse: [ self error ].
	reference deleteIfAbsent: [ flag := true ].
	self deny: flag.
	reference exists
		ifTrue: [ self error ].
	reference deleteIfAbsent: [ flag := true ].
	self assert: flag ]
		ensure: [ reference ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testDoesContainReferenceFileSystem
	| ref other |
	ref := filesystem * 'griffle'.
	other := filesystem / 'griffle' / 'nurp'.
	self assert: (ref contains: other)
%

category: 'tests'
method: FileReferenceTest
testDoesNotContainReferenceWhenUsingDifferentInstancesOfMemoryFileSystem
	| ref other |
	ref := filesystem * 'griffle'.
	other := FileSystem memory / 'griffle' / 'nurp'.
	self deny: (ref contains: other)
%

category: 'tests'
method: FileReferenceTest
testDoesntContainLocator
	| ref |
	ref := filesystem * 'griffle'. 
	self deny: (ref contains: FileLocator image)
%

category: 'tests'
method: FileReferenceTest
testDoesntContainPath
	| ref |
	ref := filesystem * 'griffle'.
	self deny: (ref contains: (Path * 'nurp'))
%

category: 'tests'
method: FileReferenceTest
testDoesntContainReferencePath
	| ref other |
	ref := filesystem * 'griffle'.
	other := filesystem * 'nurp'.
	self deny: (ref contains: other)
%

category: 'tests'
method: FileReferenceTest
testEnsureDelete
	| reference |
	reference := filesystem / 'plonk'.	"Deletes the file if it exists"
	reference ensureCreateFile.
	[ self assert: reference exists.
	reference ensureDelete.
	self deny: reference exists	"No-op if file does not exist" ]
		ensure: [ reference ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testEnsureDeleteAll
	| reference childReference |
	reference := filesystem / 'plonk'.	"Deletes the file if it exists"
	reference ensureCreateDirectory.
	[ self assert: reference exists.
	childReference := reference / 'child'.
	childReference ensureCreateFile.
	self assert: childReference exists.
	reference ensureDeleteAll.
	self deny: childReference exists.
	self deny: reference exists ]
		ensure: [ reference ensureDeleteAll ]
%

category: 'tests'
method: FileReferenceTest
testEnsureDeleteNonEmptyDirectory
	| reference childReference |
	reference := filesystem / 'plonk'.	"Deletes the file if it exists"
	reference ensureCreateDirectory.
	[ self assert: reference exists.
	childReference := reference / 'child'.
	childReference ensureCreateFile.
	self assert: childReference exists.
	self should: [ reference ensureDelete ] raise: DirectoryIsNotEmpty ]
		ensure: [ reference ensureDeleteAll ]
%

category: 'tests'
method: FileReferenceTest
testEntries
	[ | ref entries |
	filesystem createDirectory: '/alpha'.
	filesystem createDirectory: '/alpha/beta'.
	filesystem createDirectory: '/alpha/gamma'.
	ref := filesystem / 'alpha'.
	entries := ref entries.
	self assert: entries size equals: 2.
	entries
		do: [ :entry | 
			self assert: entry class equals: FileSystemDirectoryEntry.
			self assert: (entry reference isChildOf: ref).
			self assert: (#('beta' 'gamma') includes: entry reference basename) ] ]
		ensure: [ (filesystem / 'alpha') ensureDeleteAll ]
%

category: 'tests'
method: FileReferenceTest
testEqual
	| a b |
	a := filesystem * 'plonk'.
	b := filesystem * 'plonk'.
	self deny: a == b.
	self assert: a equals: b
%

category: 'tests'
method: FileReferenceTest
testEqualityRelativeVsAbsolute

	| f1 f2 |

	f1 := FileLocator workingDirectory / 'pharo-local'.
	f2 := f1 asAbsolute.
	self assert: f1 equals: f2
%

category: 'tests'
method: FileReferenceTest
testExists
	| reference |
	reference := filesystem / 'plonk'.
	reference ensureCreateFile.
	[ self assert: reference exists.
	reference delete.
	self deny: reference exists ]
		ensure: [ reference ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testGlob
	[ | ref children |
	filesystem createDirectory: '/alpha'.
	filesystem createDirectory: '/alpha/beta'.
	filesystem createDirectory: '/alpha/gamma'.
	ref := filesystem root.
	children := ref glob: [ :node | true ].
	self assert: children size == 4.	"including root"
	children := ref glob: [ :node | node basename size > 1 ].
	self assert: children size == 3.	"without root"
	children := ref glob: [ :node | node basename = 'gamma' ].
	self assert: children size == 1.	"gamma"
	self assert: children first basename equals: 'gamma' ]
		ensure: [ (filesystem / 'alpha') ensureDeleteAll ]
%

category: 'tests'
method: FileReferenceTest
testGrandchildOfReference
	| griffle  nurb |
	griffle := filesystem / 'griffle'.
	nurb := filesystem / 'griffle' / 'plonk' / 'nurb'.
	self deny: (griffle isChildOf: nurb).
	self deny: (nurb isChildOf: griffle).
%

category: 'tests'
method: FileReferenceTest
testHasChildren
	<publicTest>
	[ | ref |
	filesystem createDirectory: '/alpha'.
	filesystem createDirectory: '/alpha/beta'.
	filesystem createDirectory: '/alpha/beta/delta'.
	filesystem createDirectory: '/alpha/gamma'.
	ref := filesystem / 'alpha'.
	self assert: ref hasChildren.
	self assert: (ref / 'beta') hasChildren.
	self deny: (ref / 'beta' / 'delta') hasChildren.
	self deny: (ref / 'beta' / 'gamma') hasChildren ]
		ensure: [ (filesystem / 'alpha') ensureDeleteAll ]
%

category: 'tests'
method: FileReferenceTest
testHasDirectories
	<publicTest>
	[ | ref |
	filesystem createDirectory: '/alpha'.
	filesystem createDirectory: '/alpha/beta'.
	(filesystem / 'alpha' / 'beta' / 'delta') ensureCreateFile.
	filesystem createDirectory: '/alpha/gamma'.
	ref := filesystem / 'alpha'.
	self assert: ref hasDirectories.
	self deny: (ref / 'beta') hasDirectories.
	self deny: (ref / 'beta' / 'gamma') hasDirectories ]
		ensure: [ (filesystem / 'alpha') ensureDeleteAll ]
%

category: 'tests'
method: FileReferenceTest
testHasFiles
	<publicTest>
	[ | ref |
	filesystem createDirectory: '/alpha'.
	filesystem createDirectory: '/alpha/beta'.
	(filesystem / 'alpha' / 'beta' / 'delta') ensureCreateFile.
	filesystem createDirectory: '/alpha/beta/eta'.
	filesystem createDirectory: '/alpha/gamma'.
	ref := filesystem / 'alpha'.
	self deny: ref hasFiles.
	self assert: (ref / 'beta') hasFiles.
	self deny: (ref / 'beta' / 'gamma') hasFiles ]
		ensure: [ (filesystem / 'alpha') ensureDeleteAll ]
%

category: 'tests'
method: FileReferenceTest
testIndicator
	| ref |
	ref := filesystem * 'plonk' / 'griffle'.
	self deny: ref exists.
	self assert: ref indicator equals: '?'.
	ref := filesystem workingDirectory / 'plonk'.
	self deny: ref exists.
	ref createDirectory.
	[ self assert: ref exists.
	self assert: ref isDirectory.
	self assert: ref indicator equals: '/' ]
		ensure: [ ref delete ].
	ref := filesystem workingDirectory / 'plonk'.
	self deny: ref exists.
	[ ref writeStreamDo: [ :stream | stream nextPutAll: 'foo' ] ifPresent: [ self fail ].
	self assert: ref exists.
	self assert: ref isFile.
	self assert: ref indicator equals: '' ]
		ensure: [ ref delete ]
%

category: 'tests'
method: FileReferenceTest
testIsAbsolute
	self assert: (filesystem / 'plonk') isAbsolute
%

category: 'tests'
method: FileReferenceTest
testIsNotAbsolute
	self deny: (filesystem * 'plonk') isAbsolute
%

category: 'tests'
method: FileReferenceTest
testIsNotRelative
	self deny: (filesystem / 'plonk') isRelative
%

category: 'tests'
method: FileReferenceTest
testIsNotRoot
	self deny: (filesystem / 'plonk') isRoot
%

category: 'tests'
method: FileReferenceTest
testIsRelative
	self assert: (filesystem * 'plonk') isRelative
%

category: 'tests'
method: FileReferenceTest
testIsRoot
	self assert: (filesystem root) isRoot
%

category: 'tests'
method: FileReferenceTest
testMakeRelative

	| parent child relative |
	parent := filesystem / 'griffle'.
	child := filesystem / 'griffle' / 'plonk' / 'nurb'.
	relative := parent makeRelative: child.
	self assert: relative equals: (Path * 'plonk' / 'nurb')
%

category: 'tests'
method: FileReferenceTest
testParent
	| ref parent |
	ref := filesystem * 'plonk' / 'griffle'.
	parent := ref parent.
	self assert: parent class = ref class.
	self assert: (parent path at: 1) = 'plonk'
%

category: 'tests'
method: FileReferenceTest
testParentResolutionWithAbsoluteReference
	| base relative absolute |
	base := filesystem / '/plonk' / 'pinto'.
	relative := filesystem / 'griffle' / 'zonk'.
	absolute := base resolve: relative.
	self assert: absolute fileSystem == relative fileSystem.
	self assert: absolute isAbsolute.
	self assert: (absolute path at: 1) equals: 'griffle'.
	self assert: (absolute path at: 2) equals: 'zonk'
%

category: 'tests'
method: FileReferenceTest
testParentResolutionWithPath
	| base relative absolute |
	base := filesystem / 'plonk' / 'pinto'.
	relative := Path parent / 'griffle' / 'zonk'.
	absolute := base resolve: relative.
	self assert: absolute isAbsolute.
	self assert: absolute path segments equals: #('plonk' 'pinto' '..' 'griffle' 'zonk').
	
%

category: 'tests'
method: FileReferenceTest
testParentResolutionWithReference
	| base relative absolute |
	base := (filesystem / 'plonk' / 'pinto').
	relative := (filesystem referenceTo: '../griffle/zonk').
	absolute := base resolve: relative.
	self assert: absolute isAbsolute.
	self assert: absolute path segments equals: #('plonk' 'pinto' '..' 'griffle' 'zonk').
	
	
%

category: 'tests'
method: FileReferenceTest
testParentResolutionWithRemoteReference
	| base relative absolute |
	base := filesystem / 'plonk' / 'pinto'.
	relative := filesystem referenceTo: '../griffle/zonk'.
	absolute := base resolve: relative.
	self assert: absolute isAbsolute.
	self assert: absolute path segments equals: #('plonk' 'pinto' '..' 'griffle' 'zonk')
%

category: 'tests'
method: FileReferenceTest
testParentUpTo
	| base a b c |
	[ 
		base := filesystem workingDirectory.
		(base / 'testParentUpTo') ensureCreateDirectory.
		a := (base / 'testParentUpTo' / 'A') ensureCreateDirectory.
		b := (base / 'testParentUpTo' / 'A' / 'B') ensureCreateDirectory.
		c := (base / 'testParentUpTo' / 'A' / 'B' / 'C') ensureCreateDirectory.
		self assert: b equals: (c parentUpTo: 'B').
		self assert: a equals: (c parentUpTo: 'A').
		self assert: (base / 'testParentUpTo') equals: (c parentUpTo: 'testParentUpTo').
		self assert: base equals: (c parentUpTo: 'notAParent') 
	] ensure: [ 
		(base / 'testParentUpTo') ensureDeleteAll 
	]
%

category: 'tests'
method: FileReferenceTest
testPathRelativeTo
	| parent childPath relative |
	parent := filesystem / 'griffle'.
	childPath := Path / 'griffle' / 'plonk' / 'nurb'.
	relative := childPath relativeTo: parent.
	self assert: relative = (Path * 'plonk' / 'nurb')
%

category: 'tests'
method: FileReferenceTest
testReadStream
	| ref stream path |
	path := Path * 'plonk'.
	filesystem store createFile: path.
	ref := filesystem referenceTo: path.
	[ [ stream := ref readStream ]
		ensure: [ stream ifNotNil: [ stream close ] ] ]
		ensure: [ ref delete ]
%

category: 'tests'
method: FileReferenceTest
testReadStreamDo
	| ref path |
	path := Path * 'plonk'.
	filesystem store createFile: path.
	ref := filesystem referenceTo: path.
	[ ref readStreamDo: [ :stream | self deny: stream isNil ] ]
		ensure: [ ref delete ]
%

category: 'tests'
method: FileReferenceTest
testReadStreamDoifAbsent
	| ref path |
	path := Path * 'plonk'.
	filesystem store createFile: path.
	ref := filesystem referenceTo: path.
	[ ref readStreamDo: [ :stream | self deny: stream isNil ] ifAbsent: [ self signalFailure: 'The file exists!' ] ]
		ensure: [ ref ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testReadStreamDoifAbsentNot
	| ref pass |
	pass := false.
	ref := filesystem * 'plonk'.
	ref 
		readStreamDo: [:stream|]
		ifAbsent: [pass := true].
	self assert: pass
%

category: 'tests stream'
method: FileReferenceTest
testReadStreamDoNotFound
	| ref |
	ref := filesystem / 'plonk'.
	self
		should: [ref readStreamDo: [:s|]]
		raise: FileDoesNotExistException
%

category: 'tests'
method: FileReferenceTest
testReadStreamIfAbsent
	| ref stream path |
	path := Path * 'plonk'.
	filesystem store createFile: path.
	ref := filesystem referenceTo: path.
	[ [ stream := ref readStreamIfAbsent: [ self signalFailure: 'Should not reach here.' ] ]
		ensure: [ stream ifNotNil: [ stream close ] ] ]
		ensure: [ ref ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testReadStreamNotFound
	| ref  |
	ref := filesystem * 'plonk'.
	self
		should: [ref readStream ]
		raise: FileDoesNotExistException
%

category: 'tests'
method: FileReferenceTest
testRelativeToPath
	| parentPath child relative |
	parentPath := Path / 'griffle'.
	child := filesystem / 'griffle' / 'plonk' / 'nurb'.
	relative := child relativeTo: parentPath.
	self assert: relative = (Path * 'plonk' / 'nurb')
%

category: 'tests'
method: FileReferenceTest
testRelativeToReference
	| parent child relative |
	parent := filesystem / 'griffle'.
	child := filesystem  / 'griffle' / 'plonk' / 'nurb'.
	relative := child relativeTo: parent.
	self assert: relative = (Path * 'plonk' / 'nurb')
%

category: 'tests'
method: FileReferenceTest
testRename
	| file tmp originalFullName |
	[ file := (FileLocator imageDirectory / 'oldName') ensureCreateFile.
	originalFullName := file fullName.
	tmp := (FileLocator imageDirectory / 'tmp') ensureCreateDirectory.
	file renameTo: 'newName'.
	self deny: originalFullName asFileReference exists.
	self assert: file basename equals: 'newName'.
	self assert: (originalFullName asFileReference parent / 'newName') exists ]
		ensure: [ file delete.
			tmp deleteAll ]
%

category: 'tests'
method: FileReferenceTest
testRenameTargetExists

	| existingFile fileToRename |
	[
		existingFile := 'existingFile' asFileReference ensureCreateFile.
		fileToRename := 'fileToRename' asFileReference ensureCreateFile.
		self should: [ fileToRename renameTo: existingFile basename ] raise: FileExists ]
		ensure: [
			existingFile delete.
			fileToRename delete ].
%

category: 'tests'
method: FileReferenceTest
testResolve
	| ref |
	ref := filesystem / 'griffle'.
	self assert: ref resolve == ref
%

category: 'tests'
method: FileReferenceTest
testRootParent
	| root |
	root := filesystem root.
	self assert: root parent == root
%

category: 'tests'
method: FileReferenceTest
testSiblingOfReference
	| griffle  nurb |
	griffle := filesystem / 'griffle'.
	nurb := filesystem / 'nurb'.
	self deny: (griffle isChildOf: nurb).
	self deny: (nurb isChildOf: griffle).
%

category: 'tests'
method: FileReferenceTest
testSimpleResolution
	| base relative absolute |
	base := filesystem / 'plonk'.
	relative := (Path * 'griffle') / 'zonk'.
	absolute := base resolve: relative.
	self assert: absolute isAbsolute.
	self assert: (absolute path at: 1) = 'plonk'.
	self assert: (absolute path at: 2) = 'griffle'.
	self assert: (absolute path at: 3) = 'zonk'.
	
	
%

category: 'tests'
method: FileReferenceTest
testSlash
	| ref result |
	ref := filesystem * 'plonk'.
	result := ref / 'griffle'.
	self assert: result class = ref class.
	self assert: result  isRelative.
	self assert: (result path at: 1) = 'plonk'.
	self assert: (result path at: 2) = 'griffle'.
%

category: 'tests'
method: FileReferenceTest
testTempFilePrefixSuffix
	| fileRef |
	fileRef := FileReference newTempFilePrefix: 'FileReference' suffix: 'Test'.
	self assert: (fileRef isKindOf: FileReference).
	self assert: fileRef exists not.
%

category: 'tests'
method: FileReferenceTest
testUnequalContent
	| a b |
	a := filesystem * 'plonk'.
	b := filesystem * 'griffle'.
	self deny: a = b.
%

category: 'tests'
method: FileReferenceTest
testUnequalSize
	| a b |
	a := filesystem * 'plonk'.
	b := filesystem / 'plonk' / 'griffle'.
	self deny: a = b.
%

category: 'tests'
method: FileReferenceTest
testUpToAll
	| testString fileRef |
	testString := 'ße'.
	fileRef := FileReference newTempFilePrefix: 'FileReference' suffix: 'Test'.

	[  
	fileRef
		writeStreamEncoded: 'utf8' do: [ :stream | 
			stream nextPutAll: testString ].

	fileRef
		readStreamDo: [ :stream |
			self assert: (stream upToAll: 'e') equals: 'ß'.
		] ]
	ensure: [ fileRef ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testWithExtentionAddsExtension
	| ref result |
	ref := filesystem * 'plonk'.
	result := ref withExtension: 'griffle'.
	self assert: result isRelative.
	self assert: result basename = 'plonk.griffle'
%

category: 'tests'
method: FileReferenceTest
testWithExtentionReplacesExtension
	| ref result |
	ref := filesystem * 'plonk.griffle'.
	result := ref withExtension: 'nurp'.
	self assert: result isRelative.
	self assert: result basename = 'plonk.nurp'
%

category: 'tests'
method: FileReferenceTest
testWithoutExtension
	| ref newRef |
	ref := filesystem * 'plonk' / 'griffle.txt'.
	newRef := ref withoutExtension.
	self assert: newRef parent equals: ref parent.
	self assert: newRef basename equals: 'griffle'
%

category: 'tests'
method: FileReferenceTest
testWorkingDirectoryParent
	| wd |
	wd := filesystem referenceTo: Path workingDirectory.
	self assert: wd parent path size = 1.
	self assert: (wd parent path at: 1) = '..'.
%

category: 'tests'
method: FileReferenceTest
testWriteStream
	| ref stream |
	ref := filesystem / 'plonk'.
	[ [ stream := ref writeStream ]
		ensure: [ stream ifNotNil: [ stream close ] ] ]
		ensure: [ ref ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testWriteStreamDo
	| ref s |
	ref := filesystem / 'plonk'.
	[ ref
		writeStreamDo: [ :stream | 
			s := stream.
			self deny: stream isNil ] ]
		ensure: [ ref ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testWriteStreamDoExists
	| ref path |
	path := Path * 'plonk'.
	filesystem store createFile: path.
	ref := filesystem referenceTo: path.
	[ ref writeStreamDo: [ :stream | self deny: stream isNil ] ]
		ensure: [ ref ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testWriteStreamDoifPresent
	| ref s |
	ref := filesystem / 'plonk'.
	[ ref
		writeStreamDo: [ :stream | 
			s := stream.
			self deny: stream isNil ]
		ifPresent: [ self signalFailure: 'The file does not exist!' ] ]
		ensure: [ ref ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testWriteStreamDoifPresentNot
	| ref pass path |
	pass := false.
	path := Path * 'plonk'.
	filesystem store createFile: path.
	ref := filesystem referenceTo: path.
	[ ref writeStreamDo: [ :stream |  ] ifPresent: [ pass := true ].
	self assert: pass ]
		ensure: [ ref ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testWriteStreamExists
	| ref stream path |
	path := Path * 'plonk'.
	filesystem store createFile: path.
	ref := filesystem referenceTo: path.
	[ [ stream := ref writeStream ]
		ensure: [ stream ifNotNil: [ stream close ] ] ]
		ensure: [ ref ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testWriteStreamifPresent
	| ref stream |
	ref := filesystem / 'plonk'.
	[ [ stream := ref writeStreamIfPresent: [ self signalFailure: 'Should not reach here' ] ]
		ensure: [ stream ifNotNil: [ stream close ] ] ]
		ensure: [ ref ensureDelete ]
%

category: 'tests'
method: FileReferenceTest
testWriteStreamifPresentExists
	| ref pass path |
	pass := false.
	path := Path * 'plonk'.
	filesystem store createFile: path.
	ref := filesystem referenceTo: path.
	[ ref writeStreamIfPresent: [ pass := true ].
	self assert: pass ]
		ensure: [ ref ensureDelete ]
%

! Class implementation for 'FileSystemHandleTest'

!		Class methods for 'FileSystemHandleTest'

category: 'testing'
classmethod: FileSystemHandleTest
isAbstract
	^ self name = #FileSystemHandleTest
%

category: 'testing'
classmethod: FileSystemHandleTest
shouldInheritSelectors 
	^ true
%

!		Instance methods for 'FileSystemHandleTest'

category: 'running'
method: FileSystemHandleTest
createFileSystem
	self subclassResponsibility 
%

category: 'running'
method: FileSystemHandleTest
setUp
	super setUp.
	filesystem := self createFileSystem.
	reference := filesystem * 'plonk'.
	handle := reference openWritable: true
%

category: 'running'
method: FileSystemHandleTest
tearDown
	handle ensureClosed.
	reference ensureDelete.
	super tearDown
%

category: 'tests'
method: FileSystemHandleTest
testAt
	handle at: 1 write: (ByteArray with: 3) startingAt: 1 count: 1.
	self assert: (handle at: 1) = 3
%

category: 'tests'
method: FileSystemHandleTest
testAtPut
	| in |
	handle at: 1 put: 3.
	in := ByteArray new: 1.
	handle at: 1 read: in startingAt: 1 count: 1.
	self assert: in first = 3
%

category: 'tests'
method: FileSystemHandleTest
testAtPutBinaryAscii
	handle at: 1 put: 32.
	handle at: 1 put: Character space
%

category: 'tests'
method: FileSystemHandleTest
testAtWriteBinaryAscii
	handle
		at: 1
		write: #[32]
		startingAt: 1
		count: 1.
	handle
		at: 1
		write: (String with: Character space)
		startingAt: 1
		count: 1
%

category: 'tests'
method: FileSystemHandleTest
testClose
	handle close.
	self deny: handle isOpen
	
%

category: 'tests'
method: FileSystemHandleTest
testCreatedOpen
	
	
	self flag: 'TODO: activated once FileHandle is in use again!'.
	"self assert: handle isOpen"
%

category: 'tests'
method: FileSystemHandleTest
testEnsureClosed
	handle ensureClosed.
	self deny: handle isOpen.
	handle ensureClosed.
	reference ensureDelete.
	handle reference exists
		ifTrue: [ self error ].
	handle ensureClosed
%

category: 'tests'
method: FileSystemHandleTest
testIO
	| out in |
	out := #(1 2 3) asByteArray.
	in := ByteArray new: 3.
	handle at: 1 write: out startingAt: 1 count: 3.
	handle at: 1 read: in startingAt: 1 count: 3.
	self assert: out = in.
%

category: 'tests'
method: FileSystemHandleTest
testReadBufferTooLarge
	| out in result |
	out := #(1 2 3) asByteArray.
	in := ByteArray new: 5.
	in atAllPut: 9.
	handle at: 1 write: out startingAt: 1 count: 3.
	result := handle at: 1 read: in startingAt: 2 count: 4.
	self assert: result = 3.
	self assert: in = #(9 1 2 3 9) asByteArray.
%

category: 'tests'
method: FileSystemHandleTest
testReadOnly
	handle close.
	handle := reference openWritable: false.
	self 
		should: 
			[ handle 
				at: 1
				write: #(1 2 3 )
				startingAt: 1
				count: 3 ]
		raise: Error
%

category: 'tests'
method: FileSystemHandleTest
testReference
	self assert: handle reference = reference asAbsolute
%

category: 'tests'
method: FileSystemHandleTest
testSizeAfterGrow
	| out |
	out := #(1 2 3) asByteArray.
	handle at: 1 write: out startingAt: 1 count: 3.
	self assert: handle size = 3
%

category: 'tests'
method: FileSystemHandleTest
testSizeNoGrow
	| bytes |
	bytes := #(1 2 3 4) asByteArray.
	handle at: 1 write: bytes startingAt: 1 count: 3.
	handle at: 4 write: bytes startingAt: 4 count: 1.
	self assert: handle size = 4
%

category: 'tests'
method: FileSystemHandleTest
testTruncate
	| out |
	out := #(1 2 3 4 5) asByteArray.
	handle at: 1 write: out startingAt: 1 count: 5.
	handle truncateTo: 3.
	self assert: handle size = 3
%

category: 'tests'
method: FileSystemHandleTest
testWriteStream
	| stream |
	stream := handle binaryWriteStream.
	self assert: (stream respondsTo: #nextPut:)
%

! Class implementation for 'FileHandleTest'

!		Instance methods for 'FileHandleTest'

category: 'running'
method: FileHandleTest
createFileSystem
	^ FileSystem store: DiskStore activeClass createDefault
%

! Class implementation for 'MemoryHandleTest'

!		Instance methods for 'MemoryHandleTest'

category: 'running'
method: MemoryHandleTest
createFileSystem
	^ FileSystem memory
%

! Class implementation for 'FileSystemResolverTest'

!		Class methods for 'FileSystemResolverTest'

category: 'testing'
classmethod: FileSystemResolverTest
isAbstract
	^ self name = #FileSystemResolverTest
%

!		Instance methods for 'FileSystemResolverTest'

category: 'asserting'
method: FileSystemResolverTest
assertOriginResolves: aSymbol
	| reference |
	reference := resolver resolve: aSymbol.
	self assert: (reference isKindOf: FileReference).
	self assert: reference exists.
	self assert: reference isAbsolute.
	^ reference
%

category: 'running'
method: FileSystemResolverTest
createResolver
	self subclassResponsibility 
%

category: 'running'
method: FileSystemResolverTest
setUp
	super setUp.
	resolver := self createResolver.
%

! Class implementation for 'InteractiveResolverTest'

!		Instance methods for 'InteractiveResolverTest'

category: 'running'
method: InteractiveResolverTest
createResolver
	^ InteractiveResolver new
%

category: 'accessing'
method: InteractiveResolverTest
home
	^ FileLocator imageDirectory resolve
%

category: 'tests'
method: InteractiveResolverTest
testCached
	[ resolver resolve: #home ]
		on: ResolutionRequest
		do: [ :req | req resume: self home ].
	self assertOriginResolves: #home
%

category: 'tests'
method: InteractiveResolverTest
testNew
	[self assertOriginResolves: #home]
		on: ResolutionRequest
		do: [:req | req resume: self home].
	
%

! Class implementation for 'PlatformResolverTest'

!		Instance methods for 'PlatformResolverTest'

category: 'running'
method: PlatformResolverTest
createResolver
	^ PlatformResolver forCurrentPlatform
%

category: 'tests'
method: PlatformResolverTest
testCache
	| cache |
	cache := self assertOriginResolves: #cache
%

category: 'tests'
method: PlatformResolverTest
testHome
	| home |
	home := self assertOriginResolves: #home.
	self assert: home isDirectory
%

! Class implementation for 'SystemResolverTest'

!		Instance methods for 'SystemResolverTest'

category: 'running'
method: SystemResolverTest
createResolver
	^ SystemResolver new
%

category: 'testing'
method: SystemResolverTest
testDbfScratchDir
	self assertOriginResolves: #dbfScratchDir
%

category: 'testing'
method: SystemResolverTest
testExtent1
	self assertOriginResolves: #extent1
%

category: 'testing'
method: SystemResolverTest
testExtent1Directory
	self assertOriginResolves: #extent1Directory
%

category: 'testing'
method: SystemResolverTest
testImage
	self assertOriginResolves: #image
%

category: 'testing'
method: SystemResolverTest
testImageDirectory
	self assertOriginResolves: #imageDirectory
%

category: 'testing'
method: SystemResolverTest
testTranlog
	self assertOriginResolves: #tranlog
%

! Class implementation for 'FileSystemTest'

!		Class methods for 'FileSystemTest'

category: 'accessing'
classmethod: FileSystemTest
defaultTimeLimit
	^10 seconds
%

category: 'testing'
classmethod: FileSystemTest
isAbstract
	^ self name = #FileSystemTest
%

category: 'accessing'
classmethod: FileSystemTest
packageNamesUnderTest
	^ #('FileSystem')
%

category: 'testing'
classmethod: FileSystemTest
shouldInheritSelectors
	^ true
	
%

!		Instance methods for 'FileSystemTest'

category: 'initialize-release'
method: FileSystemTest
createFileSystem
	self subclassResponsibility 
%

category: 'initialize-release'
method: FileSystemTest
markForCleanup: anObject
	toDelete add: (filesystem resolve: anObject)
%

category: 'running'
method: FileSystemTest
setUp
	super setUp.
	filesystem := self createFileSystem.
	toDelete := OrderedCollection new.
%

category: 'running'
method: FileSystemTest
tearDown
	toDelete
		select: [ :path | filesystem exists: path ]
		thenDo: [ :path | filesystem delete: path ].
	super tearDown	
%

category: 'tests-streams-compatibility'
method: FileSystemTest
testBinaryReadStream
	| reference stream |
	self markForCleanup: (reference := filesystem workingDirectory / 'griffle').
	self should: [ reference binaryReadStream ] raise: FileDoesNotExistException.
	reference writeStreamDo: [ :ws | ws nextPutAll: 'griffle' ].
	stream := reference binaryReadStream.
	self assert: stream contents asString equals: 'griffle'.
	stream close
%

category: 'tests-streams-compatibility'
method: FileSystemTest
testBinaryReadStreamDo
	| reference |
	self markForCleanup: (reference := filesystem workingDirectory / 'griffle').
	self 
		should: [ reference binaryReadStreamDo: [ :stream | self assert: false ] ] 
		raise: FileDoesNotExistException.
	reference writeStreamDo: [ :ws | ws nextPutAll: 'griffle' ].
	self assert: (reference readStreamDo: [ :stream | stream contents asString ]) 
		= 'griffle'
%

category: 'tests-streams-compatibility'
method: FileSystemTest
testBinaryReadStreamDoIfAbsent
	| reference |
	self markForCleanup: (reference := filesystem workingDirectory / 'griffle').
	self assert: (reference 
		binaryReadStreamDo: [ :stream | false ]
		ifAbsent: [ true ]).
	reference writeStreamDo: [ :ws | ws nextPutAll: 'griffle' ].
	self assert: (reference 
		binaryReadStreamDo: [ :stream | stream contents asString = 'griffle' ]
		ifAbsent: [ false ])
%

category: 'tests-streams-compatibility'
method: FileSystemTest
testBinaryReadStreamIfAbsent
	| reference stream |
	self markForCleanup: (reference := filesystem workingDirectory / 'griffle').
	self assert: (reference binaryReadStreamIfAbsent: [ true ]).
	reference writeStreamDo: [ :ws | ws nextPutAll: 'griffle' ].
	stream := reference binaryReadStreamIfAbsent: [ false ].
	self assert: stream contents asString = 'griffle'.
	stream close
%

category: 'tests'
method: FileSystemTest
testChildrenAt
	| directory entries |
	directory := Path * 'plonk'.
	
	filesystem createDirectory: directory.
	filesystem createDirectory: directory / 'griffle'.
	filesystem createDirectory: directory / 'bint'.
	
	self markForCleanup: directory / 'griffle'.
	self markForCleanup: directory / 'bint'.
	self markForCleanup: directory.
	
	entries := filesystem childrenAt: directory.
	
	self assert: entries size = 2.
	entries do: [ :ea | 
		self assert: (ea isKindOf: Path).
		self assert: ea parent = (filesystem resolve: directory).
		self assert: (#('griffle' 'bint' ) includes: ea basename) ]
%

category: 'tests'
method: FileSystemTest
testChildrenSorting
	| directory sorted |
	
	directory := Path * 'plonk'.
	
	filesystem createDirectory: directory.
	filesystem createDirectory: directory / 'alfa'.
	filesystem createDirectory: directory / 'beta'.
	
	self markForCleanup: directory / 'alfa'.
	self markForCleanup: directory / 'beta'.
	self markForCleanup: directory.
	
	sorted := (filesystem childrenAt: directory) sort.
	self assert: sorted size = 2.
	self assert: (sorted at: 1) basename = 'alfa'.
	self assert: (sorted at: 2) basename = 'beta'.
%

category: 'tests'
method: FileSystemTest
testChildrenSortingRoot
	| directory1 directory2 |
	"self skip."
	
	directory1 := Path * 'plonk1'.
	directory2 := Path * 'plonk2'.
	
	filesystem createDirectory: directory1.
	filesystem createDirectory: directory2.
	
	self markForCleanup: directory1.
	self markForCleanup: directory2.
	
	self assert: filesystem workingDirectory children sort size = filesystem workingDirectory children size
%

category: 'tests'
method: FileSystemTest
testCopy
	| out in contents |
	
	self
		markForCleanup: 'gooly';
		markForCleanup: 'plonk'.
		
	out := (filesystem workingDirectory / 'gooly') writeStream.
	[ out nextPutAll: 'gooly' ] ensure: [ out close ].
	filesystem copy: 'gooly' to: 'plonk'.
	
	in := (filesystem workingDirectory / 'plonk') readStream.
	contents := [ in contents asString ] ensure: [ in close ].
	self assert: contents equals: 'gooly'
%

category: 'tests'
method: FileSystemTest
testCopyAndDelete
	"Check that FileSystem>>copyAndDelete:to: works within a filesystem.
	DiskFileSystemTest>>testMoveMemoryToDisk checks that #copyAndDelete:to: works across filesystems."
	| folder testString f1 f1s f2 |
	
	folder := filesystem workingDirectory.
	testString := 'To be copied and deleted'.

	f1 := folder / 'f1'.
	f1s := f1 writeStream.
	[ f1s nextPutAll: testString ] ensure: [ f1s close ].
	f2 := folder / 'f2'.
	
	"Cleanup after running"
	self 
		markForCleanup: f1;
		markForCleanup: f2.	
	
	filesystem copyAndDelete: f1 to: f2.
	self deny: f1 exists.
	self assert: f2 exists.
	self assert: f2 contents equals: testString.
%

category: 'tests'
method: FileSystemTest
testCopyDestExists
	| out |
	
	self 
		markForCleanup: 'gooly'; 
		markForCleanup: 'plonk'.
		
	out := (filesystem  workingDirectory / 'gooly') writeStream.
	[out nextPutAll: 'gooly'] ensure: [out close].

	(filesystem  workingDirectory / 'plonk') writeStream close.
	
	self 
		should: [filesystem copy: 'gooly' to: 'plonk']
		raise: FileExists
%

category: 'tests'
method: FileSystemTest
testCopySourceDoesntExist
	self 
		should: [filesystem copy: 'plonk' to: 'griffle']
		raise: FileDoesNotExistException
%

category: 'tests'
method: FileSystemTest
testCopyWithCorrectBasename
        | directory |
        self
                markForCleanup: 'gooly';
                markForCleanup: 'plonk'.
        directory := filesystem workingDirectory.
        (directory / 'gooly') ensureCreateFile.
        directory / 'gooly' copyTo: directory / 'plonk'.
        self assert: (directory / 'plonk') exists.
        self assert: (directory childNames includes: 'plonk')
%

category: 'tests'
method: FileSystemTest
testCreateDirectory
	| path directory |
	directory := filesystem workingDirectory.
 	self markForCleanup: directory / 'plonk' / 'griffle'.
	self markForCleanup: directory / 'plonk'.
	path := directory / 'plonk' / 'griffle'.
	(directory / 'plonk') ensureCreateDirectory.
	self shouldnt: [path createDirectory] raise:Error.
	self assert: path exists.
	(directory / 'plonk' ) deleteAll.
%

category: 'tests'
method: FileSystemTest
testCreateDirectoryExists
	| path |
	
	path := Path * 'griffle'.
	self markForCleanup: path.
	
	filesystem createDirectory: path.
	self 
		should: [ filesystem createDirectory: path]
		raise: DirectoryExists.
%

category: 'tests'
method: FileSystemTest
testCreateDirectoryNoParent
	| path |
	path := Path * 'griffle' / 'nurp'.
	self 
		should: [filesystem createDirectory: path]
		raise: DirectoryDoesNotExist.
	
	
%

category: 'tests'
method: FileSystemTest
testCreateDirectoryNotCreateParent
	| path |
	path := filesystem workingDirectory / 'plonk' / 'griffle'.
	self should:[path createDirectory] raise: DirectoryDoesNotExist.
	self assert: path exists not.
%

category: 'tests'
method: FileSystemTest
testCreateFile
	| directory path |
	directory := filesystem workingDirectory.
 	self markForCleanup: directory / 'plonk' / 'griffles'.
	self markForCleanup: directory / 'plonk'.
	path := directory / 'plonk' / 'griffles'.
	(directory / 'plonk') ensureCreateDirectory.
	self shouldnt: [ path createFile] raise:Error.
	self assert:path exists .
	(directory / 'plonk') deleteAll.
%

category: 'tests'
method: FileSystemTest
testCreateFileNotCreateParent
	| path |
	path := '/plonk/griffles' asFileReference.
	self should:[path createFile] raise: DirectoryDoesNotExist .
	self assert: path exists not.
%

category: 'tests'
method: FileSystemTest
testDefaultWorkingDirectory
	self assert: filesystem workingDirectory isRoot
%

category: 'tests'
method: FileSystemTest
testDelete
	"Unlike ensureDelete, delete raises an exception if the file does not exist."
	| reference |
	
	reference := filesystem workingDirectory / 'does-not-exist'.
	self deny: reference exists.
	
	self 
		should: [ reference delete ]
		raise: FileDoesNotExistException.
		
		
	reference := ( filesystem workingDirectory / 'file') ensureCreateFile.
	reference delete.
	
	self deny: reference exists. 
		
%

category: 'tests'
method: FileSystemTest
testDelimiter
	self assert: filesystem delimiter isCharacter
%

category: 'tests'
method: FileSystemTest
testDirectory
	| path |
	
	path := Path * 'plonk'.
	self markForCleanup: path.
	
	filesystem createDirectory: path.
	
	self assert: (filesystem exists: path).
	self assert: (filesystem isDirectory: path).
	
	filesystem delete: path.
	self deny: (filesystem isFile: path).
	self deny: (filesystem exists: path)
%

category: 'tests'
method: FileSystemTest
testEnsureDirectory
	| path |
	
	path := Path * 'plonk'.
	self markForCleanup: path.
	
	filesystem ensureCreateDirectory: path.
	self assert: (filesystem isDirectory: path).
%

category: 'tests'
method: FileSystemTest
testEnsureDirectoryCreatesParent
	| path |
	path := Path * 'plonk' / 'griffle'.
	self markForCleanup: path.
	self markForCleanup: path parent.
	filesystem ensureCreateDirectory: path.
	self assert: (filesystem isDirectory: Path * 'plonk').
	self assert: (filesystem isDirectory: path)
%

category: 'tests'
method: FileSystemTest
testEnsureDirectoryExists
	| path |
	path := Path * 'plonk'.
	self markForCleanup: path.
	filesystem createDirectory: path.
	filesystem ensureCreateDirectory: path
%

category: 'tests'
method: FileSystemTest
testEntriesAt
	| directory entries |
	directory := Path * 'plonk'.
	
	filesystem createDirectory: directory.
	filesystem createDirectory: directory / 'griffle'.
	filesystem createDirectory: directory / 'bint'.
	
	self 
		markForCleanup: directory / 'griffle';
		markForCleanup: directory / 'bint';
		markForCleanup: directory.
	
	entries := filesystem entriesAt: directory.
	self assert: entries size = 2.
	entries do: [ :ea | 
		self assert: (ea isKindOf: FileSystemDirectoryEntry).
		self assert: ea reference parent path = (filesystem resolve: directory).
		self assert: (#('griffle' 'bint' ) includes: ea reference basename).
		self assert: ea isDirectory ]
%

category: 'tests'
method: FileSystemTest
testEntryAt
	| path1 path2 entry1 entry2  |

	path1 := Path * 'plonk1'.
	path2 := Path * 'plonk2'.
	self markForCleanup: path1.
	self markForCleanup: path2.
	
	filesystem createDirectory: path1.
	(Delay forSeconds: 2) wait. "#creationTime seems limited to 1 second resolution"
	filesystem createDirectory: path2.
	
	entry1 := filesystem entryAt: path1.
	entry2 := filesystem entryAt: path2.
	
	self assert: entry1 isDirectory.
	self assert: entry2 isDirectory.
	self assert: entry1 reference = (filesystem referenceTo: path1) asAbsolute.
	self assert: entry2 reference = (filesystem referenceTo: path2) asAbsolute.

	self assert: entry1 creationTime < entry2 creationTime.
	self assert: entry1 modificationTime < entry2 modificationTime.
%

category: 'tests'
method: FileSystemTest
testFile
	| path |
	
	path := Path * 'gooly'.
	self markForCleanup: path.
	
	(filesystem workingDirectory resolve: path) writeStream close.
	self assert: (filesystem exists: path).
	self deny: (filesystem isDirectory: path).
	self assert: (filesystem isFile: path).
	
	filesystem delete: path.
	self deny: (filesystem exists: path)
%

category: 'tests'
method: FileSystemTest
testFileNames
	| reference |
	#('test one' 'test with two' 'test-äöü' 'test.äöü') do: [ :each |
		reference := filesystem workingDirectory / each.
		self assert: reference basename = each.
		self deny: reference exists.
		reference
			writeStreamDo: [ :stream | stream nextPutAll: 'gooly' ]
			ifPresent: [ self fail ].
		[	self assert: reference exists.
			self assert: (filesystem workingDirectory children
				anySatisfy: [ :ref | ref = reference ]) ]
		ensure: [ reference delete ] ]
%

category: 'tests'
method: FileSystemTest
testMoveTo
	| base file folder |
	
	base := filesystem workingDirectory.
	
	folder := (base / 'folder') ensureCreateDirectory. 
	file := (base / 'file') ensureCreateFile.
	
	"Cleanup after running"
	self 
		markForCleanup: (base / 'folder' / 'newFile');
		markForCleanup: (base / 'folder') ;
		markForCleanup: (base / 'file').	
	
	file moveTo: (folder / 'newFile').
	self deny: (base / 'file') exists.
	self assert: (folder / 'newFile') exists.
%

category: 'tests'
method: FileSystemTest
testMoveToFailingExistingDestination
	| base file folder |
	
	base := filesystem workingDirectory.
	
	folder := (base / 'folder') ensureCreateDirectory. 
	(folder / 'newFile') ensureCreateFile.
	file := (base / 'file') ensureCreateFile.
	
	"Cleanup after running"
	self 
		markForCleanup: (base / 'folder' / 'newFile');
		markForCleanup: (base / 'folder') ;
		markForCleanup: (base / 'file').	
	
	"Destination exists already"
	self should: [ file moveTo: (folder / 'newFile') ] raise: Error.
	self assert: (base / 'file') exists.
	self assert: (folder / 'newFile') exists.
%

category: 'tests'
method: FileSystemTest
testMoveToFailingMissingDestination
	| base file |
	
	base := filesystem workingDirectory.
	
	file := (base / 'file') ensureCreateFile.
	
	"Cleanup after running"
	self 
		markForCleanup: (base / 'folder' / 'newFile');
		markForCleanup: (base / 'folder') ;
		markForCleanup: (base / 'file').	
	
	"Destination exists already"
	self deny: (base / 'folder') exists.
	self should: [ file moveTo: (base / 'folder' / 'newFile') ] raise: Error.
	self assert: (base / 'file') exists.
	self deny: (base / 'folder' / 'newFile') exists.
%

category: 'tests'
method: FileSystemTest
testMoveToFailingMissingSource
	| base folder |
	
	base := filesystem workingDirectory.
	
	folder := (base / 'folder') ensureCreateDirectory. 
	
	"Cleanup after running"
	self 
		markForCleanup: (base / 'folder' / 'newFile');
		markForCleanup: (base / 'folder').
	
	self deny: (base / 'file') exists.
	"Destination exists already"
	self should: [ (base / 'file') moveTo: (folder / 'newFile') ] raise: Error.
	self deny: (base / 'file') exists.
	self deny: (folder / 'newFile') exists.
%

category: 'tests'
method: FileSystemTest
testNonExistentEntryAt
	| path1 path2  |
	path1 := Path * 'plonk1'.
	path2 := Path * 'plonk2'.
	self markForCleanup: path1.
	filesystem createDirectory: path1.

	self shouldnt: [ filesystem entryAt: path1 ] raise: FileDoesNotExistException.
	self should: [ filesystem entryAt: path2 ] raise: FileDoesNotExistException
%

category: 'tests'
method: FileSystemTest
testNonExistentFileSize
	| base file1 file2 |
	
	base := filesystem workingDirectory.
	file1 := (base / 'file1') ensureCreateFile.
	file2 := (base / 'file2').
	self markForCleanup: base / 'file1'.
	
	self shouldnt: [ file1 size ] raise: FileDoesNotExistException.
	self should: [ file2 size ] raise: FileDoesNotExistException
%

category: 'tests-streams'
method: FileSystemTest
testReadingAfterWriting
	| reference stream |
	self markForCleanup: (reference := filesystem workingDirectory / 'griffle').
	self deny: reference exists.
	reference writeStreamDo: [ :ws | ws nextPutAll: 'griffle' ].
	stream := reference readStream.
	self assert: stream contents equals: 'griffle'.
	stream close
%

category: 'tests-streams'
method: FileSystemTest
testReadStream
	| reference stream |
	self markForCleanup: (reference := filesystem workingDirectory / 'griffle').
	self should: [ reference readStream ] raise: FileDoesNotExistException.
	reference writeStreamDo: [ :ws | ws nextPutAll: 'griffle' ].
	stream := reference readStream.
	self assert: stream contents asString equals: 'griffle'.
	stream close
%

category: 'tests-streams'
method: FileSystemTest
testReadStreamDo
	| reference |
	self markForCleanup: (reference := filesystem workingDirectory / 'griffle').
	self 
		should: [ reference readStreamDo: [ :stream | self assert: false ] ] 
		raise: FileDoesNotExistException.
	reference writeStreamDo: [ :ws | ws nextPutAll: 'griffle' ].
	self assert: (reference readStreamDo: [ :stream | stream contents asString ]) 
		= 'griffle'
%

category: 'tests-streams'
method: FileSystemTest
testReadStreamDoIfAbsent
	| reference |
	self markForCleanup: (reference := filesystem workingDirectory / 'griffle').
	self assert: (reference 
		readStreamDo: [ :stream | false ]
		ifAbsent: [ true ]).
	reference writeStreamDo: [ :ws | ws nextPutAll: 'griffle' ].
	self assert: (reference 
		readStreamDo: [ :stream | stream contents asString = 'griffle' ]
		ifAbsent: [ false ])
%

category: 'tests-streams'
method: FileSystemTest
testReadStreamIfAbsent
	| reference stream |
	self markForCleanup: (reference := filesystem workingDirectory / 'griffle').
	self assert: (reference readStreamIfAbsent: [ true ]).
	reference writeStreamDo: [ :ws | ws nextPutAll: 'griffle' ].
	stream := reference readStreamIfAbsent: [ false ].
	self assert: stream contents asString = 'griffle'.
	stream close
%

category: 'tests'
method: FileSystemTest
testReferenceTo
	|path|
	"use a relative path since absolute path behavior differs on mac, linux vs win native filesystems"
	path := Path * 'a' / 'b'.
	self assert: (filesystem referenceTo: 'a/b') path = path.
%

category: 'tests'
method: FileSystemTest
testRoot
	self assert: filesystem root fileSystem = filesystem.
	self assert: filesystem root path = Path root.
	self assert: filesystem root isRoot.
%

category: 'tests'
method: FileSystemTest
testRootExists
	self assert: (filesystem exists: Path root)
%

category: 'tests'
method: FileSystemTest
testRootIsDirectory
	self assert: (filesystem isDirectory: Path root)
%

category: 'tests'
method: FileSystemTest
testRootIsNotAFile
	self deny: (filesystem isFile: Path root)
%

category: 'tests'
method: FileSystemTest
testWorking
	self assert: filesystem workingDirectory fileSystem = filesystem.
	self assert: filesystem workingDirectory path = filesystem workingDirectoryPath
%

category: 'tests-streams'
method: FileSystemTest
testWriteStream
	| reference stream |
	self markForCleanup: (reference := filesystem workingDirectory / 'griffle').
	stream := reference writeStream.
	stream nextPutAll: 'griffle'.
	stream close.
	self assert: (filesystem workingDirectory / 'griffle') isFile.
	stream := reference writeStream.
	stream close
%

category: 'tests-streams'
method: FileSystemTest
testWriteStreamDo
	| reference |
	self markForCleanup: (reference := filesystem workingDirectory / 'griffle').
	self assert: (reference writeStreamDo: [ :stream |
		stream nextPutAll: 'griffle'.
		true ]).
	self assert: (filesystem workingDirectory / 'griffle') isFile.
	self assert: (reference writeStreamDo: [ :stream | true ])
%

category: 'tests-streams'
method: FileSystemTest
testWriteStreamDoIfPresent
	| reference |
	self markForCleanup: (reference := filesystem workingDirectory / 'griffle').
	self assert: (reference 
		writeStreamDo: [ :stream |
			stream nextPutAll: 'griffle'.
			true ]
		ifPresent: [ false ]).
	self assert: (filesystem workingDirectory / 'griffle') isFile.
	self assert: (reference 
		writeStreamDo: [ :stream | true ]
		ifPresent: [ true ])
%

category: 'tests-streams'
method: FileSystemTest
testWriteStreamIfPresent
	| reference stream |
	self markForCleanup: (reference := filesystem workingDirectory / 'griffle').
	stream := reference writeStreamIfPresent: [ false ].
	stream nextPutAll: 'griffle'.
	stream close.
	self assert: (filesystem workingDirectory / 'griffle') isFile.
	self assert: (reference writeStreamIfPresent: [ true ])
%

! Class implementation for 'DiskFileSystemTest'

!		Instance methods for 'DiskFileSystemTest'

category: 'initialize-release'
method: DiskFileSystemTest
createFileSystem
	^ FileSystem store: (DiskStore activeClass createDefault)
%

category: 'tests'
method: DiskFileSystemTest
testDefaultWorkingDirectory
	| ref x y |
	ref := filesystem workingDirectory.
	self assert: ((x := GsFile _expandEnvVariable: 'PWD' isClient:false) beginsWith: (y := ref pathString))
%

category: 'tests'
method: DiskFileSystemTest
testEqual
	| other |
	other := self createFileSystem.
	self assert: filesystem = other
%

category: 'tests'
method: DiskFileSystemTest
testIsDirectory
	self assert: (filesystem isDirectory: FileLocator imageDirectory resolve path)
%

category: 'tests'
method: DiskFileSystemTest
testIsDiskFileSystem
	self assert: filesystem isDiskFileSystem.
	
%

category: 'tests'
method: DiskFileSystemTest
testMoveMemoryToDisk
	"Test moving a file from the memory filesystem to the disk filesystem.
	This ensures that the copyAndDelete:to: is called correctly."
	| memfs out testString old new |
	[
		memfs := FileSystem memory.
		old := memfs / 'testMoveMemoryToDisk_old'.
		out := old writeStream.
		testString := 'To be moved to disk'.
		[ out nextPutAll: testString ] ensure: [ out close ].
		
		new := FileLocator imageDirectory / 'testMoveMemoryToDisk_new'.
		old moveTo: new.
		
		self deny: (memfs / 'testMoveMemoryToDisk_old') exists.
		self assert: new exists.
		self assert: new contents equals: testString.
	] ensure: [ 
		old ensureDelete.
		new ensureDelete.
	]
%

! Class implementation for 'MemoryFileSystemTest'

!		Instance methods for 'MemoryFileSystemTest'

category: 'initialize-release'
method: MemoryFileSystemTest
createFileSystem
	^ FileSystem memory
%

category: 'tests'
method: MemoryFileSystemTest
lastModificationTimeOf: fileReference
	"DateAndTime primUTCMicrosecondsClock is not precise across all OS so put in slight delay between calling modificationTime"

	^ [ fileReference modificationTime ]
		ensure: [ (Delay forMilliseconds: 100) wait ]
%

category: 'tests'
method: MemoryFileSystemTest
testCurrentEqual
	| other another |
	another := FileSystem currentMemoryFileSystem.
	other := FileSystem currentMemoryFileSystem.
	self assert: other equals: another
%

category: 'tests'
method: MemoryFileSystemTest
testIsMemoryFileSystem
	self assert: filesystem isMemoryFileSystem.
	
%

category: 'tests'
method: MemoryFileSystemTest
testModifiedTimeWhenFileCreated
	self assert: (filesystem / 'file.txt') ensureCreateFile modificationTime notNil
%

category: 'tests'
method: MemoryFileSystemTest
testModifiedTimeWhenFileModifiedByWriteStream
	| modifiedTime fileReference |
	fileReference := (filesystem / 'file.txt') ensureCreateFile.
	modifiedTime := self lastModificationTimeOf: fileReference.
	fileReference writeStreamDo: [ :aStream | aStream nextPutAll: 'data' ].
	self assert: modifiedTime notNil.
	self deny: modifiedTime equals: fileReference modificationTime
%

category: 'tests'
method: MemoryFileSystemTest
testModifiedTimeWhenFileModifiedWithBinaryWriteStream
	| modifiedTime fileReference data |
	fileReference := (filesystem / 'file.txt') ensureCreateFile.
	modifiedTime := self lastModificationTimeOf: fileReference.
	data := 'some data'.
	fileReference binaryWriteStreamDo: [ :aStream | aStream nextPutAll: data ].
	self assert: modifiedTime notNil.
	self deny: modifiedTime equals: fileReference modificationTime.
	self
		assert: data asByteArray
		equals: (fileReference binaryReadStreamDo: [ :aStream | aStream upToEnd ]).
	self assert: data equals: (fileReference readStreamDo: [ :aStream | aStream contents ])
%

category: 'tests'
method: MemoryFileSystemTest
testModifiedTimeWhenFileWrittenTo
	| modifiedTime fileReference |
	fileReference := (filesystem / 'file.txt') ensureCreateFile.
	modifiedTime := self lastModificationTimeOf: fileReference.
	fileReference binaryWriteStreamDo: [ :aStream | aStream nextPutAll: 'data' ].
	self assert: modifiedTime notNil.
	self deny: modifiedTime equals: fileReference modificationTime
%

category: 'tests'
method: MemoryFileSystemTest
testModifiedTimeWhenHandleTruncated
	| modifiedTime fileReference handle |
	fileReference := (filesystem / 'file.txt') ensureCreateFile.
	handle := fileReference openWritable: true.
	modifiedTime := self lastModificationTimeOf: fileReference.
	handle truncate.
	self assert: modifiedTime notNil.
	self deny: modifiedTime equals: fileReference modificationTime
%

category: 'tests'
method: MemoryFileSystemTest
testNotEqualWhenCreatingNewMemoryFileSystem
	| other |
	other := FileSystem memory.
	self deny: other equals: filesystem
%

category: 'tests'
method: MemoryFileSystemTest
testNotEqualWhenRequestingMemoryFileSystem
	| other |
	other := self createFileSystem.
	self deny: other equals: filesystem
%

! Class implementation for 'FileSystemTreeTest'

!		Class methods for 'FileSystemTreeTest'

category: 'testing'
classmethod: FileSystemTreeTest
isAbstract
	^ self name = #FileSystemTreeTest
%

!		Instance methods for 'FileSystemTreeTest'

category: 'running'
method: FileSystemTreeTest
createDirectory: aString
	self subclassResponsibility
%

category: 'running'
method: FileSystemTreeTest
createFile: aString
	self subclassResponsibility
%

category: 'running'
method: FileSystemTreeTest
setUpGreek
	self 
		createDirectory: '/alpha';
		createDirectory: '/alpha/beta';
		createFile: '/alpha/beta/gamma';
		createFile: '/alpha/beta/delta';
		createDirectory: '/alpha/epsilon';
		createFile: '/alpha/epsilon/zeta'
%

! Class implementation for 'CopyVisitorTest'

!		Instance methods for 'CopyVisitorTest'

category: 'running'
method: CopyVisitorTest
createDirectory: aString 
	source createDirectory: (source store pathFromString: aString)
%

category: 'running'
method: CopyVisitorTest
createFile: aString 
	source store createFile: (source store pathFromString: aString)
%

category: 'running'
method: CopyVisitorTest
setUp
	super setUp.
	source := FileSystem memory.
	dest := FileSystem memory
%

category: 'tests'
method: CopyVisitorTest
testAll
	self setUpGreek.
	CopyVisitor 
		copy: (source / 'alpha') 
		to: (dest / 'alpha').
	self assert: (dest isDirectory: '/alpha').
	self assert: (dest isFile: '/alpha/beta/gamma').
%

! Class implementation for 'SingleTreeTest'

!		Class methods for 'SingleTreeTest'

category: 'testing'
classmethod: SingleTreeTest
isAbstract
	^ self name = #SingleTreeTest
%

!		Instance methods for 'SingleTreeTest'

category: 'running'
method: SingleTreeTest
createDirectory: aString 
	filesystem createDirectory: (filesystem pathFromString: aString)
%

category: 'running'
method: SingleTreeTest
createFile: aString 
	filesystem store createFile: (filesystem pathFromString: aString)
%

category: 'running'
method: SingleTreeTest
setUp
	super setUp.
	filesystem := FileSystem memory
%

! Class implementation for 'AbstractEnumerationVisitorTest'

!		Class methods for 'AbstractEnumerationVisitorTest'

category: 'as yet unclassified'
classmethod: AbstractEnumerationVisitorTest
isAbstract
	^ self name = #AbstractEnumerationVisitorTest
%

!		Instance methods for 'AbstractEnumerationVisitorTest'

category: 'utilities'
method: AbstractEnumerationVisitorTest
assertEntries: references are: expected
	| strings |
	self assert: references _isArray.
	references do: [ :ea | self assert: ea class equals: FileSystemDirectoryEntry ].
	strings := references collect: [ :ea | ea reference pathString ].
	self assert: strings equals: expected
%

category: 'accessing'
method: AbstractEnumerationVisitorTest
root
	^ filesystem / 'alpha'
%

category: 'running'
method: AbstractEnumerationVisitorTest
setUp
	super setUp.
	self setUpGreek.
%

! Class implementation for 'CollectVisitorTest'

!		Instance methods for 'CollectVisitorTest'

category: 'tests'
method: CollectVisitorTest
testBreadthFirst
	| entries |
	entries := CollectVisitor breadthFirst: self root.
	self 
		assertEntries: entries
		are: #(
				'/alpha'
				'/alpha/beta'
				'/alpha/epsilon'
				'/alpha/beta/delta'
				'/alpha/beta/gamma'
				'/alpha/epsilon/zeta'
			)
%

category: 'tests'
method: CollectVisitorTest
testPostorder
	| entries |
	entries := CollectVisitor postorder: self root.
	self 
		assertEntries: entries
		are: #(
				'/alpha/beta/delta'
				'/alpha/beta/gamma'
				'/alpha/beta'
				'/alpha/epsilon/zeta'
				'/alpha/epsilon'
				'/alpha'
			)
%

category: 'tests'
method: CollectVisitorTest
testPreorder
	| entries |
	entries := CollectVisitor preorder: self root.
	self 
		assertEntries: entries
		are: #(
				'/alpha'
				'/alpha/beta'
				'/alpha/beta/delta'
				'/alpha/beta/gamma'
				'/alpha/epsilon'
				'/alpha/epsilon/zeta'
			)
%

! Class implementation for 'SelectVisitorTest'

!		Instance methods for 'SelectVisitorTest'

category: 'tests'
method: SelectVisitorTest
testBreadthFirst
	| entries |
	entries := SelectVisitor breadthFirst: self root.
	self 
		assertEntries: entries
		are: #(
				'/alpha'
				'/alpha/beta'
				'/alpha/epsilon'
				'/alpha/beta/delta'
				'/alpha/beta/gamma'
				'/alpha/epsilon/zeta'
			)
%

category: 'tests'
method: SelectVisitorTest
testBreadthFirstSelect
	| entries |
	entries := SelectVisitor breadthFirst: self root select: [ :node| node name endsWith: #a].
	self 
		assertEntries: entries
		are: #(
				'/alpha'
				'/alpha/beta'
				'/alpha/beta/delta'
				'/alpha/beta/gamma'
				'/alpha/epsilon/zeta'
			)
%

category: 'tests'
method: SelectVisitorTest
testPostorder
	| entries |
	entries := SelectVisitor postorder: self root.
	self 
		assertEntries: entries
		are: #(
				'/alpha/beta/delta'
				'/alpha/beta/gamma'
				'/alpha/beta'
				'/alpha/epsilon/zeta'
				'/alpha/epsilon'
				'/alpha'
			)
%

category: 'tests'
method: SelectVisitorTest
testPostorderSelect
	| entries |
	entries := SelectVisitor postorder: self root select: [ :node| node name endsWith: #a].
	self 
		assertEntries: entries
		are: #(
				'/alpha/beta/delta'
				'/alpha/beta/gamma'
				'/alpha/beta'
				'/alpha/epsilon/zeta'
				'/alpha'
			)
%

category: 'tests'
method: SelectVisitorTest
testPreorder
	| entries |
	entries := SelectVisitor preorder: self root.
	self 
		assertEntries: entries
		are: #(
				'/alpha'
				'/alpha/beta'
				'/alpha/beta/delta'
				'/alpha/beta/gamma'
				'/alpha/epsilon'
				'/alpha/epsilon/zeta'
			)
%

category: 'tests'
method: SelectVisitorTest
testPreorderSelect
	| entries |
	entries := SelectVisitor preorder: self root select: [ :node| node name endsWith: #a].
	self 
		assertEntries: entries
		are: #(
				'/alpha'
				'/alpha/beta'
				'/alpha/beta/delta'
				'/alpha/beta/gamma'
				'/alpha/epsilon/zeta'
			)
%

! Class implementation for 'DeleteVisitorTest'

!		Instance methods for 'DeleteVisitorTest'

category: 'tests'
method: DeleteVisitorTest
testBeta
	self setUpGreek.
	DeleteVisitor delete: (filesystem / 'alpha' / 'beta').
	self assert: (filesystem isDirectory: '/alpha').
	self assert: (filesystem isDirectory: '/alpha/epsilon').
	self deny: (filesystem exists: '/alpha/beta').
	
%

! Class implementation for 'GuideTest'

!		Class methods for 'GuideTest'

category: 'testing'
classmethod: GuideTest
isAbstract
	^ self name = #GuideTest
%

!		Instance methods for 'GuideTest'

category: 'asserting'
method: GuideTest
assertVisitedIs: anArray
	visited with: anArray do:
		[:entry :basename | 
		self assert: entry reference basename = basename]
%

category: 'running'
method: GuideTest
setUp
	super setUp.
	visited := OrderedCollection new.
	filesystem := FileSystem memory.
	self setUpGreek
%

category: 'visitor'
method: GuideTest
visitDirectory: aReference
	visited add: aReference.
%

category: 'visitor'
method: GuideTest
visitFile: aReference
	visited add: aReference.
%

! Class implementation for 'BreadthFirstGuideTest'

!		Instance methods for 'BreadthFirstGuideTest'

category: 'tests'
method: BreadthFirstGuideTest
testAll
	guide := BreadthFirstGuide for: self.
	guide show: (filesystem / 'alpha').
	self assertVisitedIs: #(
			'alpha'
			'beta'
			'epsilon'
			'delta'
			'gamma'
			'zeta'
		)
%

! Class implementation for 'PostorderGuideTest'

!		Instance methods for 'PostorderGuideTest'

category: 'tests'
method: PostorderGuideTest
testAll
	guide := PostorderGuide for: self.
	guide show: (filesystem / 'alpha').
	self assertVisitedIs: #(
			'delta'
			'gamma'
			'beta'
			'zeta'
			'epsilon'
			'alpha'
		)
%

! Class implementation for 'PreorderGuideTest'

!		Instance methods for 'PreorderGuideTest'

category: 'tests'
method: PreorderGuideTest
testAll
	guide := PreorderGuide for: self.
	guide show: (filesystem / 'alpha').
	self assertVisitedIs: #(
			'alpha'
			'beta'
			'delta'
			'gamma'
			'epsilon'
			'zeta'
		)
%

! Class implementation for 'FileTest'

!		Instance methods for 'FileTest'

category: 'running'
method: FileTest
tearDown

	'asd.txt' asFileReference ensureDelete.
	super tearDown
%

category: 'tests'
method: FileTest
testCheckExistenceOfExistingFileThrowsException

	| file |
	file := File named: 'asd.txt'.
	file writeStream close.
	self should: [file checkDoesNotExist] raise: FileAlreadyExistsException.
%

category: 'tests'
method: FileTest
testCheckExistenceOfNonExistingFileDoesNotThrowException

	| file |
	file := File named: 'asd.txt'.
	self shouldnt: [file checkDoesNotExist] raise: Error.
%

category: 'tests'
method: FileTest
testFileDelete

	| file |
	file := File named: 'asd.txt'.
	file writeStream close.
	file delete.
	self deny: file exists.
%

category: 'tests'
method: FileTest
testFileExists

	| file |
	file := File named: 'asd.txt'.
	file writeStream close.
	self assert: file exists.
	file delete.
%

category: 'tests'
method: FileTest
testOpenFileForReadDoesNotDeleteExistingFile

	| size |
	(File named: 'asd.txt') writeStreamDo: [ :stream | stream nextPutAll: 'aaa' ].

	size := (File named: 'asd.txt') size.
	self assert: size equals: 3.
%

category: 'tests'
method: FileTest
testOpeningFileNormallyDoesNotDeleteExistingFile

	| size |
	(File named: 'asd.txt') writeStreamDo: [ :stream | stream nextPutAll: 'aaa' ].

	size := (File named: 'asd.txt') size.
	self assert: size equals: 3.
%

category: 'tests'
method: FileTest
testOpeningFileObjectCreatesFile

	(File named: 'asd.txt') writeStream close.
	"Our File implementation should not cache anything.
	This test is based on this assumption."
	self assert: (File named: 'asd.txt') exists.
%

category: 'tests'
method: FileTest
testOpeningFileSetsPositionAtBeggining

	| file |
	[(File named: 'asd.txt') writeStreamDo: [ :stream | stream nextPutAll: 'aaa' ].
	file := (File named: 'asd.txt') openForWrite.
	self assert: file position equals: 0 
		] ensure: [ file ifNotNil: [ file close ] ]
%

category: 'tests'
method: FileTest
testOpeningForAppendSetsPositionAtEnd

	| file |
	[ (File named: 'asd.txt') writeStreamDo: [ :stream | stream nextPutAll: 'aaa' ].
	file := (File named: 'asd.txt') openForAppend.
	self assert: file position equals: 3
		] ensure: [ file ifNotNil: [ file close ] ]
%

! Class implementation for 'FSGemStoneKernelTests'

!		Instance methods for 'FSGemStoneKernelTests'

category: 'private'
method: FSGemStoneKernelTests
collectionMoreThan1NoDuplicates

	^self collectionWithoutEqualElements
%

category: 'private'
method: FSGemStoneKernelTests
collectionWithoutEqualElements

	^ {1.1. 4.4. 6.5. 2.4. 3.1.}
%

category: 'private'
method: FSGemStoneKernelTests
collectionWithSameAtEndAndBegining

	^ {1.5. 5.5. 1.5 copy}.
%

category: 'private'
method: FSGemStoneKernelTests
elementNotInForIndexAccessing

	^ 9
%

category: 'private'
method: FSGemStoneKernelTests
empty

	^ #().
%

category: 'private'
method: FSGemStoneKernelTests
indexInForCollectionWithoutDuplicates
	^ 2.
%

category: 'private'
method: FSGemStoneKernelTests
indexInNonEmpty
	"Return an index between bounds of 'nonEmpty'"
	
	^ 2
%

category: 'private'
method: FSGemStoneKernelTests
moreThan3Elements

	^ #(1 2 3 4 5) copy.
%

category: 'private'
method: FSGemStoneKernelTests
nonEmpty

	^ self moreThan3Elements
%

category: 'tests'
method: FSGemStoneKernelTests
testAllButFirst

	| abf col |
	col := self moreThan3Elements.
	abf := col allButFirst.
	self deny: abf first = col first.
	self assert: abf size + 1 = col size
%

category: 'tests'
method: FSGemStoneKernelTests
testAllButFirstNElements

	| allButFirst collection |
	collection := self moreThan3Elements.
	allButFirst := collection allButFirst: 2.
	allButFirst withIndexDo: 
		 [:el :i | self assert: el equals: (collection at: i + 2) ].
	self assert: allButFirst size + 2 equals: collection size
%

category: 'tests'
method: FSGemStoneKernelTests
testCopyAfterLast

	| result index collection |
	collection := self collectionWithoutEqualElements .
	index:= self indexInForCollectionWithoutDuplicates .
	result := collection copyAfterLast: (collection  at:index ).
	
	"Verify content"
	result withIndexDo: 
		[:el :i | self assert: (collection at: (i + index )) equals: (result at: i)].

	"Verify size"
	self assert: result size equals: (collection size - index)
%

category: 'tests'
method: FSGemStoneKernelTests
testCopyUpToLast

	| result index collection |
	collection := self collectionWithoutEqualElements.
	index:= self indexInForCollectionWithoutDuplicates.
	result := collection copyUpToLast: (collection at:index).
	
	"Verify content"
	result withIndexDo: [:el :i| self assert: (collection at:i) equals: (result at: i)].
	
	"Verify size"
	self assert: result size equals: (index-1)
%

category: 'tests'
method: FSGemStoneKernelTests
testCopyWithFirst

	| index element result |
	index:= self indexInNonEmpty .
	element:= self nonEmpty at: index.
	
	result := self nonEmpty copyWithFirst: element.	
	
	self assert: result size = (self nonEmpty size + 1).
	self assert: result first = element .
	
	2 to: result size do:
	[ :i |
	self assert: (result at: i) = ( self nonEmpty at: ( i - 1 ))].
%

category: 'tests'
method: FSGemStoneKernelTests
testDifference
	"Answer the set theoretic difference of two collections."
	
	| difference |
	self assert: (self collectionWithoutEqualElements difference: self collectionWithoutEqualElements) isEmpty.
	self assert: (self empty difference: self collectionWithoutEqualElements) isEmpty.
	difference := (self collectionWithoutEqualElements difference: self empty).
	self assert: difference size = self collectionWithoutEqualElements size.
	self collectionWithoutEqualElements do: [ :each |
		self assert: (difference includes: each) ].
%

category: 'tests'
method: FSGemStoneKernelTests
testLastIndexOfIfAbsent

	| element collection |
	collection := self collectionMoreThan1NoDuplicates.
	element := collection first.
	self assert: (collection 
			lastIndexOf: element
			ifAbsent: [ 99 ]) equals: 1.
	self assert: (collection 
			lastIndexOf: self elementNotInForIndexAccessing
			ifAbsent: [ 99 ]) equals: 99
%

category: 'tests'
method: FSGemStoneKernelTests
testLastIndexOfIfAbsentDuplicate

	| collection element |
	collection := self collectionWithSameAtEndAndBegining.
	element := collection first.

	"floatCollectionWithSameAtEndAndBegining first and last elements are equals 
	'lastIndexOf: should return the position of the last occurrence :'"
	self assert: (collection 
			lastIndexOf: element
			ifAbsent: [ 55 ]) equals: collection size
%

category: 'tests'
method: FSGemStoneKernelTests
testLastIndexOfStartingAt

	| element collection |
	collection := self collectionMoreThan1NoDuplicates.
	element := collection last.
	self assert: (collection 
			lastIndexOf: element
			startingAt: collection size
			ifAbsent: [ 99 ]) equals: collection size.
	self assert: (collection 
			lastIndexOf: element
			startingAt: collection size - 1
			ifAbsent: [ 99 ]) equals: 99.
	self assert: (collection 
			lastIndexOf: self elementNotInForIndexAccessing
			startingAt: collection size
			ifAbsent: [ 99 ]) equals: 99
%

category: 'tests'
method: FSGemStoneKernelTests
testLastIndexOfStartingAtDuplicate

	| collection element |
	collection := self collectionWithSameAtEndAndBegining.
	element := collection last.

	" floatCollectionWithSameAtEndAndBegining first and last elements are equals 
	'lastIndexOf:ifAbsent:startingAt: should return the position of the last occurrence :'"
	self assert: (collection 
			lastIndexOf: element
			startingAt: collection size
			ifAbsent: [ 55 ]) equals: collection size.
	self assert: (collection 
			lastIndexOf: element
			startingAt: collection size - 1
			ifAbsent: [ 55 ]) equals: 1
%

! Class implementation for 'PathTest'

!		Instance methods for 'PathTest'

category: 'tests'
method: PathTest
testAbsolutePath

	| path |

	self assert: (AbsolutePath new isAbsolute).
	self assert: (Path root isAbsolute).
	
	path := AbsolutePath from: 'parent/child/grandChild' delimiter: $/.
	self assert: path size equals: 3.
	self assert: (path at: 1) equals: 'parent'.
	self assert: (path at: 2) equals: 'child'.
	self assert: (path at: 3) equals: 'grandChild'.
	
	path := AbsolutePath from: '/' delimiter: $/.
	self assert: path equals: Path root.
	
%

category: 'tests'
method: PathTest
testAbsolutePrintString
	
	| path actual |
	path := Path / 'plonk' / 'griffle'.
	actual := path printString.
	self assert: actual equals: 'Path / ''plonk'' / ''griffle'''
%

category: 'tests'
method: PathTest
testAbsoluteWithParents
	| path allPaths |
	path := Path / 'plonk' / 'griffle' / 'nurb'.
	allPaths := path withParents.
	
	self assert: allPaths size equals: 4.
	self assert: allPaths first isRoot.
	self assert: allPaths second basename equals: 'plonk'.
	self assert: allPaths second size equals: 1.
	self assert: (allPaths second isChildOf: allPaths first).
	self assert: allPaths third basename equals: 'griffle'.
	self assert: allPaths third size equals: 2.
	self assert: (allPaths third isChildOf: allPaths second).
	self assert: allPaths fourth basename equals: 'nurb'.
	self assert: allPaths fourth size equals: 3.
	self assert: (allPaths fourth isChildOf: allPaths third).
	
	self assert: allPaths fourth equals: path.
	self assert: allPaths fourth == path
%

category: 'tests'
method: PathTest
testAsReference
	| path reference |
	path := Path * 'plonk'.
	reference := path asFileReference.
	self assert: reference class equals: FileReference.
	self assert: reference path equals: path
%

category: 'tests'
method: PathTest
testBasename
	| path |
	path := Path * 'plonk' / 'griffle'.
	self assert: path basename equals: 'griffle'
%

category: 'tests'
method: PathTest
testBasenameNoParent
	| path |

	path := Path / 'griffle'.
	self assert: path parent basename equals: '/'.

	path := Path * 'griffle'.
	self assert: path parent basename equals: '.'.
%

category: 'tests'
method: PathTest
testBasenameWithoutExtension
	
	| path |
	path := Path * 'plonk' / 'griffle'.
	self assert: path basenameWithoutExtension equals: 'griffle'.
	self assert: (path basenameWithoutExtension: 'griffle') equals: 'griffle'.
	self assert: (path basenameWithoutExtension: 'taz') equals: 'griffle'.
	
	path := Path * 'plonk' / 'griffle.taz'.
	self assert: path basenameWithoutExtension equals: 'griffle'.
	self assert: (path basenameWithoutExtension: 'taz') equals: 'griffle'.
	self assert: (path basenameWithoutExtension: 'griffle.taz') equals: 'griffle.taz'.
	self assert: (path basenameWithoutExtension: 'zork') equals: 'griffle.taz'.
	
	path := Path * 'plonk' / 'griffle.taz.zork'.
	self assert: path basenameWithoutExtension equals: 'griffle.taz'.
	self assert: (path basenameWithoutExtension: 'zork') equals: 'griffle.taz'.
	self assert: (path basenameWithoutExtension: 'taz.zork') equals: 'griffle'.
	self assert: (path basenameWithoutExtension: 'girffle.taz.zork') equals: 'griffle.taz.zork'.
	self assert: (path basenameWithoutExtension: 'taz') equals: 'griffle.taz.zork'.
%

category: 'tests'
method: PathTest
testCanonicalization

	| ref |

	ref := (Path * 'a/b/c') canonicalize.
	self assert: ref segments equals: #('a' 'b' 'c').

	ref := (Path / 'a/b/c') canonicalize.
	self assert: ref segments equals: #('a' 'b' 'c').

	ref := (Path * '../a/b/c') canonicalize.
	self assert: ref segments equals: #('..' 'a' 'b' 'c').

	ref := (Path * 'a/b/c/..') canonicalize.
	self assert: ref segments equals: #('a' 'b').

	ref := (Path / 'a/b/c/..') canonicalize.
	self assert: ref segments equals: #('a' 'b').

	ref := (Path * 'a/b/../c') canonicalize.
	self assert: ref segments equals: #('a' 'c').

	ref := (Path / 'a/b/../c') canonicalize.
	self assert: ref segments equals: #('a' 'c').
%

category: 'tests'
method: PathTest
testCommaAddsExtension
	| path result |
	path := Path * 'plonk' .
	result := path, 'griffle'.
	self assert: result basename equals: 'plonk.griffle'
%

category: 'tests'
method: PathTest
testCommaAddsExtensionAgain
	| path result |
	path := Path * 'plonk.griffle'.
	result := path, 'nurp'.
	self assert: result basename equals: 'plonk.griffle.nurp'
%

category: 'tests'
method: PathTest
testContains
	| ancestor descendent |
	ancestor := Path / 'plonk'.
	descendent := Path / 'plonk' / 'griffle' / 'bork'.
	self assert: (ancestor contains: descendent).
	self deny: (descendent contains: ancestor)
%

category: 'tests'
method: PathTest
testContainsLocator
	| ancestor descendent |
	ancestor := FileLocator imageDirectory resolve path.
	descendent := FileLocator image / 'griffle'.
	self deny: (ancestor contains: descendent).
	self deny: (descendent contains: ancestor)
%

category: 'tests'
method: PathTest
testEqual
	| a b |
	a := Path * 'plonk'.
	b := Path * 'plonk'.
	self deny: a == b.
	self assert: a equals: b.
%

category: 'tests'
method: PathTest
testExtendingPath

	| ref |

	self should: [ '/a/b' asPath / '' ] raise: Error.
	self should: [ '/a/b' asPath / nil ] raise: Error.

	ref := '/a/b/c' asPath / 'd/e'.
	self assert: ref segments equals: #('a' 'b' 'c' 'd' 'e').

	ref := '/a/b/c' asPath / 'd/e'.
	self assert: ref parent segments equals: #('a' 'b' 'c' 'd').

	ref := '/a/b/c' asPath / '../d'.
	self assert: ref segments equals:  #('a' 'b' 'c' '..' 'd').

	ref := '/a/b/c' asPath / 'd/..'.
	self assert: ref segments equals: #('a' 'b' 'c' 'd' '..').

	ref := '/a/b/c' asPath / 'd/../e'.
	self assert: ref segments equals: #('a' 'b' 'c' 'd' '..' 'e').

	ref := '/a/b/c' asPath / './d'.
	self assert: (ref segments = #('a' 'b' 'c' 'd')).

	ref := '/a/b/c' asPath / 'd/.'.
	self assert: (ref segments = #('a' 'b' 'c' 'd')).

	ref := '/a/b/c' asPath / 'd/./e'.
	self assert: ref segments equals: #('a' 'b' 'c' 'd' 'e').

%

category: 'tests'
method: PathTest
testExtensions
	self 
		assertCollection: (Path from: 'foo') extensions asArray
		equals: #().
	self
		assertCollection: (Path from: 'foo.tar') extensions asArray
		equals: #( 'tar' ).
	self
		assertCollection: (Path from: 'foo.tar.gz') extensions asArray
		equals: #( 'tar' 'gz').
	self
		assertCollection: (Path from: 'foo.1.tar.gz') extensions asArray
		equals: #( '1' 'tar' 'gz').
%

category: 'tests'
method: PathTest
testFullName

	| path |

	path := (FileSystem workingDirectory / 'book-result' / 'W01-Welcome')
				relativeToReference: FileSystem workingDirectory.
	self assert: path fullName equals: 'book-result/W01-Welcome'
%

category: 'tests'
method: PathTest
testGrandchildOfPath
	| griffle  nurb |
	griffle := Path / 'griffle'.
	nurb := griffle / 'plonk' / 'nurb'.
	self deny: (griffle isChildOf: nurb).
	self deny: (nurb isChildOf: griffle).
%

category: 'tests'
method: PathTest
testIsAbsolute
	self assert: (Path / 'plonk') isAbsolute
%

category: 'tests'
method: PathTest
testIsAbsoluteWindowsPathReturnsFalseWhenNoWindowsAbsolutePathProvided
  
	self deny: (Path isAbsoluteWindowsPath: 'tmp').
	self deny: (Path isAbsoluteWindowsPath: '/tmp').
	self deny: (Path isAbsoluteWindowsPath: '/tmp/test').
%

category: 'tests'
method: PathTest
testIsAbsoluteWindowsPathReturnsTrueWhenWindowsAbsolutePathProvided
  
	self assert: (Path isAbsoluteWindowsPath: 'A:\').
	self assert: (Path isAbsoluteWindowsPath: 'c:\').
	self assert: (Path isAbsoluteWindowsPath: 'c:\test').
%

category: 'tests'
method: PathTest
testIsChildOfPath
	| parent child |
	parent := Path / 'griffle'.
	child := parent / 'nurb'.
	self assert: (child isChildOf: parent).
	self deny: (parent isChildOf: child)
%

category: 'tests'
method: PathTest
testIsChildOfReference
	| parent child |
	parent := Path / 'griffle'.
	child := FileSystem memory referenceTo: parent / 'nurb'.
	self deny: (child isChildOf: parent).
	self deny: (parent isChildOf: child)
%

category: 'tests'
method: PathTest
testIsEmpty
	self assert: (Path workingDirectory) isEmpty
%

category: 'tests'
method: PathTest
testIsNotAbsolute
	self deny: (Path * 'plonk') isAbsolute
%

category: 'tests'
method: PathTest
testIsNotRelative
	self deny: (Path / 'plonk') isRelative
%

category: 'tests'
method: PathTest
testIsNotRoot
	self deny: (Path / 'plonk') isRoot
%

category: 'tests'
method: PathTest
testIsRelative
	self assert: (Path * 'plonk') isRelative
%

category: 'tests'
method: PathTest
testIsRoot
	self assert: Path root isRoot
%

category: 'tests'
method: PathTest
testMakeRelative
	
	| parent child relative |
	parent := Path / 'griffle' / 'bibb'.
	child := Path / 'griffle' / 'plonk' / 'nurp'.
	relative := parent makeRelative: child.
	self assert: relative equals: (Path parent / 'plonk' / 'nurp')
%

category: 'tests'
method: PathTest
testMakeRelativeFrom2RelativePaths
	"Related to issue: 14846 MakeRelative-method-applied-on-two-relative-paths-is-not-working"

	| parent child relative |
	parent := RelativePath new / 'griffle' / 'bibb'.
	child := RelativePath new / 'griffle' / 'plonk' / 'nurp'.
	relative := parent makeRelative: child.
	self assert: relative equals: Path parent / 'plonk' / 'nurp'
%

category: 'tests'
method: PathTest
testParent
	| path parent |
	path := (Path * 'plonk') / 'griffle'.
	parent := path parent.
	self assert: parent isRelative.
	self assert: (parent at: 1) equals: 'plonk'
%

category: 'tests'
method: PathTest
testParentParent
	| path  |
	path := (Path * '..') parent.
	self assert: path size equals: 2.
	self assert: (path at: 1) equals: '..'.
	self assert: (path at: 2) equals: '..'.
%

category: 'tests'
method: PathTest
testParentResolution
	| base relative absolute |
	base := Path / 'plonk' / 'pinto'.
	relative := Path parent / 'griffle' / 'zonk'.
	absolute := base resolve: relative.
	self assert: absolute isAbsolute.
	self assert: absolute segments equals: #('plonk' 'pinto' '..' 'griffle' 'zonk').
%

category: 'tests'
method: PathTest
testParentUpTo
	| a b c |
	a := Path / 'testParentUpTo' / 'A'.
	b := Path / 'testParentUpTo' / 'A' / 'B'.
	c := Path / 'testParentUpTo' / 'A' / 'B' / 'C'.
	self assert: b equals: (c parentUpTo: 'B').
	self assert: a equals: (c parentUpTo: 'A').
	self assert: Path / 'testParentUpTo' equals: (c parentUpTo: 'testParentUpTo').
	self assert: Path root equals: (c parentUpTo: 'notAParent')
%

category: 'tests'
method: PathTest
testParse

	| path |
	path := Path from: 'parent/child/grandChild' delimiter: $/.
	self assert: path size equals: 3.
	self assert: (path at: 1) equals: 'parent'.
	self assert: (path at: 2) equals: 'child'.
	self assert: (path at: 3) equals: 'grandChild'.
	
%

category: 'tests'
method: PathTest
testParseBogus
	
	| path |
	path := Path from: 'parent?<>~ \child/grandChild' delimiter: $/.
	self assert: path size equals: 2.
	self assert: (path at: 1) equals: 'parent?<>~ \child'.
	self assert: (path at: 2) equals: 'grandChild'.
	
%

category: 'tests'
method: PathTest
testParseTrailingSlash
	| path |
	path := Path from: 'griffle/' delimiter: $/.
	self assert: path size equals: 1.
	self assert: (path at: 1) equals: 'griffle'
%

category: 'tests'
method: PathTest
testParseWindowsPathWithUnixDelimiters
	
	| path |
	path := WindowsStore new pathFromString: 'C:\a/b/c'.
	self assert: path segments size equals: 4.
	self
		assertCollection: path segments
		equals: #('C:' 'a' 'b' 'c')
%

category: 'tests'
method: PathTest
testPathString

	| path |

	path := (FileSystem workingDirectory / 'book-result' / 'W01-Welcome')
				relativeToReference: FileSystem workingDirectory.
	self assert: path isRelative.
	self assert: path pathString equals: 'book-result/W01-Welcome'
%

category: 'tests'
method: PathTest
testPrintPathOn

	| pathString pathSrc path |

	"Test a Relative path"
	pathSrc := 'one/two/three'.
	path := Path from: pathSrc.
	self assert: path isRelative.
	pathString := String streamContents: [ :stream | path printPathOn: stream ].
	self assert: pathSrc equals: pathString.

	"Test an Absolute path"
	pathSrc := '/one/two/three'.
	path := Path from: pathSrc.
	self assert: path isAbsolute.
	pathString := String streamContents: [ :stream | path printPathOn: stream ].
	self assert: pathSrc equals: pathString
%

category: 'tests'
method: PathTest
testPrintPathOnDelimiter

	| pathString pathSrc path |

	"Test a Relative path"
	"Use an unusal delimiter to check that the default isn't hardcoded anywhere"
	pathSrc := 'one|two|three'.
	path := Path from: pathSrc delimiter: $|.
	self assert: path isRelative.
	pathString := String streamContents: [ :stream | path printPathOn: stream delimiter: $| ].
	self assert: pathSrc equals: pathString.

	"Test an Absolute path"
	"Use an unusal delimiter to check that the default isn't hardcoded anywhere"
	pathSrc := '|one|two|three'.
	path := Path from: pathSrc delimiter: $|.
	self assert: path isAbsolute.
	pathString := String streamContents: [ :stream | path printPathOn: stream delimiter: $| ].
	self assert: pathSrc equals: pathString
%

category: 'tests'
method: PathTest
testPrintRelativeWithParent
	| path |
	path := Path parent / 'foo'.
	self assert: (path printWithDelimiter: $/) equals: '../foo'
%

category: 'tests'
method: PathTest
testPrintWithDelimiter
	| path |
	path := (Path * 'plonk') / 'griffle'.
	self assert: (path printWithDelimiter: $%) equals: 'plonk%griffle'
%

category: 'tests'
method: PathTest
testRedundantSeparators

	| ref |

	ref := '/a/b/c' asPath / 'foo/'.
	self assert: ref segments equals: #('a' 'b' 'c' 'foo').

	ref := '/a/b/c' asPath / 'foo//'.
	self assert: ref segments equals: #('a' 'b' 'c' 'foo').

	ref := '/a/b/c' asPath / 'foo//..'.
	self assert: ref segments equals: #('a' 'b' 'c' 'foo' '..').

	ref := '/a/b/c' asPath / '..//foo'.
	self assert: ref segments equals: #('a' 'b' 'c' '..' 'foo').

	ref := '/a/b/c' asPath / 'foo//..//bar'.
	self assert: ref segments equals: #('a' 'b' 'c' 'foo' '..' 'bar')
%

category: 'tests'
method: PathTest
testRelativeFromString

	| path |
	
	path := Path from: 'plonk/griffle'.
	
	self assert: path isRelative.
	self assert: path size equals: 2.
	self assert: (path at: 1) equals: 'plonk'.
	self assert: (path at: 2) equals: 'griffle'.
%

category: 'tests'
method: PathTest
testRelativeFromStringNormalization

	| path |
	
	path := Path from: 'plonk/../griffle'.
	
	self assert: path isRelative.
	self assert: path size equals: 3.
	self assert: path segments equals: #('plonk' '..' 'griffle').
%

category: 'tests'
method: PathTest
testRelativeFromStringNormalizationParent

	| path |
	
	path := Path from: 'plonk/../../griffle'.
	
	self assert: path isRelative.
	self assert: path size equals: 4.
	self assert: path segments equals: #('plonk' '..' '..' 'griffle')
%

category: 'tests'
method: PathTest
testRelativeFromStringParent

	| path |
	
	path := Path from: '../..'.
	
	self assert: path isRelative.
	self assert: path size equals: 2.
	self assert: (path at: 1) equals: '..'.
	self assert: (path at: 2) equals: '..'.
%

category: 'tests'
method: PathTest
testRelativePrintString
	| path actual |
	path := Path * 'plonk' / 'griffle'.
	actual := path printString.
	self assert: actual equals: 'Path * ''plonk'' / ''griffle'''
%

category: 'tests'
method: PathTest
testRelativeTo
	"aPath relativeTo: aParent returns a new path relative to the parent"
	
	| parent child relative |
	parent := Path / 'griffle'.
	child := Path / 'griffle' / 'plonk' / 'nurp'.
	relative := child relativeTo: parent.
	self assert: relative equals: (Path * 'plonk' / 'nurp')
%

category: 'tests'
method: PathTest
testRelativeToBranch
	| parent child relative |
	parent := Path / 'griffle' / 'bibb'.
	child := Path / 'griffle' / 'plonk' / 'nurp'.
	relative := child relativeTo: parent.
	self assert: relative  equals: (Path parent / 'plonk' / 'nurp')
%

category: 'tests'
method: PathTest
testRelativeWithParents
	| path allPaths |
	path := Path * 'plonk' / 'griffle' / 'nurb'.
	allPaths := path withParents.
	
	self assert: allPaths size equals: 3.
	self assert: allPaths first basename equals: 'plonk'.
	self assert: allPaths first size equals: 1.
	self assert: allPaths second basename equals: 'griffle'.
	self assert: allPaths second size equals: 2.
	self assert: (allPaths second isChildOf: allPaths first).
	self assert: allPaths third basename equals: 'nurb'.
	self assert: allPaths third size equals: 3.
	self assert: (allPaths third isChildOf: allPaths second).
	self assert: allPaths third == path
%

category: 'tests'
method: PathTest
testResolveAbsolute
	| path |
	path := Path / 'griffle'.
	self assert: path resolve == path.
	self assert: path isAbsolute
%

category: 'tests'
method: PathTest
testResolvePath
		
	| path |
	path := Path / 'grandfather' / 'father' / 'child'.
	self 
		assert: (path resolvePath: Path / 'grandfather') 
		equals: (Path / 'grandfather').
	self 
		assert: (path resolvePath: Path / 'child')
		equals: (Path / 'child').
	self
		assert: (path resolvePath: Path * 'grandfather')
		equals: (Path / 'grandfather' / 'father' / 'child' / 'grandfather').
	self
		assert: (path resolvePath: Path * 'child')
		equals: (Path / 'grandfather' / 'father' / 'child' / 'child').
	self
		assert: (path resolvePath: Path * 'grandfather')
		equals: (Path / 'grandfather' / 'father' / 'child' / 'grandfather').
	self
		assert: (path resolvePath: Path * 'child')
		equals: (Path / 'grandfather' / 'father' / 'child' / 'child').
	self
		assert:  (path resolvePath: (Path parent) / '..') canonicalize
		equals: (Path / 'grandfather')
%

category: 'tests'
method: PathTest
testResolveRelative
	| path |
	path := Path * 'griffle'.
	self assert: path resolve == path.
	self assert: path isRelative
%

category: 'tests'
method: PathTest
testResolveString	

	| path result |
	path := Path * 'plonk'.
	result := path resolve: 'griffle'.
	self assert: result class equals: path class.
	self assert: result size equals: 2.
	self assert: (result at: 1) equals: 'plonk'.
	self assert: (result at: 2) equals: 'griffle'.
%

category: 'tests'
method: PathTest
testRootParent
	| root |
	root := Path root.
	self assert: root parent == root
%

category: 'tests'
method: PathTest
testRootPrintString
	| path actual |
	path := Path root.
	actual := path printString.
	self assert: actual equals: 'Path root'
%

category: 'tests'
method: PathTest
testSiblingOfPath
	| griffle  nurb |
	griffle := Path / 'griffle'.
	nurb := Path / 'nurb'.
	self deny: (griffle isChildOf: nurb).
	self deny: (nurb isChildOf: griffle).
%

category: 'tests'
method: PathTest
testSimpleResolution
	| base relative absolute |
	base := Path / 'plonk'.
	relative := (Path * 'griffle') / 'zonk'.
	absolute := base resolve: relative.
	self assert: absolute isAbsolute.
	self assert: (absolute at: 1) equals: 'plonk'.
	self assert: (absolute at: 2) equals: 'griffle'.
	self assert: (absolute at: 3) equals: 'zonk'.
%

category: 'tests'
method: PathTest
testSlash
	| path actual |
	path := Path * 'plonk'.
	actual := path / 'griffle'.
	self assert: actual class equals: path class.
	self assert: (actual printWithDelimiter: $/) equals: 'plonk/griffle'
%

category: 'tests'
method: PathTest
testUnequalContent
	| a b |
	a := Path * 'plonk'.
	b := Path * 'griffle'.
	self deny: a = b.
%

category: 'tests'
method: PathTest
testUnequalSize
	| a b |
	a := Path * 'plonk'.
	b := (Path * 'plonk') / 'griffle'.
	self deny: a = b.
%

category: 'tests'
method: PathTest
testUnixAbsolutePathName

	self assert: (Path from: '/test') isAbsolute.
	self assert: (Path from: '/etc/bin') isAbsolute.
%

category: 'tests'
method: PathTest
testWindowsAbsolutePathName
  
	self assert: (Path from: 'A:\') isAbsolute.
	self assert: (Path from: 'c:\') isAbsolute.
	self assert: (Path from: 'c:\test') isAbsolute.
%

category: 'tests'
method: PathTest
testWithExtentionAddsExtension
	| path result |
	path := Path * 'plonk'.
	result := path withExtension: 'griffle'.
	self assert: result basename equals: 'plonk.griffle'
%

category: 'tests'
method: PathTest
testWithExtentionReplacesExtension
	| path result |
	path := Path * 'plonk.griffle'.
	result := path withExtension: 'griffle'.
	self assert: result basename equals: 'plonk.griffle'
%

category: 'tests'
method: PathTest
testWorkingDirectoryParent
	| path |
	path := Path workingDirectory parent.
	self assert: path size equals: 1.
	self assert: (path at: 1) equals: '..'
%

category: 'tests'
method: PathTest
testWorkingDirPrintString
	| path actual |
	path := Path workingDirectory. 
	actual := path printString.
	self assert: actual equals: 'Path workingDirectory'
%

! Class implementation for 'WindowsStoreTest'

!		Instance methods for 'WindowsStoreTest'

category: 'testing'
method: WindowsStoreTest
testAbsoluteFullName
	| filesystem |
	filesystem := FileSystem store: WindowsStore new.

	"Check dropping trailing slash."	
	self assert: (filesystem referenceTo: 'C:\tmp\') fullName equals: 'C:\tmp'.

	"Check round-trip conversion from String to FileReference back to String again."
	#( 	'C:\'		'D:\'		'\'		'C:\tmp'		'D:\tmp'		'C:\tmp\xx'      ) 
		do: [ :pathString | self assert: (filesystem referenceTo: pathString) fullName equals: pathString ].
	
	
%

category: 'testing'
method: WindowsStoreTest
testAbsolutePath

	#('c:\' 'C:\temp' 'A:\temp\test' '\test\bar' '\') do: [:each |
		self assert: (WindowsStore current pathFromString: each) isAbsolute ] 
	
%

category: 'testing'
method: WindowsStoreTest
testPrintString
	| filesystem |
	filesystem := FileSystem store: WindowsStore new.
	
	"path"
	self assert: (filesystem referenceTo: 'a/b') printString equals: 'File @ a\b'.
	self assert: (filesystem referenceTo: '\test.txt') printString equals: 'File @ \test.txt'.
	
	"root"
	self assert: (filesystem referenceTo: '/') printString equals: 'File @ \'.
	self assert: (filesystem referenceTo: '\') printString equals: 'File @ \'.
	
	"drive root"
	self assert: (filesystem referenceTo: 'c:\') printString equals: 'File @ c:\'.
	
	"empty"
	self assert: (filesystem referenceTo: './') printString equals: 'File @ .'.
	self assert: (filesystem referenceTo: '.\') printString equals: 'File @ .'
%

category: 'testing'
method: WindowsStoreTest
testRelativeFullName

	"FIleSystem currently does not support MS Windows concept of each drive having its own working directory.
	That is too great a change during Pharo 3 Beta, so for now just drop drive from relative references. 
	Follow up in Case 13094"	

	| filesystem |
	filesystem := FileSystem store: WindowsStore new.
		
	self assert: (filesystem referenceTo: 'C:tmp') fullName equals: (filesystem referenceTo: 'tmp') fullName
%

category: 'testing'
method: WindowsStoreTest
testRelativePath

	#('a' 'bin\foo' 'temp\test' 'C:temp\test') do: [:each |
		self assert: (WindowsStore current pathFromString: each) isRelative ] 
	
%

! Class implementation for 'ZnBufferedReadStreamTests'

!		Instance methods for 'ZnBufferedReadStreamTests'

category: 'testing'
method: ZnBufferedReadStreamTests
testBuffering
	| stream |
	stream := ZnBufferedReadStream on: '01234567890123456789' readStreamPortable.
	stream sizeBuffer: 8.
	self deny: stream atEnd.
	self assert: (stream next: 10) equals: '0123456789'.
	self deny: stream atEnd.
	self assert: (stream next: 10) equals: '0123456789'.
	self assert: stream atEnd	
%

category: 'testing'
method: ZnBufferedReadStreamTests
testPeek
	| stream |
	stream := ZnBufferedReadStream on: '0123456789' readStreamPortable.
	stream sizeBuffer: 8.
	'0123456789' do: [ :each |
		self deny: stream atEnd.
		self assert: stream peek equals: each.
		self assert: stream next equals: each ].
	self assert: stream atEnd.
	self assert: stream peek isNil.
	self assert: stream next isNil
%

category: 'testing'
method: ZnBufferedReadStreamTests
testReadInto
	| stream buffer count |
	stream := ZnBufferedReadStream on: '0123456789' readStreamPortable.
	stream sizeBuffer: 8.
	buffer := String new: 6 withAll: Character space.
	stream skip: 1.
	stream readInto: buffer startingAt: 4 count: 3.
	self assert: buffer equals: '   123'.
	stream readInto: buffer startingAt: 1 count: 3.
	self assert: buffer equals: '456123'.
	count := stream readInto: buffer startingAt: 1 count: 100.
	self assert: count equals: 3.
	self assert: buffer equals: '789123'	 
%

category: 'testing'
method: ZnBufferedReadStreamTests
testReadIntoLarger
	| stream buffer count |
	stream := ZnBufferedReadStream on: '0123456789' readStreamPortable.
	stream sizeBuffer: 4.
	buffer := String new: 10.
	count := stream readInto: buffer startingAt: 1 count: 10.
	self assert: count equals: 10.
	self assert: buffer equals: '0123456789'	 
%

category: 'testing'
method: ZnBufferedReadStreamTests
testReadUpTo
	| stream |
	stream := ZnBufferedReadStream on: '0123456789' readStreamPortable.
	stream sizeBuffer: 8.
	self assert: (stream upTo: $5) equals: '01234'.
	self assert: stream upToEnd equals: '6789'.
	self assert: stream atEnd
%

category: 'testing'
method: ZnBufferedReadStreamTests
testReadUpToEnd
	| stream |
	stream := ZnBufferedReadStream on: '0123456789' readStreamPortable.
	stream sizeBuffer: 4.
	stream next: 2.
	self assert: stream upToEnd equals: '23456789'.
	self assert: stream atEnd
%

! Class implementation for 'ZnBufferedReadWriteStreamTests'

!		Instance methods for 'ZnBufferedReadWriteStreamTests'

category: 'tests'
method: ZnBufferedReadWriteStreamTests
testBuffering
	| stream |
	stream := ZnBufferedReadWriteStream on: '01234567890123456789' readStreamPortable.
	stream sizeBuffer: 8.
	self deny: stream atEnd.
	self assert: (stream next: 10) equals: '0123456789'.
	self deny: stream atEnd.
	self assert: (stream next: 10) equals: '0123456789'.
	self assert: stream atEnd
%

category: 'tests'
method: ZnBufferedReadWriteStreamTests
testNextPutAllStartingAt
	| string |
	string := String streamContents: [ :stringStream | 
		ZnBufferedReadWriteStream on: stringStream do: [ : bufferedStream |
			bufferedStream sizeBuffer: 8.
			bufferedStream next: 5 putAll: '--012345--' startingAt: 3.
			bufferedStream next: 5 putAll: '0123456789XX' startingAt: 6. 
			bufferedStream next: 5 putAll: '--012345--' startingAt: 3.
			bufferedStream next: 5 putAll: '0123456789XX' startingAt: 6.] ].
	self assert: string equals: '01234567890123456789'
%

category: 'tests'
method: ZnBufferedReadWriteStreamTests
testPeek
	| stream |
	stream := ZnBufferedReadWriteStream on: '0123456789' readStreamPortable.
	stream sizeBuffer: 8.
	'0123456789' do: [ :each |
		self deny: stream atEnd.
		self assert: stream peek equals: each.
		self assert: stream next equals: each ].
	self assert: stream atEnd.
	self assert: stream peek isNil.
	self assert: stream next isNil
%

category: 'tests'
method: ZnBufferedReadWriteStreamTests
testReadInto
	| stream buffer count |
	stream := ZnBufferedReadWriteStream on: '0123456789' readStreamPortable.
	stream sizeBuffer: 8.
	buffer := String new: 6 withAll: Character space.
	stream skip: 1.
	stream readInto: buffer startingAt: 4 count: 3.
	self assert: buffer equals: '   123'.
	stream readInto: buffer startingAt: 1 count: 3.
	self assert: buffer equals: '456123'.
	count := stream readInto: buffer startingAt: 1 count: 100.
	self assert: count equals: 3.
	self assert: buffer equals: '789123'	 
%

category: 'tests'
method: ZnBufferedReadWriteStreamTests
testReadIntoLarger
	| stream buffer count |
	stream := ZnBufferedReadWriteStream on: '0123456789' readStreamPortable.
	stream sizeBuffer: 4.
	buffer := String new: 10.
	count := stream readInto: buffer startingAt: 1 count: 10.
	self assert: count equals: 10.
	self assert: buffer equals: '0123456789'	 
%

category: 'tests'
method: ZnBufferedReadWriteStreamTests
testReadThenWrite
	| stream stringStream |
	
	stringStream := ReadWriteStreamPortable with: '0123456789' copy.
	stringStream reset.
	stream := ZnBufferedReadWriteStream on: stringStream.
	stream sizeBuffer: 8.
	
	stream next: 4.
	self assert: stream position equals: 4.
	
	stream nextPutAll: 'ABCD'.
	self assert: stream position equals: 8.
		
	self assert: stream peek equals: $8. 
	self assert: stream upToEnd equals: '89'.
	self assert: stream atEnd.
	
	self assert: stringStream contents equals: '0123ABCD89'
%

category: 'tests'
method: ZnBufferedReadWriteStreamTests
testReadUpTo
	| stream |
	stream := ZnBufferedReadWriteStream on: '0123456789' readStreamPortable.
	stream sizeBuffer: 8.
	self assert: (stream upTo: $5) equals: '01234'.
	self assert: stream upToEnd equals: '6789'.
	self assert: stream atEnd
%

category: 'tests'
method: ZnBufferedReadWriteStreamTests
testReadUpToEnd
	| stream |
	stream := ZnBufferedReadWriteStream on: '0123456789' readStreamPortable.
	stream sizeBuffer: 4.
	stream next: 2.
	self assert: stream upToEnd equals: '23456789'.
	self assert: stream atEnd
%

category: 'tests'
method: ZnBufferedReadWriteStreamTests
testWriteThenRead
	| stream stringStream |
	
	stringStream := ReadWriteStreamPortable with: '0123456789' copy.
	stringStream reset.
	stream := ZnBufferedReadWriteStream on: stringStream.
	stream sizeBuffer: 8.
	
	stream nextPutAll: 'ABCD'.
	
	self assert: stream peek equals: $4. 
	self assert: stream position equals: 4.
	self assert: stream upToEnd equals: '456789'.
	self assert: stream position equals: 10.
	self assert: stream atEnd.
	
	self assert: stringStream contents equals: 'ABCD456789'
%

category: 'tests'
method: ZnBufferedReadWriteStreamTests
testWriting
	| string |
	string := String streamContents: [ :stringStream | | bufferedStream |
		bufferedStream := ZnBufferedReadWriteStream on: stringStream.
		0 to: 9 do: [ :each | bufferedStream nextPut: (Character digitValue: each) ].
		bufferedStream flush ].
	self assert: string = '0123456789'
%

category: 'tests'
method: ZnBufferedReadWriteStreamTests
testWritingOverflow
	| string |
	string := String streamContents: [ :stringStream | | bufferedStream |
		bufferedStream := ZnBufferedReadWriteStream on: stringStream.
		bufferedStream sizeBuffer: 8.
		0 to: 9 do: [ :each | bufferedStream nextPut: (Character digitValue: each) ].
		bufferedStream nextPutAll: '0123'; nextPutAll: '4567'; nextPutAll: '89'.
		bufferedStream nextPutAll: '0123456789'; nextPutAll: '0123456789'.
		bufferedStream flush ].
	self assert: string = '0123456789012345678901234567890123456789'
%

! Class implementation for 'ZnBufferedStreamByteTests'

!		Instance methods for 'ZnBufferedStreamByteTests'

category: 'accessing'
method: ZnBufferedStreamByteTests
integerEncodingSpec
	^ #(
"<hex-bytes> <integer> <u|s> <be|le> unsigned|signed big-endian|little-endian"
('00' 0 u be)
('00' 0 s be)
('01' 1 u be)
('01' 1 s be)
('FF' -1 s be)
('FF' 255 u be)
('7B' 123 u be)
('7B' 123 s be)
('85' -123 s be)
('7F' 127 u be)
('7F' 127 s be)
('80' -128 s be)
('00' 0 u le)
('00' 0 s le)
('01' 1 u le)
('01' 1 s le)
('FF' -1 s le)
('FF' 255 u le)
('7B' 123 u le)
('7B' 123 s le)
('85' -123 s le)
('7F' 127 u le)
('7F' 127 s le)
('80' -128 s le)
('00000000' 0 u be)
('00000000' 0 s be)
('00000000' 0 u le)
('00000000' 0 s le)
('00000001' 1 u be)
('00000001' 1 s be)
('01000000' 1 u le)
('01000000' 1 s le)
('FFFFFFFF' -1 s be)
('FFFFFFFF' -1 s le)
('000004D2' 1234 u be)
('000004D2' 1234 s be)
('FFFFFB2E' -1234 s be)
('D2040000' 1234 u le)
('D2040000' 1234 s le)
('2EFBFFFF' -1234 s le)
('FFFFFFFF' 4294967295 u be)
('FFFFFFFF' 4294967295 u le)
('7FFFFFFF' 2147483647 u be)
('7FFFFFFF' 2147483647 s be)
('80000000' -2147483648 s be)
('FFFFFF7F' 2147483647 s le)
('00000080' -2147483648 s le)
('499602D2' 1234567890 u be)
('499602D2' 1234567890 s be)
('B669FD2E' -1234567890 s be)
('D2029649' 1234567890 u le)
('D2029649' 1234567890 s le)
('2EFD69B6' -1234567890 s le)
)
%

category: 'testing'
method: ZnBufferedStreamByteTests
testInt16Aliases
	| input writer |
	writer := [ :block | 
		ByteArray streamContents: [ :out | 
			ZnBufferedWriteStream on: out do: block ] ].
	input := ByteArray readHexFrom: '04D2'.
	self assert: (ZnBufferedReadStream on: input readStreamPortable) int16 equals: 1234.
	self assert: (ZnBufferedReadStream on: input readStreamPortable) uint16 equals: 1234.
	self assert: (ZnBufferedReadStream on: input readStreamPortable) nextWord equals: 1234.
	self assert: ((ZnBufferedReadStream on: input readStreamPortable) nextNumber: 2) equals: 1234.
	self assert: ((ZnBufferedReadStream on: input reversed readStreamPortable) nextLittleEndianNumber: 2) equals: 1234.	
	self assert: (writer value: [ :out | out int16: 1234 ]) equals: input.
	self assert: (writer value: [ :out | out uint16: 1234 ]) equals: input.
	self assert: (writer value: [ :out | out nextWordPut: 1234 ]) equals: input.
	self assert: (writer value: [ :out | out nextNumber: 2 put: 1234 ]) equals: input.
	self assert: (writer value: [ :out | out nextLittleEndianNumber: 2 put: 1234 ]) equals: input reversed.
	input := ByteArray readHexFrom: 'FB2E'.
	self assert: (ZnBufferedReadStream on: input readStreamPortable) int16 equals: -1234.
	self assert: (writer value: [ :out | out int16: -1234 ]) equals: input
%

category: 'testing'
method: ZnBufferedStreamByteTests
testInt32Aliases
	| input writer |
	writer := [ :block | 
		ByteArray streamContents: [ :out | 
			ZnBufferedWriteStream on: out do: block ] ].
	input := ByteArray readHexFrom: '499602D2'.
	self assert: (ZnBufferedReadStream on: input readStreamPortable) int32 equals: 1234567890.
	self assert: (ZnBufferedReadStream on: input readStreamPortable) uint32 equals: 1234567890.
	self assert: (ZnBufferedReadStream on: input readStreamPortable) nextInt32 equals: 1234567890.
	self assert: ((ZnBufferedReadStream on: input readStreamPortable) nextNumber: 4) equals: 1234567890.
	self assert: ((ZnBufferedReadStream on: input reversed readStreamPortable) nextLittleEndianNumber: 4) equals: 1234567890.	
	self assert: (writer value: [ :out | out int32: 1234567890 ]) equals: input.
	self assert: (writer value: [ :out | out uint32: 1234567890 ]) equals: input.
	self assert: (writer value: [ :out | out nextInt32Put: 1234567890 ]) equals: input.
	self assert: (writer value: [ :out | out nextNumber: 4 put: 1234567890 ]) equals: input.
	self assert: (writer value: [ :out | out nextLittleEndianNumber: 4 put: 1234567890 ]) equals: input reversed.
	input := ByteArray readHexFrom: 'B669FD2E'.
	self assert: (ZnBufferedReadStream on: input readStreamPortable) int32 equals: -1234567890.
	self assert: (ZnBufferedReadStream on: input readStreamPortable) nextInt32 equals: -1234567890.
	self assert: (writer value: [ :out | out int32: -1234567890 ]) equals: input.
	self assert: (writer value: [ :out | out nextInt32Put: -1234567890 ]) equals: input
%

category: 'testing'
method: ZnBufferedStreamByteTests
testInt8
	| bytes readStream |
	bytes := ByteArray streamContents: [ :out |
		ZnBufferedWriteStream on: out do: [ :bout |
			bout int8: 123; uint8: 123; int8: -123 ] ].
	readStream := ZnBufferedReadStream on: bytes readStreamPortable.
	self assert: readStream peek equals: 123.
	self assert: readStream int8 equals: 123.
	self assert: readStream peek equals: 123.
	self assert: readStream uint8 equals: 123.
	self deny: readStream peek = 123.
	self deny: readStream peek = -123.
	self assert: readStream int8 equals: -123
%

category: 'testing'
method: ZnBufferedStreamByteTests
testNextIntegerOfSizeSignedBigEndian
	self integerEncodingSpec do: [ :spec |
		| input integer |
		input := ByteArray readHexFrom: spec first.
		integer := (ZnBufferedReadStream on: input readStreamPortable) 
			nextIntegerOfSize: input 
			size signed: spec third = #s 
			bigEndian: spec fourth = #be.
		self assert: integer equals: spec second ]
%

category: 'testing'
method: ZnBufferedStreamByteTests
testNextIntegerOfSizeSignedBigEndianPut
	self integerEncodingSpec do: [ :spec |
		| input output |
		input := ByteArray readHexFrom: spec first.
		output := ByteArray streamContents: [ :out |
			ZnBufferedWriteStream on: out do: [ :bout | 
				bout 
					nextIntegerOfSize: input size 
					signed: spec third = #s 
					bigEndian: spec fourth = #be 
					put: spec second ] ].
		self assert: output equals: input ]
%

! Class implementation for 'ZnBufferedWriteStreamTests'

!		Instance methods for 'ZnBufferedWriteStreamTests'

category: 'testing'
method: ZnBufferedWriteStreamTests
testNextPutAllStartingAt
	| string |
	string := String streamContents: [ :stringStream | 
		ZnBufferedWriteStream on: stringStream do: [ : bufferedStream |
			bufferedStream sizeBuffer: 8.
			bufferedStream next: 5 putAll: '--012345--' startingAt: 3.
			bufferedStream next: 5 putAll: '0123456789XX' startingAt: 6. 
			bufferedStream next: 5 putAll: '--012345--' startingAt: 3.
			bufferedStream next: 5 putAll: '0123456789XX' startingAt: 6.] ].
	self assert: string equals: '01234567890123456789'
%

category: 'testing'
method: ZnBufferedWriteStreamTests
testWriting
	| string |
	string := String streamContents: [ :stringStream | | bufferedStream |
		bufferedStream := ZnBufferedWriteStream on: stringStream.
		0 to: 9 do: [ :each | bufferedStream nextPut: (Character digitValue: each) ].
		bufferedStream flush ].
	self assert: string = '0123456789'
%

category: 'testing'
method: ZnBufferedWriteStreamTests
testWritingOverflow
	| string |
	string := String streamContents: [ :stringStream | | bufferedStream |
		bufferedStream := ZnBufferedWriteStream on: stringStream.
		bufferedStream sizeBuffer: 8.
		0 to: 9 do: [ :each | bufferedStream nextPut: (Character digitValue: each) ].
		bufferedStream nextPutAll: '0123'; nextPutAll: '4567'; nextPutAll: '89'.
		bufferedStream nextPutAll: '0123456789'; nextPutAll: '0123456789'.
		bufferedStream flush ].
	self assert: string = '0123456789012345678901234567890123456789'
%

! Class implementation for 'ZnCharacterEncoderTests'

!		Class methods for 'ZnCharacterEncoderTests'

category: 'accessing'
classmethod: ZnCharacterEncoderTests
asciiCharacterSource
	^ ($A to: $Z), ($a to: $z), ($0 to: $9), '.-_/*+=|,;?!$&<>^%#', '    '
%

category: 'accessing'
classmethod: ZnCharacterEncoderTests
latin1CharacterSource
	^ ($A to: $Z), ($a to: $z), ($0 to: $9), '.-_/*+=|,;?!$&<>^%#', '       ', 'éèçüäßñ'
%

category: 'accessing'
classmethod: ZnCharacterEncoderTests
stringOfSize: size fromSource: source
	"self stringOfSize: 1024 fromSource: self unicodeCharacterSource"
	
	^ String new: size streamContents: [ :out | 
		size timesRepeat: [ out nextPut: source atRandom ] ]
%

category: 'accessing'
classmethod: ZnCharacterEncoderTests
unicodeCharacterSource
	^ ($A to: $Z), ($a to: $z), ($0 to: $9), '.-_/*+=|,;?!$&<>^%#', '         ', 'éèçüäßñα', '€∏'
%

!		Instance methods for 'ZnCharacterEncoderTests'

category: 'public'
method: ZnCharacterEncoderTests
assertCharacterCollection: anObject equals: otherObj
	"allow comparison between unitcode and legacy strings in legacy mode"

	self
		assert: (anObject isEquivalent: otherObj)
		description: anObject printString , ' is not equal to ' , otherObj printString.
%

category: 'private'
method: ZnCharacterEncoderTests
decodeBytes: bytes with: encoder
true 
	ifTrue: [ 
	"GemStone does not support streamed decoding ... hack for tests"
	^ bytes decodeFromUTF8
	] ifFalse: [ 

	| input |
	input := bytes readStream.
	^ String streamContents: [ :stream |
		[ input atEnd ] whileFalse: [ 
			stream nextPut: (encoder nextFromStream: input) ] ] ]
%

category: 'private'
method: ZnCharacterEncoderTests
encodeString: string with: encoder
"
	^ ByteArray streamContents: [ :stream |
		stream nextPutAll: string encodeAsUTF8 ]
"

	^ ByteArray streamContents: [ :stream |
		string do: [ :each |
			encoder nextPut: each toStream: stream ] ]
%

category: 'testing'
method: ZnCharacterEncoderTests
testByteDecoding
	| encoder bytes |
	encoder := ZnUTF8Encoder new.
	bytes := encoder encodeString: 'élève en Français'.
	self assert: (bytes decodeWith: encoder) equals: (encoder decodeBytes: bytes).
	self assert: (bytes decodeWith: #utf8) equals: (encoder decodeBytes: bytes).
	self assert: bytes utf8Decoded equals: (encoder decodeBytes: bytes)
%

category: 'testing'
method: ZnCharacterEncoderTests
testCodePointEncodingDecoding
	| encoder input output |
	input := {}.
	'Düsseldorf Königsallee' do: [:each | input add: each codePoint ].
	self assert: input isCollection.
	self assert: (input allSatisfy: [:each | each _isInteger ]).
	#(utf8 ) do: [ :each |
		encoder := each asZnCharacterEncoder.
		output := encoder encodeCodePoints: input.
		self assert: output isCollection.
		self assert: (output allSatisfy: [ :e | e _isInteger and: [ e between: 0 and: 255 ] ] ).
		self assert: (encoder encodedByteCountForCodePoints: input) equals: output size.
		self assert: (encoder decodeAsCodePoints: output) equals: input ]
%

category: 'testing'
method: ZnCharacterEncoderTests
testConvencienceMethods
	| encoder string |
	encoder := ZnUTF8Encoder new.
	string := 'élève en Français'.
	self assertCharacterCollection: (encoder decodeBytes: (encoder encodeString: string)) equals: string.
	self assert: (encoder encodedByteCountForString: string) = 20.
	
	#( 'ccc' 'ççç' 'c' 'ç' 'çc' 'cç' ) do: [ :each |
		self assertCharacterCollection: (encoder decodeBytes: (encoder encodeString: each)) equals: each ]
%

category: 'testing'
method: ZnCharacterEncoderTests
testKnownEncodingIdentifiers
	| all minimal asciiString |
	all := ZnCharacterEncoder knownEncodingIdentifiers asSet.
	minimal := #(utf8) asSet.
	"make sure at least a minimal set is present"
	self assert: (all  select: [ :each | minimal includes: each ]) equals: minimal.
	asciiString := String withAll: ((($a asciiValue to: $z asciiValue) , 
		($A asciiValue to: $Z asciiValue) , ($0 asciiValue to: $9 asciiValue)) collect: [:each | Character codePoint: each ]).
	"make sure that each identifier can be used to instanciate a decoder,
	and that those decoders at least work on a ASCII string in both directions"
	all do: [ :each |
		| encoder bytes |
		encoder := ZnCharacterEncoder newForEncoding: each.
		bytes := encoder encodeString: asciiString.
		self assert: ((encoder decodeBytes: bytes) isEquivalent: asciiString) ]
%

category: 'testing'
method: ZnCharacterEncoderTests
testNextPutAllStartingAtToStream
	| encoder |
	encoder := ZnUTF8Encoder new.
	#( 'ccc' 'ççç' 'c' 'ç' 'çc' 'cç' 'çç' ) do: [ :each |
		#( ( '' '' ) ( 'ABC' '' ) ( '' 'ABC' ) ( 'ABC' 'ABC' ) 
			( 'AéC' '' ) ( '' 'AèC' ) ( 'AéC' 'AèC' ) 
			( 'AXC' 'AèC' ) ( 'AéC' 'AXC' ) 
			( 'PRE' 'ç' ) ) do: [ :extra |
				| prefix postfix string bytes |
				prefix := extra first.
				postfix := extra last.
				string := prefix, each, postfix.
				bytes := ByteArray streamContents: [ :out |
					encoder next: each size putAll: string startingAt: prefix size + 1 toStream: out ].
				self assertCharacterCollection: (encoder decodeBytes: bytes) equals: each ] ]
%

category: 'testing'
method: ZnCharacterEncoderTests
testReadIntoStartingAtCountFromStream
	| encoder |
	encoder := ZnUTF8Encoder new.
	#( 'ccc' 'ççç' 'c' 'ç' 'çc' 'cç' 'çç' ) do: [ :each |
		#( ( '' '' ) ( 'ABC' '' ) ( '' 'ABC' ) ( 'ABC' 'ABC' ) 
			( 'AéC' '' ) ( '' 'AèC' ) ( 'AéC' 'AèC' ) 
			( 'AXC' 'AèC' ) ( 'AéC' 'AXC' ) 
			( 'PRE' 'ç' ) ) do: [ :extra |
				| prefix postfix string bytes buffer read |
				prefix := extra first.
				postfix := extra last.
				string := prefix, each.
				bytes := encoder encodeString: string, postfix.
				buffer := String new: string size.
				read := encoder readInto: buffer startingAt: 1 count: string size fromStream: bytes readStream.
				self assert: buffer equals: string.
				self assert: read equals: string size ] ]
%

category: 'testing'
method: ZnCharacterEncoderTests
testReadIntoStartingAtCountFromStreamAtEnd
	| input encoder bytes readStream string read |
	encoder := ZnUTF8Encoder new.
	input := 'élève'.
	bytes := encoder encodeString: input.
	readStream := bytes readStream.
	string := String new: 5 withAll: $_.
	read := encoder readInto: string startingAt: 1 count: 10 fromStream: readStream.
	self assert: string equals: input.
	self assert: read equals: 5
%

category: 'testing'
method: ZnCharacterEncoderTests
testReadIntoStartingAtCountFromStreamWithOffset
	| input encoder bytes readStream string read |
	encoder := ZnUTF8Encoder new.
	input := '_élève_'.
	bytes := encoder encodeString: input.
	readStream := bytes readStream.
	readStream next.
	string := String new: 7 withAll: $_.
	read := encoder readInto: string startingAt: 2 count: 5 fromStream: readStream.
	self assertCharacterCollection: string equals: input.
	self assert: read equals: 5.
	input := '_Français_'.
	bytes := encoder encodeString: input.
	readStream := bytes readStream.
	readStream next.
	string := String new: 10 withAll: $_.
	read := encoder readInto: string startingAt: 2 count: 8 fromStream: readStream.
	self assert: string equals: input.
	self assert: read equals: 8
%

category: 'testing'
method: ZnCharacterEncoderTests
testStringEncoding
	| encoder string |
	encoder := ZnUTF8Encoder new.
	string := 'élève en Français'.
	self assert: (string encodeWith: encoder) equals: (encoder encodeString: string).
	self assert: (string encodeWith: #utf8) equals: (encoder encodeString: string).
	self assert: string encodeAsUTF8 asByteArray equals: (encoder encodeString: string)
%

category: 'testing'
method: ZnCharacterEncoderTests
testUTF8Back
	| encoder stream |
	encoder := ZnUTF8Encoder new.
	stream := (encoder encodeString: 'Les élèves Françaises') readStream.
	self should: [ encoder backOnStream: stream ] raise: Error.
	4 timesRepeat: [ encoder nextFromStream: stream ].
	self assert: (encoder nextFromStream: stream) equals: $é.
	encoder backOnStream: stream.
	self assert: (encoder nextFromStream: stream) equals: $é.
	10 timesRepeat: [ encoder nextFromStream: stream ].
	13 timesRepeat: [ encoder backOnStream: stream ].
	self assert: (encoder nextFromStream: stream) equals: $s
%

category: 'testing'
method: ZnCharacterEncoderTests
testUTF8Boundaries
	"Test encoding and decoding of the characters at the boundaries between 1, 2, 3, and 4 multi-byte sequences.
	Values taken from http://en.wikipedia.org/wiki/Utf8#Description with the new RFC 3629 limit"
	
	| utf8Encoder string encoded |
	utf8Encoder := ZnUTF8Encoder new.
	#( (0 16r7f) 
		(16r80 16r07FF) 
		(16r0800 16rFFFF) 
		(16r10000 16r10FFFF) 
	) doWithIndex: [ :boundaries :byteCount |
		boundaries do: [ :each |
			string := String with: each asCharacter.
			encoded := utf8Encoder encodeString: string. 
			self assertCharacterCollection: (utf8Encoder decodeBytes: encoded) equals: string.
			self assert: encoded size equals: byteCount ] ]
%

category: 'testing'
method: ZnCharacterEncoderTests
testUTF8Encoder
	"The examples are taken from http://en.wikipedia.org/wiki/UTF-8#Description"
	
	| encoder inputBytes outputBytes inputString outputString |
	encoder := ZnUTF8Encoder new.
	inputString := String with: $$ with: (16r00A2 asCharacter) with: (16r20AC asCharacter) with: (16r024B62 asCharacter).
	inputBytes := #(16r24 16rC2 16rA2 16rE2 16r82 16rAC 16rF0 16rA4 16rAD 16rA2) asByteArray.
	outputBytes := self encodeString: inputString with: encoder.
	self assert: outputBytes = inputBytes.
	outputString := self decodeBytes: inputBytes with: encoder.
	self assertCharacterCollection: outputString equals: inputString
%

category: 'testing'
method: ZnCharacterEncoderTests
testUTF8EncoderAuto
	| encoder inputString bytes outputString |
	encoder := ZnUTF8Encoder new.
	inputString := String withAll: ((1 to: 3072) collect: [ :each | Character codePoint: each ]).
	bytes := self encodeString: inputString with: encoder. 
	outputString := self decodeBytes: bytes with: encoder.
	self assertCharacterCollection: inputString equals: outputString
%

category: 'testing'
method: ZnCharacterEncoderTests
testUTF8EncoderByteCount	
	| encoder |
	encoder := ZnUTF8Encoder new.
	self assert: (encoder encodedByteCountFor: $$) = 1.
	self assert: (encoder encodedByteCountFor: (16r00A2 asCharacter)) = 2.
	self assert: (encoder encodedByteCountFor: (16r20AC asCharacter)) = 3.
	self assert: (encoder encodedByteCountFor: (16r024B62 asCharacter)) = 4
%

category: 'testing'
method: ZnCharacterEncoderTests
testUTF8EncoderWide
	| encoder |
	encoder := ZnUTF8Encoder new.
	{ 'abc'. 'élève en Français'. 'Pra-ská' copy at: 4 put: (Character codePoint: 382); yourself. '' }
		do: [ :each | | bytes |
			bytes := self encodeString: each with: encoder. 
			self assertCharacterCollection: (encoder decodeBytes: bytes) equals: each ]
%

! Class implementation for 'ZnCharacterStreamTests'

!		Instance methods for 'ZnCharacterStreamTests'

category: 'testing'
method: ZnCharacterStreamTests
assertUpToAll: array
	| utf8Stream |
	utf8Stream := self utf8ReadStreamOn: array first.
	self assert: (array first readStream upToAll: array second) equals: array third.
	self assert: (utf8Stream upToAll: array second) equals: array third
%

category: 'testing'
method: ZnCharacterStreamTests
testNextLine
	| stream |
	stream := ZnCharacterReadStream on: 'abc' asByteArray readStreamPortable.
	self assert: stream nextLine equals: 'abc'.
	self assert: stream nextLine  equals: nil.
	stream := ZnCharacterReadStream on: '' asByteArray readStreamPortable.
	self assert: stream nextLine equals: nil.
	stream := ZnCharacterReadStream on: (String withAll: { 
		$a. Character cr. 
		$b. Character lf. 
		$c }) readStreamPortable.
	self assert: stream nextLine equals: 'a'.
	self assert: stream nextLine equals: 'b'.
	self assert: stream nextLine equals: 'c'.
	self assert: stream nextLine equals: nil.
	stream := ZnCharacterReadStream on: (String withAll:{ 
		$a. Character cr. Character lf.  
		$b. Character cr. Character lf. 
		$c. Character cr. Character lf }) readStreamPortable.
	self assert: stream nextLine equals: 'a'.
	self assert: stream nextLine equals: 'b'.
	self assert: stream nextLine equals: 'c'.
	self assert: stream nextLine equals: nil.
	stream := ZnCharacterReadStream on: (String withAll: { 
		$a. Character cr. Character lf.  
		Character cr. Character lf. 
		$c. Character cr. Character lf }) readStreamPortable.
	self assert: stream nextLine equals: 'a'.
	self assert: stream nextLine equals: ''.
	self assert: stream nextLine equals: 'c'.
	self assert: stream nextLine equals: nil.
%

category: 'testing'
method: ZnCharacterStreamTests
testPeek
	| string bytes readStream |
	string := 'élève en Français'.
	bytes := ZnUTF8Encoder new encodeString: string.
	readStream := ZnBufferedReadStream on: (ZnCharacterReadStream on: bytes readStreamPortable).
	self assert: readStream peek equals: 'é' first.
	self assert: readStream peek equals: 'é' first.
	self assert: readStream next equals: 'é' first.
	readStream skip: 'lève ' size.
	self assert: readStream peek equals: $e.
	self assert: (readStream next: 'en Français' size) equals: 'en Français'
%

category: 'testing'
method: ZnCharacterStreamTests
testReadStream
	| stream |
	stream := ZnBufferedReadStream on: (ZnCharacterReadStream on: 'ABC' asByteArray readStreamPortable).
	stream sizeBuffer: 3.
	self deny: stream atEnd.
	self deny: stream isBinary.
	self assert: stream next = $A.
	self deny: stream atEnd.
	self assert: stream peek = $B.
	self deny: stream atEnd.
	self assert: stream peek = $B.
	self deny: stream atEnd.
	self assert: stream next = $B.
	self deny: stream atEnd.
	self assert: stream next = $C.
	self assert: stream atEnd.
	self assert: stream next isNil.
	self assert: stream peek isNil
%

category: 'testing'
method: ZnCharacterStreamTests
testSimpleUTF8ReadStream
	| string bytes stream |
	string := 'élève en Français'.
	bytes := ZnUTF8Encoder new encodeString: string.
	stream := ZnBufferedReadStream on: (ZnCharacterReadStream on: bytes readStreamPortable).
	stream sizeBuffer: string size.
	self 
		assert:stream upToEnd
		equals: string
%

category: 'testing'
method: ZnCharacterStreamTests
testSimpleUTF8WriteStream
	| string bytes stream |
	string := 'élève en Français'.
	bytes := ZnUTF8Encoder new encodeString: string.
	stream := (ZnCharacterWriteStream on: ByteArray new writeStreamPortable).
	stream nextPutAll: string.
	self 
		assert: stream wrappedStream contents
		equals: bytes asByteArray
%

category: 'testing'
method: ZnCharacterStreamTests
testUpToAll
	true ifTrue: [ "upToAll: not supported for buffered streams ... skip test for now" ^ self ].
	#(
		('' '' '')
		('' 'ß' '')
		('' 'ße' '')
		('ß' '' '')
		('ße' '' '')
		('ß' 'ß' '')
		('ße' 'ß' '')
		('ß' 'ße' 'ß')
		('ß' 'e' 'ß')
		('ße' 'e' 'ß')
		('ßen' 'e' 'ß')
		('ßen' 'en' 'ß')
		('ßend' 'en' 'ß')
		('iße' 'e' 'iß')
		('ißen' 'e' 'iß')
		('ißen' 'en' 'iß')
		('ißend' 'en' 'iß')
		('iß' 'ß' 'i')
		('iße' 'ß' 'i')
		('eißen' 'ßend' 'eißen')
		('abcdefgh' 'cd' 'ab')
		('a' '' '')
		('a' 'a' '')
		('a' 'b' 'a')
		('ab' '' '')
		('ab' 'a' '')
		('ab' 'b' 'a')
		('ab' 'c' 'ab')
		('ab' 'ab' '')
		('abc' '' '')
		('abc' 'a' '')
		('abc' 'b' 'a')
		('abc' 'c' 'ab')
		('abc' 'd' 'abc')
		('abc' 'ab' '')
		('abc' 'bc' 'a')
		('abc' 'cd' 'abc')
	) do: [ :array | self assertUpToAll: array ]
%

category: 'testing'
method: ZnCharacterStreamTests
testUpToAllTwice
	| utf8Stream stream |
	true ifTrue: [ "upToAll: not supported for buffered streams ... skip test for now" ^ self ].
	utf8Stream := self utf8ReadStreamOn: 'eißendeße'.
	self assert: (utf8Stream upToAll: 'ße') equals: 'ei'.
	self assert: (utf8Stream upToAll: 'ße') equals: 'nde'.

	stream := 'eißendeße' readStreamPortable.
	self assert: (stream upToAll: 'ße') equals: 'ei'.
	self assert: (stream upToAll: 'ße') equals: 'nde'
%

category: 'testing'
method: ZnCharacterStreamTests
testUTF8ReadStreamReadInto
	| string bytes stream buffer |
	string := 'élève en Français'.
	bytes := ZnUTF8Encoder new encodeString: string.
	stream := ZnBufferedReadStream on: (ZnCharacterReadStream on: bytes readStreamPortable).
	stream sizeBuffer: string size.
	buffer := String new: string size.
	stream next: string size into: buffer. 
	self assert: buffer equals: string.
	self assert: stream atEnd.
	string := 'Czech in Czech is ', 269 asCharacter asString ,'e', 353 asCharacter asString , 'tina.'.
	bytes := ZnUTF8Encoder new encodeString: string.
	stream := ZnBufferedReadStream on: (ZnCharacterReadStream on: bytes readStreamPortable).
	stream sizeBuffer: string size.
	buffer := String new: string size.
	stream next: string size into: buffer. 
	self assert: buffer equals: string.
	self assert: stream atEnd
%

category: 'testing'
method: ZnCharacterStreamTests
utf8ReadStreamOn: string
	| bytes stream |
	bytes := ZnUTF8Encoder new encodeString: string.
	stream := ZnBufferedReadStream on: (ZnCharacterReadStream
		on: bytes readStreamPortable
		encoding: #utf8).
	stream sizeBuffer: string size.
	^stream
%

! Class implementation for 'DiskFileAttributesTestsResources'

!		Instance methods for 'DiskFileAttributesTestsResources'

category: 'accessing'
method: DiskFileAttributesTestsResources
afterCreationTime
	^ afterCreationTime
%

category: 'accessing'
method: DiskFileAttributesTestsResources
beforeCreationTime
	^ beforeCreationTime
%

category: 'accessing'
method: DiskFileAttributesTestsResources
file
	^ file
%

category: 'running'
method: DiskFileAttributesTestsResources
setUp

	| ws bufferedStream days hours minutes seconds |

	file := FileLocator temp / ('FileAttributesTests-', FastUUIDGenerator next asString, '.txt').
	beforeCreationTime := DateAndTime secondsLocal: DateAndTime secondsSince2001 truncated offset: (Duration seconds: 0).
	beforeCreationTime offset: (Duration seconds: (beforeCreationTime currentTimeZone transitionAtUTC: beforeCreationTime) offsetFromUTC).
	ws := file writeStream.
	bufferedStream := ZnBufferedWriteStream on: ws.
	[
		bufferedStream nextPutAll: 'Created by FileAttributesTestsResources>>setUp '.
		beforeCreationTime printOn: bufferedStream.
	] ensure: [ bufferedStream close ].
	afterCreationTime := DateAndTime now beRounded.
	"Round up to the next second"
	days := afterCreationTime dayOfYear.
	hours := afterCreationTime hour.
	minutes := afterCreationTime minute.
	seconds := afterCreationTime second + 1.
	seconds >= 60
		ifTrue: [ 
			minutes := minutes + 1.
			seconds := seconds - 60.
			minutes >= 60
				ifTrue: [
					hours := hours + 1.
					minutes := minutes - 60.
					hours >=  24
						ifTrue: [ 
							days := days + 1.
							hours := hours - 24 ] ].].
	afterCreationTime := DateAndTime
		year: afterCreationTime year day: days hour:  hours minute: minutes second: seconds
%

category: 'running'
method: DiskFileAttributesTestsResources
tearDown

	file delete.
%

! Class implementation for 'MemoryWriteStream'

!		Instance methods for 'MemoryWriteStream'

category: 'testing'
method: MemoryWriteStream
isReadOnly
	
	^ false
%

category: 'accessing'
method: MemoryWriteStream
readOnlyCopy
	
	^ collection readStreamPortable
%

category: 'positioning'
method: MemoryWriteStream
truncate
	collection truncate
%

category: 'positioning'
method: MemoryWriteStream
truncate: anInteger 
	collection truncate: anInteger 
	
%

! Class extensions for 'ByteArray'

!		Class methods for 'ByteArray'

category: '*filesystem-gemstone-kernel'
classmethod: ByteArray
readHexFrom: aString
  "Create a byte array from a hexadecimal representation"

  ^ (self new: aString size // 2) readHexFrom: aString readStream
%

!		Instance methods for 'ByteArray'

category: '*filesystem-gemstone-kernel'
method: ByteArray
asString
  "Convert to a String with Characters for each byte"

  ^ String withBytes: self
%

category: '*filesystem-gemstone-kernel'
method: ByteArray
decodeWith: encoding
	"Produce a String that decodes the receiver, using a specified encoding.
	Encoding is either a ZnCharacterEncoder instance or an identifier for one."
	
	"#[76 101 115 32 195 169 108 195 168 118 101 115 32 102 114 97 110 195 167 97 105 115] decodeWith: #utf8"
	
	^ encoding asZnCharacterEncoder decodeBytes: self
%

category: '*filesystem-gemstone-kernel'
method: ByteArray
utf8Decoded
	"Produce a String decoding the receiver using UTF-8,
	the recommended encoding for Strings, unless you know what you are doing."

	"#[76 101 115 32 195 169 108 195 168 118 101 115 32 102 114 97 110 195 167 97 105 115] utf8Decoded"
	
	^ self decodeFromUTF8
%

! Class extensions for 'Character'

!		Class methods for 'Character'

category: '*filesystem-gemstone-kernel'
classmethod: Character
digitValue: x 
	"Answer the Character whose digit value is x. For example,
	 answer $9 for x=9, $0 for x=0, $A for x=10, $Z for x=35."

	| n |
	n := x asInteger.
	^self withValue: (n < 10 ifTrue: [n + 48] ifFalse: [n + 55])
%

! Class extensions for 'CharacterCollection'

!		Class methods for 'CharacterCollection'

category: '*filesystem-gemstone-kernel'
classmethod: CharacterCollection
crlf
	"Answer a string containing a carriage return and a linefeed."

	^ self with: Character cr with: Character lf
%

!		Instance methods for 'CharacterCollection'

category: '*filesystem-core'
method: CharacterCollection
asFileReference

	^ FileSystem disk referenceTo: self
%

category: '*filesystem-core'
method: CharacterCollection
asPath
	"convert myself to a path"
	"Examples:
		'.' asPath
		'~/Desktop' asPath
		'/home/foo' asPath
		'../../foo.bar' asPath"
	^ FileSystem disk resolve: self
%

category: '*filesystem-core'
method: CharacterCollection
asPathWith: anObject 
	^ anObject pathFromString: self
%

category: '*filesystem-core'
method: CharacterCollection
asResolvedBy: aFileSystem
	^ aFileSystem resolveString: self
%

category: '*filesystem-gemstone-kernel'
method: CharacterCollection
asZnCharacterEncoder
	"Return a ZnCharacterEncoder instance using the receiver as identifier"
	
	" 'UTF-8' asZnCharacterEncoder "
	
	((self select: [ :each | each isAlphaNumeric ]) asLowercase) = 'utf8' ifFalse: [ self error: 'Only utf8 encoding supported'].
	^ ZnUTF8Encoder new
%

category: '*filesystem-gemstone-kernel'
method: CharacterCollection
encodeWith: encoding
	"Produce a ByteArray that encodes the receiver, using a specified encoding.
	Encoding is either a ZnCharacterEncoder instance or an identifier for one."
	
	" 'Les élèves français' encodeWith: #utf8 "
	
	^ encoding asZnCharacterEncoder encodeString: self
%

! Class extensions for 'Collection'

!		Instance methods for 'Collection'

category: '*filesystem-gemstone-kernel'
method: Collection
difference: aCollection
  "Answer the set theoretic difference of two collections."

  ^ self reject: [ :each | aCollection includes: each ]
%

category: '*filesystem-gemstone-kernel'
method: Collection
ifEmpty: aBlock
  self size == 0
    ifTrue: [ ^ aBlock value ]
%

category: '*filesystem-gemstone-kernel'
method: Collection
isEmptyOrNil
  "Answer whether the receiver contains any elements, or is nil.  Useful in numerous situations where one wishes the same reaction to an empty collection or to nil"

  ^ self size == 0
%

! Class extensions for 'DiskFileSystemTest'

!		Instance methods for 'DiskFileSystemTest'

category: '*filesystem-tests-gemstone'
method: DiskFileSystemTest
testGsDeleteDirectoryOnError

	| path |
	path := Path * 'plonk' / 'griffle'.
	self markForCleanup: path.
	self markForCleanup: path parent.
	filesystem ensureCreateDirectory: path.
	self assert: (filesystem isDirectory: Path * 'plonk').
	self assert: (filesystem isDirectory: path).

	self should: [ filesystem delete: path parent ] raise: Error.
%

! Class extensions for 'FileStreamPortable'

!		Class methods for 'FileStreamPortable'

category: '*FileSystem-Core'
classmethod: FileStreamPortable
onHandle: aFileSystemHandle
	^ self concreteStream new
		open: aFileSystemHandle fullName
		forWrite: aFileSystemHandle isWritable
%

! Class extensions for 'FileSystem'

!		Class methods for 'FileSystem'

category: '*filesystem-disk'
classmethod: FileSystem
* aFileOrDirectoryName
	^ self disk * aFileOrDirectoryName
%

category: '*filesystem-disk'
classmethod: FileSystem
/ aFileOrDirectoryName
	^ self disk / aFileOrDirectoryName
%

category: '*FileSystem-Memory'
classmethod: FileSystem
currentMemoryFileSystem
	^ MemoryStore currentFileSystem
%

category: '*filesystem-disk'
classmethod: FileSystem
disk
	"Answer a filesystem that represents the 'on-disk' filesystem used by the host operating system."

	^ DiskStore currentFileSystem
%

category: '*FileSystem-Memory'
classmethod: FileSystem
memory
	^ self store: MemoryStore new
%

category: '*filesystem-disk'
classmethod: FileSystem
root
	^ self disk root
%

category: '*filesystem-disk'
classmethod: FileSystem
workingDirectory
	^ self disk workingDirectory
%

!		Instance methods for 'FileSystem'

category: '*FileSystem-Disk'
method: FileSystem
isDiskFileSystem
	^ store isDiskFileSystem
%

category: '*FileSystem-Memory'
method: FileSystem
isMemoryFileSystem
	^ store isMemoryFileSystem
%

! Class extensions for 'FileSystemStore'

!		Instance methods for 'FileSystemStore'

category: '*FileSystem-Disk'
method: FileSystemStore
isDiskFileSystem
	^ false
%

category: '*FileSystem-Memory'
method: FileSystemStore
isMemoryFileSystem
	^ false
%

! Class extensions for 'GsFile'

!		Class methods for 'GsFile'

category: '*filesystem-gemstone-kernel-35x'
classmethod: GsFile
_contentsOfServerDirectory: aPathName expandPath: aBoolean

	^ self _contentsOfServerDirectory: aPathName expandPath: aBoolean utf8Results: false
%

! Class extensions for 'Integer'

!		Instance methods for 'Integer'

category: '*filesystem-gemstone-kernel'
method: Integer
<< shiftAmount
	"left shift"
	
	shiftAmount < 0 ifTrue: [self error: 'negative arg'].
	^ self bitShift: shiftAmount
%

category: '*filesystem-gemstone-kernel'
method: Integer
>> shiftAmount
	"right shift"
	
	shiftAmount < 0 ifTrue: [self error: 'negative arg'].
	^ self bitShift: 0 - shiftAmount
%

category: '*filesystem-gemstone-kernel'
method: Integer
digitAt: n
	"Answer the value of an apparent byte-indexable field in the receiver,
	 analogous to the large integers, which are organized as bytes."

	n = 1
		ifTrue: [ 
			"Negate carefully in case the receiver is SmallInteger minVal"
			^ self < 0
				ifTrue: [ -256 - self bitAnd: 255 ]
				ifFalse: [ self bitAnd: 255 ] ].
	^ self < 0
		ifTrue: [ (-256 - self bitShift: -8) + 1 digitAt: n - 1 ]
		ifFalse: [ (self bitShift: 8 - (n bitShift: 3)) bitAnd: 255 ]
%

category: '*FileSystem-Core'
method: Integer
humanReadableSIByteSize
	^ String streamContents: [ :s|
		self humanReadableSIByteSizeOn: s ]
%

category: '*FileSystem-Core'
method: Integer
humanReadableSIByteSizeOn: s
	| exponent base |
	"Print a string with an SI binary unit represation of myself."
	base := 1000.
	self < base
		ifTrue: [ ^ s print: self; space; nextPut: $B ].
	exponent := (self log / base log) asInteger.
	(self / (base ** exponent)) printOn: s showingDecimalPlaces: 2.
	s 
		space;
		nextPut: ('kMGTPE' at: exponent);
		nextPut: $B.
%

! Class extensions for 'Object'

!		Instance methods for 'Object'

category: '*filesystem-gemstone-kernel'
method: Object
flag: aSymbol

	"Send this message, with a relevant symbol as argument, to flag a message for subsequent retrieval.  For example, you might put the following line in a number of messages:
	self flag: #returnHereUrgently
	Then, to retrieve all such messages, browse all senders of #returnHereUrgently."
%

category: '*filesystem-gemstone-kernel'
method: Object
split: aSequenceableCollection
	"Split the argument using the receiver as a separator."
	"optimized version for single delimiters"
	"($/ split: '/foo/bar')>>>#('' 'foo' 'bar') asOrderedCollection"
	"([:c| c isSeparator] split: 'aa bb cc dd')>>> #('aa' 'bb' 'cc' 'dd') asOrderedCollection"
		
	| result |
	result := OrderedCollection new: (aSequenceableCollection size / 2) asInteger.
	self split: aSequenceableCollection do: [ :item |
		result add: item ].
	^ result
%

category: '*filesystem-gemstone-kernel'
method: Object
split: aSequenceableCollection do: aBlock
	"optimized version for single delimiters:
	Example:
		$/ split: '/foo/bar' indicesDo: [ :item | ]"
	self split: aSequenceableCollection indicesDo: [ :start :end | 
		aBlock value: (aSequenceableCollection copyFrom: start to: end) ]
%

category: '*filesystem-gemstone-kernel'
method: Object
split: aSequenceableCollection indicesDo: aBlock
	"Perform an action specified as aBlock (with a start and end argument) to each of the indices of the receiver element that have been identified by splitting the receiver using the splitter argument. optimized version for single delimiters."
	
	"(String streamContents: [:s | Character space split: 'Pharo is cool'  indicesDo: [ :start :end | s << 's:' << start asString << ' ' << 'e:' << end asString << ' ' ]]) >>> 's:1 e:5 s:7 e:8 s:10 e:13 '"
		
		
		
	|  position oldPosition |
	
	position := 1.
	oldPosition := position.
	
	position := aSequenceableCollection indexOf: self startingAt: position.
	[ position > 0 ] whileTrue: [
		aBlock value: oldPosition value: position - 1.
		position := position + 1.
		oldPosition := position.
		position := aSequenceableCollection indexOf: self startingAt: position.
	].

	aBlock value: oldPosition value: aSequenceableCollection size.
%

! Class extensions for 'Path'

!		Instance methods for 'Path'

category: '*FileSystem-Core'
method: Path
asFileReference
	^ FileSystem disk referenceTo: self
%

category: '*FileSystem-Core'
method: Path
relativeToReference: aReference 
	^ self relativeToPath: aReference path
%

! Class extensions for 'PositionableStreamPortable'

!		Instance methods for 'PositionableStreamPortable'

category: '*filesystem-gemstone-kernel'
method: PositionableStreamPortable
isBinary
	"Return true if the receiver is a binary byte stream"
	^collection class == ByteArray
%

category: '*filesystem-gemstone-kernel'
method: PositionableStreamPortable
nextInto: aCollection
	"Read the next elements of the receiver into aCollection.
	Return aCollection or a partial copy if less than aCollection
	size elements have been read."
	^self next: aCollection size into: aCollection startingAt: 1.
%

! Class extensions for 'ReadStreamPortable'

!		Instance methods for 'ReadStreamPortable'

category: '*filesystem-gemstone-kernel'
method: ReadStreamPortable
readInto: aCollection startingAt: startIndex count: n
	"Read n objects into the given collection. 
	Return number of elements that have been read."
	
	| max |
	max := (readLimit - position) min: n.
	aCollection 
		replaceFrom: startIndex 
		to: startIndex + max - 1
		with: collection
		startingAt: position + 1.
	position := position + max.
	^ max
%

! Class extensions for 'ReadWriteStreamPortable'

!		Instance methods for 'ReadWriteStreamPortable'

category: '*filesystem-gemstone-kernel'
method: ReadWriteStreamPortable
readInto: aCollection startingAt: startIndex count: n
	"Read n objects into the given collection. 
	Return number of elements that have been read."
	
	| max |
	max := (readLimit - position) min: n.
	aCollection 
		replaceFrom: startIndex 
		to: startIndex + max - 1
		with: collection
		startingAt: position + 1.
	position := position + max.
	^ max
%

! Class extensions for 'SequenceableCollection'

!		Instance methods for 'SequenceableCollection'

category: '*filesystem-gemstone-kernel'
method: SequenceableCollection
allButFirst
  "Answer a copy of the receiver containing all but the first
	element. Raise an error if there are not enough elements."

  ^ self allButFirst: 1
%

category: '*filesystem-gemstone-kernel'
method: SequenceableCollection
allButFirst: n
	"Answer a copy of the receiver containing all but the first n
	elements. Raise an error if there are not enough elements."

	^ self copyFrom: n + 1 to: self size
%

category: '*filesystem-gemstone-kernel'
method: SequenceableCollection
copyAfterLast: anElement
	"Answer a copy of the receiver from after the last occurence
	of anElement up to the end. If no such element exists, answer 
	an empty copy."

	^ self allButFirst: (self lastIndexOf: anElement ifAbsent: [^ self copyEmpty])
%

category: '*filesystem-gemstone-kernel'
method: SequenceableCollection
copyLast: n
	"Answer the last n elements of the receiver.  
	Raise an error if there are not enough elements."

	| size |
	size := self size.
	^ self copyFrom: size - n + 1 to: size
%

category: '*filesystem-gemstone-kernel'
method: SequenceableCollection
copyUpToLast: anElement
  "Answer a copy of the receiver from index 1 to the last occurrence of 
	anElement, not including anElement."

	| n |
	n :=  (self lastIndexOf: anElement ifAbsent: [ ^ self copy ]) - 1.
  ^ self copyFrom: 1 to: n
%

category: '*filesystem-gemstone-kernel'
method: SequenceableCollection
copyWithFirst: newElement 
	"Answer a copy of the receiver that is 1 bigger than the receiver with newElement as the first element."

	| newIC |
	newIC := self species new: self size + 1.
	newIC 
		replaceFrom: 2
		to: self size + 1
		with: self
		startingAt: 1.
	newIC at: 1 put: newElement.
	^ newIC
%

category: '*filesystem-gemstone-kernel'
method: SequenceableCollection
grownBy: length
	"Answer a copy of receiver collection with size grown by length"

	| newCollection size |
	size := self size.
	newCollection := self species new: size + length.
	newCollection replaceFrom: 1 to: size with: self startingAt: 1.
	^ newCollection
%

category: '*filesystem-gemstone-kernel'
method: SequenceableCollection
lastIndexOf: anElement ifAbsent: exceptionBlock
  "Answer the index of the last occurence of anElement within the  
	receiver. If the receiver does not contain anElement, answer the
	result of evaluating the argument, exceptionBlock."

  ^ self lastIndexOf: anElement startingAt: self size ifAbsent: exceptionBlock
%

category: '*filesystem-gemstone-kernel'
method: SequenceableCollection
lastIndexOf: anElement startingAt: lastIndex ifAbsent: exceptionBlock
  "Answer the index of the last occurence of anElement within the  
	receiver. If the receiver does not contain anElement, answer the
	result of evaluating the argument, exceptionBlock."

  lastIndex to: 1 by: -1 do: [ :index | 
    (self at: index) = anElement
      ifTrue: [ ^ index ] ].
  ^ exceptionBlock ~~ nil
    ifTrue: [ exceptionBlock value ]
    ifFalse: [ 0 ]
%

category: '*filesystem-gemstone-kernel'
method: SequenceableCollection
readStreamPortable

	^ ReadStreamPortable on: self
%

category: '*filesystem-gemstone-kernel'
method: SequenceableCollection
replaceAll: oldObject with: newObject
  "Replace all occurences of oldObject with newObject"

  | index |
  index := self indexOf: oldObject startingAt: 1 ifAbsent: [ 0 ].
  [ index = 0 ]
    whileFalse: [ 
      self at: index put: newObject.
      index := self indexOf: oldObject startingAt: index + 1 ifAbsent: [ 0 ] ]
%

category: '*filesystem-gemstone-kernel'
method: SequenceableCollection
reversed
	"Answer a copy of the receiver with element order reversed."
	"Example: 'frog' reversed"

	| n result src |
	n := self size.
	result := self species new: n.
	src := n + 1.
	1 to: n do: [:i | result at: i put: (self at: (src := src - 1))].
	^ result
%

! Class extensions for 'Stream'

!		Instance methods for 'Stream'

category: '*filesystem-gemstone-kernel'
method: Stream
isBinary
	^false
%

! Class extensions for 'TestAsserter'

!		Instance methods for 'TestAsserter'

category: '*filesystem-gemstone-kernel'
method: TestAsserter
assertCollection: actual equals: expected
	"Specialized test method that generates a proper error message for collection"
	^ self
		assert: expected = actual
		description: [ self comparingCollectionBetween: actual and: expected ]
%

category: '*filesystem-gemstone-kernel'
method: TestAsserter
comparingCollectionBetween: left and: right
	| additionalLeft additionalRight sortBlock|
	
	"use a very slow sort block"
	sortBlock := [ :a :b | a asString <= b asString ].
	additionalLeft := (left difference: right) sort: sortBlock.
	additionalRight := (right difference: left) sort: sortBlock. 
	
	^ String streamContents: [:stream |
		stream
			nextPutAll: 'Given Collections do not match. Got '; lf;
			tab; nextPutAll: 'left := '; print: left; nextPut: $.; lf;
			nextPutAll: ' instead of ';
			tab; nextPutAll: ' right :='; print: right; nextPut: $.; lf.
		left size = right size
			ifFalse: [ 
				stream 
					nextPutAll: 'Collection size does not match: left='; 
					print: left size;
					nextPutAll: ' vs. right=';
					print: right size; lf ].
		additionalLeft isEmpty
			ifFalse: [ 
				stream 
					nextPutAll: 'Got ';
					print: additionalLeft size;
					nextPutAll: ' additional element(s) in the left collection: ';
					tab; print: additionalLeft  ].
		additionalRight isEmpty
			ifFalse: [ 
				stream 
					nextPutAll: 'Got ';
					print: additionalRight size;
					nextPutAll: ' additional element(s) in the right collection: ';
					tab; print: additionalRight  ]]
%

! Class extensions for 'UndefinedObject'

!		Instance methods for 'UndefinedObject'

category: '*filesystem-gemstone-kernel'
method: UndefinedObject
isEmptyOrNil
  "Answer whether the receiver contains any elements, or is nil.  Useful in numerous situations where one wishes the same reaction to an empty collection or to nil"

  ^ true
%

! Class extensions for 'Utf8'

!		Instance methods for 'Utf8'

category: '*filesystem-gemstone-kernel'
method: Utf8
asByteArray
	^ ByteArray streamContents: [ :stream |
		self do: [ :each |
			stream nextPut: each ] ]
%

category: '*filesystem-gemstone-kernel-32x'
method: Utf8
asString
  "override the *filesystem  ByteArray >> asString"
  ^ self decodeToString   "or maybe  decodeToUnicode ??"
%

! Class Initialization

run
FastUUIDGenerator initialize.
true
%
