var assert = require('assert');
var parser = require('../hyper-parser');

describe('When parsing a single level hyper+json object', function() {
	it('creates function with callback containing link', function() {
		var result = parser({ _links: { foo : { href: 'foo'}}});
		var href;
		result.foo(function(h) {
			href = h;
		});
		assert.equal(href, 'foo');
	});
});

describe('When parsing a two level hyper+json object', function() {
	it('creates function with callback containing link', function() {
		var obj = { 
			_links: { foo : { href: 'foo'}},
			sub: { _links : { bar: { href: 'bar'}}}
		};
		var result = parser(obj);
		var href;
		result.sub.bar(function(h) {
			href = h;
		});
		assert.equal(href, 'bar');
	});
});