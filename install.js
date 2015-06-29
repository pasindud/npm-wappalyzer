var request = require('request');
var path = require('path');
var fs = require('fs');

var appsJsonLatest = "https://raw.githubusercontent.com/AliasIO/Wappalyzer/master/src/apps.json";

// console.log(__dirname);

request(appsJsonLatest, function(error, response, body) {
		if (!error && response.statusCode == 200) {

			fs.writeFile(__dirname+"/apps.json", body   , function(err) {
			    if(err) {
			        return console.log(err);
			    }

			    console.log("Latest Apps.json Installed");
			});

		} else {
			console.log("Apps.json might not be the latest version");
		}
});


