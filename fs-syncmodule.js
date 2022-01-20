const {readFileSync, writeFileSync} = require('fs');

console.log("Start");
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/combination.txt', `${first} meets ${second} and they become friends!`);
//use { flag: 'a' } as the last input to append to the file instead of overwriting what is there
console.log(readFileSync('./content/combination.txt', 'utf8'));
console.log("Done with this task");
console.log("Starting the next one");