import express from "express";
import usuarioLivraria from "./Controller/controller-usuario.js";
import database from "./database/db-sqlite.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
usuarioLivraria(app, database);
