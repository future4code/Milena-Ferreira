// Escreva uma função que pergunta ao usuário
// a data de nascimento de uma pessoa
// e a data de emissão da sua carteira de identidade

// A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não.

// A carteira precisa ser renovada segundo os seguintes critérios:
// - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

function renovarCarteira(dataNascStr: string, dataEmissaoStr: string): boolean {
  let precisaRenovar = false;
  const dataAtual = new Date().getTime();

  const [diaNasc, mesNasc, anoNasc] = dataNascStr.split("/");
  const dataNasc = new Date(`${anoNasc}-${mesNasc}-${diaNasc}`).getTime();
  const idade = (dataAtual - dataNasc) / (1000 * 60 * 60 * 24 * 365);
  console.log("idade", idade)

  const [diaEmissao, mesEmissao, anoEmissao] = dataEmissaoStr.split("/");
  const dataEmissao = new Date(`${anoEmissao}-${mesEmissao}-${diaEmissao}`).getTime();
  const tempoEmissao = (dataAtual - dataEmissao) / (1000 * 60 * 60 * 24 * 365);
  console.log("tempo emissao", tempoEmissao)

  if (idade > 50 && tempoEmissao >= 15) precisaRenovar = true;
  if (idade >= 20 && tempoEmissao >= 10) precisaRenovar = true;
  if (idade < 20 && tempoEmissao >= 5) precisaRenovar = true;

  return precisaRenovar;
}

console.log(renovarCarteira("20/02/2012", "07/03/2017"));
console.log(renovarCarteira("07/05/2002", "20/03/2017"));
console.log(renovarCarteira("30/11/2002", "20/03/2017"));