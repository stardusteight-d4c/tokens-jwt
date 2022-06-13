import { generateKeyPairSync, publicEncrypt, privateDecrypt } from "crypto";

const mensagem = "mensagem ultra secreta";

const { publicKey, privateKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

// console.log(publicKey);
// console.log(privateKey);

const encryptoData = publicEncrypt(publicKey, Buffer.from(mensagem));
console.log(encryptoData.toString("hex"));

// Receving the encrypted message
const decryptoData = privateDecrypt(privateKey, encryptoData);

console.log(decryptoData.toString("utf8"));