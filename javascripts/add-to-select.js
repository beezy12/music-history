define(["jquery"], function($) {
	
console.log("this is populate-songs");

		return {

			populateField: function(artist) {
		 	require(['hbs!../templates/artist-info-populator'], function(artistTemplate) {
				$("#music-info").append(artistTemplate(artist));
		 	});
		}
	};
});