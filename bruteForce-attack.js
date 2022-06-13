import { createHash } from "crypto";

class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = this.criarHash(senha);
  }

  criarHash = (senha) => {
    return createHash("sha256").update(senha).digest("hex");
  };

  autenticar = (nome, senha) => {
    if (this.nome === nome && this.senha === this.criarHash(senha)) {
      console.log("Usuário autenticado");
      return true;
    } else {
      console.log("Usuário não autenticado");
      return false;
    }
  };
}

const usuario = new Usuario("João", "joao@email.com", "9247");

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
  if (usuario.autenticar("João", senhaTeste.toString())) {
    console.log(`Senha correta: ${senhaTeste}`);
    break;
  } else if (senhaTeste === 9999) {
    console.log("Senha não encontrada");
  }
}
