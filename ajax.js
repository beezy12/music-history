$(document).ready(function() {

  function functionIWantToExecute(songList) {
    console.log(songList.songs);

    for (var i = 0; i < songList.songs.length; i++) {
      var currentSong = songList.songs[i];
      $("#rightColumn")
    }




  $.ajax({
    url: "data/songs.json"
  }).done(functionIWantToExecute);
    // When you tell jQuery to read a file via the ajax method
    // it reads the contents, and then executes whatever function
    // that you specify here in the done() method, and passes in
    // the contents of the file as the first argument.
    console.log("the contents of songs.json");
    console.log(contentsOfTheFile);
  });

});