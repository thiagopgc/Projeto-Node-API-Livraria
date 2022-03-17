import UsuarioModel from "../models/model-usuario.js";

const usuarioLivraria = (app) => {
  app.get("/usuario", (req, res) => {
    const usuario = new UsuarioModel(
      "Thiago",
      "thiago@gmail.com",
      "(21)991232998",
      "Rua Damião de Gois, Campo Grande, RJ",
      "123456"
    );
    res.json({
      usuario: usuario,
    });
  });
};

export default usuarioLivraria;
