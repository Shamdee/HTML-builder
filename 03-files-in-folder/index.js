const fs = require('fs');
const path = require('path');
const secretFolder = path.join(__dirname, 'secret-folder');

function result(name, size, ext){
  console.log(`${name} - ${ext} - ${size}`);
}

const filesName = fs.readdirSync(secretFolder,{withFileTypes: true});
filesName.forEach(function(item) {
  if (item.isFile()){
    let fileName = item.name.split('.')[0];
    let extName = item.name.split('.')[1];

    fs.stat(path.join(__dirname, 'secret-folder', item.name), (err, stats) => {
      let size = (stats['size']);
      result (fileName, size, extName);
    });
  }
});
