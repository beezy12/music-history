requirejs.config({
	baseUrl: "../musichistory",    //
	paths:{
		"jquery": "/lib/bower_components/jquery/dist/jquery.min",
		"bootstrap": "/lib/bower_components/bootstrap/dist/js/bootstrap.min.js" 
	}
});

require(
	//dependencies   // file names without .js attached
	["SandwichMaker"], function(maker) {   // args have to match up one to one with dependencies


	}


);