const fs = require('fs');


// Custom Promise
const writeFIle = fileContent => {
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

const copyFile = (fileName) => {
  return new promises((resolve, reject) => {
    fs.copyFile(fileName, '/distindex.html', err => {
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