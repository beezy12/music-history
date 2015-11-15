define(["jquery", "populate-songs", "hbs", "add-some-songs", "refresh", "add-to-select"], 
	function($, populateSongs, hbs, addSomeSongs, refresh, addToSelect) {


		var addMusic = $("#add-music");
		var listMusic = $("#list-music");
		var addButton = $("#add-button");
		var bottomTwo = $(".bottom-half");
		var musicDiv = $(".enter-music");

		var songInput = $("#song-grab");
		var artistInput = $("#artist-grab");
		var albumInput = $("#album-grab");
		
		// populators. first one is the #musicBox, second one is the 
		populateSongs.goGetData(refresh.getMeData);
		populateSongs.goGetData(addToSelect.populateField);
		  
		  /**** songList here is the actual JSON data itself. When it gets run thru the ajax file, it
		        essentially just attaches the JSON data as the argument for the getMeData function, and then
		        this handlebars function runs, which uses the template I made as it's argument. Then it appends
		        the template (which is songTemplate), which uses the JSON data as it's argument (songList), and
		        outputs it to the #songbox div....which is the right column on the music page.
		        */

		// function getMeData(songList) {
		// 	require(['hbs!../templates/songs'], function(songTemplate) {
		// 		$("#songBox").append(songTemplate(songList));
		// 	});
		// }
				

		// function populateField(artist) {
		//  	require(['hbs!../templates/artist-info-populator'], function(artistTemplate) {
		// 		$("#music-info").append(artistTemplate(artist));
		//  	});
		// }



		// $("#pushIt").click(function() {
		// 	getMoreSongs.goGetData(getMeData);
		// });
		

			

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

		// 	getMeData(songTotal);

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


		// this return returns the only thing it can from this page (this OBJECT)....which is the getMeData function
	// return {								
	// 	getMeData : getMeData
	// };
});
			
				
			

		








	





			
