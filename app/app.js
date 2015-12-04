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
		.otherwise('/songs/main');
  }]);


	/*  to-do list: 

		- filter button below select dropdowns to filter songs
		- get 2nd json song info, and concat to first one
		- 






















