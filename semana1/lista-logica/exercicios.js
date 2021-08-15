// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')
  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt("Digite a altura"));
  let largura = Number(prompt("Digite a largura"));
  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = prompt("Informe o ano atual");
  let anoNascimento = prompt("Informe seu ano de nascimento");
  console.log(anoAtual - anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura ** 2);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Informe seu nome");
  let idade = prompt("Informe sua idade");
  let email = prompt("Informe seu email");
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let coresFavoritas = [];
  coresFavoritas.push(prompt("Informe sua cor favorita"));
  coresFavoritas.push(prompt("Informe sua segunda cor favorita"));
  coresFavoritas.push(prompt("Informe sua terceira cor favorita"));
  console.log(coresFavoritas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let troca = array[0]
  array[0] = array[array.length - 1];
  array[array.length -1] = troca;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = Number(prompt("Informe o ano atual"));
  let anoNascimento = Number(prompt("Informe o ano de nascimento do(a) portador(a) do RG"));
  let anoEmissao = Number(prompt("Informe o ano de emissão do RG"));

  let idade = anoAtual - anoNascimento;
  let tempoEmissao = anoAtual - anoEmissao;

  console.log((idade <= 20 && tempoEmissao >= 5)
              || (idade <= 50 && tempoEmissao >= 10)
              || (idade > 50 && tempoEmissao >= 15));
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  mulitplo400 = ano % 400 === 0;
  multiplo4 = ano % 4 === 0;
  multiplo100 = ano % 100 === 0; //
  return mulitplo400 || (multiplo4 && !multiplo100); 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let maior18 = prompt("Você tem mais de 18 anos?");
  let possuiEM = prompt("Você possui ensino médio completo?");
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante o horário do curso?");
  let condicao1 = maior18 === "sim";
  let condicao2 = possuiEM === "sim";
  let condicao3 = disponibilidade === "sim";
  console.log(condicao1 && condicao2 && condicao3);
}