// ------------ EXERCÍCIO 3 ------------

// a) tsc exercicio4.ts

type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// b) tsc src/exercicio4.ts

// c) cd src ; tsc arquivo1.ts arquivo2.ts arquivo3.ts ... arquivoX.ts
// ou apenas "cd src; tsc" 

// d) o arquivo gerado pelo tsc --init usa EcmaScript 5, em vez de 6. Tem uma propriedade para facilitar a compatibilidade na transpilação ("esModuleInterop": true). A propriedade "strict" setada para "true" garante que a tipagem não seja dinâmica. "skipLibCheck" setado para "true" não faz a checagem de arquivos com extensão .d.ts