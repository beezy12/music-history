define(["jquery"], function($) {
	
console.log("this is add-to-select");

		return {

			getMeData: function(artist) {
		 	require(['hbs!../templates/artist-info-populator'], function(artistTemplate) {
				$("#music-info").append(artistTemplate(artist));
		 	});
		}
	};
});