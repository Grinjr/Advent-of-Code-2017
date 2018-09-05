var prompt = require('prompt');


var steps = 0;
var stepsToDetection = 0;
var encounteredBlocks = [];
var detectedLoop = '';
encounteredBlocks[0] = [];
prompt.start();
prompt.get([{name: 'input', required: true}], function(err, result) {
	var blocks = result.input.toString().split("	").map(x => parseInt(x));
	while (!detectLoop(blocks)) {
		encounteredBlocks[steps] = [];
		var highestBlock = 0;
		for (b in blocks) {
			//process.stdout.write(blocks[b] + "	");
			encounteredBlocks[steps][b] = blocks[b];
			if (blocks[b] > blocks[highestBlock]) {
				highestBlock = parseInt(b);
			}
		}
		//process.stdout.write("\n");
		
		for (var i = 0, max = blocks[highestBlock], s = highestBlock + 1, len = blocks.length; i < max; i++, s++) {
			if (s > (len - 1)) {
				s = 0;
			}
			blocks[s]++;
			blocks[highestBlock]--;
		}
		//blocks[highestBlock] = blocks[highestBlock] % (blocks.length - 1);

		steps++;
		if (steps % 1000 == 0) {
			console.log(steps + " steps completed...");
		}
	}

});

function detectLoop(blocks) {
	if (detectedLoop == '') {
		for (i in encounteredBlocks) {
			if (blocks.toString() == encounteredBlocks[i].toString()) { //this seems so crude... and slow
				detectedLoop = blocks.toString();
				console.log("Detected loop in " + steps + " steps!");
				stepsToDetection = steps;
			}
		}
	}
	else if (blocks.toString() == detectedLoop) {
		console.log("Detected loop again in " + (steps-stepsToDetection) + " more steps!");
		return true;
	}
	
	return false;
}