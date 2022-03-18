class UsuarioDAO {
  constructor(db) {
    this.db = db;
  }

  pegarTodosUsuarios = () => {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM USUARIOS", (error, rows) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows);
        }
      });
    });
  };

  filtrarUsuario = (email) => {
    return new Promise((resolve, reject) => {
      this.db.all(
        "SELECT * FROM USUARIOS WHERE EMAIL = 'thiagopereira@yahoo.com'",
        email,
        (error, rows) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              usuario: rows,
              erro: false,
            });
          }
        }
      );
    });
  };
  inserirUsuario = (novoUsuario) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "INSERT INTO USUARIOS(NOME, EMAIL, TELEFONE, ENDERECO, SENHA) VALUES (?, ?, ?, ?, ?)",
        novoUsuario.nome,
        novoUsuario.email,
        novoUsuario.telefone,
        novoUsuario.endereco,
        novoUsuario.senha,
        (error) => {
          if (error) {
            reject(error);
          } else {
            resolve(`Usuário ${novoUsuario.nome} inserido.`);
          }
        }
      );
    });
  };

  deletarUsuario = (id) => {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM USUARIOS WHERE ID = ?", id, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            usuario: `Usuario de id ${id} deletado.`,
            erro: false,
          });
        }
      });
    });
  };

  atualizarUsuario = (id, usuario) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "UPDATE USUARIOS SET NOME = ?, EMAIL = ?, TELEFONE = ?, ENDERECO = ?, SENHA = ? WHERE ID = ?",
        usuario.nome,
        usuario.email,
        usuario.telefone,
        usuario.endereco,
        usuario.senha,
        id,
        (error) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              mensagem: `Usuario de id ${id} atualizado.`,
              usuario: usuario,
              erro: false,
            });
          }
        }
      );
    });
  };
}

export default UsuarioDAO;
