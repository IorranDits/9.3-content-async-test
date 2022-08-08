require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('testando função que captura ID',async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toEqual('Spider Man');
  });
});