define(["jquery"], 
	function($) {


		return {

			filterMe: function(songList) {


				var selectArtist = $(".select-artist");
				var selectAlbum = $(".select-album");
				var songMatch = {
					songs: {}
				};

				var allSongs = songList.songs;
				console.log("allSongs", allSongs);


					// songKey is a string of the key value....so use brackets to access it below
				for (var songKey in allSongs) {
					console.log("songKey", songKey);
					console.log("allSongs[songKey]", allSongs[songKey]);

					// console.log("selectArtist.val", selectArtist.val());
					// console.log("selectArtist", selectArtist);

					var currentSong = allSongs[songKey];
					console.log("currentSong.artist", currentSong.artist);

					if (currentSong.artist === selectArtist.val()) {
						console.log("I found a match");
						songMatch.songs[songKey] = currentSong;
					}

					else if (currentSong.album === selectAlbum.val()) {
						songMatch.songs[songKey] = currentSong;
					}
				}

				console.log("songMatch", songMatch);
				require(['hbs!../templates/songs'], function(songTemplate) {
				$("#songBox").html(songTemplate(songMatch));

				});







			}
		};

});
	
	
