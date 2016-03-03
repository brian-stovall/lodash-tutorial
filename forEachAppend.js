// include the Lo-Dash library
    var _ = require("lodash");
    
    var worker = function(coll) {
	return _.forEach(coll, function (element) {
	    var pop = element.population;
	    if (pop > 1)
		element.size = 'big';
	    else if (pop > .5)
		element.size = 'med';
	    else
		element.size = 'small';
	});
    };
    
    
    // export the worker function as a nodejs module
    module.exports = worker;
