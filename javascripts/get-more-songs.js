define(["jquery"], function($) {
	

		return {

			goGetData: function(callback) {
				$.ajax({
				    url: "data/songs.json"
						}).done(callback);
				
			}

		};
});