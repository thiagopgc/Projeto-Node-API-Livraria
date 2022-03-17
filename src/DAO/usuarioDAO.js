class UsuarioDAO {
  constructor(db) {
    this.db = db;
  }

  pegaTodosUsuarios = () => {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM USUARIOS", (error, rows) => {
        if (error) {
          reject({
            mensagem: error.message,
            erro: true,
          });
        } else {
          resolve({
            usuarios: rows,
            erro: false,
          });
        }
      });
    });
  };
}

export default UsuarioDAO;
