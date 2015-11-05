requirejs.config({
	baseUrl: "./javascripts",  

	shim : {
        bootstrapJs : {
            deps : [ 'jquery'],       // **** this insures that jquery is always loaded before bootstrap. VERY IMPORTANT.
            exports: 'Bootstrap'
        }
    },

	paths:{
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"bootstrapJs": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",   // notice no .js on any of these
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs"
	}
});






require(["bootstrapJs", "songs"],    // always need these    // bootstrapJS here is loading the bootstrap javascript
	function(bootstrap, songs) { 


		// first.goGetData(populateSongs);    // this is from Steve's notes....it's not correct here....but I have pictures.

		// populateSongs.goGetData(imCallingYou);

		
	console.log("hello? can you hear me?");
});




