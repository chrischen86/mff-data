const fileHelper = require('./fileHelpers');
const destination = './dist';
const staticApiData = [
  {
    input: './src/data/stages',
    output: `./${destination}/stages.json`,
  },
  {
    input: './src/data/characters',
    output: `./${destination}/characters.json`,
  },
];

staticApiData.forEach(({ input, output }) => {
  const results = fileHelper.readJsonFiles(input);
  fileHelper.writeJsonFile(output, results);
});
