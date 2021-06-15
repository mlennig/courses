# Managing Processes

**Process**: An instance of a running program. 

`ps` view all running processes <br>
 **bash**: bourne again shell. the program that takes our commands and sends them to Linux for execution.<br>
Each process has a unique identifier that is generated by the operating system.<br>

```
root@f401f6b606d6:/# ps
  PID TTY          TIME CMD
    1 pts/0    00:00:00 bash
   15 pts/0    00:00:00 ps
```
   
`TTY` teletype <br>
`pts` pseudoterminal<br>
`pts/0` represents the first terminal window <br>
`TIME` the amount of CPU time each process consumed <br>

`sleep 3` prompt sleeps for 3 seconds<br>
`sleep 3 &` using `&` makes the process run in the background <br>
`kill <process ID` terminates the process<br>


 