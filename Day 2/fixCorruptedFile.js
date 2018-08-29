var fs = require('fs');
var input = 'input.csv';

var lines = fs.readFileSync(input).toString().split("\n");
var checksum = 0;
for (l in lines) {
	var items = lines[l].toString().split(", ");
	var min = '';
	var max = '';
	for (i in items) {
		var item = parseInt(items[i]);
		if (item > max || max == '') {
			max = item;
		}
		if (item < min || min == '') {
			min = item;
		}
	}
	if (!isNaN(max) && !isNaN(min)) {
		checksum += max-min;
		console.log("Max: " + max, "Min: " + min, "Diff: " + (max-min));
		console.log("-----------------------------");
	}
}
console.log("\nYour checksum is: " + checksum);
