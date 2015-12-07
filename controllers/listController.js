

app.controller("listCtrl", [ "$q", "$http", "$scope", "$routeParams", "$firebaseArray",
	function($q, $http, $scope, $routeParams, $firebaseArray){

	
		$scope.ArrayOfSongs = [];
		$scope.searchArtist;
		$scope.searchAlbum;

		//references firebase
		var songRef = new Firebase("https://glaring-fire-4247.firebaseio.com/songs");

		//convert firebase data returned into array
		var songRefArray = $firebaseArray(songRef);
		//log the data returned
		console.log("songRefArray", songRefArray);


		//when array is loaded,
		songRefArray.$loaded()
		.then(function(data){
			//display the data
			console.log("data", data);
			//set the songs as an array to output
			$scope.ArrayOfSongs = data;
		});

}]);







		
