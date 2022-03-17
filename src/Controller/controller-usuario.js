import UsuarioModel from "../models/model-usuario.js";
import UsuarioDAO from "../DAO/usuarioDAO.js";

const usuarioLivraria = (app, bd) => {
  const usuarioDAO = new UsuarioDAO(bd);

  app.get("/usuario", (req, res) => {
    usuarioDAO
      .pegaTodosUsuarios()
      .then((resposta) => {
        res.json(resposta);
      })
      .catch((erro) => {
        res.json(erro);
      });
  });

  app.get("/usuario/email/:email", (req, res) => {
    const email = req.params.email;
    usuarioDAO
      .filtrarUsuario(email)
      .then((resposta) => {
        res.json(resposta);
      })
      .catch((erro) => {
        res.json(erro);
      });
  });

  app.post("/usuario", (req, res) => {
    // Recebe o corpo da requisição
    const body = req.body;

    // Como temos validações na nossa model, usamos o try/catch
    // para pegar esse erro e enviar como mensagem para nosso cliente
    try {
      // cria uma instancia de Usuario com validação dos dados
      // apartir do corpo que foi recebido
      const novoUsuario = new UsuarioModel(
        body.nome,
        body.email,
        body.telefone,
        body.endereco,
        body.senha
      );

      // insere a instância do usuario no banco de dados
      usuarioDAO
        .insereUsuario(novoUsuario)
        .then((resposta) => {
          res.json(resposta);
        })
        .catch((erro) => {
          res.json(erro);
        });
    } catch (error) {
      // Envia o erro, caso exista
      res.json({
        msg: error.message,
        erro: true,
      });
    }
  });
};

export default usuarioLivraria;
