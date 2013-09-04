# Requirements

* Mocha

## Sketch

```javascript
	var client = require('hyper-json-client');
	client.load('http://root_url', {
		success: function(res) {
			//result contains 'foo' link
			res.foo({
				success: function(res){ console.log(res); }
			});
	}
	});
```
