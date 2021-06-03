# Managing Users

`useradd` add a new user <br>
`adduser` Perl script that is more interactive and uses useradd under the hood. gives you an opportunity to specifiy a password and additional information about the user <br>
`usermod` modifying a user <br>
`userdel` for deleting a user <br>

```
root@f401f6b606d6:/# useradd -m john
root@f401f6b606d6:/# cat /etc/passwd
john:x:1000:1000::/home/john:/bin/sh
```
`john` user name <br>
`:` separator <br>
`x` the password is stored somewhere else <br>
`1000` user ID <br>
`1000` group ID <br>
`/home/john` home direcory of this uers <br>
`/bin/sh` the shell program used when this user logs in <br>
`/etc/shadow` where passwords are stored in an encrypted format. this file is only accessible to the root user<br>



