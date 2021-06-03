# Chaining Commands

`mkdir test; cd test; echo done` chain commands using `;`<br>
`mkdir test && cd test && echo done` use the `&&` operator to stop execution if one of the commands fail<br>
`mkdir test || cd test || echo done` will execute one of the commands <br>
`ls /bin | less` will list the contents of /bin and allow you to scroll up and down by including pipe command `|`. what comes out of `ls /bin` will go to `less` using the pipe command<br>
`mkdir hello;\` use the `\` operator to chain commands and avoid having to scroll horizontally<br>


