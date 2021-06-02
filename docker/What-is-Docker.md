# What is Docker

A platform for building, running, and shipping applications. 

Reasons that an app may work on one machine but not another:
1. One or more files are missing;
2. Software version mismatch;
3. Different configuration settings.

With docker we can easily package up our application with everything it needs, and run it anywhere on any machine with Docker. 

Using the command:
`docker-compose up`
Docker will automatically download and run the dependences inside an isolated environment called a container. The isolated environment allows multiple applications, using different versions of software side by side. 

When we're finished with the application and no longer wish to work on it, we can remove the applicaiton and all its dependences in one go. 
With docker, each applications run with its dependencies inside and isolated environment. 

*Docker helps us consistently build, run and ship applications.*



