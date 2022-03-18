class UsuarioModel {
  constructor(nome, email, telefone, endereco, senha) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
    this.senha = this._validaSenha(senha);
  }

  _validaSenha = (senha) => {
    if (senha.length >= 6) {
      return senha;
    } else {
      throw new Error("A senha precisa ter mais de 6 digítos.");
    }
  };
}

export default UsuarioModel;
