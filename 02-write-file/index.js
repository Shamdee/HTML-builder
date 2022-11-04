const path = require('path');
const fs = require('fs');
const { stdin, stdout, } = process;

stdout.write('Enter text\n');

stdin.on('data', data => {
  function writeFIle() {
    const dataStringified = data.toString();
    if (dataStringified.trim() === 'exit') {
      process.exit();
    }
    fs.appendFile(
      path.join(__dirname, 'text.txt'),
      dataStringified,
      (err ) => {
        if (err) throw err;
        console.log('Writing file ... done');
        console.log('Write another text or write "exit"');
      }
    );
  }
  writeFIle();
});

process.on('SIGINT', () => process.exit());
process.on('exit', () => stdout.write(' All Done!'));
