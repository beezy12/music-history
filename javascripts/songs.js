define(["jquery", "populate-songs"], function($, populateSongs) {


console.log("this is songs.js");



		var songs = [];
		var currentSongs = [];
		var output = "";
		var dash = "";
		var rightColumn = $(".righty");

		

		var songInput = $("#song-grab");
		var artistInput = $("#artist-grab");
		var albumInput = $("#album-grab");



		


		//this listens for a click on the delete buttons and removes the song when clicked
		$(document).on("click", ".clicky",  function(event) {
				event.target.parentNode.remove();
		        console.log(event);
		        console.log("hear ya clicky");
		});


		function imCallingYou(songList) {
		    for (var i = 0; i < songList.songs.length; i++) {
		      	var currentSong = songList.songs[i];
		      	console.log("current song is ", currentSong);
				var elementString = "<div><h3>" + currentSong.title + "</h3>";
				    elementString += "<p>" + currentSong.artist + " -- from the album: " + currentSong.album + "</p>";
				    elementString += "<button class='clicky'>" + "Click me to clear song" + "</button></div>";

				$('.righty').append(elementString);
		    }
		}

		populateSongs.goGetData(imCallingYou);



		var addMusic = $("#add-music");
		var listMusic = $("#list-music");
		var addButton = $("#add-button");
		var bottomTwo = $(".bottom-half");
		var musicDiv = $(".enter-music");

		addMusic.click(function(event) {
			bottomTwo.hide();
			musicDiv.show();
		});


		listMusic.click(function(event) {
			musicDiv.hide();
			bottomTwo.show();
		});

		  
		addButton.click(function(event) {
			
			var songTotal = {"songs": [{
		      "title":  songInput.val(),
		      "artist": artistInput.val(),
		      "album": albumInput.val()
		    }]};

			imCallingYou(songTotal);
		});

		return {
			imCallingYou : imCallingYou
		};
});


	





