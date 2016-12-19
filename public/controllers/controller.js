
/*This is in new version of angular js:
to call a controller of angular:
1- call a module of angular an allocate your app to that module
2- Use your app module and call its controller with your controller name scope and http
you can use this controller to send command to your html as angular controller*/
var myApp = angular.module('myApp', []);  // [] is all packages and dependencies your controller might have
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
	console.log('Hello world from controller!');
}]);

Personel = {
	name: "Farid",
	email:"farid.farzin@gmail.com",
	address:"19 Mahoneys Rd"
};
/*

function AppCtrl() {
	debugger;
	console.log("Hello World from Controller!")
}*/
