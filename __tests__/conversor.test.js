const { converterPontos } = require('../public/utils/conversor');

describe('converterPontos', () => {
  test('converte valores positivos', () => {
    expect(converterPontos(5)).toBe(50);
    expect(converterPontos(1)).toBe(10);
  });

  test('retorna 0 para 0', () => {
    expect(converterPontos(0)).toBe(0);
  });

  test('retorna 0 para negativos', () => {
    expect(converterPontos(-3)).toBe(0);
  });
});
