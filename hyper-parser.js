var traverse = require('traverse');
var _ = require('underscore');

module.exports = function(obj, callback) {
	traverse(obj).forEach(function(o) {
		if(!o._links) return;
		
		_.each(o._links, function(value, key) {
			o[key] = function() {
				return callback(o._links[key]);
			};
		});
	});
	return obj;
};