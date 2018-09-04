var fs = require('fs');
var input = 'input.txt';

var jumps = fs.readFileSync(input).toString().split("\n");
var steps = 0;
var curStep = 0;

while (curStep < jumps.length) {
	var i = curStep;
	var jumpVal = parseInt(jumps[i]);
	curStep += jumpVal;
	if (jumpVal >= 3) {
		jumps[i] = jumpVal - 1;
	}
	else {
		jumps[i] = jumpVal + 1;
	}

	steps++;
}

console.log("Reached the end of the maze in " + steps + " steps!");