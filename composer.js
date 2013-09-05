var parser = require('./hyper-parser');

module.exports = function(obj, httpClient) {
	return parser(obj, function(link) {
		if(!link.href) throw 'link has no href';

		httpClient({ method: 'GET', href: link.href });
	});
};
