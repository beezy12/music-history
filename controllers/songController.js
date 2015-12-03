var app = angular.module("MusicApp");

app.controller("MusicCtrl", ["$q", "$http", "$scope", "simple-songs", function($q, $http, $scope, simpleSongs) {

	$scope.searchText = "";
	$scope.songs = [];
	
	simpleSongs.loadSongs().then(
		function () {
			$scope.songs = simpleSongs.getSongs();
		},
		function (error) {
			console.log("error", error);
		}
	);
}]);


