// readfiles-async.js
const fs = require('fs');

fs.readdir('.', (err, files) => {
    console.log(files);
    console.log('Read dir - Done');
    fs.readFile(files[0], 'utf8', (fileErr, content) => {
      console.log('Read file - Done');
      console.log('---', files[0], '---');
      console.log(content);
    });
    console.log('Read file - Started');
  });