var parser = require('./hyper-parser');
var obj = { 
	_links: { foo : { href: 'foo'}},
	sub: { _links : { bar: { href: 'bar'}}}
};
var res = parser(obj);
res.foo(console.log);
res.sub.bar(console.log);