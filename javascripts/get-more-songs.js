define(["jquery"], function($ ) {
	

	return {

		goGetData: function(callbackFunction) {
			$.ajax({
			    url: "./data/more-songs.json"
			}).done(callbackFunction);




			// .done(function(data) {
						// console.log("data is below");
						// console.log(data);
						
						// console.log(data.songs[0]);

						// for (var i = 0; i < data.songs.length; i++) {


						// var elementString = "<div><h3>" + data.songs[i].title + "</h3>";
			   //  			elementString += "<p>" + data.songs[i].artist + " -- from the album: " + data.songs[i].album + "</p>";
			   //  			elementString += "<button class='clicky'>" + "Click me to clear song" + "</button></div>";

						// 	$('#songBox').append(elementString);


						// console.log(data.songs[i].title);
						// console.log(data.songs[i].artist);
						// console.log(data.songs[i].album);




						// });

					// });
			
		}

	};
});