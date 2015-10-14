var songs = [];
var output = "";
var mine = document.getElementById("rightColumn");

var dash = "";


songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Lady Madonna > by The Beatles on Let It Be");
songs.unshift("Vogue > by Madonna on the album Im Dirty");

// dash = songs[i].indexOf("-");
console.log("index of dash", dash);

/* if (dash !== -1) {

} */


for (i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace("@", "");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace("!", "");
	songs[i] = songs[i].replace(/>/g, "-");
	songs[i] = songs[i].replace(/on the album/g, " - ");
	output += "<div>";
	output += songs[i];
	output += "</div>";
}

console.log("Added these songs: ", songs);

mine.innerHTML = output;