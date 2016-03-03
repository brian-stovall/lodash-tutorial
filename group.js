    'use strict'
// include the Lo-Dash library
    var _ = require("lodash");
    
    var worker = function(coll) {
	return _.chain(coll)
	    .groupBy('username')
	    .map(function(comments, name) {
		return {'username' : name,
			'comment_count' : _.size(comments)}})
	    .sortBy('comment_count') //sorts low to high, 
	    .reverse();              //so reverse it
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;
