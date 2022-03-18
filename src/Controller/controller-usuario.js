import UsuarioModel from "../models/schema/model-usuario.js";
import UsuarioDAO from "../DAO/usuarioDAO.js";
import Usuario from "../models/usuario.js";

const usuarioLivraria = (app, bd) => {
  const cliente = new Usuario(bd);
  app.get("/usuario", async (req, res) => {
    try {
      const resposta = await cliente.pegarTodosUsuarios();
      res.status(200).json({
        usuarios: resposta,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        erro: true,
      });
    }
  });

  app.get("/usuario/email/:email", async (req, res) => {
    const email = req.params.email;

    res.json(await cliente.pegarmUsuario(email));
  });

  app.post("/usuario", async (req, res) => {
    const body = req.body;
    try {
      const resposta = await cliente.inserirUsuario(body);
      res.status(201).json({
        mensagem: resposta,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        erro: true,
      });
    }
  });

  app.delete("/usuario/id/:id", async (req, res) => {
    const id = req.params.id;

    res.json(await cliente.deletarUsuario(id));
  });

  app.put("/usuario/id/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    res.json(await cliente.atualizarUsuario(id, body));
  });
};

export default usuarioLivraria;
