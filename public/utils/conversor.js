function converterPontos(score) {
  if (score < 0) return 0;
  return score * 10;
}

module.exports = { converterPontos };
