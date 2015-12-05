app.controller("deleteCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

	console.log("this is the delete controller");

	var ref = new Firebase("https://glaring-fire-4247.firebaseio.com/songs");
	$scope.songsToDelete = $firebaseArray(ref);
	console.log("firebase delete ref", ref);


	$scope.deleteSong = function() {
		console.log("hear you delete button");
		// $scope.songsToDelete.remove({
		// })
	}


}]);