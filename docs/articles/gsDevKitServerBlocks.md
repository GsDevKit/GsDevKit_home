# GsDevKit Server Blocks
1. [Intro](#intro)
1. [`onServerDo:` Examples](#onserverdo-examples)
2. [THIN CLIENT example](#thin-client-example)
3. [Caveats](#caveats)

##Intro
A *GsDevKit Server Block* is a `block` that is written in-line in client Smalltalk in Pharo, while the code in the `block` is executed on the server in GemStone.
For example, the following code can be evaluated in a standard Pharo workspace while the `[ x + y ]` block is executed in a gem connected to the `devKit` stone:

```Smalltalk
  | shell x y z |
  shell := TDShell forSessionNamed: 'devKit'.
  x := 3.
  y := 4.
  z := shell onServerDo: [ x + y ].
  shell quit.
  z
```

The current *GsDevKit Server Block* implementation arranges to create variable bindings for the server derived from temp variables referenced in the block itself.
The variable binding Dictionary is serialized using [STON][1] and is sent to the server along with the source for the `block`.

On the server, the `block` source is compiled and evaluated with the proficed variable bindings Dictionary.
The result of the `block` evaluation is serialized using [STON][1] and returned to the client.

On the client, the result is reified and returned as the result of the `onServerDo:` message.


##`onServerDo:` Examples

```Smalltalk
"Establish server connection"
Smalltalk at: #DevKitShell put: (TDShell forSessionNamed: 'devKit').

"Evaulate a simple expression"
DevKitShell onServerDo: [ 3 + 4 ].

"Bring up the tODE debugger"
DevKitShell onServerDo: [ 3 foo ].

"Bring up the tODE inspector"
DevKitShell onServerDo: [ 3 inspect ].

"local temp variables referenced from block are passed to server"
| x y z |
x := 3.
y := 4.
z := DevKitShell onServerDo: [ x + y ].
z + 3.

"Terminate server connection"
DevKitShell quit.
```

##THIN CLIENT example
The classic problem when working with a client/server application is to pick the right cut point for the client/server boundary.
Too fat and you end up needing more and more of the business objects on the client which leads to network-based performance issues as well as complicated replication/management frameworks.
Too thin and ... I'm not sure that the client can be too thin.

The advantage of using a thin client includes:
- the ability to closely manage the volume of data that is passed over the wire between client and server
- minimize coupling of code between client and server
- consolidate business logic on server
- consolidte presention logic on client

Using *server blocks* to implement a thin client application means that the client/server boundary can be controlled by moving a block boundary in the code.
Business logic can evolve from a few lines of code in a client-side *server block* to a few server-side methods.

The following doits illustrate a few of the common use cases encountered in a thin client application.

*Note: all of the following expressions should be executed in a standard Pharo workspace.*

1. Install NeoCSV in Pharo:
  ```Smalltalk

  Smalltalk at: #DevKitShell put: (TDShell forSessionNamed: 'devKit').
  Metacello new
    configuration: 'NeoCSV';
    version: #'stable';
    repository: 'http://smalltalkhub.com/mc/Pharo/MetaRepoForPharo30/main/';
    load.
  ```

2. Export domain class (NeoCSVTestObject) to GemStone:
  ```Smalltalk
  DevKitShell 
    exportClassToServer: NeoCSVTestObject;
    onServerDo: [ System commitTransaction ].
  ```

3. Create dummy domain data:
  ```Smalltalk
  | benchmark |
  benchmark := NeoCSVBenchmark new.
  benchmark cleanup.
  benchmark write3.
  ```

4. Initialize data store in GemStone:
  ```Smalltalk
  DevKitShell
    onServerDo: [ 
      UserGlobals
        at: #'NeoCSVDictionary'
        put: Dictionary new.
      System commitTransaction ]
  ```

5. Load domain data into GemStone from CSV file. Commit every 1000 records:
  ```Smalltalk
'NeoCSVBenchmark.csv' asFileReference
    readStreamDo: [ :stream | 
      | reader converter buffer bufCnt numRecords records |
      converter := [ :string | NeoNumberParser parse: string ].
      reader := NeoCSVReader on: (ZnBufferedReadStream on: stream).
      reader
        recordClass: NeoCSVTestObject;
        addIntegerField: #'x:';
        addIntegerField: #'y:';
        addIntegerField: #'z:'.
      buffer := Array new: 1000.
      bufCnt := 0.
      [ reader atEnd ]
        whileFalse: [ 
          bufCnt := bufCnt + 1.
          buffer at: bufCnt put: reader next.
          bufCnt = buffer size
            ifTrue: [ 
              numRecords := bufCnt.
              records := buffer.
              DevKitShell
                onServerDo: [ 
                  1 to: numRecords do: [ :index | 
                    | record |
                    record := records at: index.
                    NeoCSVDictionary at: record x put: record ].
                  System commitTransaction.
                  nil ].
              bufCnt := 0 ] ] ].
  DevKitShell onServerDo: [ System commitTransaction ]
  ```

6. Do a Query on GemStone, store the query results on the server and return results size:
  ```Smalltalk
  | min max resultSize |
  min := 500.
  max := 550.
  resultSize := DevKitShell
    onServerDo: [ 
      | queryResults |
      queryResults := OrderedCollection new.
      NeoCSVDictionary
        keysAndValuesDo: [ :id :record | 
          (id >= min and: [ id <= max ])
            ifTrue: [ queryResults add: record ] ].
      UserGlobals at: #'NeoCSVQueryResults' put: queryResults.
      System commitTransaction.
      queryResults size ].
  Smalltalk at: #'NeoQuerySize' put: resultSize
  ```

7. View a specific record:
  ```Smalltalk
	
  | resultIndex |
  resultIndex := 25.
  DevKitShell
    onServerDo: [  NeoCSVQueryResults at: resultIndex ]
  ```

8. Quit GemStone session:
  ```Smalltalk
  DevKitShell quit.
  ```

##Caveats
When using `doIt`, `printIt`, etc. the workspace code is initially compiled in Pharo.
Consequently if you have an expression like:

```Smalltalk
shell onServerDo: [ System stoneVersionReport inspect ].
```

The Pharo compiler will complain about the fact that the `System` global is not present in Pharo.
In this case, declare `System` as a global.

Pharo will also complain that the method `#stoneVersionReport` doesn't exist.
In this case, tell Pharo to ignore about the *missing method*.


If you try to execute this expression:

```Smalltalk
(shell onServerDo: [ System stoneVersionReport ]) inspect.
```

You will get an error when STON tries to reify the instance **StringKeyValueDictionary**, since there is no class by that name.
There are a number of solutions that **could** be applied, but in the short term, you should avoid tring to pass instances of classes that only exist in GemStone.
The easiest solution is to write more server code, that pre-proceses the returned objects so that common classes are used ...

A similar problem exists if you try send Pharo-only class instances to the server via tempoary values.


[1]: https://github.com/GsDevKit/ston#ston---smalltalk-object-notation
