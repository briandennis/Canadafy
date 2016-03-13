var fs = require('fs');
var stream = require('stream');

var ogFileName = process.argv[2];
var outFileName = process.argv[3];

var readStream = fs.createReadStream( _dirname + ogFileName);
var writeStream = fs.createWriteStream(_dirname + outFileName);

readStream.pipe(writeStream);
