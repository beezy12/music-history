define(["jquery", "populate-songs", "refresh", "add-to-select"], function($, populateSongs, refresh, addToSelect) {
console.log("this is add-some-songs");	
	
	$("#add-button").click(function(e) {
		var newSong = {
			title: $("#song-grab").val(),
			artist: $("#artist-grab").val(),
			album: $("#album-grab").val()
		}; 


		console.log(newSong);
		
		$.ajax({
			url: "https://glaring-fire-4247.firebaseio.com/songs.json",
			method: "POST",
			data: JSON.stringify(newSong)
		}).done(function(addedSong) {

			// clears the select div and the right column div.....
			$("#songBox").empty();
			$("#music-info").empty();

			// before these two repopulate everything in those two divs with the updated firebase info
			populateSongs.goGetData(refresh.getMeData);
			populateSongs.goGetData(addToSelect.populateField);

			// var addMusic = $("#add-music");
			// var listMusic = $("#list-music");
			// var addButton = $("#add-button");
			var bottomTwo = $(".bottom-half");
			var musicDiv = $(".enter-music");
			var songInput = $("#song-grab");
			var artistInput = $("#artist-grab");
			var albumInput = $("#album-grab");

			songInput.val("");
			artistInput.val("");
			albumInput.val("");


			musicDiv.hide();    
			bottomTwo.show();

			console.log("your new song is :", addedSong);
		});
				   
	});

});
		





