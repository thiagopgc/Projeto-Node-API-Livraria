import UsuarioDAO from "../DAO/usuarioDAO";
import UsuarioModel from "./schema/model-usuario";

class Usuario {
  constructor(db) {
    this.dao = new UsuarioDAO(db);
  }
}
