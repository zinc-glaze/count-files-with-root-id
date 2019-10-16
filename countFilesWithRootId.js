const fs = require('fs');

//create file to receive count data
try {
    fs.writeFileSync('file_count.txt', '');
} catch (e) {
    console.log("Cannot write file ", e);
}

//load root ids into array
let rootIds = fs.readFileSync(`${__dirname}/root_ids.txt`, 'utf8').trim().split(',');
//load file ids into array
let fileIds = fs.readFileSync(`${__dirname}/file_ids.txt`, 'utf8').trim().split(',');

console.log('Total root IDs:', rootIds.length);
console.log('Total file IDs:', fileIds.length);

//iterate through root ids
for (let i in rootIds) {
    let fileCounter = 0;
    let currentRootId = rootIds[i];
    //iterate through file ids and count instances of root id
    for (let i in fileIds) {
        if (fileIds[i].includes(currentRootId)){
            fileCounter += 1;
        }
    }
    try {
        fs.appendFileSync('file_count.txt', `${fileCounter}\r\n`);
    } catch (e) {
        console.log("Cannot write file ", e);
    }
}
console.log('Finished! Check generated file \'file_count.txt\' for counts.');
