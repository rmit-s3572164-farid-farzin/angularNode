/*prerequisites: 
1- install gitbash as command prompt to type all command lines in
	- git-scm.com/downlods
	- use / instead of \ 
2- download nodjs from nodejs.org
3- in the directory create a new folder which your app is going to be created there
4- in the app folder create a new file called server.js (this file)
5- download and install sublime editor from submlimetext.com
6- type in gitbash: cd "your app folder route"
7- After installing express by npm install express in our route 
folder we need to call this package to run server */
var express = require('express');  //call express as the package to run the server
var app = express(); // use express for our application

/*app.get('/', function(req, res){ // '/' refers to html page in which the port refers to.
	res.send('Hello world!') // to shutdown server just press ctrl c in gitbash
});*/
/*
to refer to a folder inwhoch our html file is in we need to specify that folder for our server
__dirname refers to the folder inwhich our server (server.js) is in. /public is the folder in server folder
which html file is in. static means any html/jodejs/angularjs file and is general to use in the server*/
app.use(express.static(__dirname + "/public")); 
app.listen(3000); //server listens to port 3000
console.log("Server running on port 3000"); //this will show the result in the console.
// to see the console in html press ctrl shift c