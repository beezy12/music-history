define(["jquery"], function($) {
	
console.log("this is populate-songs");

		return {

			goGetData: function(callback) {
				$.ajax({
				    url: "https://glaring-fire-4247.firebaseio.com/.json"
				  
				}).done(callback);

			}

		};
});


