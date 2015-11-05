define(["jquery"], function($) {
	
console.log("this is populate-songs");

		return {

			goGetData: function(callback) {
				$.ajax({
				    url: "data/songs.json"
				}).done(callback);

			}

		};
});


