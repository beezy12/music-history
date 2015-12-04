angular
	.module("MusicApp")
	.controller("MusicCtrl", ["$q", "$http", "$scope", "simpleSongs", function($q, $http, $scope, simpleSongs) {

	// $scope.searchText = "";
	$scope.songs = [];
	
	simpleSongs.loadSongs().then(
		function () {
			$scope.songs = simpleSongs.getSongs();
			console.log("$scope.songs", $scope.songs);
		},
		function (error) {
			console.log("error", error);
		}
	);
}]);
			


