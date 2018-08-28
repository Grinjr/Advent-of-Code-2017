var prompt = require('prompt');

var output = 0;
prompt.start();
prompt.get('input', function(err, result) {
	for (var i = 0, len = result.input.length; i < len; i++) {
		var nexti = i + (len/2) - (Math.floor((1/len)*(i+(len/2)))*len);
		if (result.input.charAt(i) == result.input.charAt(nexti)) {
			output += parseInt(result.input.charAt(i));
		}
	}
	console.log("\nYour solution is: " + output);
});
