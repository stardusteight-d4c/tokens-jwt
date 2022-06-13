import { createHash } from "crypto";

const criarHash = (dado, estrategia) => {
  return createHash(estrategia).update(dado).digest("hex");
};

const senhasComuns = [
  "senha",
  "senha2",
  "senha3",
  "password",
  "admin",
  "ninguemdescobre",
  "qwert",
];

const rainbowTable = senhasComuns.map((senha) => {
  return [senha, criarHash(senha, "sha256")];
});

console.log(rainbowTable);

const hashesVazadasDatabase = [
  "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
  "b7e94be513e96e8c45cd23d162275e5a12ebde9100a425c4ebcdd7fa4dcd897c",
  "bf9153ee3bdd9334e6cac132795608208f2d231e23587b03b1d8ca5b9e067750",
];

hashesVazadasDatabase.map((hashesVazadasDatabase) => {
  rainbowTable.map((parGerado) => {
    if (hashesVazadasDatabase === parGerado[1]) {
      console.log(`Hash ${parGerado[1]}`);
      console.log(`Senha encontrada: ${parGerado[0]} \n`);
    }
  });
});
