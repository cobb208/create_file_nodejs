const fs = require('fs');
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let fileName = '';
let fileContents = '';

readline.question('What is the filename? ', fName => {
	fileName = fName + '.txt';
	readline.question('What are the file contents? ', fContents => {
		fileContents = fContents;
		readline.close();
		fs.writeFile(fileName, fileContents, err => {
			if(err) throw err;
			console.log(`${fileName} has been made!`);
		});
	});
});
