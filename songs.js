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



for (i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace("@", "");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace("!", "");
	songs[i] = songs[i].replace(/>/g, "-");
	songs[i] = songs[i].replace(/on the album/g, " - ");
	

	dash = songs[i].indexOf("-");
	// console.log("index of dash", dash);
	if (dash !== -1) {
		currentSongs[i] = songs[i].slice(dash + 1);
		songs[i] = songs[i].slice(0, dash);
	} 

	console.log("Songs[i]", songs[i]);
    console.log("currentSongs", currentSongs[i]);

    output += "<div>" + songs[i] + " " + currentSongs[i] + "</div>";
}

console.log("Added these songs: ", songs);

mine.innerHTML = output;