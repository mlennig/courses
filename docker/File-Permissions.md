# File Permissions

By default, every new user is placed into a group named user name.<br>
```
root@f401f6b606d6:/# cd /home
root@f401f6b606d6:/home# echo echo hello > deploy.sh
root@f401f6b606d6:/home# cat deploy.sh
echo hello
root@f401f6b606d6:/home# ls -l
total 8
-rw-r--r-- 1 root root   11 Jun  3 15:04 deploy.sh
drwxr-xr-x 2 john john 4096 Jun  3 13:54 john
```
1st letter indicates file or directory:
`d` directory<br>
`-` file <br>

`-rw-r--r--` deploy.sh<br>
`-` file <br>
9 letters into 3 groups:<br>
`root` **1st group**: Represents the permissions for the user who owns this file. <br>
`rw-` read, write <br>
`root` **2nd group**: Represents the permissions for the group that owns this file. <br>
`r--` read only <br>
**3rd group**: Represents permissions for everyone else. <br>
`r--`read only <br>
Each group has **read**, **write**, and **execute** permissions.<br>
**execute**: we can use the cd command with it. we can go into the directory. thus, all directories have the execute permission by default.<br>

`drwxr-xr-x` john<br>
`d` directory <br>
`john`:<br>
`rwx` read, write, execute<br>
`john` (group):<br>
`r-x` read, execute <br>
everyone else: <br>
`r-x` read, execute <br>

Use `chmod` to change the permissions of the user who owns the file, or the group, or others.<br>
`chmod u+x <filename>` add execute permission. <br>
`chmod u-x <filename>` remove execute permission.<br>
Use `o+x` for adding an execute permission for others <br>
`chmod og+x+w-r <filename> <filename> <etc>` add execute, write and remove read for others and group members <br>
