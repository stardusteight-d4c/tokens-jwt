import { generateKeyPairSync, createSign, createVerify } from "crypto";

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

const createSignature = (datas) => {
  const signer = createSign("rsa-sha256");
  signer.update(datas);
  const signature = signer.sign(privateKey, "hex");
  return signature;
};

const verifySignature = (signature, datas) => {
  const verifier = createVerify("rsa-sha256");
  verifier.update(datas);
  if (verifier.verify(publicKey, signature, "hex")) {
    console.log("Signature is valid");
  } else {
    console.log("Signature is invalid");
  }
};

let message = "This message is signed by me";
const signature = createSignature(message);

// Hacker try to modify the message
message = "This message was intercepted!! :P";

verifySignature(signature, message);
