const { getMagicCard } = require('../magic');
require('../../startest/mockSetup');

// jest.setTimeout(10000);

describe('1. Testes da função getMagicCard', () => {
  it('1.1 Verifique se getMagicCard é uma função.', async () => {
    console.log(typeof fetchCardById);
    const actual = await getMagicCard;
    expect(typeof actual).toEqual('function');
  });

  it('1.2 Verifique se a função fetch foi chamada.', async () => {
    await getMagicCard('130550');
    expect(fetch).toBeCalled();
  });

  it('1.3 Verifique se a função fetch foi chamada com o endpoint correto', async () => {
    const produto = '130550';
    const url = `https://api.magicthegathering.io/v1/cards/${produto}`;
    await getMagicCard('130550');
    expect(fetch).toBeCalledWith(url);
  });
});

describe('2. Testando o retorno da função getMagicCard', () => {
  it('2.1 Verifique se a carta retornada possui o nome Ancestor\'s Chosen.', async () => {
    const actual = await getMagicCard('130550');
    const response = 'Ancestor\'s Chosen';
    console.log(response);
    expect(actual.name).toBe(response);
  });
});