define(["jquery", "refresh", "add-to-select"], function($, refresh, addToSelect) {
	

			// this returns an object that has two keys: goGetData, and giveToSelect....whose values are both functions.
			// call the key to initiate the function
		return {
				goGetData: function(data) {
					refresh.getMeData(data);
				},
				giveToSelect: function(data) {
					addToSelect.populateSelect(data);
				}
		};
});




				  
			







					




