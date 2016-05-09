requirejs.config({
	baseUrl: "./javascripts",

	shim : {
        bootstrapJs : {
            deps : [ 'jquery'],       // **** this insures that jquery is always loaded before bootstrap. VERY IMPORTANT.
            exports: 'Bootstrap'
        },
        "firebase": {
        	exports: "Firebase"
        }
    },

	paths:{
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"bootstrapJs": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",   // notice no .js on any of these
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
		"lodash": "../lib/bower_components/lodash/lodash.min",
		"firebase": "../lib/bower_components/firebase/firebase",
		"q": "../lib/bower_components/q/q"
	}
});






require(["bootstrapJs", "songs"],
	function(bootstrap, songs) {


});










