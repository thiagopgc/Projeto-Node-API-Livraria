import express from "express";
import usuarioLivraria from "./Controller/controller-usuario.js";
const app = express();
const porta = 3000;
app.use(express.json());

usuarioLivraria(app);

app.listen(porta, () => {
  console.log(`Servidor aberto na porta ${porta}.`);
});
