const fs = require('fs');
const transformStream = require('stream')

const fileStream = fs.createReadStream(__dirname + '/ xyz.txt' );

let outputStream = process.stdout;

// writeable stream pipe 
fileStream.pipe(outputStream);