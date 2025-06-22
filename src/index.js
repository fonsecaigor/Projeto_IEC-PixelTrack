const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

function converterPontos(score) {
  if (score < 0) return 0;
  return score * 10;
}

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, "../public")));

// API para retornar jogadores
app.get("/api/jogadores", (req, res) => {
  const rawData = fs.readFileSync(
    path.join(__dirname, "../data/jogadores.json")
  );
  const jogadores = JSON.parse(rawData);

  const resposta = jogadores.map((j) => ({
    ...j,
    pontuacaoConvertida: converterPontos(j.pontos),
  }));

  res.json(resposta);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
