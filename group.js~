// include the Lo-Dash library
    var _ = require("lodash");
    
    var worker = function(coll) {
	return _.chain(coll)
	    .map(function(entry) {return entry + 'chained';})
	    .map(function(entry) {return entry.toUpperCase();})
	    .sort();
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;
