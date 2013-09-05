var composer = require('./src/composer');
var obj = { 
	_links: { foo : { href: 'foo'}},
	sub: { _links : { bar: { href: 'bar'}}}
};
var res = composer(obj, console.log);
res.foo();
res.sub.bar();