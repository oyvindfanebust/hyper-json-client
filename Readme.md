# Requirements

* Mocha

## Sketch

```javascript
	var client = require('hyper-json-client');
	client.load('http://root_url').then(function(result) {
	    result.resource.foo().then(function(result) {
	        console.log(result.status);
	        console.log(result.resource);
	    });
	});
```
