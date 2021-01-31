const fileHelper = require('./fileHelpers');

const results = fileHelper.readJsonFiles('./src/data/stages');
fileHelper.writeJsonFile('./dist/stages.json', results);
