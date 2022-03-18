import UsuarioDAO from "../DAO/usuarioDAO";
import UsuarioModel from "./schema/model-usuario";

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
  pegarUmUsuario = async (email) => {
    try {
      return await this.dao.pegarUmUsuario(email);
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
        usuario.senha
      );
      return await this.dao.inserirUsuario(novoUsuario);
    } catch (error) {
      throw new Error(error.mensagem);
    }
  };
  deletarUsuario = async (id) => {
    try {
      await this._verificaUsuario(id);

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
      await this._verificaUsuario(id);
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
    const resposta = await this.dao.pegarUmUsuarioId(id);
    if (resposta.usuario.length === 0) {
      throw new Error(`Usuario de id ${id} não existe`);
    }
  };
}

export default Usuario;
