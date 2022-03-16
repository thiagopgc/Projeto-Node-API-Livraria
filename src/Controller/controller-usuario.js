const usuarioLivraria = (app) => {
  app.get("/usuario", (req, res) => {
    res.send("Rota get para usuário.");
  });
};

export default usuarioLivraria;
