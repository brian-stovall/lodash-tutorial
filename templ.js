    'use strict'

    const _ = require("lodash");

    const worker = function(coll) {
    
    return _.template('Hello <%= name %> (logins: <%= logins %>)')
                     ({name: coll.name,
                       logins: _.size(coll.login)});
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;
