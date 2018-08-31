var fs = require('fs');
var input = 'input.txt';

var lines = fs.readFileSync(input).toString().split("\n");
var validPhrases = 0;

function checkAnagram (word1, word2) {
	var sortedWord1 = word1.split("").sort().join("");
	var sortedWord2 = word2.split("").sort().join("");
	
	return (sortedWord1 == sortedWord2);
}

for (l in lines) {
	var items = lines[l].toString().replace("\r", "").split(" ");
	var validPhrase = true;
	for (i in items) {
		for (var c = i; c < items.length; c++) { //repetitive I know, and a bit dirty... Perhaps a better solution?
			if ((items[i] === items[c] || checkAnagram(items[i], items[c])) && i != c) {
				validPhrase = false;
			}
		}
	}
	if (validPhrase) {
		validPhrases++;
	}
}

console.log("Valid phrases: " + validPhrases);