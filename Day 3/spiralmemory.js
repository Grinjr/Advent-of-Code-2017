var prompt = require('prompt');

var steps = 0;
prompt.start();
prompt.get([{name: 'input', required: true, type: 'integer'}], function(err, result) {
	var dir = 0; //0 = right, 1 = up, 2 = left, 3 = down - moving spiral clockwise
	var x = 0;
	var y = 0;
	var targetStep = 1;
	var curStep = 0;
	var addToTarget = false;
	for (i = 1; i < result.input; i++) {
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
		coords[x, y] = i;

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
	steps = Math.abs(x) + Math.abs(y);
	console.log(steps);
});
