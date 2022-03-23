# Projeto-Node-API-Livraria 📚
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/thiagopgc/Projeto-Node-API-Livraria/blob/master/LICENSE)
 <p align="justify">Projeto de encerramento do módulo 4 da Resilia Educação. O objetivo é desenvolver uma API Rest com as informações dos usuarios da livraria. </p>

<img src="https://img.freepik.com/free-photo/library-with-books_1063-98.jpg?t=st=1648049737~exp=1648050337~hmac=30d59fc4569a801d1af5df9c1b959744e14a1d4a1cf9576d65211974eb7fe448&w=740" />

 ---

 ## Pré-requisitos 📘
 - <a href="https://nodejs.org/en/">Node.Js</a> - v. 16.13.2
 - <a href="https://expressjs.com/pt-br/">Express</a> - v. 4.17.3
 - <a href="https://www.npmjs.com/package/sqlite3">SQLite</a> - v. 5.0.0
 - <a href="https://nodemon.io/">Nodemon</a> - v. 2.0.15
 - <a href="https://www.npmjs.com/package/supertest"> Supertest</a> - v. 6.2.2
 
 ---

 ## Iniciando da aplicação 📖

 <p>Rode os comandos a seguir no terminal ou PoweShell.</p>
 
 - Clone o repositório:
```
git https://github.com/thiagopgc/Projeto-Node-API-Livraria.git
```
- Acesse a pasta:
```
cd ProjetoNodeAPILivraria
```
- Instale os pacotes necessários:
```
npm install
```
- Popule o banco de dados:
```
node ./src/database/tabela-usuario.js
```
- Inicie o servidor:
```
npm start ou npm run dev para usar o nodemon 
```
<p>Ao iniciar o projeto, o servidor será aberto em http://localhost:3000/, sendo 3000 a porta padrão. Caso necessário, a porta poderá ser alterada no arquivo server.js</p>

---
## Rotas HTTP 🗺️

### <b> GET /usuario </b>
Lista todos os usuarios da base de dados.
Exemplo da resposta esperada:

```
{
	"usuarios": [
		{
			"ID": 1,
			"NOME": "Thiago Pereira Gomes da Costa",
			"EMAIL": "thiagopereira@yahoo.com",
			"TELEFONE": "(21) 993456749",
			"ENDERECO": "Rua general rangel, 459, Vila nova, RJ",
			"SENHA": "123456"
		},
		{
			"ID": 2,
			"NOME": "Yago Moraes",
			"EMAIL": "yagomoraes@gmail.com",
			"TELEFONE": "(21) 994567655",
			"ENDERECO": "Rua mario queiroz, 785, Belfod roxo, RJ",
			"SENHA": "789123"
		},
		{
			"ID": 3,
			"NOME": "Vanessa Reis",
			"EMAIL": "vanessareis@hotmail.com.br",
			"TELEFONE": "(21) 996547538",
			"ENDERECO": "Rua Dom sembastiao, 986, Olario, RJ",
			"SENHA": "456789"
		},
		{
			"ID": 4,
			"NOME": "Wandberg de Lima",
			"EMAIL": "wandlima@bol.com",
			"TELEFONE": "(21) 997548527",
			"ENDERECO": "Rua professor andrade, 145, Curicica, RJ",
			"SENHA": "123987"
		},
		{
			"ID": 6,
			"NOME": "anderson pereira",
			"EMAIL": "anderson@yahoo.com.br",
			"TELEFONE": "(21) 994473873",
			"ENDERECO": "Rua damiao de gois, 485, Campo Grande, RJ",
			"SENHA": "354767"
		}
	],
	"erro": false
}

```

### <b> GET /usuario/id/{id} </b> 
Retorna o usuario de acordo com o id. Campo {id} deverá ser substituído pelo id do usuario escolhido.
Exemplo da resposta esperada:

```
{
	"usuario": [
		{
			"ID": 1,
			"NOME": "Thiago Pereira Gomes da Costa",
			"EMAIL": "thiagopereira@yahoo.com",
			"TELEFONE": "(21) 993456749",
			"ENDERECO": "Rua general rangel, 459, Vila nova, RJ",
			"SENHA": "123456"
		}
	],
	"erro": false
}
```
### <b> POST /usuario </b> 
Insere um novo usuario na base de dados. Campos <i>nome, email, telefone, endereco e senha</i> são obrigatórios e não podem ser enviados vazios. 
Modelo do schema a ser utilizado no body.

```
{"nome":"anderson pereira",
"email":"anderson@yahoo.com.br",
 "telefone":"(21) 994473873",
 "endereco": "Rua damiao de gois, 485, Campo Grande, RJ",
 "senha":"354767"
}
```
Exemplo da resposta esperada:
```
{
	"mensagem": "Usuário anderson pereira inserido.",
	"erro": false
}
```

### <b> PUT /usuario/id/{id} </b>
Atualiza um usuario na base de dados. Campo {id} deverá ser substituído pelo id do usuario a ser atualizado.
Modelo do schema a ser utilizado no body:
```
{
			"nome": "Thiago Pereira Gomes da Costa",
			"email": "thiagopereira@yahoo.com",
			"telefone": "(21) 993456749",
			"endereco": "Rua general rangel, 459, Vila velha, RJ",
			"senha": "123456"
}
```
Exemplo da resposta esperada:
```
{
	"mensagem": "Usuario de id 1 atualizado.",
	"usuario": {
		"nome": "Thiago Pereira Gomes da Costa",
		"email": "thiagopereira@yahoo.com",
		"telefone": "(21) 993456749",
		"endereco": "Rua general rangel, 459, Vila velha, RJ",
		"senha": "123456"
	},
	"erro": false
}
```

### <b> DELETE /usuario/id/{id} </b>
Deleta o usuario escolhido da base de dados. 
Exemplo da resposta esperada:
```
{
	"usuario": "Usuario de id 5 deletado.",
	"erro": false
}
```
---

## Testes 📕
Este projeto conta com um arquivo de testes para conferir o funcionamento das rotas da API. Para utilizá-lo, é necessário que o banco de dados esteja populado. Os testes podem ser rodados com o comando

```
npm run test
```
---

## Autor 📔

Thiago Pereira

[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thiago-pereira-46553b21a/)](https://www.linkedin.com/in/thiago-pereira-46553b21a/)
