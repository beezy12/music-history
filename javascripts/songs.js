$(document).ready(function() {

	var songs = [];
	var currentSongs = [];
	var output = "";
	var dash = "";
	var rightColumn = $(".righty");
	


// function Song(artist, album, name) {          //constructor function
// 	this.artist = artist;
// 	this.name = name;
// 	this.album = album;
// }

// var song = new Song("Will Smith", "Willinium", "Gittin Jiggy Wit It");       //makes an object
// console.log(song)

/**********************************************
 AJAX stuff here
***********************************************/

   $(document).on("click", ".clicky",  function(event) {
   		event.target.parentNode.remove();
	        console.log(event);
	        console.log("hear ya clicky");


    });

function imCallingYou(songList) {
    console.log(songList.songs);
    // songPopulator();

	// function songPopulator(songList) {
	// 	output = "";

    for (var i = 0; i < songList.songs.length; i++) {
      	var currentSong = songList.songs[i];
      	console.log("current song is ", currentSong);
		var elementString = "<divbrew install gnupg gnupg2><h3>" + currentSong.title + "</h3>";
		    elementString += "<p>" + currentSong.artist + " -- from the album: " + currentSong.album + "</p>";
		    elementString += "<button class='clicky'>" + "Click me to clear song" + "</button></div>";

		$('.righty').append(elementString);
    }
}



   // $(".clicky").click(function(event) {
   // 	event.preventDefault();
   // 	$(this).parent().remove();
   // })


  $.ajax({
    url: "data/songs.json"
  }).done(function(contentsOfTheFile) {
    // When you tell jQuery to read a file via the ajax method
    // it reads the contents, and then executes whatever function
    // that you specify here in the done() method, and passes in
    // the contents of the file as the first argument.
    imCallingYou(contentsOfTheFile);
    console.log("the contents of songs.json");
    console.log(contentsOfTheFile);

  });
	


/*************************************************
     MAGIC
*************************************************/
	//this is where I added the content to switch between the two pages

	var addMusic = $("#add-music");
	var listMusic = $("#list-music");

	var addButton = $("#add-button");

	var bottomTwo = $("#bottom-half");
	var musicDiv = $(".enter-music");



	             //before I was saying click and then calling a function, but here I am doing it all in one place
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
	    console.log(songTotal);
  //   ,}songInput.val() + " by " + artistInput.val() + " on the album " + albumInput.val();
		// songs.push(songTotal);
		imCallingYou(songTotal);
	});


	var songInput = $("#song-grab");
	var artistInput = $("#artist-grab");
	var albumInput = $("#album-grab");


});



