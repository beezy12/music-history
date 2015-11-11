define(["jquery"], function($) {
	
console.log("this is refresh");

		return {
						// songList is the database of the object of songs (the json on firebase)
			getMeData: function(songList) {
			require(['hbs!../templates/songs'], function(songTemplate) {
				$("#songBox").append(songTemplate(songList));
				
				console.log("songList", songList);
				console.log("songList.songs", songList.songs);
				console.log("songList.songs.myxo", songList.songs.myxo);
				console.log("songList.songs.myxo.artist", songList.songs.myxo.artist);

				

			});
		}
	};
});