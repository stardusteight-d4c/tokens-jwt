import { createHash } from "crypto";

const criarHash = (senha) => {
  return createHash("sha256").update(senha).digest("hex");
};

class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = criarHash(senha);
  }

  autenticar(nome, senha) {
    if (this.nome === nome && this.senha === criarHash(senha)) {
      console.log("Usuário autenticado");
      return true;
    } else {
      console.log("Usuário não autenticado");
      return false;
    }
  }
}

const usuario = new Usuario("João", "joao@email.com", "123456");
console.log(usuario);
console.log(usuario.autenticar("João", "123456"));
console.log(usuario.autenticar("Joao", "123456"));
