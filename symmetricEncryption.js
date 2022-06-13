import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

// Encrypting a message
const mensagem = "Uma mensagem muito secreta";
const chave = randomBytes(32);
const vi = randomBytes(16);

const cifra = createCipheriv("aes-256-cbc", chave, vi);
const mensagemCifrada =
  cifra.update(mensagem, "utf8", "hex") + cifra.final("hex");

console.log(mensagemCifrada);

// Decrypting a message
const decifra = createDecipheriv("aes-256-cbc", chave, vi);
const mensagemDecifrada = decifra.update(mensagemCifrada, "hex", "utf8") + decifra.final("utf8");

console.log(mensagemDecifrada);