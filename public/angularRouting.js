var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider

		.when("/home", {
			templateUrl : "views/home.html",
			controller : "homeController"
		})

		.when("/chest", {
			templateUrl : "views/chest.html",
			controller : "chestController"
		})

		.when("/back", {
			templateUrl : "views/back.html",
			controller : "backController"
		})

		.when("/shoulders", {
			templateUrl : "views/shoulders.html",
			controller : "shoulderController"
		})

		.when("/legs", {
			templateUrl : "views/legs.html",
			controller : "legsController"
		})

		.otherwise({
			redirectTo : "/home"
		});
});

app.controller("homeController", function($scope){
	$scope.title = "Home";
});

app.controller("chestController", function($scope){
	$scope.title = "Chest";
});

app.controller("backController", function($scope){
	$scope.title = "Back";
});

app.controller("shoulderController", function($scope){
	$scope.title = "Shoulders";
});

app.controller("legsController", function($scope){
	$scope.title = "Legs/Arms";
});