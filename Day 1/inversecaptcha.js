var prompt = require('prompt');

var output = 0;
prompt.start();
prompt.get('input', function(err, result) {
	for (var i = 0; i < result.input.length; i++) {
		if ((result.input.charAt(i + 1) != '' && result.input.charAt(i) == result.input.charAt(i + 1)) || (result.input.charAt(i+1) == '' && result.input.charAt(0) == result.input.charAt(i))) {
			output += parseInt(result.input.charAt(i));
		}
	}
	console.log("\nYour solution is: " + output);
});
