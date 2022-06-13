const mensagem = "mensagemultrasecreta";


const cifraMensagem = (mensagem, movimentos) => {
  const mensagemCifrada = mensagem.split("").map((caractere) => {
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere + movimentos);
  });
  
  return mensagemCifrada.join("");
};


const decifraMensagem = (mensagem, movimentos) => {
  const mensagemDecifrada = mensagem.split("").map((caractere) => {
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere - movimentos);
  });

  return mensagemDecifrada.join("");
}

mensagemCifrada = cifraMensagem(mensagem, 3);
mensagemDecifrada = decifraMensagem(mensagemCifrada, 3);

console.log(mensagemCifrada);
console.log(mensagemDecifrada);