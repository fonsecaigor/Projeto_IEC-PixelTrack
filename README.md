# PixelTrack Dashboard - DevOps e Deploy Contínuo

Projeto completo para um painel interativo de eSports com:

* Conversão de pontos com lógica personalizada
* API mockada em JSON local
* CI/CD com GitHub Actions
* Monitoramento com Prometheus + Grafana + Loki
* Deploy Contínuo via Firebase Hosting

---

## 🧠 Estrutura do Projeto

```
project-root/
│
├── data/
│   └── jogadores.json # Dados mockados
│
├── docker/
│   ├── loki-config.yaml 
│   ├── prometheus.yml
│   ├── promtail-config.yaml
│
├── public/
│   ├── index.html         # Entrada principal
│   ├── index.js           # Lógica de montagem do dashboard
│
├── tests/
│   └── conversor.test.js  # Testes de conversão
│
├── .github/workflows/
│   └── ci.yml             # Pipeline CI
│
├── firebase.json          # Configuração de deploy
│
├── docer-compose.yml
│
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

![Testes](./prints/test.png)


![Testes](./prints/testcoverage.png)

---

## ⚙️ CI com GitHub Actions

Workflow CI (`.github/workflows/ci.yml`) executa:

* `npm ci`
* `npm test --coverage`

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

![Deploy Firebase](./prints/deployfirebase.png)

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

![Firebase Project](./prints/firebaseproject.png)
![Grafana Metrics](./prints/grafanametrics.png)
![Grafana Logs](./prints/grafanalogs.png)

---

## 📈 Funcionalidades Atuais

- Tabela dinâmica com ranking (baseado na pontuação)
- Conversão de pontos com lógica de negócio
- Gráfico de barras (Chart.js) comparando pontos originais e convertidos
- Dados carregados via `fetch()` de JSON estático mockado

![DashboardAPI](./prints/dashboardmock.png)

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

---

## 🚫 Problemas Conhecidos

* Monitoramento pode exigir reinicialização manual do `promtail`

---

## 📊 Próximos Passos

* Ordenação por vitórias e outras estatísticas
* Testes E2E com Cypress
* Integração com API real-time de partidas
* Alertas em tempo real no Grafana

---

## 📌 Código-Fonte Principal

Trechos principais do código-fonte do projeto:

### Código Conversor de Pontos

![conversor.js](./prints/codigo/conversorjs.jpg)

---

### Código Teste 

![conversor.test.js](./prints/codigo/conversortest.jpg)

---

### Código Index

![index.js](./prints/codigo/indexjs.jpg)

---

### Código Package

![package.json](./prints/codigo/packagejson.jpg)

---

### Fluxograma - Modelo de Ramificação

![fluxograma](./prints/codigo/fluxograma.png)

---


**Desenvolvido por:** Equipe PixelTrack