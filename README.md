# PixelTrack Dashboard - DevOps e Deploy Contínuo

Projeto completo para um painel interativo de eSports com:

* Dashboard dinâmico com tabela de ranking e gráfico de pontuação
* Conversão de pontos com lógica personalizada
* API mockada em JSON local
* CI/CD com GitHub Actions
* Monitoramento com Prometheus + Grafana + Loki
* Deploy Contínuo via Firebase Hosting

---

## 📚 Execução Local

A aplicação é baseada em HTML/CSS/JS puro. Para executar localmente:

```bash
cd public
npx http-server
```

Acesse via navegador: [http://localhost:8080](http://localhost:8080)

---

## 🧠 Estrutura do Projeto

```
project-root/
│
├── public/
│   ├── index.html         # Entrada principal
│   ├── index.js           # Lógica de montagem do dashboard
│   ├── data/
│   │   └── jogadores.json # Dados mockados
│   └── assets/            # (Opcional) imagens e ícones
│
├── tests/
│   └── conversor.test.js  # Testes de conversão
│
├── .github/workflows/
│   └── ci.yml             # Pipeline CI
│
├── firebase.json          # Configuração de deploy
└── README.md
```

---

## 🔧 Testes Automatizados com Jest

Os testes validam a lógica de conversão de pontos.

```bash
npm install
npm test
npm run test:coverage
```

### Resultado dos testes:

![Testes](./prints/testes.png)

---

## ⚙️ CI com GitHub Actions

Workflow CI (`.github/workflows/ci.yml`) executa:

* `npm ci`
* `npm test --coverage`

Disparado em push para `main`.

![CI GitHub Actions](./prints/ci-pipeline.png)

---

## 🚀 Deploy Contínuo com Firebase Hosting

### Configuração:

1. `firebase init hosting`
2. Autentique: `firebase login:ci`
3. Adicione no GitHub: `FIREBASE_TOKEN`

```yaml
uses: w9jds/firebase-action@v12.9.0
```

### Rollback:

```bash
firebase hosting:rollback
```

![Deploy Firebase](./prints/deploy-firebase.png)

---

## 🐳 Docker + Monitoramento

### Serviços:

* **Prometheus**: coleta métricas
* **Grafana**: dashboards de desempenho
* **Loki + Promtail**: logs da aplicação

```bash
docker-compose up
```

### Dashboards:

* Grafana: [http://localhost:3001](http://localhost:3001)
* Login padrão: `admin / admin`

![Grafana Metrics](./prints/grafana-metrics.png)
![Grafana Logs](./prints/grafana-logs.png)

---

## 📈 Funcionalidades Atuais

- Tabela dinâmica com ranking (baseado na pontuação)
- Conversão de pontos com lógica de negócio
- Gráfico de barras (Chart.js) comparando pontos originais e convertidos
- Dados carregados via `fetch()` de JSON estático mockado

---

## 📂 Git Flow e Boas Práticas

```plaintext
main
 └── dev
     ├── feature/estatisticas-jogador
     ├── feature/conversao-pontos
     └── fix/corrige-merge
```

### Comandos recomendados:

```bash
git checkout -b feature/nova-funcionalidade
git add .
git commit -m "feat: adiciona conversor de pontos"
git push origin feature/nova-funcionalidade
```

### Exemplo de commit:

```bash
git commit -m "feat: adiciona ranking de jogadores com gráfico"
```

![Git Flow](./prints/fluxo-git.png)

---

## 🚫 Problemas Conhecidos

* CORS ao tentar acessar JSON fora da pasta `public` com `http-server`
* Monitoramento pode exigir reinicialização manual do `promtail`

---

## 📊 Próximos Passos

* Ordenação por vitórias e outras estatísticas
* Testes E2E com Cypress
* Integração com API real-time de partidas
* Alertas em tempo real no Grafana

---

**Desenvolvido por:** Equipe PixelTrack