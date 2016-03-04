    'use strict'
    // include the Lo-Dash library
    var _ = require("lodash");

    var worker = function(coll) {

        var average = _.reduce(coll,
            function(acc, entry) {return entry.income + acc;},
            0)
            /_.size(coll);

        var underachievers = _.chain(coll).
            filter(function(worker) {
                return worker.income <= average;}).
            sortBy('income');

        var overachievers = _.chain(coll).
            filter(function(worker) {
                return worker.income > average;}).
            sortBy('income');
        
        return {'average':average,
                'underperform': underachievers,
                'overperform': overachievers};
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;
