var assert = require('assert');
var parser = require('../hyper-parser');

describe('parsing a hyper+json object', function() {
	it('sets function on object', function() {
		var obj = { _links: { foo : { href: 'http://foo.com/api/foo'}}};
		
		var result = parser(obj, function(url) {
			return url;
		});

		assert.equal(result.foo().href, 'http://foo.com/api/foo');
	});

	it('sets function on lower level object', function() {
		var obj = { 
			_links: { foo : { href: 'foo'}},
			sub: { _links : { bar: { href: 'http://foo.com/api/bar'}}}
		};
		
		var result = parser(obj, function(url) {
			return url;
		});

		assert.equal(result.sub.bar().href, 'http://foo.com/api/bar');
	});
});