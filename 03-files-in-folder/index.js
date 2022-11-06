const fs = require('fs');
const path = require('path');
const secretFolder = path.join(__dirname, 'secret-folder');

fs.readdir(secretFolder,{withFileTypes: true}, (err, files) => {
  files.forEach(function(item) {
    if (item.isFile()){
      let fileName = item.name.split('.')[0];
      let extName = item.name.split('.')[1];

      fs.stat(path.join(__dirname, 'secret-folder', item.name), (err, stats) => {
        let size = (stats['size']);
        console.log(`${fileName} - ${extName} - ${size}`);
      });
    }
  });
});

