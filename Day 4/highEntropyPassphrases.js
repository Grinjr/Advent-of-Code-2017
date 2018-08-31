var fs = require('fs');
var input = 'input.txt';

var lines = fs.readFileSync(input).toString().split("\n");
var validPhrases = 0;

for (l in lines) {
	var items = lines[l].toString().replace("\r", "").split(" ");
	var validPhrase = true;
	for (i in items) {
		for (var c = i; c < items.length; c++) { //repetitive I know, and a bit dirty... Perhaps a better solution?
			if (items[i] === items[c] && i != c) {
				console.log(items[i], items[c], i, c, validPhrases);
				validPhrase = false;
			}
		}
	}
	if (validPhrase) {
		validPhrases++;
	}
}

console.log(validPhrases);
