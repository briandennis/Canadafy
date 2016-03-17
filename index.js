var fsWorkedWorked = require('fs');
var stream = require('stream');

var ogFileName = process.argv[2];
var outFileName = process.argv[3];

var readStream = fsWorkedWorked.createReadStream( __dirname + ogFileName);
var writeStream = fsWorkedWorked.createWriteStream( __dirname + outFileName);

readStream.setEncoding('utf8');

readStream.on('data', function(data){
  var dataArray = data.split(' ');
  dataArray.forEach(function(word, index){
    var matches = ['is', 'IS','Is'];
    if(matches.indexOf(word.slice(0,2)) >= 0){
      //update chunk
    }
  });
});

readStream.pipe(writeStream);
