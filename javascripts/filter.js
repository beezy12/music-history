define(["jquery"], 
	function($) {


		return {

			filterMe: function(songList) {


				var selectArtist = $(".select-artist");
				var selectAlbum = $(".select-album");
				var songMatch = {};

				var allSongs = songList;
				


					// songKey is a string of the key value....so use brackets to access it below
				for (var songKey in allSongs) {

					// the for in loop grabs the current song's key, and assigns it to the currentSong variable
					var currentSong = allSongs[songKey];
					console.log("currentSong.artist", currentSong.artist);

					// compares the current song's key of artist to whatever was clicked in the artist select 
					// dropdown, and if there's a match, it assigns that songs info to the empty songMatch object
					// I declared above.
					if (currentSong.artist === selectArtist.val()) {
						songMatch[songKey] = currentSong;
					}

					else if (currentSong.album === selectAlbum.val()) {
						songMatch[songKey] = currentSong;
					}
				}

				// 
				require(['hbs!../templates/songs'], function(songTemplate) {
				$("#songBox").html(songTemplate(songMatch));
				// NOTICE THE .html here. It REPLACES what was in the DOM with whatever comes after

				});




			}
		};

});







	
	
						
						
						
