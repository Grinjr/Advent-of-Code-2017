var prompt = require('prompt');
var bigInt = require("big-integer");

var coords = [];
coords[-1] = []; // This line is required to use negative indexes.
var steps = 0;

var input = 0;
prompt.start();
prompt.get([{name: 'input', required: true, type: 'integer'}], function(err, result) {
	input = result.input;
	for (i = Math.ceil(-Math.sqrt(input)/2); i <= Math.ceil(Math.sqrt(input)/2); i++) {
		coords[i] = [];
	}
	coords[0][0] = "1";
	var dir = 0; //0 = right, 1 = up, 2 = left, 3 = down - moving spiral clockwise
	var x = 0;
	var y = 0;
	var targetStep = 1;
	var curStep = 0;
	//var maxVal = "0";
	var answer = 0;
	for (i = 1; i < input; i++) {
		curStep++;
		switch(dir) {
			case 0:
				x++;
				break;
			case 1:
				y++;
				break;
			case 2:
				x--;
				break;
			case 3:
				y--;
				break;
			default:
				console.log("ERROR WTF");
				return;
		}
		val = "0";
		for (a = -1; a <= 1; a++) {
				for (b = -1; b <= 1; b++) {
				if (a != 0 || b != 0) {
					if ((typeof coords[x+a] !== 'undefined' && coords[x+a]) && (typeof coords[x+a][y+b] != 'undefined' && coords[x+a][y+b])) {
						val = bigInt(val).plus(coords[x+a][y+b]).toString();
						//console.log(val);
					}
				}
			}
		}
		if (bigInt(val).notEquals(0)) {
			//console.log(val);
		}
		coords[x][y] = val;
		if (bigInt(val).gt(input)) {
			answer = val;
			break;
		}

		if (curStep >= targetStep) {
			dir++;
			curStep = 0;
			if (dir > 3) {
				dir = 0;
			}
			if (dir == 0 || dir == 2) {
				targetStep++;
			}
		}
	}
	console.log("--------");
	steps = Math.abs(x) + Math.abs(y);
	if (input <= 196) { // Max input to prevent overflowing the command prompt. Lets be reasonable here.
		for (b = Math.ceil(Math.sqrt(input)/2); b >= Math.floor(-Math.sqrt(input)/2); b--) {
			var val = "";
			for (a = Math.floor(-Math.sqrt(input)/2); a <= Math.ceil(Math.sqrt(input)/2); a++) {
				if ((typeof coords[a] !== 'undefined' && coords[a]) && (typeof coords[a][b] != 'undefined' && coords[a][b])) {
					val += coords[a][b] + "	";
				}
				else {
					val += "	";
				}
			}
			console.log("\n" + val + "\n");
		}
	}
	console.log("\n\nAnswer: " + answer);
});