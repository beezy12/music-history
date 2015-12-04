angular
	.module("MusicApp", ["ngRoute"])
	.config(['$routeProvider',
  	function($routeProvider) {
    $routeProvider
    	.when('/songs/main', {
    		templateUrl: 'partials/songOutput.html',
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
		- style with newer look and bootstrap stuff
		- get delete buttons working for songs
		- rework promises in factory??? (steve's way doesn't make sense)
	*/



	/* to get my page back to normal after I jacked it all up:

		- change name of css file
		- comment out bootstrap code on songoutput.html and songform.html
	*/






















