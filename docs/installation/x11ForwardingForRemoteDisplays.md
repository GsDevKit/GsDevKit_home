#X11 Forwarding for Remote Servers

As an alternative to running a tODE client on you local machine and then logging into a stone running on a remote server over the WAN, you can use [X11 forwarding][1] use the [compression option for ssh][2]:

```
ssh -c arcfour,blowfish-cbc -XC
```

[1]: http://unix.stackexchange.com/questions/12755/how-to-forward-x-over-ssh-from-ubuntu-machine
[2]: http://xmodulo.com/how-to-speed-up-x11-forwarding-in-ssh.html
