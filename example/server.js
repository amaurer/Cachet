var express = require('express');
var app = express.createServer();
var cachet = require('../lib/cachet.js');

	app.get('/', function(req, res){

		var startTime = new Date().getTime();
		var s = '';

		s += 'Is it Cached? : ' + cachet.isCache('coolCachedOjbect') + '<br/>'
		
		if(!cachet.isCache('coolCachedOjbect')){
			var a = [];
			for (var i = 0; i < 10000; i++) {
				a.push({
					dude : (i%2)
				});
			};

			s += 'Now it is...<br/>';
			cachet.setCache('coolCachedOjbect', a, .01);
		};

		s += 'Current Time : ' + new Date() + '<br/>'
		s += 'Expires Time : ' + new Date(cachet.getCache('coolCachedOjbect').duration) + '<br/>'
		s += 'Process Time : ' + (new Date().getTime() - startTime) + '<br/>'

		res.send(s);

	});

	app.listen(3000);