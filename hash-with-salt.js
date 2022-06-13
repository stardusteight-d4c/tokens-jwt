import { scryptSync, randomBytes } from "crypto";

const criarHashWithSalt = (senha, salt) => {
  return scryptSync(senha, salt, 64, { N: 16 }).toString("hex");
};

class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = criarHashWithSalt(
      senha,
      (this.salt = randomBytes(16).toString("hex"))
    );
  }

  autenticar = (nome, senha) => {
    if (
      this.nome === nome &&
      this.senha === criarHashWithSalt(senha, this.salt)
    ) {
      console.log("Usuário autenticado");
      return true;
    } else {
      console.log("Usuário não autenticado");
      return false;
    }
  };
}

const usuario = new Usuario("João", "joazingamer@email.com", "123456");
console.log(usuario);
console.log(usuario.autenticar("João", "123456"));
