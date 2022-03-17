import sqlite3 from "sqlite3";
sqlite3.verbose();
import { dirname } from "path";
import { fileURLToPath } from "url";
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

const TABELA_USUARIOS = `
CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "TELEFONE" varchar (64),
    "ENDERECO" varchar (64),
    "SENHA" varchar(64)
  );`;

const ADD_USUARIOS = `
INSERT INTO USUARIOS (ID, NOME, EMAIL, TELEFONE, ENDERECO, SENHA)
VALUES 
    (1, 'Thiago Pereira', 'thiagopereira@yahoo.com','(21) 993456749','Rua general rangel, 459, Vila nova, RJ', '123456'),
    (2, 'Yago Moraes', 'yagomoraes@gmail.com','(21) 994567655','Rua mario queiroz, 785, Belfod roxo, RJ', '789123'),
    (3, 'Vanessa Reis', 'vanessareis@hotmail.com.br','(21) 996547538','Rua Dom sembastiao, 986, Olario, RJ', '456789'),
    (4, 'Wandberg de Lima', 'wandlima@bol.com','(21) 997548527','Rua professor andrade, 145, Curicica, RJ', '123987')
`;

function criarTabelaUsuarios() {
  db.run(TABELA_USUARIOS, (error) => {
    if (error) console.log("Erro ao criar tabela de usuários");
  });
}

function popularTabelaUsuarios() {
  db.run(ADD_USUARIOS, (error) => {
    if (error) console.log("Erro ao popular tabela de usuários");
  });
}

db.serialize(() => {
  criarTabelaUsuarios();
  popularTabelaUsuarios();
});
