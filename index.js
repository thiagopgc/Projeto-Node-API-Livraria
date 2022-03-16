import express from "express";

const app = express();
const porta = 3000;
app.use(express.json());

app.get("/usuario", (req, res) => {
  res.send("Rota get para usuário.");
});

app.listen(porta, () => {
  console.log(`Servidor aberto na porta ${porta}.`);
});
