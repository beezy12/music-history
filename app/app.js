var app = angular.module("MusicApp", ['firebase', 'ngRoute']);

app.config(['$routeProvider',
  	function($routeProvider) {
    $routeProvider
    	.when('/songs/main', {
    		templateUrl: 'partials/songOutput.html',
    		controller: 'listCtrl'
		})
		.when('/songs/form', {
			templateUrl: 'partials/songForm.html',
			controller: 'addCtrl'
		})
		.when('/songs/details/:songId', {
			templateUrl: 'partials/songDetails.html',
			controller: 'detailCtrl'
		})
		.otherwise('/songs/main');
  }]);
