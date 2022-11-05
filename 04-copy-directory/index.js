const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), {recursive: true}, (err) => {
  if (err) throw err;
});

fs.readdir(path.join(__dirname, 'files'), (err, files) => {
  if (err) throw err;
  files.forEach(item => {
    fs.copyFile(path.join(__dirname, 'files', item), path.join(__dirname, 'files-copy', item), err => {
      if (err) throw err;
    });
  });
});
