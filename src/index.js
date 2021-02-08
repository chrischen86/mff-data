const fileHelper = require('./fileHelpers');
const destination = './dist';
const staticApiData = [
  {
    input: './src/data/stages',
    output: `./${destination}/stages.json`,
    destination: `./${destination}/stages`,
  },
  {
    input: './src/data/characters',
    output: `./${destination}/characters.json`,
    destination: `./${destination}/characters`,
  },
];

staticApiData.forEach(({ input, output, destination }) => {
  const results = fileHelper.readJsonFiles(input);
  fileHelper.writeJsonFile(output, results);

  fileHelper.copyJsonFiles(input, destination);
});
