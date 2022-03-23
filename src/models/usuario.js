import UsuarioDAO from "../DAO/usuarioDAO.js";
import UsuarioModel from "./schema/model-usuario.js";

class Usuario {
  constructor(db) {
    this.dao = new UsuarioDAO(db);
  }
  pegarTodosUsuarios = async () => {
    try {
      return await this.dao.pegarTodosUsuarios();
    } catch (error) {
      throw new Error(error.mensagem);
    }
  };
  filtrarUsuario = async (id) => {
    try {
      return await this.dao.filtrarUsuario(id);
    } catch (error) {
      return {
        mensagem: error.message,
        erro: true,
      };
    }
  };
  inserirUsuario = async (usuario) => {
    try {
      const novoUsuario = new UsuarioModel(
        usuario.nome,
        usuario.email,
        usuario.telefone,
        usuario.endereco,
        usuario.senha
      );
      return await this.dao.inserirUsuario(novoUsuario);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  deletarUsuario = async (id) => {
    try {
      await this._verificarUsuario(id);

      return await this.dao.deletarUsuario(id);
    } catch (error) {
      return {
        mensagem: error.message,
        erro: true,
      };
    }
  };
  atualizarUsuario = async (id, usuario) => {
    try {
      await this._verificarUsuario(id);
      const usuarioAtualizado = new UsuarioModel(
        usuario.nome,
        usuario.email,
        usuario.telefone,
        usuario.endereco,
        usuario.senha
      );

      return await this.dao.atualizarUsuario(id, usuarioAtualizado);
    } catch (error) {
      return {
        mensagem: error.message,
        erro: true,
      };
    }
  };

  _verificarUsuario = async (id) => {
    try {
      const resposta = await this.dao.filtrarUsuario(id);

      if (resposta.usuario.length === 0) {
        throw new Error(`Usuario de id ${id} não existe`);
      }
    } catch (error) {
      return {
        mensagem: error.message,
        erro: true,
      };
    }
  };
}

export default Usuario;
