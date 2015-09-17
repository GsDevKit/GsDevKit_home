# GLASS [![Build Status](https://travis-ci.org/glassdb/glass.png?branch=master)](https://travis-ci.org/glassdb/glass)

The [GLASS][1] project manages the Squeak/Pharo compatibility code for GemStone/S.

GLASS is pre-installed in Dev Kit. 

## Register Project

```Shell
$GS_HOME/projects/glass/createProjectEntry <stone-name>
```

###Batch Update
From the shell:

```Shell
$GS_HOME/projects/glass/loadProject <stone-name>
```

###Interactive Update
Within tODE:

   * from tODE command line:


      ```Shell
      project load GLASS1
      ```

   * from tODE project list:

     ![project list menu][2]

[1]: https://github.com/glassdb/glass
[2]: ../../docs/images/projectListMenu.png
