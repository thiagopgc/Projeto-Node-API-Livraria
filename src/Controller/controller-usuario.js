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
};

export default usuarioLivraria;
