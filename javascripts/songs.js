define(["jquery", "populate-songs", "hbs", "add-some-songs", "refresh", "add-to-select", "filter"], 
	function($, populateSongs, hbs, addSomeSongs, refresh, addToSelect, filter) {

		console.log("this is songs");


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
		populateSongs.goGetData(addToSelect.getMeData);

		// hides the bottom half of the landing page and shows the add music page
		addMusic.click(function(event) {
			bottomTwo.hide();
			musicDiv.show();
		});

		// hides the add music page and shows the 
		listMusic.click(function(event) {
			musicDiv.hide();
			bottomTwo.show();
		});



		// var selectArtist = $("#select-artist");
		// var selectAlbum = $("select-album");

		//get the filter button click
		$("#filter-button").click(function(event) {
			populateSongs.goGetData(filter.filterMe);

		});

	// 		//check value of select box

	// 		// grab the divs of songs

	// 		// .show or .hide them based on whether they match the value from the select box

	// 	// 	if (selectArtist.val() === )

	// 	// for (var songKey in )

	// 	// });

});	  
		  

			
				
			

		








	





			
