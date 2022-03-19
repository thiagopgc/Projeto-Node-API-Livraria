import express from "express";
import usuarioLivraria from "./Controller/controller-usuario.js";
import database from "./database/db-sqlite.js";,
import cors from "cors"
const app = express();
const porta = 3000;
app.use(express.json());

usuarioLivraria(app, database);

app.listen(porta, () => {
  console.log(`Servidor aberto na porta ${porta}.`);
});
