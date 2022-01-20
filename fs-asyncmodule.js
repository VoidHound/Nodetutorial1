const {readFile, writeFile} = require('fs');

console.log("start");
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
    
        const second = result; 
        writeFile('./content/combination.txt', 
            `${first} meets ${second} and they become asynchronous friends!`, 
            { flag: 'a'}, 
            (err, result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log('done with this task');
        });
    })
})
console.log('Starting the next task');

readFile('./content/combination.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
});