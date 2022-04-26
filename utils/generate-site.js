const fs = require('fs');


// Custom Promise
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      else {
        resolve({
          ok: true,
          message: 'File created!'
        });
      }
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      }
      else {
        resolve({
          ok: true,
          message: 'File copied!'
        });
      }
    });
  });
};


module.exports = {
  writeFile: writeFile,
  copyFile: copyFile
};