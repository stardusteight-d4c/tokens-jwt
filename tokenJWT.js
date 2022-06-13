import jwt from "jsonwebtoken";

const secretKey = "SuperSecretKey";

const token = jwt.sign(
  { id: 1, name: "John Doe", email: "joemaster@email.com", senha: "123456" },
  secretKey,
  { expiresIn: "15s" }
);

const tokenDecoded = jwt.verify(token, secretKey);

console.log(`token: ${token} \n`);
console.log('tokenDecoded:', tokenDecoded);