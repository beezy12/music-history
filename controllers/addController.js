

app.controller("addCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {


	// getting Firebase reference to the songs path
	//  and then using firebaseArray to turn the firebase object reference into an array to use with Angular because
	// Angular only likes arrays and not objects
	var ref = new Firebase("https://glaring-fire-4247.firebaseio.com/songs");
	$scope.songs = $firebaseArray(ref);

	// empty object called newSong that will hold the song info when the user adds a song, and 
	// then is added to Firebase using the .$add built in function
	$scope.newSong = {};

	// functionality for adding a song
	$scope.addSong = function() {
		$scope.songs.$add({
			title: $scope.newSong.title,
			artist: $scope.newSong.artist,
			album: $scope.newSong.album,
			year: $scope.newSong.year,
			producer: $scope.newSong.prod
		})

		// HOW TO CHANGE BACK TO THE MAIN PAGE AFTER CLICKING ADD SONG?????????????????

	} // end of addSong function


/******************************** DELETE FUNCTIONALITY *********************************************/

	// functionality for deleting a song
	$scope.deleteSong = function(butt) {
		$scope.songs.$remove(butt)
	} // end of delete function






	
}]);
			


