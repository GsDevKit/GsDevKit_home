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

##Installation

###Batch Install

```
$GS_HOME/projects/zinc/bin/createZincStone zinc 3.2.4
```

```
$GS_HOME/projects/zinc/bin/installZincSton zinc
```

###tODE Install

```
mount @/sys/stone/dirs/gsDevKitHome/projects/zinc /home zinc # mount the zinc directory in tODE
/home/zinc/install                                           # install Zinc
```

---
---

**Talk about webSockets and rest and gem servers.**


[3]: https://github.com/GsDevKit/zinc
[4]: https://github.com/svenvc/zinc
