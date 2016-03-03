    'use strict'

    var _ = require("lodash");

    function isWarm(temp) {return temp > 19;};

    var worker = function(coll) {
    
	var retVal = {'hot':[],
		      'warm':[]};
	
	_.forEach(coll, function (temps, name) {
	    if (_.every(temps, isWarm))
		retVal.hot.push(name);
	    else if (_.some(temps, isWarm))
		retVal.warm.push(name);
	});
	
	return retVal;
    }
    
    // export the worker function as a nodejs module
    module.exports = worker;
