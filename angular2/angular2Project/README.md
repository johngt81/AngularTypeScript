# Angular & TypeScript
This example is with Angular 2

### Prerequisites

You need git to clone the repository.
You can get git from
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and its package manager (npm) installed.  
You can get them from [http://nodejs.org/](http://nodejs.org/).

### Setting work environment for this course
We will need to install:

* install node.js
* install git
* install [Source tree](https://www.sourcetreeapp.com/) or GITHUB desktop.
* Download the source code from [GITHUB](https://github.com/jcyovera/AngularTypeScript.git)

* For this example we are working with Angular-Cli :
These commands should install angular-Cli and the server for angular 2 App 

```
npm install -g angular-cli
```

Commands used in class

```
ng new angular2Project --prefix angular2Project
ng generate class shared/product model
ng generate service shared/product
ng generate route dashboard
ng serve
ng test
```
You should find that you have a new
folder in your project.

* `node_modules` - contains the npm packages for the tools we need

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:
* Open command prompt, into to the folder path and execute this :
```
ng serve 
```
Now browse to the app at `http://localhost:4200/`.
