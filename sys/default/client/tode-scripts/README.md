The files in this directory are tODE `tpz` scripts that are executed by client `script` built-in (type `script -h` into the tODE Shell for more information).

This directory contains the default implemenation for a standard set of scripts:

| script | purpose|
| -- | --|
|installServerTode| Execute the `installServer` built-in that bootstraps tODE into a stone. The bootstrap scripts are located in `$GS_HOME/sys/default/client/server-bootstrap-scripts`. |
|installServerTode2| Execute the set of tODE commands that are required to complete the boostrap operation.| 
|rebuildServerTode| A tODE script that is run reconstruct the in-image /sys structure. |
|rebuildSys| A tODE script that reconstructs the in-image /sys structure. called by `rebuildServerTode`.|
|setUpSys| A tODE script that constructs the in-image /sys structure for the first time. Called by `installSErverTode2` |
|updateServerTode| A tODE script the updates the installation of tODE. Called by $GS_HOME/bin/todeUpdate. |

Local customizations for any of the scripts in this directory by copying the script to `$GS_HOME/sys/local/client/tode-scripts` and making you modifications.
