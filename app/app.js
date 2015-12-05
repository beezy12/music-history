var app = angular.module("MusicApp", ['firebase', 'ngRoute']);

app.config(['$routeProvider',
  	function($routeProvider) {
    $routeProvider
    	.when('/songs/main', {
    		templateUrl: 'partials/songOutput.html',
    		controller: 'MusicCtrl'
		})
		.when('/songs/details/:songId', {
			templateUrl: 'partials/songForm.html',
			controller: 'MusicCtrl'
		})
		.otherwise('/songs/main');
  }]);
