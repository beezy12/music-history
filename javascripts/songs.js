define(["jquery", "populate-songs", "get-more-songs", "hbs"], 
	function($, populateSongs, getMoreSongs, hbs) {


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
			event.target.previousElementSibling.remove();
			event.target.remove();
	        console.log(event.target.previousElementSibling);
	        console.log("hear ya clicky");
		});


		function imCallingYou(songList) {
			require(['hbs!../templates/songs'], function(songTemplate) {
				$("#songBox").append(songTemplate(songList));
			});
		}

		populateSongs.goGetData(imCallingYou);
		

		$("#pushIt").click(function() {
			getMoreSongs.goGetData(imCallingYou);
		});
			



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


	





