define(["jquery", "refresh", "add-to-select"], function($, refresh, addToSelect) {
	
console.log("this is populate-songs");

		return {

			goGetData: function(data) {
				// $.ajax({
				//     url: "https://glaring-fire-4247.firebaseio.com/.json"
				// }).done(callback);
			console.log("data", data);

			refresh.getMeData(data);
			},


			giveToSelect: function(data) {
				console.log("data", data);
				addToSelect.populateSelect(data);
			}

			






		};
});




				  
