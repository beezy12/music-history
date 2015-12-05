// var app = angular.module("MusicApp", ["firebase"]);
app.controller("MusicCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

	var ref = new Firebase("https://glaring-fire-4247.firebaseio.com/songs");
	$scope.songs = $firebaseArray(ref);

	$scope.newSong = { artist: "", album: "", name: "" };



	// functionality for adding a song
	$scope.addSong = function() {
		console.log("add song function is clicking");
		$scope.songs.$add({
			artist: $scope.newSong.artist,
			title: $scope.newSong.title,
			album: $scope.newSong.album,
			year: $scope.newSong.year
		})
	} // end of addSong function



	// functionality for deleting a song
	$scope.deleteSong = function() {
		console.log("hear you delete button");
		// $scope.songsToDelete.remove({
		// })
	} // end of delete function
	
}]);
			


