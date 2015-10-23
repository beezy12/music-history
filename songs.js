$(document).ready(function() {

	var songs = [];
	var currentSongs = [];
	var output = "";
	var dash = "";
	var rightColumn = $("#rightColumn");

/**********************************************
 AJAX stuff here
***********************************************/

function functionIWantToExecute(songList) {
    console.log(songList.songs);

    for (var i = 0; i < songList.songs.length; i++) {
      var currentSong = songList.songs[i];
      $("#rightColumn").append("<h2>" + currentSong.title + "</h2>");
      $("#rightColumn").append("<div>" + currentSong.artist + "</div>");
      $("#rightColumn").append("<div> from the album: " + currentSong.album + "</div")
    }
}




  $.ajax({
    url: "data/songs.json"
  }).done(function(contentsOfTheFile) {
    // When you tell jQuery to read a file via the ajax method
    // it reads the contents, and then executes whatever function
    // that you specify here in the done() method, and passes in
    // the contents of the file as the first argument.
    functionIWantToExecute(contentsOfTheFile);
    console.log("the contents of songs.json");
    console.log(contentsOfTheFile);
  });
	


/**********************************************
*************************************************/
	//this is where I added the content to switch between the two pages

	var addMusic = $("#add-music");
	var listMusic = $("#list-music");

	var addButton = $("#add-button");

	var bottomTwo = $("#bottom-half");
	var musicDiv = $("#enter-music");



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
		
		var songTotal = songInput.val() + " by " + artistInput.val() + " on the album " + albumInput.val();
		songs.push(songTotal);
		songPopulator();
	});


	var songInput = $("#song-grab");
	var artistInput = $("#artist-grab");
	var albumInput = $("#album-grab");


});



