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
  {
    input: './src/data/selected-character-bonus',
    output: `./${destination}/selectedcharacterbonus.json`,
    destination: `./${destination}/selectedcharacterbonus`,
  },
  {
    input: './src/data/fragments',
    output: `./${destination}/fragments.json`,
    destination: `./${destination}/fragments`,
  },
];

staticApiData.forEach(({ input, output, destination }) => {
  const results = fileHelper.readJsonFiles(input);
  fileHelper.writeJsonFile(output, results);

  fileHelper.copyJsonFiles(input, destination);
});
