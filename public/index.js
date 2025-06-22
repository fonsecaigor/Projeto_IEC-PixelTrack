function converterPontos(score) {
  if (score < 0) return 0;
  return score * 10;
}

function criarTabela(jogadores) {
  const tabela = document.createElement("table");
  tabela.innerHTML = `
    <thead>
      <tr>
        <th>Posição</th>
        <th>Nome</th>
        <th>Partidas</th>
        <th>Vitórias</th>
        <th>Pontos</th>
        <th>Pontuação Convertida</th>
      </tr>
    </thead>
    <tbody>
      ${jogadores
        .map(
          (j, index) => `
        <tr>
          <td>${index + 1}º</td>
          <td>${j.nome}</td>
          <td>${j.partidas}</td>
          <td>${j.vitorias}</td>
          <td>${j.pontos}</td>
          <td>${converterPontos(j.pontos)}</td>
        </tr>
      `
        )
        .join("")}
    </tbody>
  `;
  return tabela;
}

function criarGrafico(jogadores) {
  const ctx = document.getElementById("graficoPontos").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: jogadores.map((j) => j.nome),
      datasets: [
        {
          label: "Pontos",
          data: jogadores.map((j) => j.pontos),
          backgroundColor: "rgba(54, 162, 235, 0.6)",
        },
        {
          label: "Pontuação Convertida",
          data: jogadores.map((j) => converterPontos(j.pontos)),
          backgroundColor: "rgba(255, 99, 132, 0.6)",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function montarDashboard(jogadores) {
  const app = document.getElementById("app");
  app.innerHTML = "";
  const titulo = document.createElement("h1");
  titulo.textContent = "Dashboard PixelTrack - Ranking e Estatísticas";

  const jogadoresOrdenados = jogadores.sort((a, b) => b.pontos - a.pontos);

  app.appendChild(titulo);
  app.appendChild(criarTabela(jogadoresOrdenados));
  criarGrafico(jogadoresOrdenados);
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/jogadores")
    .then((res) => res.json())
    .then((data) => montarDashboard(data))
    .catch((err) => console.error("Erro ao carregar os dados:", err));
});
