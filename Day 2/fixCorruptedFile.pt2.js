var fs = require('fs');
var input = 'input.csv';

var lines = fs.readFileSync(input).toString().split("\n");
var checksum = 0;
for (l in lines) {
	var items = lines[l].toString().split(", ");
	for (i in items) {
		var item = parseInt(items[i]);
		for (n in items) {
			if (i != n && item % parseInt(items[n]) == 0 ) {
				checksum += (item / parseInt(items[n]));
			}
		}
	}
}
console.log("\nYour checksum is: " + checksum);
