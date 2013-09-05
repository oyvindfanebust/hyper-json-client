var assert = require('assert');
var sinon = require('sinon');
var composer = require('../src/composer');

describe('when calling regular link', function() {
	it('throws when href is not set', function() {
		var obj = { _links: { foo : { }}};
		var spy = sinon.spy();

		var res = composer(obj, spy);

		assert.throws(res.foo, /href/);
	});

	it('throws when href is empty', function() {
		var obj = { _links: { foo : { href: '' }}};
		var spy = sinon.spy();

		var res = composer(obj, spy);

		assert.throws(res.foo, /href/);
	});

	it('calls http with correct parameters', function() {
		var spy = sinon.spy();
		var obj = { _links: { foo : { href: 'http://foo.com/api/foo'}}};

		var res = composer(obj, spy);

		res.foo();

		var arg = spy.args[0][0];
		assert.equal(arg.method, 'GET');
		assert.equal(arg.href, 'http://foo.com/api/foo');
	});
});

// - replace placeholder with params 
// - get resulting href
describe('when calling templated link', function() {});

// - validate params
// - check method
// - (content type?)
// - make 'method' request
describe('when calling form', function() {});