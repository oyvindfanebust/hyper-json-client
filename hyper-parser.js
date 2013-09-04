var traverse = require('traverse');
module.exports = function(obj) {
	traverse(obj).forEach(function(o) {
		if(!o._links) return;
		
		Object.keys(o._links).forEach(function(key) {
			o[key] = function(callback) {
				callback(o._links[key].href);
			};
		});
	});
	return obj;
};