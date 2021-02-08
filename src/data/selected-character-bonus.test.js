const fileHelper = require('../fileHelpers');

test('dataset is valid', () => {
  const data = fileHelper.readJsonFiles('./src/data/selected-character-bonus');
  const chractersUsed = [...new Set(data.map((d) => d.characterId))];
  const charactersMetadata = fileHelper.readJsonFiles('./src/data/characters');
  const charactersList = charactersMetadata.map((c) => c.id);

  chractersUsed.forEach((c) => {
    expect(charactersList).toEqual(expect.arrayContaining([c]));
  });
});
