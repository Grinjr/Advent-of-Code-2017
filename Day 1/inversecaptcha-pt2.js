var prompt = require('prompt');

var output = 0;
prompt.start();
prompt.get('input', function(err, result) {
	for (var i = 0; i < result.input.length; i++) {
		var nexti = i + (result.input.length/2) - (Math.floor((1/result.input.length)*(i+(result.input.length/2)))*result.input.length);
		if (result.input.charAt(i) == result.input.charAt(nexti)) {
			output += parseInt(result.input.charAt(i));
		}
	}
	console.log("\nYour solution is: " + output);
});