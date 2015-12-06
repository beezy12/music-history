var app = angular.module("MusicApp", ['firebase', 'ngRoute']);

app.config(['$routeProvider',
  	function($routeProvider) {
    $routeProvider
    	.when('/songs/main', {				// why doesn't this work???? Im adding the MusicCtrl to index inline
    		templateUrl: 'index.html',
    		controller: 'MusicCtrl'
		})
    	.when('/songs/main', {
    		templateUrl: 'partials/songOutput.html',
    		controller: 'MusicCtrl'
		})
		.when('/songs/form', {
			templateUrl: 'partials/songForm.html',
			controller: 'MusicCtrl'
		})
		.when('/songs/details/:songId', {
			templateUrl: 'partials/songForm.html',
			controller: 'MusicCtrl'
		})
		.otherwise('/songs/main');
  }]);
