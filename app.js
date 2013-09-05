var parser = require('./parser');
var obj = { 
	_links: { foo : { href: 'foo'}},
	sub: { _links : { bar: { href: 'bar'}}}
};
var res = parser(obj, console.log);
res.foo();
res.sub.bar();