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
      return true;
    } else {
      return false;
    }
  };
}

const usuario = new Usuario("João", "joao@email.com", "ninguemdescobre");

const senhasVazadasDatabase = [
  "senha",
  "senha2",
  "senha3",
  "password",
  "admin",
  "ninguemdescobre",
  "qwert",
];

senhasVazadasDatabase.map((senha) => {
  if (usuario.autenticar("João", senha)) {
    console.log(`Senha correta: ${senha}`);
  }
});
