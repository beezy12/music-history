define(["jquery", "populate-songs", "hbs", "add-some-songs", "refresh", "add-to-select", "filter", "delete-something", "firebase"], 
	function($, populateSongs, hbs, addSomeSongs, refresh, addToSelect, filter, deleteSomething, firebase) {


		var addMusic = $("#add-music");
		var listMusic = $("#list-music");
		var addButton = $("#add-button");
		var bottomTwo = $(".bottom-half");
		var musicDiv = $(".enter-music");

		var songInput = $("#song-grab");
		var artistInput = $("#artist-grab");
		var albumInput = $("#album-grab");
		
		// run the populateSongs goGetData method using the template from refresh.getMeData
		// populateSongs.goGetData(refresh.getMeData);

		// populateSongs.goGetData(addToSelect.getMeData);

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

		//get the filter button click
		// $("#filter-button").click(function(event) {
		// 	populateSongs.goGetData(filter.filterMe);

		// });

		// delete button removes song from the dom
		$(document).on("click", ".clicky",  function(event) {
			// event.target.parentNode.remove(); 
			console.log("songId", this.id);
			var uniqueSongId = this.id;
			deleteSomething.deleteForGood(uniqueSongId);
		});



		// UPDATE FIREBASE LIVE WHEN THERE IS A CHANGE **************************************

		// Create a reference to your Firebase database
		var myFirebaseRef = new Firebase("https://glaring-fire-4247.firebaseio.com/");

		// Listen for when anything changes on the "songs" key, and start this function.....
		myFirebaseRef.child("songs").on("value", function(snapshot) {

			// ...which first clears the right column and the selects dropdowns
			$("#songBox").html("");
			$("#music-info").html("");

			// snapshot is the current state of firebase, takes that (val) and stores songs key in a local variable
			var allSongsObject = snapshot.val();

			
			// Bind the allSongsObject to the song list Handlebar template
			populateSongs.goGetData(allSongsObject);

  			// Bind the unique artists to the artists template
  			populateSongs.giveToSelect(allSongsObject);

  			// Bind the unique albums to the albums template

  			// get the filter button click
			$("#filter-button").click(function() {
			filter.filterMe(allSongsObject);

			});
  	
		});


			// James's explaination of how to get the filter button working

			//check value of select box

	 		// grab the divs of songs

			// .show or .hide them based on whether they match the value from the select box

});	  
	

		  

			
				
			

		








	





			







