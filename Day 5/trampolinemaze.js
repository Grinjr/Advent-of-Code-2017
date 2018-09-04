var fs = require('fs');
var input = 'input.txt';

var jumps = fs.readFileSync(input).toString().split("\n");
var steps = 0;
var curStep = 0;

while (curStep < jumps.length) {
	var i = curStep;
	curStep += parseInt(jumps[i]);
	jumps[i] = parseInt(jumps[i]) + 1;

	steps++;
}

console.log("Reached the end of the maze in " + steps + " steps!");
