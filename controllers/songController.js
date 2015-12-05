// var app = angular.module("MusicApp", ["firebase"]);
app.controller("MusicCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

	$scope.searchText = "";
	$scope.songs = [];
	
	var ref = new Firebase("https://glaring-fire-4247.firebaseio.com/songs");
	$scope.songs = $firebaseArray(ref);
	console.log("$scope.songs", $scope.songs);


}]);
			


