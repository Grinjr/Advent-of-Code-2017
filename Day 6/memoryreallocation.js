var prompt = require('prompt');


var steps = 0;
var encounteredBlocks = [];
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

	console.log("Detected loop in " + steps + " steps!");
});

function detectLoop(blocks) {
	for (i in encounteredBlocks) {
		if (blocks.toString() == encounteredBlocks[i].toString()) { //this seems so crude... and slow
			return true;
		}
	}
	return false;
}
