var traverse = require('traverse');
var _ = require('underscore');

module.exports = function(obj) {
	traverse(obj).forEach(function(o) {
		if(!o._links) return;
		
		_.each(o._links, function(value, key) {
			o[key] = function(callback) {
				callback(o._links[key].href);
			};
		});
	});
	return obj;
};