const fs = require('fs-extra');

module.exports = {
  readJsonFiles: function (dirname) {
    const directory = fs.readdirSync(dirname);
    let jsonArray = [];
    directory.forEach((jsonFile) => {
      const contents = fs.readFileSync(`${dirname}/${jsonFile}`, 'utf-8');
      const json = JSON.parse(contents);
      if (Array.isArray(json)) {
        jsonArray = [...jsonArray, ...json];
      } else {
        jsonArray = [...jsonArray, json];
      }
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
