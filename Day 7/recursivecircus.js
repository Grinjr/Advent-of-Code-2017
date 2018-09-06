var fs = require('fs');
var input = 'input.txt';

var lines = fs.readFileSync(input).toString().split("\n");
var test = ['bob'];
var names = [];

// SCRATCH ALL THIS, redo all of this and convert to json, try working from there instead.

names.bob = 'wii u';
console.log(names[test[0]]);

for (l in lines) {
	if (names[lines[0]] != '') {
		names[lines[0]] = 
	}
	if (lines[3] == '->') {
	
	}
}
