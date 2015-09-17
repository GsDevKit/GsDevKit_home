# ZincHTTPComponents [![Build Status](https://travis-ci.org/GsDevKit/zinc.png?branch=gs_master)](https://travis-ci.org/gs_master/zinc)
The [GsDevKit Zinc project][3] is a fork of [Sven Van Caekenberghe's Zinc project][4]. 
Currently only the *Core* and *Tests* packages have been ported to GsDevKit:
* Zinc-HTTP
* Zinc-Tests
* Zinc-Character-Encoding-Core
* Zinc-Character-Encoding-Tests
* Zinc-FileSystem-Legacy
* Zinc-Resource-Meta-Core
* Zinc-Resource-Meta-Tests

## Register Project

```Shell
$GS_HOME/projects/zinc/createProjectEntry <stone-name>
```

###Batch Install/Update
From the shell:

```Shell
$GS_HOME/projects/zinc/loadProject <stone-name>
```

###Interactive Install/Update
Within tODE:

   * from tODE command line:


      ```Shell
      project load ZincHTTPComponents
      ```

   * from tODE project list:

     ![project list menu][2]

[2]: ../../docs/images/projectListMenu.png
[3]: https://github.com/GsDevKit/zinc
[4]: https://github.com/svenvc/zinc
