define(["jquery", "populate-songs", "hbs", "add-some-songs"], 
	function($, populateSongs, hbs, addSomeSongs) {


console.log("this is songs.js");



		var songs = [];
		var currentSongs = [];
		var output = "";
		var dash = "";
		var rightColumn = $(".righty");

		var addMusic = $("#add-music");
		var listMusic = $("#list-music");
		var addButton = $("#add-button");
		var bottomTwo = $(".bottom-half");
		var musicDiv = $(".enter-music");

		var songInput = $("#song-grab");
		var artistInput = $("#artist-grab");
		var albumInput = $("#album-grab");
		

		populateSongs.goGetData(imCallingYou);
		// leftsidePopulator.goGetData(populateLeft);
		
		  // **** songList here is the actual JSON 
		function imCallingYou(songList) {
			require(['hbs!../templates/songs'], function(songTemplate) {
				$("#songBox").append(songTemplate(songList));
			});
		}

		// $("#pushIt").click(function() {
		// 	getMoreSongs.goGetData(imCallingYou);
		// });



		// populate left column
		// function populateLeft(populate) {
		// 	require(['hbs!../templates/songs'], function(whatTemplate) {
		// 		$("artist").append(whatTemplate(populate));
		// 	});
		// }
		

			

		//this listens for a click on the delete buttons and removes the song when clicked
		$(document).on("click", ".clicky",  function(event) {
			event.target.parentNode.remove();    // Lucas had used previousElementSibling, until I moved the delete button inside the div
			// event.target.remove();
		});


		// function clearInput() {
		// 	$("#song-grab").val("");
		// 	$("#artist-grab").val("");
		// 	$("#album-grab").val("");
		// }


		// button on the add music page that submits user's input
		// addButton.click(function(event) {
		// 	var songTotal = {"songs": [{
		//       "title":  songInput.val(),
		//       "artist": artistInput.val(),
		//       "album": albumInput.val()
		//     }]};

		// 	imCallingYou(songTotal);

		// 	clearInput();

		// 	//switches back to the list music page when the add music button is clicked
		// 	musicDiv.hide();    
		// 	bottomTwo.show();
		// });



		
		

		addMusic.click(function(event) {
			bottomTwo.hide();
			musicDiv.show();
		});


		listMusic.click(function(event) {
			musicDiv.hide();
			bottomTwo.show();
		});


			
				
			

		
		// this return returns the only thing it can from this page (this OBJECT)....which is the imCallingYou function
	return {								
		imCallingYou : imCallingYou
	};
});








	





			
