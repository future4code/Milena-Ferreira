// Exercício 1
// a) guardamos em uma variável a propriedade process.argv a partir da posição 2, ou seja, process.argv[2];

// b)

const name = process.argv[2];
const age = Number(process.argv[3]);

console.log(`Olá, ${name}! Você tem ${age} anos.`);

// c)
const ageInSevenYears = age + 7;

console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${ageInSevenYears} anos.`);