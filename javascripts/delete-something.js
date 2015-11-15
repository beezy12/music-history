define(["jquery", "populate-songs", "refresh", "add-to-select"], 
	function($, populateSongs, refresh, addToSelect) {

	console.log("this is delete-something");	

	return {
				//deleteForGood is the key, and function is its' value.
		deleteForGood: function(songKey) {

				$.ajax({
		  			url: "https://glaring-fire-4247.firebaseio.com/songs/" + songKey + "/.json",
		  			method: "DELETE"
					}).done(function() {
		  			console.log("Yay, it deleted!");


		  			//clears everything out of both of these divs 
		  			$("#songBox").empty();
					$("#music-info").empty();

					// and these two repopulate everything in those two divs with the updated firebase info
					populateSongs.goGetData(refresh.getMeData);
					populateSongs.goGetData(addToSelect.getMeData);
				});
		}
	};
				   
});

				// PROMISE

// define(["jquery", "populate-songs", "refresh", "add-to-select", "q"], 
// 	function($, populateSongs, refresh, addToSelect, Q) {

// 		var deferred = Q.defer();

// 	return {
// 				//deleteForGood is the key, and function is its' value.
// 		deleteForGood: function(songKey) {

// 				$.ajax({
// 		  			url: "https://glaring-fire-4247.firebaseio.com/songs/" + songKey + "/.json",
// 		  			// method: "DELETE"
// 					}).done(function(???) {
// 		  				deferred.resolve(???);
// 		  			}).fail(function(xhr, status, error) {
//               			deferred.reject(error);
//             		});




// 		  			//clears everything out of both of these divs 
// 		  			$("#songBox").empty();
// 					$("#music-info").empty();

// 					// and these two repopulate everything in those two divs with the updated firebase info
// 					populateSongs.goGetData(refresh.getMeData);
// 					populateSongs.goGetData(addToSelect.getMeData);


					
//             		return deferred.promise;

//             		fn(books);
// 				});
// 		}
// 	};
				   
// });		


// define(["jquery", "q"], function($, Q) {

//   var deferred = Q.defer();
//   console.log("dog power")

//   return {

// // This function does one thing, and returns a promise

//     load: function(fn) {
      
//         $.ajax({url: "https://nss-book-store.firebaseio.com/books.json"})
//             .done(function(books) {
//               deferred.resolve(books);
//             }).fail(function(xhr, status, error) {
//               deferred.reject(error);
//             });

//             return deferred.promise;

//             fn(books);
        

//         }     
//     }
// });




