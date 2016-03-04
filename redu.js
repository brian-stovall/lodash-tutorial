    'use strict'
    // include the Lo-Dash library
    var _ = require("lodash");

    function smartAdd (a, b) {
    //is a is undefined, just returns b, otherwise adds a and b
    	return (a) ? a+b : b;
    };
    
    var worker = function(coll) {
    //first change to a reasonable data format: an object
    //where the keys are the articles, and the values are
    //the total sold
    var reason = {};
    
    _.forEach(coll, function(entry) {
	console.log(entry.article);
	reason[entry.article]=smartAdd(reason[entry.article], entry.quantity);
    });

    //now use reduce to rebuild the 'ugly' format and sort it
    return _.chain(reason).
	reduce(function(acc, total_orders, article) {
	  return acc.concat({'article': Number(article),
	                     'total_orders':total_orders});
        }, []).
	sortBy('article').
	reverse();
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;
