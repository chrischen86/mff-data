const fs = require('fs-extra');

module.exports = {
  readJsonFiles: function (dirname) {
    const directory = fs.readdirSync(dirname);
    const jsonArray = [];
    directory.forEach((jsonFile) => {
      const contents = fs.readFileSync(`${dirname}/${jsonFile}`, 'utf-8');
      const json = JSON.parse(contents);
      jsonArray.push(json);
    });

    return jsonArray;
  },
  writeJsonFile: function (destination, json) {
    const jsonString = JSON.stringify(json);
    fs.outputFileSync(destination, jsonString);
  },
  copyJsonFiles: function (source, destination) {
    fs.copySync(source, destination);
  },
};
