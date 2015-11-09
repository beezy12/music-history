define(["jquery"], function($) {
console.log("this is add-some-songs");	
	$("#add-button").click(function(e) {






		var newSong = {
			name: $("song-grab").val(),
			artist: $("artist-grab").val(),
			album: $("album-grab").val()
		}; 
		
		$.ajax({
			url: "https://glaring-fire-4247.firebaseio.com/songs.json",
			method: "POST",
			data: JSON.stringify(newSong)
		}).done(function(addedSong) {


			var addMusic = $("#add-music");
			var listMusic = $("#list-music");
			var addButton = $("#add-button");
			var bottomTwo = $(".bottom-half");
			var musicDiv = $(".enter-music");
			var songInput = $("#song-grab");
			var artistInput = $("#artist-grab");
			var albumInput = $("#album-grab");

			songInput.value = "";


			musicDiv.hide();    
			bottomTwo.show();

			console.log("your new song is :", addedSong);
		});
				   
		

	});

});