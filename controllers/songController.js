// var app = angular.module("MusicApp", ["firebase"]);
app.controller("MusicCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {


	$scope.artistModel;
	$scope.albumModel;

	// getting Firebase reference to the songs path
	var ref = new Firebase("https://glaring-fire-4247.firebaseio.com/songs");

	// using firebaseArray to turn the firebase object reference into an array to use with Angular because
	// Angular only likes arrays and not objects
	$scope.songs = $firebaseArray(ref);

	$scope.newSong = { artist: "", album: "", name: "" };



	// functionality for adding a song
	$scope.addSong = function() {
		$scope.songs.$add({
			artist: $scope.newSong.artist,
			title: $scope.newSong.title,
			album: $scope.newSong.album
		})

		// HOW TO CHANGE BACK TO THE MAIN PAGE AFTER CLICKING ADD SONG?????????????????

	} // end of addSong function



	// functionality for deleting a song
	$scope.deleteSong = function(butt) {
		$scope.songs.$remove(butt)
	} // end of delete function
	
}]);
			


