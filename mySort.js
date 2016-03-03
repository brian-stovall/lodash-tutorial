// include the Lo-Dash library
    var _ = require("lodash");
    
    var worker = function(coll) {
	return _.sortBy(coll, function (element) {return -element.quantity;});
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;
