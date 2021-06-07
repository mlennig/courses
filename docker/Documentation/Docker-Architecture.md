# Docker Architecture

Client --------------> Server/Docker Engine
via REST API


|Client --| --> Server/Docker Engine |
|--|--|
|  |Sits in the background and takes care of building <br> and running Docker containers. Technically, a <br> container is just a process, like other processes <br> running on your computer.  |

All containers share the kernel (the core of an operating system) of the host. The kernel 
manages all applications as well as hardware resources like memory and CPU. Every OS 
has its own kernel with different APIs. 

| Windows Machine | Linux Machine  | Apple Machine  |
|--|--|--|
|Can run Windows + Linux  |  Can only run Linux|Uses a lightweight virtual machine to <br> be able to run Linux containers.   |


