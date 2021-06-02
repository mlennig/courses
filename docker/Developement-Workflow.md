# Development Workflow


**1.** Take application and Dockerize it, which means we make a small change so that it can be run by Docker by adding a Dockerfile. <br>

 &nbsp;&nbsp;**1.1.** Dockerfile: A plain text file that includes instructions that Dockers uses to package up the application into an image. The image contains everything our application needs to run. **Image:**<br>
		&nbsp;&nbsp;&nbsp;&nbsp; **1.1.1.** A cut-down OS<br>
		&nbsp;&nbsp;&nbsp;&nbsp; **1.1.2.** A runtime environment (eg Node)<br>
		&nbsp;&nbsp;&nbsp;&nbsp; **1.1.3.** Application files<br>
		&nbsp;&nbsp;&nbsp;&nbsp; **1.1.4.** Third-party libraries<br>
		&nbsp;&nbsp;&nbsp;&nbsp; **1.1.5.** Environment variables<br>
		&nbsp;&nbsp;&nbsp;&nbsp; **1.1.6.** etc.<br>
**2.** Once we have an image, we tell Docker to start a container using that image. So a container, is a special kind of process that has its own file system, which is provided by the image. Our application gets loaded inside a container/process. Using `docker run ...`.<br>

**3.** Once we have this image, we can push it to a Docker registry like Docker Hub. 

# Development Workflow


**1.** Take application and Dockerize it, which means we make a small change so that it can be run by Docker by adding a Dockerfile. 

 &nbsp;&nbsp;**1.1.** Dockerfile: A plain text file that includes instructions that Dockers uses to package up the application into an image. The image contains everything our application needs to run. **Image:**
		&nbsp;&nbsp;&nbsp;&nbsp; **1.1.1.** A cut-down OS
		&nbsp;&nbsp;&nbsp;&nbsp; **1.1.2.** A runtime environment (eg Node)
		&nbsp;&nbsp;&nbsp;&nbsp; **1.1.3.** Application files
		&nbsp;&nbsp;&nbsp;&nbsp; **1.1.4.** Third-party libraries
		&nbsp;&nbsp;&nbsp;&nbsp; **1.1.5.** Environment variables
		&nbsp;&nbsp;&nbsp;&nbsp; **1.1.6.** etc.
**2.** Once we have an image, we tell Docker to start a container using that image. So a container, is a special kind of process that has its own file system, which is provided by the image. Our application gets loaded inside a container/process. Using `docker run ...`.

**3.** Once we have this image, we can push it to a Docker registry like Docker Hub. 
