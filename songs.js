var songs = [];
var currentSongs = [];
var output = "";
var dash = "";
var mine = document.getElementById("rightColumn");



songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Don't Let Me Down > by The Beatles on the album Let It Be");
songs.unshift("Vogue > by Madonna on the album Im Dirty");


function songPopulator() {
	output = "";

for (i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace("@", "");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace("!", "");
	songs[i] = songs[i].replace(/>/g, "-");
	songs[i] = songs[i].replace(/on the album/g, " --- album: ");

	

	dash = songs[i].indexOf("-");
	// console.log("index of dash", dash);
	if (dash !== -1) {
		currentSongs[i] = songs[i].slice(dash + 1);
		songs[i] = songs[i].slice(0, dash);
	} 

	console.log("Songs[i]", songs[i]);
    console.log("currentSongs", currentSongs[i]);

    output += "<div class='spread-em'>" + songs[i] + "<br/>" + currentSongs[i] + "</div>";
}

console.log("Added these songs: ", songs);

mine.innerHTML = output;

}
// songcontainer.innerHTML = output;
songPopulator();



//this is where I added the content to switch between the two pages

var addMusic = document.getElementById("add-music");
var listMusic = document.getElementById("list-music");

var addButton = document.getElementById("add-button");

var bottomTwo = document.getElementById("bottom-half");
var musicDiv = document.getElementById("enter-music");



             //before I was saying click and then calling a function, but here I am doing it all in one place
addMusic.addEventListener("click", function(event) {
	bottomTwo.classList.add("magic");
	musicDiv.classList.remove("magic");
});


listMusic.addEventListener("click", function(event) {
	musicDiv.classList.add("magic");
	bottomTwo.classList.remove("magic");
});

  
addButton.addEventListener("click", function(event) {
	
	var songTotal = songInput.value + " by " + artistInput.value + " on the album " + albumInput.value;
	songs.push(songTotal);
	songPopulator();
});


var songInput = document.getElementById("song-grab");
var artistInput = document.getElementById("artist-grab");
var albumInput = document.getElementById("album-grab");






