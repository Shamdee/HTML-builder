const fs = require('fs');
const path = require('path');

fs.access(path.join(__dirname, 'project-dist', 'bundle.css'), err => {
  if (!err) {
    fs.truncate(path.join(__dirname, 'project-dist', 'bundle.css'), err => {
      if(err) throw err;
    });
  }

});

fs.readdir(path.join(__dirname, 'styles'), {withFileTypes: true}, (err, files) => {
  if (err) throw err;
  files.forEach(item => {
    if(item.isFile() && path.extname(item.name) === '.css') {
      fs.readFile(path.join(__dirname, 'styles', (item.name)), 'utf-8', (err, data) => {
        if (err) throw err;
        fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), `${data} \n`, (err ) => {
          if (err) throw err;
        }
        );
      });
    }
  });
});

