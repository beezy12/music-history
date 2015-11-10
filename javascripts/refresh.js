define(["jquery"], function($) {
	
console.log("this is populate-songs");

		return {

			getMeData: function(songList) {
			require(['hbs!../templates/songs'], function(songTemplate) {
				$("#songBox").append(songTemplate(songList));
			});
		}
	};
});