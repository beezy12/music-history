define(["jquery", "populate-songs", "refresh", "add-to-select"], 
	function($, populateSongs, refresh, addToSelect) {

	console.log("this is delete-something");	

	return {
				//deleteForGood is the key, and function is its' value.
		deleteForGood: function(songKey) {

				$.ajax({
		  			url: "https://glaring-fire-4247.firebaseio.com/songs/" + songKey + "/.json",
		  			method: "DELETE"
					}).done(function() {
		  			console.log("Yay, it deleted!");


		  			//clears everything out of both of these divs 
		  			$("#songBox").empty();
					$("#music-info").empty();

					// and these two repopulate everything in those two divs with the updated firebase info
					populateSongs.goGetData(refresh.getMeData);
					populateSongs.goGetData(addToSelect.getMeData);
				});
		}
	};
				   
});


		





