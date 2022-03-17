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

  filtrarUsuario = (email) => {
    return new Promise((resolve, reject) => {
      this.db.all(
        "SELECT * FROM USUARIOS WHERE EMAIL = 'thiagopereira@yahoo.com'",
        email,
        (error, rows) => {
          if (error) {
            reject({
              mensagem: error.message,
              erro: true,
            });
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
      // Query com ? para evitar SQL Injection
      // NUNCA DEVEMOS USAR COM TEMPLATE STRING
      // Nós inserimos os dados a serem substituidos depois da query
      // Ou separado por vírgula (QUERY, a,b,c, callback)
      // Ou em um array (QUERY, [a,b,c] , callback)
      this.db.run(
        "INSERT INTO USUARIOS(NOME, EMAIL, TELEFONE, ENDERECO, SENHA) VALUES (?, ?, ?, ?, ?)",
        novoUsuario.nome,
        novoUsuario.email,
        novoUsuario.telefone,
        novoUsuario.endereco,
        novoUsuario.senha,
        (error) => {
          if (error) {
            reject({
              mensagem: error.message,
              erro: true,
            });
          } else {
            resolve({
              mensagem: `Usuário ${novoUsuario.nome} inserido com sucesso`,
              usuario: novoUsuario,
              erro: false,
            });
          }
        }
      );
    });
  };
}

export default UsuarioDAO;
