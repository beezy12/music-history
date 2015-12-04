angular
	.module("MusicApp", ["ngRoute"])
	.config(['$routeProvider',
  	function($routeProvider) {
    $routeProvider
    	.when('/songs/main', {
    		templateUrl: 'partials/songOutput.html',
    		controller: 'MusicCtrl'
    	})
    	.when('/songs/list', {
        	templateUrl: 'partials/songList.html',
        	controller: 'MusicCtrl'
		})
		.when('/songs/form', {
			templateUrl: 'partials/songForm.html',
			controller: 'MusicCtrl'
		})
		.otherwise('/songs/list');
  }]);





















