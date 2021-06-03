# Managing Groups

`groupadd` add a group <br>
`groupmod` <br>
`groupdel`<br>
`groups <user name>` to see which groups the person is a part of <br>
```
root@f401f6b606d6:/# groups john
john : john developers
```
This indicates that john is part of two groups: 
1. **primary group**: john
2. **secondary group**: developers

e.g. Group Heirarchy: <br>
* Primary
	* Secondary
	* Secondary
	* Secondary
	* Secondary
