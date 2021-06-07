# Environment Variables

In Linux, we have environment variables which we can set for storing configuration settings for our applications. Our applications can read configuration settings from these environment variables. 

`printenv` using this command we can see all the environment variables on this machine<br>
`HOSTNAME=f401f6b606d6` ID of our container<br>
`PWD=/root`<br>
`HOME=/root`<br>
``` LS_COLORS=rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:```<br>
`TERM=xterm`<br>
`SHLVL=1`<br>
`PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
_=/usr/bin/printenv` to find a program, your OS is not going to go through your entire hard drive, it's only going to look at specific directories. those directories are specified using the `PATH` variable. this is set to a list of directories separated by a colon. these are the directories that Linux or Windows searches for to find a program or acommand. <br>
`OLDPWD=/root/docker`<br>

`printenv PATH` can provide an argument like `PATH` to see a specific environment variable <br>
`echo $PATH` use `$` to specifiy that we are looking for a specific environment variable<br>
`export` used to define a variable<br>

Example:<br>
`export DB_USER=MOSH` will set the env variable in the current session. <br>

`docker ps -a` will show both open and closed containers <br>
`docker start -i 2f7` the `-i` allows us to interact with it. if there are no other images using the same first couple letters then you can type only the first few letters to ID which image you want like `2f7`<br>

**.bashrc**  this file is a user's personal startup file. everytime a user logs in, linux loads this command from the user's home directory. this is where we have to write permanent environment variables. <br>

`echo DB_USER=mosh > .bashrc` if you do this you will overwrite the entire .bashrc file<br>
`echo DB_USER=mosh >> .bashrc` adding the extra `>` will append the variable<br>

Newly made environment variables will only be available in the next session, because **.bashrc** is only loaded once we start the terminal session.<br>

`source .bashrc` will reload the **.bashrc** file. must be executed from our home directory.<br>
`source ~/.bashrc` will load from anywhere <br>

***N.B.:** Never store sensitive information in environment variables because variables are stored in plain text files.* <br>





